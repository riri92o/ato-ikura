(function () {
  "use strict";

  const Core = window.AtoIkuraCore;
  const APP = {
    name: "あといくら",
    version: "1.4.0",
    storageKey: "ato-ikura-data-v1",
    onboardedKey: "ato-ikura-onboarded-v1",
  };

  const THEME_PRESETS = [
    {
      name: "🌿 フォレスト（標準）",
      themeColor1: "#185a37",
      bgColor: "#ffffff",
      borderColor: "#e2e8f0",
      gaugeColor: "#34d399",
      usageColor: "#0284c7",
      theme: "auto",
    },
    {
      name: "🌸 サクラ・ラテ",
      themeColor1: "#a83260",
      bgColor: "#fffafb",
      borderColor: "#fed7e2",
      gaugeColor: "#f472b6",
      usageColor: "#e11d48",
      theme: "light",
    },
    {
      name: "🌙 ミッドナイト・ダーク",
      themeColor1: "#68b98b",
      bgColor: "#111712",
      borderColor: "#344039",
      gaugeColor: "#34d399",
      usageColor: "#77b3e7",
      theme: "dark",
    },
    {
      name: "☕ カプチーノ・モカ",
      themeColor1: "#78350f",
      bgColor: "#fefcf9",
      borderColor: "#e7dfd5",
      gaugeColor: "#d97706",
      usageColor: "#b45309",
      theme: "light",
    },
    {
      name: "🌊 オーシャン・ブルー",
      themeColor1: "#1e40af",
      bgColor: "#f8fafc",
      borderColor: "#cbd5e1",
      gaugeColor: "#38bdf8",
      usageColor: "#2563eb",
      theme: "light",
    },
    {
      name: "🍊 ビタミン・シトラス",
      themeColor1: "#c2410c",
      bgColor: "#fffcf7",
      borderColor: "#fed7aa",
      gaugeColor: "#fb923c",
      usageColor: "#ea580c",
      theme: "light",
    },
    {
      name: "🪻 ラベンダー・パステル",
      themeColor1: "#6b21a8",
      bgColor: "#faf5ff",
      borderColor: "#e9d5ff",
      gaugeColor: "#a855f7",
      usageColor: "#7c3aed",
      theme: "light",
    },
    {
      name: "🖤 モノトーン・ミニマル",
      themeColor1: "#334155",
      bgColor: "#f8fafc",
      borderColor: "#e2e8f0",
      gaugeColor: "#64748b",
      usageColor: "#0f172a",
      theme: "light",
    },
  ];

  const CATEGORIES = ["食費", "日用品", "交通", "娯楽", "旅行", "衣服", "医療", "固定費", "その他"];
  const PAYMENT_METHODS = ["現金", "クレジットカード", "デビットカード", "QR・電子マネー", "口座引き落とし", "その他"];
  const CATEGORY_ICONS = {
    食費: "食",
    日用品: "日",
    交通: "交",
    娯楽: "楽",
    旅行: "旅",
    衣服: "服",
    医療: "医",
    固定費: "固",
    その他: "他",
  };

  const SUBSCRIPTION_ICONS = {
    home: { name: "家", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>` },
    phone: { name: "スマホ", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>` },
    wifi: { name: "通信/Wi-Fi", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>` },
    tv: { name: "動画", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>` },
    music: { name: "音楽", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>` },
    game: { name: "ゲーム", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line><rect x="2" y="6" width="20" height="12" rx="4"></rect></svg>` },
    cloud: { name: "クラウド", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>` },
    bolt: { name: "電気", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>` },
    flame: { name: "ガス", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>` },
    droplet: { name: "水道", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>` },
    shield: { name: "保険", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>` },
    train: { name: "交通/定期", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"></rect><path d="M4 11h16"></path><path d="M12 3v8"></path><path d="M8 19l-3 3"></path><path d="M16 19l3 3"></path><circle cx="8" cy="15" r="1"></circle><circle cx="16" cy="15" r="1"></circle></svg>` },
    car: { name: "車/ガソリン", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>` },
    dumbbell: { name: "ジム", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12"></path></svg>` },
    sparkles: { name: "美容", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.885L19.798 10.8 13.912 12.715 12 18.6 10.088 12.715 4.202 10.8l5.886-1.915L12 3z"></path></svg>` },
    book: { name: "教育/本", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>` },
    users: { name: "家族/生活", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>` },
    shopping: { name: "買い物", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>` },
    other: { name: "その他", svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>` },
  };

  const DEFAULT_HOME_WIDGETS = [
    { id: "budget-summary", name: "予算・残額サマリー", enabled: true },
    { id: "budget-gauge", name: "予算進捗ゲージ", enabled: true },
    { id: "smart-advisor", name: "スマートアドバイザー", enabled: true },
    { id: "breakdown", name: "出金・カード内訳", enabled: true },
    { id: "calendar", name: "月間カレンダー", enabled: true },
    { id: "balance-outlook", name: "口座残高・見通し", enabled: false },
    { id: "upcoming-withdrawals", name: "直近のカード引落予定", enabled: false },
    { id: "category-top3", name: "今月の支出TOP3", enabled: false },
    { id: "weekly-summary", name: "今週の支出サマリー", enabled: false },
  ];

  function defaultHomeWidgets() {
    return DEFAULT_HOME_WIDGETS.map((item) => ({ ...item }));
  }

  let state = loadState();
  let currentMonth = firstOfMonth(Core.todayKey());
  let reportMonth = currentMonth;
  let subscriptionMonth = currentMonth;
  let currentView = "calendar";
  let currentPaymentsSubview = "cards";
  let subscriptionScope = "month";
  let subscriptionFilterPay = "all";
  let subscriptionFilterType = "all";
  let selectedDetailSubId = "";
  let reportSubTab = "outlook";
  let isSummaryBreakdownOpen = false;
  let categoryChartInstance = null;
  let trendChartInstance = null;
  let toastTimer = null;

  const $ = (id) => document.getElementById(id);

  document.addEventListener("DOMContentLoaded", initialize);

  function initialize() {
    initSplashScreen();
    document.title = APP.name;
    const titleEl = $("app-title");
    if (titleEl) titleEl.textContent = APP.name;
    $("app-version").textContent = `${APP.name} v${APP.version}`;
    populateStaticSelects();
    bindEvents();
    applyTheme();
    setupHomeWidgetsDragAndDrop();
    $("history-month").value = currentMonth.slice(0, 7);
    renderAll();
    registerServiceWorker();
    checkFirstTimeOnboarding();
  }

  function initSplashScreen() {
    const splash = $("app-splash-screen");
    if (!splash) return;
    const hideSplash = () => {
      splash.classList.add("is-hidden");
      setTimeout(() => {
        splash.style.display = "none";
      }, 450);
    };
    setTimeout(hideSplash, 850);
    splash.addEventListener("click", hideSplash, { once: true });
  }

  function checkFirstTimeOnboarding() {
    const hasOnboarded = localStorage.getItem(APP.onboardedKey);
    const hasData = state.expenses.length > 0 || state.cards.length > 0 || Object.keys(state.budgets || {}).length > 0;
    if (!hasOnboarded && !hasData) {
      window.setTimeout(() => {
        const dialog = $("onboarding-dialog");
        if (dialog) showDialog(dialog);
      }, 250);
    }
  }

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
    clean.settings.borderColor = /^#[0-9a-f]{6}$/i.test(input.settings?.borderColor || "") ? input.settings.borderColor : "#e2e8f0";
    clean.settings.gaugeColor = /^#[0-9a-f]{6}$/i.test(input.settings?.gaugeColor || "") ? input.settings.gaugeColor : "#34d399";
    clean.settings.usageColor = /^#[0-9a-f]{6}$/i.test(input.settings?.usageColor || "") ? input.settings.usageColor : "#0284c7";
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
          };
        });

      DEFAULT_HOME_WIDGETS.forEach((dw) => {
        if (!userWidgets.some((uw) => uw.id === dw.id)) {
          userWidgets.push({ ...dw });
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

  function populateStaticSelects() {
    fillSelect($("expense-category"), CATEGORIES.map((value) => ({ value, label: value })));
    fillSelect($("expense-payment"), PAYMENT_METHODS.map((value) => ({ value, label: value })));
    fillSelect($("history-category"), [{ value: "", label: "すべて" }, ...CATEGORIES.map((value) => ({ value, label: value }))]);
    fillSelect($("history-payment"), [{ value: "", label: "すべて" }, ...PAYMENT_METHODS.map((value) => ({ value, label: value }))]);

    const closingOptions = [{ value: "end", label: "月末" }];
    const paymentOptions = [];
    for (let day = 1; day <= 28; day += 1) {
      closingOptions.push({ value: String(day), label: `${day}日` });
    }
    for (let day = 1; day <= 31; day += 1) {
      paymentOptions.push({ value: String(day), label: `${day}日` });
    }
    fillSelect($("card-closing-day"), closingOptions);
    fillSelect($("card-payment-day"), paymentOptions);
    $("card-payment-day").value = "27";

    const cycleOptions = [
      { value: "1", label: "毎月1日（1日〜末日・カレンダー月）" },
      { value: "5", label: "毎月5日（5日〜翌月4日）" },
      { value: "10", label: "毎月10日（10日〜翌月9日）" },
      { value: "15", label: "毎月15日（15日〜翌月14日）" },
      { value: "20", label: "毎月20日（20日〜翌月19日）" },
      { value: "25", label: "毎月25日（25日〜翌月24日）" },
    ];
    for (let day = 2; day <= 28; day += 1) {
      if (![5, 10, 15, 20, 25].includes(day)) {
        cycleOptions.push({ value: String(day), label: `毎月${day}日（${day}日〜翌月${day - 1}日）` });
      }
    }
    cycleOptions.sort((a, b) => {
      const aNum = Number(a.value) || 999;
      const bNum = Number(b.value) || 999;
      return aNum - bNum;
    });
    cycleOptions.push({ value: "end", label: "毎月末日（月末〜翌月末日前日）" });
    fillSelect($("setting-cycle-start-day"), cycleOptions);

    // 固定費・サブスク用セレクト
    const subDayOptions = [];
    for (let day = 1; day <= 31; day += 1) {
      subDayOptions.push({ value: String(day), label: `毎月${day}日` });
    }
    subDayOptions.push({ value: "end", label: "毎月末日" });
    const subDayEl = $("sub-day-select");
    if (subDayEl) fillSelect(subDayEl, subDayOptions);

    const subCategoryEl = $("sub-category-select");
    if (subCategoryEl) fillSelect(subCategoryEl, CATEGORIES.map((value) => ({ value, label: value })));
  }

  function fillSelect(select, options) {
    const nodes = options.map((item) => {
      const option = document.createElement("option");
      option.value = item.value;
      option.textContent = item.label;
      return option;
    });
    select.replaceChildren(...nodes);
  }

  function bindEvents() {
    $("prev-month").addEventListener("click", () => moveMonth(-1));
    $("next-month").addEventListener("click", () => moveMonth(1));
    const todayBtn = $("today-button");
    if (todayBtn) todayBtn.addEventListener("click", goToday);
    $("month-picker-button").addEventListener("click", () => {
      const picker = $("month-picker");
      picker.value = currentMonth.slice(0, 7);
      if (typeof picker.showPicker === "function") picker.showPicker();
      else picker.click();
    });
    $("month-picker").addEventListener("change", (event) => {
      if (/^\d{4}-\d{2}$/.test(event.target.value)) {
        currentMonth = `${event.target.value}-01`;
        renderCalendarView();
      }
    });

    $("report-prev-month").addEventListener("click", () => moveReportMonth(-1));
    $("report-next-month").addEventListener("click", () => moveReportMonth(1));
    $("report-month-picker-button").addEventListener("click", () => {
      const picker = $("report-month-picker");
      picker.value = reportMonth.slice(0, 7);
      if (typeof picker.showPicker === "function") picker.showPicker();
      else picker.click();
    });
    $("report-month-picker").addEventListener("change", (event) => {
      if (/^\d{4}-\d{2}$/.test(event.target.value)) {
        reportMonth = `${event.target.value}-01`;
        renderReport();
      }
    });

    const reportOutlookBtn = $("report-tab-outlook-btn");
    const reportAnalysisBtn = $("report-tab-analysis-btn");
    if (reportOutlookBtn) reportOutlookBtn.addEventListener("click", () => switchReportSubTab("outlook"));
    if (reportAnalysisBtn) reportAnalysisBtn.addEventListener("click", () => switchReportSubTab("analysis"));

    const smartAdvisor = $("smart-advisor-banner");
    if (smartAdvisor) smartAdvisor.addEventListener("click", () => nextSmartAdvice("advisor"));
    const smartAdvisorUnset = $("smart-advisor-banner-unset");
    if (smartAdvisorUnset) smartAdvisorUnset.addEventListener("click", () => nextSmartAdvice("advisor"));

    const reportAdvisor = $("report-smart-advisor-banner");
    if (reportAdvisor) reportAdvisor.addEventListener("click", () => nextSmartAdvice("report-advisor"));

    document.querySelectorAll(".nav-item").forEach((button) => {
      button.addEventListener("click", () => switchView(button.dataset.view));
    });
    $("quick-add-button").addEventListener("click", () => openExpenseDialog(Core.todayKey()));
    $("add-card-button").addEventListener("click", () => openCardDialog());
    $("open-balance-settings").addEventListener("click", () => {
      switchView("settings");
      switchSettingsSubView("balance");
    });

    // 支払い画面（カード / 固定費・サブスク）切り替え
    const payTabCards = $("payments-tab-cards");
    if (payTabCards) payTabCards.addEventListener("click", () => switchPaymentsSubview("cards"));
    const payTabSubs = $("payments-tab-subscriptions");
    if (payTabSubs) payTabSubs.addEventListener("click", () => switchPaymentsSubview("subscriptions"));

    // 固定費・サブスク ツールバー＆フィルター
    const subPrev = $("sub-prev-month");
    if (subPrev) subPrev.addEventListener("click", () => moveSubscriptionMonth(-1));
    const subNext = $("sub-next-month");
    if (subNext) subNext.addEventListener("click", () => moveSubscriptionMonth(1));
    const subPickerBtn = $("sub-month-picker-button");
    if (subPickerBtn) {
      subPickerBtn.addEventListener("click", () => {
        const picker = $("sub-month-picker");
        picker.value = subscriptionMonth.slice(0, 7);
        if (typeof picker.showPicker === "function") picker.showPicker();
        else picker.click();
      });
    }
    const subPicker = $("sub-month-picker");
    if (subPicker) {
      subPicker.addEventListener("change", (event) => {
        if (/^\d{4}-\d{2}$/.test(event.target.value)) {
          subscriptionMonth = `${event.target.value}-01`;
          renderSubscriptionsView();
        }
      });
    }

    const addSubBtn = $("add-subscription-button");
    if (addSubBtn) addSubBtn.addEventListener("click", () => openSubscriptionDialog());
    const emptyAddSubBtn = $("sub-empty-add-btn");
    if (emptyAddSubBtn) emptyAddSubBtn.addEventListener("click", () => openSubscriptionDialog());

    const scopeMonth = $("sub-scope-month");
    if (scopeMonth) scopeMonth.addEventListener("click", () => switchSubscriptionScope("month"));
    const scopeAll = $("sub-scope-all");
    if (scopeAll) scopeAll.addEventListener("click", () => switchSubscriptionScope("all"));

    document.querySelectorAll("[data-filter-pay]").forEach((btn) => {
      btn.addEventListener("click", () => setSubscriptionFilterPay(btn.dataset.filterPay));
    });
    document.querySelectorAll("[data-filter-type]").forEach((btn) => {
      btn.addEventListener("click", () => setSubscriptionFilterType(btn.dataset.filterType));
    });

    // 固定費・サブスク フォーム制御
    const subForm = $("subscription-form");
    if (subForm) subForm.addEventListener("submit", saveSubscriptionFromForm);
    const deleteSubBtn = $("delete-subscription-btn");
    if (deleteSubBtn) deleteSubBtn.addEventListener("click", deleteCurrentSubscription);
    const subAmtInput = $("sub-amount-input");
    if (subAmtInput) subAmtInput.addEventListener("blur", formatMoneyInput);
    const subPayMethod = $("sub-payment-method");
    if (subPayMethod) {
      subPayMethod.addEventListener("change", () => {
        if (subPayMethod.value === Core.CREDIT_PAYMENT) {
          onSubscriptionCardChange();
        }
        updateSubscriptionFormVisibility();
      });
    }
    const subCardSelect = $("sub-card-select");
    if (subCardSelect) subCardSelect.addEventListener("change", onSubscriptionCardChange);
    const subInterval = $("sub-interval-select");
    if (subInterval) subInterval.addEventListener("change", updateSubscriptionFormVisibility);
    const subIconPickerBtn = $("sub-icon-picker-btn");
    if (subIconPickerBtn) subIconPickerBtn.addEventListener("click", openSubscriptionIconDialog);

    // 固定費・サブスク 詳細モーダル
    const subDetailToggleBtn = $("sub-detail-toggle-active-btn");
    if (subDetailToggleBtn) subDetailToggleBtn.addEventListener("click", () => toggleSubscriptionActive(selectedDetailSubId));
    const subDetailEditBtn = $("sub-detail-edit-btn");
    if (subDetailEditBtn) {
      subDetailEditBtn.addEventListener("click", () => {
        const id = selectedDetailSubId;
        closeDialog($("subscription-detail-dialog"));
        openSubscriptionDialog(id);
      });
    }
    const subDetailDelBtn = $("sub-detail-delete-btn");
    if (subDetailDelBtn) subDetailDelBtn.addEventListener("click", () => deleteSubscription(selectedDetailSubId));

    document.querySelectorAll("[data-close-dialog]").forEach((button) => {
      button.addEventListener("click", () => closeDialog($(button.dataset.closeDialog)));
    });
    const closeExpenseBtn = $("close-expense-dialog");
    if (closeExpenseBtn) closeExpenseBtn.addEventListener("click", () => closeDialog($("expense-dialog")));
    const closeCardBtn = $("close-card-dialog");
    if (closeCardBtn) closeCardBtn.addEventListener("click", () => closeDialog($("card-dialog")));
    const closeManualBtn = $("close-manual-dialog");
    if (closeManualBtn) closeManualBtn.addEventListener("click", () => closeDialog($("manual-payment-dialog")));
    const closeBudgetBtn = $("close-budget-dialog");
    if (closeBudgetBtn) closeBudgetBtn.addEventListener("click", () => closeDialog($("budget-dialog")));

    document.querySelectorAll(".app-dialog").forEach((dialog) => {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeDialog(dialog);
      });
      dialog.addEventListener("close", updateDialogLock);
    });

    $("expense-amount").addEventListener("blur", formatMoneyInput);
    $("manual-payment-amount").addEventListener("blur", formatMoneyInput);
    $("setting-balance").addEventListener("blur", formatMoneyInput);
    $("setting-reserve").addEventListener("blur", formatMoneyInput);
    $("expense-payment").addEventListener("change", () => {
      updateExpensePaymentFields();
      if ($("expense-payment").value === Core.CREDIT_PAYMENT) {
        const accordion = $("expense-details-accordion");
        if (accordion) accordion.open = true;
      }
    });
    $("expense-card").addEventListener("change", updateCalculatedPaymentDate);
    $("expense-date").addEventListener("change", () => {
      updateCalculatedPaymentDate();
      renderDayRecords($("expense-date").value);
    });
    $("expense-form").addEventListener("submit", saveExpenseFromForm);
    $("delete-expense-button").addEventListener("click", deleteCurrentExpense);

    $("card-form").addEventListener("submit", saveCardFromForm);
    $("delete-card-button").addEventListener("click", deleteCurrentCard);
    $("manual-payment-form").addEventListener("submit", saveManualPaymentFromForm);
    const deleteManualBtn = $("delete-manual-button") || $("delete-manual-payment-button");
    if (deleteManualBtn) deleteManualBtn.addEventListener("click", deleteCurrentManualPayment);

    $("history-month").addEventListener("change", renderHistory);
    $("history-category").addEventListener("change", renderHistory);
    $("history-payment").addEventListener("change", renderHistory);

    const historySearch = $("history-search");
    const historySearchClear = $("history-search-clear");
    if (historySearch) {
      historySearch.addEventListener("input", () => {
        if (historySearchClear) {
          historySearchClear.classList.toggle("is-hidden", !historySearch.value);
        }
        renderHistory();
      });
    }
    if (historySearchClear) {
      historySearchClear.addEventListener("click", () => {
        if (historySearch) historySearch.value = "";
        historySearchClear.classList.add("is-hidden");
        renderHistory();
        historySearch?.focus();
      });
    }

    const manageFavBtn = $("manage-favorites-button");
    if (manageFavBtn) {
      manageFavBtn.addEventListener("click", toggleFavoritesDeleteMode);
    }
    const addFavBtn = $("add-to-favorites-btn");
    if (addFavBtn) {
      addFavBtn.addEventListener("click", saveCurrentFormAsFavorite);
    }

    $("mode-usage-btn").addEventListener("click", () => switchBudgetMode("usage"));
    $("mode-outflow-btn").addEventListener("click", () => switchBudgetMode("outflow"));
    const modeHelpBtn = $("mode-help-btn");
    if (modeHelpBtn) modeHelpBtn.addEventListener("click", () => showDialog($("mode-help-dialog")));

    $("open-budget-button").addEventListener("click", openBudgetDialog);
    const openBudgetFromUnsetBtn = $("open-budget-from-unset-button");
    if (openBudgetFromUnsetBtn) openBudgetFromUnsetBtn.addEventListener("click", openBudgetDialog);

    const toggleBreakdownBtn = $("toggle-breakdown-btn");
    if (toggleBreakdownBtn) {
      toggleBreakdownBtn.addEventListener("click", () => {
        isSummaryBreakdownOpen = !isSummaryBreakdownOpen;
        const content = $("summary-breakdown-content");
        const text = $("toggle-breakdown-text");
        const arrow = $("toggle-breakdown-arrow");
        if (content) content.classList.toggle("is-hidden", !isSummaryBreakdownOpen);
        if (text) text.textContent = isSummaryBreakdownOpen ? "内訳を閉じる" : "内訳を見る";
        if (arrow) arrow.textContent = isSummaryBreakdownOpen ? "⌃" : "⌄";
        toggleBreakdownBtn.setAttribute("aria-expanded", isSummaryBreakdownOpen ? "true" : "false");
      });
    }

    $("budget-form").addEventListener("submit", saveBudgetFromForm);
    $("clear-budget-button").addEventListener("click", clearMonthlyBudget);
    $("budget-usage-input").addEventListener("blur", formatMoneyInput);
    $("budget-outflow-input").addEventListener("blur", formatMoneyInput);

    // オンボーディングボタン
    const obStartBtn = $("onboarding-start-btn");
    if (obStartBtn) {
      obStartBtn.addEventListener("click", () => {
        localStorage.setItem(APP.onboardedKey, "true");
        closeDialog($("onboarding-dialog"));
        showToast("「あといくら」へようこそ！");
      });
    }
    const obSampleBtn = $("onboarding-sample-btn");
    if (obSampleBtn) {
      obSampleBtn.addEventListener("click", () => {
        localStorage.setItem(APP.onboardedKey, "true");
        closeDialog($("onboarding-dialog"));
        addSampleData();
      });
    }
    const obStepBudget = $("onboarding-step-budget");
    if (obStepBudget) {
      obStepBudget.addEventListener("click", () => {
        localStorage.setItem(APP.onboardedKey, "true");
        closeDialog($("onboarding-dialog"));
        openBudgetDialog();
      });
    }
    const obStepCard = $("onboarding-step-card");
    if (obStepCard) {
      obStepCard.addEventListener("click", () => {
        localStorage.setItem(APP.onboardedKey, "true");
        closeDialog($("onboarding-dialog"));
        openCardDialog();
      });
    }
    const obStepExp = $("onboarding-step-expense");
    if (obStepExp) {
      obStepExp.addEventListener("click", () => {
        localStorage.setItem(APP.onboardedKey, "true");
        closeDialog($("onboarding-dialog"));
        openExpenseDialog(Core.todayKey());
      });
    }
    const reopenObBtn = $("reopen-onboarding-btn");
    if (reopenObBtn) {
      reopenObBtn.addEventListener("click", () => {
        showDialog($("onboarding-dialog"));
      });
    }

    $("save-cycle-settings").addEventListener("click", saveCycleSettings);
    $("setting-cycle-start-day").addEventListener("change", updateCyclePreview);
    $("save-balance-settings").addEventListener("click", saveBalanceSettings);
    $("theme-select").addEventListener("change", saveTheme);
    $("theme-color-1").addEventListener("input", (e) => {
      state.settings.themeColor1 = e.target.value;
      state.settings.themeColor2 = e.target.value;
      applyThemeColors();
    });
    $("theme-color-1").addEventListener("change", () => {
      saveState();
      showToast("テーマカラーを保存しました。");
    });

    $("setting-bg-color").addEventListener("input", (e) => {
      state.settings.bgColor = e.target.value;
      applyThemeColors();
    });
    $("setting-bg-color").addEventListener("change", () => {
      saveState();
      showToast("背景色を保存しました。");
    });

    $("setting-border-color").addEventListener("input", (e) => {
      state.settings.borderColor = e.target.value;
      applyThemeColors();
    });
    $("setting-border-color").addEventListener("change", () => {
      saveState();
      showToast("枠線色を保存しました。");
    });

    $("setting-gauge-color").addEventListener("input", (e) => {
      state.settings.gaugeColor = e.target.value;
      applyThemeColors();
    });
    $("setting-gauge-color").addEventListener("change", () => {
      saveState();
      showToast("ゲージ色を保存しました。");
    });

    const settingUsageColor = $("setting-usage-color");
    if (settingUsageColor) {
      settingUsageColor.addEventListener("input", (e) => {
        state.settings.usageColor = e.target.value;
        applyThemeColors();
        renderCalendar();
      });
      settingUsageColor.addEventListener("change", () => {
        saveState();
        showToast("使った金額の表示色を保存しました。");
      });
    }

    $("reset-colors-button").addEventListener("click", () => {
      state.settings.theme = "auto";
      state.settings.themeColor1 = "#185a37";
      state.settings.themeColor2 = "#185a37";
      state.settings.bgColor = "#ffffff";
      state.settings.borderColor = "#e2e8f0";
      state.settings.gaugeColor = "#34d399";
      state.settings.usageColor = "#0284c7";
      saveState();
      applyTheme();
      renderCalendar();
      showToast("テーマ・カラーを初期値に戻しました。");
    });

    setupSwipeNavigation();
    setupBottomNavSlide();

    $("back-to-cards-btn").addEventListener("click", () => switchCardSubView("main"));

    document.querySelectorAll("[data-settings-nav]").forEach((btn) => {
      btn.addEventListener("click", () => switchSettingsSubView(btn.dataset.settingsNav));
    });

    document.querySelectorAll("[data-back-settings]").forEach((btn) => {
      btn.addEventListener("click", () => switchSettingsSubView("menu"));
    });

    const settingsDeleteBtn = $("settings-menu-delete-btn");
    if (settingsDeleteBtn) settingsDeleteBtn.addEventListener("click", deleteAllData);

    const openHomeWidgetsBtn = $("open-home-widgets-button");
    if (openHomeWidgetsBtn) {
      openHomeWidgetsBtn.addEventListener("click", () => {
        renderHomeWidgetsManageList("home-widgets-manage-list");
        const dialog = $("home-widgets-dialog");
        if (dialog) showDialog(dialog);
      });
    }

    const homeResetWidgetsBtn = $("home-reset-widgets-btn");
    if (homeResetWidgetsBtn) {
      homeResetWidgetsBtn.addEventListener("click", resetHomeWidgets);
    }

    const settingsResetWidgetsBtn = $("settings-reset-widgets-btn");
    if (settingsResetWidgetsBtn) {
      settingsResetWidgetsBtn.addEventListener("click", resetHomeWidgets);
    }

    const widgetBalanceSettingsBtn = $("widget-balance-settings-btn");
    if (widgetBalanceSettingsBtn) {
      widgetBalanceSettingsBtn.addEventListener("click", () => {
        switchView("settings");
        switchSettingsSubView("balance");
      });
    }

    $("export-button").addEventListener("click", exportData);
    $("import-button").addEventListener("click", () => $("import-file").click());
    $("import-file").addEventListener("change", importData);
    $("add-sample-button").addEventListener("click", addSampleData);
    $("remove-sample-button").addEventListener("click", removeSampleData);
    if ($("delete-all-button")) $("delete-all-button").addEventListener("click", deleteAllData);
  }

  function switchSettingsSubView(viewKey) {
    const subviews = {
      menu: $("settings-menu-subview"),
      widgets: $("settings-subview-widgets"),
      cycle: $("settings-subview-cycle"),
      balance: $("settings-subview-balance"),
      theme: $("settings-subview-theme"),
      backup: $("settings-subview-backup"),
      guide: $("settings-subview-guide"),
    };

    Object.entries(subviews).forEach(([key, el]) => {
      if (el) el.classList.toggle("is-active", key === viewKey);
    });
    if (viewKey === "widgets") {
      renderHomeWidgetsManageList("settings-widgets-manage-list");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function switchCardSubView(subview, cardId = null) {
    const isMain = subview === "main";
    const mainView = $("cards-main-subview");
    const historyView = $("cards-history-subview");
    if (mainView) mainView.classList.toggle("is-active", isMain);
    if (historyView) historyView.classList.toggle("is-active", !isMain);

    if (!isMain) {
      renderCardHistoryList(cardId);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function moveMonth(amount) {
    const date = Core.parseDateKey(currentMonth);
    date.setMonth(date.getMonth() + amount, 1);
    currentMonth = Core.toDateKey(date);
    renderCalendarView();
  }

  function goToday() {
    currentMonth = firstOfMonth(Core.todayKey());
    switchView("calendar");
    renderCalendarView();
  }

  function firstOfMonth(dateKey) {
    return `${dateKey.slice(0, 7)}-01`;
  }

  function switchView(view, direction = null) {
    if (!["calendar", "history", "report", "cards", "settings"].includes(view)) return;
    const viewsOrder = ["calendar", "history", "report", "cards", "settings"];
    const prevIndex = viewsOrder.indexOf(currentView);
    const nextIndex = viewsOrder.indexOf(view);

    if (!direction && prevIndex !== -1 && nextIndex !== -1 && prevIndex !== nextIndex) {
      direction = nextIndex > prevIndex ? "next" : "prev";
    }

    currentView = view;
    document.querySelectorAll(".view").forEach((section) => {
      const isTarget = section.id === `view-${view}`;
      section.classList.remove("slide-next", "slide-prev");
      section.style.transform = "";
      section.style.transition = "";
      section.classList.toggle("is-active", isTarget);
      if (isTarget && direction) {
        section.classList.add(direction === "next" ? "slide-next" : "slide-prev");
      }
    });

    document.querySelectorAll(".nav-item").forEach((button) => {
      const active = button.dataset.view === view;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", active ? "true" : "false");
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });

    if (window.updateNavIndicator) {
      window.updateNavIndicator(view, true);
    }

    // FAB（＋ボタン）の表示制御（カレンダーのみ表示）
    const quickAddBtn = $("quick-add-button");
    if (quickAddBtn) {
      quickAddBtn.style.display = view === "calendar" ? "inline-flex" : "none";
      quickAddBtn.classList.toggle("is-hidden", view !== "calendar");
    }

    const todayBtn = $("today-button");
    if (todayBtn) todayBtn.classList.toggle("is-hidden", view !== "calendar");

    if (view === "history") renderHistory();
    if (view === "report") renderReport();
    if (view === "cards") {
      switchPaymentsSubview(currentPaymentsSubview || "cards");
    }
    if (view === "settings") {
      switchSettingsSubView("menu");
      renderSettings();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  let suppressClickUntil = 0;
  window.addEventListener("click", (e) => {
    if (Date.now() < suppressClickUntil) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, true);

  function setupSwipeNavigation() {
    const viewsOrder = ["calendar", "history", "report", "cards", "settings"];
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let isTracking = false;
    let isHorizontalSwipe = false;
    let activeViewEl = null;

    window.addEventListener("touchstart", (e) => {
      if (e.touches.length !== 1) return;
      const target = e.target;
      // 開いているモーダル内、下部ナビゲーション、FAB、入力フォーム、横スクロールUI上では画面スワイプを無効化
      // ※ナビバー操作時にメイン画面が干渉して動くのを完全に防止
      if (
        target.closest(".bottom-nav, .fab") ||
        target.closest("dialog[open]") ||
        target.closest("input, textarea, select, canvas") ||
        target.closest(".filter-chip-group, .summary-filter-row, .palette-row, .month-toolbar, .horizontal-scroll")
      ) {
        isTracking = false;
        return;
      }
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
      isTracking = true;
      isHorizontalSwipe = false;
      activeViewEl = document.querySelector(".view.is-active");
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (!isTracking || e.touches.length !== 1 || !activeViewEl) return;
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = currentX - touchStartX;
      const deltaY = currentY - touchStartY;

      if (!isHorizontalSwipe) {
        if (Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
          isHorizontalSwipe = true;
        } else if (Math.abs(deltaY) > 10) {
          isTracking = false;
          return;
        }
      }

      if (isHorizontalSwipe) {
        const currentIndex = viewsOrder.indexOf(currentView);
        const atStart = currentIndex === 0 && deltaX > 0;
        const atEnd = currentIndex === viewsOrder.length - 1 && deltaX < 0;
        const damping = atStart || atEnd ? 0.15 : 0.38;
        activeViewEl.style.transition = "none";
        activeViewEl.style.transform = `translateX(${deltaX * damping}px)`;
      }
    }, { passive: true });

    window.addEventListener("touchend", (e) => {
      if (!isTracking || e.changedTouches.length !== 1) {
        if (activeViewEl) {
          activeViewEl.style.transform = "";
          activeViewEl.style.transition = "";
        }
        isTracking = false;
        return;
      }
      isTracking = false;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      const elapsedTime = Date.now() - touchStartTime;

      const currentIndex = viewsOrder.indexOf(currentView);

      if (activeViewEl) {
        activeViewEl.style.transition = "transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)";
        activeViewEl.style.transform = "";
      }

      if (isHorizontalSwipe && Math.abs(deltaX) > 15) {
        // 横スワイプ操作時は直後のクリック誤発火を抑止
        suppressClickUntil = Date.now() + 350;
      }

      if (isHorizontalSwipe && elapsedTime < 600 && Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
        if (deltaX < 0 && currentIndex < viewsOrder.length - 1) {
          switchView(viewsOrder[currentIndex + 1], "next");
        } else if (deltaX > 0 && currentIndex > 0) {
          switchView(viewsOrder[currentIndex - 1], "prev");
        }
      }
    }, { passive: true });
  }

  function setupBottomNavSlide() {
    const nav = document.querySelector(".bottom-nav");
    const indicator = $("bottom-nav-indicator");
    if (!nav) return;

    const viewsOrder = ["calendar", "history", "report", "cards", "settings"];
    let isPointerDown = false;
    let isDragging = false;
    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let activeIndex = viewsOrder.indexOf(currentView);
    if (activeIndex === -1) activeIndex = 0;
    let previewIndex = activeIndex;
    let rafId = null;

    function getNavMetrics() {
      const navRect = (nav && typeof nav.getBoundingClientRect === "function")
        ? nav.getBoundingClientRect()
        : { width: 390, left: 0 };
      const paddingLeft = 8;
      const width = navRect.width || 390;
      const trackWidth = Math.max(0, width - paddingLeft * 2);
      const itemWidth = trackWidth / viewsOrder.length;
      return { navRect, paddingLeft, trackWidth, itemWidth };
    }

    function setIndicatorPosition(index, animate = true) {
      if (!indicator) return;
      const { itemWidth } = getNavMetrics();
      if (!animate) {
        indicator.classList.add("is-dragging");
      } else {
        indicator.classList.remove("is-dragging");
      }
      const targetX = index * itemWidth;
      indicator.style.transform = `translate3d(${targetX}px, 0, 0)`;
    }

    function updatePreviewHighlight(index) {
      const items = nav.querySelectorAll(".nav-item");
      items.forEach((btn, i) => {
        btn.classList.toggle("is-preview", i === index);
      });
    }

    function clearPreviewHighlight() {
      const items = nav.querySelectorAll(".nav-item");
      items.forEach((btn) => {
        btn.classList.remove("is-preview");
      });
    }

    window.updateNavIndicator = (view, animate = true) => {
      const idx = viewsOrder.indexOf(view);
      if (idx !== -1) {
        activeIndex = idx;
        previewIndex = idx;
        setIndicatorPosition(idx, animate);
      }
    };

    window.addEventListener("resize", () => {
      setIndicatorPosition(activeIndex, false);
    });

    // キーボード操作（左右矢印・Home・Endキー）
    nav.addEventListener("keydown", (e) => {
      const targetBtn = e.target.closest(".nav-item");
      if (!targetBtn) return;
      let newIndex = activeIndex;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        newIndex = (activeIndex + 1) % viewsOrder.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        newIndex = (activeIndex - 1 + viewsOrder.length) % viewsOrder.length;
      } else if (e.key === "Home") {
        newIndex = 0;
      } else if (e.key === "End") {
        newIndex = viewsOrder.length - 1;
      } else {
        return;
      }
      e.preventDefault();
      const nextView = viewsOrder[newIndex];
      const nextBtn = nav.querySelector(`[data-view="${nextView}"]`);
      if (nextBtn) nextBtn.focus();
      switchView(nextView);
    });

    const onPointerDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      isPointerDown = true;
      isDragging = false;
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      currentX = e.clientX;
      activeIndex = viewsOrder.indexOf(currentView);
      if (activeIndex === -1) activeIndex = 0;
      previewIndex = activeIndex;
    };

    const onPointerMove = (e) => {
      if (!isPointerDown) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (!isDragging) {
        // 縦スクロールと判定された場合は操作キャンセル
        if (Math.abs(dy) > Math.abs(dx) * 1.5 && Math.abs(dy) > 10) {
          isPointerDown = false;
          clearPreviewHighlight();
          setIndicatorPosition(activeIndex, true);
          return;
        }
        // 横方向への一定移動（6px）でスライド操作開始
        if (Math.abs(dx) > 6) {
          isDragging = true;
          if (nav.setPointerCapture && pointerId !== null) {
            try { nav.setPointerCapture(pointerId); } catch (_) {}
          }
        }
      }

      if (isDragging) {
        currentX = e.clientX;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const { navRect, paddingLeft, trackWidth, itemWidth } = getNavMetrics();
          const relativeX = currentX - navRect.left - paddingLeft;
          const halfItem = itemWidth / 2;
          const clampedCenterX = Math.max(halfItem, Math.min(trackWidth - halfItem, relativeX));
          const targetTranslateX = clampedCenterX - halfItem;

          if (indicator) {
            indicator.classList.add("is-dragging");
            indicator.style.transform = `translate3d(${targetTranslateX}px, 0, 0)`;
          }

          const closestIdx = Math.min(viewsOrder.length - 1, Math.max(0, Math.round((clampedCenterX - halfItem) / itemWidth)));
          if (closestIdx !== previewIndex) {
            previewIndex = closestIdx;
            updatePreviewHighlight(previewIndex);
          }
        });
      }
    };

    const onPointerUp = (e) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      if (rafId) cancelAnimationFrame(rafId);

      if (isDragging) {
        isDragging = false;
        if (nav.releasePointerCapture && pointerId !== null) {
          try { nav.releasePointerCapture(pointerId); } catch (_) {}
        }
        clearPreviewHighlight();
        suppressClickUntil = Date.now() + 350;

        const { navRect, paddingLeft, trackWidth, itemWidth } = getNavMetrics();
        const relativeX = e.clientX - navRect.left - paddingLeft;
        const halfItem = itemWidth / 2;
        const clampedCenterX = Math.max(halfItem, Math.min(trackWidth - halfItem, relativeX));
        const finalIdx = Math.min(viewsOrder.length - 1, Math.max(0, Math.round((clampedCenterX - halfItem) / itemWidth)));

        const targetView = viewsOrder[finalIdx];
        const prevIdx = activeIndex;
        activeIndex = finalIdx;

        setIndicatorPosition(finalIdx, true);

        // 指を離した時点で1回だけ画面切り替えを実行
        if (targetView && targetView !== currentView) {
          const direction = finalIdx > prevIdx ? "next" : "prev";
          switchView(targetView, direction);
        }
      } else {
        clearPreviewHighlight();
        const targetBtn = e.target.closest(".nav-item");
        if (targetBtn && targetBtn.dataset.view) {
          const tappedIdx = viewsOrder.indexOf(targetBtn.dataset.view);
          if (tappedIdx !== -1) {
            activeIndex = tappedIdx;
            setIndicatorPosition(tappedIdx, true);
          }
        }
      }
    };

    const onPointerCancel = () => {
      if (!isPointerDown) return;
      isPointerDown = false;
      isDragging = false;
      if (rafId) cancelAnimationFrame(rafId);
      clearPreviewHighlight();
      setIndicatorPosition(activeIndex, true);
    };

    nav.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerCancel);

    setTimeout(() => {
      setIndicatorPosition(viewsOrder.indexOf(currentView), false);
    }, 50);
  }

  function switchPaymentsSubview(subview) {
    if (!["cards", "subscriptions"].includes(subview)) return;
    currentPaymentsSubview = subview;
    const cardsTab = $("payments-tab-cards");
    const subTab = $("payments-tab-subscriptions");
    const cardsView = $("cards-payment-subview");
    const subView = $("subscriptions-payment-subview");

    if (cardsTab) {
      cardsTab.classList.toggle("is-active", subview === "cards");
      cardsTab.setAttribute("aria-selected", subview === "cards" ? "true" : "false");
    }
    if (subTab) {
      subTab.classList.toggle("is-active", subview === "subscriptions");
      subTab.setAttribute("aria-selected", subview === "subscriptions" ? "true" : "false");
    }
    if (cardsView) cardsView.classList.toggle("is-active", subview === "cards");
    if (subView) subView.classList.toggle("is-active", subview === "subscriptions");

    if (subview === "cards") {
      switchCardSubView("main");
      renderCards();
    } else {
      renderSubscriptionsView();
    }
  }

  function renderAll() {
    renderCalendarView();
    renderHistory();
    renderReport();
    renderCards();
    renderSubscriptionsView();
    renderSettings();
  }

  function renderCalendarView() {
    const monthDate = Core.parseDateKey(currentMonth);
    const monthKey = currentMonth.slice(0, 7);
    const cycleDay = state.settings.cycleStartDay || 1;
    const cycleRange = Core.getCycleRange(monthKey, cycleDay);

    $("calendar-title").textContent = `${monthDate.getFullYear()}年${monthDate.getMonth() + 1}月`;
    $("month-picker").value = monthKey;

    const cycleBadge = $("cycle-period-badge");
    if (cycleBadge) {
      cycleBadge.textContent = cycleDay === 1
        ? `集計期間: ${cycleRange.label}`
        : `集計期間（給料日基準）: ${cycleRange.label}`;
    }

    renderCalendar();
    renderCalendarLegend();
    renderMonthlySummary();
    renderSmartAdvisor("advisor");
    renderHomeWidgets();
  }

  function renderHomeWidgets() {
    const container = $("home-widgets-container");
    if (!container) return;

    const widgets = state.settings.homeWidgets || defaultHomeWidgets();

    widgets.forEach((w) => {
      const el = $(`widget-${w.id}`);
      if (el) {
        container.appendChild(el);
        el.classList.toggle("is-hidden", !w.enabled);
      }
    });

    widgets.forEach((w) => {
      if (!w.enabled) return;
      if (w.id === "balance-outlook") {
        renderHomeBalanceOutlook();
      } else if (w.id === "upcoming-withdrawals") {
        renderHomeUpcomingWithdrawals();
      } else if (w.id === "category-top3") {
        renderHomeCategoryTop3();
      } else if (w.id === "weekly-summary") {
        renderHomeWeeklySummary();
      }
    });
  }

  function renderHomeBalanceOutlook() {
    const current = state.settings.currentBalance;
    const reserve = state.settings.minimumReserve;
    const upcoming = Core.getUpcomingCardTotal(Core.todayKey(), 30, state.expenses, state.cards, state.manualPayments, state.subscriptions);

    const elCurrent = $("home-balance-current");
    const elUpcoming = $("home-balance-upcoming");
    const elAfter = $("home-balance-after");
    const elAvailable = $("home-balance-available");

    if (elCurrent) elCurrent.textContent = current === null ? "未設定" : formatYen(current);
    if (elUpcoming) elUpcoming.textContent = formatYen(upcoming);
    if (elAfter) {
      elAfter.textContent = current === null ? "未設定" : formatSignedYen(current - upcoming);
      elAfter.parentElement.classList.toggle("is-negative", current !== null && current - upcoming < 0);
    }
    if (elAvailable) {
      elAvailable.textContent = current === null || reserve === null ? "未設定" : formatSignedYen(current - upcoming - reserve);
      elAvailable.parentElement.classList.toggle("is-negative", current !== null && reserve !== null && current - upcoming - reserve < 0);
    }
  }

  function renderHomeUpcomingWithdrawals() {
    const list = $("home-upcoming-withdrawals-list");
    if (!list) return;

    const today = Core.todayKey();
    const next30 = Core.addDays(today, 30);
    const dailyTotals = Core.buildDailyTotals(state.expenses, state.cards, state.manualPayments, state.subscriptions);

    const withdrawalDays = [];
    dailyTotals.forEach((val, dateKey) => {
      if (dateKey >= today && dateKey <= next30 && val.cardWithdrawal > 0) {
        withdrawalDays.push({ date: dateKey, amount: val.cardWithdrawal });
      }
    });
    withdrawalDays.sort((a, b) => a.date.localeCompare(b.date));

    if (!withdrawalDays.length) {
      list.replaceChildren(createElement("p", "empty-inline", "今後30日間のカード引落予定はありません。"));
      return;
    }

    const rows = withdrawalDays.slice(0, 3).map((item) => {
      const el = createElement("div", "record-item");
      const icon = createElement("span", "record-icon", "引落");
      const main = createElement("span", "record-main");
      main.append(createElement("strong", "", formatDate(item.date)));

      const cardBreakdowns = state.cards.map((card) => {
        const amt = getCardWithdrawalAmount(card.id, item.date);
        return amt > 0 ? `${card.name}: ${formatYen(amt)}` : null;
      }).filter(Boolean);

      main.append(createElement("span", "", cardBreakdowns.length ? cardBreakdowns.join(" / ") : "カード引落"));
      const amountEl = createElement("strong", "record-amount", formatYen(item.amount));
      el.append(icon, main, amountEl);
      return el;
    });

    list.replaceChildren(...rows);
  }

  function renderHomeCategoryTop3() {
    const container = $("home-category-top3-list");
    if (!container) return;

    const monthKey = currentMonth.slice(0, 7);
    const cycleDay = state.settings.cycleStartDay || 1;
    const summary = Core.summarizeMonth(monthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions);
    const entries = Object.entries(summary.categories).sort((a, b) => b[1] - a[1]);

    if (!entries.length) {
      container.replaceChildren(createElement("p", "empty-inline", "今月の支出はまだありません。"));
      return;
    }

    const top3 = entries.slice(0, 3);
    const max = top3[0][1] || 1;
    const nodes = top3.map(([category, amount], idx) => {
      const row = createElement("div", "category-row");
      const label = createElement("span", "", `${idx + 1}. ${category}`);
      const track = createElement("div", "progress-track");
      const value = createElement("div", "progress-value");
      value.style.width = `${Math.max(3, Math.round((amount / max) * 100))}%`;
      track.append(value);
      row.append(label, track, createElement("strong", "", formatYen(amount)));
      return row;
    });

    container.replaceChildren(...nodes);
  }

  function renderHomeWeeklySummary() {
    const elSpent = $("home-weekly-spent");
    const elAvg = $("home-weekly-avg");
    if (!elSpent || !elAvg) return;

    const today = Core.todayKey();
    const todayDate = Core.parseDateKey(today);
    if (!todayDate) return;

    const dayOfWeek = todayDate.getDay();
    const sundayOffset = -dayOfWeek;
    const weekStartKey = Core.addDays(today, sundayOffset);

    let weekSpent = 0;
    state.expenses.forEach((e) => {
      if (e.date >= weekStartKey && e.date <= today) {
        weekSpent += Core.normalizeAmount(e.amount);
      }
    });

    const daysPassedInWeek = dayOfWeek + 1;
    const dailyAvg = Math.round(weekSpent / daysPassedInWeek);

    elSpent.textContent = formatYen(weekSpent);
    elAvg.textContent = `${formatYen(dailyAvg)}/日`;
  }

  function resetHomeWidgets() {
    state.settings.homeWidgets = defaultHomeWidgets();
    saveState();
    renderHomeWidgets();
    renderHomeWidgetsManageList("settings-widgets-manage-list");
    renderHomeWidgetsManageList("home-widgets-manage-list");
    showToast("ホーム画面のウィジェット配置を初期値に戻しました。");
  }

  function renderHomeWidgetsManageList(containerId) {
    const container = $(containerId);
    if (!container) return;

    const widgets = state.settings.homeWidgets || defaultHomeWidgets();
    const nodes = widgets.map((widget, index) => {
      const item = createElement("div", `widget-manage-item ${widget.enabled ? "" : "is-disabled"}`);

      const left = createElement("div", "widget-manage-left");
      const info = createElement("div", "widget-manage-info");
      const title = createElement("span", "widget-manage-title", widget.name);
      const status = createElement("span", "widget-manage-status", widget.enabled ? "表示中" : "非表示");
      info.append(title, status);
      left.append(info);

      const controls = createElement("div", "widget-manage-controls");

      // 並び替えボタン
      const reorderGroup = createElement("div", "widget-reorder-buttons");
      const upBtn = createElement("button", "widget-order-btn", "▲");
      upBtn.type = "button";
      upBtn.title = "上へ移動";
      upBtn.disabled = index === 0;
      upBtn.addEventListener("click", () => {
        if (index > 0) {
          const temp = widgets[index - 1];
          widgets[index - 1] = widgets[index];
          widgets[index] = temp;
          state.settings.homeWidgets = widgets;
          saveState();
          renderHomeWidgets();
          renderHomeWidgetsManageList("settings-widgets-manage-list");
          renderHomeWidgetsManageList("home-widgets-manage-list");
        }
      });

      const downBtn = createElement("button", "widget-order-btn", "▼");
      downBtn.type = "button";
      downBtn.title = "下へ移動";
      downBtn.disabled = index === widgets.length - 1;
      downBtn.addEventListener("click", () => {
        if (index < widgets.length - 1) {
          const temp = widgets[index + 1];
          widgets[index + 1] = widgets[index];
          widgets[index] = temp;
          state.settings.homeWidgets = widgets;
          saveState();
          renderHomeWidgets();
          renderHomeWidgetsManageList("settings-widgets-manage-list");
          renderHomeWidgetsManageList("home-widgets-manage-list");
        }
      });
      reorderGroup.append(upBtn, downBtn);

      // 表示ON/OFFスイッチ
      const toggleLabel = createElement("label", "widget-toggle");
      const toggleInput = createElement("input", "");
      toggleInput.type = "checkbox";
      toggleInput.checked = Boolean(widget.enabled);
      toggleInput.addEventListener("change", (e) => {
        widget.enabled = e.target.checked;
        saveState();
        renderHomeWidgets();
        renderHomeWidgetsManageList("settings-widgets-manage-list");
        renderHomeWidgetsManageList("home-widgets-manage-list");
      });
      const toggleSlider = createElement("span", "widget-toggle-slider");
      toggleLabel.append(toggleInput, toggleSlider);

      controls.append(reorderGroup, toggleLabel);
      item.append(left, controls);
      return item;
    });

    container.replaceChildren(...nodes);
  }

  function renderCalendarLegend() {
    const legend = $("calendar-legend");
    if (!legend) return;

    const nodes = [];
    const usageColor = state.settings.usageColor || "#0284c7";

    // 利用額（タップして色変更可能）
    const usageLabel = createElement("label", "legend-item legend-usage-trigger");
    usageLabel.title = "タップして利用額の表示色を変更";
    const usagePreview = createElement("span", "legend-color-preview");
    usagePreview.style.backgroundColor = usageColor;
    const usageText = createElement("span", "", "使った金額");

    const usageColorInput = createElement("input", "visually-hidden");
    usageColorInput.type = "color";
    usageColorInput.value = usageColor;
    usageColorInput.addEventListener("input", (e) => {
      state.settings.usageColor = e.target.value;
      applyThemeColors();
      renderCalendar();
      usagePreview.style.backgroundColor = e.target.value;
    });
    usageColorInput.addEventListener("change", () => {
      saveState();
      showToast("利用額の表示色を変更しました。");
    });

    usageLabel.append(usagePreview, usageText, usageColorInput);
    nodes.push(usageLabel);

    // 登録カード一覧
    state.cards.forEach((card) => {
      const cardSpan = createElement("span", "legend-item");
      const cardDot = createElement("span", "legend-color-preview");
      cardDot.style.backgroundColor = card.color;
      cardSpan.append(cardDot, document.createTextNode(card.name));
      nodes.push(cardSpan);
    });

    legend.replaceChildren(...nodes);
  }

  function formatCalendarAmount(amount) {
    const num = Math.round(amount);
    if (num <= 0) return "";
    if (num >= 100000000) {
      const oku = (num / 100000000).toFixed(1).replace(/\.0$/, "");
      return `${oku}億`;
    }
    if (num >= 10000) {
      const man = (num / 10000).toFixed(1).replace(/\.0$/, "");
      return `${man}万`;
    }
    return `${num.toLocaleString("ja-JP")}円`;
  }

  function renderCalendar() {
    const grid = $("calendar-grid");
    const monthDate = Core.parseDateKey(currentMonth);
    const monthKey = currentMonth.slice(0, 7);
    const cycleDay = state.settings.cycleStartDay || 1;
    const cycleRange = Core.getCycleRange(monthKey, cycleDay);
    const start = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1 - monthDate.getDay(), 12);
    const dailyTotals = Core.buildDailyTotals(state.expenses, state.cards, state.manualPayments, state.subscriptions);
    const today = Core.todayKey();
    const nodes = [];

    for (let index = 0; index < 42; index += 1) {
      const cellDate = new Date(start.getFullYear(), start.getMonth(), start.getDate() + index, 12);
      const dateKey = Core.toDateKey(cellDate);
      const totals = dailyTotals.get(dateKey) || { usage: 0, cardWithdrawal: 0, outflow: 0 };
      const button = createElement("button", "calendar-day");
      button.type = "button";
      button.dataset.date = dateKey;
      button.classList.toggle("is-outside", cellDate.getMonth() !== monthDate.getMonth());
      button.classList.toggle("is-today", dateKey === today);
      if (cycleDay !== 1) {
        const inCycle = dateKey >= cycleRange.startDate && dateKey <= cycleRange.endDate;
        button.classList.toggle("is-in-cycle", inCycle);
      }
      button.setAttribute("aria-label", buildCalendarAriaLabel(dateKey, totals));
      button.append(createElement("span", "day-number", String(cellDate.getDate())));
      if (totals.usage > 0) {
        const usageMarker = createElement("span", "day-amount usage", formatCalendarAmount(totals.usage));
        const usageColor = state.settings.usageColor || "#0284c7";
        usageMarker.style.color = usageColor;
        usageMarker.style.backgroundColor = colorWithAlpha(usageColor, 0.15);
        button.append(usageMarker);
      }
      appendCardPaymentMarkers(button, dateKey);
      button.addEventListener("click", () => openExpenseDialog(dateKey));
      nodes.push(button);
    }
    grid.replaceChildren(...nodes);
  }

  function appendCardPaymentMarkers(dayButton, dateKey) {
    state.cards.forEach((card) => {
      const amount = getCardWithdrawalAmount(card.id, dateKey);
      if (amount <= 0) return;

      const labelText = formatCalendarAmount(amount);
      if (!labelText) return;

      const marker = createElement("span", "day-amount card card-custom", labelText);
      marker.style.color = card.color;
      marker.style.backgroundColor = colorWithAlpha(card.color, 0.18);
      marker.style.borderColor = card.color;
      marker.title = `${card.name}の引き落とし ${formatYen(amount)}`;
      marker.setAttribute("aria-label", `${card.name}の引き落とし ${formatYen(amount)}`);
      dayButton.append(marker);
    });
  }

  function getCardWithdrawalAmount(cardId, dateKey) {
    const card = (state.cards || []).find((c) => c.id === cardId);
    if (!card) return 0;

    const manualTotal = (state.manualPayments || [])
      .filter((payment) => payment.cardId === cardId && payment.date === dateKey)
      .reduce((total, payment) => total + Core.normalizeAmount(payment.amount), 0);

    // 手動確定額がある場合は確定額を優先（二重計上防止）
    if (manualTotal > 0) {
      return manualTotal;
    }

    const expenseTotal = (state.expenses || [])
      .filter((expense) => expense.paymentMethod === Core.CREDIT_PAYMENT && expense.cardId === cardId && expense.includeInWithdrawal !== false)
      .filter((expense) => Core.getExpensePaymentDate(expense, state.cards) === dateKey)
      .reduce((total, expense) => total + Core.normalizeAmount(expense.amount), 0);

    let subscriptionTotal = 0;
    const monthKey = dateKey.slice(0, 7);
    const [y, m] = monthKey.split("-").map(Number);

    (state.subscriptions || []).forEach((sub) => {
      if (!sub || sub.isActive === false || sub.paymentMethod !== Core.CREDIT_PAYMENT || sub.cardId !== cardId || sub.includeInWithdrawal === false) return;
      const amt = Core.normalizeAmount(sub.amount);
      if (amt <= 0) return;

      for (let offset = -2; offset <= 1; offset++) {
        const target = Core.addMonths(y, m - 1, offset);
        const mK = `${target.year}-${String(target.monthIndex + 1).padStart(2, "0")}`;
        const usageDate = Core.getSubscriptionUsageDate(sub, mK);
        if (usageDate) {
          const fakeExp = { paymentMethod: Core.CREDIT_PAYMENT, cardId: sub.cardId, date: usageDate };
          const paymentDate = Core.getExpensePaymentDate(fakeExp, state.cards);
          if (paymentDate === dateKey) {
            subscriptionTotal += amt;
            break;
          }
        }
      }
    });

    return expenseTotal + subscriptionTotal;
  }

  function colorWithAlpha(hexColor, alpha) {
    const match = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hexColor || "");
    if (!match) return "rgba(139, 95, 191, 0.15)";
    const red = Number.parseInt(match[1], 16);
    const green = Number.parseInt(match[2], 16);
    const blue = Number.parseInt(match[3], 16);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  function buildCalendarAriaLabel(dateKey, totals) {
    const parts = [formatDate(dateKey, { month: "long", day: "numeric", weekday: "short" })];
    if (totals.usage) parts.push(`利用 ${formatYen(totals.usage)}`);
    if (totals.cardWithdrawal) parts.push(`カード引き落とし ${formatYen(totals.cardWithdrawal)}`);
    if (totals.outflow) parts.push(`当日の出金 ${formatYen(totals.outflow)}`);
    if (parts.length === 1) parts.push("記録なし");
    return parts.join("、");
  }

  function parseBudgetValue(val) {
    if (val === null || val === undefined || val === "") return null;
    const num = Core.normalizeAmount(val);
    return num > 0 ? num : null;
  }

  function getEffectiveBudget(monthKey, type) {
    if (!state.budgets || typeof state.budgets !== "object") return null;
    const exact = state.budgets[monthKey];
    if (exact) {
      const val = typeof exact === "object" ? parseBudgetValue(exact[type]) : parseBudgetValue(exact);
      if (val !== null) return val;
    }
    // 前月以前の最新設定を探す（前月引き継ぎ）
    const pastMonths = Object.keys(state.budgets)
      .filter((k) => {
        if (k > monthKey || !state.budgets[k]) return false;
        const entry = state.budgets[k];
        const val = typeof entry === "object" ? parseBudgetValue(entry[type]) : parseBudgetValue(entry);
        return val !== null;
      })
      .sort((a, b) => b.localeCompare(a));
    if (pastMonths.length > 0) {
      const latest = state.budgets[pastMonths[0]];
      return typeof latest === "object" ? parseBudgetValue(latest[type]) : parseBudgetValue(latest);
    }
    return null;
  }

  function switchBudgetMode(mode) {
    if (!["usage", "outflow"].includes(mode)) return;
    state.settings.budgetMode = mode;
    saveState();
    renderMonthlySummary();
  }

  function renderMonthlySummary() {
    const monthKey = currentMonth.slice(0, 7);
    const todayMonthKey = Core.todayKey().slice(0, 7);
    const monthDate = Core.parseDateKey(currentMonth);
    const monthNum = monthDate.getMonth() + 1;
    const isCurrentMonth = monthKey === todayMonthKey;
    const isPastMonth = monthKey < todayMonthKey;
    const isFutureMonth = monthKey > todayMonthKey;

    const cycleDay = state.settings.cycleStartDay || 1;
    const summary = Core.summarizeMonth(monthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions);
    const mode = state.settings.budgetMode || "usage";
    const isUsage = mode === "usage";

    // モード切り替えタブ
    const usageBtn = $("mode-usage-btn");
    const outflowBtn = $("mode-outflow-btn");
    if (usageBtn && outflowBtn) {
      usageBtn.classList.toggle("is-active", isUsage);
      usageBtn.setAttribute("aria-selected", isUsage ? "true" : "false");
      outflowBtn.classList.toggle("is-active", !isUsage);
      outflowBtn.setAttribute("aria-selected", !isUsage ? "true" : "false");
    }

    // モード別の集計値と予算
    const currentAmount = isUsage ? summary.usage : summary.outflow;
    const budget = getEffectiveBudget(monthKey, mode);

    const budgetSetContainer = $("summary-budget-set");
    const budgetUnsetContainer = $("summary-budget-unset");
    const primaryLabel = $("budget-primary-label");
    const remainingEl = $("budget-remaining-amount");
    const remainingUnitEl = $("budget-remaining-unit");
    const spentLabel = $("budget-spent-label");
    const spentAmountEl = $("budget-spent-amount");
    const gaugeFill = $("budget-gauge-fill");
    const totalValEl = $("budget-total-val");
    const percentValEl = $("budget-percent-val");
    const unsetSpentLabel = $("budget-unset-spent-label");
    const unsetSpentAmountEl = $("budget-unset-spent-amount");

    const spentLabelText = isUsage ? "使った額" : "口座から出る額";
    if (spentLabel) spentLabel.textContent = spentLabelText;

    if (unsetSpentLabel) {
      if (isCurrentMonth) {
        unsetSpentLabel.textContent = isUsage ? "今月の支出" : "今月の口座出金";
      } else if (isPastMonth) {
        unsetSpentLabel.textContent = isUsage ? `${monthNum}月の支出` : `${monthNum}月の口座出金`;
      } else {
        unsetSpentLabel.textContent = isUsage ? `${monthNum}月の支出予定` : `${monthNum}月の出金予定`;
      }
    }

    if (budget === null) {
      // 予算未設定時
      if (budgetSetContainer) budgetSetContainer.classList.add("is-hidden");
      if (budgetUnsetContainer) budgetUnsetContainer.classList.remove("is-hidden");
      if (unsetSpentAmountEl) {
        unsetSpentAmountEl.textContent = formatNumber(currentAmount);
      }
    } else {
      // 予算設定済み
      if (budgetSetContainer) budgetSetContainer.classList.remove("is-hidden");
      if (budgetUnsetContainer) budgetUnsetContainer.classList.add("is-hidden");

      if (spentAmountEl) spentAmountEl.textContent = formatYen(currentAmount);

      const remaining = budget - currentAmount;
      const percent = budget > 0 ? Math.round((currentAmount / budget) * 100) : 0;
      const ratio = Math.min(100, Math.max(0, percent));

      if (isPastMonth) {
        // 過去月（例: 8月）
        if (remaining >= 0) {
          if (primaryLabel) primaryLabel.textContent = `${monthNum}月は 予算より`;
          if (remainingEl && remainingUnitEl) {
            remainingEl.textContent = formatNumber(remaining);
            remainingUnitEl.textContent = "円 少なく収まりました";
            remainingEl.classList.remove("is-over");
            remainingUnitEl.classList.remove("is-over");
          }
          if (percentValEl) percentValEl.textContent = `${percent}%使用（予算内）`;
        } else {
          const overAmount = Math.abs(remaining);
          if (primaryLabel) primaryLabel.textContent = `${monthNum}月は 予算を`;
          if (remainingEl && remainingUnitEl) {
            remainingEl.textContent = formatNumber(overAmount);
            remainingUnitEl.textContent = overAmount <= 1000 ? "円 わずかにオーバー" : "円 超過";
            remainingEl.classList.add("is-over");
            remainingUnitEl.classList.add("is-over");
          }
          if (percentValEl) {
            percentValEl.textContent = overAmount <= 1000
              ? `${percent}%使用（惜しい！）`
              : `${percent}%使用（超過）`;
          }
        }
      } else if (isFutureMonth) {
        // 未来月（例: 10月）
        if (remaining >= 0) {
          if (primaryLabel) primaryLabel.textContent = `${monthNum}月あと`;
          if (remainingEl && remainingUnitEl) {
            remainingEl.textContent = formatNumber(remaining);
            remainingUnitEl.textContent = "円 使える";
            remainingEl.classList.remove("is-over");
            remainingUnitEl.classList.remove("is-over");
          }
          if (percentValEl) percentValEl.textContent = `${percent}%使用`;
        } else {
          const overAmount = Math.abs(remaining);
          if (primaryLabel) primaryLabel.textContent = `${monthNum}月は 予算を`;
          if (remainingEl && remainingUnitEl) {
            remainingEl.textContent = formatNumber(overAmount);
            remainingUnitEl.textContent = overAmount <= 1000 ? "円 わずかにオーバー" : "円 超過";
            remainingEl.classList.add("is-over");
            remainingUnitEl.classList.add("is-over");
          }
          if (percentValEl) percentValEl.textContent = `${percent}%使用（超過）`;
        }
      } else {
        // 当月（今月）: 「あと〜円使える」
        if (remaining >= 0) {
          if (primaryLabel) primaryLabel.textContent = "あと";
          if (remainingEl && remainingUnitEl) {
            remainingEl.textContent = formatNumber(remaining);
            remainingUnitEl.textContent = "円 使える";
            remainingEl.classList.remove("is-over");
            remainingUnitEl.classList.remove("is-over");
          }
          if (percentValEl) percentValEl.textContent = `${percent}%使用`;
        } else {
          const overAmount = Math.abs(remaining);
          if (primaryLabel) primaryLabel.textContent = "今月は 予算を";
          if (remainingEl && remainingUnitEl) {
            remainingEl.textContent = formatNumber(overAmount);
            remainingUnitEl.textContent = overAmount <= 1000 ? "円 わずかにオーバー" : "円 超過";
            remainingEl.classList.add("is-over");
            remainingUnitEl.classList.add("is-over");
          }
          if (percentValEl) {
            percentValEl.textContent = overAmount <= 1000
              ? `${percent}%使用（惜しい！）`
              : `${percent}%使用（超過）`;
          }
        }
      }

      if (totalValEl) {
        totalValEl.textContent = formatYen(budget);
      }

      if (gaugeFill) {
        gaugeFill.style.width = `${ratio}%`;
        gaugeFill.className = "summary-gauge-fill";
        if (currentAmount > budget) {
          gaugeFill.classList.add("is-danger");
        } else if (currentAmount >= budget * 0.8) {
          gaugeFill.classList.add("is-warning");
        }
      }
    }

    // 内訳グリッド
    $("summary-direct").textContent = formatYen(summary.direct);
    $("summary-card").textContent = formatYen(summary.cardWithdrawal);
    $("summary-outflow").textContent = formatYen(summary.outflow);
    const next = Core.getNextCardWithdrawal(Core.todayKey(), state.expenses, state.cards, state.manualPayments, state.subscriptions);
    $("summary-next-card").textContent = next ? `${formatShortDate(next.date)}・${formatYen(next.amount)}` : "予定なし";
  }

  function openBudgetDialog() {
    const monthKey = currentMonth.slice(0, 7);
    const monthDate = Core.parseDateKey(currentMonth);
    const cycleDay = state.settings.cycleStartDay || 1;
    const cycleRange = Core.getCycleRange(monthKey, cycleDay);
    $("budget-dialog-title").textContent = cycleDay === 1
      ? `${monthDate.getFullYear()}年${monthDate.getMonth() + 1}月の予算`
      : `${monthDate.getFullYear()}年${monthDate.getMonth() + 1}月度 (${cycleRange.shortLabel}) の予算`;

    const usageVal = getEffectiveBudget(monthKey, "usage");
    const outflowVal = getEffectiveBudget(monthKey, "outflow");

    $("budget-usage-input").value = usageVal === null ? "" : formatNumber(usageVal);
    $("budget-outflow-input").value = outflowVal === null ? "" : formatNumber(outflowVal);

    showDialog($("budget-dialog"));
    window.setTimeout(() => $("budget-usage-input").focus(), 40);
  }

  function saveBudgetFromForm(event) {
    if (event) event.preventDefault();
    const monthKey = currentMonth.slice(0, 7);
    const usageRaw = $("budget-usage-input").value.trim();
    const outflowRaw = $("budget-outflow-input").value.trim();

    const usage = usageRaw === "" ? null : Core.normalizeAmount(usageRaw);
    const outflow = outflowRaw === "" ? null : Core.normalizeAmount(outflowRaw);

    if (!state.budgets) state.budgets = {};
    if (usage === null && outflow === null) {
      delete state.budgets[monthKey];
    } else {
      state.budgets[monthKey] = {
        usage: usage > 0 ? usage : null,
        outflow: outflow > 0 ? outflow : null,
      };
    }

    saveState();
    closeDialog($("budget-dialog"));
    renderMonthlySummary();
    showToast("月間予算を保存しました。");
  }

  async function clearMonthlyBudget() {
    const monthKey = currentMonth.slice(0, 7);
    const monthDate = Core.parseDateKey(currentMonth);
    const confirmed = await confirmAction(
      `${monthDate.getFullYear()}年${monthDate.getMonth() + 1}月の個別予算をクリアしますか？`,
      "この月の個別設定を削除し、前月からの引き継ぎまたは未設定に戻します。",
      "クリアする"
    );
    if (!confirmed) return;
    if (state.budgets && state.budgets[monthKey]) {
      delete state.budgets[monthKey];
      saveState();
    }
    closeDialog($("budget-dialog"));
    renderMonthlySummary();
    showToast("この月の個別予算をクリアしました。");
  }

  function renderBalance() {
    const current = state.settings.currentBalance;
    const reserve = state.settings.minimumReserve;
    const upcoming = Core.getUpcomingCardTotal(Core.todayKey(), 30, state.expenses, state.cards, state.manualPayments, state.subscriptions);
    
    // 今月/直近30日の固定費予定
    const today = Core.todayKey();
    const next30 = Core.addDays(today, 30);
    let fixedTotal = state.expenses
      .filter((e) => e.category === "固定費" && e.date >= today && e.date <= next30)
      .reduce((sum, e) => sum + Core.normalizeAmount(e.amount), 0);

    const nowY = Number(today.slice(0, 4));
    const nowM = Number(today.slice(5, 7));
    (state.subscriptions || []).forEach((sub) => {
      if (!sub || sub.isActive === false) return;
      for (let offset = 0; offset <= 1; offset++) {
        const target = Core.addMonths(nowY, nowM - 1, offset);
        const mKey = `${target.year}-${String(target.monthIndex + 1).padStart(2, "0")}`;
        const usageDate = Core.getSubscriptionUsageDate(sub, mKey);
        if (usageDate && usageDate >= today && usageDate <= next30) {
          fixedTotal += Core.normalizeAmount(sub.amount);
        }
      }
    });

    const balanceCurrentEl = $("balance-current");
    const balanceUpcomingEl = $("balance-upcoming");
    const balanceFixedEl = $("balance-fixed-upcoming");
    const balanceAfterEl = $("balance-after");
    const balanceAvailableEl = $("balance-available");

    if (balanceCurrentEl) balanceCurrentEl.textContent = current === null ? "未設定" : formatYen(current);
    if (balanceUpcomingEl) balanceUpcomingEl.textContent = formatYen(upcoming);
    if (balanceFixedEl) balanceFixedEl.textContent = formatYen(fixedTotal);
    if (balanceAfterEl) {
      balanceAfterEl.textContent = current === null ? "未設定" : formatSignedYen(current - upcoming);
      balanceAfterEl.parentElement.classList.toggle("is-negative", current !== null && current - upcoming < 0);
    }
    if (balanceAvailableEl) {
      balanceAvailableEl.textContent = current === null || reserve === null ? "未設定" : formatSignedYen(current - upcoming - reserve);
      balanceAvailableEl.parentElement.classList.toggle("is-negative", current !== null && reserve !== null && current - upcoming - reserve < 0);
    }
  }

  function renderCategorySummary() {
    const container = $("category-summary");
    if (!container) return;
    const monthKey = reportMonth.slice(0, 7);
    const cycleDay = state.settings.cycleStartDay || 1;
    const summary = Core.summarizeMonth(monthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions);
    const entries = Object.entries(summary.categories).sort((a, b) => b[1] - a[1]);
    if (!entries.length) {
      container.replaceChildren(createElement("p", "empty-inline", "この月の支出はまだありません。"));
      return;
    }
    const max = entries[0][1] || 1;
    const nodes = entries.map(([category, amount]) => {
      const row = createElement("div", "category-row");
      const label = createElement("span", "", category);
      const track = createElement("div", "progress-track");
      const value = createElement("div", "progress-value");
      value.style.width = `${Math.max(3, Math.round((amount / max) * 100))}%`;
      track.append(value);
      row.append(label, track, createElement("strong", "", formatYen(amount)));
      return row;
    });
    container.replaceChildren(...nodes);
  }

  function renderHistory() {
    const month = $("history-month").value;
    const category = $("history-category").value;
    const payment = $("history-payment").value;
    const query = ($("history-search")?.value || "").trim().toLowerCase();
    const cycleDay = state.settings.cycleStartDay || 1;

    const items = state.expenses
      .filter((expense) => {
        if (!month) return true;
        if (cycleDay === 1) return expense.date.startsWith(month);
        return Core.getDateCycleMonthKey(expense.date, cycleDay) === month;
      })
      .filter((expense) => !category || expense.category === category)
      .filter((expense) => !payment || expense.paymentMethod === payment)
      .filter((expense) => {
        if (!query) return true;
        const memoMatch = (expense.memo || "").toLowerCase().includes(query);
        const catMatch = (expense.category || "").toLowerCase().includes(query);
        const card = state.cards.find((c) => c.id === expense.cardId);
        const cardMatch = card && card.name.toLowerCase().includes(query);
        const payMatch = (expense.paymentMethod || "").toLowerCase().includes(query);
        const amountMatch = String(expense.amount).includes(query);
        const dateMatch = expense.date.includes(query);
        return memoMatch || catMatch || cardMatch || payMatch || amountMatch || dateMatch;
      })
      .sort((a, b) => b.date.localeCompare(a.date) || b.createdAt.localeCompare(a.createdAt));

    const filteredTotal = items.reduce((total, expense) => total + Core.normalizeAmount(expense.amount), 0);
    const resultCount = $("history-result-count");
    resultCount.replaceChildren(
      createElement("span", "", `${items.length}件`),
      createElement("strong", "", `合計 ${formatYen(filteredTotal)}`)
    );
    const list = $("history-list");
    if (!items.length) {
      list.replaceChildren(emptyState(
        query ? "一致する支出が見つかりません" : "該当する支出はありません",
        query ? "別のキーワードで検索してみてください。" : "条件を変えるか、右下の＋から登録できます。"
      ));
      return;
    }
    list.replaceChildren(...items.map(createHistoryItem));
  }

  function createHistoryItem(expense) {
    const button = createElement("button", "record-item");
    button.type = "button";
    button.setAttribute("aria-label", `${formatDate(expense.date)} ${expense.category} ${formatYen(expense.amount)}を編集`);
    const icon = createElement("span", "record-icon", CATEGORY_ICONS[expense.category] || "他");
    const main = createElement("span", "record-main");
    main.append(createElement("strong", "", expense.memo || expense.category));
    const card = state.cards.find((item) => item.id === expense.cardId);
    const detail = [formatShortDate(expense.date), expense.category, expense.paymentMethod];
    if (card) detail.push(card.name);
    main.append(createElement("span", "", detail.join("・")));
    button.append(icon, main, createElement("strong", "record-amount", formatYen(expense.amount)));
    button.addEventListener("click", () => openExpenseDialog(expense.date, expense.id));
    return button;
  }

  function renderCards() {
    const list = $("cards-list");
    if (!state.cards.length) {
      list.replaceChildren(emptyState("カードが登録されていません", "カードを追加すると、利用日から引き落とし日を自動計算します。"));
      return;
    }
    list.replaceChildren(...state.cards.map(createCardItem));
  }

  function renderCardHistoryList(cardId = null) {
    const card = cardId ? state.cards.find((c) => c.id === cardId) : null;
    const heading = $("card-history-heading");
    if (heading) {
      heading.textContent = card ? `${card.name}の確定額履歴` : "確定額の履歴";
    }

    const list = $("card-history-list");
    let items = state.manualPayments.slice();
    if (cardId) {
      items = items.filter((item) => item.cardId === cardId);
    }
    // 月ごとの新しい順（降順）
    items.sort((a, b) => b.date.localeCompare(a.date));

    if (!items.length) {
      list.replaceChildren(emptyState("確定額の記録はありません", "カード画面の「確定額を追加」から登録できます。"));
      return;
    }

    const rows = items.map((payment) => {
      const pCard = state.cards.find((c) => c.id === payment.cardId);
      const itemEl = createElement("div", "record-item");
      const icon = createElement("span", "record-icon", "引落");
      const main = createElement("span", "record-main");
      main.append(createElement("strong", "", formatDate(payment.date)));
      const detailParts = [];
      if (pCard) detailParts.push(pCard.name);
      if (payment.memo) detailParts.push(payment.memo);
      detailParts.push("引き落とし確定");
      main.append(createElement("span", "", detailParts.join("・")));

      const amountEl = createElement("strong", "record-amount", formatYen(payment.amount));
      const editBtn = createElement("button", "small-button", "編集");
      editBtn.type = "button";
      editBtn.addEventListener("click", () => openManualPaymentDialog(payment.cardId, payment.id));

      itemEl.append(icon, main, amountEl, editBtn);
      return itemEl;
    });

    list.replaceChildren(...rows);
  }

  function createCardItem(card) {
    const article = createElement("article", "card-item");
    article.style.setProperty("--card-color", card.color);

    // 集計期間と今月のカード利用実績（個別支出 ＋ 固定費・サブスク）
    const cycleDay = state.settings.cycleStartDay || 1;
    const monthKey = currentMonth.slice(0, 7);
    const range = Core.getCycleRange(monthKey, cycleDay);

    const cardExpenses = (state.expenses || [])
      .filter((e) => e.cardId === card.id && e.date >= range.startDate && e.date <= range.endDate)
      .map((e) => ({
        isSubscription: false,
        id: e.id,
        date: e.date,
        name: e.memo || e.category,
        category: e.category,
        amount: Core.normalizeAmount(e.amount),
        includeInWithdrawal: e.includeInWithdrawal !== false,
      }));

    const cardSubscriptions = [];
    (state.subscriptions || []).forEach((sub) => {
      if (!sub || sub.isActive === false || sub.paymentMethod !== Core.CREDIT_PAYMENT || sub.cardId !== card.id) return;
      const usageDate = Core.getSubscriptionUsageDate(sub, monthKey);
      if (usageDate && usageDate >= range.startDate && usageDate <= range.endDate) {
        cardSubscriptions.push({
          isSubscription: true,
          id: sub.id,
          date: usageDate,
          name: sub.name,
          category: sub.category || "固定費",
          icon: sub.icon,
          type: sub.type,
          amount: Core.normalizeAmount(sub.amount),
          includeInWithdrawal: sub.includeInWithdrawal !== false,
        });
      }
    });

    const allCardItems = [...cardExpenses, ...cardSubscriptions].sort((a, b) => b.date.localeCompare(a.date));
    const currentMonthUsage = allCardItems.reduce((sum, e) => sum + e.amount, 0);

    // --- 1. クレジットカード券面風UI (Card Face) ---
    const cardFace = createElement("div", "credit-card-face");

    // トップ行：ICチップ・非接触マーク & カードブランド名
    const faceTop = createElement("div", "card-face-top");
    const chipGroup = createElement("div", "card-chip-group");
    chipGroup.append(
      createElement("div", "card-emv-chip"),
      createElement("div", "card-contactless", ")))")
    );
    const brand = createElement("span", "card-face-brand", card.name);
    faceTop.append(chipGroup, brand);

    // 中央行：今月の利用実績
    const faceMiddle = createElement("div", "card-face-middle");
    const usageBlock = createElement("div", "card-face-usage-block");
    usageBlock.append(
      createElement("span", "card-usage-label", `今月利用（${range.shortLabel}）`),
      createElement("strong", "card-usage-val", formatYen(currentMonthUsage))
    );
    const countBadge = createElement("span", "card-usage-count-badge", `${allCardItems.length}件の利用`);
    faceMiddle.append(usageBlock, countBadge);

    // フッター行：締め日・支払日仕様 & 今月の確定額バッジ
    const faceFooter = createElement("div", "card-face-footer");
    const specCol = createElement("div", "card-face-spec");
    const closingLabel = card.closingDay === "end" ? "月末締め" : `${card.closingDay}日締め`;
    const monthLabel = Number(card.paymentMonth) === 0 ? "当月" : "翌月";
    const weekendLabel = { none: "", previous: "(前営業日)", next: "(翌営業日)" }[card.weekendAdjustment];
    specCol.append(
      createElement("span", "card-spec-label", "CLOSING / PAYMENT"),
      createElement("strong", "card-spec-value", `${closingLabel} → ${monthLabel}${card.paymentDay}日${weekendLabel ? " " + weekendLabel : ""}`)
    );

    // 今月の引き落とし確定額
    const currentMonthPayments = state.manualPayments
      .filter((item) => item.cardId === card.id && item.date.startsWith(monthKey))
      .sort((a, b) => b.date.localeCompare(a.date));

    const paymentBadge = createElement("div", "card-face-payment-badge");
    if (currentMonthPayments.length > 0) {
      const totalAmount = currentMonthPayments.reduce((sum, item) => sum + item.amount, 0);
      paymentBadge.append(
        createElement("span", "card-badge-label", "今月の引落確定額"),
        createElement("strong", "card-badge-amount", formatYen(totalAmount))
      );
    } else {
      paymentBadge.append(
        createElement("span", "card-badge-label", "今月の引落確定額"),
        createElement("span", "card-badge-amount is-empty", "未確定")
      );
    }
    faceFooter.append(specCol, paymentBadge);

    cardFace.append(faceTop, faceMiddle, faceFooter);
    article.append(cardFace);

    // --- 2. カード下部操作エリア (Card Controls Panel) ---
    const controlsPanel = createElement("div", "card-controls-panel");
    if (card.memo) {
      controlsPanel.append(createElement("p", "card-memo-text", card.memo));
    }

    // 今月の利用明細アコーディオン
    const expenseAccordion = createElement("details", "card-expense-accordion");
    const summary = createElement("summary", "card-expense-summary");
    summary.append(
      createElement("span", "card-expense-summary-title", `今月の利用明細（${allCardItems.length}件・${formatYen(currentMonthUsage)}）`),
      createElement("span", "card-accordion-arrow", "⌄")
    );
    expenseAccordion.append(summary);

    const expenseList = createElement("div", "card-expense-list");
    if (!allCardItems.length) {
      expenseList.append(createElement("p", "card-expense-empty", "今月の利用記録はありません"));
    } else {
      allCardItems.forEach((item) => {
        const row = createElement("button", "card-expense-row");
        row.type = "button";

        const left = createElement("div", "card-expense-left");
        const dateEl = createElement("span", "card-expense-date", formatDate(item.date, { month: "numeric", day: "numeric", weekday: "short" }));
        left.append(dateEl);

        if (item.isSubscription) {
          const iconDef = SUBSCRIPTION_ICONS[item.icon] || SUBSCRIPTION_ICONS.other;
          const iconSpan = createElement("span", "card-expense-cat-icon");
          iconSpan.innerHTML = iconDef.svg;
          const nameEl = createElement("span", "card-expense-memo", item.name);
          const badgeType = item.type === "subscription" ? "サブスク" : "固定費";
          const subBadge = createElement("span", "badge-card-subscription", badgeType);
          left.append(iconSpan, nameEl, subBadge);
          row.title = `タップして${badgeType}「${item.name}」の詳細を表示`;
          row.addEventListener("click", () => openSubscriptionDetailDialog(item.id));
        } else {
          const catIcon = createElement("span", "card-expense-cat-icon", CATEGORY_ICONS[item.category] || "💳");
          const memoEl = createElement("span", "card-expense-memo", item.name);
          left.append(catIcon, memoEl);
          row.title = "タップして支出を編集";
          row.addEventListener("click", () => openExpenseDialog(item.date, item.id));
        }

        if (item.includeInWithdrawal === false) {
          left.append(createElement("span", "badge-reimburse", "立替・精算済"));
        }

        const right = createElement("div", "card-expense-right");
        const amtEl = createElement("strong", "card-expense-amount", formatYen(item.amount));
        const editIcon = createElement("span", "card-expense-edit-hint", "›");
        right.append(amtEl, editIcon);

        row.append(left, right);
        expenseList.append(row);
      });
    }
    expenseAccordion.append(expenseList);
    controlsPanel.append(expenseAccordion);

    // アクションボタン（確定額追加・設定編集）
    const actionsGroup = createElement("div", "card-actions-group");
    const paymentButton = createElement("button", "small-button button-primary", "＋ 確定額を追加");
    paymentButton.type = "button";
    paymentButton.addEventListener("click", () => openManualPaymentDialog(card.id));

    const editButton = createElement("button", "small-button", "設定を編集");
    editButton.type = "button";
    editButton.addEventListener("click", () => openCardDialog(card.id));

    actionsGroup.append(paymentButton, editButton);
    controlsPanel.append(actionsGroup);

    // 確定額履歴リンク
    const historyLink = createElement("button", "card-history-link-btn");
    historyLink.type = "button";
    historyLink.append(
      createElement("span", "", "確定額の履歴を見る"),
      createElement("span", "", "›")
    );
    historyLink.addEventListener("click", () => switchCardSubView("history", card.id));
    controlsPanel.append(historyLink);

    article.append(controlsPanel);
    return article;
  }

  function countCardExpenses(cardId) {
    return state.expenses.filter((expense) => expense.cardId === cardId).length;
  }

  /* ==========================================================================
     固定費・サブスク（サービス一覧型UI）ロジック
     ========================================================================== */

  function moveSubscriptionMonth(amount) {
    const date = Core.parseDateKey(subscriptionMonth);
    if (!date) return;
    date.setMonth(date.getMonth() + amount, 1);
    subscriptionMonth = Core.toDateKey(date);
    renderSubscriptionsView();
  }

  function switchSubscriptionScope(scope) {
    subscriptionScope = scope;
    const scopeMonth = $("sub-scope-month");
    const scopeAll = $("sub-scope-all");
    if (scopeMonth) {
      scopeMonth.classList.toggle("is-active", scope === "month");
      scopeMonth.setAttribute("aria-selected", scope === "month" ? "true" : "false");
    }
    if (scopeAll) {
      scopeAll.classList.toggle("is-active", scope === "all");
      scopeAll.setAttribute("aria-selected", scope === "all" ? "true" : "false");
    }
    renderSubscriptionsView();
  }

  function setSubscriptionFilterPay(pay) {
    subscriptionFilterPay = pay;
    document.querySelectorAll("[data-filter-pay]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.filterPay === pay);
    });
    renderSubscriptionsView();
  }

  function setSubscriptionFilterType(type) {
    subscriptionFilterType = type;
    document.querySelectorAll("[data-filter-type]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.filterType === type);
    });
    renderSubscriptionsView();
  }

  function renderSubscriptionsView() {
    const parsedDate = Core.parseDateKey(subscriptionMonth);
    const monthKey = subscriptionMonth.slice(0, 7);

    const titleEl = $("sub-month-title");
    if (titleEl && parsedDate) {
      titleEl.textContent = `${parsedDate.getFullYear()}年${parsedDate.getMonth() + 1}月`;
    }
    const picker = $("sub-month-picker");
    if (picker) picker.value = monthKey;

    // 1. 今月の固定費サマリー（合計・内訳計算）
    let totalMonthAmount = 0;
    let fixedSubtotal = 0;
    let subSubtotal = 0;

    (state.subscriptions || []).forEach((item) => {
      if (!item || item.isActive === false) return;
      const usageDate = Core.getSubscriptionUsageDate(item, monthKey);
      if (usageDate) {
        const amt = Core.normalizeAmount(item.amount);
        totalMonthAmount += amt;
        if (item.type === "subscription") {
          subSubtotal += amt;
        } else {
          fixedSubtotal += amt;
        }
      }
    });

    const totalEl = $("sub-summary-total");
    if (totalEl) totalEl.textContent = formatYen(totalMonthAmount);
    const statFixedEl = $("sub-stat-fixed");
    if (statFixedEl) statFixedEl.textContent = formatYen(fixedSubtotal);
    const statSubEl = $("sub-stat-sub");
    if (statSubEl) statSubEl.textContent = formatYen(subSubtotal);

    // 2. 表示リストのフィルタリングとソート
    let itemsToDisplay = [];
    const isMonthScope = subscriptionScope === "month";

    (state.subscriptions || []).forEach((item) => {
      if (!item) return;
      const usageDate = Core.getSubscriptionUsageDate(item, monthKey, true);

      if (isMonthScope) {
        // 今月スコープ：当月に対象のもの（停止中も一覧に表示）
        if (!usageDate) return;
        itemsToDisplay.push({ item, usageDate });
      } else {
        // 登録一覧スコープ：すべて
        itemsToDisplay.push({ item, usageDate: usageDate || "" });
      }
    });

    // フィルター適用（支払い方法・種別）
    if (subscriptionFilterPay !== "all") {
      itemsToDisplay = itemsToDisplay.filter(({ item }) => {
        if (subscriptionFilterPay === "card") return item.paymentMethod === Core.CREDIT_PAYMENT;
        if (subscriptionFilterPay === "direct") return item.paymentMethod === "口座引き落とし";
        if (subscriptionFilterPay === "other") return item.paymentMethod !== Core.CREDIT_PAYMENT && item.paymentMethod !== "口座引き落とし";
        return true;
      });
    }

    if (subscriptionFilterType !== "all") {
      itemsToDisplay = itemsToDisplay.filter(({ item }) => item.type === subscriptionFilterType);
    }

    // ソート（日付順 → 名称順）
    itemsToDisplay.sort((a, b) => {
      if (isMonthScope && a.usageDate && b.usageDate) {
        return a.usageDate.localeCompare(b.usageDate);
      }
      const dayA = a.item.paymentDay === "end" ? 99 : Number(a.item.paymentDay) || 1;
      const dayB = b.item.paymentDay === "end" ? 99 : Number(b.item.paymentDay) || 1;
      if (dayA !== dayB) return dayA - dayB;
      return a.item.name.localeCompare(b.item.name);
    });

    const container = $("subscription-list");
    const emptyCard = $("subscription-empty-state");

    if (!container) return;

    if (!itemsToDisplay.length) {
      container.replaceChildren();
      if (emptyCard) emptyCard.classList.remove("is-hidden");
      return;
    }

    if (emptyCard) emptyCard.classList.add("is-hidden");

    const cards = itemsToDisplay.map(({ item, usageDate }) => {
      const cardEl = createElement("button", `sub-card-item${item.isActive === false ? " is-paused" : ""}`);
      cardEl.type = "button";
      cardEl.setAttribute("aria-label", `${item.name}（${formatYen(item.amount)}）の詳細`);

      // 左側：円形アイコン
      const iconWrap = createElement("div", "sub-icon-circle");
      const iconDef = SUBSCRIPTION_ICONS[item.icon] || SUBSCRIPTION_ICONS.other;
      iconWrap.innerHTML = iconDef.svg;

      // 中央：サービス情報
      const body = createElement("div", "sub-card-body");

      // サービス名
      const title = createElement("span", "sub-card-title", item.name);

      // 金額 ＆ 間隔バッジ
      const amtRow = createElement("div", "sub-card-amount-line");
      const amtEl = createElement("strong", "sub-card-amount", formatYen(item.amount));
      const intervalLabel = { monthly: "毎月", yearly: "毎年", once: "一回のみ" }[item.interval] || "毎月";
      const intervalBadge = createElement("span", "sub-badge-interval", intervalLabel);
      amtRow.append(amtEl, intervalBadge);

      // バッジ行（固定費/サブスク、支払い方法、カード名・登録色）
      const badgesRow = createElement("div", "sub-card-badges");

      // 種別バッジ
      const typeLabel = item.type === "subscription" ? "サブスク" : "固定費";
      const typeClass = item.type === "subscription" ? "sub-badge-type-sub" : "sub-badge-type-fixed";
      badgesRow.append(createElement("span", `sub-badge ${typeClass}`, typeLabel));

      // 支払い方法バッジ
      if (item.paymentMethod === Core.CREDIT_PAYMENT) {
        const card = state.cards.find((c) => c.id === item.cardId);
        const cardBadge = createElement("span", "sub-badge sub-badge-pay-card", card ? card.name : "クレジットカード");
        if (card && card.color) {
          cardBadge.style.setProperty("--badge-card-color", card.color);
        }
        badgesRow.append(cardBadge);
      } else if (item.paymentMethod === "口座引き落とし") {
        badgesRow.append(createElement("span", "sub-badge sub-badge-pay-direct", "口座振替"));
      } else {
        badgesRow.append(createElement("span", "sub-badge sub-badge-pay-other", item.paymentMethod));
      }

      if (item.isActive === false) {
        badgesRow.append(createElement("span", "sub-badge sub-paused-badge", "停止中"));
      }

      body.append(title, amtRow, badgesRow);

      // カードで引落予定に含む場合のガイド表示
      if (item.paymentMethod === Core.CREDIT_PAYMENT && item.includeInWithdrawal !== false) {
        body.append(createElement("span", "sub-withdrawal-indicator", "引落予定に含む"));
      }

      // 右側：矢印
      const arrow = createElement("span", "sub-card-arrow", "›");

      cardEl.append(iconWrap, body, arrow);
      cardEl.addEventListener("click", () => openSubscriptionDetailDialog(item.id));
      return cardEl;
    });

    container.replaceChildren(...cards);
  }

  function refreshSubscriptionCardOptions(selectedCardId = "") {
    const select = $("sub-card-select");
    if (!select) return;
    const options = state.cards.map((c) => ({ value: c.id, label: c.name }));
    fillSelect(select, options.length ? options : [{ value: "", label: "登録カードなし" }]);
    if (selectedCardId && state.cards.some((c) => c.id === selectedCardId)) {
      select.value = selectedCardId;
    }
  }

  function setSubscriptionIconInForm(iconId) {
    const iconKey = SUBSCRIPTION_ICONS[iconId] ? iconId : "other";
    const hidden = $("sub-icon-val");
    if (hidden) hidden.value = iconKey;

    const preview = $("sub-icon-preview-box");
    if (preview) {
      const def = SUBSCRIPTION_ICONS[iconKey] || SUBSCRIPTION_ICONS.other;
      preview.innerHTML = def.svg;
    }
  }

  function openSubscriptionIconDialog() {
    const grid = $("sub-icon-grid");
    if (!grid) return;

    const currentIcon = $("sub-icon-val")?.value || "other";
    const buttons = Object.entries(SUBSCRIPTION_ICONS).map(([key, def]) => {
      const btn = createElement("button", `sub-icon-btn${key === currentIcon ? " is-selected" : ""}`);
      btn.type = "button";
      btn.innerHTML = `${def.svg}<span>${def.name}</span>`;
      btn.addEventListener("click", () => {
        setSubscriptionIconInForm(key);
        closeDialog($("subscription-icon-dialog"));
      });
      return btn;
    });

    grid.replaceChildren(...buttons);
    showDialog($("subscription-icon-dialog"));
  }

  function updateSubscriptionFormVisibility() {
    const paymentMethod = $("sub-payment-method").value;
    const isCredit = paymentMethod === Core.CREDIT_PAYMENT;
    const cardField = $("sub-card-field");
    const withdrawalRow = $("sub-withdrawal-toggle-row");

    if (cardField) cardField.classList.toggle("is-hidden", !isCredit);
    if (withdrawalRow) withdrawalRow.classList.toggle("is-hidden", !isCredit);

    const interval = $("sub-interval-select").value;
    const dayField = $("sub-day-field");
    const monthField = $("sub-month-field");
    const onetimeField = $("sub-onetime-field");

    if (dayField) dayField.classList.toggle("is-hidden", interval === "once");
    if (monthField) monthField.classList.toggle("is-hidden", interval !== "yearly");
    if (onetimeField) onetimeField.classList.toggle("is-hidden", interval !== "once");

    updateSubscriptionDayHint();
  }

  function updateSubscriptionDayHint() {
    const paymentMethod = $("sub-payment-method").value;
    const isCredit = paymentMethod === Core.CREDIT_PAYMENT;
    const hintEl = $("sub-day-hint");
    if (!hintEl) return;

    if (isCredit) {
      const cardId = $("sub-card-select").value;
      const card = state.cards.find((c) => c.id === cardId);
      if (card) {
        const dayLabel = card.paymentDay === "end" ? "月末" : `${card.paymentDay}日`;
        hintEl.textContent = `※ ${card.name}の引き落とし日（${dayLabel}）`;
        return;
      }
    }
    hintEl.textContent = "";
  }

  function onSubscriptionCardChange() {
    const isCredit = $("sub-payment-method").value === Core.CREDIT_PAYMENT;
    if (isCredit) {
      const cardId = $("sub-card-select").value;
      const card = state.cards.find((c) => c.id === cardId);
      if (card && $("sub-day-select")) {
        $("sub-day-select").value = String(card.paymentDay);
      }
    }
    updateSubscriptionDayHint();
  }

  function openSubscriptionDialog(subId = "") {
    const sub = subId ? state.subscriptions.find((item) => item.id === subId) : null;
    const form = $("subscription-form");
    if (form) form.reset();

    const titleEl = $("subscription-dialog-title");
    if (titleEl) titleEl.textContent = sub ? "固定費・サブスクを編集" : "固定費・サブスクを追加";

    $("sub-id").value = sub ? sub.id : "";
    $("sub-name-input").value = sub ? sub.name : "";
    setSubscriptionIconInForm(sub ? sub.icon : "other");
    $("sub-type-select").value = sub ? sub.type : "fixed";
    $("sub-amount-input").value = sub ? formatNumber(sub.amount) : "";
    $("sub-amount-type").value = sub ? sub.amountType : "fixed";
    $("sub-interval-select").value = sub ? sub.interval : "monthly";

    const initialPayMethod = sub ? sub.paymentMethod : (state.cards.length ? Core.CREDIT_PAYMENT : "口座引き落とし");
    $("sub-payment-method").value = initialPayMethod;

    refreshSubscriptionCardOptions(sub ? sub.cardId : "");

    let dayVal = "1";
    if (sub) {
      dayVal = String(sub.paymentDay);
    } else if (initialPayMethod === Core.CREDIT_PAYMENT && state.cards.length) {
      const selectedCardId = $("sub-card-select").value || state.cards[0].id;
      const selectedCard = state.cards.find((c) => c.id === selectedCardId) || state.cards[0];
      dayVal = String(selectedCard.paymentDay);
    }
    $("sub-day-select").value = dayVal;

    const monthVal = sub ? String(sub.paymentMonth || 1) : "1";
    $("sub-month-select").value = monthVal;

    $("sub-onetime-input").value = sub ? (sub.oneTimeDate || "") : Core.todayKey();
    $("sub-include-withdrawal").checked = sub ? sub.includeInWithdrawal !== false : true;
    $("sub-category-select").value = sub ? sub.category : "固定費";
    $("sub-memo-input").value = sub ? sub.memo : "";
    $("sub-is-active").checked = sub ? sub.isActive !== false : true;

    updateSubscriptionFormVisibility();

    const delBtn = $("delete-subscription-btn");
    if (delBtn) delBtn.classList.toggle("is-hidden", !sub);

    showDialog($("subscription-dialog"));
  }

  function saveSubscriptionFromForm(event) {
    event.preventDefault();
    const name = $("sub-name-input").value.trim();
    const amount = Core.normalizeAmount($("sub-amount-input").value);
    if (!name || amount <= 0) {
      showToast("サービス名と金額を入力してください。");
      return;
    }

    const id = $("sub-id").value;
    const existing = state.subscriptions.find((item) => item.id === id);

    const paymentMethod = $("sub-payment-method").value;
    const cardId = paymentMethod === Core.CREDIT_PAYMENT ? $("sub-card-select").value : "";
    const interval = $("sub-interval-select").value;

    const record = {
      id: existing ? existing.id : uid("sub"),
      name,
      icon: $("sub-icon-val").value || "other",
      type: $("sub-type-select").value,
      amount,
      amountType: $("sub-amount-type").value,
      interval,
      paymentDay: interval === "once" ? 1 : ($("sub-day-select").value === "end" ? "end" : Number($("sub-day-select").value) || 1),
      paymentMonth: interval === "yearly" ? Number($("sub-month-select").value) || 1 : null,
      oneTimeDate: interval === "once" ? $("sub-onetime-input").value : "",
      paymentMethod,
      cardId,
      includeInWithdrawal: $("sub-include-withdrawal").checked,
      category: $("sub-category-select").value,
      memo: $("sub-memo-input").value.trim().slice(0, 200),
      isActive: $("sub-is-active").checked,
      createdAt: existing ? existing.createdAt : new Date().toISOString(),
      isSample: existing ? existing.isSample : false,
    };

    if (existing) {
      Object.assign(existing, record);
    } else {
      state.subscriptions.push(record);
    }

    saveState();
    closeDialog($("subscription-dialog"));
    renderAll();
    showToast(existing ? `「${name}」を更新しました。` : `「${name}」を登録しました。`);
  }

  function openSubscriptionDetailDialog(subId) {
    const sub = state.subscriptions.find((item) => item.id === subId);
    if (!sub) return;

    selectedDetailSubId = subId;

    const nameEl = $("sub-detail-name");
    if (nameEl) nameEl.textContent = sub.name;

    const amtEl = $("sub-detail-amount");
    if (amtEl) amtEl.textContent = formatYen(sub.amount);

    const iconWrap = $("sub-detail-icon-wrap");
    if (iconWrap) {
      const iconDef = SUBSCRIPTION_ICONS[sub.icon] || SUBSCRIPTION_ICONS.other;
      iconWrap.innerHTML = iconDef.svg;
    }

    const intervalBadge = $("sub-detail-interval-badge");
    if (intervalBadge) {
      intervalBadge.textContent = { monthly: "毎月", yearly: "毎年", once: "一回のみ" }[sub.interval] || "毎月";
    }

    const statusPill = $("sub-detail-status-pill");
    if (statusPill) {
      const active = sub.isActive !== false;
      statusPill.textContent = active ? "有効" : "停止中";
      statusPill.classList.toggle("is-active", active);
      statusPill.classList.toggle("is-paused", !active);
    }

    const typeEl = $("sub-detail-type");
    if (typeEl) typeEl.textContent = sub.type === "subscription" ? "サブスク（定期サービス）" : "固定費";

    // 次回支払日計算
    const nowKey = Core.todayKey().slice(0, 7);
    let nextDate = Core.getSubscriptionUsageDate(sub, nowKey);
    if (!nextDate || nextDate < Core.todayKey()) {
      const nextMonthObj = Core.addMonths(Number(nowKey.slice(0, 4)), Number(nowKey.slice(5, 7)) - 1, 1);
      const nextMKey = `${nextMonthObj.year}-${String(nextMonthObj.monthIndex + 1).padStart(2, "0")}`;
      nextDate = Core.getSubscriptionUsageDate(sub, nextMKey) || nextDate;
    }
    const nextDateEl = $("sub-detail-next-date");
    if (nextDateEl) {
      nextDateEl.textContent = nextDate ? formatDate(nextDate) : "—";
    }

    const payEl = $("sub-detail-payment-method");
    if (payEl) payEl.textContent = sub.paymentMethod;

    const cardRow = $("sub-detail-card-row");
    const cardNameEl = $("sub-detail-card-name");
    const isCredit = sub.paymentMethod === Core.CREDIT_PAYMENT;
    if (cardRow) cardRow.classList.toggle("is-hidden", !isCredit);
    if (cardNameEl && isCredit) {
      const card = state.cards.find((c) => c.id === sub.cardId);
      cardNameEl.textContent = card ? card.name : "未選択";
    }

    const withdrawalRow = $("sub-detail-withdrawal-row");
    const withdrawalStatusEl = $("sub-detail-withdrawal-status");
    if (withdrawalRow) withdrawalRow.classList.toggle("is-hidden", !isCredit);
    if (withdrawalStatusEl && isCredit) {
      withdrawalStatusEl.textContent = sub.includeInWithdrawal !== false ? "引き落とし予定に含む" : "含まない（対象外）";
    }

    const catEl = $("sub-detail-category");
    if (catEl) catEl.textContent = sub.category;

    const memoRow = $("sub-detail-memo-row");
    const memoEl = $("sub-detail-memo");
    if (memoRow) memoRow.classList.toggle("is-hidden", !sub.memo);
    if (memoEl) memoEl.textContent = sub.memo || "";

    const toggleBtn = $("sub-detail-toggle-active-btn");
    if (toggleBtn) {
      toggleBtn.textContent = sub.isActive !== false ? "一時停止する" : "再開する";
    }

    showDialog($("subscription-detail-dialog"));
  }

  function toggleSubscriptionActive(subId) {
    const sub = state.subscriptions.find((item) => item.id === subId);
    if (!sub) return;

    sub.isActive = (sub.isActive === false);
    saveState();
    closeDialog($("subscription-detail-dialog"));
    renderAll();
    showToast(`「${sub.name}」を${sub.isActive ? "再開" : "一時停止"}しました。`);
  }

  async function deleteSubscription(subId) {
    const sub = state.subscriptions.find((item) => item.id === subId);
    if (!sub) return;

    const confirmed = await confirmAction(
      `「${sub.name}」を削除しますか？`,
      "削除すると、毎月の集計および引き落とし予定から除外されます。",
      "削除する"
    );
    if (!confirmed) return;

    state.subscriptions = state.subscriptions.filter((item) => item.id !== subId);
    saveState();
    closeDialog($("subscription-detail-dialog"));
    closeDialog($("subscription-dialog"));
    renderAll();
    showToast(`「${sub.name}」を削除しました。`);
  }

  function deleteCurrentSubscription() {
    const id = $("sub-id").value;
    if (id) deleteSubscription(id);
  }

  let isFavoritesDeleteMode = false;

  function renderFavoriteChips() {
    const list = $("favorites-chips-list");
    const manageBtn = $("manage-favorites-button");
    if (!list) return;

    if (manageBtn) {
      manageBtn.classList.toggle("is-active", isFavoritesDeleteMode);
      manageBtn.textContent = isFavoritesDeleteMode ? "完了" : "整理";
    }

    if (!state.favorites || !state.favorites.length) {
      list.replaceChildren(createElement("span", "favorites-empty-hint", "お気に入りはまだありません。「お気に入りに登録」で追加できます"));
      return;
    }

    const chips = state.favorites.map((fav) => {
      const chip = createElement("button", `favorite-chip${isFavoritesDeleteMode ? " is-deleting" : ""}`);
      chip.type = "button";
      chip.setAttribute("aria-label", isFavoritesDeleteMode ? `${fav.title}を削除` : `${fav.title}（${formatYen(fav.amount)}）を入力`);

      const icon = createElement("span", "favorite-chip-icon", CATEGORY_ICONS[fav.category] || "★");
      const title = createElement("span", "favorite-chip-title", fav.title);
      const amount = createElement("span", "favorite-chip-amount", formatYen(fav.amount));
      chip.append(icon, title, amount);

      if (isFavoritesDeleteMode) {
        chip.append(createElement("span", "favorite-chip-del-icon", "×"));
      }

      chip.addEventListener("click", (e) => {
        e.preventDefault();
        if (isFavoritesDeleteMode) {
          deleteFavorite(fav.id);
        } else {
          applyFavoriteToForm(fav);
        }
      });

      return chip;
    });

    list.replaceChildren(...chips);
  }

  function toggleFavoritesDeleteMode() {
    isFavoritesDeleteMode = !isFavoritesDeleteMode;
    renderFavoriteChips();
  }

  function applyFavoriteToForm(fav) {
    $("expense-amount").value = formatNumber(fav.amount);
    $("expense-category").value = fav.category;
    $("expense-payment").value = fav.paymentMethod;
    refreshExpenseCardOptions(fav.cardId || "");
    updateExpensePaymentFields();
    $("expense-memo").value = fav.memo || fav.title || "";
    const includeWithdrawalInput = $("expense-include-withdrawal");
    if (includeWithdrawalInput) {
      includeWithdrawalInput.checked = fav.includeInWithdrawal !== false;
    }
    updateCalculatedPaymentDate();
    showToast(`「${fav.title}」を入力しました`);
  }

  function deleteFavorite(id) {
    state.favorites = state.favorites.filter((f) => f.id !== id);
    saveState();
    renderFavoriteChips();
    showToast("お気に入りを削除しました");
  }

  function saveCurrentFormAsFavorite() {
    const rawAmount = $("expense-amount").value;
    const amount = Core.normalizeAmount(rawAmount);
    if (amount <= 0) {
      showToast("金額を入力してからお気に入りに登録してください");
      $("expense-amount").focus();
      return;
    }

    const category = $("expense-category").value;
    const paymentMethod = $("expense-payment").value;
    const cardId = paymentMethod === Core.CREDIT_PAYMENT ? $("expense-card").value : "";
    const includeInWithdrawal = $("expense-include-withdrawal") ? $("expense-include-withdrawal").checked : true;
    const memo = $("expense-memo").value.trim();

    const defaultTitle = memo || category;
    const title = window.prompt("お気に入りの名前を入力してください:", defaultTitle);
    if (!title || !title.trim()) return;

    if (!Array.isArray(state.favorites)) state.favorites = [];

    const newFav = {
      id: uid("fav"),
      title: title.trim().slice(0, 30),
      amount,
      category,
      paymentMethod,
      cardId,
      includeInWithdrawal,
      memo,
    };

    state.favorites.push(newFav);
    saveState();
    renderFavoriteChips();
    showToast(`「${newFav.title}」をお気に入りに追加しました`);
  }

  function renderSettings() {
    $("setting-cycle-start-day").value = String(state.settings.cycleStartDay || 1);
    updateCyclePreview();
    $("setting-balance").value = state.settings.currentBalance === null ? "" : formatNumber(state.settings.currentBalance);
    $("setting-reserve").value = state.settings.minimumReserve === null ? "" : formatNumber(state.settings.minimumReserve);
    $("theme-select").value = state.settings.theme;
    $("theme-color-1").value = state.settings.themeColor1 || "#185a37";
    const themeColor2El = $("theme-color-2");
    if (themeColor2El) themeColor2El.value = state.settings.themeColor2 || state.settings.themeColor1 || "#185a37";
    $("setting-bg-color").value = state.settings.bgColor || "#ffffff";
    $("setting-border-color").value = state.settings.borderColor || "#e2e8f0";
    $("setting-gauge-color").value = state.settings.gaugeColor || "#34d399";
    const usageColor = state.settings.usageColor || "#0284c7";
    const usageColorEl = $("setting-usage-color");
    if (usageColorEl) usageColorEl.value = usageColor;
    $("theme-color-1-val").textContent = (state.settings.themeColor1 || "#185a37").toUpperCase();
    const themeColor2ValEl = $("theme-color-2-val");
    if (themeColor2ValEl) themeColor2ValEl.textContent = (state.settings.themeColor2 || state.settings.themeColor1 || "#185a37").toUpperCase();
    $("setting-bg-color-val").textContent = (state.settings.bgColor || "#ffffff").toUpperCase();
    $("setting-border-color-val").textContent = (state.settings.borderColor || "#e2e8f0").toUpperCase();
    $("setting-gauge-color-val").textContent = (state.settings.gaugeColor || "#34d399").toUpperCase();
    const usageColorValEl = $("setting-usage-color-val");
    if (usageColorValEl) usageColorValEl.textContent = usageColor.toUpperCase();
    const budgetModeEl = $("setting-budget-mode");
    if (budgetModeEl) budgetModeEl.value = state.settings.budgetMode || "usage";
    renderPresetPalette();
    updatePresetButtons();
    applyThemeColors();
    renderHomeWidgetsManageList("settings-widgets-manage-list");
  }

  function updateCyclePreview() {
    const cycleDayVal = $("setting-cycle-start-day").value;
    const cycleDay = cycleDayVal === "end" ? "end" : Math.min(28, Math.max(1, Number(cycleDayVal) || 1));
    const curMonthKey = currentMonth.slice(0, 7);
    const range = Core.getCycleRange(curMonthKey, cycleDay);
    const previewEl = $("cycle-preview-dates");
    if (previewEl) {
      previewEl.textContent = `${range.label} (${curMonthKey}度)`;
    }
  }

  function saveCycleSettings() {
    const cycleDayVal = $("setting-cycle-start-day").value;
    state.settings.cycleStartDay = cycleDayVal === "end" ? "end" : Math.min(28, Math.max(1, Number(cycleDayVal) || 1));
    saveState();
    renderAll();
    showToast("集計期間・給料日設定を保存しました。");
  }

  function openExpenseDialog(dateKey, expenseId = "") {
    const expense = expenseId ? state.expenses.find((item) => item.id === expenseId) : null;
    $("expense-id").value = expense ? expense.id : "";
    $("expense-dialog-title").textContent = expense ? "支出を編集" : "支出を追加";
    $("expense-amount").value = expense ? formatNumber(expense.amount) : "";
    $("expense-date").value = expense ? expense.date : dateKey;
    $("expense-category").value = expense ? expense.category : "食費";
    $("expense-payment").value = expense ? expense.paymentMethod : "現金";
    $("expense-memo").value = expense ? expense.memo : "";
    $("expense-payment-date").value = expense ? expense.paymentDateOverride || "" : "";
    const includeWithdrawalInput = $("expense-include-withdrawal");
    if (includeWithdrawalInput) {
      includeWithdrawalInput.checked = expense ? (expense.includeInWithdrawal !== false) : true;
    }
    $("expense-amount-error").textContent = "";
    $("delete-expense-button").classList.toggle("is-hidden", !expense);
    refreshExpenseCardOptions(expense ? expense.cardId : "");
    updateExpensePaymentFields();

    const accordion = $("expense-details-accordion");
    if (accordion) {
      accordion.open = Boolean(expense && (expense.memo || expense.paymentDateOverride || expense.paymentMethod === Core.CREDIT_PAYMENT));
    }

    renderDayRecords($("expense-date").value);
    showDialog($("expense-dialog"));
    window.setTimeout(() => $("expense-amount").focus(), 40);
  }

  function refreshExpenseCardOptions(selectedId) {
    const options = [{ value: "", label: state.cards.length ? "カードを選択" : "カードを先に登録してください" }];
    state.cards.forEach((card) => options.push({ value: card.id, label: card.name }));
    fillSelect($("expense-card"), options);
    $("expense-card").value = state.cards.some((card) => card.id === selectedId) ? selectedId : "";
  }

  function updateExpensePaymentFields() {
    const credit = $("expense-payment").value === Core.CREDIT_PAYMENT;
    $("expense-card-field").classList.toggle("is-hidden", !credit);
    $("payment-date-section").classList.toggle("is-hidden", !credit);
    const toggleRow = $("expense-withdrawal-toggle-row");
    if (toggleRow) toggleRow.classList.toggle("is-hidden", !credit);
    updateCalculatedPaymentDate();
  }

  function updateCalculatedPaymentDate() {
    const credit = $("expense-payment").value === Core.CREDIT_PAYMENT;
    const card = state.cards.find((item) => item.id === $("expense-card").value);
    const dateKey = $("expense-date").value;
    const calculated = credit ? Core.calculatePaymentDate(dateKey, card) : "";
    $("calculated-payment-date").textContent = calculated ? formatDate(calculated, { year: "numeric", month: "long", day: "numeric", weekday: "short" }) : "カードを選択してください";
  }

  function renderDayRecords(dateKey) {
    const section = $("day-records-section");
    const list = $("day-records-list");
    if (!section || !list) return;

    if (!Core.parseDateKey(dateKey)) {
      section.classList.add("is-hidden");
      return;
    }
    section.classList.remove("is-hidden");

    const monthKey = dateKey.slice(0, 7);
    const dayRecords = [];

    // 1. 個別支出
    const expenseItems = (state.expenses || [])
      .filter((expense) => expense.date === dateKey)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

    expenseItems.forEach((expense) => {
      dayRecords.push({
        type: "expense",
        title: expense.memo || expense.category,
        subTitle: `${expense.category}・${expense.paymentMethod}`,
        amount: Core.normalizeAmount(expense.amount),
        onClick: () => openExpenseDialog(expense.date, expense.id),
      });
    });

    // 2. 固定費・サブスク（当日の発生/決済）
    (state.subscriptions || []).forEach((sub) => {
      if (!sub || sub.isActive === false) return;
      const usageDate = Core.getSubscriptionUsageDate(sub, monthKey);
      if (usageDate === dateKey) {
        dayRecords.push({
          type: "subscription",
          title: sub.name,
          subTitle: `${sub.type === "subscription" ? "サブスク" : "固定費"}・${sub.paymentMethod}`,
          amount: Core.normalizeAmount(sub.amount),
          badge: sub.type === "subscription" ? "サブスク" : "固定費",
          onClick: () => {
            closeDialog($("expense-dialog"));
            openSubscriptionDetailDialog(sub.id);
          },
        });
      }
    });

    // 3. カード引き落とし日（確定額または引落予定）
    (state.cards || []).forEach((card) => {
      const scheduledDate = Core.calculateScheduledPaymentDate(dateKey, card);
      const isCardPaymentDay = scheduledDate === dateKey;

      const manual = (state.manualPayments || []).find(
        (m) => m.cardId === card.id && m.date === dateKey
      );

      if (manual) {
        dayRecords.push({
          type: "card-payment",
          title: `${card.name} 引落確定額`,
          subTitle: "カード口座振替（確定）",
          amount: Core.normalizeAmount(manual.amount),
          badge: "引落確定",
          cardColor: card.color,
          onClick: () => {
            closeDialog($("expense-dialog"));
            openManualPaymentDialog(card.id, manual.id);
          },
        });
      } else if (isCardPaymentDay) {
        const withdrawalAmt = getCardWithdrawalAmount(card.id, dateKey);
        if (withdrawalAmt > 0) {
          dayRecords.push({
            type: "card-scheduled",
            title: `${card.name} 引落予定`,
            subTitle: "カード口座振替（予定）",
            amount: withdrawalAmt,
            badge: "引落予定",
            cardColor: card.color,
            onClick: () => {
              closeDialog($("expense-dialog"));
              switchView("cards");
            },
          });
        }
      }
    });

    if (!dayRecords.length) {
      list.replaceChildren(createElement("p", "empty-inline", "この日の支出・支払予定はありません。"));
      return;
    }

    list.replaceChildren(
      ...dayRecords.map((item) => {
        const button = createElement("button", "compact-record");
        button.type = "button";
        const main = createElement("span", "");
        const titleRow = createElement("div", "record-title-row");
        titleRow.append(createElement("strong", "", item.title));
        if (item.badge) {
          const badgeEl = createElement("span", "record-badge", item.badge);
          if (item.cardColor) {
            badgeEl.style.backgroundColor = colorWithAlpha(item.cardColor, 0.15);
            badgeEl.style.color = item.cardColor;
          }
          titleRow.append(badgeEl);
        }
        main.append(titleRow, createElement("small", "", item.subTitle));
        button.append(main, createElement("strong", "record-amount-val", formatYen(item.amount)));
        if (item.onClick) button.addEventListener("click", item.onClick);
        return button;
      })
    );
  }

  function saveExpenseFromForm(event) {
    event.preventDefault();
    const amount = Core.normalizeAmount($("expense-amount").value);
    const date = $("expense-date").value;
    const paymentMethod = $("expense-payment").value;
    const cardId = paymentMethod === Core.CREDIT_PAYMENT ? $("expense-card").value : "";
    if (amount <= 0) {
      $("expense-amount-error").textContent = "1円以上の金額を入力してください。";
      $("expense-amount").focus();
      return;
    }
    if (!Core.parseDateKey(date)) {
      showToast("正しい利用日を入力してください。");
      $("expense-date").focus();
      return;
    }
    if (paymentMethod === Core.CREDIT_PAYMENT && !state.cards.some((card) => card.id === cardId)) {
      showToast("使用したカードを選択してください。先にカード登録が必要です。");
      $("expense-card").focus();
      return;
    }
    const override = $("expense-payment-date").value;
    if (override && !Core.parseDateKey(override)) {
      showToast("手動支払日が正しくありません。");
      return;
    }

    const includeInWithdrawal = $("expense-include-withdrawal") ? $("expense-include-withdrawal").checked : true;

    const id = $("expense-id").value;
    const existing = state.expenses.find((item) => item.id === id);
    const record = {
      id: existing ? existing.id : uid("exp"),
      amount,
      date,
      category: CATEGORIES.includes($("expense-category").value) ? $("expense-category").value : "その他",
      paymentMethod,
      cardId,
      paymentDateOverride: paymentMethod === Core.CREDIT_PAYMENT ? override : "",
      calculatedPaymentDate: paymentMethod === Core.CREDIT_PAYMENT
        ? Core.calculatePaymentDate(date, state.cards.find((card) => card.id === cardId))
        : "",
      memo: $("expense-memo").value.trim().slice(0, 200),
      createdAt: existing ? existing.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isSample: existing ? existing.isSample : false,
    };
    if (existing) Object.assign(existing, record);
    else state.expenses.push(record);
    saveState();
    closeDialog($("expense-dialog"));
    currentMonth = firstOfMonth(date);
    renderAll();
    showToast(existing ? "支出を更新しました。" : "支出を登録しました。");
  }

  async function deleteCurrentExpense() {
    const id = $("expense-id").value;
    const expense = state.expenses.find((item) => item.id === id);
    if (!expense) return;
    const confirmed = await confirmAction("支出を削除しますか？", `${formatShortDate(expense.date)}の${formatYen(expense.amount)}を削除します。`, "削除する");
    if (!confirmed) return;
    state.expenses = state.expenses.filter((item) => item.id !== id);
    saveState();
    closeDialog($("expense-dialog"));
    renderAll();
    showToast("支出を削除しました。");
  }

  function openCardDialog(cardId = "") {
    const card = cardId ? state.cards.find((item) => item.id === cardId) : null;
    $("card-form").reset();
    $("card-id").value = card ? card.id : "";
    $("card-dialog-title").textContent = card ? "カード設定を編集" : "カードを追加";
    $("card-name").value = card ? card.name : "";
    $("card-closing-day").value = card ? String(card.closingDay) : "end";
    $("card-payment-day").value = card ? String(card.paymentDay) : "27";
    $("card-payment-month").value = card ? String(card.paymentMonth) : "1";
    $("card-weekend").value = card ? card.weekendAdjustment : "none";
    $("card-color").value = card ? card.color : "#4f9d73";
    $("card-memo").value = card ? card.memo : "";
    $("delete-card-button").classList.toggle("is-hidden", !card);
    showDialog($("card-dialog"));
  }

  function saveCardFromForm(event) {
    event.preventDefault();
    const name = $("card-name").value.trim();
    if (!name) {
      showToast("カード名を入力してください。");
      $("card-name").focus();
      return;
    }
    const id = $("card-id").value;
    const existing = state.cards.find((item) => item.id === id);
    const closingValue = $("card-closing-day").value;
    const record = {
      id: existing ? existing.id : uid("card"),
      name: name.slice(0, 40),
      closingDay: closingValue === "end" ? "end" : Number(closingValue),
      paymentDay: Number($("card-payment-day").value),
      paymentMonth: Number($("card-payment-month").value) === 0 ? 0 : 1,
      weekendAdjustment: $("card-weekend").value,
      color: $("card-color").value,
      memo: $("card-memo").value.trim().slice(0, 200),
      createdAt: existing ? existing.createdAt : new Date().toISOString(),
      isSample: existing ? existing.isSample : false,
    };
    if (existing) Object.assign(existing, record);
    else state.cards.push(record);
    state.expenses.forEach((expense) => {
      if (expense.cardId !== record.id || expense.paymentMethod !== Core.CREDIT_PAYMENT || expense.paymentDateOverride) return;
      expense.calculatedPaymentDate = Core.calculatePaymentDate(expense.date, record);
    });
    saveState();
    closeDialog($("card-dialog"));
    renderAll();
    showToast(existing ? "カード設定を更新しました。" : "カードを追加しました。");
  }

  async function deleteCurrentCard() {
    const id = $("card-id").value;
    const card = state.cards.find((item) => item.id === id);
    if (!card) return;
    const expenseCount = state.expenses.filter((item) => item.cardId === id).length;
    const manualCount = state.manualPayments.filter((item) => item.cardId === id).length;
    if (expenseCount || manualCount) {
      await confirmAction("このカードは削除できません", `登録済みの利用が${expenseCount}件、確定額が${manualCount}件あります。先に該当データを削除するか、別のカードへ変更してください。`, "閉じる", false);
      return;
    }
    const confirmed = await confirmAction("カードを削除しますか？", `「${card.name}」の設定を削除します。`, "削除する");
    if (!confirmed) return;
    state.cards = state.cards.filter((item) => item.id !== id);
    saveState();
    closeDialog($("card-dialog"));
    renderAll();
    showToast("カードを削除しました。");
  }

  function openManualPaymentDialog(cardId, paymentId = "") {
    const payment = paymentId ? state.manualPayments.find((item) => item.id === paymentId) : null;
    const card = state.cards.find((item) => item.id === cardId);

    $("manual-payment-form").reset();
    $("manual-payment-id").value = payment ? payment.id : "";
    $("manual-payment-card-id").value = cardId;
    $("manual-payment-amount").value = payment ? formatNumber(payment.amount) : "";

    // 引落日をカード設定（支払日・休日調整）から自動計算して初期セット
    let defaultDate = Core.todayKey();
    if (payment) {
      defaultDate = payment.date;
    } else if (card) {
      const scheduledDate = Core.calculateScheduledPaymentDate(currentMonth, card);
      if (scheduledDate) {
        defaultDate = scheduledDate;
      }
    }
    $("manual-payment-date").value = defaultDate;
    $("manual-payment-memo").value = payment ? payment.memo : "";

    const kickerEl = $("manual-payment-card-kicker");
    if (kickerEl) {
      kickerEl.textContent = card ? `対象カード: ${card.name}` : "初回の確定額にも使えます";
    }
    const titleEl = $("manual-payment-dialog-title");
    if (titleEl) {
      titleEl.textContent = payment ? "確定済みの引落を編集" : "確定済みの引落を追加";
    }
    const hintEl = $("manual-payment-date-hint");
    if (hintEl) {
      if (card) {
        const weekendAdj = { none: "", previous: "（前営業日調整）", next: "（翌営業日調整）" }[card.weekendAdjustment] || "";
        hintEl.textContent = `※ ${card.name}の設定（${card.paymentDay}日引落${weekendAdj}）から自動セットしています。手動変更も可能です。`;
      } else {
        hintEl.textContent = "※ 必要に応じて引落日を変更できます。";
      }
    }

    $("delete-manual-payment-button").classList.toggle("is-hidden", !payment);
    showDialog($("manual-payment-dialog"));
  }

  function saveManualPaymentFromForm(event) {
    event.preventDefault();
    const amount = Core.normalizeAmount($("manual-payment-amount").value);
    const date = $("manual-payment-date").value;
    const cardId = $("manual-payment-card-id").value;
    if (amount <= 0 || !Core.parseDateKey(date) || !state.cards.some((card) => card.id === cardId)) {
      showToast("金額と引落日を確認してください。");
      return;
    }
    const id = $("manual-payment-id").value;
    const existing = state.manualPayments.find((item) => item.id === id);
    const record = {
      id: existing ? existing.id : uid("manual"),
      cardId,
      amount,
      date,
      memo: $("manual-payment-memo").value.trim().slice(0, 200),
      createdAt: existing ? existing.createdAt : new Date().toISOString(),
      isSample: existing ? existing.isSample : false,
    };
    if (existing) Object.assign(existing, record);
    else state.manualPayments.push(record);
    saveState();
    closeDialog($("manual-payment-dialog"));
    renderAll();
    showToast(existing ? "確定額を更新しました。" : "確定額を追加しました。");
  }

  async function deleteCurrentManualPayment() {
    const id = $("manual-payment-id").value;
    if (!state.manualPayments.some((item) => item.id === id)) return;
    const confirmed = await confirmAction("確定額を削除しますか？", "このカード引き落とし予定を削除します。", "削除する");
    if (!confirmed) return;
    state.manualPayments = state.manualPayments.filter((item) => item.id !== id);
    saveState();
    closeDialog($("manual-payment-dialog"));
    renderAll();
    showToast("確定額を削除しました。");
  }

  function saveBalanceSettings() {
    const balanceRaw = $("setting-balance").value.trim();
    const reserveRaw = $("setting-reserve").value.trim();
    state.settings.currentBalance = balanceRaw === "" ? null : Core.normalizeAmount(balanceRaw);
    state.settings.minimumReserve = reserveRaw === "" ? null : Core.normalizeAmount(reserveRaw);
    saveState();
    renderAll();
    showToast("残高設定を保存しました。");
  }

  function saveTheme() {
    state.settings.theme = $("theme-select").value;
    saveState();
    applyTheme();
    showToast("テーマを変更しました。");
  }

  function applyTheme() {
    const theme = state.settings.theme || "auto";
    if (theme === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", theme);
    applyThemeColors();
  }

  function getLuminance(hexColor) {
    const match = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hexColor || "");
    if (!match) return 1;
    const r = Number.parseInt(match[1], 16) / 255;
    const g = Number.parseInt(match[2], 16) / 255;
    const b = Number.parseInt(match[3], 16) / 255;
    const toLinear = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
  }

  function applyThemeColors() {
    const color1 = state.settings.themeColor1 || "#185a37";
    const bgColor = state.settings.bgColor || "#ffffff";
    const borderColor = state.settings.borderColor || "#e2e8f0";
    const gaugeColor = state.settings.gaugeColor || "#34d399";
    const usageColor = state.settings.usageColor || "#0284c7";

    document.documentElement.style.setProperty("--theme-color-1", color1);
    document.documentElement.style.setProperty("--theme-color-2", color1);
    document.documentElement.style.setProperty("--accent", color1);
    document.documentElement.style.setProperty("--bg-color", bgColor);
    document.documentElement.style.setProperty("--border-color", borderColor);
    document.documentElement.style.setProperty("--gauge-color", gaugeColor);
    document.documentElement.style.setProperty("--usage-color", usageColor);
    document.documentElement.style.setProperty("--usage-soft", colorWithAlpha(usageColor, 0.15));

    const isDarkBg = getLuminance(bgColor) < 0.45;
    if (isDarkBg) {
      document.documentElement.style.setProperty("--text", "#f8fafc");
      document.documentElement.style.setProperty("--text-muted", "#94a3b8");
      document.documentElement.style.setProperty("--accent-dark", "color-mix(in srgb, var(--theme-color-1, #34d399) 70%, #ffffff)");
      document.documentElement.style.setProperty("--surface", "color-mix(in srgb, var(--bg-color) 70%, #1e293b)");
      document.documentElement.style.setProperty("--surface-muted", "color-mix(in srgb, var(--bg-color) 85%, #334155)");
      document.documentElement.style.setProperty("--surface-soft", "color-mix(in srgb, var(--bg-color) 90%, #0f172a)");
    } else {
      document.documentElement.style.removeProperty("--text");
      document.documentElement.style.removeProperty("--text-muted");
      document.documentElement.style.removeProperty("--accent-dark");
      document.documentElement.style.removeProperty("--surface");
      document.documentElement.style.removeProperty("--surface-muted");
      document.documentElement.style.removeProperty("--surface-soft");
    }

    const val1 = $("theme-color-1-val");
    if (val1) val1.textContent = color1.toUpperCase();

    const input1 = $("theme-color-1");
    if (input1 && input1.value.toLowerCase() !== color1.toLowerCase()) input1.value = color1;

    const bgInput = $("setting-bg-color");
    const bgVal = $("setting-bg-color-val");
    if (bgInput && bgInput.value.toLowerCase() !== bgColor.toLowerCase()) bgInput.value = bgColor;
    if (bgVal) bgVal.textContent = bgColor.toUpperCase();

    const borderInput = $("setting-border-color");
    const borderVal = $("setting-border-color-val");
    if (borderInput && borderInput.value.toLowerCase() !== borderColor.toLowerCase()) borderInput.value = borderColor;
    if (borderVal) borderVal.textContent = borderColor.toUpperCase();

    const gaugeInput = $("setting-gauge-color");
    const gaugeVal = $("setting-gauge-color-val");
    if (gaugeInput && gaugeInput.value.toLowerCase() !== gaugeColor.toLowerCase()) gaugeInput.value = gaugeColor;
    if (gaugeVal) gaugeVal.textContent = gaugeColor.toUpperCase();

    const usageInput = $("setting-usage-color");
    const usageVal = $("setting-usage-color-val");
    if (usageInput && usageInput.value.toLowerCase() !== usageColor.toLowerCase()) usageInput.value = usageColor;
    if (usageVal) usageVal.textContent = usageColor.toUpperCase();

    // 見本スマホ画面（ライブプレビュー）の反映
    const mockup = $("theme-phone-mockup");
    if (mockup) {
      mockup.style.backgroundColor = bgColor;
      mockup.style.borderColor = borderColor;
      mockup.style.color = isDarkBg ? "#f8fafc" : "#1e293b";

      const miniSummary = $("phone-preview-summary");
      if (miniSummary) {
        miniSummary.style.borderColor = borderColor;
        miniSummary.style.backgroundColor = isDarkBg ? "rgba(255, 255, 255, 0.08)" : colorWithAlpha(color1, 0.08);
      }

      const miniRemaining = $("phone-preview-remaining");
      if (miniRemaining) miniRemaining.style.color = color1;

      const miniGauge = $("phone-preview-gauge");
      if (miniGauge) miniGauge.style.backgroundColor = gaugeColor;

      const miniIcon = $("phone-preview-icon");
      if (miniIcon) {
        miniIcon.style.backgroundColor = colorWithAlpha(usageColor, 0.15);
        miniIcon.style.color = usageColor;
      }

      const miniAmt = $("phone-preview-usage-amt");
      if (miniAmt) miniAmt.style.color = usageColor;

      const miniNav = $("phone-preview-nav");
      if (miniNav) miniNav.style.borderColor = borderColor;

      const miniNavItem = $("phone-preview-nav-item");
      if (miniNavItem) miniNavItem.style.color = color1;
    }

    updatePresetButtons();
  }

  function updatePresetButtons() {
    const c1 = (state.settings.themeColor1 || "").toLowerCase();
    const bg = (state.settings.bgColor || "").toLowerCase();
    const border = (state.settings.borderColor || "").toLowerCase();
    const gauge = (state.settings.gaugeColor || "").toLowerCase();
    const usage = (state.settings.usageColor || "").toLowerCase();

    document.querySelectorAll(".preset-button").forEach((button) => {
      const match =
        button.dataset.themeColor1?.toLowerCase() === c1 &&
        button.dataset.bgColor?.toLowerCase() === bg &&
        button.dataset.borderColor?.toLowerCase() === border &&
        button.dataset.gaugeColor?.toLowerCase() === gauge &&
        button.dataset.usageColor?.toLowerCase() === usage;
      button.classList.toggle("is-active", Boolean(match));
    });
  }

  function renderPresetPalette() {
    const grid = $("preset-palette-grid");
    if (!grid) return;
    grid.innerHTML = "";

    THEME_PRESETS.forEach((preset) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "preset-button";
      button.dataset.themeColor1 = preset.themeColor1;
      button.dataset.bgColor = preset.bgColor;
      button.dataset.borderColor = preset.borderColor;
      button.dataset.gaugeColor = preset.gaugeColor;
      button.dataset.usageColor = preset.usageColor;
      button.dataset.theme = preset.theme || "auto";

      const swatchGroup = document.createElement("span");
      swatchGroup.className = "preset-swatch-group";

      const dot1 = document.createElement("span");
      dot1.className = "preset-dot";
      dot1.style.backgroundColor = preset.themeColor1;
      dot1.title = "テーマ色";

      const dot2 = document.createElement("span");
      dot2.className = "preset-dot";
      dot2.style.backgroundColor = preset.bgColor;
      dot2.title = "背景色";

      const dot3 = document.createElement("span");
      dot3.className = "preset-dot";
      dot3.style.backgroundColor = preset.gaugeColor;
      dot3.title = "ゲージ色";

      const dot4 = document.createElement("span");
      dot4.className = "preset-dot";
      dot4.style.backgroundColor = preset.usageColor;
      dot4.title = "利用額色";

      swatchGroup.append(dot1, dot2, dot3, dot4);

      const label = document.createElement("span");
      label.textContent = preset.name;

      button.append(swatchGroup, label);
      button.addEventListener("click", () => {
        state.settings.themeColor1 = preset.themeColor1;
        state.settings.themeColor2 = preset.themeColor1;
        state.settings.bgColor = preset.bgColor;
        state.settings.borderColor = preset.borderColor;
        state.settings.gaugeColor = preset.gaugeColor;
        state.settings.usageColor = preset.usageColor;
        if (preset.theme) state.settings.theme = preset.theme;
        saveState();
        applyTheme();
        renderCalendar();
        showToast(`おすすめテーマ「${preset.name}」を適用しました。`);
      });
      grid.append(button);
    });

    updatePresetButtons();
  }

  function setupHomeWidgetsDragAndDrop() {
    const container = $("home-widgets-container");
    if (!container) return;

    let longPressTimer = null;
    let draggedBlock = null;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentDeltaY = 0;
    let lastSwapTarget = null;
    const LONG_PRESS_MS = 300;
    const MOVE_THRESHOLD = 8;

    const clearLongPress = () => {
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
      if (draggedBlock && !isDragging) {
        draggedBlock.classList.remove("is-drag-ready");
        draggedBlock = null;
      }
    };

    // スマホでの長押しテキスト選択・コピーメニューを防止
    container.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    container.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      const interactive = e.target.closest("button, input, select, textarea, a, summary, [role='button'], [role='tab'], label");
      if (interactive && !interactive.classList.contains("home-widget-block")) return;

      const block = e.target.closest(".home-widget-block");
      if (!block || block.classList.contains("is-hidden")) return;

      draggedBlock = block;
      startX = e.clientX;
      startY = e.clientY;

      block.classList.add("is-drag-ready");

      longPressTimer = setTimeout(() => {
        isDragging = true;
        block.classList.remove("is-drag-ready");
        block.classList.add("is-dragging");
        document.body.classList.add("is-widget-dragging");

        if (window.getSelection) {
          window.getSelection().removeAllRanges();
        }

        if (navigator.vibrate) {
          try { navigator.vibrate(45); } catch (_) {}
        }
      }, LONG_PRESS_MS);
    });

    window.addEventListener("pointermove", (e) => {
      if (!draggedBlock) return;

      const dx = Math.abs(e.clientX - startX);
      const dy = Math.abs(e.clientY - startY);

      if (!isDragging) {
        if (dx > MOVE_THRESHOLD || dy > MOVE_THRESHOLD) {
          clearLongPress();
        }
        return;
      }

      e.preventDefault();
      if (window.getSelection) {
        window.getSelection().removeAllRanges();
      }

      currentDeltaY = e.clientY - startY;
      draggedBlock.style.transform = `translate3d(0, ${currentDeltaY}px, 0) scale(1.03)`;

      const draggedRect = draggedBlock.getBoundingClientRect();
      const draggedCenterY = draggedRect.top + draggedRect.height / 2;

      const siblings = Array.from(container.querySelectorAll(".home-widget-block:not(.is-hidden)")).filter(
        (el) => el !== draggedBlock
      );

      let closestTarget = null;
      let minDistance = Infinity;

      for (const sib of siblings) {
        const sibRect = sib.getBoundingClientRect();
        const sibCenterY = sibRect.top + sibRect.height / 2;
        const distance = Math.abs(draggedCenterY - sibCenterY);

        const snapThreshold = Math.max(38, sibRect.height * 0.45);
        if (distance < snapThreshold && distance < minDistance) {
          minDistance = distance;
          closestTarget = sib;
        }
      }

      siblings.forEach((sib) => sib.classList.remove("is-drag-target"));

      if (closestTarget && closestTarget !== lastSwapTarget) {
        closestTarget.classList.add("is-drag-target");
        
        const targetRect = closestTarget.getBoundingClientRect();
        const targetCenterY = targetRect.top + targetRect.height / 2;

        if (draggedCenterY < targetCenterY) {
          container.insertBefore(draggedBlock, closestTarget);
        } else {
          container.insertBefore(draggedBlock, closestTarget.nextSibling);
        }

        startY = e.clientY;
        currentDeltaY = 0;
        draggedBlock.style.transform = `translate3d(0, 0, 0) scale(1.03)`;

        if (navigator.vibrate) {
          try { navigator.vibrate(20); } catch (_) {}
        }
        lastSwapTarget = closestTarget;
      }
    }, { passive: false });

    const finishDrag = () => {
      clearLongPress();
      document.body.classList.remove("is-widget-dragging");

      if (!isDragging || !draggedBlock) {
        isDragging = false;
        draggedBlock = null;
        lastSwapTarget = null;
        return;
      }

      isDragging = false;
      draggedBlock.classList.remove("is-dragging");
      draggedBlock.style.transform = "";

      Array.from(container.querySelectorAll(".home-widget-block")).forEach((el) => {
        el.classList.remove("is-drag-target");
        el.classList.remove("is-drag-ready");
      });

      const newOrderIds = Array.from(container.querySelectorAll(".home-widget-block")).map(
        (el) => el.dataset.widget
      );

      const currentWidgets = state.settings.homeWidgets || defaultHomeWidgets();
      const reordered = [];
      newOrderIds.forEach((id) => {
        const item = currentWidgets.find((w) => w.id === id);
        if (item) reordered.push(item);
      });
      currentWidgets.forEach((w) => {
        if (!reordered.some((rw) => rw.id === w.id)) {
          reordered.push(w);
        }
      });

      state.settings.homeWidgets = reordered;
      saveState();
      renderHomeWidgetsManageList("settings-widgets-manage-list");
      renderHomeWidgetsManageList("home-widgets-manage-list");
      showToast("ウィジェットの配置を更新しました。");

      draggedBlock = null;
      lastSwapTarget = null;
    };

    window.addEventListener("pointerup", finishDrag);
    window.addEventListener("pointercancel", finishDrag);
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

  async function addSampleData() {
    if (hasSampleData()) {
      showToast("サンプルデータはすでに追加されています。");
      return;
    }
    const confirmed = await confirmAction(
      "サンプルデータを追加しますか？",
      "現在登録されているデータは消えず、お試し用のダミー支出・カードデータが追加されます。",
      "追加する"
    );
    if (!confirmed) return;

    const mainCardId = uid("card");
    const subCardId = uid("card");
    const today = Core.todayKey();
    const sampleCards = [
      {
        id: mainCardId,
        name: "メインカード（サンプル）",
        closingDay: "end",
        paymentDay: 27,
        paymentMonth: 1,
        weekendAdjustment: "none",
        color: "#6a78c9",
        memo: "月末締め・翌月27日払いの例",
        createdAt: new Date().toISOString(),
        isSample: true,
      },
      {
        id: subCardId,
        name: "サブカード（サンプル）",
        closingDay: 15,
        paymentDay: 10,
        paymentMonth: 1,
        weekendAdjustment: "next",
        color: "#ad6f9d",
        memo: "15日締め・翌月10日払いの例",
        createdAt: new Date().toISOString(),
        isSample: true,
      },
    ];
    state.cards.push(...sampleCards);
    const sampleExpenses = [
      sampleExpense(980, Core.addDays(today, -2), "食費", "現金", "", "ランチ"),
      sampleExpense(2450, Core.addDays(today, -1), "日用品", "デビットカード", "", "ドラッグストア"),
      sampleExpense(6800, today, "娯楽", Core.CREDIT_PAYMENT, mainCardId, "チケット"),
      sampleExpense(12800, Core.addDays(today, 2), "衣服", Core.CREDIT_PAYMENT, subCardId, "買い物"),
      sampleExpense(520, Core.addDays(today, 3), "交通", "QR・電子マネー", "", "電車"),
    ];
    state.expenses.push(...sampleExpenses);
    state.manualPayments.push({
      id: uid("manual"),
      cardId: mainCardId,
      amount: 42800,
      date: Core.addDays(today, 9),
      memo: "移行前に確定していた金額",
      createdAt: new Date().toISOString(),
      isSample: true,
    });

    const sampleSubscriptions = [
      {
        id: uid("sub"),
        name: "家賃",
        icon: "home",
        type: "fixed",
        amount: 80000,
        amountType: "fixed",
        interval: "monthly",
        paymentDay: 25,
        paymentMonth: null,
        oneTimeDate: "",
        paymentMethod: "口座引き落とし",
        cardId: "",
        includeInWithdrawal: false,
        category: "固定費",
        memo: "毎月25日振替",
        isActive: true,
        createdAt: new Date().toISOString(),
        isSample: true,
      },
      {
        id: uid("sub"),
        name: "スマホ料金",
        icon: "phone",
        type: "fixed",
        amount: 7090,
        amountType: "variable",
        interval: "monthly",
        paymentDay: "end",
        paymentMonth: null,
        oneTimeDate: "",
        paymentMethod: Core.CREDIT_PAYMENT,
        cardId: mainCardId,
        includeInWithdrawal: true,
        category: "固定費",
        memo: "通信費",
        isActive: true,
        createdAt: new Date().toISOString(),
        isSample: true,
      },
      {
        id: uid("sub"),
        name: "Spotify",
        icon: "music",
        type: "subscription",
        amount: 980,
        amountType: "fixed",
        interval: "monthly",
        paymentDay: 15,
        paymentMonth: null,
        oneTimeDate: "",
        paymentMethod: Core.CREDIT_PAYMENT,
        cardId: mainCardId,
        includeInWithdrawal: true,
        category: "娯楽",
        memo: "音楽ストリーミング",
        isActive: true,
        createdAt: new Date().toISOString(),
        isSample: true,
      },
      {
        id: uid("sub"),
        name: "Netflix",
        icon: "tv",
        type: "subscription",
        amount: 890,
        amountType: "fixed",
        interval: "monthly",
        paymentDay: 20,
        paymentMonth: null,
        oneTimeDate: "",
        paymentMethod: Core.CREDIT_PAYMENT,
        cardId: mainCardId,
        includeInWithdrawal: true,
        category: "娯楽",
        memo: "動画配信",
        isActive: true,
        createdAt: new Date().toISOString(),
        isSample: true,
      },
    ];
    state.subscriptions.push(...sampleSubscriptions);

    saveState();
    currentMonth = firstOfMonth(today);
    renderAll();
    showToast("サンプルデータを追加しました。");
  }

  function sampleExpense(amount, date, category, paymentMethod, cardId, memo) {
    const timestamp = new Date().toISOString();
    return {
      id: uid("exp"),
      amount,
      date,
      category,
      paymentMethod,
      cardId,
      includeInWithdrawal: true,
      paymentDateOverride: "",
      calculatedPaymentDate: paymentMethod === Core.CREDIT_PAYMENT
        ? Core.calculatePaymentDate(date, state.cards.find((card) => card.id === cardId))
        : "",
      memo,
      createdAt: timestamp,
      updatedAt: timestamp,
      isSample: true,
    };
  }

  function hasSampleData() {
    return (
      state.expenses.some((item) => item.isSample) ||
      state.cards.some((item) => item.isSample) ||
      state.manualPayments.some((item) => item.isSample) ||
      state.subscriptions.some((item) => item.isSample)
    );
  }

  async function removeSampleData() {
    if (!hasSampleData()) {
      showToast("削除できるサンプルデータはありません。");
      return;
    }
    const confirmed = await confirmAction("サンプルデータを削除しますか？", "自分で登録したデータは残ります。", "削除する");
    if (!confirmed) return;
    state.expenses = state.expenses.filter((item) => !item.isSample);
    state.cards = state.cards.filter((item) => !item.isSample);
    state.manualPayments = state.manualPayments.filter((item) => !item.isSample);
    state.subscriptions = state.subscriptions.filter((item) => !item.isSample);
    saveState();
    renderAll();
    showToast("サンプルデータだけ削除しました。");
  }

  async function deleteAllData() {
    const first = await confirmAction("全データを削除しますか？", "支出・カード・残高設定・サンプルをすべて削除します。元に戻せません。", "次へ");
    if (!first) return;
    const second = await confirmAction("最終確認", "本当にすべて削除しますか？バックアップが必要なら、いったんキャンセルしてください。", "完全に削除");
    if (!second) return;
    const preservedTheme = state.settings.theme;
    const preservedColor1 = state.settings.themeColor1;
    const preservedColor2 = state.settings.themeColor2;
    const preservedBg = state.settings.bgColor;
    const preservedBorder = state.settings.borderColor;
    const preservedGauge = state.settings.gaugeColor;
    state = defaultState();
    state.settings.theme = preservedTheme;
    state.settings.themeColor1 = preservedColor1;
    state.settings.themeColor2 = preservedColor2;
    state.settings.bgColor = preservedBg;
    state.settings.borderColor = preservedBorder;
    state.settings.gaugeColor = preservedGauge;
    saveState();
    applyTheme();
    renderAll();
    showToast("すべてのデータを削除しました。");
  }

  function showDialog(dialog) {
    if (!dialog.open) dialog.showModal();
    updateDialogLock();
  }

  function closeDialog(dialog) {
    if (dialog && dialog.open) dialog.close();
    updateDialogLock();
  }

  function updateDialogLock() {
    const anyOpen = Array.from(document.querySelectorAll("dialog")).some((dialog) => dialog.open);
    document.body.classList.toggle("dialog-open", anyOpen);
  }

  function confirmAction(title, message, okLabel, destructive = true) {
    const dialog = $("confirm-dialog");
    $("confirm-title").textContent = title;
    $("confirm-message").textContent = message;
    $("confirm-ok").textContent = okLabel;
    $("confirm-ok").className = destructive ? "button button-danger" : "button button-primary";
    $("confirm-cancel").classList.toggle("is-hidden", !destructive);
    dialog.returnValue = "";
    showDialog(dialog);
    return new Promise((resolve) => {
      dialog.addEventListener("close", () => {
        updateDialogLock();
        resolve(dialog.returnValue === "ok");
      }, { once: true });
    });
  }

  function showToast(message) {
    const toast = $("toast");
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
  }

  function formatMoneyInput(event) {
    const amount = Core.normalizeAmount(event.target.value);
    event.target.value = amount > 0 ? formatNumber(amount) : "";
  }

  function formatNumber(amount) {
    return new Intl.NumberFormat("ja-JP").format(Core.normalizeAmount(amount));
  }

  function formatYen(amount) {
    return `${formatNumber(amount)}円`;
  }

  function formatSignedYen(amount) {
    const numeric = Math.round(Number(amount) || 0);
    return numeric < 0 ? `-${formatNumber(Math.abs(numeric))}円` : formatYen(numeric);
  }

  function formatDate(dateKey, options = { year: "numeric", month: "long", day: "numeric" }) {
    const date = Core.parseDateKey(dateKey);
    return date ? new Intl.DateTimeFormat("ja-JP", options).format(date) : "—";
  }

  function formatShortDate(dateKey) {
    const date = Core.parseDateKey(dateKey);
    return date ? `${date.getMonth() + 1}/${date.getDate()}` : "—";
  }

  function createElement(tag, className = "", text = "") {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== "") node.textContent = text;
    return node;
  }

  function emptyState(title, detail) {
    const container = createElement("div", "empty-state");
    container.append(createElement("strong", "", title), createElement("span", "", detail));
    return container;
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || !/^https?:$/.test(location.protocol)) return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }

  function switchReportSubTab(subTab) {
    if (!["outlook", "analysis"].includes(subTab)) return;
    reportSubTab = subTab;
    const isOutlook = subTab === "outlook";
    const outlookBtn = $("report-tab-outlook-btn");
    const analysisBtn = $("report-tab-analysis-btn");
    const outlookPane = $("report-pane-outlook");
    const analysisPane = $("report-pane-analysis");

    if (outlookBtn) {
      outlookBtn.classList.toggle("is-active", isOutlook);
      outlookBtn.setAttribute("aria-selected", isOutlook ? "true" : "false");
    }
    if (analysisBtn) {
      analysisBtn.classList.toggle("is-active", !isOutlook);
      analysisBtn.setAttribute("aria-selected", !isOutlook ? "true" : "false");
    }
    if (outlookPane) outlookPane.classList.toggle("is-active", isOutlook);
    if (analysisPane) analysisPane.classList.toggle("is-active", !isOutlook);

    renderReport();
  }

  function moveReportMonth(amount) {
    const date = Core.parseDateKey(reportMonth);
    date.setMonth(date.getMonth() + amount, 1);
    reportMonth = Core.toDateKey(date);
    renderReport();
  }

  const CATEGORY_COLORS = {
    食費: "#ff8b94",
    日用品: "#ffaaa6",
    交通: "#ffd3b6",
    娯楽: "#dcedc1",
    旅行: "#a8e6cf",
    衣服: "#b8d8d8",
    医療: "#7a9cc6",
    固定費: "#b48aeb",
    その他: "#d5d5d5",
  };

  function renderReport() {
    const reportTitle = $("report-month-title");
    if (!reportTitle) return;

    const monthDate = Core.parseDateKey(reportMonth);
    const monthKey = reportMonth.slice(0, 7);
    const cycleDay = state.settings.cycleStartDay || 1;
    const cycleRange = Core.getCycleRange(monthKey, cycleDay);

    reportTitle.textContent = `${monthDate.getFullYear()}年${monthDate.getMonth() + 1}月`;
    const picker = $("report-month-picker");
    if (picker) picker.value = monthKey;

    const badge = $("report-cycle-period-badge");
    if (badge) {
      badge.textContent = cycleDay === 1
        ? `集計期間: ${cycleRange.label}`
        : `集計期間（給料日基準）: ${cycleRange.label}`;
    }

    if (reportSubTab === "outlook") {
      renderBalance();
      renderUpcomingWithdrawals();
    } else {
      renderSmartAdvisor("report-advisor");
      if (typeof window.Chart === "undefined") {
        return;
      }

      const styles = getComputedStyle(document.documentElement);
      const textColor = styles.getPropertyValue("--text").trim() || "#17231c";
      const textMutedColor = styles.getPropertyValue("--text-muted").trim() || "#68756d";
      const borderColor = styles.getPropertyValue("--border").trim() || "#dce6df";
      const usageColor = styles.getPropertyValue("--usage").trim() || "#3478b8";
      const outflowColor = styles.getPropertyValue("--outflow").trim() || "#d27b32";

      renderCategoryDoughnutChart(textColor, textMutedColor);
      renderCategorySummary();
      renderMonthComparisonBanner();
      renderMonthlyTrendChart(textColor, textMutedColor, borderColor, usageColor, outflowColor);
      renderPaymentMethodsBreakdown();
      renderFixedVsOtherBreakdown();
    }
  }

  function renderUpcomingWithdrawals() {
    const list = $("report-upcoming-withdrawals-list");
    if (!list) return;

    const today = Core.todayKey();
    const next60 = Core.addDays(today, 60);
    const dailyTotals = Core.buildDailyTotals(state.expenses, state.cards, state.manualPayments);
    
    const withdrawalDays = [];
    dailyTotals.forEach((val, dateKey) => {
      if (dateKey >= today && dateKey <= next60 && val.cardWithdrawal > 0) {
        withdrawalDays.push({ date: dateKey, amount: val.cardWithdrawal });
      }
    });
    withdrawalDays.sort((a, b) => a.date.localeCompare(b.date));

    if (!withdrawalDays.length) {
      list.replaceChildren(emptyState("直近のカード引き落とし予定はありません", "カード利用や確定額が登録されると、予定がここに表示されます。"));
      return;
    }

    const rows = withdrawalDays.map((item) => {
      const el = createElement("div", "record-item");
      const icon = createElement("span", "record-icon", "引落");
      const main = createElement("span", "record-main");
      main.append(createElement("strong", "", formatDate(item.date)));
      
      const cardBreakdowns = state.cards.map((card) => {
        const amt = getCardWithdrawalAmount(card.id, item.date);
        return amt > 0 ? `${card.name}: ${formatYen(amt)}` : null;
      }).filter(Boolean);

      main.append(createElement("span", "", cardBreakdowns.length ? cardBreakdowns.join(" / ") : "クレジットカード引き落とし"));
      const amountEl = createElement("strong", "record-amount", formatYen(item.amount));
      el.append(icon, main, amountEl);
      return el;
    });

    list.replaceChildren(...rows);
  }

  let advisorHomeIndex = 0;
  let advisorReportIndex = 0;

  function generateSmartAdvices(monthKey) {
    const today = Core.todayKey();
    const cycleDay = state.settings.cycleStartDay || 1;
    const range = Core.getCycleRange(monthKey, cycleDay);
    
    const curDate = Core.parseDateKey(`${monthKey}-01`);
    const prevDate = new Date(curDate.getFullYear(), curDate.getMonth() - 1, 1, 12);
    const prevMonthKey = Core.toDateKey(prevDate).slice(0, 7);

    const curSummary = Core.summarizeMonth(monthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions);
    const prevSummary = Core.summarizeMonth(prevMonthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions);

    const mode = state.settings.budgetMode || "usage";
    const curSpent = mode === "usage" ? curSummary.usage : curSummary.outflow;
    const prevSpent = mode === "usage" ? prevSummary.usage : prevSummary.outflow;
    const budget = getEffectiveBudget(monthKey, mode);

    const isCurrentMonth = today >= range.startDate && today <= range.endDate;
    const isPastMonth = range.endDate < today;
    const monthNum = curDate.getMonth() + 1;
    const prevMonthNum = prevDate.getMonth() + 1;
    const curCycleExpenses = state.expenses.filter((e) => e.date >= range.startDate && e.date <= range.endDate);
    const totalDays = Math.max(1, Math.round((new Date(range.endDate) - new Date(range.startDate)) / 86400000) + 1);

    const advices = [];

    if (isPastMonth) {
      // ===== 過去月の振り返りアドバイス（複数提供） =====
      // 1. 予算と総支出の振り返り
      if (budget !== null && budget > 0) {
        const remaining = budget - curSpent;
        if (remaining >= 0) {
          advices.push({
            tag: "📊 予算の振り返り",
            text: `${monthNum}月は予算 ${formatYen(budget)} に対し、${formatYen(remaining)} 少なく収まりました。計画的な支出管理です！`
          });
        } else {
          const overAmount = Math.abs(remaining);
          advices.push({
            tag: "📊 予算の振り返り",
            text: `${monthNum}月は予算 ${formatYen(budget)} に対し、${formatYen(overAmount)} 上回りました。`
          });
        }
      } else if (curSpent > 0) {
        advices.push({
          tag: "📊 総支出の記録",
          text: `${monthNum}月の合計支出は ${formatYen(curSpent)} でした。`
        });
      }

      // 2. 1日あたりの平均支出ペース
      if (curSpent > 0) {
        const dailyAvg = Math.round(curSpent / totalDays);
        advices.push({
          tag: "⏱️ 1日の平均支出",
          text: `${monthNum}月は1日あたり平均 約 ${formatYen(dailyAvg)} のペースで支出していました。`
        });
      }

      // 3. 前月との比較
      if (prevSpent > 0 && curSpent > 0) {
        const diff = curSpent - prevSpent;
        const pct = Math.abs(Math.round((diff / prevSpent) * 100));
        if (diff <= 0) {
          const pctText = pct < 1000 ? `（${pct}％）` : "";
          advices.push({
            tag: "🌱 前月比で節約",
            text: `${prevMonthNum}月と比べて支出が ${formatYen(Math.abs(diff))}${pctText}少なく抑えられました。`
          });
        } else {
          const pctText = pct < 1000 ? `（${pct}％増）` : "";
          advices.push({
            tag: "📈 前月比の推移",
            text: `${prevMonthNum}月と比べて支出が +${formatYen(diff)}${pctText}となりました。`
          });
        }
      }

      // 4. カテゴリ別の傾向
      if (curCycleExpenses.length > 0) {
        const catTotals = {};
        curCycleExpenses.forEach((e) => {
          catTotals[e.category] = (catTotals[e.category] || 0) + Number(e.amount || 0);
        });
        const sortedCats = Object.entries(catTotals).sort((a, b) => b[1] - a[1]);
        if (sortedCats.length > 0) {
          const topCat = sortedCats[0];
          const topPct = Math.round((topCat[1] / (curSpent || 1)) * 100);
          advices.push({
            tag: "🏷️ 最大支出カテゴリ",
            text: `${monthNum}月に最も使ったのは『${topCat[0]}』（${formatYen(topCat[1])}・全体の${topPct}％）でした。`
          });
          if (sortedCats.length > 1) {
            const secondCat = sortedCats[1];
            const secondPct = Math.round((secondCat[1] / (curSpent || 1)) * 100);
            advices.push({
              tag: "🏷️ 支出内訳（2位）",
              text: `2番目に多かったのは『${secondCat[0]}』（${formatYen(secondCat[1])}・全体の${secondPct}％）でした。`
            });
          }
        }
      }

      // 5. 記録件数
      if (curCycleExpenses.length > 0) {
        advices.push({
          tag: "📝 記録の合計",
          text: `${monthNum}月は合計 ${curCycleExpenses.length} 件の支出が記録されています。`
        });
      }

      // 6. カード引き落とし合計
      if (curSummary.card > 0) {
        advices.push({
          tag: "💳 カード引き落とし合計",
          text: `${monthNum}月のカード引き落とし合計額は ${formatYen(curSummary.card)} でした。`
        });
      }
    } else {
      // ===== 当月・未来月のアドバイス =====
      // 1. 予算設定状況と消化ペース
      if (budget === null || budget <= 0) {
        advices.push({
          tag: "💡 はじめの一歩",
          text: "月間予算を設定すると、今月あと使える目安や1日の推奨ペースをお知らせします。"
        });
      } else {
        const remaining = budget - curSpent;
        let remainingDays = 1;
        if (isCurrentMonth) {
          remainingDays = Math.max(1, Math.round((new Date(range.endDate) - new Date(today)) / 86400000) + 1);
        } else {
          remainingDays = totalDays;
        }

        const dailyAllowance = Math.max(0, Math.floor(remaining / remainingDays));

        if (remaining < 0) {
          advices.push({
            tag: "⚠️ 予算超過に注意",
            text: `今月の予算を ${formatYen(Math.abs(remaining))} 上回っています。固定費以外の買い物を少し控えめにしてみましょう。`
          });
        } else if (isCurrentMonth) {
          const passedDays = Math.max(1, totalDays - remainingDays);
          const expectedBurn = Math.round((budget / totalDays) * passedDays);
          if (curSpent > expectedBurn * 1.15 && remainingDays > 3) {
            const overrun = Math.round(curSpent + (curSpent / passedDays) * remainingDays - budget);
            advices.push({
              tag: "⚠️ ペース注意",
              text: `このペースが続くと月末に予算を約 ${formatYen(overrun)} 上回る見込みです。今日の目安は ${formatYen(dailyAllowance)} に控えてみましょう。`
            });
          } else {
            advices.push({
              tag: "✨ 予算の目安",
              text: `今月の残り予算は ${formatYen(remaining)} です。月末まで1日あたり約 ${formatYen(dailyAllowance)} 使える計算です。`
            });
          }
        }
      }

      // 2. 前月同期比較
      if (prevSpent > 0 && curSpent > 0) {
        const diff = curSpent - prevSpent;
        const pct = Math.abs(Math.round((diff / prevSpent) * 100));
        if (diff < 0) {
          const pctText = pct < 1000 ? `（${pct}％）` : "";
          advices.push({
            tag: "🌱 節約順調",
            text: `先月と比べて支出が ${formatYen(Math.abs(diff))}${pctText}抑えられています。とても良いペースです。`
          });
        } else if (diff > 0 && pct >= 5) {
          const pctText = pct < 1000 ? `（${pct}％増）` : "";
          advices.push({
            tag: "📈 支出増加に注意",
            text: `先月と比べて支出が +${formatYen(diff)}${pctText}多めです。大きな買い物の予定がないか確認しておきましょう。`
          });
        }
      }

      // 3. カテゴリ別の傾向
      if (curCycleExpenses.length > 0) {
        const catTotals = {};
        curCycleExpenses.forEach((e) => {
          catTotals[e.category] = (catTotals[e.category] || 0) + Number(e.amount || 0);
        });
        const sortedCats = Object.entries(catTotals).sort((a, b) => b[1] - a[1]);
        if (sortedCats.length > 0) {
          const topCat = sortedCats[0];
          const topPct = Math.round((topCat[1] / (curSpent || 1)) * 100);
          if (topPct >= 30 && topCat[1] >= 3000) {
            advices.push({
              tag: "🏷️ カテゴリ分析",
              text: `今月の支出で最も多いのは『${topCat[0]}』（${formatYen(topCat[1])}・全体の${topPct}％）です。`
            });
          }
        }
      }

      // 4. 直近のカード引き落とし予定（7日以内）
      if (isCurrentMonth) {
        const upcoming = (curSummary.cardWithdrawalsList || []).filter((item) => {
          return item.date >= today && (new Date(item.date) - new Date(today)) <= 7 * 86400000;
        });
        if (upcoming.length > 0) {
          const nextBill = upcoming[0];
          const dateParts = nextBill.date.split("-");
          advices.push({
            tag: "💳 引き落とし予定",
            text: `${Number(dateParts[1])}月${Number(dateParts[2])}日に『${nextBill.cardName}』から ${formatYen(nextBill.amount)} の引き落とし予定があります。口座残高を確認しておきましょう。`
          });
        }
      }
    }

    // 5. デフォルト案内
    if (advices.length === 0 || curSpent === 0) {
      advices.push({
        tag: "💡 家計の見守り",
        text: "買い物をしたら右下の「＋」ボタンから記録しましょう。支出の傾向に合わせてアドバイスをお届けします。"
      });
    }

    return advices;
  }

  function renderSmartAdvisor(prefix = "advisor") {
    const banner = $(prefix === "report-advisor" ? "report-smart-advisor-banner" : "smart-advisor-banner");
    if (!banner) return;

    const monthKey = (prefix === "report-advisor" ? reportMonth : currentMonth).slice(0, 7);
    const advices = generateSmartAdvices(monthKey);
    if (!advices.length) return;

    const idx = prefix === "report-advisor" ? advisorReportIndex : advisorHomeIndex;
    const currentAdvice = advices[idx % advices.length];

    const badgeEl = $(prefix === "report-advisor" ? "report-advisor-badge" : "advisor-badge");
    const textEl = $(prefix === "report-advisor" ? "report-advisor-text" : "advisor-text");
    const unsetAdvisorTextEl = $("advisor-text-unset");

    if (badgeEl) badgeEl.textContent = currentAdvice.tag;
    if (textEl) textEl.textContent = currentAdvice.text;
    if (unsetAdvisorTextEl) unsetAdvisorTextEl.textContent = currentAdvice.text;
  }

  function nextSmartAdvice(prefix = "advisor") {
    const monthKey = (prefix === "report-advisor" ? reportMonth : currentMonth).slice(0, 7);
    const advices = generateSmartAdvices(monthKey);
    if (advices.length <= 1) return;

    if (prefix === "report-advisor") {
      advisorReportIndex = (advisorReportIndex + 1) % advices.length;
    } else {
      advisorHomeIndex = (advisorHomeIndex + 1) % advices.length;
    }

    const banner = $(prefix === "report-advisor" ? "report-smart-advisor-banner" : "smart-advisor-banner");
    if (banner) {
      banner.classList.remove("banner-pulse");
      void banner.offsetWidth;
      banner.classList.add("banner-pulse");
    }
    const unsetBanner = $("smart-advisor-banner-unset");
    if (unsetBanner) {
      unsetBanner.classList.remove("banner-pulse");
      void unsetBanner.offsetWidth;
      unsetBanner.classList.add("banner-pulse");
    }

    renderSmartAdvisor(prefix);
  }

  function renderMonthComparisonBanner() {
    const banner = $("report-month-comparison-card");
    if (!banner) return;

    const curMonthKey = reportMonth.slice(0, 7);
    const curDate = Core.parseDateKey(reportMonth);
    const prevDate = new Date(curDate.getFullYear(), curDate.getMonth() - 1, 1, 12);
    const prevMonthKey = Core.toDateKey(prevDate).slice(0, 7);
    const cycleDay = state.settings.cycleStartDay || 1;

    const curSum = Core.summarizeMonth(curMonthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions);
    const prevSum = Core.summarizeMonth(prevMonthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions);

    const curUsage = curSum.usage;
    const prevUsage = prevSum.usage;
    const diff = curUsage - prevUsage;

    const curPill = createElement("div", "comparison-stat");
    curPill.append(createElement("span", "comparison-stat-label", "今月利用"), createElement("strong", "", formatYen(curUsage)));

    const prevPill = createElement("div", "comparison-stat");
    prevPill.append(createElement("span", "comparison-stat-label", "前月利用"), createElement("strong", "", formatYen(prevUsage)));

    const diffPill = createElement("div", "comparison-stat");
    diffPill.append(createElement("span", "comparison-stat-label", "前月比"));
    if (prevUsage === 0 && curUsage === 0) {
      diffPill.append(createElement("strong", "", "±0円"));
    } else if (prevUsage === 0 && curUsage > 0) {
      diffPill.append(createElement("strong", "is-negative", `+${formatYen(curUsage)}`));
    } else if (prevUsage > 0 && curUsage === 0) {
      diffPill.append(createElement("strong", "is-positive", `-${formatYen(prevUsage)} (100％減)`));
    } else if (diff < 0) {
      const pct = Math.abs(Math.round((diff / prevUsage) * 100));
      diffPill.append(createElement("strong", "is-positive", `-${formatYen(Math.abs(diff))} (${pct}％減)`));
    } else if (diff > 0) {
      const pct = Math.round((diff / prevUsage) * 100);
      const pctText = pct < 1000 ? ` (${pct}％増)` : "";
      diffPill.append(createElement("strong", "is-negative", `+${formatYen(diff)}${pctText}`));
    } else {
      diffPill.append(createElement("strong", "", "前月と同額"));
    }

    banner.replaceChildren(curPill, prevPill, diffPill);
  }

  function renderPaymentMethodsBreakdown() {
    const container = $("payment-methods-breakdown");
    if (!container) return;

    const monthKey = reportMonth.slice(0, 7);
    const cycleDay = state.settings.cycleStartDay || 1;
    const range = Core.getCycleRange(monthKey, cycleDay);
    
    const monthlyExpenses = state.expenses.filter((e) => {
      if (cycleDay === 1) return e.date.startsWith(monthKey);
      return e.date >= range.startDate && e.date <= range.endDate;
    });

    const payTotals = {};
    PAYMENT_METHODS.forEach((pm) => { payTotals[pm] = 0; });
    monthlyExpenses.forEach((e) => {
      const pm = PAYMENT_METHODS.includes(e.paymentMethod) ? e.paymentMethod : "その他";
      payTotals[pm] = (payTotals[pm] || 0) + Core.normalizeAmount(e.amount);
    });

    (state.subscriptions || []).forEach((sub) => {
      if (!sub || sub.isActive === false) return;
      const usageDate = Core.getSubscriptionUsageDate(sub, monthKey);
      if (usageDate && usageDate >= range.startDate && usageDate <= range.endDate) {
        const pm = PAYMENT_METHODS.includes(sub.paymentMethod) ? sub.paymentMethod : "その他";
        payTotals[pm] = (payTotals[pm] || 0) + Core.normalizeAmount(sub.amount);
      }
    });

    const entries = Object.entries(payTotals).filter(([, amt]) => amt > 0).sort((a, b) => b[1] - a[1]);
    if (!entries.length) {
      container.replaceChildren(emptyState("この月の支出データはありません", ""));
      return;
    }

    const total = entries.reduce((sum, [, amt]) => sum + amt, 0) || 1;
    const nodes = entries.map(([method, amount]) => {
      const row = createElement("div", "category-row");
      const label = createElement("span", "", method);
      const track = createElement("div", "progress-track");
      const value = createElement("div", "progress-value");
      value.style.width = `${Math.max(3, Math.round((amount / total) * 100))}%`;
      value.style.background = "var(--usage)";
      track.append(value);
      const valText = createElement("strong", "", `${formatYen(amount)} (${Math.round((amount / total) * 100)}%)`);
      row.append(label, track, valText);
      return row;
    });

    container.replaceChildren(...nodes);
  }

  function renderFixedVsOtherBreakdown() {
    const container = $("fixed-vs-other-breakdown");
    if (!container) return;

    const monthKey = reportMonth.slice(0, 7);
    const cycleDay = state.settings.cycleStartDay || 1;
    const range = Core.getCycleRange(monthKey, cycleDay);
    
    const monthlyExpenses = state.expenses.filter((e) => {
      if (cycleDay === 1) return e.date.startsWith(monthKey);
      return e.date >= range.startDate && e.date <= range.endDate;
    });

    let fixedSum = 0;
    let otherSum = 0;
    monthlyExpenses.forEach((e) => {
      const amt = Core.normalizeAmount(e.amount);
      if (e.category === "固定費") fixedSum += amt;
      else otherSum += amt;
    });

    (state.subscriptions || []).forEach((sub) => {
      if (!sub || sub.isActive === false) return;
      const usageDate = Core.getSubscriptionUsageDate(sub, monthKey);
      if (usageDate && usageDate >= range.startDate && usageDate <= range.endDate) {
        fixedSum += Core.normalizeAmount(sub.amount);
      }
    });

    const total = fixedSum + otherSum || 1;
    if (total <= 1 && fixedSum === 0 && otherSum === 0) {
      container.replaceChildren(emptyState("この月の支出データはありません", ""));
      return;
    }

    const entries = [
      { label: "固定費", amount: fixedSum, color: "var(--card)" },
      { label: "変動費・その他", amount: otherSum, color: "var(--accent)" },
    ];

    const nodes = entries.map((item) => {
      const row = createElement("div", "category-row");
      const label = createElement("span", "", item.label);
      const track = createElement("div", "progress-track");
      const value = createElement("div", "progress-value");
      value.style.width = `${Math.max(3, Math.round((item.amount / total) * 100))}%`;
      value.style.background = item.color;
      track.append(value);
      const valText = createElement("strong", "", `${formatYen(item.amount)} (${Math.round((item.amount / total) * 100)}%)`);
      row.append(label, track, valText);
      return row;
    });

    container.replaceChildren(...nodes);
  }

  function renderCategoryDoughnutChart(textColor, textMutedColor) {
    const monthKey = reportMonth.slice(0, 7);
    const cycleDay = state.settings.cycleStartDay || 1;
    const summary = Core.summarizeMonth(monthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions);
    const entries = Object.entries(summary.categories).sort((a, b) => b[1] - a[1]);
    const legendContainer = $("category-chart-legend");
    const chartCanvas = $("category-chart");
    if (!chartCanvas || !legendContainer) return;

    if (!entries.length) {
      if (categoryChartInstance) {
        categoryChartInstance.destroy();
        categoryChartInstance = null;
      }
      legendContainer.replaceChildren(emptyState("この月の支出はまだありません", "円グラフを表示するには支出を登録してください。"));
      return;
    }

    const labels = entries.map(([category]) => category);
    const data = entries.map(([, amount]) => amount);
    const colors = labels.map((cat) => CATEGORY_COLORS[cat] || "#d5d5d5");
    const total = data.reduce((sum, val) => sum + val, 0);

    const legendNodes = entries.map(([category, amount]) => {
      const percentage = total > 0 ? Math.round((amount / total) * 100) : 0;
      const item = createElement("div", "chart-legend-item");
      const colorNode = createElement("i", "chart-legend-color");
      colorNode.style.backgroundColor = CATEGORY_COLORS[category] || "#d5d5d5";
      item.append(colorNode, document.createTextNode(`${category} (${percentage}%)`));
      const valNode = createElement("strong", "", formatYen(amount));
      item.append(valNode);
      return item;
    });
    legendContainer.replaceChildren(...legendNodes);

    const ctx = chartCanvas.getContext("2d");
    if (categoryChartInstance) {
      categoryChartInstance.destroy();
    }

    categoryChartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors,
          borderWidth: 2,
          borderColor: getComputedStyle(document.documentElement).getPropertyValue("--surface").trim() || "#fff",
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const value = context.raw;
                const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
                return ` ${context.label}: ${formatYen(value)} (${percentage}%)`;
              }
            }
          }
        },
        cutout: "60%"
      }
    });
  }

  function renderMonthlyTrendChart(textColor, textMutedColor, borderColor, usageColor, outflowColor) {
    const chartCanvas = $("monthly-trend-chart");
    if (!chartCanvas) return;

    const monthDate = Core.parseDateKey(reportMonth);
    const cycleDay = state.settings.cycleStartDay || 1;
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const date = new Date(monthDate.getFullYear(), monthDate.getMonth() - i, 1, 12);
      months.push(Core.toDateKey(date).slice(0, 7));
    }

    const usageData = [];
    const outflowData = [];

    months.forEach((monthKey) => {
      const summary = Core.summarizeMonth(monthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions);
      usageData.push(summary.usage);
      outflowData.push(summary.outflow);
    });

    const labels = months.map((m) => {
      const parts = m.split("-");
      return `${Number(parts[1])}月`;
    });

    const ctx = chartCanvas.getContext("2d");
    if (trendChartInstance) {
      trendChartInstance.destroy();
    }

    trendChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "利用額",
            data: usageData,
            backgroundColor: usageColor,
            borderRadius: 6,
          },
          {
            label: "口座引落・出金",
            data: outflowData,
            backgroundColor: outflowColor,
            borderRadius: 6,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: textColor,
              font: {
                size: 11
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return ` ${context.dataset.label}: ${formatYen(context.raw)}`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: textMutedColor
            }
          },
          y: {
            grid: {
              color: borderColor
            },
            ticks: {
              color: textMutedColor,
              callback: function (value) {
                return value >= 10000 ? `${value / 10000}万円` : `${value}円`;
              }
            }
          }
        }
      }
    });
  }
})();
