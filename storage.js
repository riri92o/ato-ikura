"use strict";

/* Local persistence, validation, and backup import/export. */

function defaultFavorites() {
  return [
    { id: "fav_1", title: "ランチ", amount: 1000, category: "食費", paymentMethod: "現金", cardId: "", memo: "ランチ" },
    { id: "fav_2", title: "コンビニ", amount: 600, category: "食費", paymentMethod: "現金", cardId: "", memo: "コンビニ" },
    { id: "fav_3", title: "スーパー", amount: 3000, category: "日用品", paymentMethod: "現金", cardId: "", memo: "スーパー" },
    { id: "fav_4", title: "カフェ", amount: 550, category: "カフェ", paymentMethod: "現金", cardId: "", memo: "カフェ" },
  ];
}
function defaultState() {
  return {
    schemaVersion: 1,
    expenses: [],
    cards: [],
    manualPayments: [],
    subscriptions: [],
    emoneys: [],
    emoneyTransactions: [],
    favorites: defaultFavorites(),
    budgets: {},
    settings: {
      currentBalance: null,
      minimumReserve: null,
      theme: "auto",
      themeColor1: "#185a37",
      themeColor2: "#388f5f",
      bgColor: "#ffffff",
      borderColor: "#e2e8f0",
      gaugeColor: "#34d399",
      skin: "none",
      budgetMode: "usage",
      cycleStartDay: 1,
      homeWidgets: defaultHomeWidgets(),
    },
    updatedAt: new Date().toISOString(),
  };
}
function uid(prefix) {
  const random = window.crypto && typeof window.crypto.randomUUID === "function"
    ? window.crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  return `${prefix}_${random}`;
}
function loadState() {
  try {
    const raw = localStorage.getItem(APP.storageKey);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return sanitizeState(parsed);
  } catch (_error) {
    return defaultState();
  }
}
function sanitizeState(input) {
  const clean = defaultState();
  if (!Core.isValidStateShape(input)) return clean;

  clean.expenses = (input.expenses || [])
    .filter((item) => item && Core.parseDateKey(item.date) && Core.normalizeAmount(item.amount) > 0)
    .map((item) => ({
      id: String(item.id || uid("exp")),
      amount: Core.normalizeAmount(item.amount),
      date: item.date,
      category: CATEGORIES.includes(item.category) ? item.category : "その他",
      paymentMethod: PAYMENT_METHODS.includes(item.paymentMethod) ? item.paymentMethod : "その他",
      cardId: typeof item.cardId === "string" ? item.cardId : "",
      emoneyId: typeof item.emoneyId === "string" ? item.emoneyId : "",
      includeInWithdrawal: item.includeInWithdrawal !== false,
      paymentDateOverride: Core.parseDateKey(item.paymentDateOverride) ? item.paymentDateOverride : "",
      calculatedPaymentDate: Core.parseDateKey(item.calculatedPaymentDate) ? item.calculatedPaymentDate : "",
      memo: String(item.memo || "").slice(0, 200),
      createdAt: String(item.createdAt || new Date().toISOString()),
      updatedAt: String(item.updatedAt || item.createdAt || new Date().toISOString()),
      isSample: Boolean(item.isSample),
    }));

  clean.cards = (input.cards || [])
    .filter((item) => item && String(item.name || "").trim())
    .map((item) => ({
      id: String(item.id || uid("card")),
      name: String(item.name).trim().slice(0, 40),
      closingDay: item.closingDay === "end" ? "end" : Math.min(28, Math.max(1, Number(item.closingDay) || 1)),
      paymentDay: Math.min(31, Math.max(1, Number(item.paymentDay) || 1)),
      paymentMonth: Number(item.paymentMonth) === 0 ? 0 : 1,
      weekendAdjustment: ["none", "previous", "next"].includes(item.weekendAdjustment) ? item.weekendAdjustment : "none",
      color: /^#[0-9a-f]{6}$/i.test(item.color || "") ? item.color : "#4f9d73",
      memo: String(item.memo || "").slice(0, 200),
      createdAt: String(item.createdAt || new Date().toISOString()),
      isSample: Boolean(item.isSample),
    }));

  if (Array.isArray(input.emoneys)) {
    let defaultAssigned = false;
    clean.emoneys = input.emoneys
      .filter((item) => item && typeof item === "object" && String(item.name || "").trim())
      .map((item) => {
        const isDef = Boolean(item.isDefault);
        const keepDefault = isDef && !defaultAssigned;
        if (keepDefault) defaultAssigned = true;
        return {
          id: String(item.id || uid("emoney")),
          name: String(item.name).trim().slice(0, 40),
          initialBalance: Core.normalizeAmount(item.initialBalance),
          color: /^#[0-9a-f]{6}$/i.test(item.color || "") ? item.color : "#ff0033",
          icon: EMONEY_ICONS[item.icon] ? item.icon : "qr",
          isDefault: keepDefault,
          createdAt: String(item.createdAt || new Date().toISOString()),
          updatedAt: String(item.updatedAt || item.createdAt || new Date().toISOString()),
          isSample: Boolean(item.isSample),
        };
      });
  } else {
    clean.emoneys = [];
  }

  if (Array.isArray(input.emoneyTransactions)) {
    clean.emoneyTransactions = input.emoneyTransactions
      .filter((item) => item && typeof item === "object" && Core.parseDateKey(item.date) && Math.abs(Number(item.amount) || 0) > 0)
      .map((item) => ({
        id: String(item.id || uid("emoney_tx")),
        emoneyId: String(item.emoneyId || ""),
        type: ["charge", "adjust", "adjustment", "cancelled_expense"].includes(item.type) ? item.type : "charge",
        amount: (item.type === "adjust" || item.type === "adjustment") ? (Number(item.amount) || Number(item.diff) || 0) : Core.normalizeAmount(item.amount),
        diff: (item.type === "adjust" || item.type === "adjustment") ? (Number(item.diff) || Number(item.amount) || 0) : undefined,
        targetBalance: item.targetBalance !== undefined ? Number(item.targetBalance) : undefined,
        category: typeof item.category === "string" ? item.category : "",
        date: item.date,
        sourceType: ["cash", "card", "bank", "other"].includes(item.sourceType) ? item.sourceType : "cash",
        cardId: typeof item.cardId === "string" ? item.cardId : "",
        memo: String(item.memo || "").slice(0, 200),
        createdAt: String(item.createdAt || new Date().toISOString()),
        deletedAt: typeof item.deletedAt === "string" ? item.deletedAt : "",
        isSample: Boolean(item.isSample),
      }));
  } else {
    clean.emoneyTransactions = [];
  }

  if (Array.isArray(input.subscriptions)) {
    clean.subscriptions = input.subscriptions
      .filter((item) => item && typeof item === "object" && String(item.name || "").trim())
      .map((item) => ({
        id: String(item.id || uid("sub")),
        name: String(item.name).trim().slice(0, 60),
        icon: SUBSCRIPTION_ICONS[item.icon] ? item.icon : "other",
        type: ["fixed", "subscription"].includes(item.type) ? item.type : "fixed",
        amount: Core.normalizeAmount(item.amount),
        amountType: ["fixed", "variable"].includes(item.amountType) ? item.amountType : "fixed",
        interval: ["monthly", "yearly", "once"].includes(item.interval) ? item.interval : "monthly",
        paymentDay: item.paymentDay === "end" ? "end" : Math.min(31, Math.max(1, Number(item.paymentDay) || 1)),
        paymentMonth: Math.min(12, Math.max(1, Number(item.paymentMonth) || 1)),
        oneTimeDate: Core.parseDateKey(item.oneTimeDate) ? item.oneTimeDate : "",
        paymentMethod: PAYMENT_METHODS.includes(item.paymentMethod) ? item.paymentMethod : "口座引き落とし",
        cardId: typeof item.cardId === "string" ? item.cardId : "",
        includeInWithdrawal: item.includeInWithdrawal !== false,
        category: CATEGORIES.includes(item.category) ? item.category : "固定費",
        memo: String(item.memo || "").slice(0, 200),
        isActive: item.isActive !== false,
        createdAt: String(item.createdAt || new Date().toISOString()),
        isSample: Boolean(item.isSample),
      }));
  } else {
    clean.subscriptions = [];
  }

  if (Array.isArray(input.favorites)) {
    clean.favorites = input.favorites
      .filter((item) => item && typeof item === "object" && String(item.title || "").trim())
      .map((item) => ({
        id: String(item.id || uid("fav")),
        title: String(item.title || "").trim().slice(0, 30),
        amount: Core.normalizeAmount(item.amount),
        category: CATEGORIES.includes(item.category) ? item.category : "食費",
        paymentMethod: PAYMENT_METHODS.includes(item.paymentMethod) ? item.paymentMethod : "現金",
        cardId: typeof item.cardId === "string" ? item.cardId : "",
        memo: String(item.memo || "").slice(0, 200),
      }));
  } else {
    clean.favorites = defaultFavorites();
  }

  clean.manualPayments = input.manualPayments
    .filter((item) => item && Core.parseDateKey(item.date) && Core.normalizeAmount(item.amount) > 0)
    .map((item) => ({
      id: String(item.id || uid("manual")),
      cardId: String(item.cardId || ""),
      amount: Core.normalizeAmount(item.amount),
      date: item.date,
      memo: String(item.memo || "").slice(0, 200),
      createdAt: String(item.createdAt || new Date().toISOString()),
      isSample: Boolean(item.isSample),
    }));

  clean.expenses.forEach((expense) => {
    if (expense.paymentMethod !== Core.CREDIT_PAYMENT || expense.paymentDateOverride) return;
    const card = clean.cards.find((item) => item.id === expense.cardId);
    const calculated = Core.calculatePaymentDate(expense.date, card);
    if (calculated) expense.calculatedPaymentDate = calculated;
  });

  clean.budgets = {};
  if (input.budgets && typeof input.budgets === "object" && !Array.isArray(input.budgets)) {
    Object.entries(input.budgets).forEach(([key, b]) => {
      const normalizedKey = typeof key === "string" ? key.replace(/\//g, "-").replace(/^(\d{4})-(\d)$/, "$1-0$2") : "";
      if (/^\d{4}-\d{2}$/.test(normalizedKey)) {
        if (b && typeof b === "object" && !Array.isArray(b)) {
          const usage = parseBudgetValue(b.usage);
          const outflow = parseBudgetValue(b.outflow);
          if (usage !== null || outflow !== null) {
            clean.budgets[normalizedKey] = { usage, outflow };
          }
        } else if (b !== null && b !== undefined) {
          const amount = parseBudgetValue(b);
          if (amount !== null) {
            clean.budgets[normalizedKey] = { usage: amount, outflow: null };
          }
        }
      }
    });
  }

  // 古いバージョンの設定（settings.budget等）からの救済
  const legacyBudget = parseBudgetValue(input.settings?.monthlyBudget ?? input.settings?.budget ?? input.settings?.usageBudget ?? input.budget);
  if (legacyBudget !== null && Object.keys(clean.budgets).length === 0) {
    const currentMonthKey = Core.todayKey().slice(0, 7);
    clean.budgets[currentMonthKey] = { usage: legacyBudget, outflow: null };
  }

  const balance = input.settings?.currentBalance;
  const reserve = input.settings?.minimumReserve;
  clean.settings.currentBalance = balance === null || balance === undefined || balance === "" || !Number.isFinite(Number(balance)) ? null : Core.normalizeAmount(balance);
  clean.settings.minimumReserve = reserve === null || reserve === undefined || reserve === "" || !Number.isFinite(Number(reserve)) ? null : Core.normalizeAmount(reserve);
  clean.settings.theme = ["auto", "light", "dark"].includes(input.settings?.theme) ? input.settings.theme : "auto";
  clean.settings.themeColor1 = /^#[0-9a-f]{6}$/i.test(input.settings?.themeColor1 || "") ? input.settings.themeColor1 : "#185a37";
  clean.settings.themeColor2 = /^#[0-9a-f]{6}$/i.test(input.settings?.themeColor2 || "") ? input.settings.themeColor2 : "#388f5f";
  clean.settings.bgColor = /^#[0-9a-f]{6}$/i.test(input.settings?.bgColor || "") ? input.settings.bgColor : "#ffffff";
  clean.settings.cardBgColor = /^#[0-9a-f]{6}$/i.test(input.settings?.cardBgColor || "") ? input.settings.cardBgColor : null;
  clean.settings.borderColor = /^#[0-9a-f]{6}$/i.test(input.settings?.borderColor || "") ? input.settings.borderColor : "#e2e8f0";
  clean.settings.gaugeColor = /^#[0-9a-f]{6}$/i.test(input.settings?.gaugeColor || "") ? input.settings.gaugeColor : "#34d399";
  clean.settings.usageColor = /^#[0-9a-f]{6}$/i.test(input.settings?.usageColor || "") ? input.settings.usageColor : "#0284c7";
  const skinRaw = input.settings?.skin === "paper" ? "check" : (input.settings?.skin === "aurora" ? "othello" : input.settings?.skin);
  clean.settings.skin = typeof skinRaw === "string" && ["none", "dot", "grid", "check", "paper", "line", "glass", "marble", "leopard", "wave", "diamond", "bubble", "confetti", "moroccan", "starry", "othello", "aurora"].includes(skinRaw) ? (skinRaw === "paper" ? "check" : (skinRaw === "aurora" ? "othello" : (skinRaw === "leopard" ? "marble" : skinRaw))) : "none";
  clean.settings.budgetMode = ["usage", "outflow"].includes(input.settings?.budgetMode) ? input.settings.budgetMode : "usage";
  const cycleDay = input.settings?.cycleStartDay;
  clean.settings.cycleStartDay = cycleDay === "end" ? "end" : Math.min(28, Math.max(1, Number(cycleDay) || 1));

  if (Array.isArray(input.settings?.homeWidgets)) {
    const knownIds = DEFAULT_HOME_WIDGETS.map((w) => w.id);
    const userWidgets = input.settings.homeWidgets
      .filter((w) => w && knownIds.includes(w.id))
      .map((w) => {
        const defaultObj = DEFAULT_HOME_WIDGETS.find((d) => d.id === w.id);
        return {
          id: w.id,
          name: defaultObj ? defaultObj.name : String(w.name || w.id),
          enabled: Boolean(w.enabled),
          groupId: w.groupId ? String(w.groupId) : null,
        };
      });

    DEFAULT_HOME_WIDGETS.forEach((dw) => {
      if (!userWidgets.some((uw) => uw.id === dw.id)) {
        userWidgets.push({ ...dw, groupId: null });
      }
    });
    clean.settings.homeWidgets = userWidgets;
  } else {
    clean.settings.homeWidgets = defaultHomeWidgets();
  }

  clean.updatedAt = String(input.updatedAt || new Date().toISOString());
  return clean;
}
function saveState() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(APP.storageKey, JSON.stringify(state));
}
function exportData() {
  const payload = {
    app: APP.name,
    version: APP.version,
    exportedAt: new Date().toISOString(),
    data: state,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ato-ikura-backup-${Core.todayKey()}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("バックアップを書き出しました。");
}
async function importData(event) {
  const file = event.target.files && event.target.files[0];
  event.target.value = "";
  if (!file) return;
  try {
    const parsed = JSON.parse(await readFileText(file));
    const candidate = parsed && parsed.data ? parsed.data : parsed;
    if (!Core.isValidStateShape(candidate)) throw new Error("invalid");
    const clean = sanitizeState(candidate);
    const budgetCount = Object.keys(clean.budgets || {}).length;
    const budgetInfo = budgetCount > 0 ? `、予算 ${budgetCount}ヶ月分` : "";
    const message = `支出 ${clean.expenses.length}件、カード ${clean.cards.length}枚、確定額 ${clean.manualPayments.length}件${budgetInfo}を読み込みます。\n現在のデータは置き換わります。`;
    const confirmed = await confirmAction("バックアップ内容を確認", message, "読み込む");
    if (!confirmed) return;
    state = clean;
    saveState();
    applyTheme();
    renderAll();
    showToast("バックアップを読み込みました。");
  } catch (_error) {
    await confirmAction("読み込めませんでした", "このアプリから書き出した正しいJSONファイルを選んでください。", "閉じる", false);
  }
}
function readFileText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")), { once: true });
    reader.addEventListener("error", () => reject(reader.error || new Error("File read failed")), { once: true });
    reader.readAsText(file, "UTF-8");
  });
}
