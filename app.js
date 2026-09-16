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

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'><g fill='${coreColor}' fill-opacity='${coreOpacity}'><path d='M34.2,22.0 C34.3,24.3 32.6,26.6 30.2,27.9 C27.7,29.3 25.0,29.4 21.9,28.9 C18.9,28.4 16.0,27.3 14.9,25.4 C13.8,23.4 15.1,21.5 16.4,19.2 C17.7,16.9 18.9,14.3 21.5,13.7 C24.2,13.2 27.3,14.8 29.8,16.4 C32.3,18.1 34.1,19.7 34.2,22.0 Z'/><path d='M275.5,22.0 C275.8,24.4 273.5,27.2 270.8,28.6 C268.1,29.9 265.2,29.4 262.0,28.8 C258.7,28.2 256.2,27.6 254.5,25.5 C252.9,23.4 252.3,20.3 253.8,18.2 C255.2,16.1 258.7,15.1 261.9,14.8 C265.0,14.5 266.8,15.3 269.5,16.7 C272.2,18.1 275.3,19.6 275.5,22.0 Z'/><path d='M34.9,262.0 C35.0,264.2 32.9,266.4 30.2,268.0 C27.5,269.6 24.6,270.6 21.6,270.1 C18.6,269.6 16.4,267.6 15.0,265.3 C13.6,263.0 13.4,260.9 14.7,258.6 C16.0,256.2 18.6,254.0 21.5,253.7 C24.5,253.3 26.7,255.1 29.4,256.8 C32.1,258.5 34.7,259.8 34.9,262.0 Z'/><path d='M87.8,18.0 C87.9,21.0 88.3,24.4 85.9,25.9 C83.5,27.5 79.8,26.4 75.8,25.7 C71.8,25.0 67.9,25.0 66.0,22.6 C64.2,20.2 64.7,16.5 66.5,13.6 C68.3,10.6 71.4,8.5 75.1,7.9 C78.8,7.3 82.6,8.8 85.2,10.8 C87.7,12.8 87.6,15.0 87.8,18.0 Z'/><path d='M89.8,258.0 C90.0,260.5 87.6,263.3 84.8,264.8 C82.0,266.3 79.2,266.2 75.8,265.6 C72.5,265.0 69.7,264.2 68.0,261.9 C66.2,259.5 65.5,256.2 67.1,253.8 C68.6,251.4 72.3,250.2 75.7,249.9 C79.0,249.6 80.9,250.7 83.7,252.3 C86.5,253.9 89.6,255.5 89.8,258.0 Z'/><path d='M146.0,26.0 C146.0,28.2 144.1,29.7 141.6,31.5 C139.1,33.4 136.3,35.6 133.3,35.2 C130.3,34.8 127.8,32.1 126.5,29.6 C125.3,27.1 125.6,25.0 127.0,22.6 C128.4,20.2 130.6,17.9 133.5,17.5 C136.4,17.1 139.0,18.8 141.5,20.5 C144.0,22.2 146.0,23.8 146.0,26.0 Z'/><path d='M147.2,266.0 C147.5,268.5 145.8,271.8 143.2,273.1 C140.6,274.4 137.4,273.2 134.1,272.5 C130.8,271.8 128.6,271.6 126.8,269.5 C125.1,267.4 124.0,264.0 125.4,262.0 C126.9,260.0 130.8,259.6 134.0,259.2 C137.3,258.9 139.0,259.0 141.7,260.4 C144.3,261.8 146.9,263.5 147.2,266.0 Z'/><path d='M203.5,16.0 C203.2,18.9 201.7,20.6 198.8,22.4 C196.0,24.2 192.6,25.6 189.3,25.0 C185.9,24.4 183.9,22.2 182.1,19.6 C180.3,16.9 178.8,13.9 180.4,11.8 C181.9,9.7 185.8,9.7 189.9,9.0 C193.9,8.2 197.8,6.6 200.5,8.0 C203.3,9.4 203.9,13.1 203.5,16.0 Z'/><path d='M202.0,256.0 C201.7,258.8 201.1,260.7 198.7,262.3 C196.2,263.8 192.7,264.3 189.7,263.7 C186.6,263.1 185.4,261.6 183.3,259.2 C181.2,256.7 178.0,253.8 179.2,251.4 C180.4,249.0 185.1,247.8 189.3,247.1 C193.5,246.5 197.7,246.5 200.2,248.2 C202.8,250.0 202.3,253.2 202.0,256.0 Z'/><path d='M61.8,62.0 C62.3,65.1 61.9,69.1 59.0,71.1 C56.0,73.1 51.3,72.8 47.2,71.9 C43.2,70.9 40.4,69.3 38.7,66.4 C37.0,63.6 37.3,60.8 38.9,57.7 C40.6,54.5 43.4,51.2 46.8,50.8 C50.3,50.4 53.3,53.4 56.3,55.6 C59.2,57.9 61.3,58.9 61.8,62.0 Z'/><path d='M115.3,58.0 C115.6,60.7 116.0,63.7 113.6,65.5 C111.2,67.2 106.6,67.6 103.5,66.7 C100.3,65.8 98.9,63.4 97.8,61.1 C96.8,58.8 97.0,57.0 98.3,55.1 C99.5,53.2 101.4,52.1 104.1,51.6 C106.8,51.0 109.6,50.9 111.9,52.2 C114.1,53.5 114.9,55.3 115.3,58.0 Z'/><path d='M174.3,66.0 C174.4,69.1 174.7,72.0 172.1,74.1 C169.4,76.1 164.5,77.1 161.1,76.2 C157.6,75.3 156.2,72.3 154.9,69.5 C153.6,66.8 153.3,65.0 154.6,62.4 C155.9,59.8 157.9,57.3 161.3,56.6 C164.7,55.8 168.8,56.7 171.4,58.6 C174.0,60.5 174.2,62.9 174.3,66.0 Z'/><path d='M231.6,54.0 C231.8,56.4 230.9,59.1 228.6,60.4 C226.3,61.6 223.1,60.9 220.2,60.2 C217.2,59.6 215.0,59.0 213.6,57.1 C212.3,55.2 212.3,52.7 213.6,50.9 C214.9,49.1 217.4,48.4 220.2,47.9 C223.0,47.5 225.4,47.3 227.7,48.5 C229.9,49.7 231.4,51.6 231.6,54.0 Z'/><path d='M-6.5,54.0 C-6.3,56.3 -8.9,58.6 -11.6,60.1 C-14.4,61.6 -16.9,62.0 -20.2,61.5 C-23.5,61.0 -26.6,60.0 -28.1,57.7 C-29.6,55.5 -29.3,52.7 -27.8,50.4 C-26.2,48.1 -23.4,46.7 -20.3,46.3 C-17.2,46.0 -15.1,47.0 -12.3,48.5 C-9.5,50.0 -6.6,51.7 -6.5,54.0 Z'/><path d='M29.2,108.0 C29.0,110.5 27.9,112.1 25.6,113.7 C23.4,115.2 21.0,116.2 17.8,115.8 C14.5,115.5 11.0,114.5 9.4,112.1 C7.7,109.7 7.9,106.4 9.5,104.0 C11.2,101.5 14.3,100.6 17.7,100.0 C21.2,99.4 24.5,99.5 26.8,101.1 C29.1,102.7 29.5,105.5 29.2,108.0 Z'/><path d='M271.0,108.0 C270.6,110.8 268.7,112.2 266.0,114.0 C263.3,115.9 260.9,117.7 257.3,117.4 C253.7,117.1 249.5,115.4 247.9,112.7 C246.3,110.0 247.4,106.5 249.4,103.9 C251.3,101.3 253.9,100.6 257.7,99.8 C261.4,99.0 265.3,98.3 268.0,100.0 C270.6,101.6 271.4,105.2 271.0,108.0 Z'/><path d='M86.9,114.0 C87.2,116.8 84.7,120.3 81.7,121.8 C78.7,123.4 75.6,122.3 71.9,121.6 C68.1,120.9 64.9,120.8 62.9,118.3 C60.9,115.8 60.0,112.0 61.7,109.2 C63.4,106.4 67.6,104.7 71.3,104.4 C75.0,104.1 77.0,105.8 80.1,107.7 C83.2,109.7 86.6,111.2 86.9,114.0 Z'/><path d='M140.9,106.0 C140.9,108.3 140.0,109.7 137.6,111.5 C135.3,113.4 132.0,115.8 129.3,115.3 C126.6,114.8 125.1,111.5 124.1,109.0 C123.0,106.5 122.8,105.3 123.9,102.9 C125.0,100.6 126.6,97.8 129.5,97.2 C132.3,96.7 135.6,98.4 137.9,100.1 C140.2,101.9 141.0,103.7 140.9,106.0 Z'/><path d='M201.8,112.0 C201.9,114.9 200.1,117.7 197.3,119.4 C194.4,121.2 191.3,121.2 187.6,120.7 C183.8,120.1 180.5,119.3 178.4,116.5 C176.4,113.8 175.4,109.5 177.3,107.0 C179.1,104.5 183.8,104.3 187.7,103.9 C191.6,103.5 194.0,103.4 196.8,105.0 C199.7,106.6 201.7,109.1 201.8,112.0 Z'/><path d='M56.0,158.0 C56.1,160.8 56.0,163.6 53.5,165.4 C51.0,167.2 46.8,167.9 43.3,167.2 C39.8,166.5 37.2,164.3 36.0,161.8 C34.8,159.3 35.7,157.1 37.2,154.7 C38.7,152.2 40.4,150.2 43.5,149.6 C46.7,148.9 50.3,149.6 52.8,151.3 C55.3,153.0 55.8,155.2 56.0,158.0 Z'/><path d='M116.3,164.0 C116.4,166.6 111.9,168.8 108.5,170.7 C105.1,172.6 103.1,173.8 99.3,173.5 C95.5,173.1 91.5,171.7 89.6,168.9 C87.6,166.0 87.7,162.2 89.6,159.2 C91.5,156.1 95.4,154.0 99.1,153.7 C102.8,153.4 104.9,155.5 108.3,157.6 C111.8,159.6 116.3,161.4 116.3,164.0 Z'/><path d='M172.1,154.0 C171.9,156.4 168.4,157.8 165.5,159.4 C162.6,161.1 160.3,162.6 157.6,162.1 C154.9,161.6 153.8,159.5 152.1,157.0 C150.3,154.5 147.9,152.1 149.0,149.8 C150.1,147.5 154.1,146.0 157.5,145.6 C161.0,145.1 163.6,145.9 166.5,147.6 C169.4,149.3 172.3,151.6 172.1,154.0 Z'/><path d='M230.7,162.0 C230.2,164.9 227.0,166.5 224.0,168.0 C221.0,169.6 218.9,170.1 215.8,169.6 C212.8,169.1 210.2,167.8 208.8,165.5 C207.5,163.3 207.6,160.9 208.9,158.5 C210.3,156.1 212.1,154.5 215.6,153.5 C219.1,152.5 223.3,151.9 226.4,153.6 C229.4,155.3 231.2,159.1 230.7,162.0 Z'/><path d='M-8.9,162.0 C-8.8,165.0 -11.4,167.9 -14.5,169.5 C-17.6,171.2 -21.1,171.2 -24.4,170.4 C-27.7,169.6 -29.8,167.9 -31.1,165.5 C-32.4,163.1 -32.2,161.3 -31.0,158.5 C-29.8,155.8 -28.2,152.5 -24.9,151.7 C-21.7,151.0 -17.9,152.6 -14.6,154.6 C-11.4,156.7 -8.9,159.0 -8.9,162.0 Z'/><path d='M32.7,212.0 C32.8,215.4 33.1,218.6 30.4,220.6 C27.7,222.6 23.4,222.7 19.2,221.9 C15.0,221.2 10.8,219.5 9.6,216.9 C8.4,214.2 11.2,211.2 13.2,208.6 C15.3,206.0 16.3,204.9 19.7,203.9 C23.1,202.9 27.7,202.0 30.3,203.6 C32.9,205.2 32.7,208.6 32.7,212.0 Z'/><path d='M275.3,212.0 C275.5,214.6 272.2,217.0 268.9,219.1 C265.7,221.1 263.0,222.7 259.1,222.3 C255.2,221.9 251.2,220.0 249.3,217.0 C247.4,213.9 247.6,210.3 249.5,207.1 C251.4,203.9 255.2,201.1 258.9,200.9 C262.6,200.6 264.8,203.6 268.1,205.8 C271.4,208.0 275.2,209.4 275.3,212.0 Z'/><path d='M32.5,-28.0 C32.6,-24.8 32.7,-21.9 30.1,-19.8 C27.4,-17.7 23.2,-17.0 19.1,-17.7 C15.0,-18.4 11.1,-20.4 9.7,-23.2 C8.4,-26.0 10.6,-28.8 12.5,-31.7 C14.4,-34.6 15.9,-36.9 19.3,-37.7 C22.7,-38.5 26.8,-37.5 29.5,-35.6 C32.1,-33.7 32.3,-31.2 32.5,-28.0 Z'/><path d='M88.3,206.0 C88.0,208.6 86.4,209.8 83.8,211.7 C81.2,213.7 78.3,216.0 75.2,215.6 C72.1,215.2 69.4,212.2 68.4,209.6 C67.3,207.1 68.4,205.0 70.0,203.0 C71.5,200.9 73.1,200.3 76.1,199.5 C79.1,198.7 82.7,197.6 85.2,198.9 C87.6,200.2 88.5,203.4 88.3,206.0 Z'/><path d='M146.6,216.0 C146.5,218.6 145.2,220.7 142.6,222.2 C140.0,223.7 137.4,223.9 133.7,223.5 C130.0,223.1 126.0,222.6 124.1,220.3 C122.3,218.0 122.8,214.8 124.5,211.9 C126.3,208.9 129.1,206.2 132.9,205.7 C136.6,205.2 140.5,207.1 143.3,209.2 C146.0,211.2 146.8,213.4 146.6,216.0 Z'/><path d='M147.7,-24.0 C147.7,-20.6 147.9,-17.6 144.9,-15.6 C142.0,-13.6 137.3,-13.2 133.0,-14.0 C128.6,-14.8 124.6,-16.7 123.2,-19.4 C121.9,-22.1 124.4,-24.6 126.3,-27.5 C128.3,-30.4 129.3,-32.9 133.0,-33.9 C136.7,-34.9 142.0,-34.3 144.9,-32.4 C147.8,-30.4 147.7,-27.4 147.7,-24.0 Z'/><path d='M205.9,208.0 C205.8,210.5 202.7,212.4 199.9,213.9 C197.1,215.5 195.2,216.2 191.8,215.9 C188.3,215.6 184.3,214.8 182.6,212.4 C181.0,210.0 181.8,206.6 183.5,204.0 C185.3,201.4 188.2,200.0 191.6,199.5 C195.0,199.0 197.7,199.7 200.6,201.4 C203.5,203.1 206.1,205.5 205.9,208.0 Z'/></g><g fill='${spotColor}' fill-opacity='${spotOpacity}'><path d='M41.4,29.4 C41.1,31.2 35.8,35.1 32.2,36.7 C28.6,38.2 25.6,38.4 21.6,38.2 C17.5,37.9 12.9,38.0 9.9,35.4 C6.9,32.8 4.3,26.1 5.1,23.9 C5.8,21.7 11.9,22.2 14.1,23.0 C16.3,23.8 15.7,26.8 17.2,28.4 C18.7,30.1 20.2,31.7 22.4,32.3 C24.6,32.9 27.3,32.8 29.4,31.7 C31.5,30.6 32.0,26.7 34.1,26.3 C36.3,25.9 41.8,27.5 41.4,29.4 Z'/><path d='M9.5,15.9 C9.8,13.9 12.6,9.5 15.7,7.2 C18.8,4.9 22.9,2.9 26.8,3.3 C30.7,3.6 34.6,6.3 37.3,9.3 C40.0,12.4 42.6,18.1 42.0,20.2 C41.4,22.3 35.8,22.0 34.0,21.0 C32.2,20.0 33.3,16.3 31.8,14.5 C30.3,12.8 27.9,11.6 25.6,11.4 C23.3,11.2 21.2,12.1 19.1,13.3 C17.1,14.5 16.0,17.4 14.3,17.9 C12.6,18.4 9.3,17.8 9.5,15.9 Z'/><path d='M279.0,28.4 C279.1,30.5 275.9,35.4 272.7,37.5 C269.5,39.5 265.1,40.4 261.3,39.8 C257.5,39.1 254.3,36.7 251.5,33.9 C248.7,31.0 245.6,25.8 245.9,23.8 C246.3,21.9 251.7,22.1 253.6,23.0 C255.4,24.0 254.8,27.8 256.4,29.2 C258.1,30.7 260.3,30.8 262.6,31.1 C264.9,31.4 267.3,32.0 269.1,31.1 C270.9,30.1 270.7,26.1 272.5,25.6 C274.3,25.1 279.0,26.2 279.0,28.4 Z'/><path d='M247.2,14.9 C247.3,12.9 252.3,9.6 255.8,7.4 C259.4,5.2 263.2,2.2 266.9,2.8 C270.6,3.3 273.5,7.3 276.2,10.4 C278.9,13.5 282.4,18.3 282.0,20.2 C281.6,22.1 275.8,22.0 274.0,21.0 C272.1,20.0 273.3,16.3 271.8,14.6 C270.3,12.9 267.9,11.6 265.6,11.4 C263.3,11.1 261.0,12.0 259.1,13.2 C257.2,14.5 257.4,18.0 255.2,18.3 C253.1,18.6 247.1,16.9 247.2,14.9 Z'/><path d='M42.2,269.7 C42.0,271.8 36.4,276.1 32.7,277.5 C29.0,278.9 25.7,278.0 21.7,277.5 C17.7,277.0 13.5,277.3 10.5,274.9 C7.4,272.4 4.2,266.1 4.7,263.9 C5.2,261.8 11.1,262.2 13.3,263.1 C15.5,264.0 15.1,267.3 16.7,268.9 C18.4,270.5 20.2,271.6 22.5,272.0 C24.7,272.4 27.3,272.4 29.2,271.3 C31.2,270.2 31.1,266.3 33.4,266.0 C35.7,265.7 42.3,267.6 42.2,269.7 Z'/><path d='M7.8,255.2 C7.9,253.0 11.5,247.7 14.9,245.7 C18.3,243.8 22.9,243.4 26.7,244.3 C30.5,245.2 33.6,247.7 36.0,250.6 C38.4,253.5 40.4,258.5 39.9,260.4 C39.4,262.3 34.9,261.9 33.2,261.1 C31.5,260.2 32.1,257.3 30.7,255.6 C29.3,254.0 27.6,252.2 25.5,251.8 C23.5,251.4 21.2,252.3 19.2,253.4 C17.1,254.5 16.2,257.5 14.2,257.9 C12.1,258.2 7.7,257.3 7.8,255.2 Z'/><path d='M85.2,36.6 C83.8,38.6 77.8,40.6 74.1,39.9 C70.4,39.3 67.2,35.9 64.7,33.0 C62.2,30.0 59.9,25.5 60.2,23.4 C60.5,21.4 64.8,20.8 66.5,21.5 C68.3,22.2 68.2,25.6 69.9,27.2 C71.5,28.8 73.5,30.2 75.8,30.5 C78.0,30.9 80.6,28.0 82.3,29.1 C84.0,30.2 86.7,34.7 85.2,36.6 Z'/><path d='M58.6,15.0 C57.9,13.0 60.7,8.4 63.0,5.4 C65.3,2.3 67.9,-0.8 71.4,-1.8 C74.9,-2.8 80.6,-1.8 82.2,-0.3 C83.9,1.2 82.1,5.4 80.6,6.6 C79.2,7.8 76.3,5.8 74.1,6.4 C72.0,7.1 69.9,8.4 68.7,10.2 C67.5,12.0 69.3,15.5 67.4,16.4 C65.6,17.2 59.4,17.0 58.6,15.0 Z'/><path d='M91.1,1.7 C92.9,2.2 94.0,7.9 95.5,11.7 C97.1,15.4 100.3,19.0 99.6,22.4 C99.0,25.9 94.0,30.1 91.8,30.8 C89.5,31.5 87.5,28.3 87.0,26.4 C86.6,24.5 88.8,22.6 89.2,20.3 C89.7,18.0 90.2,15.9 89.5,13.9 C88.8,11.8 85.1,11.0 85.4,8.8 C85.7,6.6 89.3,1.2 91.1,1.7 Z'/><path d='M85.6,277.4 C84.2,278.9 78.4,277.8 74.6,277.1 C70.8,276.3 67.6,275.7 64.3,273.4 C61.1,271.1 56.2,266.7 56.7,264.5 C57.3,262.3 65.1,260.7 67.4,261.2 C69.8,261.7 68.3,265.6 69.8,267.2 C71.3,268.9 73.5,270.2 75.8,270.5 C78.0,270.9 80.6,268.0 82.4,269.2 C84.1,270.5 87.0,276.0 85.6,277.4 Z'/><path d='M58.9,255.1 C58.2,253.1 60.5,247.9 62.9,245.3 C65.3,242.6 68.5,241.9 72.1,240.4 C75.7,238.9 81.4,235.6 82.9,236.9 C84.4,238.1 82.1,245.5 80.5,247.2 C78.9,248.9 76.2,245.6 74.1,246.2 C72.0,246.7 70.2,248.4 68.8,250.2 C67.5,252.1 68.4,255.4 66.6,256.2 C64.8,257.1 59.5,257.0 58.9,255.1 Z'/><path d='M91.7,240.9 C94.1,241.1 96.6,246.9 98.1,250.8 C99.5,254.6 100.5,258.6 99.6,262.4 C98.7,266.2 95.3,271.3 93.0,272.0 C90.7,272.6 87.5,268.2 86.7,266.1 C86.0,264.0 88.6,262.4 88.9,260.2 C89.3,258.1 89.4,256.1 88.7,254.2 C87.9,252.2 84.2,252.0 84.7,249.6 C85.3,247.2 89.3,240.7 91.7,240.9 Z'/><path d='M121.8,36.6 C119.6,36.5 117.1,33.5 116.3,31.1 C115.4,28.7 116.5,26.0 117.0,23.3 C117.6,20.7 117.4,16.7 119.3,16.2 C121.1,15.8 126.4,19.5 127.3,20.9 C128.2,22.4 124.5,23.0 124.3,24.4 C124.0,25.7 125.4,27.2 126.0,28.6 C126.7,29.9 128.8,30.5 128.0,32.0 C127.3,33.4 123.9,36.8 121.8,36.6 Z'/><path d='M123.6,9.4 C124.1,7.8 128.6,8.1 131.3,7.6 C134.0,7.1 136.1,6.1 138.7,6.5 C141.3,6.9 145.2,7.6 145.6,9.6 C146.0,11.6 142.4,16.5 141.0,17.5 C139.5,18.4 138.9,15.3 137.6,14.9 C136.2,14.5 134.8,14.9 133.2,15.2 C131.7,15.5 130.6,17.5 128.9,16.5 C127.1,15.4 123.2,11.0 123.6,9.4 Z'/><path d='M149.9,15.6 C151.8,16.0 155.3,18.4 156.3,20.8 C157.3,23.1 155.9,25.9 155.4,28.7 C154.8,31.5 155.3,35.7 153.4,36.2 C151.4,36.6 145.5,32.5 144.5,31.0 C143.5,29.5 147.3,29.0 147.7,27.6 C148.2,26.2 147.3,24.8 146.9,23.2 C146.5,21.6 145.0,20.2 145.6,18.8 C146.1,17.5 148.0,15.3 149.9,15.6 Z'/><path d='M148.2,42.3 C148.0,44.4 143.7,44.9 141.0,45.6 C138.3,46.2 135.8,46.4 133.2,45.8 C130.6,45.2 127.1,44.0 126.5,42.2 C125.9,40.5 128.7,36.9 130.2,36.0 C131.6,35.1 132.8,37.3 134.4,37.5 C136.0,37.6 137.4,37.5 138.8,36.9 C140.2,36.3 140.4,33.2 142.1,34.2 C143.8,35.1 148.4,40.3 148.2,42.3 Z'/><path d='M120.0,278.0 C118.2,277.6 117.2,273.5 117.0,270.9 C116.8,268.3 118.0,266.0 118.8,263.6 C119.6,261.2 119.9,258.0 121.3,257.4 C122.7,256.8 125.7,259.1 126.5,260.4 C127.3,261.7 126.2,263.1 125.8,264.6 C125.5,266.1 124.5,267.4 124.7,268.9 C124.8,270.4 127.4,271.4 126.5,273.1 C125.7,274.7 121.7,278.4 120.0,278.0 Z'/><path d='M123.5,249.2 C123.9,247.7 128.9,248.8 131.6,248.8 C134.3,248.8 135.7,249.3 138.3,249.3 C141.0,249.2 145.7,247.1 146.3,248.4 C146.8,249.8 142.9,255.6 141.3,256.9 C139.7,258.2 138.9,256.2 137.4,255.8 C135.9,255.4 134.5,254.3 133.1,254.5 C131.6,254.8 131.1,258.1 129.4,257.1 C127.6,256.2 123.1,250.7 123.5,249.2 Z'/><path d='M151.4,254.5 C152.9,254.9 152.1,259.0 153.0,261.6 C153.9,264.2 156.7,266.4 156.4,268.9 C156.2,271.3 153.8,274.8 151.8,275.3 C149.9,275.8 146.4,273.0 145.6,271.6 C144.7,270.2 147.1,269.0 147.2,267.6 C147.2,266.1 146.1,265.0 145.7,263.5 C145.2,262.1 143.7,261.1 144.7,259.5 C145.7,257.9 149.9,254.1 151.4,254.5 Z'/><path d='M146.0,279.4 C145.6,281.2 143.2,284.6 140.9,285.2 C138.7,285.8 136.1,283.5 133.7,282.7 C131.2,282.0 127.9,282.1 127.3,280.8 C126.7,279.6 129.0,276.4 130.3,275.7 C131.6,275.0 132.9,276.6 134.5,276.9 C136.0,277.3 137.4,277.8 139.0,277.5 C140.5,277.3 141.8,275.2 143.1,275.5 C144.4,275.9 146.4,277.7 146.0,279.4 Z'/><path d='M212.5,18.1 C213.7,20.4 212.6,26.5 210.5,30.0 C208.3,33.5 204.5,35.9 200.4,37.5 C196.4,39.1 189.9,40.6 188.0,38.8 C186.1,36.9 188.6,29.4 190.0,27.2 C191.5,25.0 194.1,27.3 196.2,26.6 C198.2,25.9 200.2,25.0 201.6,23.3 C203.0,21.6 202.1,18.2 204.1,17.2 C206.1,16.3 211.4,15.8 212.5,18.1 Z'/><path d='M178.5,34.8 C176.2,34.4 172.5,28.6 171.4,24.7 C170.3,20.8 171.7,17.2 172.3,13.0 C172.9,8.9 172.7,2.3 174.6,1.5 C176.6,0.6 182.1,6.2 183.0,8.5 C183.9,10.8 180.1,11.9 179.7,14.1 C179.3,16.4 179.9,18.5 180.7,20.7 C181.6,23.0 184.7,24.2 184.3,26.7 C183.9,29.3 180.8,35.1 178.5,34.8 Z'/><path d='M184.0,-1.7 C185.4,-4.1 191.0,-8.0 195.0,-8.0 C199.1,-8.1 203.6,-5.3 206.5,-2.2 C209.4,0.9 211.4,6.6 211.0,9.1 C210.5,11.6 206.1,12.0 204.0,11.6 C201.9,11.2 201.1,8.4 199.2,6.9 C197.4,5.4 195.8,3.6 193.6,3.3 C191.4,3.0 188.9,6.2 187.2,5.3 C185.5,4.4 182.6,0.7 184.0,-1.7 Z'/><path d='M211.5,258.0 C212.0,260.0 210.5,265.0 208.5,268.5 C206.5,272.0 204.1,275.3 200.4,277.3 C196.6,279.2 189.8,280.8 187.9,279.1 C186.1,277.4 188.4,269.9 189.9,267.9 C191.5,265.8 194.6,268.5 196.6,267.6 C198.6,266.7 199.5,264.7 201.1,262.9 C202.7,261.0 203.6,258.2 205.5,257.4 C207.3,256.5 210.9,255.9 211.5,258.0 Z'/><path d='M178.4,274.8 C176.3,274.4 173.9,268.0 172.8,264.1 C171.8,260.2 172.3,257.2 172.7,253.1 C173.0,249.0 172.6,242.2 174.5,241.4 C176.5,240.6 182.4,246.4 183.3,248.7 C184.2,251.0 180.1,251.9 179.6,254.1 C179.0,256.4 179.1,258.9 180.0,261.0 C180.9,263.2 184.9,263.8 184.6,266.3 C184.3,268.8 180.6,275.2 178.4,274.8 Z'/><path d='M182.7,235.3 C184.0,233.9 190.0,236.6 194.4,236.9 C198.8,237.2 203.8,234.9 207.1,237.0 C210.5,239.0 213.6,245.7 213.0,248.3 C212.3,251.0 206.1,252.0 203.6,251.8 C201.1,251.6 200.9,248.6 199.1,247.1 C197.3,245.7 195.7,244.3 193.5,243.9 C191.3,243.5 188.9,246.4 187.0,244.9 C185.0,243.3 181.3,236.7 182.7,235.3 Z'/><path d='M44.5,85.7 C42.1,86.4 36.1,81.9 33.7,78.5 C31.4,75.1 31.9,70.7 31.4,66.7 C30.8,62.6 29.5,57.5 30.7,56.0 C31.8,54.4 36.3,56.6 37.8,58.2 C39.3,59.8 38.2,62.5 38.8,64.8 C39.3,67.2 39.3,69.6 40.8,71.3 C42.3,73.1 46.4,72.0 47.1,74.6 C47.7,77.2 46.9,85.0 44.5,85.7 Z'/><path d='M35.5,48.4 C35.9,45.8 40.1,40.6 43.7,39.4 C47.4,38.2 51.9,40.4 55.7,42.0 C59.5,43.6 64.1,46.3 64.8,48.3 C65.6,50.3 61.8,52.6 59.8,53.0 C57.7,53.4 55.7,50.8 53.3,50.3 C51.0,49.8 48.9,49.6 46.7,50.2 C44.6,50.9 43.5,54.3 41.4,54.0 C39.4,53.6 35.1,51.0 35.5,48.4 Z'/><path d='M72.7,55.1 C74.5,56.7 72.3,63.2 71.2,67.5 C70.1,71.9 69.7,76.8 66.7,79.3 C63.7,81.8 56.9,82.4 54.3,81.3 C51.8,80.3 51.7,75.1 52.5,73.2 C53.3,71.4 57.1,72.4 58.7,70.9 C60.2,69.4 60.6,67.1 61.1,64.9 C61.6,62.6 59.3,60.3 61.4,58.5 C63.5,56.8 71.0,53.5 72.7,55.1 Z'/><path d='M120.0,69.8 C119.3,72.0 114.1,76.4 110.1,77.3 C106.1,78.2 102.0,76.6 97.9,74.8 C93.8,73.0 89.0,71.0 87.2,67.3 C85.4,63.6 86.3,56.4 87.8,54.3 C89.4,52.3 94.5,54.4 95.9,56.0 C97.4,57.5 94.8,60.9 95.8,63.1 C96.7,65.2 99.0,66.8 101.2,67.9 C103.5,69.0 106.1,69.7 108.4,69.2 C110.7,68.6 111.9,64.7 114.0,64.8 C116.1,64.9 120.7,67.5 120.0,69.8 Z'/><path d='M92.6,46.7 C93.5,44.6 97.9,39.5 101.8,38.4 C105.7,37.4 110.8,38.6 114.3,40.8 C117.8,42.9 119.6,46.8 121.1,50.5 C122.7,54.2 123.5,59.7 122.8,61.4 C122.0,63.1 117.9,61.8 116.8,60.2 C115.7,58.6 117.7,55.0 116.6,52.7 C115.5,50.5 113.3,49.0 110.9,47.8 C108.5,46.7 106.0,45.9 103.5,46.4 C101.0,46.9 99.1,50.4 97.1,50.5 C95.1,50.6 91.8,48.9 92.6,46.7 Z'/><path d='M144.0,70.9 C142.6,69.3 143.1,63.3 144.4,59.8 C145.7,56.3 148.4,54.2 151.2,51.3 C154.1,48.4 158.3,43.2 160.2,43.8 C162.2,44.4 162.9,52.3 162.1,54.6 C161.3,56.9 157.3,55.1 155.8,56.6 C154.3,58.1 154.5,60.6 153.9,62.8 C153.3,65.0 154.2,67.4 152.4,68.8 C150.7,70.3 145.5,72.5 144.0,70.9 Z'/><path d='M170.2,44.6 C172.4,44.1 176.9,48.9 179.3,52.0 C181.6,55.2 183.1,58.6 183.4,62.2 C183.6,65.9 182.5,70.9 180.8,72.2 C179.1,73.6 175.0,71.3 174.0,69.7 C173.1,68.2 175.9,65.8 175.5,63.8 C175.2,61.8 173.5,60.3 172.1,58.6 C170.6,57.0 167.7,57.0 167.3,54.4 C167.0,51.9 168.1,45.0 170.2,44.6 Z'/><path d='M177.0,79.5 C176.3,81.4 171.9,84.0 168.3,85.3 C164.6,86.6 160.6,87.7 156.9,86.7 C153.2,85.6 148.2,81.7 147.9,79.3 C147.6,76.9 152.9,73.7 155.2,73.3 C157.4,72.9 158.2,76.4 160.2,77.0 C162.2,77.7 164.2,77.4 166.4,77.0 C168.6,76.6 170.5,74.3 172.4,74.8 C174.3,75.2 177.8,77.6 177.0,79.5 Z'/><path d='M229.5,68.7 C228.9,70.4 225.7,72.4 223.5,72.5 C221.3,72.6 219.4,70.1 217.2,69.1 C214.9,68.1 211.4,68.3 211.1,67.0 C210.8,65.6 214.1,62.3 215.6,61.6 C217.0,60.9 217.8,62.7 219.1,63.1 C220.4,63.4 221.4,63.6 222.8,63.6 C224.1,63.6 225.5,62.2 226.7,63.2 C227.9,64.1 230.1,67.1 229.5,68.7 Z'/><path d='M206.2,62.0 C204.7,61.4 204.9,57.9 204.4,55.4 C203.9,52.9 202.7,50.4 203.4,48.0 C204.1,45.7 206.5,42.7 208.3,42.5 C210.2,42.3 213.2,45.6 213.8,47.1 C214.5,48.6 212.4,49.4 212.0,50.8 C211.6,52.2 211.4,53.4 211.5,54.8 C211.6,56.3 213.6,57.5 212.7,58.7 C211.7,60.0 207.7,62.6 206.2,62.0 Z'/><path d='M214.4,39.1 C215.0,37.6 218.2,37.4 220.6,36.9 C223.0,36.4 225.2,35.7 227.7,36.1 C230.2,36.5 234.5,37.1 234.6,39.1 C234.7,41.0 229.9,45.6 228.2,46.7 C226.4,47.7 226.1,45.6 224.8,45.1 C223.6,44.6 222.5,43.9 221.2,43.9 C219.9,43.9 218.7,46.0 217.5,45.2 C216.3,44.3 213.8,40.5 214.4,39.1 Z'/><path d='M236.4,46.7 C238.0,47.3 239.7,50.1 240.5,52.5 C241.3,54.9 241.5,57.6 240.7,60.0 C239.8,62.3 238.0,65.7 235.9,65.7 C233.8,65.7 230.0,61.5 229.1,59.9 C228.1,58.3 230.2,58.0 230.8,56.8 C231.4,55.6 232.5,54.5 232.6,53.1 C232.7,51.8 230.7,50.4 231.4,49.2 C232.1,48.1 234.7,46.1 236.4,46.7 Z'/><path d='M-10.4,68.9 C-11.0,70.7 -14.0,72.8 -16.4,73.5 C-18.9,74.2 -21.5,73.7 -24.0,72.7 C-26.5,71.8 -30.0,70.3 -30.1,68.4 C-30.2,66.4 -26.4,63.0 -24.8,62.1 C-23.2,61.2 -22.4,62.9 -21.0,63.5 C-19.6,64.0 -18.5,65.0 -17.1,65.0 C-15.7,64.9 -14.4,62.7 -13.2,63.4 C-12.0,64.1 -9.8,67.1 -10.4,68.9 Z'/><path d='M-31.9,61.1 C-33.7,60.5 -36.7,57.8 -37.2,55.5 C-37.7,53.3 -35.6,51.0 -34.5,48.7 C-33.5,46.4 -32.9,43.0 -31.3,42.8 C-29.8,42.5 -26.7,45.8 -26.0,47.3 C-25.3,48.8 -26.9,49.6 -27.5,51.0 C-28.0,52.3 -29.0,53.5 -28.9,54.9 C-28.9,56.3 -26.7,57.6 -27.2,58.7 C-27.8,59.8 -30.1,61.6 -31.9,61.1 Z'/><path d='M-25.5,39.3 C-24.9,37.8 -21.8,36.9 -19.4,36.3 C-17.1,35.8 -14.5,35.3 -12.3,36.2 C-10.1,37.1 -7.4,39.4 -7.3,41.3 C-7.3,43.2 -10.5,46.2 -11.9,46.7 C-13.2,47.3 -13.6,44.7 -14.9,44.2 C-16.1,43.7 -17.4,44.0 -18.8,44.1 C-20.2,44.2 -21.6,45.4 -22.8,44.6 C-24.0,43.7 -26.1,40.8 -25.5,39.3 Z'/><path d='M-4.2,47.0 C-2.9,47.6 -1.6,50.5 -1.2,52.6 C-0.9,54.8 -1.5,56.8 -2.1,59.1 C-2.7,61.4 -3.0,65.1 -4.6,65.3 C-6.2,65.5 -10.1,61.5 -10.8,60.0 C-11.6,58.5 -9.2,58.1 -8.9,56.9 C-8.5,55.7 -8.9,54.6 -8.8,53.3 C-8.8,51.9 -9.5,50.4 -8.7,49.3 C-7.9,48.1 -5.6,46.4 -4.2,47.0 Z'/><path d='M8.0,124.5 C5.6,124.5 1.8,119.7 0.4,116.1 C-1.0,112.6 -0.6,108.8 0.1,104.9 C0.8,101.0 2.3,95.5 4.2,94.6 C6.0,93.7 9.7,97.8 10.5,99.9 C11.2,102.0 8.4,103.9 8.2,106.2 C8.1,108.4 8.6,110.4 9.6,112.3 C10.6,114.2 14.1,114.4 13.8,116.6 C13.5,118.8 10.4,124.6 8.0,124.5 Z'/><path d='M11.5,88.8 C12.9,86.8 19.1,85.1 22.9,85.7 C26.8,86.2 29.8,89.3 32.9,92.0 C36.0,94.7 40.7,98.5 40.3,100.7 C39.8,102.9 32.9,104.6 30.5,104.2 C28.2,103.9 28.9,100.4 27.3,98.9 C25.7,97.5 23.8,96.5 21.6,96.1 C19.3,95.7 16.8,98.0 15.0,96.7 C13.1,95.3 10.0,90.8 11.5,88.8 Z'/><path d='M40.6,110.2 C41.3,112.2 38.7,117.5 36.3,120.5 C33.9,123.4 30.8,124.7 27.1,126.5 C23.5,128.3 17.6,131.8 15.9,130.5 C14.3,129.3 16.4,121.7 17.9,119.6 C19.4,117.5 22.2,119.7 24.2,118.8 C26.2,118.0 27.4,116.6 28.9,114.8 C30.4,113.1 30.4,110.2 32.5,109.3 C34.6,108.5 39.9,108.2 40.6,110.2 Z'/><path d='M247.2,125.6 C245.4,125.0 243.9,119.0 242.5,115.3 C241.0,111.5 239.1,108.6 239.3,104.8 C239.4,100.9 240.9,94.4 243.1,93.7 C245.4,93.0 251.0,98.8 251.8,101.0 C252.6,103.3 247.9,104.0 247.5,106.0 C247.1,108.1 248.8,110.1 249.7,112.3 C250.6,114.5 253.0,115.9 252.5,118.3 C252.1,120.7 249.0,126.1 247.2,125.6 Z'/><path d='M252.1,90.3 C253.5,88.6 258.9,87.3 262.7,87.5 C266.5,87.7 270.7,88.9 273.4,91.4 C276.1,93.9 278.0,99.4 277.7,101.7 C277.4,103.9 273.4,104.5 271.6,103.8 C269.9,103.2 269.8,99.3 267.9,98.2 C266.1,97.0 263.7,97.5 261.4,97.3 C259.1,97.1 256.8,98.3 255.1,97.0 C253.5,95.8 250.8,92.0 252.1,90.3 Z'/><path d='M280.7,110.2 C281.9,112.5 280.4,118.6 278.2,121.9 C275.9,125.2 271.9,128.1 268.0,128.7 C264.2,129.4 258.6,127.6 256.8,125.7 C255.0,123.8 256.7,119.4 258.1,118.4 C259.5,117.4 262.5,120.4 264.6,119.9 C266.7,119.4 268.8,117.6 270.0,115.6 C271.2,113.7 269.5,110.2 271.4,109.2 C273.4,108.2 279.4,107.9 280.7,110.2 Z'/><path d='M91.0,123.3 C90.7,126.1 87.5,133.0 83.4,135.6 C79.2,138.1 73.1,138.8 68.0,137.6 C62.8,136.4 57.7,133.2 54.8,128.9 C52.0,124.6 51.1,116.7 52.1,114.0 C53.1,111.3 58.1,112.7 60.3,114.0 C62.6,115.3 62.7,119.1 64.6,121.3 C66.5,123.5 68.4,125.6 70.9,126.2 C73.4,126.8 76.1,125.7 78.6,124.6 C81.2,123.5 82.8,120.2 85.0,120.0 C87.2,119.8 91.3,120.5 91.0,123.3 Z'/><path d='M56.1,104.2 C56.4,101.8 61.7,96.7 65.8,95.2 C69.9,93.6 74.0,94.6 78.7,95.4 C83.5,96.3 89.4,96.5 92.2,99.8 C95.1,103.2 95.4,111.4 94.5,114.0 C93.6,116.6 89.4,115.3 87.4,114.0 C85.4,112.7 85.3,108.7 83.4,106.7 C81.5,104.6 79.6,103.6 76.9,102.6 C74.2,101.7 70.9,100.5 68.6,101.5 C66.2,102.6 66.2,108.0 63.9,108.5 C61.7,109.0 55.8,106.6 56.1,104.2 Z'/><path d='M126.5,122.1 C124.2,122.6 118.0,122.0 115.7,119.5 C113.4,117.1 114.1,112.6 113.5,108.7 C113.0,104.8 111.4,99.1 112.8,97.8 C114.2,96.5 119.7,99.6 121.2,101.4 C122.7,103.2 120.9,105.5 121.3,107.6 C121.8,109.6 122.5,111.2 123.8,112.9 C125.0,114.5 127.9,114.9 128.4,116.6 C128.9,118.3 128.8,121.5 126.5,122.1 Z'/><path d='M120.2,92.5 C120.8,90.2 125.0,86.6 128.5,85.5 C132.0,84.5 136.3,85.0 139.7,86.5 C143.2,88.1 147.3,92.0 147.6,94.2 C147.9,96.5 143.5,98.6 141.4,99.0 C139.3,99.3 137.9,96.7 135.9,96.1 C133.9,95.5 132.2,95.4 130.2,95.7 C128.3,96.1 126.9,98.7 125.1,98.1 C123.3,97.5 119.6,94.8 120.2,92.5 Z'/><path d='M150.8,102.3 C151.6,103.8 149.8,108.8 148.4,112.1 C147.1,115.3 145.8,117.7 143.3,120.3 C140.8,122.9 136.3,126.9 134.5,126.5 C132.7,126.1 132.6,119.9 133.4,117.9 C134.3,115.9 137.9,116.9 139.4,115.4 C141.0,114.0 141.5,111.9 142.3,109.8 C143.0,107.7 142.0,105.1 143.5,103.7 C145.0,102.4 149.9,100.8 150.8,102.3 Z'/><path d='M212.8,116.6 C213.1,119.2 208.5,126.3 204.5,128.9 C200.6,131.6 195.6,131.5 191.0,131.4 C186.3,131.3 182.4,130.6 178.7,128.2 C174.9,125.8 170.6,120.3 170.3,118.1 C170.0,115.9 174.7,115.3 177.0,116.0 C179.3,116.7 180.7,120.3 183.1,121.8 C185.6,123.4 187.9,124.7 190.6,124.6 C193.3,124.5 196.0,123.2 198.1,121.4 C200.3,119.6 199.9,115.4 202.6,114.5 C205.2,113.7 212.4,114.0 212.8,116.6 Z'/><path d='M170.5,108.0 C170.3,105.6 172.9,98.9 176.3,96.0 C179.6,93.2 184.4,92.1 189.0,92.0 C193.6,91.9 197.7,92.9 201.6,95.4 C205.6,97.8 211.1,103.1 210.9,105.5 C210.8,107.9 203.2,109.5 200.8,108.7 C198.4,107.9 199.7,102.7 197.7,101.0 C195.6,99.3 192.2,99.0 189.4,99.2 C186.5,99.5 184.0,100.6 181.8,102.4 C179.5,104.3 179.1,108.4 177.0,109.4 C175.0,110.4 170.6,110.4 170.5,108.0 Z'/><path d='M49.0,175.5 C47.8,177.2 43.7,179.3 41.4,178.7 C39.0,178.2 38.1,174.2 35.9,172.4 C33.7,170.6 29.3,170.2 29.3,168.7 C29.3,167.3 34.3,164.6 36.1,164.3 C38.0,164.1 38.2,166.6 39.5,167.3 C40.9,168.0 42.2,167.8 43.7,168.1 C45.3,168.5 47.0,168.0 47.9,169.3 C48.9,170.6 50.2,173.8 49.0,175.5 Z'/><path d='M26.5,161.4 C25.6,160.4 29.0,157.0 29.5,154.3 C30.1,151.7 28.6,148.9 29.7,146.6 C30.9,144.4 33.9,141.6 35.7,141.9 C37.5,142.2 39.4,146.4 39.8,148.3 C40.2,150.2 38.7,151.0 37.9,152.3 C37.0,153.6 35.6,154.2 35.1,155.6 C34.5,156.9 36.4,158.9 34.9,159.9 C33.4,161.0 27.5,162.4 26.5,161.4 Z'/><path d='M42.5,137.5 C43.6,136.1 47.5,138.3 50.3,138.9 C53.1,139.5 55.6,139.4 58.0,140.8 C60.5,142.2 64.4,144.5 63.9,146.5 C63.4,148.6 57.3,151.6 55.2,152.1 C53.1,152.6 53.5,149.7 52.3,149.0 C51.0,148.3 49.7,148.6 48.2,148.2 C46.7,147.8 45.1,148.7 44.1,146.8 C43.0,144.8 41.3,138.9 42.5,137.5 Z'/><path d='M65.7,154.6 C67.0,155.7 65.7,159.8 64.8,162.2 C63.9,164.6 61.9,165.7 60.5,168.2 C59.2,170.6 58.9,175.9 57.4,175.7 C55.8,175.6 52.5,169.4 51.9,167.3 C51.4,165.1 53.7,165.2 54.5,163.9 C55.3,162.7 55.9,161.8 56.5,160.3 C57.0,158.9 56.0,157.0 57.7,156.0 C59.3,155.0 64.4,153.5 65.7,154.6 Z'/><path d='M82.0,173.4 C80.6,172.1 82.3,166.0 82.9,162.0 C83.5,157.9 83.2,154.5 85.1,151.0 C87.1,147.6 91.7,142.7 93.9,142.9 C96.0,143.0 97.7,149.4 97.3,151.8 C96.9,154.1 92.8,154.0 91.5,155.9 C90.2,157.9 90.2,160.3 90.1,162.7 C90.0,165.1 92.4,167.3 91.0,169.2 C89.5,171.2 83.5,174.8 82.0,173.4 Z'/><path d='M103.8,142.5 C105.9,141.6 111.7,143.9 114.9,146.4 C118.0,148.8 119.5,152.2 121.3,156.0 C123.0,159.8 125.9,165.8 124.6,167.5 C123.3,169.3 116.1,167.4 114.0,165.9 C112.0,164.4 114.2,161.5 113.3,159.3 C112.5,157.2 111.1,155.5 109.3,154.0 C107.4,152.6 104.0,153.3 103.0,151.3 C102.1,149.2 101.6,143.4 103.8,142.5 Z'/><path d='M119.7,176.3 C119.8,179.0 115.4,184.2 111.7,185.9 C108.0,187.5 103.1,186.6 99.2,185.4 C95.3,184.2 90.8,181.1 89.9,179.0 C89.0,176.9 92.4,174.1 94.2,173.6 C96.1,173.2 98.1,176.2 100.4,176.4 C102.6,176.6 104.8,175.9 106.8,174.9 C108.8,173.8 109.1,170.2 111.4,170.5 C113.7,170.7 119.7,173.5 119.7,176.3 Z'/><path d='M174.1,168.5 C173.0,170.7 166.6,174.5 162.3,174.8 C158.0,175.0 153.7,172.6 150.2,170.0 C146.7,167.4 144.5,164.3 143.0,160.4 C141.5,156.5 140.4,150.0 141.6,148.3 C142.9,146.6 148.4,149.2 149.9,150.9 C151.5,152.6 149.4,155.5 150.2,157.7 C151.0,159.9 152.5,161.6 154.5,163.0 C156.5,164.3 158.8,165.3 161.2,165.3 C163.7,165.2 166.0,162.0 168.3,162.6 C170.6,163.2 175.2,166.4 174.1,168.5 Z'/><path d='M147.7,141.3 C148.8,139.8 154.2,137.8 158.2,137.3 C162.1,136.8 166.2,136.5 169.6,138.4 C172.9,140.3 175.4,143.9 176.8,147.7 C178.1,151.4 178.1,157.5 177.1,159.3 C176.1,161.0 172.5,159.1 171.3,157.5 C170.0,155.9 170.9,152.6 169.9,150.3 C168.9,147.9 167.8,145.7 165.8,144.5 C163.8,143.4 161.4,143.7 158.9,144.0 C156.4,144.2 154.0,146.2 151.9,145.7 C149.9,145.2 146.5,142.8 147.7,141.3 Z'/><path d='M217.5,179.9 C215.3,181.0 208.8,182.6 205.7,180.8 C202.6,179.1 201.7,174.2 200.3,170.4 C199.0,166.7 197.1,161.7 198.2,160.0 C199.4,158.2 205.1,159.5 206.7,160.8 C208.4,162.1 206.3,165.2 207.2,167.2 C208.0,169.1 209.8,170.3 211.7,171.7 C213.6,173.0 216.6,173.3 217.6,174.7 C218.7,176.2 219.6,178.8 217.5,179.9 Z'/><path d='M200.5,151.2 C200.4,148.8 204.8,144.4 208.3,142.8 C211.7,141.3 215.8,141.8 219.5,142.6 C223.2,143.4 227.8,145.4 228.7,147.2 C229.7,149.0 226.5,152.0 224.7,152.7 C223.0,153.4 220.9,151.3 218.8,151.2 C216.7,151.2 214.9,151.3 213.0,152.2 C211.2,153.1 210.9,156.4 208.6,156.2 C206.4,156.0 200.5,153.6 200.5,151.2 Z'/><path d='M236.6,152.0 C239.0,153.1 241.5,159.6 240.8,163.2 C240.1,166.9 235.4,168.9 232.8,172.2 C230.3,175.5 228.7,181.7 226.8,181.7 C224.9,181.7 222.4,174.5 222.5,172.1 C222.6,169.7 225.9,170.0 227.2,168.3 C228.4,166.6 229.2,164.7 229.3,162.6 C229.3,160.6 226.1,158.8 227.5,156.9 C228.8,155.0 234.2,150.8 236.6,152.0 Z'/><path d='M-22.6,183.6 C-24.7,184.8 -30.9,182.7 -33.9,180.3 C-37.0,177.9 -38.5,174.0 -39.6,170.4 C-40.6,166.8 -41.2,161.9 -39.9,160.2 C-38.7,158.4 -34.1,159.7 -32.6,160.9 C-31.1,162.1 -32.4,164.5 -31.7,166.6 C-31.0,168.7 -30.5,171.3 -28.8,172.4 C-27.1,173.6 -23.4,171.2 -22.3,173.2 C-21.2,175.2 -20.5,182.3 -22.6,183.6 Z'/><path d='M-38.9,151.6 C-38.9,149.3 -34.9,145.0 -31.5,143.2 C-28.2,141.4 -24.3,141.3 -20.4,141.7 C-16.5,142.0 -10.7,143.2 -9.7,145.0 C-8.6,146.8 -12.6,150.7 -14.6,151.8 C-16.7,152.9 -18.8,151.3 -21.2,151.2 C-23.5,151.1 -25.5,150.4 -27.4,151.3 C-29.4,152.1 -29.8,155.9 -31.8,155.9 C-33.9,156.0 -39.0,153.8 -38.9,151.6 Z'/><path d='M-4.7,152.7 C-2.8,153.8 -2.0,159.2 -1.9,163.1 C-1.9,166.9 -2.1,171.4 -4.4,174.1 C-6.7,176.9 -12.5,178.4 -14.7,178.3 C-17.0,178.1 -17.2,175.2 -16.9,173.4 C-16.7,171.5 -14.5,169.9 -13.3,168.0 C-12.1,166.0 -10.6,164.6 -10.4,162.6 C-10.3,160.6 -13.4,158.6 -12.4,156.8 C-11.4,155.0 -6.6,151.5 -4.7,152.7 Z'/><path d='M40.6,217.8 C41.4,220.3 40.3,227.0 37.6,229.7 C34.9,232.5 29.9,232.7 25.7,233.0 C21.5,233.4 15.9,233.0 14.4,231.5 C12.8,230.0 15.3,225.9 17.1,224.5 C18.8,223.2 21.6,224.5 24.1,224.1 C26.6,223.6 29.2,223.6 30.9,222.0 C32.5,220.5 31.3,216.2 33.1,215.4 C34.8,214.7 39.8,215.2 40.6,217.8 Z'/><path d='M7.7,225.2 C5.2,224.5 -0.5,220.3 -1.4,216.7 C-2.2,213.1 1.0,208.6 3.0,205.1 C5.1,201.5 8.1,197.6 10.0,197.0 C12.0,196.4 13.8,199.9 13.9,201.9 C14.1,203.8 11.4,205.7 10.9,207.9 C10.3,210.2 10.4,211.9 10.7,214.3 C10.9,216.6 12.9,219.0 12.3,221.0 C11.8,222.9 10.2,226.0 7.7,225.2 Z'/><path d='M16.9,189.7 C18.8,188.0 25.9,187.7 29.6,189.4 C33.3,191.0 35.4,195.4 37.6,198.9 C39.8,202.5 42.7,206.9 41.9,209.0 C41.1,211.0 35.0,211.3 33.2,210.3 C31.5,209.3 33.4,205.4 32.2,203.5 C30.9,201.6 28.5,200.5 26.1,199.7 C23.8,198.9 20.7,200.9 19.1,199.1 C17.4,197.3 15.0,191.5 16.9,189.7 Z'/><path d='M283.3,218.6 C283.6,220.7 278.8,224.6 275.7,227.6 C272.6,230.5 269.8,234.5 266.1,235.0 C262.3,235.4 256.4,232.2 254.9,230.1 C253.4,227.9 256.0,224.3 257.6,223.1 C259.3,222.0 261.9,224.2 264.1,223.8 C266.2,223.3 267.8,222.1 269.6,220.6 C271.3,219.1 271.3,216.0 273.8,215.6 C276.2,215.3 282.9,216.4 283.3,218.6 Z'/><path d='M244.8,228.0 C242.4,227.3 240.2,220.5 240.0,216.4 C239.9,212.4 242.6,209.6 243.9,205.4 C245.2,201.3 245.5,194.3 247.2,193.5 C249.0,192.8 253.1,198.8 253.5,201.3 C253.8,203.8 249.9,205.1 249.4,207.4 C248.8,209.8 249.6,212.1 250.3,214.4 C251.0,216.6 254.3,217.6 253.3,220.1 C252.3,222.5 247.2,228.6 244.8,228.0 Z'/><path d='M257.5,192.4 C259.4,190.9 265.4,189.5 269.2,190.5 C273.1,191.4 276.8,194.3 279.2,197.6 C281.5,200.9 283.2,206.7 282.2,209.0 C281.2,211.2 275.5,211.2 273.7,210.2 C272.0,209.2 273.8,205.0 272.4,203.3 C270.9,201.7 268.1,201.9 265.7,201.1 C263.3,200.3 260.5,200.6 259.0,199.0 C257.6,197.4 255.7,193.9 257.5,192.4 Z'/><path d='M44.7,-21.0 C45.0,-19.0 38.4,-15.5 34.9,-13.3 C31.5,-11.2 29.0,-9.6 25.4,-9.0 C21.7,-8.4 16.3,-8.6 14.9,-9.9 C13.5,-11.3 15.9,-15.7 17.6,-16.7 C19.2,-17.7 21.9,-15.3 24.2,-15.6 C26.4,-16.0 28.6,-17.1 30.1,-18.8 C31.7,-20.4 30.3,-24.2 32.9,-24.6 C35.5,-25.0 44.3,-23.0 44.7,-21.0 Z'/><path d='M8.0,-15.1 C6.4,-16.0 4.1,-20.6 3.1,-24.2 C2.0,-27.8 1.2,-31.5 2.2,-35.2 C3.2,-38.9 6.6,-44.2 8.7,-44.7 C10.8,-45.2 13.6,-40.3 14.0,-38.0 C14.4,-35.8 11.7,-34.3 10.9,-32.0 C10.1,-29.8 9.3,-27.9 9.6,-25.5 C9.8,-23.1 12.4,-20.7 12.1,-18.8 C11.8,-17.0 9.7,-14.1 8.0,-15.1 Z'/><path d='M17.5,-47.9 C19.2,-49.2 25.0,-48.9 28.6,-47.6 C32.2,-46.4 34.4,-43.7 37.3,-40.8 C40.2,-37.9 45.5,-33.4 44.8,-31.4 C44.1,-29.5 35.7,-28.8 33.5,-29.7 C31.2,-30.7 33.6,-34.8 32.3,-36.6 C30.9,-38.4 28.3,-39.1 26.0,-39.7 C23.6,-40.4 20.7,-38.8 19.2,-40.3 C17.7,-41.7 15.8,-46.6 17.5,-47.9 Z'/><path d='M69.3,220.9 C66.9,220.5 60.8,217.2 59.0,213.6 C57.3,210.0 58.2,204.7 59.7,200.8 C61.2,196.8 64.2,194.4 67.6,191.7 C71.0,189.0 76.6,185.4 78.6,185.8 C80.5,186.3 79.6,192.1 78.3,194.1 C77.1,196.2 73.4,195.6 71.6,197.3 C69.8,198.9 69.0,200.9 68.3,203.2 C67.6,205.5 67.1,207.8 67.7,210.1 C68.4,212.4 71.8,214.2 72.1,216.1 C72.4,218.1 71.6,221.4 69.3,220.9 Z'/><path d='M88.1,188.6 C90.2,189.2 93.3,195.0 95.1,199.1 C96.9,203.3 98.9,207.6 97.9,211.7 C96.9,215.8 93.2,219.4 89.5,221.7 C85.8,224.0 79.6,225.1 77.5,224.4 C75.3,223.6 76.5,219.4 77.7,217.6 C78.8,215.7 82.0,215.7 84.0,214.2 C86.0,212.7 88.2,211.3 88.9,209.1 C89.5,207.0 88.4,204.6 87.5,202.2 C86.6,199.8 83.8,198.4 83.9,195.9 C84.0,193.5 86.1,188.1 88.1,188.6 Z'/><path d='M146.5,232.3 C145.2,234.6 140.5,239.4 136.5,240.0 C132.6,240.6 128.1,238.0 124.7,235.5 C121.2,233.0 117.2,228.6 117.4,226.1 C117.6,223.6 123.4,221.6 125.7,221.6 C127.9,221.6 128.1,225.2 130.0,226.3 C131.9,227.4 133.9,227.6 136.3,227.8 C138.7,228.0 141.5,226.7 143.4,227.5 C145.2,228.3 147.7,230.1 146.5,232.3 Z'/><path d='M112.4,217.1 C110.7,214.9 112.4,207.7 114.8,204.4 C117.2,201.0 122.0,199.9 125.9,198.5 C129.9,197.1 134.6,195.6 136.5,196.6 C138.4,197.7 137.6,202.8 136.3,204.3 C135.0,205.7 131.7,203.7 129.4,204.6 C127.2,205.5 124.9,207.3 124.0,209.4 C123.0,211.6 126.3,215.2 124.2,216.6 C122.1,217.9 114.1,219.3 112.4,217.1 Z'/><path d='M146.8,195.1 C149.0,195.2 152.9,201.1 154.4,204.8 C155.9,208.6 154.8,211.8 155.1,216.0 C155.5,220.3 158.1,227.4 156.5,228.6 C154.9,229.7 147.5,224.5 146.2,222.2 C144.8,220.0 148.5,218.4 148.7,216.0 C149.0,213.7 148.7,211.1 147.4,209.1 C146.2,207.0 142.0,207.1 141.9,204.6 C141.8,202.1 144.5,195.1 146.8,195.1 Z'/><path d='M146.6,-7.4 C145.5,-5.1 140.5,-1.0 136.5,-0.4 C132.5,0.2 128.2,-1.8 124.5,-4.1 C120.7,-6.4 115.8,-10.6 115.9,-13.1 C116.0,-15.6 122.6,-18.1 125.0,-18.1 C127.5,-18.0 127.5,-14.1 129.5,-12.9 C131.6,-11.6 133.9,-11.2 136.3,-11.3 C138.7,-11.4 140.9,-14.2 142.8,-13.5 C144.6,-12.8 147.8,-9.8 146.6,-7.4 Z'/><path d='M112.7,-22.9 C111.8,-24.8 115.5,-30.4 117.7,-34.0 C119.9,-37.7 121.5,-41.0 124.9,-43.3 C128.3,-45.5 134.5,-47.7 136.6,-46.6 C138.7,-45.6 137.5,-39.7 136.4,-37.5 C135.2,-35.3 132.0,-35.7 130.1,-34.3 C128.1,-32.9 126.9,-31.7 125.6,-29.7 C124.3,-27.7 125.1,-24.6 122.8,-23.4 C120.5,-22.2 113.6,-21.0 112.7,-22.9 Z'/><path d='M146.0,-43.3 C148.3,-43.3 152.9,-39.1 155.1,-35.6 C157.3,-32.1 158.7,-27.9 158.3,-24.0 C157.9,-20.0 155.1,-14.7 152.8,-13.7 C150.6,-12.6 146.6,-16.2 145.7,-18.0 C144.9,-19.9 148.0,-21.7 148.2,-24.0 C148.5,-26.3 148.2,-28.6 147.1,-30.8 C146.0,-32.9 142.3,-33.6 142.1,-35.8 C141.9,-38.1 143.6,-43.4 146.0,-43.3 Z'/><path d='M176.4,214.3 C175.2,212.5 174.9,206.1 176.1,202.1 C177.3,198.1 179.7,194.4 183.2,191.9 C186.7,189.5 191.2,188.0 195.3,188.4 C199.5,188.9 204.7,192.8 206.0,194.6 C207.3,196.4 204.5,198.3 202.5,198.5 C200.5,198.6 197.5,195.5 194.9,195.5 C192.2,195.6 190.0,197.1 187.7,198.7 C185.5,200.2 183.2,201.7 182.3,204.1 C181.4,206.5 183.8,210.2 182.8,212.0 C181.7,213.8 177.6,216.0 176.4,214.3 Z'/><path d='M211.1,201.9 C212.8,203.9 215.9,210.9 214.8,214.9 C213.6,218.8 208.6,221.6 204.6,223.8 C200.6,226.0 197.1,226.9 192.7,226.9 C188.3,226.8 181.3,225.3 180.1,223.5 C178.9,221.7 183.8,217.4 186.2,216.8 C188.5,216.2 190.6,220.0 193.2,220.1 C195.7,220.2 198.1,218.8 200.2,217.2 C202.3,215.7 203.7,213.9 204.6,211.5 C205.6,209.1 204.4,205.6 205.5,203.9 C206.7,202.2 209.4,199.9 211.1,201.9 Z'/><path d='M14.5,48.0 C14.5,49.1 13.3,50.4 12.0,51.1 C10.6,51.8 8.7,52.2 7.8,51.5 C6.9,50.9 7.3,49.4 7.3,48.0 C7.3,46.6 6.9,44.9 7.7,44.4 C8.6,43.9 10.3,44.7 11.6,45.4 C13.0,46.1 14.4,46.9 14.5,48.0 Z'/><path d='M253.5,48.0 C253.5,49.3 252.7,50.1 251.6,50.8 C250.5,51.5 249.0,52.1 248.0,51.5 C247.0,50.9 246.6,49.4 246.6,48.0 C246.6,46.6 246.8,45.0 247.8,44.3 C248.9,43.6 250.9,43.8 252.0,44.5 C253.1,45.3 253.6,46.7 253.5,48.0 Z'/><path d='M70.9,38.0 C71.0,39.3 70.7,40.8 69.8,41.4 C68.9,42.0 67.6,41.8 66.3,41.1 C65.1,40.4 63.6,39.3 63.6,38.0 C63.5,36.7 64.9,35.0 66.1,34.4 C67.3,33.8 68.6,34.4 69.6,35.1 C70.5,35.8 70.9,36.7 70.9,38.0 Z'/><path d='M124.2,12.0 C124.2,13.7 123.1,15.3 121.9,15.9 C120.8,16.4 119.7,15.6 118.6,14.8 C117.6,14.0 116.8,13.3 116.7,12.0 C116.6,10.7 117.1,9.3 118.2,8.4 C119.3,7.4 121.1,6.7 122.3,7.4 C123.5,8.2 124.3,10.3 124.2,12.0 Z'/><path d='M124.5,252.0 C124.6,253.3 123.3,254.9 122.0,255.5 C120.8,256.1 119.4,255.7 118.3,255.0 C117.2,254.3 116.5,253.1 116.6,252.0 C116.6,250.9 117.5,250.2 118.6,249.6 C119.6,248.9 120.6,248.4 121.8,248.9 C123.0,249.4 124.5,250.7 124.5,252.0 Z'/><path d='M173.5,38.0 C173.4,39.9 173.2,41.4 172.0,42.2 C170.9,43.0 169.1,43.1 167.9,42.2 C166.8,41.4 166.3,40.0 166.1,38.0 C165.9,36.0 165.8,33.2 167.1,32.1 C168.4,31.0 171.4,31.4 172.6,32.6 C173.9,33.7 173.7,36.1 173.5,38.0 Z'/><path d='M227.3,12.0 C227.4,13.0 227.6,14.7 226.9,15.0 C226.2,15.4 224.8,14.4 223.9,13.8 C223.0,13.2 222.5,12.9 222.3,12.0 C222.2,11.1 222.4,9.5 223.2,9.1 C224.0,8.8 225.3,9.6 226.1,10.2 C226.9,10.8 227.1,11.0 227.3,12.0 Z'/><path d='M228.5,252.0 C228.4,253.0 227.3,253.8 226.3,254.3 C225.3,254.9 224.4,255.1 223.5,254.7 C222.5,254.2 221.6,253.2 221.6,252.0 C221.5,250.8 222.2,249.5 223.2,248.9 C224.2,248.4 225.6,248.6 226.6,249.2 C227.7,249.8 228.5,251.0 228.5,252.0 Z'/><path d='M35.3,78.0 C35.2,79.2 34.4,79.9 33.4,80.4 C32.5,80.9 31.6,80.9 30.5,80.5 C29.5,80.0 28.0,78.9 28.1,78.0 C28.1,77.1 29.5,76.5 30.7,75.8 C31.9,75.1 33.1,74.1 34.1,74.5 C35.0,75.0 35.4,76.8 35.3,78.0 Z'/><path d='M93.2,82.0 C92.9,83.1 90.8,83.6 89.5,84.0 C88.1,84.4 87.4,84.6 86.4,84.2 C85.5,83.7 84.7,82.8 84.7,82.0 C84.8,81.2 85.4,80.7 86.5,80.0 C87.7,79.3 89.3,78.0 90.6,78.4 C91.9,78.8 93.4,80.9 93.2,82.0 Z'/><path d='M148.2,78.0 C148.3,79.1 147.9,80.6 146.9,81.3 C145.9,82.0 144.4,82.0 143.1,81.3 C141.9,80.7 140.6,79.2 140.7,78.0 C140.8,76.8 142.5,76.0 143.6,75.6 C144.8,75.1 145.5,75.1 146.4,75.6 C147.3,76.1 148.1,76.9 148.2,78.0 Z'/><path d='M203.4,78.0 C203.3,78.9 202.6,79.6 201.5,80.2 C200.4,80.9 199.0,81.6 197.9,81.1 C196.8,80.7 195.9,79.1 196.0,78.0 C196.2,76.9 197.4,76.3 198.5,75.8 C199.6,75.3 200.7,75.1 201.7,75.6 C202.7,76.0 203.4,77.1 203.4,78.0 Z'/><path d='M52.3,122.0 C52.5,123.4 52.1,125.4 50.7,126.2 C49.3,127.0 46.8,126.8 45.5,125.9 C44.1,125.1 43.7,123.4 43.8,122.0 C43.9,120.6 45.0,119.7 46.2,119.1 C47.4,118.6 48.5,118.7 49.8,119.3 C51.0,119.8 52.1,120.6 52.3,122.0 Z'/><path d='M107.5,128.0 C107.6,129.4 107.9,131.3 107.0,132.1 C106.1,132.9 103.9,132.9 103.0,132.1 C102.0,131.3 102.1,129.5 102.2,128.0 C102.2,126.5 102.5,125.3 103.4,124.7 C104.2,124.2 105.6,124.4 106.4,125.1 C107.2,125.8 107.3,126.6 107.5,128.0 Z'/><path d='M165.7,120.0 C165.7,121.1 164.8,121.7 163.6,122.5 C162.4,123.3 160.7,124.4 159.5,123.9 C158.3,123.4 157.4,121.4 157.5,120.0 C157.6,118.6 158.8,117.6 160.1,117.0 C161.4,116.4 162.8,116.4 163.9,117.0 C165.0,117.6 165.8,118.9 165.7,120.0 Z'/><path d='M222.5,125.0 C222.4,126.2 222.4,126.9 221.5,127.5 C220.7,128.1 219.0,128.5 218.2,128.0 C217.4,127.5 217.4,126.3 217.3,125.0 C217.3,123.7 217.0,122.4 218.0,121.7 C219.0,121.0 221.2,120.8 222.1,121.4 C223.0,122.1 222.6,123.8 222.5,125.0 Z'/><path d='M15.3,142.0 C15.3,143.2 14.6,144.1 13.5,144.9 C12.5,145.7 11.0,146.6 9.9,146.0 C8.7,145.4 7.6,143.3 7.8,142.0 C8.0,140.7 9.6,140.2 10.7,139.6 C11.9,139.0 12.7,138.4 13.6,138.9 C14.5,139.4 15.4,140.8 15.3,142.0 Z'/><path d='M254.6,142.0 C254.7,143.3 254.8,145.0 254.0,145.5 C253.2,145.9 251.8,145.0 250.7,144.3 C249.6,143.6 248.4,143.0 248.3,142.0 C248.3,141.0 249.5,140.1 250.6,139.5 C251.6,138.9 252.9,138.5 253.7,139.0 C254.6,139.5 254.6,140.7 254.6,142.0 Z'/><path d='M75.3,152.0 C75.3,153.6 75.2,155.9 74.3,156.5 C73.4,157.0 71.6,155.7 70.6,154.8 C69.5,153.9 68.9,153.1 68.9,152.0 C68.9,150.9 69.5,149.9 70.5,149.1 C71.5,148.4 73.0,147.7 73.9,148.3 C74.9,148.8 75.2,150.4 75.3,152.0 Z'/><path d='M134.2,148.0 C134.2,149.5 133.2,151.2 132.1,151.7 C131.0,152.1 129.8,150.9 128.8,150.1 C127.7,149.4 127.1,149.1 127.0,148.0 C126.9,146.9 127.1,145.4 128.1,144.7 C129.1,144.0 130.9,143.7 132.1,144.4 C133.3,145.0 134.2,146.5 134.2,148.0 Z'/><path d='M193.3,145.0 C193.3,146.9 191.9,148.8 190.4,149.8 C188.8,150.8 186.9,151.1 185.5,150.1 C184.1,149.2 183.2,146.7 183.3,145.0 C183.5,143.3 184.9,142.4 186.3,141.4 C187.7,140.5 188.9,139.5 190.3,140.2 C191.7,140.9 193.3,143.1 193.3,145.0 Z'/><path d='M45.9,192.0 C45.8,193.0 44.8,193.9 43.7,194.4 C42.6,194.9 41.2,195.0 40.2,194.5 C39.3,194.0 38.8,193.0 38.8,192.0 C38.9,191.0 39.4,190.2 40.4,189.7 C41.4,189.2 42.7,189.1 43.8,189.5 C44.8,190.0 45.9,191.0 45.9,192.0 Z'/><path d='M100.8,188.0 C100.9,189.2 101.1,190.7 100.2,191.2 C99.3,191.7 97.2,191.2 96.2,190.6 C95.2,189.9 95.2,189.2 95.1,188.0 C95.0,186.8 94.8,185.3 95.8,184.8 C96.7,184.2 98.8,184.7 99.8,185.4 C100.8,186.0 100.7,186.8 100.8,188.0 Z'/><path d='M159.9,195.0 C159.7,196.5 157.7,197.0 156.4,197.7 C155.1,198.3 154.4,198.7 153.3,198.2 C152.2,197.6 151.0,196.6 150.8,195.0 C150.7,193.4 151.2,191.3 152.5,190.3 C153.8,189.4 156.0,189.5 157.5,190.4 C158.9,191.3 160.1,193.5 159.9,195.0 Z'/><path d='M218.0,190.0 C218.0,191.5 218.1,193.0 217.0,193.8 C216.0,194.6 214.0,194.8 212.9,194.1 C211.7,193.3 211.2,191.3 211.4,190.0 C211.5,188.7 212.6,188.4 213.7,187.6 C214.9,186.8 216.2,185.6 217.1,186.1 C217.9,186.6 218.0,188.5 218.0,190.0 Z'/><path d='M14.7,185.0 C14.7,186.1 14.4,186.9 13.5,187.4 C12.6,188.0 11.2,188.2 10.4,187.7 C9.5,187.2 9.3,186.0 9.3,185.0 C9.3,184.0 9.6,183.1 10.5,182.5 C11.4,181.9 13.0,181.5 13.8,182.0 C14.7,182.5 14.8,183.9 14.7,185.0 Z'/><path d='M255.4,185.0 C255.6,186.1 254.8,187.8 253.9,188.2 C252.9,188.7 251.7,188.0 250.7,187.3 C249.7,186.7 248.9,186.1 248.8,185.0 C248.7,183.9 249.2,182.2 250.1,181.7 C251.0,181.3 252.2,182.2 253.3,182.8 C254.3,183.5 255.3,183.9 255.4,185.0 Z'/><path d='M65.4,230.0 C65.3,231.1 65.0,231.8 63.7,232.6 C62.5,233.4 60.7,234.6 59.2,234.1 C57.8,233.6 56.2,231.5 56.3,230.0 C56.4,228.5 58.1,227.1 59.7,226.5 C61.2,226.0 62.9,226.3 64.0,227.0 C65.1,227.7 65.4,228.9 65.4,230.0 Z'/><path d='M67.1,-10.0 C67.1,-8.4 65.9,-6.7 64.4,-5.8 C62.9,-5.0 60.8,-4.9 59.5,-5.7 C58.2,-6.6 57.9,-8.4 57.9,-10.0 C58.0,-11.6 58.5,-13.0 59.8,-13.8 C61.1,-14.6 62.9,-14.8 64.3,-14.0 C65.8,-13.3 67.1,-11.6 67.1,-10.0 Z'/><path d='M122.6,235.0 C122.5,236.5 122.8,238.1 122.0,238.8 C121.1,239.4 119.3,239.1 118.2,238.4 C117.1,237.6 116.7,236.5 116.6,235.0 C116.6,233.5 116.8,231.8 117.9,231.0 C119.0,230.3 121.1,230.4 122.0,231.2 C123.0,231.9 122.6,233.5 122.6,235.0 Z'/><path d='M123.8,-5.0 C123.6,-3.9 122.3,-3.3 121.3,-2.8 C120.3,-2.3 119.6,-2.2 118.7,-2.7 C117.7,-3.1 116.6,-3.8 116.4,-5.0 C116.2,-6.2 116.7,-8.1 117.8,-8.8 C118.9,-9.5 120.8,-9.2 122.0,-8.4 C123.2,-7.6 123.9,-6.1 123.8,-5.0 Z'/><path d='M181.5,230.0 C181.5,231.8 181.6,233.6 180.4,234.5 C179.2,235.5 176.8,235.6 175.5,234.7 C174.2,233.8 173.7,231.5 173.9,230.0 C174.1,228.5 175.1,228.0 176.4,227.1 C177.7,226.2 179.4,224.9 180.4,225.5 C181.4,226.1 181.5,228.2 181.5,230.0 Z'/><path d='M182.4,-10.0 C182.4,-8.4 181.6,-6.7 180.3,-6.0 C179.0,-5.3 177.1,-5.6 175.9,-6.4 C174.7,-7.2 174.2,-8.7 174.2,-10.0 C174.3,-11.3 175.2,-12.1 176.4,-12.8 C177.6,-13.6 179.0,-14.4 180.2,-13.9 C181.5,-13.3 182.4,-11.6 182.4,-10.0 Z'/><path d='M235.4,228.0 C235.5,229.0 234.9,230.5 233.9,231.0 C232.9,231.5 231.5,231.1 230.4,230.5 C229.3,229.9 228.5,229.0 228.5,228.0 C228.5,227.0 229.4,225.9 230.4,225.5 C231.4,225.0 232.4,225.2 233.5,225.8 C234.5,226.3 235.3,227.0 235.4,228.0 Z'/><path d='M-4.8,228.0 C-4.9,229.2 -5.5,230.0 -6.5,230.6 C-7.5,231.3 -8.9,231.8 -9.9,231.3 C-10.9,230.7 -11.4,229.1 -11.4,228.0 C-11.3,226.9 -10.4,226.2 -9.4,225.6 C-8.4,224.9 -7.1,224.3 -6.2,224.8 C-5.2,225.3 -4.7,226.8 -4.8,228.0 Z'/><path d='M235.0,-12.0 C235.2,-10.8 235.2,-8.6 234.3,-8.1 C233.4,-7.6 231.8,-8.8 230.6,-9.5 C229.3,-10.3 228.1,-10.7 228.0,-12.0 C227.8,-13.3 228.7,-15.4 229.8,-15.8 C230.8,-16.3 232.2,-15.0 233.3,-14.2 C234.3,-13.4 234.8,-13.2 235.0,-12.0 Z'/><path d='M13.8,5.0 C13.7,6.1 12.5,6.8 11.4,7.2 C10.4,7.7 9.5,7.7 8.5,7.3 C7.6,6.8 7.0,6.1 6.8,5.0 C6.7,3.9 6.8,2.3 7.8,1.7 C8.9,1.1 10.8,1.3 11.9,2.0 C13.1,2.7 13.9,3.9 13.8,5.0 Z'/><path d='M254.4,5.0 C254.5,6.0 252.9,7.4 251.7,8.0 C250.5,8.5 249.3,8.5 248.3,7.9 C247.4,7.3 246.8,6.0 246.9,5.0 C247.0,4.0 247.8,3.1 248.7,2.7 C249.5,2.2 250.1,2.4 251.3,2.8 C252.4,3.3 254.3,4.0 254.4,5.0 Z'/><path d='M13.4,245.0 C13.5,246.4 13.3,248.0 12.2,248.8 C11.1,249.6 9.1,249.6 7.8,248.8 C6.5,248.1 5.4,246.2 5.6,245.0 C5.7,243.8 7.4,243.3 8.7,242.7 C9.9,242.1 10.8,241.5 11.8,242.0 C12.7,242.4 13.3,243.6 13.4,245.0 Z'/><path d='M129.1,62.0 C129.2,63.2 128.0,65.1 126.9,65.7 C125.7,66.3 124.3,65.9 123.4,65.1 C122.6,64.4 122.5,63.1 122.6,62.0 C122.6,60.9 123.0,59.9 123.7,59.4 C124.4,59.0 125.1,59.2 126.1,59.8 C127.2,60.3 128.9,60.8 129.1,62.0 Z'/><path d='M184.9,98.0 C184.9,98.9 184.7,99.7 183.6,100.4 C182.6,101.1 180.8,102.0 179.6,101.5 C178.3,101.0 177.4,99.3 177.5,98.0 C177.5,96.7 178.7,95.5 180.0,95.0 C181.2,94.6 182.6,95.0 183.6,95.6 C184.6,96.2 184.9,97.1 184.9,98.0 Z'/><path d='M32.0,235.0 C31.9,236.2 30.6,237.1 29.5,237.5 C28.5,237.9 27.6,237.6 26.7,237.1 C25.8,236.6 25.0,235.8 25.0,235.0 C25.0,234.2 25.8,233.6 26.8,233.0 C27.8,232.3 29.0,231.3 30.0,231.7 C31.1,232.1 32.1,233.8 32.0,235.0 Z'/><path d='M32.5,-5.0 C32.5,-3.9 31.1,-2.6 29.8,-1.9 C28.5,-1.1 27.0,-0.7 25.9,-1.4 C24.8,-2.0 24.1,-3.6 24.1,-5.0 C24.2,-6.4 25.1,-7.8 26.1,-8.3 C27.2,-8.7 28.1,-8.0 29.3,-7.3 C30.6,-6.7 32.4,-6.1 32.5,-5.0 Z'/></g></svg>`;
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
