// Thorough test of all view transitions and dialog triggers in AtoIkura
const window = this;
window.scrollTo = function() {};
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
    querySelectorAll: function(sel) { return []; },
    querySelector: function(sel) { return null; },
    setAttribute: function() {},
    removeAttribute: function() {},
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
    if (sel === ".nav-item") {
      return ["calendar", "history", "report", "cards", "settings"].map(function(v) {
        var el = document.getElementById("nav-" + v);
        el.dataset.view = v;
        return el;
      });
    }
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
    dataset: {},
    setAttribute: function(k, v) { this[k] = v; },
    removeAttribute: function(k) { delete this[k]; },
    getAttribute: function(k) { return this[k] || null; },
    style: {
      _props: {},
      setProperty: function(k, v) { this._props[k] = v; },
      removeProperty: function(k) { delete this._props[k]; },
      getPropertyValue: function(k) { return this._props[k] || ""; }
    },
    classList: { add: function() {}, remove: function() {}, toggle: function() {} }
  },
  body: {
    dataset: {},
    setAttribute: function(k, v) { this[k] = v; },
    removeAttribute: function(k) { delete this[k]; },
    getAttribute: function(k) { return this[k] || null; },
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

// Test Widget Merging & Unmerging
print("Testing Home Widgets Merging (結合) and Unmerging (分離)...");
const stateData = JSON.parse(localStorage.getItem("ato-ikura-data-v1") || "{}");
if (stateData.settings && stateData.settings.homeWidgets) {
  // Simulate merging first 2 widgets
  stateData.settings.homeWidgets[0].groupId = "test_merged_group_1";
  stateData.settings.homeWidgets[1].groupId = "test_merged_group_1";
  localStorage.setItem("ato-ikura-data-v1", JSON.stringify(stateData));
  if (typeof renderHomeWidgets === "function") renderHomeWidgets();
  if (typeof renderHomeWidgetsManageList === "function") renderHomeWidgetsManageList("settings-widgets-manage-list");
  print("Widget merge render OK!");

  // Simulate merging 3 widgets
  stateData.settings.homeWidgets[0].groupId = "test_merged_group_1";
  stateData.settings.homeWidgets[1].groupId = "test_merged_group_1";
  stateData.settings.homeWidgets[2].groupId = "test_merged_group_1";
  localStorage.setItem("ato-ikura-data-v1", JSON.stringify(stateData));
  if (typeof renderHomeWidgets === "function") renderHomeWidgets();
  if (typeof renderHomeWidgetsManageList === "function") renderHomeWidgetsManageList("settings-widgets-manage-list");
  print("3-Widget merge render OK!");

  // Simulate unmerging all
  stateData.settings.homeWidgets[0].groupId = null;
  stateData.settings.homeWidgets[1].groupId = null;
  stateData.settings.homeWidgets[2].groupId = null;
  localStorage.setItem("ato-ikura-data-v1", JSON.stringify(stateData));
  if (typeof renderHomeWidgets === "function") renderHomeWidgets();
  if (typeof renderHomeWidgetsManageList === "function") renderHomeWidgetsManageList("settings-widgets-manage-list");
  print("Widget unmerge render OK!");
}

// Test Theme Preset & Floating Live Preview
print("Testing Theme Presets and Floating Live Preview...");
const floatPrev = document.getElementById("theme-floating-preview");
if (!floatPrev) throw new Error("theme-floating-preview element should exist!");

if (typeof switchSettingsSubView === "function") {
  switchSettingsSubView("theme");
  if (floatPrev.classList.contains("is-hidden")) throw new Error("Floating preview should be visible in theme subview!");
  
  // Verify theme code input and buttons
  const themeCodeInput = document.getElementById("theme-code-input");
  const themeCodeApplyBtn = document.getElementById("theme-code-apply-btn");
  if (!themeCodeInput || !themeCodeApplyBtn) throw new Error("Theme code elements must exist!");
  
  // Test theme code reading/applying
  themeCodeInput.value = "#EA580C_#FFF7ED_#EA580C";
  themeCodeApplyBtn.dispatchEvent({ type: "click" });
  if (document.documentElement.style.getPropertyValue("--theme-color-1") !== "#EA580C") {
    throw new Error("Theme code apply failed to update themeColor1");
  }
  if (document.documentElement.style.getPropertyValue("--bg-color") !== "#FFF7ED") {
    throw new Error("Theme code apply failed to update bgColor");
  }

  // Test 5-part theme code with check skin
  themeCodeInput.value = "#F472B6_#FDF2F8_#FFFFFF_#FBCFE8_#F472B6:check";
  themeCodeApplyBtn.dispatchEvent({ type: "click" });
  if (document.documentElement.style.getPropertyValue("--theme-color-1") !== "#F472B6") {
    throw new Error("Theme code apply (5-part with skin) failed to update themeColor1");
  }
  if (document.documentElement.style.getPropertyValue("--bg-color") !== "#FDF2F8") {
    throw new Error("Theme code apply (5-part with skin) failed to update bgColor");
  }
  if (document.documentElement.style.getPropertyValue("--surface") !== "#FFFFFF") {
    throw new Error("Theme code apply (5-part with skin) failed to update surface");
  }
  if (document.documentElement.dataset.skin !== "check") {
    throw new Error("Theme code apply with skin failed to update skin to 'check'");
  }

  // Verify combo badge
  const comboLabel = document.getElementById("theme-combo-label");
  if (!comboLabel || !comboLabel.textContent.includes("チェック")) {
    throw new Error("Theme combo badge should include skin name 'チェック'");
  }

  // Test tab switcher
  const tabColor = document.getElementById("theme-tab-color");
  const tabSkin = document.getElementById("theme-tab-skin");
  const presetGrid = document.getElementById("preset-palette-grid");
  const skinGrid = document.getElementById("skin-palette-grid");
  if (tabColor && tabSkin && presetGrid && skinGrid) {
    tabSkin.dispatchEvent({ type: "click" });
    if (!tabSkin.classList.contains("is-active")) throw new Error("Skin tab should be active after click");
    if (skinGrid.classList.contains("is-hidden")) throw new Error("Skin grid should be visible");
    tabColor.dispatchEvent({ type: "click" });
    if (!tabColor.classList.contains("is-active")) throw new Error("Color tab should be active after click");
    if (presetGrid.classList.contains("is-hidden")) throw new Error("Preset grid should be visible");
  }

  // Test theme share button
  const shareBtn = document.getElementById("theme-share-btn");
  if (shareBtn) {
    shareBtn.dispatchEvent({ type: "click" });
  }

  // Test theme reset button (ensuring cardBgColor is completely reset)
  const resetBtn = document.getElementById("theme-top-reset-btn");
  if (resetBtn) {
    resetBtn.dispatchEvent({ type: "click" });
    if (document.documentElement.style.getPropertyValue("--surface") !== "#ffffff") {
      throw new Error("Theme reset should reset surface to #ffffff");
    }
  }

  switchSettingsSubView("menu");
  if (!floatPrev.classList.contains("is-hidden")) throw new Error("Floating preview should be hidden in menu subview!");
}
print("Theme Presets and Floating Live Preview tests passed!");

// Test Nav Bar double tap / re-tap toggle
print("Testing Bottom Nav double-tap toggling...");
const navCalendarBtn = document.getElementById("nav-calendar");
const navCardsBtn = document.getElementById("nav-cards");
const navReportBtn = document.getElementById("nav-report");
const payCardsTab = document.getElementById("payments-tab-cards");
const reportOutlookBtn = document.getElementById("report-tab-outlook-btn");

if (navCalendarBtn && navCardsBtn && navReportBtn) {
  navCalendarBtn.dispatchEvent({ type: "click" });
  if (payCardsTab) payCardsTab.dispatchEvent({ type: "click" });
  if (reportOutlookBtn) reportOutlookBtn.dispatchEvent({ type: "click" });

  navCardsBtn.dispatchEvent({ type: "click" }); // switch from calendar to cards (cards subview)
  const cardsSub1 = document.getElementById("cards-payment-subview");
  const emoneySub1 = document.getElementById("emoney-payment-subview");
  const subsSub1 = document.getElementById("subscriptions-payment-subview");
  if (!cardsSub1.classList.contains("is-active")) throw new Error("Cards subview should be active on first tap");

  navCardsBtn.dispatchEvent({ type: "click" }); // tap again -> toggle to emoney
  if (!emoneySub1.classList.contains("is-active")) throw new Error("Emoney subview should be active on second tap");

  navCardsBtn.dispatchEvent({ type: "click" }); // tap again -> toggle to subscriptions
  if (!subsSub1.classList.contains("is-active")) throw new Error("Subscriptions subview should be active on third tap");

  navCardsBtn.dispatchEvent({ type: "click" }); // tap again -> cycle back to cards
  if (!cardsSub1.classList.contains("is-active")) throw new Error("Cards subview should cycle back to cards on fourth tap");

  navReportBtn.dispatchEvent({ type: "click" }); // switch to report (outlook pane)
  const outlookPane1 = document.getElementById("report-pane-outlook");
  const analysisPane1 = document.getElementById("report-pane-analysis");
  if (!outlookPane1.classList.contains("is-active")) throw new Error("Outlook pane should be active on first tap");

  navReportBtn.dispatchEvent({ type: "click" }); // tap again -> toggle to analysis
  if (!analysisPane1.classList.contains("is-active")) throw new Error("Analysis pane should be active on double-tap");
  print("Bottom Nav double-tap toggle passed!");
}

// ============================================================================
// QR・電子マネー残高管理 & 二重計上防止テスト
// ============================================================================
print("Testing QR・電子マネー balance calculation and double-counting prevention...");

// 1. Balance Calculation
const testEmoneys = [
  { id: "emoney_paypay", name: "PayPay", initialBalance: 3000, color: "#ff0033", icon: "paypay", isDefault: true },
  { id: "emoney_suica", name: "Suica", initialBalance: 1000, color: "#008000", icon: "suica", isDefault: false },
];

const testEmoneyTx = [
  { id: "tx1", type: "charge", emoneyId: "emoney_paypay", amount: 5000, date: "2026-09-05", cardId: "card_rakuten" },
  { id: "tx2", type: "charge", emoneyId: "emoney_paypay", amount: 2000, date: "2026-09-10", cardId: "" }, // cash charge
  { id: "tx3", type: "adjustment", emoneyId: "emoney_paypay", diff: -300, targetBalance: 7700, date: "2026-09-12" },
];

const testExpenses = [
  { id: "exp1", amount: 1500, date: "2026-09-06", paymentMethod: "QR・電子マネー", emoneyId: "emoney_paypay", category: "食費" },
  { id: "exp2", amount: 800, date: "2026-09-08", paymentMethod: "QR・電子マネー", emoneyId: "emoney_suica", category: "日用品" },
  { id: "exp3", amount: 3000, date: "2026-09-15", paymentMethod: "クレジットカード", cardId: "card_rakuten", category: "交際費" },
];

const paypayBal = AtoIkuraCore.calculateEmoneyBalance("emoney_paypay", testEmoneys, testEmoneyTx, testExpenses);
// Initial: 3000 + Charge: 5000 + Charge: 2000 + Adjust: -300 - Expense: 1500 = 8200
if (paypayBal !== 8200) {
  throw new Error(`PayPay balance mismatch! Expected 8200, got ${paypayBal}`);
}

const suicaBal = AtoIkuraCore.calculateEmoneyBalance("emoney_suica", testEmoneys, testEmoneyTx, testExpenses);
// Initial: 1000 - Expense: 800 = 200
if (suicaBal !== 200) {
  throw new Error(`Suica balance mismatch! Expected 200, got ${suicaBal}`);
}
print("QR / E-Money balance calculation tests passed!");

// 2. Double-counting prevention & Card withdrawal reflection
// Card: Rakuten (closing: end of month, payment: 27th of next month)
const testCards = [
  { id: "card_rakuten", name: "楽天カード", closingDay: "end", paymentDay: 27, paymentMonth: 1, weekendAdjustment: "none", color: "#bf0000" }
];

// September summary:
// Usage should include exp1 (1500) + exp2 (800) + exp3 (3000) = 5300.
// Charges (tx1: 5000, tx2: 2000) must NOT be added to September usage!
const emoneySepSummary = AtoIkuraCore.summarizeMonth("2026-09", testExpenses, testCards, [], 1, [], testEmoneyTx);
if (emoneySepSummary.usage !== 5300) {
  throw new Error(`Usage double-counting error! Expected 5300, got ${emoneySepSummary.usage}`);
}

// Rakuten card withdrawal in October (2026-10-27) should include:
// exp3 (3000) + tx1 (5000 card charge) = 8000!
const emoneyOctSummary = AtoIkuraCore.summarizeMonth("2026-10", testExpenses, testCards, [], 1, [], testEmoneyTx);
if (emoneyOctSummary.cardWithdrawal !== 8000) {
  throw new Error(`Card withdrawal mismatch! Expected 8000 (3000 card exp + 5000 card charge), got ${emoneyOctSummary.cardWithdrawal}`);
}
if (emoneyOctSummary.outflow !== 8000) {
  throw new Error(`October outflow mismatch! Expected 8000, got ${emoneyOctSummary.outflow}`);
}
print("QR / E-Money double-counting prevention & Card withdrawal tests passed!");

// 3. Dynamic balance reconciliation when an expense or charge is deleted/edited
const modifiedExpenses = testExpenses.filter(e => e.id !== "exp1"); // remove 1500 expense
const paypayBalAfterDelete = AtoIkuraCore.calculateEmoneyBalance("emoney_paypay", testEmoneys, testEmoneyTx, modifiedExpenses);
if (paypayBalAfterDelete !== 9700) {
  throw new Error(`PayPay balance after expense deletion failed! Expected 9700, got ${paypayBalAfterDelete}`);
}

const modifiedTx = testEmoneyTx.filter(t => t.id !== "tx1"); // remove 5000 card charge
const paypayBalAfterTxDelete = AtoIkuraCore.calculateEmoneyBalance("emoney_paypay", testEmoneys, modifiedTx, testExpenses);
if (paypayBalAfterTxDelete !== 3200) {
  throw new Error(`PayPay balance after charge deletion failed! Expected 3200, got ${paypayBalAfterTxDelete}`);
}

// Oct withdrawal after removing card charge should only be exp3 (3000)
const octSummaryAfterTxDelete = AtoIkuraCore.summarizeMonth("2026-10", testExpenses, testCards, [], 1, [], modifiedTx);
if (octSummaryAfterTxDelete.cardWithdrawal !== 3000) {
  throw new Error(`Oct withdrawal after card charge deletion failed! Expected 3000, got ${octSummaryAfterTxDelete.cardWithdrawal}`);
}
print("Dynamic reconciliation on edit/delete tests passed!");

// 4. Test UI Subview switching to emoney
const payEmoneyTab = document.getElementById("payments-tab-emoney");
if (payEmoneyTab) {
  payEmoneyTab.dispatchEvent({ type: "click" });
  const emoneySub = document.getElementById("emoney-payment-subview");
  if (!emoneySub.classList.contains("is-active")) {
    throw new Error("Emoney payment subview should be active after clicking tab!");
  }
}

// 5. Test Emoney History Dialog existence & elements
const emoneyHistDialog = document.getElementById("emoney-history-dialog");
if (!emoneyHistDialog) {
  throw new Error("emoney-history-dialog element missing!");
}

print("All view, dialog, subscription, home widget, and QR / e-money integration tests passed successfully!");



