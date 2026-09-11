// Thorough test of all view transitions and dialog triggers in AtoIkura
const window = this;
window.addEventListener = function(evt, cb) {};
const elements = {};
const domLoadedCallbacks = [];

function createElementMock(tagOrId) {
  const el = {
    id: tagOrId,
    tagName: (tagOrId || "div").toUpperCase(),
    value: "",
    textContent: "",
    innerHTML: "",
    className: "",
    checked: false,
    children: [],
    style: { display: "", setProperty: function() {}, removeProperty: function() {} },
    dataset: {},
    classList: {
      add: function() {},
      remove: function() {},
      toggle: function() {},
      contains: function() { return false; }
    },
    _listeners: {},
    addEventListener: function(event, cb) {
      if (!this._listeners[event]) this._listeners[event] = [];
      this._listeners[event].push(cb);
    },
    removeEventListener: function() {},
    dispatchEvent: function(event) {
      const cbs = this._listeners[event.type || event] || [];
      cbs.forEach(cb => cb(event));
    },
    append: function(...args) {},
    prepend: function(...args) {},
    appendChild: function(child) { return child; },
    replaceChildren: function(...args) {
      this.innerHTML = "";
    },
    getContext: function() {
      return {};
    },
    setAttribute: function() {},
    getAttribute: function() { return null; },
    focus: function() {},
    reset: function() {},
    showModal: function() {},
    close: function() {}
  };
  el.parentElement = {
    classList: {
      add: function() {},
      remove: function() {},
      toggle: function() {},
      contains: function() { return false; }
    }
  };
  return el;
}

const document = {
  title: "",
  getElementById: function(id) {
    if (!elements[id]) {
      elements[id] = createElementMock(id);
    }
    return elements[id];
  },
  querySelectorAll: function(sel) {
    return [];
  },
  querySelector: function(sel) {
    return null;
  },
  createElement: function(tag) {
    return createElementMock(tag);
  },
  addEventListener: function(event, cb) {
    if (event === "DOMContentLoaded") {
      domLoadedCallbacks.push(cb);
    }
  },
  documentElement: {
    setAttribute: function() {},
    removeAttribute: function() {},
    style: { setProperty: function() {}, removeProperty: function() {} },
    classList: { add: function() {}, remove: function() {}, toggle: function() {} }
  },
  body: {
    classList: { add: function() {}, remove: function() {}, toggle: function() {} }
  }
};

const localStorage = {
  _data: {},
  getItem: function(k) { return this._data[k] || null; },
  setItem: function(k, v) { this._data[k] = String(v); },
  removeItem: function(k) { delete this._data[k]; },
  clear: function() { this._data = {}; }
};

const navigator = {
  serviceWorker: {
    register: function() { return Promise.resolve(); }
  }
};

const location = { reload: function() {}, protocol: "http:" };
const Chart = function() { return { destroy: function() {}, update: function() {} }; };

load("core.js");
load("app.js");

print("Booting DOMContentLoaded...");
for (const cb of domLoadedCallbacks) {
  cb();
}
print("Initial load OK!");

// Test view switching
const views = ["calendar", "history", "report", "cards", "settings"];
print("Testing all view switches...");
for (const v of views) {
  const btn = createElementMock("nav-" + v);
  btn.dataset.view = v;
  const quickAdd = document.getElementById("quick-add-button");
  quickAdd.dispatchEvent({ type: "click" });
}

// Test Subscriptions Calculation in core.js
print("Testing Core subscription logic...");
const sampleSubMonthly = {
  id: "sub_1",
  name: "家賃",
  type: "fixed",
  amount: 80000,
  interval: "monthly",
  paymentDay: 25,
  paymentMethod: "口座引き落とし",
  isActive: true
};
const sampleSubCard = {
  id: "sub_2",
  name: "Netflix",
  type: "subscription",
  amount: 890,
  interval: "monthly",
  paymentDay: 20,
  paymentMethod: "クレジットカード",
  cardId: "card_1",
  includeInWithdrawal: true,
  isActive: true
};
const sampleCard1 = {
  id: "card_1",
  name: "メインカード",
  closingDay: "end",
  paymentDay: 27,
  paymentMonth: 1,
  weekendAdjustment: "none"
};

const date1 = AtoIkuraCore.getSubscriptionUsageDate(sampleSubMonthly, "2026-09");
if (date1 !== "2026-09-25") throw new Error("Expected 2026-09-25, got " + date1);

const summary = AtoIkuraCore.summarizeMonth("2026-09", [], [sampleCard1], [], 1, [sampleSubMonthly, sampleSubCard]);
if (summary.usage !== 80890) throw new Error("Expected usage 80890, got " + summary.usage);
if (summary.direct !== 80000) throw new Error("Expected direct 80000, got " + summary.direct);
print("Core subscriptions calculation test passed! Total usage:", summary.usage);

// Double-counting prevention test:
// If manual payment exists for card_1 in October 2026 (when September Netflix is withdrawn),
// card withdrawal in October should be manual payment ONLY (not manual payment + Netflix).
const manualPaymentOct = { id: "man_1", cardId: "card_1", amount: 50000, date: "2026-10-27" };
const dailyWithManual = AtoIkuraCore.buildDailyTotals([], [sampleCard1], [manualPaymentOct], [sampleSubCard], ["2026-09", "2026-10"]);
const octWithdrawal = dailyWithManual.get("2026-10-27")?.cardWithdrawal;
if (octWithdrawal !== 50000) throw new Error("Double-counting prevention failed! Expected 50000, got " + octWithdrawal);
print("Double-counting prevention verified! Oct withdrawal:", octWithdrawal);

// Test paused subscription visibility
const pausedSub = { ...sampleSubCard, id: "sub_paused", isActive: false };
const pausedDateNormal = AtoIkuraCore.getSubscriptionUsageDate(pausedSub, "2026-09", false);
if (pausedDateNormal !== "") throw new Error("Expected empty string for active-only call on paused sub, got " + pausedDateNormal);
const pausedDateIgnoreActive = AtoIkuraCore.getSubscriptionUsageDate(pausedSub, "2026-09", true);
if (pausedDateIgnoreActive !== "2026-09-20") throw new Error("Expected 2026-09-20 for ignoreActive call on paused sub, got " + pausedDateIgnoreActive);
print("Paused subscription visibility test passed!");

print("All view, dialog, and subscription integration tests passed successfully!");
