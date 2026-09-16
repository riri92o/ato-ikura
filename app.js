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
      id: "red",
      name: "レッド",
      themeColor1: "#ef4444",
      themeColor2: "#f87171",
      bgColor: "#fef2f2",
      cardBgColor: "#ffffff",
      borderColor: "#fecaca",
      gaugeColor: "#ef4444",
      usageColor: "#dc2626",
      theme: "light",
    },
    {
      id: "orange",
      name: "オレンジ",
      themeColor1: "#f97316",
      themeColor2: "#fb923c",
      bgColor: "#fff7ed",
      cardBgColor: "#ffffff",
      borderColor: "#fed7aa",
      gaugeColor: "#f97316",
      usageColor: "#ea580c",
      theme: "light",
    },
    {
      id: "yellow",
      name: "イエロー",
      themeColor1: "#eab308",
      themeColor2: "#facc15",
      bgColor: "#fefce8",
      cardBgColor: "#ffffff",
      borderColor: "#fef08a",
      gaugeColor: "#eab308",
      usageColor: "#ca8a04",
      theme: "light",
    },
    {
      id: "green",
      name: "グリーン",
      themeColor1: "#22c55e",
      themeColor2: "#4ade80",
      bgColor: "#f0fdf4",
      cardBgColor: "#ffffff",
      borderColor: "#bbf7d0",
      gaugeColor: "#22c55e",
      usageColor: "#16a34a",
      theme: "light",
    },
    {
      id: "blue",
      name: "ブルー",
      themeColor1: "#3b82f6",
      themeColor2: "#60a5fa",
      bgColor: "#eff6ff",
      cardBgColor: "#ffffff",
      borderColor: "#bfdbfe",
      gaugeColor: "#3b82f6",
      usageColor: "#2563eb",
      theme: "light",
    },
    {
      id: "purple",
      name: "パープル",
      themeColor1: "#a855f7",
      themeColor2: "#c084fc",
      bgColor: "#faf5ff",
      cardBgColor: "#ffffff",
      borderColor: "#e9d5ff",
      gaugeColor: "#a855f7",
      usageColor: "#9333ea",
      theme: "light",
    },
    {
      id: "pink",
      name: "ピンク",
      themeColor1: "#f472b6",
      themeColor2: "#fbcfe8",
      bgColor: "#fdf2f8",
      cardBgColor: "#ffffff",
      borderColor: "#fbcfe8",
      gaugeColor: "#f472b6",
      usageColor: "#db2777",
      theme: "light",
    },
    {
      id: "teal",
      name: "ティール",
      themeColor1: "#007a78",
      themeColor2: "#26a69a",
      bgColor: "#f2f9f9",
      cardBgColor: "#ffffff",
      borderColor: "#d1ecea",
      gaugeColor: "#007a78",
      usageColor: "#007a78",
      theme: "light",
    },
    {
      id: "lavender",
      name: "ラベンダー",
      themeColor1: "#8b5cf6",
      themeColor2: "#c084fc",
      bgColor: "#faf5ff",
      cardBgColor: "#ffffff",
      borderColor: "#eedcfd",
      gaugeColor: "#8b5cf6",
      usageColor: "#7c3aed",
      theme: "light",
    },
    {
      id: "forest",
      name: "フォレスト",
      themeColor1: "#15803d",
      themeColor2: "#4ade80",
      bgColor: "#f0fdf4",
      cardBgColor: "#ffffff",
      borderColor: "#bbf7d0",
      gaugeColor: "#16a34a",
      usageColor: "#15803d",
      theme: "light",
    },
    {
      id: "sunset",
      name: "サンセット",
      themeColor1: "#ea580c",
      themeColor2: "#fb923c",
      bgColor: "#fff7ed",
      cardBgColor: "#ffffff",
      borderColor: "#fed7aa",
      gaugeColor: "#ea580c",
      usageColor: "#c2410c",
      theme: "light",
    },
    {
      id: "ocean",
      name: "オーシャン",
      themeColor1: "#0891b2",
      themeColor2: "#22d3ee",
      bgColor: "#ecfeff",
      cardBgColor: "#ffffff",
      borderColor: "#a5f3fc",
      gaugeColor: "#0891b2",
      usageColor: "#0e7490",
      theme: "light",
    },
    {
      id: "amber",
      name: "アンバー",
      themeColor1: "#d97706",
      themeColor2: "#fbbf24",
      bgColor: "#fffbeb",
      cardBgColor: "#ffffff",
      borderColor: "#fde68a",
      gaugeColor: "#d97706",
      usageColor: "#b45309",
      theme: "light",
    },
    {
      id: "midnight",
      name: "ミッドナイト",
      themeColor1: "#6366f1",
      themeColor2: "#a5b4fc",
      bgColor: "#0f172a",
      cardBgColor: "#1e293b",
      borderColor: "#334155",
      gaugeColor: "#818cf8",
      usageColor: "#6366f1",
      theme: "dark",
    },
    {
      id: "mono",
      name: "モノクロ",
      themeColor1: "#334155",
      themeColor2: "#64748b",
      bgColor: "#f8fafc",
      cardBgColor: "#ffffff",
      borderColor: "#e2e8f0",
      gaugeColor: "#475569",
      usageColor: "#1e293b",
      theme: "light",
    },
  ];

  const SKIN_PRESETS = [
    { id: "none", name: "なし" },
    { id: "dot", name: "ドット" },
    { id: "grid", name: "グリッド" },
    { id: "check", name: "チェック" },
    { id: "line", name: "ライン" },
    { id: "glass", name: "ガラス" },
    { id: "leopard", name: "ヒョウ柄" },
    { id: "moroccan", name: "モロッカン" },
    { id: "starry", name: "星空" },
    { id: "othello", name: "オセロ" },
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

  const EMONEY_ICONS = {
    qr: {
      name: "QRコード",
      svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="6" y="6" width="1" height="1" fill="currentColor"></rect><rect x="17" y="6" width="1" height="1" fill="currentColor"></rect><rect x="17" y="17" width="1" height="1" fill="currentColor"></rect><rect x="6" y="17" width="1" height="1" fill="currentColor"></rect></svg>`,
    },
    wallet: {
      name: "ウォレット",
      svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>`,
    },
    train: {
      name: "交通系",
      svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="15" rx="3"></rect><path d="M4 11h16"></path><path d="M12 3v8"></path><circle cx="8" cy="15" r="1.5"></circle><circle cx="16" cy="15" r="1.5"></circle><path d="m6 19-2 2"></path><path d="m18 19 2 2"></path></svg>`,
    },
    card: {
      name: "タッチ決済",
      svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><circle cx="6" cy="15" r="1"></circle></svg>`,
    },
    phone: {
      name: "スマホ",
      svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    },
    shop: {
      name: "ショップ系",
      svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    },
    star: {
      name: "その他",
      svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    },
  };

  const DEFAULT_HOME_WIDGETS = [
    { id: "budget-summary", name: "予算・残額サマリー", enabled: true },
    { id: "budget-gauge", name: "予算進捗ゲージ", enabled: true },
    { id: "smart-advisor", name: "スマートアドバイザー", enabled: true },
    { id: "breakdown", name: "出金・カード内訳", enabled: true },
    { id: "calendar", name: "月間カレンダー", enabled: true },
    { id: "emoney-summary", name: "QR・電子マネー残高", enabled: true },
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
  let selectedDetailEmoneyId = "";
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
    setupFloatingThemePreviewDrag();
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
    clean.settings.skin = typeof skinRaw === "string" && ["none", "dot", "grid", "check", "paper", "line", "glass", "leopard", "moroccan", "starry", "othello", "aurora"].includes(skinRaw) ? (skinRaw === "paper" ? "check" : (skinRaw === "aurora" ? "othello" : skinRaw)) : "none";
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

    let lastNavTapTime = 0;
    let lastNavTapView = "";

    document.querySelectorAll(".nav-item").forEach((button) => {
      button.addEventListener("click", () => {
        const view = button.dataset.view;
        const now = Date.now();
        const isDoubleTap = (now - lastNavTapTime < 400 && lastNavTapView === view);
        const isAlreadyActive = (currentView === view);

        if (view === "cards" && isAlreadyActive) {
          const order = ["cards", "emoney", "subscriptions"];
          const curIdx = order.indexOf(currentPaymentsSubview || "cards");
          const nextSubview = order[(curIdx + 1) % order.length];
          switchPaymentsSubview(nextSubview);
        } else if (view === "report" && isAlreadyActive) {
          const nextTab = reportSubTab === "outlook" ? "analysis" : "outlook";
          switchReportSubTab(nextTab);
        } else if (view === "settings" && isAlreadyActive) {
          switchSettingsSubView("menu");
        } else {
          switchView(view);
        }

        lastNavTapTime = now;
        lastNavTapView = view;
      });
    });
    $("quick-add-button").addEventListener("click", () => openExpenseDialog(Core.todayKey()));
    const addEmoneyFab = $("add-emoney-fab");
    if (addEmoneyFab) addEmoneyFab.addEventListener("click", () => openEmoneyDialog());
    $("add-card-button").addEventListener("click", () => openCardDialog());
    $("open-balance-settings").addEventListener("click", () => {
      switchView("settings");
      switchSettingsSubView("balance");
    });

    // 支払い画面（カード / QR・電子マネー / 固定費・サブスク）切り替え
    const payTabCards = $("payments-tab-cards");
    if (payTabCards) payTabCards.addEventListener("click", () => switchPaymentsSubview("cards"));
    const payTabEmoney = $("payments-tab-emoney");
    if (payTabEmoney) payTabEmoney.addEventListener("click", () => switchPaymentsSubview("emoney"));
    const payTabSubs = $("payments-tab-subscriptions");
    if (payTabSubs) payTabSubs.addEventListener("click", () => switchPaymentsSubview("subscriptions"));

    // QR・電子マネー 操作
    const addEmoneyBtn = $("add-emoney-button");
    if (addEmoneyBtn) addEmoneyBtn.addEventListener("click", () => openEmoneyDialog());

    const emoneyDetailChargeBtn = $("emoney-detail-charge-btn");
    if (emoneyDetailChargeBtn) emoneyDetailChargeBtn.addEventListener("click", () => openChargeDialog(selectedDetailEmoneyId));
    const emoneyDetailAdjustBtn = $("emoney-detail-adjust-btn");
    if (emoneyDetailAdjustBtn) emoneyDetailAdjustBtn.addEventListener("click", () => openEmoneyAdjustDialog(selectedDetailEmoneyId));

    const emoneyForm = $("emoney-form");
    if (emoneyForm) emoneyForm.addEventListener("submit", saveEmoneyFromForm);
    const deleteEmoneyBtn = $("delete-emoney-btn");
    if (deleteEmoneyBtn) deleteEmoneyBtn.addEventListener("click", deleteCurrentEmoney);
    const emoneyInitialBal = $("emoney-initial-balance");
    if (emoneyInitialBal) emoneyInitialBal.addEventListener("blur", formatMoneyInput);

    const chargeForm = $("charge-form");
    if (chargeForm) chargeForm.addEventListener("submit", saveChargeFromForm);
    const deleteChargeBtn = $("delete-charge-btn");
    if (deleteChargeBtn) deleteChargeBtn.addEventListener("click", deleteCurrentCharge);
    const chargeAmtInput = $("charge-amount");
    if (chargeAmtInput) chargeAmtInput.addEventListener("blur", formatMoneyInput);

    const adjustForm = $("emoney-adjust-form");
    if (adjustForm) adjustForm.addEventListener("submit", saveEmoneyAdjustFromForm);
    const adjustTargetInput = $("adjust-target-balance");
    if (adjustTargetInput) {
      adjustTargetInput.addEventListener("blur", formatMoneyInput);
      adjustTargetInput.addEventListener("input", updateAdjustDiffPreview);
    }

    document.querySelectorAll("#emoney-color-presets .color-preset-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const color = chip.dataset.color;
        const input = $("emoney-color");
        if (input) input.value = color;
        document.querySelectorAll("#emoney-color-presets .color-preset-chip").forEach((c) => {
          c.classList.toggle("is-active", c.dataset.color === color);
        });
      });
    });

    const homeEmoneyWidget = $("home-emoney-widget-card");
    if (homeEmoneyWidget) {
      homeEmoneyWidget.addEventListener("click", () => {
        switchView("cards");
        switchPaymentsSubview("emoney");
      });
    }

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
    const closeEmoneyBtn = $("close-emoney-dialog");
    if (closeEmoneyBtn) closeEmoneyBtn.addEventListener("click", () => closeDialog($("emoney-dialog")));
    const closeChargeBtn = $("close-charge-dialog");
    if (closeChargeBtn) closeChargeBtn.addEventListener("click", () => closeDialog($("charge-dialog")));
    const closeAdjustBtn = $("close-emoney-adjust-dialog");
    if (closeAdjustBtn) closeAdjustBtn.addEventListener("click", () => closeDialog($("emoney-adjust-dialog")));

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

    const settingCardBgEl = $("setting-card-bg-color");
    if (settingCardBgEl) {
      settingCardBgEl.addEventListener("input", (e) => {
        state.settings.cardBgColor = e.target.value;
        applyThemeColors();
      });
      settingCardBgEl.addEventListener("change", () => {
        saveState();
        showToast("タブ・カード色を保存しました。");
      });
    }

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

    // テーマの共有
    const themeShareBtn = $("theme-share-btn");
    if (themeShareBtn) {
      themeShareBtn.addEventListener("click", async () => {
        const code = getThemeCode();
        const codePanel = $("theme-code-panel");
        const arrow = $("theme-share-arrow");
        if (codePanel) {
          const isOpen = !codePanel.classList.contains("is-hidden");
          if (!isOpen) {
            codePanel.classList.remove("is-hidden");
            if (arrow) arrow.classList.add("is-open");
            themeShareBtn.setAttribute("aria-expanded", "true");
          }
        }
        const codeInput = $("theme-code-input");
        if (codeInput) codeInput.value = code;

        // Try Web Share API first
        if (navigator.share) {
          try {
            await navigator.share({
              title: "あといくら テーマ設定",
              text: `あといくらのテーマコードです：\n${code}\n\n「表示・テーマ」の設定からコードを読み込んで使えます。`,
            });
            showToast("テーマを共有しました。");
            return;
          } catch (err) {
            if (err && err.name === "AbortError") return;
          }
        }

        // Fallback to clipboard
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(() => {
            showToast(`テーマコード「${code}」をコピーしました。`);
          }).catch(() => {
            showToast(`テーマコード: ${code}`);
          });
        } else {
          showToast(`テーマコード「${code}」をコピーしました。`);
        }
      });
    }

    // テーマコードのコピー
    const themeCodeCopyBtn = $("theme-code-copy-btn");
    if (themeCodeCopyBtn) {
      themeCodeCopyBtn.addEventListener("click", () => {
        const code = getThemeCode();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(() => {
            showToast(`テーマコード「${code}」をコピーしました。`);
          }).catch(() => {
            showToast("テーマコード: " + code);
          });
        } else {
          showToast(`テーマコード「${code}」をコピーしました。`);
        }
      });
    }

    // テーマコードの適用
    const applyThemeCodeFromField = () => {
      const input = $("theme-code-input");
      if (!input) return;
      const raw = input.value.trim();
      if (!raw) return;

      // Extract skin if specified (e.g. #007A78_#FFFFFF_#34D399:dot or with suffix)
      let skinId = "none";
      let colorRaw = raw;
      if (raw.includes(":")) {
        const segs = raw.split(":");
        colorRaw = segs[0].trim();
        let candidateSkin = (segs[1] || "").trim().toLowerCase();
        if (candidateSkin === "paper") candidateSkin = "check";
        if (SKIN_PRESETS.some((s) => s.id === candidateSkin)) {
          skinId = candidateSkin;
        }
      }

      const parts = colorRaw.split(/[_,\-\s]+/).filter(Boolean);
      // If skin is attached at the end without colon
      if (parts.length > 0) {
        let lastPart = parts[parts.length - 1].toLowerCase();
        if (lastPart === "paper") lastPart = "check";
        if (SKIN_PRESETS.some((s) => s.id === lastPart)) {
          skinId = lastPart;
          parts.pop();
        }
      }

      const hexRegex = /^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
      if (parts.length < 3) {
        showToast("テーマコードの形式が正しくありません。（例: #007A78_#FFFFFF_#34D399:check）");
        return;
      }
      const formatted = parts.map((p) => {
        const match = hexRegex.exec(p);
        if (!match) return null;
        let val = p.startsWith("#") ? p : `#${p}`;
        if (val.length === 4) {
          val = `#${val[1]}${val[1]}${val[2]}${val[2]}${val[3]}${val[3]}`;
        }
        return val;
      });
      if (formatted.some((p) => p === null)) {
        showToast("有効なカラーコード（#RRGGBB）を入力してください。");
        return;
      }

      state.settings.themeColor1 = formatted[0];
      state.settings.themeColor2 = formatted[0];
      state.settings.bgColor = formatted[1];
      if (formatted.length >= 5) {
        state.settings.cardBgColor = formatted[2];
        state.settings.borderColor = formatted[3];
        state.settings.gaugeColor = formatted[4];
      } else if (formatted.length === 4) {
        state.settings.cardBgColor = null;
        state.settings.borderColor = formatted[2];
        state.settings.gaugeColor = formatted[3];
      } else {
        state.settings.cardBgColor = null;
        state.settings.borderColor = "#e2e8f0";
        state.settings.gaugeColor = formatted[2];
      }
      state.settings.usageColor = state.settings.themeColor1;
      state.settings.skin = skinId;
      saveState();
      applyTheme();
      renderCalendar();
      showToast("テーマコードを適用しました。");
    };

    const themeCodeApplyBtn = $("theme-code-apply-btn");
    if (themeCodeApplyBtn) {
      themeCodeApplyBtn.addEventListener("click", applyThemeCodeFromField);
    }
    const themeCodeInput = $("theme-code-input");
    if (themeCodeInput) {
      themeCodeInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          applyThemeCodeFromField();
        }
      });
    }

    // カラー／スキン装飾タブ切り替え
    const themeTabColor = $("theme-tab-color");
    const themeTabSkin = $("theme-tab-skin");
    const presetGrid = $("preset-palette-grid");
    const skinGrid = $("skin-palette-grid");
    if (themeTabColor && themeTabSkin && presetGrid && skinGrid) {
      themeTabColor.addEventListener("click", () => {
        themeTabColor.classList.add("is-active");
        themeTabColor.setAttribute("aria-selected", "true");
        themeTabSkin.classList.remove("is-active");
        themeTabSkin.setAttribute("aria-selected", "false");
        presetGrid.classList.remove("is-hidden");
        skinGrid.classList.add("is-hidden");
      });
      themeTabSkin.addEventListener("click", () => {
        themeTabSkin.classList.add("is-active");
        themeTabSkin.setAttribute("aria-selected", "true");
        themeTabColor.classList.remove("is-active");
        themeTabColor.setAttribute("aria-selected", "false");
        skinGrid.classList.remove("is-hidden");
        presetGrid.classList.add("is-hidden");
      });
    }

    const themeTopResetBtn = $("theme-top-reset-btn");
    if (themeTopResetBtn) {
      themeTopResetBtn.addEventListener("click", () => {
        if (confirm("テーマと配色を初期設定に戻しますか？")) {
          const def = THEME_PRESETS.find((p) => p.id === "teal") || THEME_PRESETS[0];
          state.settings.theme = "auto";
          state.settings.themeColor1 = def.themeColor1;
          state.settings.themeColor2 = def.themeColor2 || def.themeColor1;
          state.settings.bgColor = def.bgColor;
          state.settings.cardBgColor = null;
          state.settings.borderColor = def.borderColor;
          state.settings.gaugeColor = def.gaugeColor;
          state.settings.usageColor = def.usageColor;
          state.settings.skin = "none";
          saveState();
          applyTheme();
          renderCalendar();
          showToast("テーマと配色を初期値に戻しました。");
        }
      });
    }

    document.querySelectorAll(".mode-seg-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modeVal = btn.dataset.modeVal;
        state.settings.theme = modeVal;
        saveState();
        applyTheme();
        showToast(`表示モードを「${modeVal === "light" ? "ライト" : modeVal === "dark" ? "ダーク" : "端末に合わせる"}」に変更しました。`);
      });
    });

    $("reset-colors-button").addEventListener("click", () => {
      const def = THEME_PRESETS.find((p) => p.id === "teal") || THEME_PRESETS[0];
      state.settings.theme = "auto";
      state.settings.themeColor1 = def.themeColor1;
      state.settings.themeColor2 = def.themeColor2 || def.themeColor1;
      state.settings.bgColor = def.bgColor;
      state.settings.cardBgColor = null;
      state.settings.borderColor = def.borderColor;
      state.settings.gaugeColor = def.gaugeColor;
      state.settings.usageColor = def.usageColor;
      state.settings.skin = "none";
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

    setupSuperReload();
  }

  function setupSuperReload() {
    const handleReload = async (triggerBtn) => {
      if (triggerBtn) {
        triggerBtn.classList.add("is-reloading");
      }
      showToast("キャッシュを削除して最新版を取得中...");
      try {
        if ("serviceWorker" in navigator) {
          const registrations = await navigator.serviceWorker.getRegistrations();
          for (const reg of registrations) {
            await reg.unregister();
          }
        }
        if ("caches" in window) {
          const keys = await caches.keys();
          for (const key of keys) {
            await caches.delete(key);
          }
        }
      } catch (e) {
        console.warn("Super reload cleanup error:", e);
      }
      setTimeout(() => {
        const url = new URL(window.location.href);
        url.searchParams.set("reload_t", Date.now().toString());
        window.location.replace(url.toString());
      }, 350);
    };

    const quickBtn = $("btn-quick-super-reload");
    if (quickBtn) quickBtn.addEventListener("click", () => handleReload(quickBtn));
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
    const floatingPreview = $("theme-floating-preview");
    if (floatingPreview) {
      floatingPreview.classList.toggle("is-hidden", viewKey !== "theme");
    }
    if (viewKey === "widgets") {
      renderHomeWidgetsManageList("settings-widgets-manage-list");
    }
    if (typeof window.scrollTo === "function") window.scrollTo({ top: 0, behavior: "smooth" });
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
    if (typeof window.scrollTo === "function") window.scrollTo({ top: 0, behavior: "smooth" });
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

    updateFabs();

    const todayBtn = $("today-button");
    if (todayBtn) todayBtn.classList.toggle("is-hidden", view !== "calendar");

    const floatingPreview = $("theme-floating-preview");
    if (floatingPreview && view !== "settings") {
      floatingPreview.classList.add("is-hidden");
    }

    if (view === "history") renderHistory();
    if (view === "report") renderReport();
    if (view === "cards") {
      switchPaymentsSubview(currentPaymentsSubview || "cards");
    }
    if (view === "settings") {
      switchSettingsSubView("menu");
      renderSettings();
    }
    if (typeof window.scrollTo === "function") window.scrollTo(0, 0);
  }

  function updateFabs() {
    const quickAddBtn = $("quick-add-button");
    if (quickAddBtn) {
      const showQuickAdd = currentView === "calendar";
      quickAddBtn.style.display = showQuickAdd ? "inline-flex" : "none";
      quickAddBtn.classList.toggle("is-hidden", !showQuickAdd);
    }

    const emoneyFab = $("add-emoney-fab");
    if (emoneyFab) {
      const showEmoneyFab = (currentView === "cards" && currentPaymentsSubview === "emoney");
      emoneyFab.style.display = showEmoneyFab ? "inline-flex" : "none";
      emoneyFab.classList.toggle("is-hidden", !showEmoneyFab);
    }
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
    let activeIndex = Math.max(0, viewsOrder.indexOf(currentView));
    let previewIndex = activeIndex;

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

    function getIndicatorTranslateAndIndex(clientX) {
      const { navRect, paddingLeft, trackWidth, itemWidth } = getNavMetrics();
      const relativeX = clientX - navRect.left - paddingLeft;
      const halfItem = itemWidth / 2;
      const clampedCenterX = Math.max(halfItem, Math.min(trackWidth - halfItem, relativeX));
      const targetTranslateX = clampedCenterX - halfItem;
      const rawIdx = Math.floor(relativeX / itemWidth);
      const closestIdx = Math.max(0, Math.min(viewsOrder.length - 1, rawIdx));
      return { targetTranslateX, closestIdx };
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

    let touchStartX = 0;
    let touchStartY = 0;
    let touchCurrentX = 0;
    let isTouchActive = false;
    let isTouchSliding = false;
    let lastNavTapTime = 0;
    let lastNavTapView = "";

    function handleTouchStart(e) {
      if (!e.touches || e.touches.length === 0) return;
      isTouchActive = true;
      isTouchSliding = false;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchCurrentX = touchStartX;
      activeIndex = Math.max(0, viewsOrder.indexOf(currentView));
      previewIndex = activeIndex;
    }

    function handleTouchMove(e) {
      if (!isTouchActive || !e.touches || e.touches.length === 0) return;
      // ナビバー操作中は縦・横の画面スクロールを完全に抑止
      if (e.cancelable) e.preventDefault();
      touchCurrentX = e.touches[0].clientX;
      const dx = touchCurrentX - touchStartX;
      if (Math.abs(dx) > 3) {
        isTouchSliding = true;
      }
      if (isTouchSliding) {
        const { targetTranslateX, closestIdx } = getIndicatorTranslateAndIndex(touchCurrentX);
        if (indicator) {
          indicator.classList.add("is-dragging");
          indicator.style.transform = `translate3d(${targetTranslateX}px, 0, 0)`;
        }
        if (closestIdx !== previewIndex) {
          previewIndex = closestIdx;
          updatePreviewHighlight(previewIndex);
        }
      }
    }

    function handleTouchEnd(e) {
      if (!isTouchActive) return;
      isTouchActive = false;
      if (e.cancelable) e.preventDefault();
      clearPreviewHighlight();
      suppressClickUntil = Date.now() + 500;

      const clientX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : touchCurrentX;
      const { closestIdx } = getIndicatorTranslateAndIndex(clientX);
      const targetView = viewsOrder[closestIdx];
      const prevIdx = activeIndex;
      activeIndex = closestIdx;
      setIndicatorPosition(closestIdx, true);

      if (isTouchSliding) {
        isTouchSliding = false;
        if (targetView && targetView !== currentView) {
          const direction = closestIdx > prevIdx ? "next" : "prev";
          switchView(targetView, direction);
        }
      } else {
        // タップ操作
        const now = Date.now();
        const isDoubleTap = (now - lastNavTapTime < 400 && lastNavTapView === targetView);
        const isAlreadyActive = (currentView === targetView);
        lastNavTapTime = now;
        lastNavTapView = targetView;

        if (targetView === "cards" && isAlreadyActive) {
          const order = ["cards", "emoney", "subscriptions"];
          const curIdx = order.indexOf(currentPaymentsSubview || "cards");
          const nextSubview = order[(curIdx + 1) % order.length];
          switchPaymentsSubview(nextSubview);
        } else if (targetView === "report" && isAlreadyActive) {
          const nextTab = reportSubTab === "outlook" ? "analysis" : "outlook";
          switchReportSubTab(nextTab);
        } else if (targetView === "settings" && isAlreadyActive) {
          switchSettingsSubView("menu");
        } else if (targetView && targetView !== currentView) {
          const direction = closestIdx > prevIdx ? "next" : "prev";
          switchView(targetView, direction);
        }
      }
    }

    function handleTouchCancel() {
      if (!isTouchActive) return;
      isTouchActive = false;
      isTouchSliding = false;
      clearPreviewHighlight();
      suppressClickUntil = Date.now() + 400;
      const finalIdx = previewIndex >= 0 ? previewIndex : activeIndex;
      const targetView = viewsOrder[finalIdx];
      const prevIdx = activeIndex;
      activeIndex = finalIdx;
      setIndicatorPosition(finalIdx, true);
      if (targetView && targetView !== currentView) {
        const direction = finalIdx > prevIdx ? "next" : "prev";
        switchView(targetView, direction);
      }
    }

    // Touch Events（iOS Safari / Android Chrome / スマホブラウザ）
    nav.addEventListener("touchstart", (e) => {
      if (e.cancelable) e.preventDefault();
      handleTouchStart(e);
    }, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });
    window.addEventListener("touchcancel", handleTouchCancel, { passive: false });

    // Mouse Events（PC・デスクトップ用）
    let isMouseDown = false;
    let mouseStartX = 0;
    let isMouseDragging = false;

    nav.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;
      isMouseDown = true;
      isMouseDragging = false;
      mouseStartX = e.clientX;
      activeIndex = Math.max(0, viewsOrder.indexOf(currentView));
      previewIndex = activeIndex;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isMouseDown) return;
      const dx = e.clientX - mouseStartX;
      if (Math.abs(dx) > 3) {
        isMouseDragging = true;
      }
      if (isMouseDragging) {
        const { targetTranslateX, closestIdx } = getIndicatorTranslateAndIndex(e.clientX);
        if (indicator) {
          indicator.classList.add("is-dragging");
          indicator.style.transform = `translate3d(${targetTranslateX}px, 0, 0)`;
        }
        if (closestIdx !== previewIndex) {
          previewIndex = closestIdx;
          updatePreviewHighlight(previewIndex);
        }
      }
    });

    window.addEventListener("mouseup", (e) => {
      if (!isMouseDown) return;
      isMouseDown = false;
      clearPreviewHighlight();
      if (isMouseDragging) {
        isMouseDragging = false;
        suppressClickUntil = Date.now() + 400;
        const { closestIdx } = getIndicatorTranslateAndIndex(e.clientX);
        const targetView = viewsOrder[closestIdx];
        const prevIdx = activeIndex;
        activeIndex = closestIdx;
        setIndicatorPosition(closestIdx, true);
        if (targetView && targetView !== currentView) {
          const direction = closestIdx > prevIdx ? "next" : "prev";
          switchView(targetView, direction);
        }
      }
    });

    setTimeout(() => {
      setIndicatorPosition(viewsOrder.indexOf(currentView), false);
    }, 50);
  }

  function switchPaymentsSubview(subview) {
    if (!["cards", "emoney", "subscriptions"].includes(subview)) return;
    currentPaymentsSubview = subview;
    const cardsTab = $("payments-tab-cards");
    const emoneyTab = $("payments-tab-emoney");
    const subTab = $("payments-tab-subscriptions");
    const cardsView = $("cards-payment-subview");
    const emoneyView = $("emoney-payment-subview");
    const subView = $("subscriptions-payment-subview");

    if (cardsTab) {
      cardsTab.classList.toggle("is-active", subview === "cards");
      cardsTab.setAttribute("aria-selected", subview === "cards" ? "true" : "false");
    }
    if (emoneyTab) {
      emoneyTab.classList.toggle("is-active", subview === "emoney");
      emoneyTab.setAttribute("aria-selected", subview === "emoney" ? "true" : "false");
    }
    if (subTab) {
      subTab.classList.toggle("is-active", subview === "subscriptions");
      subTab.setAttribute("aria-selected", subview === "subscriptions" ? "true" : "false");
    }

    if (cardsView) cardsView.classList.toggle("is-active", subview === "cards");
    if (emoneyView) emoneyView.classList.toggle("is-active", subview === "emoney");
    if (subView) subView.classList.toggle("is-active", subview === "subscriptions");

    if (subview === "cards") {
      switchCardSubView("main");
      renderCards();
    } else if (subview === "emoney") {
      renderEmoneyList();
    } else {
      renderSubscriptionsView();
    }
    updateFabs();
  }

  function renderAll() {
    renderCalendarView();
    renderHistory();
    renderReport();
    renderCards();
    renderEmoneyList();
    renderHomeEmoneySummary();
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

    // 1. まとめた枠ラッパー（.home-widget-merged-card）内に移動していたウィジェット要素を、
    //    すべて直下の container に取り出して復元し、空になったラッパーを削除
    if (container.querySelectorAll) {
      container.querySelectorAll(".home-widget-merged-card").forEach((m) => {
        m.querySelectorAll("[id^='widget-']").forEach((child) => {
          child.classList.remove("is-in-merged-card");
          container.appendChild(child);
        });
        m.remove();
      });
    }

    const widgets = state.settings.homeWidgets || defaultHomeWidgets();

    // 2. 連続する同一groupIdのウィジェットをグループ化（2個でも3個以上でも対応）
    const groups = [];
    let currentGroup = null;

    widgets.forEach((w) => {
      if (w.groupId) {
        if (currentGroup && currentGroup.groupId === w.groupId) {
          currentGroup.items.push(w);
        } else {
          currentGroup = { groupId: w.groupId, items: [w] };
          groups.push(currentGroup);
        }
      } else {
        currentGroup = null;
        groups.push({ groupId: null, items: [w] });
      }
    });

    // 3. 各グループ（結合カードまたは単独カード）をDOMに配置
    groups.forEach((group) => {
      if (group.groupId && group.items.length > 1) {
        // === 1つの枠にまとめる（結合ウィジェットカード） ===
        const mergedWrapper = document.createElement("div");
        mergedWrapper.className = "home-widget-block home-widget-merged-card";
        mergedWrapper.dataset.widget = group.items.map((it) => it.id).join("+");
        mergedWrapper.dataset.groupId = group.groupId;

        const isGroupEnabled = group.items.some((it) => it.enabled);
        mergedWrapper.classList.toggle("is-hidden", !isGroupEnabled);

        const header = document.createElement("div");
        header.className = "merged-card-header";

        const badge = document.createElement("span");
        badge.className = "merged-card-badge";
        badge.innerHTML = `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> まとめた枠`;

        const splitBtn = document.createElement("button");
        splitBtn.type = "button";
        splitBtn.className = "merged-card-split-btn";
        splitBtn.textContent = "⎘ 分離する";
        splitBtn.title = "結合を解除して別々の枠に戻す";
        splitBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const targetGid = group.groupId;
          widgets.forEach((it) => {
            if (it.groupId === targetGid) it.groupId = null;
          });
          saveState();
          renderHomeWidgets();
          renderHomeWidgetsManageList("settings-widgets-manage-list");
          renderHomeWidgetsManageList("home-widgets-manage-list");
          showToast("枠の結合を解除しました。");
        });

        header.append(badge, splitBtn);
        mergedWrapper.append(header);

        let prevWasEnabled = false;
        group.items.forEach((w) => {
          const el = $(`widget-${w.id}`);
          if (el) {
            el.classList.add("is-in-merged-card");
            el.classList.toggle("is-hidden", !w.enabled);
            if (w.enabled && prevWasEnabled) {
              const divider = document.createElement("div");
              divider.className = "merged-widget-divider";
              mergedWrapper.appendChild(divider);
            }
            mergedWrapper.appendChild(el);
            if (w.enabled) prevWasEnabled = true;
          }
        });

        container.appendChild(mergedWrapper);
      } else {
        // === 単独の通常ウィジェット ===
        group.items.forEach((w) => {
          const el = $(`widget-${w.id}`);
          if (el) {
            el.classList.remove("is-in-merged-card");
            el.classList.toggle("is-hidden", !w.enabled);
            container.appendChild(el);
          }
        });
      }
    });

    // 4. 動的ウィジェットの再描画
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
      } else if (w.id === "emoney-summary") {
        renderHomeEmoneySummary();
      }
    });
  }

  function renderHomeBalanceOutlook() {
    const current = state.settings.currentBalance;
    const reserve = state.settings.minimumReserve;
    const upcoming = Core.getUpcomingCardTotal(Core.todayKey(), 30, state.expenses, state.cards, state.manualPayments, state.subscriptions, state.emoneyTransactions);

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
    const dailyTotals = Core.buildDailyTotals(state.expenses, state.cards, state.manualPayments, state.subscriptions, undefined, state.emoneyTransactions);

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
    const summary = Core.summarizeMonth(monthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions, state.emoneyTransactions);
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

      if (widget.groupId) {
        const groupBadge = createElement("button", "widget-manage-split-badge", "🔗 結合中 (解除)");
        groupBadge.type = "button";
        groupBadge.title = "このグループの結合を解除";
        groupBadge.addEventListener("click", (e) => {
          e.stopPropagation();
          const gid = widget.groupId;
          widgets.forEach((w) => {
            if (w.groupId === gid) w.groupId = null;
          });
          state.settings.homeWidgets = widgets;
          saveState();
          renderHomeWidgets();
          renderHomeWidgetsManageList("settings-widgets-manage-list");
          renderHomeWidgetsManageList("home-widgets-manage-list");
          showToast("枠の結合を解除しました。");
        });
        info.append(groupBadge);
      }

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
    const dailyTotals = Core.buildDailyTotals(state.expenses, state.cards, state.manualPayments, state.subscriptions, undefined, state.emoneyTransactions);
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

    let emoneyChargeTotal = 0;
    (state.emoneyTransactions || []).forEach((tx) => {
      if (tx.type !== "charge" || tx.cardId !== cardId) return;
      const fakeExp = { paymentMethod: Core.CREDIT_PAYMENT, cardId: tx.cardId, date: tx.date };
      const paymentDate = Core.getExpensePaymentDate(fakeExp, state.cards);
      if (paymentDate === dateKey) {
        emoneyChargeTotal += Core.normalizeAmount(tx.amount);
      }
    });

    return expenseTotal + subscriptionTotal + emoneyChargeTotal;
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
    const summary = Core.summarizeMonth(monthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions, state.emoneyTransactions);
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
    const next = Core.getNextCardWithdrawal(Core.todayKey(), state.expenses, state.cards, state.manualPayments, state.subscriptions, state.emoneyTransactions);
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
    const summary = Core.summarizeMonth(monthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions, state.emoneyTransactions);
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
        isCharge: false,
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
          isCharge: false,
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

    const cardCharges = (state.emoneyTransactions || [])
      .filter((tx) => tx.type === "charge" && tx.cardId === card.id && tx.date >= range.startDate && tx.date <= range.endDate)
      .map((tx) => {
        const em = (state.emoneys || []).find((e) => e.id === tx.emoneyId);
        return {
          isSubscription: false,
          isCharge: true,
          id: tx.id,
          emoneyId: tx.emoneyId,
          date: tx.date,
          name: `${em ? em.name : "QR・電子マネー"}へチャージ`,
          memo: tx.memo || "",
          amount: Core.normalizeAmount(tx.amount),
        };
      });

    const allCardItems = [...cardExpenses, ...cardSubscriptions, ...cardCharges].sort((a, b) => b.date.localeCompare(a.date));
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
        } else if (item.isCharge) {
          const iconSpan = createElement("span", "card-expense-cat-icon", "⚡");
          const nameEl = createElement("span", "card-expense-memo", item.name);
          const chargeBadge = createElement("span", "badge-card-subscription", "チャージ");
          left.append(iconSpan, nameEl, chargeBadge);
          row.title = "タップしてチャージを編集";
          row.addEventListener("click", () => openChargeDialog(item.emoneyId, item.id));
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
     QR・電子マネー管理ロジック
     ========================================================================== */

  function getEmoneyBalance(emoneyId) {
    return Core.calculateEmoneyBalance(emoneyId, state.emoneys, state.emoneyTransactions, state.expenses);
  }

  function getTotalEmoneyBalance() {
    return (state.emoneys || []).reduce((total, em) => total + getEmoneyBalance(em.id), 0);
  }

  function renderEmoneyList() {
    const totalValEl = $("emoney-total-balance-val");
    const totalCountEl = $("emoney-total-services-count");
    const emptyStateEl = $("emoney-empty-state");
    const listEl = $("emoney-services-list");

    const totalBal = getTotalEmoneyBalance();
    if (totalValEl) totalValEl.textContent = formatYen(totalBal);
    if (totalCountEl) totalCountEl.textContent = `${(state.emoneys || []).length}件`;

    if (!state.emoneys || !state.emoneys.length) {
      if (emptyStateEl) emptyStateEl.classList.remove("is-hidden");
      if (listEl) listEl.classList.add("is-hidden");
      return;
    }

    if (emptyStateEl) emptyStateEl.classList.add("is-hidden");
    if (listEl) listEl.classList.remove("is-hidden");

    if (!listEl) return;

    const cards = state.emoneys.map((em) => {
      const balance = getEmoneyBalance(em.id);
      const iconDef = EMONEY_ICONS[em.icon] || EMONEY_ICONS.qr;

      const card = createElement("article", "emoney-service-card");
      card.style.setProperty("--emoney-color", em.color || "#e60012");

      const top = createElement("div", "emoney-service-top");
      const brand = createElement("div", "emoney-service-brand");
      const iconBox = createElement("div", "emoney-icon-box");
      iconBox.style.backgroundColor = em.color || "#e60012";
      iconBox.innerHTML = iconDef.svg;

      const nameCol = createElement("div", "emoney-name-col");
      const title = createElement("h3", "emoney-service-name", em.name);
      nameCol.append(title);

      if (em.isDefault) {
        nameCol.append(createElement("span", "emoney-default-badge", "初期選択"));
      }
      brand.append(iconBox, nameCol);

      const balBox = createElement("div", "emoney-balance-box");
      balBox.append(
        createElement("span", "emoney-balance-label", "現在残高"),
        createElement("strong", `emoney-current-balance${balance < 0 ? " is-negative" : ""}`, formatYen(balance))
      );
      top.append(brand, balBox);

      const actions = createElement("div", "emoney-service-actions");
      const chargeBtn = createElement("button", "button button-primary emoney-charge-action-btn", "＋ チャージ");
      chargeBtn.type = "button";
      chargeBtn.addEventListener("click", () => openChargeDialog(em.id));

      const histBtn = createElement("button", "button button-secondary emoney-history-action-btn", "履歴");
      histBtn.type = "button";
      histBtn.addEventListener("click", () => openEmoneyHistoryDialog(em.id));

      const editBtn = createElement("button", "button button-ghost emoney-icon-btn", "編集");
      editBtn.type = "button";
      editBtn.addEventListener("click", () => openEmoneyDialog(em));

      actions.append(chargeBtn, histBtn, editBtn);
      card.append(top, actions);
      return card;
    });

    listEl.replaceChildren(...cards);
  }

  function openEmoneyHistoryDialog(emoneyId) {
    selectedDetailEmoneyId = emoneyId;
    const em = (state.emoneys || []).find((e) => e.id === emoneyId);
    if (!em) return;
    renderEmoneyDetail(emoneyId);
    showDialog($("emoney-history-dialog"));
  }

  function renderEmoneyDetail(emoneyId) {
    selectedDetailEmoneyId = emoneyId;
    const em = (state.emoneys || []).find((e) => e.id === emoneyId);
    if (!em) {
      closeDialog($("emoney-history-dialog"));
      renderEmoneyList();
      return;
    }

    const titleEl = $("emoney-history-dialog-title");
    if (titleEl) titleEl.textContent = `${em.name}の取引履歴`;

    const iconDef = EMONEY_ICONS[em.icon] || EMONEY_ICONS.qr;
    const currentBal = getEmoneyBalance(em.id);

    const iconEl = $("emoney-detail-icon-box");
    if (iconEl) {
      iconEl.innerHTML = iconDef.svg;
      iconEl.style.backgroundColor = em.color || "#e60012";
      iconEl.style.color = "#ffffff";
    }

    const nameEl = $("emoney-detail-name");
    if (nameEl) nameEl.textContent = em.name;

    const badgeEl = $("emoney-detail-default-badge");
    if (badgeEl) badgeEl.classList.toggle("is-hidden", !em.isDefault);

    const balEl = $("emoney-detail-balance");
    if (balEl) {
      balEl.textContent = formatYen(currentBal);
      balEl.classList.toggle("is-negative", currentBal < 0);
    }

    const initBalEl = $("emoney-detail-initial-balance");
    if (initBalEl) initBalEl.textContent = formatYen(em.initialBalance);

    // 履歴アイテム生成（支出、チャージ、残高調整）
    const listEl = $("emoney-history-list");
    if (!listEl) return;

    const items = [];

    // 1. チャージ & 残高調整 & 取消された支出
    (state.emoneyTransactions || []).forEach((tx) => {
      if (tx.emoneyId !== em.id) return;
      if (tx.type === "charge") {
        const card = tx.cardId ? (state.cards || []).find((c) => c.id === tx.cardId) : null;
        items.push({
          type: "charge",
          id: tx.id,
          date: tx.date,
          createdAt: tx.createdAt || tx.date,
          amount: Core.normalizeAmount(tx.amount),
          title: card ? `${card.name}からチャージ` : "チャージ（現金・他）",
          memo: tx.memo || "",
          cardName: card ? card.name : "",
          isCard: Boolean(card),
          onClick: () => openChargeDialog(em.id, tx.id),
        });
      } else if (tx.type === "adjustment" || tx.type === "adjust") {
        const diff = tx.diff !== undefined ? Number(tx.diff) : Number(tx.amount || 0);
        const targetBal = tx.targetBalance !== undefined ? Number(tx.targetBalance) : (currentBal);
        items.push({
          type: "adjustment",
          id: tx.id,
          date: tx.date,
          createdAt: tx.createdAt || tx.date,
          diff: diff,
          targetBalance: targetBal,
          title: `残高調整（${diff >= 0 ? "+" : ""}${formatYen(diff)}）`,
          memo: tx.memo || "",
          onClick: () => deleteEmoneyTransaction(tx.id),
        });
      } else if (tx.type === "cancelled_expense") {
        items.push({
          type: "cancelled_expense",
          id: tx.id,
          date: tx.date,
          createdAt: tx.createdAt || tx.date,
          amount: Core.normalizeAmount(tx.amount),
          title: tx.memo || tx.category || "支出",
          memo: tx.memo || "",
          category: tx.category || "支出",
          isCancelled: true,
          onClick: () => deleteEmoneyTransaction(tx.id),
        });
      }
    });

    // 2. 有効な支出
    (state.expenses || []).forEach((exp) => {
      if (exp.paymentMethod === "QR・電子マネー" && exp.emoneyId === em.id) {
        items.push({
          type: "expense",
          id: exp.id,
          date: exp.date,
          createdAt: exp.createdAt || exp.date,
          amount: Core.normalizeAmount(exp.amount),
          title: exp.memo || exp.category,
          memo: exp.memo || "",
          category: exp.category,
          isCancelled: false,
          onClick: () => openExpenseDialog(exp.date, exp.id),
        });
      }
    });

    items.sort((a, b) => b.date.localeCompare(a.date) || (b.createdAt || "").localeCompare(a.createdAt || ""));

    if (!items.length) {
      listEl.replaceChildren(emptyState("取引履歴はありません", "チャージまたはQR・電子マネーでの支出を登録するとここに表示されます。"));
      return;
    }

    const rowEls = items.map((item) => {
      const row = createElement("div", `emoney-tx-item${item.isCancelled ? " is-cancelled" : ""}`);

      const left = createElement("div", "emoney-tx-left");
      
      let badgeClass = "emoney-tx-badge";
      let badgeSvg = "";
      if (item.type === "charge") {
        badgeClass += " is-charge";
        badgeSvg = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="17 11 12 6 7 11"></polyline><line x1="12" y1="18" x2="12" y2="6"></line></svg>';
      } else if (item.type === "adjustment") {
        badgeClass += " is-adjust";
        badgeSvg = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="4" y1="8" x2="20" y2="8"></line><line x1="4" y1="16" x2="20" y2="16"></line><circle cx="9" cy="8" r="2" fill="currentColor"></circle><circle cx="15" cy="16" r="2" fill="currentColor"></circle></svg>';
      } else if (item.type === "cancelled_expense") {
        badgeClass += " is-cancelled-badge";
        badgeSvg = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="9"></circle><line x1="5.7" y1="5.7" x2="18.3" y2="18.3"></line></svg>';
      } else {
        badgeClass += " is-expense";
        badgeSvg = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>';
      }
      const badgeEl = createElement("div", badgeClass);
      badgeEl.innerHTML = badgeSvg;

      const info = createElement("div", "emoney-tx-info");
      const titleEl = createElement("strong", "emoney-tx-title", item.title);
      const sub = createElement("div", "emoney-tx-sub");
      sub.append(createElement("span", "", formatDate(item.date, { month: "numeric", day: "numeric", weekday: "short" })));

      if (item.type === "charge") {
        sub.append(createElement("span", "transfer-badge", "資金移動"));
        if (item.memo) sub.append(createElement("span", "", `（${item.memo}）`));
      } else if (item.type === "adjustment") {
        sub.append(createElement("span", "transfer-badge", "残高調整"));
        if (item.memo) sub.append(createElement("span", "", `（${item.memo}）`));
      } else if (item.type === "cancelled_expense") {
        sub.append(createElement("span", "transfer-badge is-cancelled-tag", "取消済"));
        sub.append(createElement("span", "", item.category));
      } else {
        sub.append(createElement("span", "", item.category));
      }
      info.append(titleEl, sub);
      left.append(badgeEl, info);

      const right = createElement("div", "emoney-tx-right");
      let amtText = "";
      let isPlus = false;
      let isMinus = false;
      if (item.type === "charge") {
        amtText = `+${formatYen(item.amount)}`;
        isPlus = true;
      } else if (item.type === "adjustment") {
        amtText = `${item.diff >= 0 ? "+" : ""}${formatYen(item.diff)}`;
        isPlus = item.diff > 0;
        isMinus = item.diff < 0;
      } else {
        amtText = `-${formatYen(item.amount)}`;
        isMinus = !item.isCancelled;
      }

      const amtEl = createElement(
        "strong",
        `emoney-tx-amount${isPlus ? " is-plus" : ""}${isMinus ? " is-minus" : ""}${item.isCancelled ? " is-cancelled-amt" : ""}`,
        amtText
      );
      const actionsEl = createElement("div", "emoney-tx-actions");
      const actionText = (item.type === "adjustment" || item.type === "cancelled_expense") ? "削除" : "詳細";
      const editLink = createElement("button", "emoney-tx-action-link", actionText);
      editLink.type = "button";
      editLink.addEventListener("click", (e) => {
        e.stopPropagation();
        item.onClick();
      });
      actionsEl.append(editLink);
      right.append(amtEl, actionsEl);

      row.append(left, right);
      row.style.cursor = "pointer";
      row.addEventListener("click", item.onClick);
      return row;
    });

    listEl.replaceChildren(...rowEls);
  }

  function renderHomeEmoneySummary() {
    const totalBalEl = $("home-emoney-total-balance");
    const chipsContainer = $("home-emoney-services-chips");
    const emptyHint = $("home-emoney-empty-text");

    const totalBal = getTotalEmoneyBalance();
    if (totalBalEl) totalBalEl.textContent = formatYen(totalBal);

    if (!state.emoneys || !state.emoneys.length) {
      if (chipsContainer) chipsContainer.replaceChildren();
      if (emptyHint) emptyHint.classList.remove("is-hidden");
      return;
    }

    if (emptyHint) emptyHint.classList.add("is-hidden");
    if (!chipsContainer) return;

    const chips = state.emoneys.map((em) => {
      const bal = getEmoneyBalance(em.id);
      const iconDef = EMONEY_ICONS[em.icon] || EMONEY_ICONS.qr;

      const chip = createElement("div", "emoney-mini-chip");
      chip.style.setProperty("--emoney-chip-color", em.color || "#e60012");

      const iconBox = createElement("span", "emoney-mini-chip-icon");
      iconBox.style.backgroundColor = em.color || "#e60012";
      iconBox.innerHTML = iconDef.svg;

      const name = createElement("span", "emoney-mini-chip-name", em.name);
      const balSpan = createElement("strong", `emoney-mini-chip-bal${bal < 0 ? " is-negative" : ""}`, formatYen(bal));

      chip.append(iconBox, name, balSpan);
      return chip;
    });

    chipsContainer.replaceChildren(...chips);
  }

  function openEmoneyDialog(emoney = null) {
    $("emoney-form").reset();
    $("emoney-id").value = emoney ? emoney.id : "";
    $("emoney-dialog-title").textContent = emoney ? "QR・電子マネーを編集" : "QR・電子マネーを追加";
    $("emoney-name").value = emoney ? emoney.name : "";
    $("emoney-initial-balance").value = emoney ? formatNumber(emoney.initialBalance) : "0";
    $("emoney-color").value = emoney ? emoney.color : "#e60012";
    $("emoney-icon").value = emoney ? emoney.icon : "qr";
    $("emoney-is-default").checked = emoney ? Boolean(emoney.isDefault) : (state.emoneys.length === 0);

    // カラープリセットのアクティブ状態更新
    const activeColor = (emoney ? emoney.color : "#e60012").toLowerCase();
    document.querySelectorAll("#emoney-color-presets .color-preset-chip").forEach((c) => {
      c.classList.toggle("is-active", (c.dataset.color || "").toLowerCase() === activeColor);
    });

    $("delete-emoney-btn").classList.toggle("is-hidden", !emoney);
    showDialog($("emoney-dialog"));
  }

  function saveEmoneyFromForm(event) {
    event.preventDefault();
    const name = $("emoney-name").value.trim();
    if (!name) {
      showToast("名称を入力してください。");
      $("emoney-name").focus();
      return;
    }

    const id = $("emoney-id").value;
    const existing = state.emoneys.find((e) => e.id === id);
    const isDefault = $("emoney-is-default").checked;

    // 初期選択にできるのは1つだけ
    if (isDefault) {
      state.emoneys.forEach((e) => {
        if (!existing || e.id !== existing.id) e.isDefault = false;
      });
    }

    const record = {
      id: existing ? existing.id : uid("emoney"),
      name: name.slice(0, 40),
      initialBalance: Core.normalizeAmount($("emoney-initial-balance").value),
      color: $("emoney-color").value || "#e60012",
      icon: EMONEY_ICONS[$("emoney-icon").value] ? $("emoney-icon").value : "qr",
      isDefault: isDefault,
      createdAt: existing ? existing.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (existing) {
      Object.assign(existing, record);
    } else {
      state.emoneys.push(record);
    }

    saveState();
    closeDialog($("emoney-dialog"));
    renderAll();
    if (selectedDetailEmoneyId) renderEmoneyDetail(selectedDetailEmoneyId);
    showToast(existing ? "QR・電子マネーを更新しました。" : "QR・電子マネーを追加しました。");
  }

  async function deleteCurrentEmoney() {
    const id = $("emoney-id").value;
    if (id) deleteEmoney(id);
  }

  async function deleteEmoney(id) {
    const em = state.emoneys.find((e) => e.id === id);
    if (!em) return;

    const txCount = (state.emoneyTransactions || []).filter((t) => t.emoneyId === id).length;
    const expCount = (state.expenses || []).filter((e) => e.paymentMethod === "QR・電子マネー" && e.emoneyId === id).length;

    const confirmed = await confirmAction(
      `「${em.name}」を削除しますか？`,
      `関連するチャージ・取引履歴（${txCount}件）も削除されます。支出データ（${expCount}件）は残りますが紐付けが解除されます。`,
      "削除する"
    );
    if (!confirmed) return;

    state.emoneys = state.emoneys.filter((e) => e.id !== id);
    state.emoneyTransactions = (state.emoneyTransactions || []).filter((t) => t.emoneyId !== id);
    (state.expenses || []).forEach((e) => {
      if (e.emoneyId === id) e.emoneyId = "";
    });

    saveState();
    closeDialog($("emoney-dialog"));
    closeDialog($("emoney-history-dialog"));
    renderAll();
    showToast(`「${em.name}」を削除しました。`);
  }

  function openChargeDialog(emoneyId, chargeId = "") {
    const em = (state.emoneys || []).find((e) => e.id === emoneyId) || state.emoneys[0];
    if (!em) {
      showToast("先にQR・電子マネーを登録してください。");
      return;
    }

    const charge = chargeId ? (state.emoneyTransactions || []).find((t) => t.id === chargeId) : null;

    $("charge-form").reset();
    $("charge-id").value = charge ? charge.id : "";
    $("charge-emoney-id").value = em.id;
    $("charge-dialog-title").textContent = charge ? "チャージを編集" : "チャージを登録";
    $("charge-target-service").textContent = em.name;
    $("charge-amount").value = charge ? formatNumber(charge.amount) : "";
    $("charge-date").value = charge ? charge.date : Core.todayKey();

    // チャージ元セレクト生成（現金・銀行口座・他 ＋ 登録カード一覧）
    const sourceOptions = [{ value: "cash", label: "現金・銀行口座・他" }];
    (state.cards || []).forEach((c) => {
      sourceOptions.push({ value: `card_${c.id}`, label: `クレジットカード: ${c.name}` });
    });
    fillSelect($("charge-source"), sourceOptions);
    $("charge-source").value = charge && charge.cardId ? `card_${charge.cardId}` : "cash";

    $("charge-memo").value = charge ? charge.memo || "" : "";
    $("delete-charge-btn").classList.toggle("is-hidden", !charge);

    showDialog($("charge-dialog"));
    window.setTimeout(() => $("charge-amount").focus(), 40);
  }

  function saveChargeFromForm(event) {
    event.preventDefault();
    const amount = Core.normalizeAmount($("charge-amount").value);
    const date = $("charge-date").value;
    const emoneyId = $("charge-emoney-id").value;
    const sourceVal = $("charge-source").value;
    const cardId = sourceVal.startsWith("card_") ? sourceVal.replace("card_", "") : "";

    if (amount <= 0) {
      showToast("1円以上の金額を入力してください。");
      $("charge-amount").focus();
      return;
    }
    if (!Core.parseDateKey(date)) {
      showToast("正しい日付を入力してください。");
      $("charge-date").focus();
      return;
    }

    const id = $("charge-id").value;
    const existing = (state.emoneyTransactions || []).find((t) => t.id === id);

    const record = {
      id: existing ? existing.id : uid("emoney_tx"),
      type: "charge",
      emoneyId: emoneyId,
      amount: amount,
      date: date,
      cardId: cardId,
      memo: $("charge-memo").value.trim().slice(0, 200),
      createdAt: existing ? existing.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (existing) {
      Object.assign(existing, record);
    } else {
      if (!state.emoneyTransactions) state.emoneyTransactions = [];
      state.emoneyTransactions.push(record);
    }

    saveState();
    closeDialog($("charge-dialog"));
    renderAll();
    if (selectedDetailEmoneyId === emoneyId) {
      renderEmoneyDetail(emoneyId);
    }
    showToast(existing ? "チャージを更新しました。" : "チャージを登録しました。");
  }

  async function deleteCurrentCharge() {
    const id = $("charge-id").value;
    if (id) deleteCharge(id);
  }

  async function deleteCharge(id) {
    const tx = (state.emoneyTransactions || []).find((t) => t.id === id);
    if (!tx) return;

    const confirmed = await confirmAction(
      "チャージ履歴を削除しますか？",
      `${formatDate(tx.date)}の${formatYen(tx.amount)}チャージを削除し、残高とカード請求を再計算します。`,
      "削除する"
    );
    if (!confirmed) return;

    state.emoneyTransactions = state.emoneyTransactions.filter((t) => t.id !== id);
    saveState();
    closeDialog($("charge-dialog"));
    renderAll();
    if (selectedDetailEmoneyId) {
      renderEmoneyDetail(selectedDetailEmoneyId);
    }
    showToast("チャージ履歴を削除しました。");
  }

  function openEmoneyAdjustDialog(emoneyId) {
    const em = (state.emoneys || []).find((e) => e.id === emoneyId);
    if (!em) return;

    const currentBal = getEmoneyBalance(em.id);
    $("emoney-adjust-form").reset();
    $("adjust-emoney-id").value = em.id;
    $("adjust-current-balance-display").textContent = formatYen(currentBal);
    $("adjust-target-balance").value = formatNumber(currentBal);
    $("adjust-date").value = Core.todayKey();
    $("adjust-memo").value = "";
    updateAdjustDiffPreview();

    showDialog($("emoney-adjust-dialog"));
  }

  function updateAdjustDiffPreview() {
    const emoneyId = $("adjust-emoney-id").value;
    const currentBal = getEmoneyBalance(emoneyId);
    const targetVal = $("adjust-target-balance").value;
    const targetBal = targetVal === "" ? currentBal : Core.normalizeAmount(targetVal);
    const diff = targetBal - currentBal;

    const previewEl = $("adjust-diff-preview");
    if (previewEl) {
      if (diff === 0) {
        previewEl.textContent = "±0円";
        previewEl.className = "adjust-diff-val";
      } else if (diff > 0) {
        previewEl.textContent = `+${formatYen(diff)}`;
        previewEl.className = "adjust-diff-val is-positive";
      } else {
        previewEl.textContent = `-${formatYen(Math.abs(diff))}`;
        previewEl.className = "adjust-diff-val is-negative";
      }
    }
  }

  function saveEmoneyAdjustFromForm(event) {
    event.preventDefault();
    const emoneyId = $("adjust-emoney-id").value;
    const currentBal = getEmoneyBalance(emoneyId);
    const targetBal = Core.normalizeAmount($("adjust-target-balance").value);
    const date = $("adjust-date").value;
    const diff = targetBal - currentBal;

    if (!Core.parseDateKey(date)) {
      showToast("正しい日付を入力してください。");
      return;
    }

    if (diff === 0) {
      showToast("残高に変更はありません。");
      closeDialog($("emoney-adjust-dialog"));
      return;
    }

    const record = {
      id: uid("emoney_tx"),
      type: "adjustment",
      emoneyId: emoneyId,
      diff: diff,
      targetBalance: targetBal,
      date: date,
      memo: $("adjust-memo").value.trim().slice(0, 200),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (!state.emoneyTransactions) state.emoneyTransactions = [];
    state.emoneyTransactions.push(record);

    saveState();
    closeDialog($("emoney-adjust-dialog"));
    renderAll();
    if (selectedDetailEmoneyId === emoneyId) {
      renderEmoneyDetail(emoneyId);
    }
    showToast(`残高を${formatYen(targetBal)}に調整しました。`);
  }

  async function deleteEmoneyTransaction(id) {
    const tx = (state.emoneyTransactions || []).find((t) => t.id === id);
    if (!tx) return;

    const isCancelled = tx.type === "cancelled_expense";
    const title = isCancelled ? "この取消履歴を削除しますか？" : "この残高調整を削除しますか？";
    const body = isCancelled
      ? "この取消ログを履歴一覧から完全に削除します。"
      : "削除すると残高が調整前の状態に再計算されます。";

    const confirmed = await confirmAction(title, body, "削除する");
    if (!confirmed) return;

    state.emoneyTransactions = state.emoneyTransactions.filter((t) => t.id !== id);
    saveState();
    renderAll();
    if (selectedDetailEmoneyId) {
      renderEmoneyDetail(selectedDetailEmoneyId);
    }
    showToast(isCancelled ? "取消履歴を削除しました。" : "残高調整を削除しました。");
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
    const effectiveCardBg = state.settings.cardBgColor || (getLuminance(state.settings.bgColor || "#ffffff") < 0.45 ? "#1e293b" : "#ffffff");
    const settingCardBgEl = $("setting-card-bg-color");
    if (settingCardBgEl) settingCardBgEl.value = effectiveCardBg;
    const settingCardBgValEl = $("setting-card-bg-color-val");
    if (settingCardBgValEl) settingCardBgValEl.textContent = effectiveCardBg.toUpperCase();
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
    renderSkinPalette();
    updatePresetButtons();
    applyThemeColors();
    applyThemeSkin();
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
    const defaultEmoney = (state.emoneys || []).find((e) => e.isDefault);
    const initialPaymentMethod = expense
      ? expense.paymentMethod
      : (defaultEmoney ? "QR・電子マネー" : "現金");

    $("expense-id").value = expense ? expense.id : "";
    $("expense-dialog-title").textContent = expense ? "支出を編集" : "支出を追加";
    $("expense-amount").value = expense ? formatNumber(expense.amount) : "";
    $("expense-date").value = expense ? expense.date : dateKey;
    $("expense-category").value = expense ? expense.category : "食費";
    $("expense-payment").value = initialPaymentMethod;
    $("expense-memo").value = expense ? expense.memo : "";
    $("expense-payment-date").value = expense ? expense.paymentDateOverride || "" : "";
    const includeWithdrawalInput = $("expense-include-withdrawal");
    if (includeWithdrawalInput) {
      includeWithdrawalInput.checked = expense ? (expense.includeInWithdrawal !== false) : true;
    }
    $("expense-amount-error").textContent = "";
    $("delete-expense-button").classList.toggle("is-hidden", !expense);
    refreshExpenseCardOptions(expense ? expense.cardId : "");
    refreshExpenseEmoneyOptions(expense ? expense.emoneyId : (defaultEmoney ? defaultEmoney.id : ""));
    updateExpensePaymentFields();

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

  function refreshExpenseEmoneyOptions(selectedId) {
    const options = [{ value: "", label: (state.emoneys || []).length ? "QR・電子マネーを選択" : "先にQR・電子マネーを登録してください" }];
    (state.emoneys || []).forEach((em) => options.push({ value: em.id, label: em.name }));
    fillSelect($("expense-emoney"), options);
    const emSelect = $("expense-emoney");
    if (emSelect) {
      emSelect.value = (state.emoneys || []).some((em) => em.id === selectedId)
        ? selectedId
        : ((state.emoneys || [])[0]?.id || "");
    }
  }

  function updateExpensePaymentFields() {
    const payment = $("expense-payment").value;
    const credit = payment === Core.CREDIT_PAYMENT;
    const emoney = payment === "QR・電子マネー";

    $("expense-card-field").classList.toggle("is-hidden", !credit);
    const emField = $("expense-emoney-field");
    if (emField) emField.classList.toggle("is-hidden", !emoney);

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
      let payName = expense.paymentMethod;
      if (expense.paymentMethod === "QR・電子マネー" && expense.emoneyId) {
        const em = (state.emoneys || []).find((e) => e.id === expense.emoneyId);
        if (em) payName = em.name;
      }
      dayRecords.push({
        type: "expense",
        title: expense.memo || expense.category,
        subTitle: `${expense.category}・${payName}`,
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
    const emoneyId = paymentMethod === "QR・電子マネー" ? $("expense-emoney").value : "";
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
    if (paymentMethod === "QR・電子マネー" && !(state.emoneys || []).some((em) => em.id === emoneyId)) {
      showToast("使用したQR・電子マネーを選択してください。先にQR・電子マネーの登録が必要です。");
      $("expense-emoney").focus();
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
      emoneyId,
      includeInWithdrawal,
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

    if (expense.paymentMethod === "QR・電子マネー" && expense.emoneyId) {
      if (!state.emoneyTransactions) state.emoneyTransactions = [];
      state.emoneyTransactions.push({
        id: uid("emoney_tx"),
        emoneyId: expense.emoneyId,
        type: "cancelled_expense",
        amount: Core.normalizeAmount(expense.amount),
        date: expense.date,
        category: expense.category || "その他",
        memo: expense.memo || "",
        createdAt: expense.createdAt || expense.date || new Date().toISOString(),
        deletedAt: new Date().toISOString(),
      });
    }

    state.expenses = state.expenses.filter((item) => item.id !== id);
    saveState();
    closeDialog($("expense-dialog"));
    renderAll();
    if (selectedDetailEmoneyId) {
      renderEmoneyDetail(selectedDetailEmoneyId);
    }
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
    const themeSelect = $("theme-select");
    if (themeSelect && themeSelect.value !== theme) {
      themeSelect.value = theme;
    }

    document.querySelectorAll(".mode-seg-btn").forEach((btn) => {
      const active = btn.dataset.modeVal === theme;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-checked", active ? "true" : "false");
    });

    applyThemeColors();
    applyThemeSkin();
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

  function shadeHexColor(hexColor, factor) {
    const match = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hexColor || "");
    if (!match) return hexColor || "#000000";
    let r = Number.parseInt(match[1], 16);
    let g = Number.parseInt(match[2], 16);
    let b = Number.parseInt(match[3], 16);
    if (factor < 0) {
      const p = 1 + factor;
      r = Math.round(r * p);
      g = Math.round(g * p);
      b = Math.round(b * p);
    } else {
      r = Math.round(r + (255 - r) * factor);
      g = Math.round(g + (255 - g) * factor);
      b = Math.round(b + (255 - b) * factor);
    }
    const clamp = (v) => Math.max(0, Math.min(255, v));
    return `#${((1 << 24) + (clamp(r) << 16) + (clamp(g) << 8) + clamp(b)).toString(16).slice(1)}`;
  }

  function generateLeopardSvg(themeColor, isDarkBg) {
    const coreColor = themeColor || "#bf8a56";
    const coreOpacity = isDarkBg ? 0.6 : 0.45;
    const spotColor = isDarkBg ? shadeHexColor(themeColor, 0.45) : shadeHexColor(themeColor, -0.7);
    const spotOpacity = isDarkBg ? 0.95 : 0.88;

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><g fill='${coreColor}' fill-opacity='${coreOpacity}'><path d='M22,24 c-7,7 -4,18 6,19 c10,1 15,-8 13,-17 c-2,-8 -12,-9 -19,-2 z'/><path d='M107,22 c-5,7 -2,16 8,16 c9,0 13,-10 9,-16 c-4,-7 -12,-7 -17,0 z'/><path d='M65,44 c-3,4 -1,9 4,9 c5,0 7,-5 5,-9 c-2,-4 -6,-4 -9,0 z'/><path d='M30,96 c-8,8 -5,20 7,21 c11,1 17,-9 14,-19 c-3,-9 -13,-10 -21,-2 z'/><path d='M118,88 c-6,7 -2,17 9,17 c10,0 14,-11 10,-17 c-4,-7 -13,-7 -19,0 z'/><path d='M78,128 c-5,6 -2,15 8,15 c9,0 13,-9 9,-15 c-4,-6 -12,-6 -17,0 z'/><path d='M143,48 c-3,4 -1,9 4,9 c5,0 7,-5 5,-9 c-2,-4 -6,-4 -9,0 z'/><path d='M72,-8 c-6,7 -2,16 8,16 c10,0 14,-10 10,-16 c-4,-7 -13,-7 -18,0 z'/><path d='M72,152 c-6,7 -2,16 8,16 c10,0 14,-10 10,-16 c-4,-7 -13,-7 -18,0 z'/><path d='M-8,60 c-6,7 -2,16 8,16 c10,0 14,-10 10,-16 c-4,-7 -13,-7 -18,0 z'/><path d='M152,60 c-6,7 -2,16 8,16 c10,0 14,-10 10,-16 c-4,-7 -13,-7 -18,0 z'/></g><g fill='${spotColor}' fill-opacity='${spotOpacity}'><path d='M15,22 c-4,6 -3,14 2,18 c3,2 5,1 5,-2 c-3,-4 -3,-11 2,-14 c3,-3 1,-6 -3,-5 c-3,1 -5,2 -6,3 z'/><path d='M25,17 c6,-3 13,-1 16,4 c2,3 0,5 -3,4 c-3,-3 -8,-4 -11,-2 c-3,2 -4,0 -3,-3 c1,-2 1,-3 1,-3 z'/><path d='M29,43 c7,1 14,-3 14,-10 c0,-3 -3,-4 -4,-2 c-2,4 -6,7 -10,6 c-3,-1 -4,1 -3,4 c1,1 2,2 3,2 z'/><path d='M44,19 c3,-1 6,2 5,5 c-1,3 -4,3 -6,1 c-2,-2 -1,-5 1,-6 z'/><path d='M103,19 c-5,6 -4,15 1,20 c3,3 6,1 5,-2 c-3,-4 -4,-11 0,-15 c3,-3 1,-6 -3,-5 c-1,0 -2,1 -3,2 z'/><path d='M112,15 c6,-3 13,0 15,5 c2,3 -1,4 -4,3 c-3,-3 -7,-4 -10,-1 c-3,2 -4,-1 -3,-4 c0,-1 1,-2 2,-3 z'/><path d='M118,41 c7,0 13,-4 11,-11 c-1,-3 -4,-3 -4,0 c0,4 -4,7 -8,7 c-3,0 -3,3 -1,4 c1,0 1,0 2,0 z'/><path d='M62,45 c-3,3 -2,8 1,11 c2,1 4,0 3,-2 c-2,-2 -2,-6 1,-7 c2,-2 1,-3 -2,-3 c-1,0 -2,0 -3,1 z'/><path d='M69,42 c5,-2 10,1 11,5 c1,2 -1,3 -3,2 c-2,-2 -5,-3 -8,-1 c-2,1 -3,-1 -2,-3 c0,-1 1,-2 2,-3 z'/><path d='M71,56 c4,0 7,-2 6,-5 c-1,-2 -3,-1 -3,1 c0,2 -2,3 -4,3 c-1,0 -1,1 0,1 z'/><path d='M25,95 c-5,6 -3,15 2,19 c3,2 6,1 5,-2 c-3,-4 -3,-11 1,-14 c3,-3 1,-6 -3,-5 c-2,0 -4,1 -5,2 z'/><path d='M37,90 c6,-3 13,-1 15,4 c2,3 0,5 -3,4 c-3,-3 -8,-3 -11,-1 c-3,2 -4,0 -3,-3 c1,-2 1,-3 2,-4 z'/><path d='M39,117 c8,1 15,-3 15,-11 c0,-3 -3,-4 -5,-2 c-2,4 -6,8 -10,7 c-3,-1 -4,2 -3,4 c1,1 2,2 3,2 z'/><path d='M113,87 c-4,6 -3,14 1,18 c3,3 6,0 5,-3 c-2,-4 -2,-9 1,-12 c3,-3 1,-5 -3,-5 c-2,0 -3,1 -4,2 z'/><path d='M123,82 c6,-3 12,0 14,5 c2,3 -1,4 -3,3 c-3,-2 -7,-3 -10,-1 c-3,2 -4,-1 -3,-4 z'/><path d='M125,108 c7,0 13,-4 13,-10 c0,-3 -3,-3 -4,-1 c-2,4 -5,7 -9,6 c-3,0 -3,3 -1,4 c0,1 1,1 1,1 z'/><path d='M74,129 c-4,5 -3,12 1,16 c3,2 5,0 4,-2 c-2,-3 -2,-8 1,-10 c3,-2 1,-5 -3,-5 c-1,0 -2,0 -3,1 z'/><path d='M83,125 c5,-2 11,0 12,4 c1,2 -1,3 -3,2 c-2,-2 -5,-2 -8,-1 c-2,1 -3,-1 -2,-3 z'/><path d='M85,148 c6,0 11,-3 11,-8 c0,-2 -2,-3 -3,-1 c-1,3 -4,5 -8,5 c-2,0 -2,2 -1,3 c0,1 1,1 1,1 z'/><path d='M140,48 c-3,4 -2,9 1,12 c2,1 4,0 3,-2 c-2,-2 -2,-6 1,-7 c2,-2 1,-3 -2,-3 c-1,0 -2,0 -3,1 z'/><path d='M147,45 c4,-2 9,1 10,4 c1,2 -1,3 -3,2 c-2,-2 -5,-2 -7,-1 c-2,1 -3,-1 -2,-3 z'/><path d='M149,58 c4,0 7,-2 6,-5 c-1,-2 -3,-1 -3,1 c0,2 -2,3 -4,3 c-1,0 -1,1 0,1 z'/><path d='M68,-11 c-4,5 -3,13 1,16 c3,2 5,0 4,-2 c-2,-3 -2,-8 1,-10 c3,-2 1,-5 -3,-5 c-1,0 -2,0 -3,1 z'/><path d='M68,149 c-4,5 -3,13 1,16 c3,2 5,0 4,-2 c-2,-3 -2,-8 1,-10 c3,-2 1,-5 -3,-5 c-1,0 -2,0 -3,1 z'/><path d='M78,-15 c5,-3 12,0 14,4 c2,3 -1,4 -3,3 c-3,-2 -6,-3 -9,-1 c-3,2 -4,-1 -3,-4 z'/><path d='M78,145 c5,-3 12,0 14,4 c2,3 -1,4 -3,3 c-3,-2 -6,-3 -9,-1 c-3,2 -4,-1 -3,-4 z'/><path d='M81,11 c6,1 11,-3 10,-8 c-1,-3 -4,-3 -4,0 c0,3 -4,5 -7,5 c-2,0 -2,2 -1,3 c1,0 1,0 2,0 z'/><path d='M81,171 c6,1 11,-3 10,-8 c-1,-3 -4,-3 -4,0 c0,3 -4,5 -7,5 c-2,0 -2,2 -1,3 c1,0 1,0 2,0 z'/><path d='M-12,61 c-4,5 -3,13 1,16 c3,2 5,0 4,-2 c-2,-3 -2,-8 1,-10 c3,-2 1,-5 -3,-5 c-1,0 -2,0 -3,1 z'/><path d='M148,61 c-4,5 -3,13 1,16 c3,2 5,0 4,-2 c-2,-3 -2,-8 1,-10 c3,-2 1,-5 -3,-5 c-1,0 -2,0 -3,1 z'/><path d='M-2,57 c5,-3 12,0 14,4 c2,3 -1,4 -3,3 c-3,-2 -6,-3 -9,-1 c-3,2 -4,-1 -3,-4 z'/><path d='M158,57 c5,-3 12,0 14,4 c2,3 -1,4 -3,3 c-3,-2 -6,-3 -9,-1 c-3,2 -4,-1 -3,-4 z'/><path d='M1,83 c6,1 11,-3 10,-8 c-1,-3 -4,-3 -4,0 c0,3 -4,5 -7,5 c-2,0 -2,2 -1,3 c1,0 1,0 2,0 z'/><path d='M161,83 c6,1 11,-3 10,-8 c-1,-3 -4,-3 -4,0 c0,3 -4,5 -7,5 c-2,0 -2,2 -1,3 c1,0 1,0 2,0 z'/><path d='M6,22 c3,-3 7,-1 7,3 c-1,4 -6,5 -8,3 c-2,-2 -1,-4 1,-6 z'/><path d='M166,22 c3,-3 7,-1 7,3 c-1,4 -6,5 -8,3 c-2,-2 -1,-4 1,-6 z'/><path d='M50,16 c3,-4 8,-1 7,4 c-1,4 -7,5 -9,3 c-2,-3 0,-5 2,-7 z'/><path d='M92,18 c4,-3 8,1 7,5 c-1,4 -7,4 -9,1 c-2,-3 0,-5 2,-6 z'/><path d='M146,16 c3,-3 7,0 6,4 c-1,4 -6,4 -8,2 c-2,-3 0,-4 2,-6 z'/><path d='M60,32 c3,-4 8,-1 8,3 c-1,4 -7,5 -9,3 c-2,-3 0,-4 1,-6 z'/><path d='M84,38 c4,-3 8,0 7,4 c-1,4 -6,5 -8,3 c-3,-2 -1,-5 1,-7 z'/><path d='M138,34 c3,-3 7,0 6,4 c-1,4 -6,5 -8,2 c-2,-3 0,-4 2,-6 z'/><path d='M18,54 c3,-4 8,-1 7,4 c-1,4 -7,5 -9,2 c-2,-3 0,-5 2,-6 z'/><path d='M36,60 c4,-3 8,0 7,4 c-1,4 -6,5 -8,3 c-2,-2 0,-5 1,-7 z'/><path d='M54,66 c3,-4 8,-1 8,3 c-1,4 -7,5 -9,2 c-2,-3 0,-4 1,-5 z'/><path d='M88,68 c4,-3 8,0 7,4 c-1,4 -6,5 -9,3 c-2,-2 0,-5 2,-7 z'/><path d='M110,62 c3,-3 7,0 6,4 c-1,4 -6,4 -8,2 c-2,-3 0,-4 2,-6 z'/><path d='M130,68 c4,-3 8,0 7,4 c-1,4 -6,5 -9,3 c-2,-2 0,-5 2,-7 z'/><path d='M8,98 c3,-3 7,0 6,4 c-1,4 -6,4 -8,2 c-2,-3 0,-4 2,-6 z'/><path d='M168,98 c3,-3 7,0 6,4 c-1,4 -6,4 -8,2 c-2,-3 0,-4 2,-6 z'/><path d='M20,126 c4,-3 8,0 7,4 c-1,4 -6,5 -8,3 c-3,-2 -1,-5 1,-7 z'/><path d='M62,102 c3,-4 8,-1 7,4 c-1,4 -7,5 -9,2 c-2,-3 0,-5 2,-6 z'/><path d='M80,108 c4,-3 8,0 7,4 c-1,4 -6,5 -8,3 c-2,-2 0,-5 1,-7 z'/><path d='M102,110 c3,-3 7,0 6,4 c-1,4 -6,4 -8,2 c-2,-3 0,-4 2,-6 z'/><path d='M146,112 c4,-3 8,0 7,4 c-1,4 -6,5 -8,3 c-3,-2 -1,-5 1,-7 z'/><path d='M44,142 c4,-3 8,1 7,5 c-1,4 -7,4 -9,1 c-2,-3 0,-5 2,-6 z'/><path d='M64,152 c3,-3 7,0 6,4 c-1,4 -6,4 -8,2 c-2,-3 0,-4 2,-6 z'/><path d='M112,144 c4,-3 8,0 7,4 c-1,4 -6,5 -8,3 c-3,-2 -1,-5 1,-7 z'/><path d='M136,138 c3,-3 7,0 6,4 c-1,4 -6,4 -8,2 c-2,-3 0,-4 2,-6 z'/><path d='M154,154 c3,-3 7,0 6,4 c-1,4 -6,4 -8,2 c-2,-3 0,-4 2,-6 z'/><path d='M154,-6 c3,-3 7,0 6,4 c-1,4 -6,4 -8,2 c-2,-3 0,-4 2,-6 z'/><path d='M24,2 c3,-3 7,0 6,4 c-1,4 -6,4 -8,2 c-2,-3 0,-4 2,-6 z'/><path d='M24,162 c3,-3 7,0 6,4 c-1,4 -6,4 -8,2 c-2,-3 0,-4 2,-6 z'/></g></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }

  function generateStarrySvg(themeColor, isDarkBg) {
    const starFill = isDarkBg ? "#ffffff" : shadeHexColor(themeColor, -0.6);
    const starOpacity = isDarkBg ? 0.92 : 0.38;
    const sparkOpacity = isDarkBg ? 0.8 : 0.28;

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64' fill='none'><path d='M16 8 Q16 16 24 16 Q16 16 16 24 Q16 16 8 16 Q16 16 16 8 Z' fill='${starFill}' fill-opacity='${starOpacity}'/><path d='M48 40 Q48 46 54 46 Q48 46 48 52 Q48 46 42 46 Q48 46 48 40 Z' fill='${starFill}' fill-opacity='${starOpacity}'/><circle cx='52' cy='12' r='1.8' fill='${starFill}' fill-opacity='${starOpacity}'/><circle cx='30' cy='34' r='1.5' fill='${starFill}' fill-opacity='${starOpacity}'/><circle cx='8' cy='52' r='1.8' fill='${starFill}' fill-opacity='${starOpacity}'/><circle cx='40' cy='56' r='1.2' fill='${starFill}' fill-opacity='${sparkOpacity}'/><circle cx='34' cy='10' r='1.2' fill='${starFill}' fill-opacity='${sparkOpacity}'/><circle cx='58' cy='30' r='1.2' fill='${starFill}' fill-opacity='${sparkOpacity}'/><path d='M30 50 L34 50 M32 48 L32 52' stroke='${starFill}' stroke-opacity='${sparkOpacity}' stroke-width='1.2'/><path d='M12 32 L16 32 M14 30 L14 34' stroke='${starFill}' stroke-opacity='${sparkOpacity}' stroke-width='1.2'/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }

  function getThemeCode() {
    const c1 = (state.settings.themeColor1 || "#007a78").toUpperCase();
    const bg = (state.settings.bgColor || "#ffffff").toUpperCase();
    const isDarkBg = getLuminance(bg) < 0.45;
    const defaultCard = isDarkBg ? "#1E293B" : "#FFFFFF";
    const card = (state.settings.cardBgColor || defaultCard).toUpperCase();
    const border = (state.settings.borderColor || "#e2e8f0").toUpperCase();
    const gauge = (state.settings.gaugeColor || "#34d399").toUpperCase();
    const skin = state.settings.skin || "none";
    if (border === "#E2E8F0" && (card === defaultCard || card === "#FFFFFF" || card === "#1E293B")) {
      return `${c1}_${bg}_${gauge}:${skin}`;
    }
    if (card === defaultCard || card === "#FFFFFF" || card === "#1E293B") {
      return `${c1}_${bg}_${border}_${gauge}:${skin}`;
    }
    return `${c1}_${bg}_${card}_${border}_${gauge}:${skin}`;
  }

  function applyThemeColors() {
    const color1 = state.settings.themeColor1 || "#007a78";
    const bgColor = state.settings.bgColor || "#ffffff";
    const isDarkBg = getLuminance(bgColor) < 0.45;
    const effectiveCardBg = state.settings.cardBgColor || (isDarkBg ? "#1e293b" : "#ffffff");
    const isDarkCard = getLuminance(effectiveCardBg) < 0.48;
    const borderColor = state.settings.borderColor || (isDarkCard ? "#334155" : "#e2e8f0");
    const gaugeColor = state.settings.gaugeColor || "#34d399";
    const usageColor = state.settings.usageColor || "#0284c7";

    const cardTextColor = isDarkCard ? "#f8fafc" : "#1e293b";
    const cardTextMuted = isDarkCard ? "#94a3b8" : "#64748b";
    const pageTextColor = isDarkBg ? "#f8fafc" : "#1e293b";
    const pageTextMuted = isDarkBg ? "#94a3b8" : "#64748b";

    document.documentElement.style.setProperty("--theme-color-1", color1);
    document.documentElement.style.setProperty("--theme-color-2", color1);
    document.documentElement.style.setProperty("--accent", color1);
    document.documentElement.style.setProperty("--bg-color", bgColor);
    document.documentElement.style.setProperty("--border-color", borderColor);
    document.documentElement.style.setProperty("--gauge-color", gaugeColor);
    document.documentElement.style.setProperty("--usage-color", usageColor);
    document.documentElement.style.setProperty("--usage-soft", colorWithAlpha(usageColor, 0.15));

    // Dynamic surface and text colors (high contrast guarantee)
    document.documentElement.style.setProperty("--surface", effectiveCardBg);
    document.documentElement.style.setProperty("--surface-soft", isDarkCard ? "color-mix(in srgb, var(--surface) 88%, #ffffff)" : "color-mix(in srgb, var(--surface) 94%, #000000)");
    document.documentElement.style.setProperty("--surface-muted", isDarkCard ? "color-mix(in srgb, var(--surface) 80%, #ffffff)" : "color-mix(in srgb, var(--surface) 88%, #000000)");
    document.documentElement.style.setProperty("--text", cardTextColor);
    document.documentElement.style.setProperty("--text-muted", cardTextMuted);
    document.documentElement.style.setProperty("--page-text", pageTextColor);
    document.documentElement.style.setProperty("--page-text-muted", pageTextMuted);

    if (document.documentElement && document.documentElement.dataset) {
      document.documentElement.dataset.darkBg = isDarkBg ? "true" : "false";
    }
    if (document.body && document.body.dataset) {
      document.body.dataset.darkBg = isDarkBg ? "true" : "false";
    }

    try {
      const leopardPattern = generateLeopardSvg(color1, isDarkBg);
      const starryPattern = generateStarrySvg(color1, isDarkBg);
      document.documentElement.style.setProperty("--leopard-pattern", leopardPattern);
      document.documentElement.style.setProperty("--starry-pattern", starryPattern);
    } catch (_e) {}

    if (isDarkBg || isDarkCard) {
      document.documentElement.style.setProperty("--accent-dark", "color-mix(in srgb, var(--theme-color-1, #34d399) 70%, #ffffff)");
    } else {
      document.documentElement.style.removeProperty("--accent-dark");
    }

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", bgColor);
    }

    const val1 = $("theme-color-1-val");
    if (val1) val1.textContent = color1.toUpperCase();

    const input1 = $("theme-color-1");
    if (input1 && input1.value.toLowerCase() !== color1.toLowerCase()) input1.value = color1;

    const bgInput = $("setting-bg-color");
    const bgVal = $("setting-bg-color-val");
    if (bgInput && bgInput.value.toLowerCase() !== bgColor.toLowerCase()) bgInput.value = bgColor;
    if (bgVal) bgVal.textContent = bgColor.toUpperCase();

    const cardBgInput = $("setting-card-bg-color");
    const cardBgVal = $("setting-card-bg-color-val");
    if (cardBgInput && cardBgInput.value.toLowerCase() !== effectiveCardBg.toLowerCase()) cardBgInput.value = effectiveCardBg;
    if (cardBgVal) cardBgVal.textContent = effectiveCardBg.toUpperCase();

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

    // 細かく設定カード内の色見本サークル更新
    const cCircle1 = $("theme-color-1-circle");
    if (cCircle1) cCircle1.style.backgroundColor = color1;
    const cCircleBg = $("setting-bg-color-circle");
    if (cCircleBg) cCircleBg.style.backgroundColor = bgColor;
    const cCircleCardBg = $("setting-card-bg-color-circle");
    if (cCircleCardBg) cCircleCardBg.style.backgroundColor = effectiveCardBg;
    const cCircleBorder = $("setting-border-color-circle");
    if (cCircleBorder) cCircleBorder.style.backgroundColor = borderColor;
    const cCircleGauge = $("setting-gauge-color-circle");
    if (cCircleGauge) cCircleGauge.style.backgroundColor = gaugeColor;

    // 見本スマホ画面（リアルタイムライブプレビュー）の反映
    const mockup = $("theme-phone-mockup");
    if (mockup) {
      mockup.style.backgroundColor = bgColor;
      mockup.style.color = pageTextColor;
      mockup.style.borderColor = "#1c1d1f";

      const timeEl = mockup.querySelector(".phone-time");
      if (timeEl) timeEl.style.color = pageTextColor;
      const sigEl = mockup.querySelector(".phone-signal");
      if (sigEl) sigEl.style.color = pageTextColor;
      const titleEl = mockup.querySelector(".mini-header-title");
      if (titleEl) titleEl.style.color = pageTextColor;

      // 見本スマホ内の各カード（常に不透明・背景連動）
      const miniCards = [
        $("phone-preview-summary"),
        $("phone-preview-gauge-card"),
        $("phone-preview-advisor"),
        $("phone-preview-calendar"),
      ];
      miniCards.forEach((cardEl) => {
        if (cardEl) {
          cardEl.style.borderColor = borderColor;
          cardEl.style.backgroundColor = effectiveCardBg;
          cardEl.style.color = cardTextColor;
        }
      });

      const miniRemaining = $("phone-preview-remaining");
      if (miniRemaining) miniRemaining.style.color = color1;

      const miniKicker = mockup.querySelector(".mini-summary-kicker");
      if (miniKicker) miniKicker.style.color = cardTextMuted;

      const miniCircleBtn = mockup.querySelector(".mini-summary-circle-btn");
      if (miniCircleBtn) {
        miniCircleBtn.style.color = cardTextMuted;
        miniCircleBtn.style.backgroundColor = isDarkCard ? "rgba(255,255,255,0.1)" : "#f1f5f9";
        miniCircleBtn.style.borderColor = borderColor;
      }

      const miniSpent = $("phone-preview-spent");
      if (miniSpent) miniSpent.style.color = cardTextColor;

      const miniSub = mockup.querySelector(".mini-summary-sub");
      if (miniSub) {
        miniSub.style.color = cardTextMuted;
        miniSub.style.borderTopColor = borderColor;
      }

      const miniGauge = $("phone-preview-gauge");
      if (miniGauge) {
        miniGauge.style.background = gaugeColor;
        miniGauge.style.width = "42%";
      }

      const miniGaugeTrack = mockup.querySelector(".phone-mini-gauge-track");
      if (miniGaugeTrack) {
        miniGaugeTrack.style.backgroundColor = isDarkCard ? "rgba(255, 255, 255, 0.15)" : "#e2e8f0";
      }

      const miniGaugePercent = $("phone-preview-percent");
      if (miniGaugePercent) {
        miniGaugePercent.textContent = "42%使用";
        miniGaugePercent.style.color = cardTextMuted;
      }

      const miniAdvisorText = mockup.querySelector(".mini-advisor-text");
      if (miniAdvisorText) miniAdvisorText.style.color = cardTextColor;

      const miniAdvisorArrow = mockup.querySelector(".mini-advisor-arrow");
      if (miniAdvisorArrow) miniAdvisorArrow.style.color = cardTextMuted;

      mockup.querySelectorAll(".phone-mini-weekdays span").forEach((el) => {
        if (!el.classList.contains("mini-sun") && !el.classList.contains("mini-sat")) {
          el.style.color = cardTextMuted;
        }
      });

      mockup.querySelectorAll(".phone-mini-days span:not(.mini-today)").forEach((el) => {
        el.style.color = cardTextColor;
      });

      const miniToday = $("phone-preview-today");
      if (miniToday) {
        miniToday.style.backgroundColor = color1;
        miniToday.style.color = "#ffffff";
      }

      const miniFab = $("phone-preview-fab");
      if (miniFab) {
        miniFab.style.backgroundColor = color1;
        miniFab.style.color = "#ffffff";
      }

      const miniNav = $("phone-preview-nav");
      if (miniNav) {
        miniNav.style.borderColor = borderColor;
        miniNav.style.backgroundColor = effectiveCardBg;
      }

      mockup.querySelectorAll(".mini-nav-item:not(.is-active)").forEach((el) => {
        el.style.color = cardTextMuted;
      });

      const miniNavActive = $("phone-preview-nav-active");
      if (miniNavActive) miniNavActive.style.color = color1;

      const modeUsageTab = $("phone-mode-usage");
      if (modeUsageTab) {
        modeUsageTab.style.backgroundColor = color1;
        modeUsageTab.style.color = "#ffffff";
      }
    }

    const themeCodeInput = $("theme-code-input");
    if (themeCodeInput && document.activeElement !== themeCodeInput) {
      themeCodeInput.value = getThemeCode();
    }

    updatePresetButtons();
    updateThemeComboBadge();
  }

  function updateThemeComboBadge() {
    const label = $("theme-combo-label");
    const dot = $("theme-combo-dot");
    if (!label) return;

    const c1 = (state.settings.themeColor1 || "").toLowerCase();
    const gauge = (state.settings.gaugeColor || "").toLowerCase();

    let colorName = "カスタム";
    const matchedPreset = THEME_PRESETS.find(
      (p) =>
        p.themeColor1?.toLowerCase() === c1 &&
        p.gaugeColor?.toLowerCase() === gauge
    );
    if (matchedPreset) {
      colorName = matchedPreset.name;
    }

    const currentSkin = state.settings.skin || "none";
    const skinObj = SKIN_PRESETS.find((s) => s.id === currentSkin);
    const skinName = skinObj ? skinObj.name : "なし";

    label.textContent = `${colorName} × ${skinName}`;
    if (dot) {
      dot.style.background = state.settings.themeColor1 || "#007a78";
    }
  }

  function updateSkinTiles() {
    const currentSkin = state.settings.skin || "none";
    document.querySelectorAll(".skin-tile-item").forEach((btn) => {
      const active = btn.dataset.skinId === currentSkin;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-checked", active ? "true" : "false");
    });
  }

  function applyThemeSkin() {
    const skin = state.settings.skin || "none";
    if (document.documentElement) {
      document.documentElement.setAttribute("data-skin", skin);
      if (document.documentElement.dataset) document.documentElement.dataset.skin = skin;
    }
    if (document.body) {
      document.body.setAttribute("data-skin", skin);
      if (document.body.dataset) document.body.dataset.skin = skin;
    }
    const appContainer = document.querySelector(".app-container");
    if (appContainer) {
      appContainer.setAttribute("data-skin", skin);
      if (appContainer.dataset) appContainer.dataset.skin = skin;
    }

    const mockup = $("theme-phone-mockup");
    if (mockup) {
      mockup.setAttribute("data-skin", skin);
      if (mockup.dataset) mockup.dataset.skin = skin;
    }

    updateSkinTiles();
    updateThemeComboBadge();
  }

  function renderSkinPalette() {
    const grid = $("skin-palette-grid");
    if (!grid) return;
    grid.innerHTML = "";

    SKIN_PRESETS.forEach((skin) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "skin-tile-item";
      button.dataset.skinId = skin.id;
      button.setAttribute("role", "radio");
      button.setAttribute("aria-label", skin.name);

      const checkBadge = document.createElement("span");
      checkBadge.className = "skin-check-badge";
      checkBadge.textContent = "✓";

      const preview = document.createElement("div");
      preview.className = "skin-tile-preview";

      if (skin.id === "none") {
        preview.classList.add("skin-preview-none");
        preview.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><line x1="5.6" y1="5.6" x2="18.4" y2="18.4"/></svg>`;
      } else {
        const thumb = document.createElement("div");
        thumb.className = `skin-preview-${skin.id}`;
        preview.appendChild(thumb);
      }

      const name = document.createElement("span");
      name.className = "skin-tile-name";
      name.textContent = skin.name;

      button.append(checkBadge, preview, name);

      button.addEventListener("click", () => {
        state.settings.skin = skin.id;
        saveState();
        applyThemeSkin();
        const codeInput = $("theme-code-input");
        if (codeInput && document.activeElement !== codeInput) {
          codeInput.value = getThemeCode();
        }
        showToast(`壁紙「${skin.name}」を適用しました。`);
      });

      grid.appendChild(button);
    });

    updateSkinTiles();
  }

  function updatePresetButtons() {
    const c1 = (state.settings.themeColor1 || "").toLowerCase();
    const gauge = (state.settings.gaugeColor || "").toLowerCase();

    let matchedAny = false;
    document.querySelectorAll(".preset-button").forEach((button) => {
      const match =
        button.dataset.themeColor1?.toLowerCase() === c1 &&
        button.dataset.gaugeColor?.toLowerCase() === gauge;
      button.classList.toggle("is-active", Boolean(match));
      if (match) matchedAny = true;
    });

    const customBtn = $("preset-custom-btn");
    if (customBtn) {
      customBtn.classList.toggle("is-active", !matchedAny);
    }
  }

  function renderPresetPalette() {
    const grid = $("preset-palette-grid");
    if (!grid) return;
    grid.innerHTML = "";

    THEME_PRESETS.forEach((preset) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "theme-swatch-item preset-button";
      button.dataset.presetId = preset.id;
      button.dataset.themeColor1 = preset.themeColor1;
      button.dataset.bgColor = preset.bgColor;
      button.dataset.cardBgColor = preset.cardBgColor || "";
      button.dataset.borderColor = preset.borderColor;
      button.dataset.gaugeColor = preset.gaugeColor;
      button.dataset.usageColor = preset.usageColor;
      button.dataset.theme = preset.theme || "auto";

      const circle = document.createElement("div");
      circle.className = "swatch-circle";
      circle.style.background = `linear-gradient(135deg, ${preset.themeColor1} 50%, ${preset.themeColor2 || preset.gaugeColor} 50%)`;

      const check = document.createElement("span");
      check.className = "swatch-check";
      check.textContent = "✓";
      circle.appendChild(check);

      const name = document.createElement("span");
      name.className = "swatch-name";
      name.textContent = preset.name;

      button.append(circle, name);
      button.addEventListener("click", () => {
        state.settings.themeColor1 = preset.themeColor1;
        state.settings.themeColor2 = preset.themeColor1;
        state.settings.bgColor = preset.bgColor;
        state.settings.cardBgColor = preset.cardBgColor || null;
        state.settings.borderColor = preset.borderColor;
        state.settings.gaugeColor = preset.gaugeColor;
        state.settings.usageColor = preset.usageColor;
        if (preset.theme) state.settings.theme = preset.theme;
        saveState();
        applyTheme();
        renderCalendar();
        showToast(`テーマ「${preset.name}」を適用しました。`);
      });
      grid.append(button);
    });

    // カスタム（+）ボタン
    const customBtn = document.createElement("button");
    customBtn.type = "button";
    customBtn.className = "theme-swatch-item is-custom";
    customBtn.id = "preset-custom-btn";

    const customCircle = document.createElement("div");
    customCircle.className = "swatch-circle swatch-custom-circle";
    const customPlus = document.createElement("span");
    customPlus.className = "swatch-plus";
    customPlus.textContent = "+";
    customCircle.appendChild(customPlus);

    const customName = document.createElement("span");
    customName.className = "swatch-name";
    customName.textContent = "カスタム";

    customBtn.append(customCircle, customName);
    customBtn.addEventListener("click", () => {
      const colorInput = $("theme-color-1");
      if (colorInput) colorInput.click();
    });
    grid.append(customBtn);

    updatePresetButtons();
  }

  function setupHomeWidgetsDragAndDrop() {
    const container = $("home-widgets-container");
    if (!container) return;

    let longPressTimer = null;
    let draggedBlock = null;
    let activeMergeTarget = null;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentDeltaY = 0;
    let initialOrderIds = [];
    let lastVibratedSnapTarget = null;
    const LONG_PRESS_MS = 420;
    const MOVE_CANCEL_THRESHOLD = 8;

    const getTopLevelBlocks = () =>
      Array.from(container.children).filter((el) => el.classList && el.classList.contains("home-widget-block"));

    const getVisibleTopLevelBlocks = () =>
      getTopLevelBlocks().filter((el) => !el.classList.contains("is-hidden"));

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

    const startDrag = (block) => {
      isDragging = true;
      activeMergeTarget = null;
      initialOrderIds = getTopLevelBlocks().map((el) => el.dataset.widget);
      container.classList.add("is-dragging-active");
      block.classList.remove("is-drag-ready");
      block.classList.add("is-dragging");
      block.style.transform = "translate3d(0, 0, 0) scale(1.04)";
      document.body.classList.add("is-widget-dragging");
      document.documentElement.classList.add("is-widget-dragging");

      if (window.getSelection) {
        window.getSelection().removeAllRanges();
      }

      if (navigator.vibrate) {
        try { navigator.vibrate(45); } catch (_) {}
      }
    };

    const animateSiblingsFLIP = (action) => {
      const siblings = getVisibleTopLevelBlocks().filter((el) => el !== draggedBlock);
      const firstPositions = new Map();
      siblings.forEach((el) => {
        firstPositions.set(el, el.getBoundingClientRect().top);
      });

      action();

      siblings.forEach((el) => {
        const firstTop = firstPositions.get(el);
        const lastTop = el.getBoundingClientRect().top;
        const deltaY = firstTop - lastTop;
        if (deltaY !== 0) {
          el.style.transform = `translate3d(0, ${deltaY}px, 0)`;
          el.style.transition = "none";
          requestAnimationFrame(() => {
            el.classList.add("is-animating");
            el.style.transform = "translate3d(0, 0, 0)";
            el.style.transition = "transform 0.22s cubic-bezier(0.2, 0.9, 0.3, 1)";
            setTimeout(() => {
              el.classList.remove("is-animating");
              el.style.transform = "";
              el.style.transition = "";
            }, 230);
          });
        }
      });
    };

    const handleStart = (target, clientX, clientY) => {
      const formControl = target.closest("input, select, textarea, a");
      if (formControl) return false;

      let block = target.closest(".home-widget-block");
      if (!block) return false;

      // 結合カード内の子ウィジェットをタップした場合は、結合カード全体をドラッグ対象にする
      if (block.parentElement && block.parentElement.classList.contains("home-widget-merged-card")) {
        block = block.parentElement;
      }
      if (block.parentElement !== container || block.classList.contains("is-hidden")) return false;

      draggedBlock = block;
      startX = clientX;
      startY = clientY;
      activeMergeTarget = null;
      lastVibratedSnapTarget = null;

      block.classList.add("is-drag-ready");

      longPressTimer = setTimeout(() => {
        startDrag(block);
      }, LONG_PRESS_MS);

      return true;
    };

    const handleMove = (clientX, clientY, preventDefaultFn) => {
      if (!draggedBlock) return;

      const dx = Math.abs(clientX - startX);
      const dy = Math.abs(clientY - startY);

      if (!isDragging) {
        if (dx > MOVE_CANCEL_THRESHOLD || dy > MOVE_CANCEL_THRESHOLD) {
          clearLongPress();
        }
        return;
      }

      if (preventDefaultFn) preventDefaultFn();

      if (window.getSelection) {
        window.getSelection().removeAllRanges();
      }

      currentDeltaY = clientY - startY;
      draggedBlock.style.transform = `translate3d(0, ${currentDeltaY}px, 0) scale(1.04)`;

      const draggedRect = draggedBlock.getBoundingClientRect();
      const draggedCenterY = draggedRect.top + draggedRect.height / 2;

      const siblings = getVisibleTopLevelBlocks().filter((el) => el !== draggedBlock);

      let foundMergeTarget = null;

      for (const sib of siblings) {
        const sibRect = sib.getBoundingClientRect();
        const sibCenterY = sibRect.top + sibRect.height / 2;
        const distanceToCenter = Math.abs(draggedCenterY - sibCenterY);

        // 相手の中心付近に重なったときは「1つの枠に結合」ゾーン
        const mergeZone = Math.min(65, sibRect.height * 0.42);
        if (distanceToCenter < mergeZone) {
          foundMergeTarget = sib;
          sib.classList.add("is-snap-active");

          if (lastVibratedSnapTarget !== sib) {
            lastVibratedSnapTarget = sib;
            if (navigator.vibrate) {
              try { navigator.vibrate(22); } catch (_) {}
            }
          }
        } else {
          sib.classList.remove("is-snap-active");
        }
      }

      activeMergeTarget = foundMergeTarget;
      if (!activeMergeTarget) {
        lastVibratedSnapTarget = null;
      }

      // 結合ゾーンにいない時（上下にしっかり抜けた時）のみ、位置の滑らかな入れ替え（FLIP）を実行
      if (!activeMergeTarget) {
        for (const sib of siblings) {
          const sibRect = sib.getBoundingClientRect();
          const sibCenterY = sibRect.top + sibRect.height / 2;
          const isSibAbove = sib.compareDocumentPosition ? Boolean(sib.compareDocumentPosition(draggedBlock) & 4) : false;

          const swapThreshold = Math.min(48, sibRect.height * 0.48);
          if (isSibAbove && draggedCenterY < sibCenterY - swapThreshold) {
            animateSiblingsFLIP(() => {
              container.insertBefore(draggedBlock, sib);
            });
            startY = clientY;
            currentDeltaY = 0;
            draggedBlock.style.transform = `translate3d(0, 0, 0) scale(1.04)`;
            if (navigator.vibrate) {
              try { navigator.vibrate(28); } catch (_) {}
            }
            break;
          } else if (!isSibAbove && draggedCenterY > sibCenterY + swapThreshold) {
            animateSiblingsFLIP(() => {
              container.insertBefore(draggedBlock, sib.nextSibling);
            });
            startY = clientY;
            currentDeltaY = 0;
            draggedBlock.style.transform = `translate3d(0, 0, 0) scale(1.04)`;
            if (navigator.vibrate) {
              try { navigator.vibrate(28); } catch (_) {}
            }
            break;
          }
        }
      }
    };

    const handleEnd = () => {
      clearLongPress();
      container.classList.remove("is-dragging-active");
      document.body.classList.remove("is-widget-dragging");
      document.documentElement.classList.remove("is-widget-dragging");

      if (!isDragging || !draggedBlock) {
        isDragging = false;
        draggedBlock = null;
        activeMergeTarget = null;
        lastVibratedSnapTarget = null;
        return;
      }

      const finishingBlock = draggedBlock;
      const targetToMerge = activeMergeTarget;
      isDragging = false;
      draggedBlock = null;
      activeMergeTarget = null;
      lastVibratedSnapTarget = null;

      // ドラッグ終了直後の意図しないクリック発火を防止
      const preventClickAfterDrag = (e) => {
        e.stopPropagation();
        e.preventDefault();
        window.removeEventListener("click", preventClickAfterDrag, true);
      };
      window.addEventListener("click", preventClickAfterDrag, true);
      setTimeout(() => window.removeEventListener("click", preventClickAfterDrag, true), 150);

      finishingBlock.classList.remove("is-dragging");
      finishingBlock.style.transform = "";
      finishingBlock.classList.add("is-dock-bounce");
      setTimeout(() => {
        finishingBlock.classList.remove("is-dock-bounce");
      }, 350);

      getTopLevelBlocks().forEach((el) => {
        el.classList.remove("is-snap-active", "snap-top", "snap-bottom", "is-drag-target", "is-drag-ready", "is-animating");
        el.style.transform = "";
        el.style.transition = "";
      });

      const currentWidgets = state.settings.homeWidgets || defaultHomeWidgets();

      if (targetToMerge && targetToMerge !== finishingBlock) {
        // === 2つ（またはそれ以上）の枠を1つの枠に結合する ===
        const draggedIds = (finishingBlock.dataset.widget || "").split("+").filter(Boolean);
        const targetIds = (targetToMerge.dataset.widget || "").split("+").filter(Boolean);

        if (draggedIds.length > 0 && targetIds.length > 0) {
          // グループIDの割り当て（既存のgroupIdがあれば引き継ぐ、なければ新規生成）
          const existingGroup = currentWidgets.find((w) => (targetIds.includes(w.id) || draggedIds.includes(w.id)) && w.groupId);
          const groupId = existingGroup?.groupId || `group_${Date.now()}`;

          // 全対象ウィジェットに同一のgroupIdを設定
          const combinedIds = [...targetIds, ...draggedIds];
          currentWidgets.forEach((w) => {
            if (combinedIds.includes(w.id)) {
              w.groupId = groupId;
            }
          });

          // targetIdsの直後にdraggedIdsが連続するように配列を並び替え（3個以上でもすべて統合）
          const reordered = [];
          const placedIds = new Set();

          currentWidgets.forEach((w) => {
            if (placedIds.has(w.id)) return;
            if (targetIds.includes(w.id)) {
              targetIds.forEach((tid) => {
                const tw = currentWidgets.find((x) => x.id === tid);
                if (tw && !placedIds.has(tw.id)) {
                  reordered.push(tw);
                  placedIds.add(tw.id);
                }
              });
              draggedIds.forEach((did) => {
                const dw = currentWidgets.find((x) => x.id === did);
                if (dw && !placedIds.has(dw.id)) {
                  reordered.push(dw);
                  placedIds.add(dw.id);
                }
              });
            } else if (!draggedIds.includes(w.id)) {
              reordered.push(w);
              placedIds.add(w.id);
            }
          });

          currentWidgets.forEach((w) => {
            if (!placedIds.has(w.id)) {
              reordered.push(w);
              placedIds.add(w.id);
            }
          });

          state.settings.homeWidgets = reordered;
          saveState();
          renderHomeWidgets();
          renderHomeWidgetsManageList("settings-widgets-manage-list");
          renderHomeWidgetsManageList("home-widgets-manage-list");

          if (navigator.vibrate) {
            try { navigator.vibrate([30, 40, 30]); } catch (_) {}
          }
          showToast("✨ 枠同士を1つに結合しました！");
          return;
        }
      }

      // 通常の並び替え（結合ドロップでない場合）
      const topBlocks = getTopLevelBlocks();
      const flattenedIds = [];
      topBlocks.forEach((b) => {
        const bw = b.dataset.widget || "";
        bw.split("+").forEach((id) => {
          if (id && !flattenedIds.includes(id)) {
            flattenedIds.push(id);
          }
        });
      });

      const reordered = [];
      flattenedIds.forEach((id) => {
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
      showToast("ウィジェットの並び順を更新しました。");
    };

    // タッチイベント（スマホ実機向け）
    container.addEventListener("touchstart", (e) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      handleStart(e.target, touch.clientX, touch.clientY);
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (!draggedBlock) return;
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY, () => {
        if (e.cancelable) e.preventDefault();
      });
    }, { passive: false });

    window.addEventListener("touchend", handleEnd, { passive: true });
    window.addEventListener("touchcancel", handleEnd, { passive: true });

    // ポインターイベント（PC・マウス向け）
    container.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return;
      if (e.button !== 0) return;
      handleStart(e.target, e.clientX, e.clientY);
    });

    window.addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch") return;
      handleMove(e.clientX, e.clientY, () => {
        if (e.cancelable) e.preventDefault();
      });
    });

    window.addEventListener("pointerup", (e) => {
      if (e.pointerType === "touch") return;
      handleEnd();
    });

    window.addEventListener("pointercancel", (e) => {
      if (e.pointerType === "touch") return;
      handleEnd();
    });

    container.addEventListener("contextmenu", (e) => {
      if (isDragging || draggedBlock) {
        e.preventDefault();
      }
    });
  }

  function setupFloatingThemePreviewDrag() {
    const preview = $("theme-floating-preview");
    if (!preview) return;

    const header = $("floating-preview-header") || preview;
    const minBtn = $("floating-preview-min-btn");

    if (minBtn) {
      minBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isCollapsed = preview.classList.toggle("is-collapsed");
        const icon = minBtn.querySelector(".min-icon");
        if (icon) icon.textContent = isCollapsed ? "+" : "−";
        minBtn.title = isCollapsed ? "展開する" : "最小化";
      });
    }

    let isDragging = false;
    let startPointerX = 0;
    let startPointerY = 0;
    let startLeft = 0;
    let startTop = 0;
    let activePointerId = null;

    const onPointerDown = (e) => {
      if (e.target.closest("button, input, select, a")) return;
      isDragging = true;
      activePointerId = e.pointerId ?? null;
      startPointerX = e.clientX;
      startPointerY = e.clientY;

      const rect = preview.getBoundingClientRect();
      startLeft = rect.left;
      startTop = rect.top;

      preview.style.left = `${startLeft}px`;
      preview.style.top = `${startTop}px`;
      preview.style.right = "auto";
      preview.style.bottom = "auto";
      preview.classList.add("is-dragging");

      if (activePointerId && preview.setPointerCapture) {
        try { preview.setPointerCapture(activePointerId); } catch (_) {}
      }
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const dx = e.clientX - startPointerX;
      const dy = e.clientY - startPointerY;

      let newLeft = startLeft + dx;
      let newTop = startTop + dy;

      const maxLeft = Math.max(0, window.innerWidth - preview.offsetWidth - 6);
      const maxTop = Math.max(0, window.innerHeight - preview.offsetHeight - 6);

      newLeft = Math.max(6, Math.min(newLeft, maxLeft));
      newTop = Math.max(6, Math.min(newTop, maxTop));

      preview.style.left = `${newLeft}px`;
      preview.style.top = `${newTop}px`;
    };

    const onPointerUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      preview.classList.remove("is-dragging");
      if (activePointerId && preview.releasePointerCapture) {
        try { preview.releasePointerCapture(activePointerId); } catch (_) {}
      }
      activePointerId = null;
    };

    header.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
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
      "現在登録されているデータは消えず、毎日しっかり記録している人のリアルなお試しデータ（支出・カード・電子マネー・サブスク）が追加されます。",
      "追加する"
    );
    if (!confirmed) return;

    const mainCardId = uid("card");
    const subCardId = uid("card");
    const paypayId = uid("emoney");
    const suicaId = uid("emoney");
    const today = Core.todayKey();

    // 1. サンプルカード
    const sampleCards = [
      {
        id: mainCardId,
        name: "楽天カード（メイン）",
        closingDay: "end",
        paymentDay: 27,
        paymentMonth: 1,
        weekendAdjustment: "none",
        color: "#bf0000",
        memo: "月末締め・翌月27日払いのメインカード",
        createdAt: new Date().toISOString(),
        isSample: true,
      },
      {
        id: subCardId,
        name: "三井住友カード（サブ）",
        closingDay: 15,
        paymentDay: 10,
        paymentMonth: 1,
        weekendAdjustment: "next",
        color: "#0f5132",
        memo: "15日締め・翌月10日払いのサブカード",
        createdAt: new Date().toISOString(),
        isSample: true,
      },
    ];
    state.cards.push(...sampleCards);

    // 2. サンプルQR・電子マネー
    if (!state.emoneys) state.emoneys = [];
    if (!state.emoneyTransactions) state.emoneyTransactions = [];
    const sampleEmoneys = [
      {
        id: paypayId,
        name: "PayPay",
        initialBalance: 3500,
        color: "#ff0033",
        icon: "paypay",
        isDefault: !state.emoneys.some((e) => e.isDefault),
        createdAt: new Date().toISOString(),
        isSample: true,
      },
      {
        id: suicaId,
        name: "Suica",
        initialBalance: 1500,
        color: "#008000",
        icon: "suica",
        isDefault: false,
        createdAt: new Date().toISOString(),
        isSample: true,
      },
    ];
    state.emoneys.push(...sampleEmoneys);

    // 3. サンプルチャージ履歴
    const sampleTransactions = [
      {
        id: uid("emoney_tx"),
        emoneyId: paypayId,
        type: "charge",
        amount: 5000,
        date: Core.addDays(today, -11),
        sourceType: "card",
        cardId: mainCardId,
        memo: "楽天カードからチャージ",
        createdAt: new Date().toISOString(),
        isSample: true,
      },
      {
        id: uid("emoney_tx"),
        emoneyId: suicaId,
        type: "charge",
        amount: 3000,
        date: Core.addDays(today, -13),
        sourceType: "card",
        cardId: mainCardId,
        memo: "楽天カードからチャージ",
        createdAt: new Date().toISOString(),
        isSample: true,
      },
      {
        id: uid("emoney_tx"),
        emoneyId: paypayId,
        type: "charge",
        amount: 3000,
        date: Core.addDays(today, -3),
        sourceType: "bank",
        cardId: "",
        memo: "銀行口座からチャージ",
        createdAt: new Date().toISOString(),
        isSample: true,
      },
    ];
    state.emoneyTransactions.push(...sampleTransactions);

    // 4. サンプル支出（毎日コツコツ記録している人のリアルな日常データ）
    const sampleExpenses = [
      // 14日前
      sampleExpense(380, Core.addDays(today, -14), "食費", "QR・電子マネー", "", paypayId, "朝カフェ コーヒー"),
      sampleExpense(920, Core.addDays(today, -14), "食費", "QR・電子マネー", "", paypayId, "ランチ 定食"),
      sampleExpense(360, Core.addDays(today, -14), "交通", "QR・電子マネー", "", suicaId, "地下鉄移動"),
      // 13日前
      sampleExpense(2480, Core.addDays(today, -13), "日用品", Core.CREDIT_PAYMENT, mainCardId, "", "ドラッグストア（洗剤・消耗品）"),
      sampleExpense(1150, Core.addDays(today, -13), "食費", "現金", "", "", "弁当・お惣菜"),
      // 12日前
      sampleExpense(390, Core.addDays(today, -12), "食費", "QR・電子マネー", "", paypayId, "コンビニ 朝食"),
      sampleExpense(880, Core.addDays(today, -12), "食費", "QR・電子マネー", "", paypayId, "ラーメン ランチ"),
      sampleExpense(4320, Core.addDays(today, -12), "食費", Core.CREDIT_PAYMENT, mainCardId, "", "スーパー 食料品まとめ買い"),
      // 11日前
      sampleExpense(540, Core.addDays(today, -11), "交通", "QR・電子マネー", "", suicaId, "電車移動"),
      sampleExpense(1050, Core.addDays(today, -11), "食費", "QR・電子マネー", "", paypayId, "ランチ パスタ"),
      sampleExpense(2200, Core.addDays(today, -11), "娯楽", Core.CREDIT_PAYMENT, subCardId, "", "技術書・電子書籍"),
      // 10日前
      sampleExpense(450, Core.addDays(today, -10), "食費", "QR・電子マネー", "", paypayId, "カフェ ラテ"),
      sampleExpense(1380, Core.addDays(today, -10), "食費", "現金", "", "", "同僚とランチ"),
      // 9日前（週末）
      sampleExpense(890, Core.addDays(today, -9), "食費", "QR・電子マネー", "", paypayId, "ベーカリー パン"),
      sampleExpense(3850, Core.addDays(today, -9), "食費", Core.CREDIT_PAYMENT, mainCardId, "", "スーパー 週末買い出し"),
      sampleExpense(5800, Core.addDays(today, -9), "娯楽", Core.CREDIT_PAYMENT, mainCardId, "", "映画＆夕食"),
      // 8日前
      sampleExpense(1800, Core.addDays(today, -8), "医療", "現金", "", "", "クリニック診察・目薬"),
      sampleExpense(980, Core.addDays(today, -8), "日用品", "QR・電子マネー", "", paypayId, "生活雑貨"),
      // 7日前
      sampleExpense(380, Core.addDays(today, -7), "食費", "QR・電子マネー", "", paypayId, "朝コーヒー"),
      sampleExpense(950, Core.addDays(today, -7), "食費", "QR・電子マネー", "", paypayId, "ランチ 蕎麦"),
      sampleExpense(360, Core.addDays(today, -7), "交通", "QR・電子マネー", "", suicaId, "電車"),
      // 6日前
      sampleExpense(1100, Core.addDays(today, -6), "食費", "QR・電子マネー", "", paypayId, "中華ランチ"),
      sampleExpense(1680, Core.addDays(today, -6), "日用品", Core.CREDIT_PAYMENT, subCardId, "", "シャンプー・日用品"),
      // 5日前
      sampleExpense(450, Core.addDays(today, -5), "食費", "QR・電子マネー", "", paypayId, "ドトール"),
      sampleExpense(3200, Core.addDays(today, -5), "食費", Core.CREDIT_PAYMENT, mainCardId, "", "スーパー 夕食食材"),
      sampleExpense(4900, Core.addDays(today, -5), "衣服", Core.CREDIT_PAYMENT, subCardId, "", "ユニクロ シャツ・インナー"),
      // 4日前
      sampleExpense(890, Core.addDays(today, -4), "食費", "QR・電子マネー", "", paypayId, "ランチ カレー"),
      sampleExpense(360, Core.addDays(today, -4), "交通", "QR・電子マネー", "", suicaId, "バス"),
      sampleExpense(4500, Core.addDays(today, -4), "その他", Core.CREDIT_PAYMENT, mainCardId, "", "仕事仲間と食事会"),
      // 3日前
      sampleExpense(650, Core.addDays(today, -3), "食費", "QR・電子マネー", "", paypayId, "サンドイッチ"),
      sampleExpense(1420, Core.addDays(today, -3), "日用品", "QR・電子マネー", "", paypayId, "無印良品 消耗品"),
      // 2日前
      sampleExpense(380, Core.addDays(today, -2), "食費", "QR・電子マネー", "", paypayId, "コンビニ 朝食"),
      sampleExpense(980, Core.addDays(today, -2), "食費", "QR・電子マネー", "", paypayId, "日替わりランチ"),
      sampleExpense(2950, Core.addDays(today, -2), "食費", Core.CREDIT_PAYMENT, mainCardId, "", "スーパー 食料品"),
      // 1日前
      sampleExpense(420, Core.addDays(today, -1), "食費", "QR・電子マネー", "", paypayId, "スターバックス ドリップ"),
      sampleExpense(1350, Core.addDays(today, -1), "食費", "現金", "", "", "和食ランチ"),
      sampleExpense(540, Core.addDays(today, -1), "交通", "QR・電子マネー", "", suicaId, "往復電車"),
      // 今日
      sampleExpense(380, today, "食費", "QR・電子マネー", "", paypayId, "モーニング コーヒー"),
      sampleExpense(1000, today, "食費", "QR・電子マネー", "", paypayId, "ランチ"),
      // 今後の予定
      sampleExpense(2800, Core.addDays(today, 2), "日用品", Core.CREDIT_PAYMENT, mainCardId, "", "日用品補充予定"),
      sampleExpense(6800, Core.addDays(today, 5), "娯楽", Core.CREDIT_PAYMENT, mainCardId, "", "週末イベント・チケット"),
    ];
    state.expenses.push(...sampleExpenses);

    // 5. サンプル手動支払日データ
    state.manualPayments.push({
      id: uid("manual"),
      cardId: mainCardId,
      amount: 48500,
      date: Core.addDays(today, 8),
      memo: "確定した前月カード引き落とし予定",
      createdAt: new Date().toISOString(),
      isSample: true,
    });

    // 6. サンプル固定費・サブスク
    const sampleSubscriptions = [
      {
        id: uid("sub"),
        name: "家賃",
        icon: "home",
        type: "fixed",
        amount: 75000,
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
        name: "電気・ガス・水道",
        icon: "zap",
        type: "fixed",
        amount: 11800,
        amountType: "variable",
        interval: "monthly",
        paymentDay: "end",
        paymentMonth: null,
        oneTimeDate: "",
        paymentMethod: Core.CREDIT_PAYMENT,
        cardId: mainCardId,
        includeInWithdrawal: true,
        category: "固定費",
        memo: "公共料金まとめ",
        isActive: true,
        createdAt: new Date().toISOString(),
        isSample: true,
      },
      {
        id: uid("sub"),
        name: "スマホ・通信費",
        icon: "phone",
        type: "fixed",
        amount: 6800,
        amountType: "variable",
        interval: "monthly",
        paymentDay: 27,
        paymentMonth: null,
        oneTimeDate: "",
        paymentMethod: Core.CREDIT_PAYMENT,
        cardId: mainCardId,
        includeInWithdrawal: true,
        category: "固定費",
        memo: "携帯・光回線",
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
        name: "Amazonプライム / 動画配信",
        icon: "tv",
        type: "subscription",
        amount: 1490,
        amountType: "fixed",
        interval: "monthly",
        paymentDay: 10,
        paymentMonth: null,
        oneTimeDate: "",
        paymentMethod: Core.CREDIT_PAYMENT,
        cardId: subCardId,
        includeInWithdrawal: true,
        category: "娯楽",
        memo: "サブスク動画",
        isActive: true,
        createdAt: new Date().toISOString(),
        isSample: true,
      },
      {
        id: uid("sub"),
        name: "フィットネスジム",
        icon: "activity",
        type: "subscription",
        amount: 4400,
        amountType: "fixed",
        interval: "monthly",
        paymentDay: 5,
        paymentMonth: null,
        oneTimeDate: "",
        paymentMethod: Core.CREDIT_PAYMENT,
        cardId: subCardId,
        includeInWithdrawal: true,
        category: "医療",
        memo: "ジム月会費",
        isActive: true,
        createdAt: new Date().toISOString(),
        isSample: true,
      },
    ];
    state.subscriptions.push(...sampleSubscriptions);

    // 7. テーマ・表示の設定
    if (!state.settings.skin || state.settings.skin === "none") {
      state.settings.skin = "othello";
      applyThemeSkin();
    }

    saveState();
    currentMonth = firstOfMonth(today);
    renderAll();
    showToast("リアルな日常サンプルデータを追加しました。");
  }

  function sampleExpense(amount, date, category, paymentMethod, cardId, emoneyId, memo) {
    const timestamp = new Date().toISOString();
    return {
      id: uid("exp"),
      amount,
      date,
      category,
      paymentMethod,
      cardId: cardId || "",
      emoneyId: emoneyId || "",
      includeInWithdrawal: true,
      paymentDateOverride: "",
      calculatedPaymentDate: paymentMethod === Core.CREDIT_PAYMENT
        ? Core.calculatePaymentDate(date, state.cards.find((card) => card.id === cardId))
        : "",
      memo: memo || "",
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
      state.subscriptions.some((item) => item.isSample) ||
      (state.emoneys || []).some((item) => item.isSample) ||
      (state.emoneyTransactions || []).some((item) => item.isSample)
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
    state.emoneys = (state.emoneys || []).filter((item) => !item.isSample);
    state.emoneyTransactions = (state.emoneyTransactions || []).filter((item) => !item.isSample);
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
    const dailyTotals = Core.buildDailyTotals(state.expenses, state.cards, state.manualPayments, state.subscriptions, undefined, state.emoneyTransactions);
    
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

    const curSummary = Core.summarizeMonth(monthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions, state.emoneyTransactions);
    const prevSummary = Core.summarizeMonth(prevMonthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions, state.emoneyTransactions);

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

    const curSum = Core.summarizeMonth(curMonthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions, state.emoneyTransactions);
    const prevSum = Core.summarizeMonth(prevMonthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions, state.emoneyTransactions);

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
    const summary = Core.summarizeMonth(monthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions, state.emoneyTransactions);
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
      const summary = Core.summarizeMonth(monthKey, state.expenses, state.cards, state.manualPayments, cycleDay, state.subscriptions, state.emoneyTransactions);
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
