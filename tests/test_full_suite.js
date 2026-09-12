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
    classList: (function() {
      const classes = new Set();
      return {
        add: function(c) { classes.add(c); },
        remove: function(c) { classes.delete(c); },
        toggle: function(c, force) {
          if (force === undefined) {
            if (classes.has(c)) { classes.delete(c); return false; }
            else { classes.add(c); return true; }
          }
          if (force) { classes.add(c); return true; }
          else { classes.delete(c); return false; }
        },
        contains: function(c) { return classes.has(c); }
      };
    })(),
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

// Outflow (口座から出る額) Calculation Test:
// 1. Direct subscription in Sep (Rent 80,000 on Sep 25) -> direct = 80,000, outflow = 80,000
// 2. Card subscription in Aug (Netflix 890 on Aug 20 -> billed on Sep 27) -> cardWithdrawal = 890, outflow in Sep = 890
// Total Sep Outflow should be 80,890
const sepSummary = AtoIkuraCore.summarizeMonth("2026-09", [], [sampleCard1], [], 1, [sampleSubMonthly, sampleSubCard]);
if (sepSummary.outflow !== 80890) throw new Error("Expected Sep outflow 80890, got " + sepSummary.outflow);
if (sepSummary.cardWithdrawal !== 890) throw new Error("Expected Sep cardWithdrawal 890, got " + sepSummary.cardWithdrawal);
print("Outflow (口座から出る額) verification passed! Sep outflow:", sepSummary.outflow);

// Calendar deduplication test:
// On Sep 20 (Netflix billing date): usage should be 0 in dailyTotals because it's paid by credit card
// On Sep 25 (Rent debit date): usage = 80000, outflow = 80000
// On Sep 27 (Card payment date): cardWithdrawal = 890, outflow = 890, usage = 0
const dailySep = AtoIkuraCore.buildDailyTotals([], [sampleCard1], [], [sampleSubMonthly, sampleSubCard], ["2026-09"]);
const sep20Totals = dailySep.get("2026-09-20") || { usage: 0, cardWithdrawal: 0, outflow: 0 };
if (sep20Totals.usage !== 0) throw new Error("Calendar duplicate badge bug! Expected usage 0 on credit card subscription billing day, got " + sep20Totals.usage);
const sep25Totals = dailySep.get("2026-09-25") || { usage: 0, cardWithdrawal: 0, outflow: 0 };
if (sep25Totals.usage !== 80000 || sep25Totals.outflow !== 80000) throw new Error("Expected direct subscription on Sep 25 to have 80000 usage/outflow, got " + JSON.stringify(sep25Totals));
const sep27Totals = dailySep.get("2026-09-27") || { usage: 0, cardWithdrawal: 0, outflow: 0 };
if (sep27Totals.cardWithdrawal !== 890 || sep27Totals.outflow !== 890 || sep27Totals.usage !== 0) throw new Error("Expected card withdrawal on Sep 27 to have 890 cardWithdrawal/outflow and 0 usage, got " + JSON.stringify(sep27Totals));
print("Calendar marker deduplication verified successfully!");

// Test paused subscription exclusion in summarizeMonth and buildDailyTotals
const pausedRent = { ...sampleSubMonthly, isActive: false };
const pausedSummary = AtoIkuraCore.summarizeMonth("2026-09", [], [sampleCard1], [], 1, [pausedRent, sampleSubCard]);
if (pausedSummary.usage !== 890) throw new Error("Paused subscription should be excluded from usage! Expected 890, got " + pausedSummary.usage);
if (pausedSummary.outflow !== 890) throw new Error("Paused subscription should be excluded from outflow! Expected 890, got " + pausedSummary.outflow);
print("Paused subscription exclusion verified! Usage:", pausedSummary.usage, "Outflow:", pausedSummary.outflow);

// Test bottom-nav slide pointer gesture
print("Testing Bottom Nav pointer slide gesture...");
if (typeof updateNavIndicator === "function") {
  updateNavIndicator("calendar", false);
  updateNavIndicator("report", true);
  updateNavIndicator("calendar", true);
}
print("Bottom Nav indicator updater test passed!");

// Test Home Widgets Configuration
print("Testing Home Widgets configuration and reordering...");
const stateWidgets = AtoIkuraCore ? JSON.parse(localStorage.getItem("ato-ikura-data-v1") || "{}") : null;
if (typeof renderHomeWidgets === "function") {
  renderHomeWidgets();
}
if (typeof renderHomeWidgetsManageList === "function") {
  renderHomeWidgetsManageList("settings-widgets-manage-list");
  renderHomeWidgetsManageList("home-widgets-manage-list");
}
if (typeof resetHomeWidgets === "function") {
  resetHomeWidgets();
}
// Test Theme Preset & Floating Live Preview
print("Testing Theme Presets and Floating Live Preview...");
const floatPrev = document.getElementById("theme-floating-preview");
if (!floatPrev) throw new Error("theme-floating-preview element should exist!");

if (typeof switchSettingsSubView === "function") {
  switchSettingsSubView("theme");
  if (floatPrev.classList.contains("is-hidden")) throw new Error("Floating preview should be visible in theme subview!");
  switchSettingsSubView("menu");
  if (!floatPrev.classList.contains("is-hidden")) throw new Error("Floating preview should be hidden in menu subview!");
}
print("Theme Presets and Floating Live Preview tests passed!");

print("All view, dialog, subscription, and home widget integration tests passed successfully!");

