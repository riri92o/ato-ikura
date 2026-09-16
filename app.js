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
    { id: "leopard", name: "レオパード柄" },
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
    const spotColor = themeColor || "#007a78";
    const coreOpacity = isDarkBg ? 0.08 : 0.045;
    const borderOpacity = isDarkBg ? 0.16 : 0.11;

    const innerPaths = "<path d='M23.5,7.0 C25.7,7.4 28.8,7.9 29.6,9.6 C30.3,11.2 28.9,14.9 28.0,16.9 C27.1,18.8 25.6,20.4 24.1,21.0 C22.6,21.6 20.3,21.4 18.9,20.5 C17.4,19.5 15.8,17.5 15.4,15.3 C15.0,13.1 15.2,8.6 16.5,7.2 C17.9,5.8 21.4,6.6 23.5,7.0 Z'/><path d='M24.0,404.0 C25.7,404.4 26.9,408.7 27.7,410.9 C28.5,413.1 29.3,415.0 28.8,417.2 C28.4,419.4 26.9,423.1 24.9,424.1 C23.0,425.2 19.0,424.8 17.2,423.3 C15.4,421.9 14.1,417.9 14.2,415.4 C14.2,412.9 15.8,410.2 17.5,408.3 C19.1,406.4 22.3,403.6 24.0,404.0 Z'/><path d='M75.1,2.2 C76.7,2.4 79.0,3.3 79.7,4.8 C80.5,6.3 80.0,9.0 79.5,11.2 C79.0,13.5 78.1,17.4 76.6,18.2 C75.1,18.9 72.1,17.2 70.7,15.8 C69.4,14.4 68.7,12.0 68.6,10.0 C68.5,8.0 69.1,5.1 70.2,3.8 C71.3,2.5 73.5,2.0 75.1,2.2 Z'/><path d='M75.2,401.7 C77.1,401.9 79.6,402.3 80.7,404.1 C81.7,405.8 82.4,410.2 81.6,412.1 C80.8,414.1 77.8,415.3 76.0,415.8 C74.2,416.3 72.4,416.1 71.1,415.2 C69.7,414.2 68.3,412.1 68.0,410.1 C67.7,408.0 68.2,404.2 69.4,402.8 C70.6,401.4 73.3,401.4 75.2,401.7 Z'/><path d='M165.5,26.3 C166.0,28.3 164.8,32.1 163.0,33.5 C161.3,34.8 157.3,34.5 154.8,34.3 C152.4,34.1 149.5,33.5 148.2,32.0 C147.0,30.6 146.7,27.8 147.3,25.8 C148.0,23.7 149.9,20.6 152.1,19.8 C154.3,19.0 158.2,19.9 160.4,21.0 C162.7,22.1 165.1,24.2 165.5,26.3 Z'/><path d='M174.1,20.9 C174.5,22.4 173.6,24.5 172.4,25.9 C171.2,27.3 168.9,28.8 166.8,29.2 C164.7,29.6 161.4,29.3 159.9,28.2 C158.4,27.0 157.1,24.3 157.6,22.4 C158.1,20.5 160.7,17.6 162.8,16.7 C164.9,15.9 168.4,16.6 170.2,17.3 C172.1,18.0 173.8,19.5 174.1,20.9 Z'/><path d='M222.3,27.4 C224.1,25.6 227.6,25.8 230.8,26.0 C234.0,26.1 239.4,26.1 241.6,28.3 C243.9,30.5 245.0,36.6 244.1,39.2 C243.3,41.8 239.3,43.1 236.7,43.7 C234.1,44.3 231.4,44.0 228.5,42.8 C225.6,41.6 220.6,38.9 219.5,36.3 C218.5,33.8 220.4,29.1 222.3,27.4 Z'/><path d='M303.5,10.0 C302.4,9.5 301.3,7.8 301.1,6.3 C300.9,4.8 301.5,2.7 302.4,1.1 C303.3,-0.5 304.8,-2.8 306.3,-3.3 C307.7,-3.8 310.4,-3.2 311.2,-2.0 C312.0,-0.7 311.8,2.6 311.2,4.4 C310.6,6.3 309.1,8.2 307.9,9.1 C306.6,10.0 304.7,10.4 303.5,10.0 Z'/><path d='M303.7,409.6 C302.5,408.9 301.6,407.7 301.3,406.2 C301.0,404.7 301.2,402.4 302.0,400.8 C302.8,399.1 304.8,396.7 306.3,396.3 C307.7,395.9 309.8,397.1 310.8,398.5 C311.8,399.9 312.5,402.6 312.1,404.5 C311.7,406.5 309.7,409.4 308.3,410.3 C306.9,411.1 304.9,410.3 303.7,409.6 Z'/><path d='M334.6,31.6 C333.7,33.4 331.3,34.9 329.0,35.5 C326.7,36.1 322.7,36.2 320.8,35.0 C318.9,33.7 317.9,30.0 317.8,27.8 C317.8,25.5 318.8,23.1 320.4,21.7 C322.1,20.3 325.3,19.0 327.7,19.5 C330.1,19.9 333.6,22.3 334.7,24.3 C335.9,26.4 335.6,29.7 334.6,31.6 Z'/><path d='M9.8,58.9 C10.2,57.6 13.1,56.4 14.9,56.0 C16.7,55.6 19.1,55.8 20.6,56.5 C22.0,57.1 22.9,58.6 23.6,59.9 C24.3,61.3 25.6,63.7 24.8,64.5 C24.0,65.4 20.7,65.1 18.7,65.0 C16.7,64.9 14.2,65.0 12.7,64.0 C11.2,62.9 9.4,60.3 9.8,58.9 Z'/><path d='M116.2,57.5 C113.7,58.3 109.8,57.1 107.7,55.5 C105.7,54.0 104.3,50.8 103.9,48.3 C103.5,45.8 103.9,42.4 105.3,40.6 C106.8,38.8 109.7,37.8 112.4,37.7 C115.1,37.7 120.1,38.0 121.8,40.2 C123.5,42.4 123.4,48.0 122.5,50.9 C121.5,53.8 118.6,56.8 116.2,57.5 Z'/><path d='M133.7,74.0 C132.2,74.0 130.5,70.9 129.3,69.2 C128.1,67.5 126.4,65.6 126.4,63.7 C126.5,61.9 128.3,58.8 129.7,58.0 C131.1,57.3 133.3,58.3 135.0,59.1 C136.8,59.9 139.6,61.0 140.1,62.6 C140.6,64.3 139.1,67.3 138.0,69.2 C136.9,71.1 135.1,74.0 133.7,74.0 Z'/><path d='M253.4,46.3 C255.3,44.5 259.6,41.8 261.8,42.9 C264.1,44.0 266.1,49.9 267.1,52.9 C268.2,56.0 268.9,58.8 268.2,60.9 C267.5,63.1 265.0,65.6 262.8,65.8 C260.6,65.9 257.0,63.9 255.0,61.9 C252.9,59.9 250.7,56.3 250.4,53.7 C250.2,51.1 251.5,48.1 253.4,46.3 Z'/><path d='M297.1,64.8 C295.7,62.6 294.3,58.5 295.6,56.1 C296.9,53.6 301.8,50.4 304.8,49.9 C307.7,49.3 311.0,51.2 313.3,52.8 C315.6,54.3 318.4,56.7 318.4,59.1 C318.4,61.5 315.8,65.7 313.3,67.4 C310.9,69.1 306.5,69.8 303.8,69.4 C301.1,69.0 298.5,67.1 297.1,64.8 Z'/><path d='M386.8,36.1 C388.3,37.4 388.4,42.2 387.5,44.6 C386.6,47.1 383.6,49.6 381.2,51.0 C378.8,52.5 374.9,53.9 373.0,53.3 C371.1,52.6 370.0,49.2 369.8,47.0 C369.6,44.8 370.5,41.9 371.9,40.2 C373.3,38.5 375.8,37.7 378.3,37.0 C380.8,36.3 385.2,34.9 386.8,36.1 Z'/><path d='M15.6,104.3 C17.5,105.1 20.6,107.2 20.8,109.3 C21.1,111.4 18.7,114.8 17.0,116.8 C15.3,118.9 12.7,121.4 10.5,121.6 C8.3,121.8 4.8,119.9 3.8,117.9 C2.8,116.0 3.4,112.2 4.3,109.9 C5.1,107.6 7.1,105.1 9.0,104.1 C10.9,103.2 13.6,103.4 15.6,104.3 Z'/><path d='M417.6,100.5 C419.9,101.9 421.4,106.0 421.7,109.1 C421.9,112.1 421.1,116.7 419.3,119.0 C417.4,121.2 412.8,122.8 410.4,122.5 C408.0,122.1 406.2,119.2 404.9,117.1 C403.5,114.9 401.9,112.2 402.4,109.5 C402.9,106.8 405.4,102.4 407.9,100.9 C410.4,99.4 415.3,99.2 417.6,100.5 Z'/><path d='M139.2,96.3 C139.7,94.6 142.8,93.2 145.4,92.5 C147.9,91.8 152.5,90.9 154.6,92.1 C156.6,93.2 157.1,96.9 157.7,99.2 C158.2,101.5 159.4,104.7 158.1,105.9 C156.7,107.2 152.0,107.2 149.4,106.6 C146.8,106.1 144.1,104.4 142.4,102.7 C140.7,101.0 138.7,97.9 139.2,96.3 Z'/><path d='M178.6,113.3 C178.4,115.4 178.3,118.8 176.8,119.6 C175.2,120.5 171.3,119.3 169.3,118.5 C167.3,117.6 165.9,116.2 165.0,114.6 C164.2,113.0 163.3,110.3 164.2,108.8 C165.0,107.3 168.0,105.9 170.2,105.6 C172.5,105.3 176.4,105.7 177.7,107.0 C179.1,108.3 178.7,111.2 178.6,113.3 Z'/><path d='M205.1,109.3 C203.2,108.1 202.2,104.7 202.1,101.9 C202.0,99.1 202.8,95.0 204.6,92.5 C206.5,89.9 210.5,86.8 213.2,86.4 C215.9,86.1 220.1,88.2 221.0,90.6 C222.0,93.0 220.0,98.0 218.7,101.0 C217.3,104.0 215.4,107.4 213.1,108.8 C210.8,110.2 206.9,110.5 205.1,109.3 Z'/><path d='M259.7,87.6 C261.5,88.6 263.3,91.3 263.5,93.8 C263.8,96.2 262.9,100.3 261.2,102.4 C259.5,104.5 255.6,106.5 253.1,106.6 C250.5,106.6 247.3,104.8 245.9,102.5 C244.5,100.2 243.5,95.3 244.7,92.8 C245.8,90.4 250.2,88.6 252.7,87.7 C255.2,86.9 257.9,86.6 259.7,87.6 Z'/><path d='M301.2,112.9 C301.3,111.6 302.3,110.0 303.6,109.2 C304.9,108.4 307.2,107.8 309.1,108.1 C310.9,108.3 313.8,109.3 314.7,110.6 C315.6,111.9 315.4,114.6 314.5,115.9 C313.5,117.2 310.7,118.1 308.8,118.3 C306.9,118.4 304.4,117.9 303.2,117.0 C301.9,116.1 301.1,114.2 301.2,112.9 Z'/><path d='M341.0,102.6 C339.2,100.1 338.8,94.1 340.3,90.8 C341.8,87.6 346.4,84.3 350.0,83.1 C353.7,82.0 359.8,81.9 362.3,83.8 C364.8,85.8 365.4,91.4 365.1,94.6 C364.8,97.9 362.7,101.2 360.4,103.1 C358.1,105.0 354.6,106.0 351.4,105.9 C348.1,105.8 342.8,105.1 341.0,102.6 Z'/><path d='M24.7,136.1 C24.9,135.0 26.6,133.8 28.1,133.3 C29.6,132.7 32.2,132.2 33.7,132.8 C35.1,133.4 36.2,135.4 36.8,136.9 C37.4,138.4 38.2,140.7 37.3,141.8 C36.4,142.9 33.1,144.0 31.3,143.7 C29.5,143.4 27.6,141.4 26.5,140.1 C25.4,138.8 24.4,137.3 24.7,136.1 Z'/><path d='M81.2,153.1 C80.5,155.2 77.3,156.9 75.1,157.5 C73.0,158.0 70.4,157.6 68.5,156.7 C66.6,155.7 64.1,153.6 63.8,151.9 C63.5,150.3 65.3,147.9 66.7,146.5 C68.0,145.2 69.7,144.1 71.9,143.9 C74.1,143.7 78.3,143.6 79.8,145.1 C81.4,146.6 82.0,151.1 81.2,153.1 Z'/><path d='M95.1,133.5 C94.0,131.6 94.4,127.2 95.9,124.9 C97.4,122.6 101.6,119.8 104.0,119.7 C106.5,119.6 109.3,122.8 110.7,124.6 C112.1,126.4 112.8,128.5 112.6,130.4 C112.3,132.3 110.9,135.1 109.3,136.1 C107.6,137.1 104.9,136.9 102.5,136.5 C100.1,136.1 96.2,135.5 95.1,133.5 Z'/><path d='M227.5,143.0 C229.3,141.7 231.7,139.6 233.6,140.2 C235.5,140.9 238.0,144.7 239.1,147.1 C240.2,149.4 240.7,152.0 240.2,154.3 C239.7,156.5 238.2,160.0 236.1,160.4 C234.1,160.8 230.0,158.6 227.8,156.5 C225.5,154.5 222.8,150.5 222.8,148.2 C222.7,146.0 225.7,144.3 227.5,143.0 Z'/><path d='M256.5,158.2 C254.6,156.0 253.0,151.4 253.8,148.8 C254.7,146.2 258.7,144.4 261.6,142.6 C264.6,140.8 268.7,137.3 271.4,138.0 C274.0,138.6 276.8,143.2 277.4,146.3 C278.0,149.5 277.0,154.0 275.0,156.7 C273.1,159.3 268.6,162.0 265.5,162.3 C262.4,162.6 258.4,160.5 256.5,158.2 Z'/><path d='M303.5,144.5 C305.4,144.7 307.4,145.3 308.9,146.8 C310.3,148.3 312.6,151.6 312.2,153.6 C311.8,155.6 308.7,157.9 306.5,158.9 C304.3,159.9 300.7,160.6 299.1,159.5 C297.5,158.5 297.3,154.7 297.0,152.5 C296.7,150.2 296.3,147.2 297.4,145.9 C298.5,144.5 301.6,144.3 303.5,144.5 Z'/><path d='M335.8,121.1 C338.5,120.5 342.4,120.6 344.4,122.5 C346.4,124.4 348.0,129.5 348.1,132.5 C348.2,135.6 346.8,138.9 345.1,140.9 C343.4,142.8 340.4,144.7 337.9,144.3 C335.3,143.8 331.3,141.1 329.7,138.1 C328.1,135.1 327.2,128.9 328.3,126.1 C329.3,123.2 333.1,121.7 335.8,121.1 Z'/><path d='M371.7,140.2 C370.3,139.3 369.1,136.6 369.4,134.4 C369.6,132.3 371.5,128.7 373.2,127.3 C374.9,126.0 377.8,126.1 379.7,126.4 C381.7,126.6 384.6,127.3 385.0,128.8 C385.4,130.3 383.3,133.6 382.1,135.4 C380.9,137.3 379.4,139.2 377.7,139.9 C376.0,140.7 373.1,141.1 371.7,140.2 Z'/><path d='M5.5,175.5 C4.0,174.3 1.3,172.6 1.5,171.0 C1.7,169.3 4.9,166.6 6.7,165.4 C8.5,164.3 10.5,163.9 12.3,164.1 C14.0,164.2 16.6,165.0 17.3,166.5 C17.9,168.1 17.3,171.4 16.2,173.3 C15.0,175.3 12.3,177.8 10.5,178.2 C8.7,178.5 7.0,176.7 5.5,175.5 Z'/><path d='M404.4,176.8 C403.0,175.9 402.1,172.8 402.5,170.9 C402.9,169.0 404.8,166.8 406.6,165.2 C408.4,163.7 411.7,161.1 413.2,161.4 C414.8,161.7 415.5,165.2 416.0,167.2 C416.6,169.2 417.3,171.9 416.4,173.4 C415.4,175.0 412.4,175.9 410.4,176.5 C408.4,177.0 405.7,177.7 404.4,176.8 Z'/><path d='M107.3,188.4 C105.8,189.7 103.2,191.6 101.3,191.1 C99.4,190.5 96.7,187.0 96.1,185.0 C95.6,183.0 97.1,180.9 98.0,179.1 C98.9,177.3 99.8,174.4 101.4,174.1 C103.1,173.7 106.4,175.5 107.9,177.1 C109.3,178.7 110.3,181.6 110.2,183.5 C110.1,185.4 108.8,187.2 107.3,188.4 Z'/><path d='M147.7,194.9 C146.5,196.5 142.6,196.8 139.8,196.5 C137.0,196.1 132.2,194.6 130.7,192.5 C129.2,190.5 130.1,186.3 130.8,184.0 C131.5,181.7 132.8,179.6 134.8,178.8 C136.9,178.1 140.9,178.1 143.0,179.5 C145.0,180.9 146.3,184.4 147.1,186.9 C147.9,189.5 148.9,193.3 147.7,194.9 Z'/><path d='M264.5,174.0 C266.2,176.2 266.8,181.2 265.4,184.3 C264.1,187.3 259.7,191.3 256.4,192.3 C253.0,193.4 247.4,192.5 245.2,190.7 C243.1,188.9 243.1,184.5 243.4,181.7 C243.6,178.9 244.7,175.6 246.7,173.8 C248.7,172.1 252.4,171.1 255.4,171.1 C258.3,171.2 262.8,171.8 264.5,174.0 Z'/><path d='M295.6,181.7 C297.4,181.0 300.9,183.3 302.9,184.7 C305.0,186.1 306.8,187.9 307.8,190.2 C308.7,192.5 309.4,196.5 308.4,198.5 C307.4,200.5 304.2,202.3 301.9,202.1 C299.6,202.0 296.2,199.7 294.5,197.5 C292.9,195.3 291.9,191.5 292.0,188.9 C292.2,186.3 293.8,182.4 295.6,181.7 Z'/><path d='M346.8,180.5 C348.5,180.5 350.6,182.5 351.8,184.3 C353.0,186.1 354.0,188.8 353.9,191.3 C353.9,193.8 353.0,198.1 351.5,199.4 C349.9,200.8 346.2,200.7 344.6,199.4 C343.0,198.1 342.6,194.2 342.1,191.7 C341.6,189.2 341.0,186.1 341.7,184.2 C342.5,182.4 345.1,180.5 346.8,180.5 Z'/><path d='M371.4,165.8 C373.4,164.8 375.5,164.7 378.0,165.3 C380.6,165.9 385.3,167.2 386.8,169.5 C388.2,171.8 387.7,176.4 386.8,178.9 C386.0,181.5 383.7,184.7 381.5,184.7 C379.2,184.8 375.9,181.4 373.4,179.3 C370.9,177.1 366.7,174.0 366.4,171.7 C366.1,169.5 369.5,166.9 371.4,165.8 Z'/><path d='M11.3,195.3 C13.1,194.3 16.9,195.5 19.4,197.3 C21.9,199.0 25.8,203.1 26.3,205.9 C26.8,208.6 23.9,211.3 22.4,213.6 C20.8,216.0 19.3,220.3 17.2,220.0 C15.2,219.8 11.3,215.1 9.9,212.3 C8.5,209.5 8.7,206.1 8.9,203.3 C9.1,200.5 9.6,196.3 11.3,195.3 Z'/><path d='M411.8,196.4 C413.7,195.4 417.2,194.9 419.6,196.5 C422.1,198.0 425.7,202.8 426.4,205.9 C427.0,209.0 425.2,213.0 423.6,215.1 C422.1,217.2 419.4,219.0 417.1,218.5 C414.8,218.1 411.4,214.9 409.9,212.3 C408.4,209.7 407.7,205.5 408.1,202.9 C408.4,200.3 409.9,197.5 411.8,196.4 Z'/><path d='M47.7,201.1 C48.8,199.1 54.0,198.7 57.1,198.3 C60.2,197.9 63.9,197.3 66.2,198.5 C68.5,199.8 70.4,203.3 71.0,205.8 C71.6,208.3 71.6,212.0 69.8,213.7 C68.0,215.4 63.2,216.7 60.0,216.2 C56.8,215.6 52.7,212.9 50.6,210.4 C48.6,207.9 46.6,203.1 47.7,201.1 Z'/><path d='M97.2,220.8 C95.4,220.3 93.6,217.9 92.9,216.0 C92.3,214.2 92.7,211.7 93.5,209.7 C94.2,207.8 95.9,204.8 97.5,204.3 C99.1,203.8 101.7,205.5 103.1,206.8 C104.4,208.1 105.5,210.2 105.7,212.2 C105.8,214.3 105.3,217.8 103.9,219.2 C102.5,220.7 99.1,221.3 97.2,220.8 Z'/><path d='M142.5,210.6 C142.1,212.4 139.9,214.6 137.9,215.3 C135.8,216.0 132.3,215.6 130.1,214.9 C127.9,214.2 125.6,212.7 124.6,211.1 C123.5,209.5 122.9,206.7 124.0,205.2 C125.1,203.7 128.5,202.3 131.2,202.1 C133.9,201.9 138.3,202.8 140.2,204.2 C142.1,205.6 142.9,208.7 142.5,210.6 Z'/><path d='M190.8,201.4 C192.2,200.6 194.2,199.7 195.8,200.2 C197.4,200.7 200.0,202.8 200.5,204.4 C200.9,206.1 199.8,208.8 198.7,210.2 C197.7,211.6 195.7,212.8 194.1,212.9 C192.6,212.9 190.3,211.6 189.2,210.3 C188.2,209.0 187.5,206.6 187.8,205.1 C188.1,203.6 189.5,202.2 190.8,201.4 Z'/><path d='M197.9,238.3 C196.3,236.4 196.4,232.2 197.0,229.5 C197.7,226.8 199.7,223.2 201.8,222.2 C203.8,221.1 207.2,222.3 209.6,223.1 C212.0,224.0 215.3,225.4 215.9,227.4 C216.5,229.4 214.8,233.1 213.2,235.2 C211.6,237.4 209.1,239.9 206.5,240.4 C204.0,240.9 199.4,240.1 197.9,238.3 Z'/><path d='M264.1,204.8 C266.6,204.8 269.9,205.4 271.3,207.4 C272.7,209.4 273.0,213.8 272.6,216.7 C272.1,219.6 270.8,223.3 268.7,225.0 C266.6,226.6 262.3,228.0 260.1,226.7 C257.9,225.5 256.1,220.7 255.5,217.4 C254.9,214.1 255.1,209.3 256.5,207.2 C258.0,205.1 261.7,204.8 264.1,204.8 Z'/><path d='M296.0,241.4 C294.2,239.6 293.5,235.3 294.0,232.6 C294.6,229.9 296.9,226.9 299.4,225.1 C301.8,223.4 305.8,221.4 308.4,222.0 C311.0,222.6 314.0,225.9 314.9,228.7 C315.9,231.5 316.0,236.6 314.3,239.0 C312.6,241.4 307.9,243.0 304.9,243.4 C301.8,243.8 297.8,243.2 296.0,241.4 Z'/><path d='M367.3,199.9 C368.7,198.6 370.8,196.5 372.6,197.0 C374.4,197.4 377.1,200.8 378.2,202.8 C379.2,204.8 379.5,207.4 379.0,208.9 C378.6,210.5 376.8,211.8 375.2,212.1 C373.6,212.3 371.4,211.6 369.6,210.4 C367.8,209.2 364.7,206.7 364.3,205.0 C363.9,203.2 365.9,201.3 367.3,199.9 Z'/><path d='M21.7,245.1 C22.6,243.2 23.8,240.5 25.8,240.3 C27.9,240.0 32.1,242.1 34.0,243.6 C35.9,245.0 36.6,247.2 37.0,249.1 C37.5,251.0 38.2,253.8 36.8,255.0 C35.4,256.3 31.5,257.3 28.9,256.7 C26.2,256.1 21.9,253.4 20.8,251.5 C19.6,249.6 20.9,247.0 21.7,245.1 Z'/><path d='M63.6,275.3 C61.6,274.5 59.2,271.2 59.0,269.1 C58.8,266.9 60.8,264.4 62.3,262.2 C63.8,260.0 65.9,256.3 67.9,256.0 C70.0,255.7 73.4,258.5 74.6,260.5 C75.7,262.5 75.6,265.7 74.9,267.9 C74.3,270.1 72.7,272.4 70.8,273.7 C68.9,274.9 65.6,276.0 63.6,275.3 Z'/><path d='M122.5,251.3 C123.2,252.6 122.0,255.0 121.1,257.1 C120.2,259.2 118.7,263.1 117.0,263.6 C115.4,264.0 112.8,261.1 111.0,259.8 C109.2,258.5 106.1,257.2 106.0,255.6 C106.0,254.0 109.1,251.2 111.0,250.1 C112.8,249.0 115.0,248.8 116.9,249.0 C118.9,249.2 121.8,249.9 122.5,251.3 Z'/><path d='M140.8,260.1 C141.5,261.5 140.2,264.4 139.0,266.0 C137.8,267.6 135.8,269.2 133.7,269.8 C131.7,270.5 128.1,270.8 126.7,269.8 C125.2,268.8 124.6,265.8 125.1,264.0 C125.5,262.3 127.6,260.2 129.2,259.2 C130.9,258.2 133.1,257.9 135.0,258.1 C137.0,258.2 140.1,258.8 140.8,260.1 Z'/><path d='M198.8,277.8 C197.5,279.2 193.9,279.0 191.4,278.6 C188.8,278.3 184.6,277.4 183.3,275.6 C182.1,273.8 183.4,270.1 184.0,268.0 C184.7,265.8 185.5,263.1 187.3,262.6 C189.0,262.0 192.4,263.2 194.4,264.5 C196.4,265.8 198.5,268.1 199.2,270.3 C200.0,272.6 200.1,276.4 198.8,277.8 Z'/><path d='M268.6,278.4 C266.1,279.6 262.5,280.8 259.8,279.6 C257.1,278.4 252.7,274.1 252.3,271.2 C251.9,268.3 255.4,264.7 257.5,262.4 C259.6,260.1 262.2,257.2 264.8,257.2 C267.5,257.3 271.7,260.2 273.4,262.8 C275.0,265.3 275.5,270.1 274.7,272.7 C273.9,275.3 271.0,277.3 268.6,278.4 Z'/><path d='M285.4,237.6 C287.1,236.2 290.2,234.8 292.5,235.8 C294.8,236.8 297.6,240.9 299.0,243.8 C300.4,246.7 301.5,251.0 300.7,253.1 C299.9,255.3 296.3,256.8 294.1,256.5 C291.9,256.1 289.4,253.1 287.4,251.0 C285.4,248.9 282.5,246.1 282.2,243.8 C281.9,241.6 283.7,238.9 285.4,237.6 Z'/><path d='M332.2,246.7 C332.7,244.7 336.2,243.1 338.7,242.3 C341.1,241.4 344.8,240.6 346.7,241.6 C348.6,242.6 349.9,246.3 350.2,248.5 C350.4,250.7 349.6,253.2 348.2,254.7 C346.8,256.2 343.9,257.6 341.7,257.5 C339.6,257.3 336.9,255.7 335.3,253.9 C333.7,252.1 331.6,248.6 332.2,246.7 Z'/><path d='M-7.7,249.6 C-5.3,250.7 -2.9,255.7 -2.9,258.5 C-3.0,261.3 -6.0,264.7 -8.0,266.6 C-10.0,268.5 -12.8,270.0 -15.0,269.9 C-17.3,269.9 -20.3,268.2 -21.4,266.3 C-22.5,264.4 -22.4,261.0 -21.7,258.7 C-21.0,256.3 -19.3,253.8 -17.0,252.3 C-14.6,250.8 -10.0,248.6 -7.7,249.6 Z'/><path d='M392.0,250.1 C394.0,251.5 394.0,256.0 394.3,259.1 C394.6,262.1 395.6,266.4 394.1,268.6 C392.5,270.7 387.6,271.9 384.8,271.7 C382.0,271.5 378.7,269.7 377.1,267.4 C375.6,265.1 374.6,260.6 375.5,257.9 C376.4,255.1 379.8,252.2 382.6,250.9 C385.3,249.6 390.1,248.8 392.0,250.1 Z'/><path d='M36.2,298.3 C37.4,296.6 40.1,294.5 42.6,294.8 C45.1,295.1 49.4,297.7 51.5,300.0 C53.6,302.3 55.4,306.1 55.3,308.5 C55.2,310.9 53.0,313.9 50.8,314.4 C48.5,315.0 44.3,313.6 41.8,312.0 C39.3,310.5 36.8,307.6 35.8,305.3 C34.9,303.0 35.1,300.1 36.2,298.3 Z'/><path d='M111.1,313.8 C110.2,316.4 109.7,320.4 107.2,321.2 C104.7,322.0 98.6,320.4 96.1,318.7 C93.6,316.9 92.6,313.1 92.3,310.6 C92.0,308.1 92.4,305.4 94.1,303.7 C95.8,301.9 99.7,299.6 102.8,299.9 C105.9,300.3 111.1,303.5 112.5,305.8 C113.9,308.1 112.0,311.3 111.1,313.8 Z'/><path d='M132.6,302.4 C131.1,303.1 128.5,302.7 126.9,301.6 C125.4,300.5 123.9,298.0 123.4,296.0 C122.8,294.0 122.8,291.1 123.7,289.7 C124.6,288.4 127.1,287.7 128.6,288.0 C130.2,288.4 131.7,290.2 133.0,291.8 C134.2,293.4 136.2,295.9 136.1,297.7 C136.1,299.4 134.2,301.7 132.6,302.4 Z'/><path d='M178.3,305.0 C179.9,305.4 182.3,308.2 182.5,310.1 C182.7,312.0 180.7,314.4 179.6,316.3 C178.5,318.2 177.2,321.1 175.7,321.5 C174.3,321.9 172.0,320.0 171.0,318.6 C170.0,317.2 169.3,314.9 169.6,313.1 C169.8,311.3 171.0,309.0 172.5,307.7 C173.9,306.3 176.6,304.6 178.3,305.0 Z'/><path d='M222.0,277.6 C223.9,276.6 227.0,277.3 229.4,278.3 C231.9,279.2 235.8,280.8 237.0,283.1 C238.2,285.5 237.8,290.3 236.5,292.6 C235.2,294.9 231.9,297.1 229.4,297.1 C226.8,297.1 223.0,294.9 221.2,292.8 C219.4,290.7 218.4,286.9 218.6,284.4 C218.7,281.9 220.2,278.6 222.0,277.6 Z'/><path d='M238.3,288.9 C237.3,286.6 235.9,282.2 237.2,280.5 C238.6,278.9 243.5,279.1 246.4,278.8 C249.4,278.6 252.9,277.7 255.0,279.1 C257.1,280.5 259.7,285.0 259.0,287.3 C258.3,289.5 253.6,291.5 251.0,292.6 C248.4,293.8 245.4,295.0 243.2,294.3 C241.1,293.7 239.3,291.2 238.3,288.9 Z'/><path d='M294.3,302.6 C292.2,302.4 289.7,298.8 288.6,296.3 C287.4,293.8 286.4,289.8 287.3,287.4 C288.3,285.1 291.8,282.6 294.3,282.0 C296.8,281.3 300.6,281.8 302.4,283.3 C304.2,284.9 305.3,289.0 305.0,291.4 C304.8,293.8 302.7,295.7 300.9,297.6 C299.1,299.5 296.4,302.8 294.3,302.6 Z'/><path d='M64.3,351.2 C63.1,349.8 64.9,345.3 65.6,342.5 C66.3,339.7 66.9,335.6 68.7,334.3 C70.5,333.0 74.4,333.8 76.3,334.4 C78.2,335.1 79.7,336.5 80.1,338.2 C80.6,340.0 80.4,342.8 79.2,344.9 C78.0,347.1 75.3,349.9 72.9,350.9 C70.4,351.9 65.5,352.6 64.3,351.2 Z'/><path d='M102.1,353.6 C102.5,356.3 101.6,360.5 99.3,362.4 C96.9,364.2 91.3,365.0 88.0,364.6 C84.8,364.3 81.1,362.2 79.9,360.3 C78.7,358.4 79.9,355.4 81.0,353.2 C82.0,351.0 83.3,348.2 86.0,347.1 C88.6,345.9 94.1,345.2 96.8,346.2 C99.5,347.3 101.7,350.9 102.1,353.6 Z'/><path d='M135.1,335.1 C135.9,334.1 138.6,333.8 140.2,334.1 C141.9,334.5 143.9,335.8 145.0,337.1 C146.1,338.4 146.6,340.2 146.6,341.7 C146.6,343.2 146.3,345.6 145.0,346.2 C143.7,346.9 140.2,346.8 138.7,345.8 C137.1,344.8 136.3,342.0 135.7,340.2 C135.1,338.5 134.4,336.1 135.1,335.1 Z'/><path d='M185.1,351.0 C183.5,350.2 182.7,347.0 182.2,344.7 C181.7,342.3 180.7,338.5 182.0,336.7 C183.2,334.8 187.2,333.5 189.6,333.6 C192.0,333.6 195.2,334.9 196.5,336.8 C197.7,338.6 197.9,342.5 197.1,344.6 C196.3,346.7 193.9,348.3 191.8,349.4 C189.8,350.5 186.7,351.8 185.1,351.0 Z'/><path d='M225.5,324.8 C226.6,326.6 226.2,329.9 225.1,332.2 C223.9,334.6 221.0,337.7 218.6,338.8 C216.1,339.9 212.4,339.8 210.5,339.0 C208.7,338.1 207.8,335.9 207.6,333.8 C207.4,331.6 207.4,328.0 209.2,325.9 C211.1,323.9 215.9,321.8 218.7,321.6 C221.4,321.4 224.5,323.0 225.5,324.8 Z'/><path d='M241.0,347.5 C240.7,345.7 241.2,342.5 242.5,341.4 C243.8,340.2 247.1,340.2 248.9,340.5 C250.8,340.9 252.6,342.0 253.6,343.4 C254.7,344.8 256.0,347.6 255.4,349.0 C254.8,350.4 251.9,351.1 250.0,351.7 C248.2,352.3 245.8,353.2 244.3,352.5 C242.8,351.8 241.3,349.3 241.0,347.5 Z'/><path d='M296.3,323.0 C297.2,325.3 298.4,328.8 297.0,330.7 C295.6,332.6 290.6,334.4 287.9,334.6 C285.1,334.9 282.4,333.5 280.5,332.1 C278.6,330.7 276.3,328.4 276.5,326.1 C276.7,323.8 279.1,320.0 281.6,318.5 C284.2,316.9 289.4,316.0 291.8,316.7 C294.3,317.5 295.5,320.6 296.3,323.0 Z'/><path d='M322.7,343.0 C322.2,340.7 324.4,337.6 326.0,335.8 C327.5,333.9 329.4,332.9 331.9,332.0 C334.5,331.2 339.6,329.6 341.5,330.8 C343.4,332.1 344.2,337.1 343.5,339.6 C342.9,342.2 340.0,344.4 337.6,346.1 C335.1,347.7 331.1,350.2 328.6,349.7 C326.1,349.2 323.1,345.4 322.7,343.0 Z'/><path d='M39.2,-16.4 C39.4,-13.8 35.7,-10.2 32.9,-8.2 C30.2,-6.1 26.4,-4.2 22.8,-4.1 C19.3,-4.1 12.9,-5.9 11.7,-8.1 C10.4,-10.2 13.8,-14.7 15.4,-17.2 C17.0,-19.7 18.5,-22.0 21.2,-23.1 C23.9,-24.2 28.8,-24.9 31.8,-23.8 C34.8,-22.7 39.0,-19.1 39.2,-16.4 Z'/><path d='M37.6,383.7 C37.6,386.1 34.1,388.8 31.6,390.8 C29.2,392.8 26.0,395.6 22.9,395.7 C19.8,395.7 14.6,393.4 13.2,391.2 C11.7,388.9 12.7,384.7 14.1,382.4 C15.5,380.2 18.6,378.6 21.5,377.6 C24.5,376.6 29.0,375.3 31.7,376.3 C34.4,377.3 37.6,381.3 37.6,383.7 Z'/><path d='M123.4,371.4 C124.6,373.0 125.0,377.5 123.8,379.3 C122.7,381.2 119.0,381.9 116.7,382.5 C114.4,383.2 111.8,384.2 109.9,383.4 C108.0,382.6 105.2,379.7 105.1,377.6 C105.0,375.5 107.5,372.2 109.4,370.9 C111.2,369.5 113.9,369.3 116.2,369.4 C118.5,369.5 122.1,369.7 123.4,371.4 Z'/><path d='M204.4,-4.3 C203.6,-5.2 203.0,-6.9 203.5,-8.2 C204.0,-9.5 205.8,-11.1 207.5,-12.1 C209.2,-13.1 212.3,-14.8 213.7,-14.4 C215.0,-14.0 215.8,-11.2 215.6,-9.7 C215.4,-8.1 213.8,-6.2 212.6,-5.0 C211.3,-3.9 209.3,-2.9 208.0,-2.8 C206.6,-2.6 205.1,-3.4 204.4,-4.3 Z'/><path d='M202.4,397.2 C201.5,395.9 201.6,393.2 202.4,391.6 C203.3,390.1 205.6,388.8 207.5,387.8 C209.3,386.9 212.1,385.5 213.4,385.9 C214.8,386.3 215.7,388.8 215.5,390.3 C215.4,391.8 213.9,393.5 212.6,395.0 C211.3,396.4 209.3,398.8 207.6,399.2 C205.9,399.6 203.2,398.4 202.4,397.2 Z'/><path d='M242.2,-15.8 C243.4,-17.5 247.2,-17.6 250.0,-17.7 C252.8,-17.8 257.3,-18.2 259.0,-16.5 C260.7,-14.8 260.7,-10.2 260.2,-7.4 C259.7,-4.6 258.2,-1.0 256.0,0.0 C253.8,1.1 249.4,0.1 247.1,-1.2 C244.9,-2.5 243.4,-5.3 242.5,-7.8 C241.7,-10.2 240.9,-14.1 242.2,-15.8 Z'/><path d='M244.2,385.7 C245.8,383.5 247.3,380.1 249.8,379.7 C252.2,379.4 257.4,381.5 258.9,383.6 C260.4,385.7 259.3,389.8 258.6,392.2 C258.0,394.7 257.0,396.8 255.0,398.2 C253.0,399.6 248.9,401.5 246.4,400.6 C243.9,399.7 240.3,395.3 239.9,392.8 C239.6,390.3 242.5,387.9 244.2,385.7 Z'/><path d='M336.2,387.9 C334.5,387.5 332.6,386.5 331.6,384.8 C330.7,383.1 330.1,379.7 330.7,377.6 C331.3,375.4 333.7,372.3 335.4,371.8 C337.1,371.3 339.1,373.1 340.9,374.4 C342.6,375.7 346.0,377.4 346.1,379.5 C346.3,381.5 343.5,385.4 341.9,386.8 C340.2,388.2 337.9,388.2 336.2,387.9 Z'/><path d='M-2.2,368.9 C-1.4,370.2 -0.4,372.3 -1.1,373.7 C-1.8,375.0 -4.7,376.5 -6.4,377.2 C-8.2,377.9 -10.1,378.3 -11.4,377.8 C-12.7,377.4 -14.2,376.1 -14.3,374.7 C-14.5,373.3 -13.5,370.9 -12.2,369.5 C-10.8,368.0 -7.9,366.0 -6.2,365.9 C-4.6,365.9 -3.1,367.7 -2.2,368.9 Z'/><path d='M397.4,369.2 C398.4,370.2 399.9,372.4 399.2,373.7 C398.5,375.0 395.2,376.1 393.5,376.8 C391.7,377.5 389.9,378.3 388.5,378.0 C387.1,377.6 385.1,376.3 385.0,374.9 C384.8,373.5 386.2,370.6 387.6,369.3 C389.1,368.1 391.9,367.2 393.5,367.2 C395.1,367.2 396.5,368.1 397.4,369.2 Z'/>";
    const outerPaths = "<path d='M13.6,8.1 C13.7,7.4 14.7,5.9 15.8,4.8 C16.8,3.7 18.6,2.1 19.9,1.5 C21.2,0.8 22.5,0.9 23.7,1.1 C25.0,1.3 26.3,2.1 27.5,2.8 C28.7,3.4 30.3,3.9 31.1,5.0 C31.8,6.0 31.8,7.4 32.0,8.8 C32.2,10.3 32.5,12.9 32.3,13.8 C32.1,14.6 31.1,14.5 30.6,13.9 C30.1,13.2 29.5,11.1 29.1,10.1 C28.6,9.1 28.4,8.7 27.9,8.0 C27.3,7.4 26.6,6.6 25.8,6.2 C25.1,5.8 24.1,5.9 23.3,5.8 C22.5,5.7 22.0,5.4 21.1,5.8 C20.3,6.2 19.2,7.5 18.2,8.1 C17.2,8.7 15.9,9.1 15.1,9.1 C14.3,9.1 13.5,8.8 13.6,8.1 Z'/><path d='M30.3,20.5 C30.3,21.4 29.7,24.1 28.7,25.0 C27.8,25.9 26.1,25.5 24.7,25.9 C23.3,26.4 21.8,27.7 20.4,27.8 C19.1,27.8 17.5,27.2 16.5,26.2 C15.6,25.2 15.3,23.1 14.6,21.8 C14.0,20.4 12.7,18.7 12.6,18.0 C12.6,17.3 13.6,17.2 14.3,17.5 C15.0,17.8 16.3,19.0 16.9,20.0 C17.6,20.9 17.6,22.5 18.3,23.2 C19.0,23.8 20.1,24.0 21.0,23.8 C22.0,23.6 22.8,22.1 23.8,21.9 C24.7,21.6 25.9,22.5 26.8,22.2 C27.7,21.8 28.4,19.9 29.0,19.6 C29.6,19.3 30.4,19.6 30.3,20.5 Z'/><path d='M14.9,408.6 C15.0,407.7 15.8,405.1 16.6,404.1 C17.3,403.2 18.5,403.3 19.6,402.9 C20.8,402.5 22.2,401.7 23.6,401.6 C24.9,401.5 26.5,401.6 27.7,402.3 C28.9,403.0 30.0,404.5 30.7,405.6 C31.3,406.7 31.6,407.8 31.7,409.1 C31.9,410.4 31.9,412.7 31.6,413.4 C31.3,414.2 30.4,414.1 30.0,413.5 C29.6,413.0 29.4,411.1 29.1,410.2 C28.8,409.3 28.7,408.7 28.1,408.1 C27.6,407.4 26.7,406.6 25.8,406.3 C25.0,406.0 24.0,406.3 23.2,406.5 C22.3,406.7 21.7,407.5 20.9,407.6 C20.1,407.6 19.2,406.3 18.4,406.6 C17.6,407.0 16.7,409.1 16.2,409.4 C15.6,409.8 14.8,409.5 14.9,408.6 Z'/><path d='M30.2,420.9 C30.2,421.6 29.7,423.2 28.8,423.9 C27.8,424.7 25.9,424.9 24.5,425.4 C23.2,425.8 22.0,426.3 20.6,426.5 C19.2,426.6 17.5,427.1 16.3,426.2 C15.2,425.3 14.1,422.7 13.7,421.2 C13.3,419.8 13.5,418.2 13.7,417.5 C13.9,416.8 14.5,416.8 14.8,417.2 C15.1,417.5 15.0,418.8 15.5,419.8 C16.1,420.7 17.3,422.5 18.2,422.9 C19.2,423.4 20.3,422.6 21.2,422.5 C22.2,422.3 22.8,422.4 23.8,422.2 C24.8,422.1 26.3,421.9 27.1,421.5 C28.0,421.2 28.4,420.2 28.9,420.1 C29.4,420.0 30.2,420.3 30.2,420.9 Z'/><path d='M76.5,20.4 C76.0,20.8 74.2,21.0 73.0,21.1 C71.9,21.2 70.6,21.5 69.4,21.0 C68.2,20.6 66.7,19.3 65.8,18.2 C65.0,17.0 64.6,15.7 64.4,14.2 C64.1,12.8 64.2,11.0 64.3,9.5 C64.4,7.9 64.3,6.1 64.8,4.9 C65.2,3.7 66.3,2.6 66.9,2.4 C67.6,2.2 68.4,3.2 68.5,3.8 C68.6,4.4 67.6,5.0 67.7,6.0 C67.7,6.9 68.7,8.4 68.9,9.5 C69.0,10.6 68.4,11.7 68.6,12.6 C68.7,13.5 69.3,13.9 69.8,14.6 C70.2,15.3 70.9,16.5 71.6,16.8 C72.2,17.2 72.7,16.4 73.5,16.7 C74.2,17.0 75.6,18.1 76.1,18.7 C76.6,19.3 77.0,20.0 76.5,20.4 Z'/><path d='M72.8,-1.0 C73.3,-1.6 75.1,-2.9 76.2,-3.2 C77.3,-3.5 78.5,-3.4 79.6,-2.7 C80.7,-2.1 82.0,-0.4 82.8,0.8 C83.5,2.0 84.0,3.0 84.2,4.3 C84.5,5.6 84.5,7.4 84.4,8.8 C84.2,10.1 83.8,12.0 83.3,12.5 C82.9,13.0 82.2,12.5 81.7,11.9 C81.2,11.3 80.7,9.8 80.5,8.8 C80.2,7.7 80.6,6.5 80.3,5.8 C80.1,5.0 79.5,4.8 79.0,4.0 C78.5,3.2 78.1,1.5 77.5,0.9 C77.0,0.3 76.4,0.4 75.6,0.3 C74.9,0.1 73.5,0.5 73.1,0.3 C72.6,0.1 72.3,-0.4 72.8,-1.0 Z'/><path d='M76.7,419.0 C76.2,419.6 74.3,420.3 73.1,420.4 C72.0,420.5 70.8,420.2 69.8,419.6 C68.7,419.1 67.9,418.0 66.8,417.0 C65.8,416.0 63.8,414.9 63.4,413.6 C63.0,412.4 64.2,410.8 64.5,409.4 C64.8,408.0 64.6,406.2 65.0,405.0 C65.5,403.8 66.6,402.5 67.2,402.2 C67.7,401.9 68.1,402.5 68.4,403.2 C68.7,404.0 69.2,405.5 69.2,406.6 C69.2,407.6 68.6,408.6 68.5,409.4 C68.4,410.2 68.3,410.8 68.6,411.6 C68.9,412.4 69.6,413.3 70.1,414.1 C70.5,414.8 70.9,416.0 71.4,416.4 C72.0,416.8 72.7,416.3 73.5,416.5 C74.3,416.6 75.7,416.6 76.2,417.0 C76.7,417.5 77.2,418.4 76.7,419.0 Z'/><path d='M72.9,398.8 C73.4,398.5 74.8,398.4 76.0,398.3 C77.1,398.2 78.6,397.8 79.7,398.3 C80.8,398.7 82.0,399.9 82.7,400.9 C83.5,402.0 83.8,403.2 84.2,404.5 C84.6,405.9 85.1,407.7 84.9,409.0 C84.8,410.4 83.9,412.2 83.4,412.7 C82.8,413.2 81.9,412.6 81.6,412.0 C81.3,411.4 81.7,410.1 81.6,409.0 C81.4,408.0 81.1,406.7 80.8,405.8 C80.4,404.9 80.2,404.1 79.7,403.5 C79.1,403.0 78.0,402.9 77.3,402.5 C76.6,402.0 76.2,401.4 75.5,401.0 C74.9,400.6 73.6,400.6 73.2,400.2 C72.7,399.9 72.4,399.1 72.9,398.8 Z'/><path d='M144.2,28.5 C143.7,28.0 143.3,26.2 143.5,25.1 C143.6,24.1 144.6,23.3 145.3,22.1 C145.9,20.9 146.4,18.8 147.5,18.0 C148.5,17.3 150.1,17.5 151.6,17.5 C153.0,17.4 155.4,17.6 156.2,18.0 C156.9,18.4 156.7,19.2 156.1,19.9 C155.6,20.6 154.0,21.7 153.1,22.1 C152.2,22.6 151.6,22.2 150.9,22.5 C150.1,22.9 149.3,23.8 148.6,24.3 C148.0,24.9 147.2,25.4 146.8,26.0 C146.4,26.7 146.8,28.0 146.3,28.4 C145.9,28.8 144.6,29.1 144.2,28.5 Z'/><path d='M161.9,20.4 C162.8,20.2 165.6,19.4 166.5,19.8 C167.4,20.1 167.1,21.5 167.3,22.5 C167.4,23.4 167.3,24.5 167.4,25.4 C167.6,26.3 168.2,27.0 168.1,27.9 C168.0,28.7 167.3,30.0 166.9,30.4 C166.5,30.7 166.1,30.5 165.8,30.0 C165.5,29.6 165.5,28.3 165.1,27.7 C164.7,27.1 163.8,26.7 163.4,26.2 C163.1,25.7 163.1,25.1 163.1,24.5 C163.2,23.8 163.9,22.8 163.6,22.3 C163.3,21.7 161.5,21.7 161.3,21.4 C161.0,21.1 161.1,20.7 161.9,20.4 Z'/><path d='M162.6,35.4 C162.4,35.8 161.6,36.5 160.9,37.0 C160.2,37.5 159.1,38.2 158.2,38.4 C157.2,38.6 156.3,38.2 155.4,38.1 C154.5,38.0 153.6,38.1 152.7,37.8 C151.8,37.5 150.5,36.8 150.1,36.3 C149.8,35.9 150.1,35.4 150.7,35.2 C151.2,35.0 152.5,35.4 153.2,35.2 C154.0,35.0 154.7,34.2 155.3,34.1 C156.0,34.0 156.6,34.7 157.3,34.8 C158.1,34.8 158.9,34.5 159.7,34.4 C160.4,34.4 161.4,34.3 161.9,34.5 C162.4,34.6 162.8,35.0 162.6,35.4 Z'/><path d='M177.5,20.0 C177.7,20.5 178.1,22.5 177.9,23.6 C177.7,24.6 177.0,25.4 176.4,26.3 C175.8,27.2 175.2,28.1 174.1,28.9 C173.0,29.6 171.3,30.3 169.9,30.8 C168.6,31.2 166.6,31.8 165.9,31.8 C165.3,31.8 165.4,31.3 166.0,30.7 C166.5,30.1 168.0,29.0 169.0,28.4 C170.1,27.7 171.3,27.2 172.1,26.6 C172.9,26.0 173.5,25.5 173.9,25.0 C174.4,24.4 174.4,24.1 174.8,23.3 C175.2,22.5 175.8,20.9 176.2,20.3 C176.7,19.8 177.2,19.4 177.5,20.0 Z'/><path d='M161.2,30.4 C160.7,30.6 159.1,30.6 158.4,30.3 C157.7,29.9 157.3,29.0 156.9,28.3 C156.6,27.6 156.4,26.8 156.3,26.0 C156.1,25.2 155.8,24.2 156.0,23.4 C156.2,22.6 157.2,21.5 157.6,21.1 C158.0,20.8 158.3,21.0 158.5,21.4 C158.8,21.7 159.1,22.8 159.2,23.4 C159.4,24.0 159.4,24.5 159.4,25.1 C159.4,25.7 159.1,26.4 159.3,26.9 C159.5,27.4 160.2,27.6 160.6,28.0 C161.1,28.4 161.8,28.9 161.9,29.3 C162.0,29.7 161.8,30.2 161.2,30.4 Z'/><path d='M162.2,15.7 C162.5,15.4 163.7,15.0 164.6,14.7 C165.5,14.5 166.6,14.1 167.6,14.1 C168.6,14.0 169.7,13.9 170.5,14.2 C171.4,14.4 171.9,15.0 172.6,15.5 C173.3,16.0 174.6,16.8 174.9,17.2 C175.2,17.6 174.8,17.9 174.2,17.9 C173.7,17.8 172.3,17.3 171.6,17.1 C170.9,16.9 170.5,16.8 169.8,16.7 C169.1,16.5 168.3,16.1 167.6,16.2 C166.8,16.3 166.1,17.1 165.3,17.2 C164.5,17.2 163.2,16.8 162.7,16.6 C162.2,16.4 161.9,16.1 162.2,15.7 Z'/><path d='M243.9,46.3 C243.6,46.9 241.6,47.9 240.3,48.8 C239.1,49.6 237.9,50.9 236.4,51.2 C234.8,51.6 232.7,51.3 231.1,50.9 C229.5,50.4 228.0,49.7 226.7,48.5 C225.4,47.4 223.7,45.0 223.3,44.1 C223.0,43.1 223.7,42.7 224.5,42.7 C225.4,42.7 227.5,43.6 228.7,44.2 C229.9,44.7 230.5,45.6 231.7,46.0 C232.8,46.3 234.4,46.6 235.4,46.4 C236.5,46.2 236.9,44.9 238.0,44.6 C239.2,44.4 241.6,44.7 242.6,45.0 C243.5,45.2 244.3,45.6 243.9,46.3 Z'/><path d='M219.2,36.9 C218.4,36.1 216.4,33.1 215.8,31.6 C215.3,30.1 215.4,29.1 215.8,27.9 C216.2,26.7 217.5,25.5 218.4,24.5 C219.3,23.4 219.8,22.3 221.2,21.8 C222.7,21.3 226.0,21.2 227.0,21.4 C228.1,21.6 228.2,22.6 227.5,23.1 C226.9,23.6 224.1,23.9 223.1,24.5 C222.1,25.2 222.0,26.0 221.4,26.9 C220.9,27.7 219.9,28.6 219.6,29.4 C219.4,30.3 219.7,30.7 219.9,31.9 C220.0,33.1 220.7,35.8 220.5,36.6 C220.4,37.5 220.0,37.8 219.2,36.9 Z'/><path d='M234.6,21.7 C235.5,21.5 238.1,21.7 239.4,22.2 C240.7,22.8 241.6,23.9 242.6,25.0 C243.6,26.1 244.8,27.7 245.5,28.9 C246.2,30.2 246.5,31.0 246.7,32.4 C246.9,33.7 246.9,36.2 246.6,36.9 C246.2,37.7 245.1,37.5 244.5,36.9 C243.9,36.3 243.8,34.2 243.1,33.3 C242.4,32.4 241.2,32.5 240.5,31.7 C239.8,30.9 239.5,29.5 239.0,28.5 C238.5,27.5 238.1,26.5 237.3,25.7 C236.5,24.9 234.5,24.2 234.1,23.5 C233.7,22.9 233.8,21.9 234.6,21.7 Z'/><path d='M308.2,-5.0 C308.7,-5.2 310.4,-5.4 311.1,-5.0 C311.9,-4.6 312.3,-3.4 312.8,-2.5 C313.3,-1.6 313.8,-1.0 314.1,0.2 C314.5,1.4 314.8,3.2 314.6,4.4 C314.4,5.7 313.6,6.7 313.1,7.9 C312.5,9.0 312.1,10.7 311.3,11.6 C310.5,12.4 309.4,12.8 308.4,12.9 C307.4,13.0 305.7,12.5 305.1,12.1 C304.6,11.8 304.8,11.1 305.1,10.8 C305.5,10.5 306.8,10.7 307.5,10.3 C308.1,10.0 308.4,9.5 308.9,8.8 C309.3,8.2 309.8,7.2 310.2,6.4 C310.6,5.6 311.1,5.0 311.3,4.1 C311.4,3.2 311.3,1.9 311.1,1.0 C311.0,0.2 310.8,-0.2 310.5,-0.8 C310.2,-1.4 310.0,-2.0 309.6,-2.5 C309.1,-3.0 308.2,-3.3 307.9,-3.7 C307.7,-4.1 307.6,-4.8 308.2,-5.0 Z'/><path d='M297.6,4.7 C297.2,4.6 296.2,4.4 296.1,4.0 C296.1,3.5 296.8,2.3 297.2,1.9 C297.7,1.5 298.5,1.2 299.0,1.4 C299.4,1.5 299.8,2.4 299.7,3.0 C299.7,3.5 299.2,4.2 298.8,4.5 C298.4,4.8 298.1,4.8 297.6,4.7 Z'/><path d='M308.2,394.6 C308.8,394.4 310.3,394.1 311.1,394.7 C311.9,395.3 312.6,397.2 313.1,398.2 C313.5,399.1 313.7,399.4 314.0,400.5 C314.2,401.5 314.7,403.2 314.6,404.5 C314.5,405.8 314.2,407.0 313.6,408.1 C312.9,409.1 311.6,410.0 310.7,410.8 C309.9,411.5 309.3,412.3 308.3,412.6 C307.4,412.9 305.5,413.0 304.9,412.8 C304.3,412.6 304.5,411.7 304.9,411.3 C305.4,410.9 306.9,410.8 307.5,410.4 C308.1,409.9 308.1,409.0 308.6,408.3 C309.0,407.6 309.8,407.0 310.1,406.3 C310.4,405.6 310.3,404.9 310.3,404.1 C310.4,403.3 310.4,402.1 310.5,401.4 C310.5,400.8 310.6,400.8 310.5,400.1 C310.3,399.4 309.8,398.0 309.4,397.4 C309.0,396.7 308.2,396.5 308.0,396.1 C307.8,395.6 307.7,394.8 308.2,394.6 Z'/><path d='M297.5,404.9 C297.1,404.9 296.2,404.5 296.2,404.0 C296.1,403.4 296.7,402.0 297.1,401.7 C297.5,401.4 298.2,401.9 298.7,402.1 C299.1,402.3 299.9,402.5 299.9,402.9 C300.0,403.3 299.1,404.1 298.7,404.4 C298.3,404.8 297.9,405.0 297.5,404.9 Z'/><path d='M317.2,21.8 C317.1,20.9 317.2,18.8 318.0,17.6 C318.9,16.4 321.0,15.0 322.5,14.8 C324.0,14.7 325.5,16.1 327.1,16.5 C328.6,16.9 330.4,16.7 331.9,17.2 C333.4,17.8 335.0,18.8 336.0,19.9 C337.0,21.0 337.3,22.4 337.7,23.7 C338.1,25.1 338.4,27.3 338.2,28.0 C338.0,28.8 337.1,28.6 336.4,28.1 C335.7,27.6 334.8,26.0 334.1,25.2 C333.4,24.4 332.9,24.1 332.1,23.5 C331.4,22.9 330.7,21.8 329.8,21.4 C328.9,21.0 327.5,21.2 326.5,21.0 C325.6,20.9 325.0,20.6 323.9,20.6 C322.9,20.7 321.4,20.9 320.5,21.3 C319.7,21.7 319.5,22.9 318.9,23.0 C318.4,23.1 317.4,22.7 317.2,21.8 Z'/><path d='M335.9,34.8 C335.8,35.4 335.1,37.1 333.9,37.9 C332.7,38.8 330.2,39.8 328.6,40.0 C327.1,40.2 326.0,39.2 324.5,38.9 C322.9,38.7 320.3,39.3 319.2,38.3 C318.2,37.3 318.0,33.9 318.0,32.9 C317.9,31.9 318.5,31.8 319.1,32.1 C319.8,32.4 320.6,34.2 321.7,34.7 C322.7,35.1 324.4,34.4 325.4,34.6 C326.5,34.7 326.8,35.6 328.0,35.6 C329.1,35.7 331.1,35.3 332.2,35.0 C333.4,34.7 334.3,34.0 334.9,34.0 C335.5,33.9 336.1,34.1 335.9,34.8 Z'/><path d='M13.8,65.7 C13.1,65.6 10.8,64.8 10.1,64.2 C9.4,63.6 9.9,63.0 9.7,62.2 C9.5,61.4 8.9,60.2 8.8,59.2 C8.7,58.2 8.6,57.1 9.1,56.3 C9.6,55.4 10.8,54.8 11.8,54.2 C12.7,53.6 13.8,52.9 14.9,52.7 C16.0,52.6 17.9,53.1 18.5,53.4 C19.1,53.7 18.9,54.2 18.4,54.5 C18.0,54.8 16.5,55.0 15.7,55.4 C15.0,55.7 14.3,56.2 13.7,56.6 C13.1,57.0 12.3,57.4 12.1,57.9 C11.8,58.4 12.0,59.1 12.0,59.7 C12.0,60.3 12.0,61.1 12.0,61.7 C11.9,62.2 11.5,62.4 11.9,63.0 C12.3,63.5 14.0,64.5 14.4,64.9 C14.7,65.4 14.5,65.9 13.8,65.7 Z'/><path d='M25.1,55.9 C25.4,56.2 25.5,57.5 26.2,58.4 C26.9,59.2 29.1,60.2 29.4,61.1 C29.7,62.0 28.5,62.9 28.0,63.8 C27.5,64.7 27.2,66.0 26.4,66.5 C25.6,67.0 23.7,66.9 23.0,66.8 C22.4,66.7 22.4,66.2 22.6,65.9 C22.7,65.5 23.8,65.1 24.1,64.5 C24.5,64.0 24.3,63.2 24.6,62.6 C24.9,62.1 26.0,61.8 25.9,61.2 C25.9,60.6 24.6,59.9 24.3,59.1 C24.0,58.4 24.0,57.3 24.2,56.8 C24.3,56.2 24.8,55.6 25.1,55.9 Z'/><path d='M101.5,37.2 C102.0,36.5 104.1,35.1 105.6,34.1 C107.1,33.1 108.9,31.5 110.6,31.2 C112.3,30.9 114.0,31.6 115.7,32.2 C117.5,32.9 119.5,34.1 121.1,35.3 C122.6,36.5 124.3,37.7 125.0,39.4 C125.6,41.0 125.4,44.0 125.1,45.0 C124.7,46.0 123.5,46.0 123.0,45.4 C122.4,44.8 122.4,42.6 121.7,41.4 C121.0,40.2 120.0,39.0 118.7,38.3 C117.5,37.7 115.5,37.7 114.3,37.4 C113.0,37.1 112.3,36.8 111.1,36.8 C109.9,36.7 108.5,36.8 107.1,37.0 C105.7,37.3 103.6,38.2 102.7,38.3 C101.8,38.3 101.1,37.9 101.5,37.2 Z'/><path d='M121.9,55.4 C121.7,56.3 120.5,58.4 119.3,59.6 C118.2,60.9 116.6,62.5 114.9,63.1 C113.1,63.8 110.6,64.3 108.6,63.6 C106.6,63.0 104.2,60.9 102.8,59.4 C101.4,58.0 100.9,56.7 100.3,55.0 C99.8,53.3 99.5,50.3 99.6,49.2 C99.8,48.2 100.6,48.3 101.1,49.0 C101.6,49.7 102.2,52.2 102.9,53.4 C103.6,54.6 104.0,55.3 105.1,56.1 C106.3,56.9 108.4,57.7 109.9,58.2 C111.5,58.8 113.1,59.7 114.3,59.4 C115.6,59.1 116.3,57.2 117.4,56.4 C118.5,55.6 120.1,54.8 120.8,54.6 C121.6,54.4 122.2,54.6 121.9,55.4 Z'/><path d='M136.2,56.7 C136.7,56.6 138.1,56.8 139.0,57.3 C139.9,57.8 141.0,58.7 141.7,59.7 C142.5,60.8 143.4,62.3 143.5,63.6 C143.7,65.0 143.0,66.8 142.6,68.0 C142.2,69.2 142.0,69.7 141.3,70.8 C140.6,71.8 139.5,73.7 138.5,74.3 C137.5,74.9 135.8,74.6 135.1,74.4 C134.5,74.2 134.5,73.5 134.8,73.1 C135.1,72.7 136.1,72.6 136.8,71.9 C137.4,71.3 138.4,69.9 138.7,69.1 C139.1,68.3 138.7,67.9 138.8,67.1 C138.9,66.3 139.6,65.1 139.5,64.2 C139.5,63.2 138.8,62.3 138.5,61.5 C138.1,60.7 137.7,59.9 137.2,59.3 C136.8,58.7 135.9,58.3 135.7,57.9 C135.5,57.5 135.6,56.8 136.2,56.7 Z'/><path d='M128.4,72.9 C127.8,72.6 126.5,71.2 125.7,70.3 C124.8,69.3 123.6,68.3 123.3,67.1 C123.1,66.0 124.0,64.6 124.3,63.4 C124.7,62.2 125.2,61.0 125.6,59.8 C126.1,58.7 126.4,57.0 127.1,56.5 C127.9,56.0 129.5,56.5 130.1,56.7 C130.6,57.0 130.7,57.5 130.5,57.8 C130.3,58.0 129.2,57.9 128.8,58.4 C128.4,59.0 128.3,60.2 128.1,61.1 C127.8,62.0 127.7,62.9 127.4,63.8 C127.1,64.7 126.3,65.7 126.4,66.5 C126.5,67.4 127.5,68.0 127.9,68.9 C128.4,69.8 129.0,71.4 129.0,72.0 C129.1,72.7 128.9,73.2 128.4,72.9 Z'/><path d='M269.4,47.8 C270.4,48.4 272.7,51.0 273.7,52.7 C274.7,54.5 275.4,56.1 275.5,58.2 C275.6,60.3 275.0,63.5 274.3,65.5 C273.7,67.5 272.9,69.3 271.6,70.4 C270.2,71.5 267.9,71.9 266.1,72.0 C264.2,72.1 261.3,71.5 260.4,70.9 C259.6,70.3 260.1,68.9 260.8,68.2 C261.5,67.5 263.4,67.1 264.6,66.8 C265.8,66.4 267.3,66.7 268.2,66.1 C269.0,65.5 269.2,64.3 269.7,62.9 C270.1,61.5 270.7,59.1 270.6,57.6 C270.6,56.1 269.7,55.4 269.2,54.0 C268.7,52.6 267.8,50.1 267.8,49.1 C267.9,48.1 268.5,47.2 269.4,47.8 Z'/><path d='M252.4,64.5 C251.2,64.3 247.4,63.5 246.1,62.0 C244.7,60.6 244.5,58.0 244.5,56.0 C244.4,54.0 245.1,52.0 245.5,50.1 C245.9,48.1 245.6,45.6 246.6,44.4 C247.6,43.3 250.5,43.1 251.6,43.3 C252.6,43.4 253.0,44.5 252.9,45.2 C252.8,45.9 251.5,46.5 251.0,47.5 C250.5,48.5 250.0,49.8 249.8,51.2 C249.7,52.5 249.9,54.0 250.1,55.4 C250.2,56.8 250.2,58.3 250.8,59.6 C251.4,61.0 253.3,62.5 253.5,63.3 C253.8,64.1 253.6,64.7 252.4,64.5 Z'/><path d='M320.9,50.0 C321.7,50.6 322.7,53.5 323.2,55.3 C323.6,57.1 323.9,58.7 323.8,60.6 C323.6,62.4 323.2,64.6 322.0,66.4 C320.8,68.1 318.3,69.7 316.4,71.0 C314.5,72.4 312.7,74.2 310.6,74.6 C308.6,74.9 305.2,73.6 304.2,73.0 C303.1,72.5 303.5,71.5 304.4,71.0 C305.2,70.6 308.0,71.1 309.4,70.3 C310.8,69.6 311.6,67.6 312.7,66.3 C313.8,65.1 314.9,64.0 315.8,62.9 C316.7,61.8 317.8,60.9 318.1,59.9 C318.4,58.8 317.5,58.2 317.6,56.8 C317.7,55.4 318.1,52.8 318.7,51.6 C319.3,50.5 320.2,49.4 320.9,50.0 Z'/><path d='M292.0,68.6 C291.5,67.9 291.3,65.0 290.9,63.2 C290.4,61.4 289.1,59.7 289.1,57.8 C289.2,55.9 289.8,53.4 291.1,51.6 C292.4,49.8 295.1,48.0 297.1,47.1 C299.1,46.1 302.0,45.9 303.1,46.0 C304.2,46.1 304.1,47.0 303.6,47.9 C303.1,48.7 301.1,49.8 299.9,51.1 C298.7,52.3 297.5,53.8 296.5,55.1 C295.6,56.4 294.4,57.6 294.1,58.8 C293.8,60.0 294.9,61.0 294.8,62.4 C294.8,63.9 294.5,66.3 294.0,67.4 C293.6,68.4 292.6,69.3 292.0,68.6 Z'/><path d='M366.1,42.6 C366.1,41.9 367.3,40.0 368.0,38.6 C368.7,37.1 369.2,35.4 370.4,33.9 C371.5,32.5 373.1,30.4 374.7,29.9 C376.3,29.3 377.9,30.4 379.8,30.5 C381.6,30.6 384.4,29.8 385.8,30.4 C387.3,31.0 387.7,32.7 388.5,34.0 C389.4,35.3 390.5,37.0 390.9,38.3 C391.3,39.5 391.2,40.1 390.8,41.5 C390.3,43.0 388.9,46.1 388.2,46.9 C387.5,47.6 386.6,47.1 386.5,46.3 C386.4,45.4 387.5,42.6 387.4,41.6 C387.3,40.6 386.5,41.0 386.1,40.3 C385.7,39.5 385.6,38.0 385.1,37.3 C384.6,36.5 384.2,36.0 383.2,35.8 C382.3,35.5 380.4,36.0 379.3,36.0 C378.2,36.1 377.5,35.7 376.4,35.9 C375.4,36.2 373.7,36.5 372.8,37.3 C372.0,38.0 372.1,39.7 371.3,40.7 C370.5,41.6 368.9,42.7 368.1,43.0 C367.2,43.3 366.1,43.3 366.1,42.6 Z'/><path d='M377.4,50.4 C377.8,50.9 377.3,52.3 377.0,53.1 C376.6,53.8 375.8,54.6 375.1,55.0 C374.3,55.3 372.7,55.4 372.3,55.0 C372.0,54.5 372.6,53.0 373.0,52.3 C373.4,51.6 374.0,51.0 374.8,50.7 C375.5,50.3 377.1,50.0 377.4,50.4 Z'/><path d='M14.3,97.6 C15.1,97.4 17.5,97.3 18.8,97.9 C20.0,98.6 20.7,100.3 21.8,101.7 C22.8,103.1 24.6,104.8 25.1,106.4 C25.7,107.9 25.3,109.6 25.2,111.1 C25.1,112.7 25.1,114.3 24.5,115.7 C23.9,117.2 22.9,118.8 21.7,120.0 C20.4,121.1 17.7,122.4 16.8,122.6 C15.8,122.8 15.6,122.0 16.0,121.3 C16.5,120.6 18.8,119.4 19.5,118.2 C20.2,117.1 20.2,115.5 20.3,114.3 C20.5,113.1 20.4,112.2 20.4,111.2 C20.3,110.2 20.4,109.5 20.2,108.3 C20.0,107.1 19.7,105.3 19.1,104.1 C18.6,102.9 18.0,101.9 17.1,101.1 C16.3,100.3 14.6,99.8 14.1,99.3 C13.6,98.7 13.5,97.9 14.3,97.6 Z'/><path d='M8.2,123.4 C7.3,123.6 4.7,123.4 3.3,122.9 C2.0,122.3 0.9,121.2 -0.1,120.0 C-1.0,118.8 -2.2,117.1 -2.3,115.4 C-2.4,113.7 -1.2,111.5 -0.6,109.7 C0.0,107.9 0.5,106.0 1.4,104.6 C2.3,103.3 4.2,101.8 5.0,101.6 C5.7,101.3 6.1,102.2 6.0,103.0 C5.9,103.9 5.0,105.4 4.5,106.7 C4.0,107.9 3.1,109.2 2.9,110.5 C2.6,111.8 2.9,113.2 3.0,114.5 C3.0,115.7 2.9,117.0 3.3,117.9 C3.7,118.9 4.4,119.6 5.3,120.2 C6.2,120.8 8.1,121.2 8.6,121.7 C9.1,122.2 9.0,123.2 8.2,123.4 Z'/><path d='M413.5,98.7 C414.3,98.5 416.8,98.6 418.2,99.0 C419.6,99.5 421.0,100.6 422.1,101.6 C423.2,102.6 424.1,103.6 424.5,105.2 C424.9,106.7 424.4,109.3 424.5,111.1 C424.5,112.9 425.4,114.3 425.0,115.8 C424.5,117.3 423.0,118.9 421.6,120.1 C420.1,121.3 417.3,122.7 416.2,122.9 C415.2,123.1 414.9,122.2 415.2,121.3 C415.6,120.4 417.7,118.7 418.5,117.5 C419.4,116.4 419.9,115.3 420.3,114.2 C420.7,113.2 421.0,112.4 420.8,111.2 C420.7,110.0 419.8,108.3 419.5,107.2 C419.2,106.0 419.7,105.1 419.2,104.2 C418.8,103.3 417.7,102.6 416.7,101.9 C415.7,101.3 413.8,101.0 413.3,100.5 C412.7,99.9 412.7,99.0 413.5,98.7 Z'/><path d='M407.9,124.5 C407.0,124.5 404.6,124.0 403.2,123.3 C401.7,122.6 400.0,121.6 399.2,120.2 C398.3,118.9 398.4,117.1 398.2,115.3 C398.0,113.4 397.3,110.7 398.0,109.0 C398.7,107.3 401.1,106.4 402.2,105.0 C403.4,103.5 404.3,101.1 404.8,100.5 C405.4,100.0 405.6,100.6 405.5,101.6 C405.5,102.6 405.3,105.3 404.8,106.7 C404.3,108.1 402.7,108.7 402.4,110.0 C402.2,111.3 403.1,113.0 403.1,114.4 C403.1,115.8 402.2,117.2 402.5,118.2 C402.9,119.2 404.4,119.5 405.4,120.4 C406.3,121.2 407.8,122.6 408.2,123.3 C408.6,124.0 408.7,124.5 407.9,124.5 Z'/><path d='M146.5,89.3 C147.2,89.0 149.3,88.9 150.6,89.0 C152.0,89.1 153.4,89.7 154.8,90.0 C156.1,90.3 158.0,89.9 159.0,90.7 C160.0,91.5 160.6,93.5 160.8,94.7 C161.0,95.8 160.6,97.1 160.3,97.7 C160.0,98.2 159.3,98.2 158.9,98.0 C158.5,97.8 158.3,97.0 157.7,96.4 C157.2,95.8 156.4,94.7 155.6,94.4 C154.7,94.1 153.4,94.9 152.5,94.5 C151.6,94.1 151.1,92.7 150.1,92.0 C149.2,91.3 147.3,91.0 146.7,90.5 C146.1,90.1 145.9,89.5 146.5,89.3 Z'/><path d='M162.1,102.8 C162.3,103.3 162.9,105.2 162.4,106.1 C161.8,106.9 159.7,107.3 158.8,107.9 C157.9,108.6 158.2,109.8 157.0,110.1 C155.8,110.3 153.2,109.9 151.8,109.6 C150.3,109.3 148.8,108.7 148.2,108.3 C147.7,107.9 147.9,107.5 148.4,107.3 C149.0,107.1 150.3,107.5 151.5,107.3 C152.6,107.2 154.4,106.7 155.3,106.4 C156.1,106.1 155.9,105.8 156.6,105.5 C157.4,105.2 159.1,105.1 159.9,104.6 C160.6,104.1 160.8,102.8 161.2,102.5 C161.5,102.2 161.9,102.2 162.1,102.8 Z'/><path d='M142.2,105.5 C141.4,105.5 139.3,105.1 138.5,104.6 C137.7,104.1 137.7,103.2 137.3,102.5 C136.9,101.8 136.4,100.9 136.1,100.2 C135.7,99.4 135.2,98.7 135.3,98.0 C135.3,97.3 136.0,96.1 136.3,95.8 C136.7,95.5 137.0,95.7 137.5,96.1 C138.0,96.5 138.9,97.6 139.2,98.1 C139.6,98.7 139.3,99.1 139.4,99.6 C139.6,100.1 139.7,100.9 140.1,101.4 C140.5,101.9 141.1,102.1 141.5,102.6 C142.0,103.1 142.9,104.1 143.0,104.6 C143.1,105.1 142.9,105.5 142.2,105.5 Z'/><path d='M162.2,117.8 C161.6,117.5 160.1,116.3 159.5,115.2 C158.9,114.1 158.7,112.6 158.7,111.3 C158.8,110.1 159.3,108.8 159.8,107.6 C160.4,106.4 161.0,105.1 162.0,104.2 C163.1,103.4 164.7,102.9 166.1,102.5 C167.6,102.0 169.3,101.6 170.8,101.6 C172.2,101.5 174.2,102.0 174.8,102.4 C175.3,102.9 174.8,103.8 174.2,104.2 C173.5,104.6 172.0,104.4 170.9,104.8 C169.9,105.3 168.9,106.3 168.0,106.8 C167.0,107.3 166.2,107.4 165.4,107.8 C164.7,108.2 164.0,108.7 163.5,109.4 C163.0,110.0 162.8,110.9 162.6,111.7 C162.4,112.6 162.1,113.6 162.2,114.5 C162.3,115.4 163.3,116.5 163.3,117.1 C163.3,117.6 162.8,118.1 162.2,117.8 Z'/><path d='M180.7,108.2 C181.5,108.7 183.6,110.5 184.3,112.0 C184.9,113.4 185.0,115.3 184.5,116.8 C184.1,118.3 182.8,119.7 181.5,120.9 C180.2,122.1 178.2,123.8 176.6,124.0 C175.1,124.2 172.7,122.7 172.0,122.1 C171.2,121.6 171.4,120.9 171.9,120.6 C172.4,120.2 173.7,120.3 174.7,119.9 C175.8,119.5 177.5,118.8 178.3,118.1 C179.1,117.3 179.3,116.1 179.6,115.1 C179.8,114.2 179.9,113.3 179.9,112.3 C179.8,111.3 179.2,109.6 179.3,108.9 C179.5,108.3 179.9,107.7 180.7,108.2 Z'/><path d='M223.4,97.8 C223.6,98.7 222.9,101.1 222.5,103.1 C222.0,105.0 221.8,107.8 220.8,109.7 C219.8,111.5 218.0,113.1 216.2,114.0 C214.5,114.8 212.0,114.7 210.2,114.6 C208.3,114.6 205.8,114.3 205.1,113.8 C204.3,113.4 204.9,112.7 205.7,112.0 C206.5,111.3 208.7,110.4 210.0,109.7 C211.2,108.9 212.3,108.1 213.3,107.4 C214.3,106.6 215.2,106.1 216.0,105.1 C216.8,104.1 217.1,102.5 218.0,101.3 C218.9,100.1 220.5,98.4 221.4,97.8 C222.3,97.3 223.3,97.0 223.4,97.8 Z'/><path d='M200.1,109.2 C199.4,108.7 198.0,106.2 197.6,104.9 C197.2,103.7 197.7,103.2 197.6,101.7 C197.4,100.3 196.3,97.9 196.7,96.3 C197.2,94.7 199.1,93.3 200.3,92.1 C201.5,90.9 203.1,89.3 203.9,89.1 C204.7,88.9 205.3,89.9 205.3,90.7 C205.2,91.6 203.9,93.0 203.4,94.1 C202.9,95.3 202.6,96.6 202.4,97.9 C202.1,99.1 202.0,100.6 201.8,101.6 C201.7,102.6 201.3,102.6 201.3,103.6 C201.3,104.7 202.1,107.0 201.9,107.9 C201.7,108.9 200.9,109.7 200.1,109.2 Z'/><path d='M212.9,85.5 C213.4,84.9 215.0,83.8 216.1,83.6 C217.2,83.5 218.5,84.0 219.4,84.6 C220.3,85.3 220.8,86.6 221.4,87.5 C222.1,88.3 223.0,88.7 223.2,89.8 C223.4,90.9 222.9,93.4 222.5,94.2 C222.1,95.0 221.3,95.1 220.8,94.7 C220.2,94.3 219.8,92.7 219.3,92.1 C218.8,91.5 218.2,91.6 217.8,91.1 C217.3,90.7 217.0,90.1 216.6,89.4 C216.2,88.7 215.8,87.1 215.2,86.8 C214.6,86.5 213.3,87.7 212.9,87.5 C212.5,87.2 212.3,86.1 212.9,85.5 Z'/><path d='M255.9,82.2 C256.6,81.9 258.6,82.3 260.3,82.4 C261.9,82.4 264.6,81.5 265.8,82.5 C267.1,83.4 267.3,86.3 267.8,88.2 C268.3,90.1 268.8,92.2 268.7,94.1 C268.6,95.9 267.8,97.4 267.3,99.3 C266.8,101.1 266.9,103.9 265.7,105.1 C264.5,106.3 261.0,106.7 259.9,106.7 C258.8,106.7 258.5,105.6 259.0,104.9 C259.4,104.2 261.8,103.5 262.5,102.4 C263.2,101.2 263.0,99.2 263.2,97.9 C263.4,96.6 263.5,95.7 263.7,94.4 C263.8,93.0 264.5,91.2 264.3,89.9 C264.1,88.5 263.4,86.7 262.5,86.1 C261.6,85.4 259.9,86.4 258.8,86.1 C257.8,85.8 256.4,84.8 255.9,84.1 C255.5,83.5 255.2,82.4 255.9,82.2 Z'/><path d='M249.5,108.5 C248.7,108.6 246.2,108.4 245.1,107.5 C243.9,106.6 243.4,104.9 242.6,103.3 C241.9,101.7 241.0,99.7 240.8,98.0 C240.5,96.3 240.4,94.7 241.1,93.2 C241.8,91.6 244.1,89.3 244.9,88.8 C245.8,88.2 246.3,88.8 246.3,89.7 C246.3,90.6 245.2,92.8 244.9,94.1 C244.7,95.4 244.8,96.3 245.0,97.5 C245.2,98.7 245.7,100.3 246.2,101.4 C246.6,102.6 247.0,103.7 247.6,104.7 C248.3,105.6 249.8,106.2 250.1,106.9 C250.5,107.5 250.4,108.4 249.5,108.5 Z'/><path d='M298.9,115.5 C298.4,115.1 297.4,113.7 297.2,112.7 C297.0,111.7 297.2,110.5 297.6,109.5 C297.9,108.5 298.5,107.6 299.4,106.7 C300.2,105.8 301.4,104.2 302.7,103.9 C304.0,103.6 305.8,104.6 307.1,104.9 C308.4,105.2 309.5,105.1 310.6,105.7 C311.7,106.2 313.1,107.5 313.5,108.1 C313.8,108.7 313.2,109.0 312.6,109.1 C311.9,109.1 310.5,108.7 309.6,108.5 C308.7,108.3 308.0,108.0 307.2,107.9 C306.3,107.9 305.3,107.9 304.6,108.3 C303.8,108.6 303.4,109.7 302.7,110.1 C302.1,110.5 301.0,110.4 300.6,110.8 C300.3,111.3 300.7,112.1 300.6,112.8 C300.5,113.5 300.4,114.6 300.1,115.1 C299.8,115.5 299.4,115.9 298.9,115.5 Z'/><path d='M317.1,113.2 C317.3,113.7 317.5,115.5 317.2,116.3 C316.8,117.2 315.8,117.6 314.8,118.4 C313.9,119.2 312.6,120.8 311.4,121.2 C310.2,121.6 308.8,121.0 307.6,120.9 C306.4,120.8 305.2,120.9 304.1,120.4 C302.9,120.0 301.2,118.8 300.8,118.3 C300.5,117.8 301.2,117.3 301.8,117.2 C302.5,117.2 304.1,117.8 305.0,118.0 C306.0,118.2 306.7,118.3 307.6,118.3 C308.4,118.3 309.2,118.4 310.1,118.0 C311.0,117.7 311.9,116.8 312.7,116.3 C313.6,115.9 314.5,116.0 315.0,115.4 C315.6,114.9 315.7,113.5 316.1,113.2 C316.4,112.8 316.9,112.7 317.1,113.2 Z'/><path d='M359.6,109.0 C358.9,109.9 355.9,111.1 353.8,111.7 C351.6,112.4 348.8,113.1 346.8,112.8 C344.9,112.5 343.3,111.1 341.9,110.0 C340.4,108.8 339.5,107.5 338.1,105.9 C336.7,104.4 333.8,102.6 333.5,100.7 C333.1,98.7 335.6,96.1 336.1,94.1 C336.5,92.1 335.2,90.3 336.1,88.5 C337.1,86.7 339.7,84.7 341.7,83.5 C343.7,82.4 346.2,82.0 348.2,81.6 C350.2,81.1 352.8,80.6 353.7,80.9 C354.6,81.1 354.4,82.2 353.8,83.0 C353.1,83.7 351.1,84.5 349.7,85.3 C348.4,86.1 346.5,86.6 345.5,87.7 C344.5,88.9 344.3,91.3 343.7,92.4 C343.1,93.6 342.1,93.8 341.8,94.8 C341.6,95.8 342.0,97.4 342.5,98.5 C343.0,99.6 344.3,100.4 344.8,101.4 C345.4,102.4 345.2,103.7 345.8,104.5 C346.5,105.4 347.3,106.2 348.6,106.5 C349.8,106.8 351.7,106.3 353.3,106.3 C354.9,106.2 357.3,105.8 358.4,106.3 C359.4,106.7 360.4,108.1 359.6,109.0 Z'/><path d='M363.2,94.8 C362.6,94.1 362.6,91.8 363.3,91.0 C364.0,90.2 366.2,90.2 367.5,90.2 C368.8,90.1 370.4,89.8 371.1,90.5 C371.7,91.2 371.9,93.6 371.2,94.4 C370.5,95.2 368.0,95.4 366.7,95.4 C365.4,95.5 363.8,95.6 363.2,94.8 Z'/><path d='M31.2,131.1 C31.8,130.7 33.7,130.1 34.9,130.3 C36.2,130.5 37.9,131.3 38.7,132.1 C39.5,132.9 39.1,134.2 39.6,135.3 C40.2,136.3 42.1,137.4 42.1,138.4 C42.1,139.4 40.5,140.6 39.8,141.3 C39.0,142.0 38.1,142.7 37.6,142.8 C37.0,142.8 36.6,142.1 36.4,141.6 C36.3,141.1 36.3,140.5 36.5,139.9 C36.8,139.3 37.8,138.8 37.8,138.2 C37.8,137.7 36.7,137.0 36.4,136.4 C36.0,135.8 36.3,135.2 35.9,134.6 C35.4,134.0 34.4,133.3 33.6,133.0 C32.8,132.6 31.5,132.7 31.1,132.4 C30.7,132.0 30.5,131.4 31.2,131.1 Z'/><path d='M31.5,144.3 C30.9,144.7 29.0,145.0 27.8,144.9 C26.5,144.9 25.0,144.6 23.9,143.9 C22.7,143.1 21.5,141.8 20.9,140.7 C20.2,139.7 19.8,138.6 20.0,137.6 C20.1,136.6 21.1,135.3 21.7,134.5 C22.4,133.7 23.2,132.8 23.7,132.6 C24.1,132.4 24.4,133.0 24.6,133.5 C24.8,134.0 24.9,134.9 24.9,135.6 C24.9,136.3 24.5,136.8 24.6,137.4 C24.6,137.9 24.7,138.2 25.1,138.8 C25.4,139.4 26.1,140.3 26.7,140.9 C27.3,141.5 27.9,142.2 28.7,142.5 C29.5,142.9 31.0,142.5 31.5,142.8 C32.0,143.1 32.1,144.0 31.5,144.3 Z'/><path d='M71.1,160.1 C70.3,160.5 67.5,161.4 66.2,161.1 C64.8,160.8 64.2,159.5 63.1,158.4 C62.1,157.3 60.2,156.0 59.8,154.6 C59.4,153.2 60.7,151.5 60.9,150.0 C61.1,148.5 60.3,146.8 60.9,145.7 C61.5,144.6 63.9,143.7 64.6,143.5 C65.4,143.3 65.5,143.8 65.4,144.4 C65.3,145.0 64.0,146.1 63.8,147.1 C63.6,148.1 64.1,149.2 64.3,150.2 C64.4,151.2 64.3,152.0 64.5,153.0 C64.8,154.0 65.3,155.3 65.8,156.1 C66.3,156.9 66.8,157.6 67.7,158.1 C68.6,158.5 70.6,158.5 71.2,158.9 C71.8,159.2 71.9,159.8 71.1,160.1 Z'/><path d='M70.6,141.4 C71.3,141.0 73.4,140.1 74.9,140.3 C76.3,140.4 78.2,141.8 79.3,142.5 C80.3,143.2 80.8,143.3 81.4,144.3 C82.1,145.4 82.9,147.5 83.2,149.0 C83.5,150.4 83.5,151.8 83.0,153.0 C82.5,154.2 81.0,155.8 80.4,156.2 C79.7,156.7 79.2,156.1 79.2,155.5 C79.2,154.8 80.2,153.5 80.4,152.5 C80.6,151.4 80.6,150.5 80.3,149.5 C80.0,148.4 79.0,146.8 78.4,146.1 C77.9,145.5 77.6,146.1 76.9,145.5 C76.2,144.9 75.2,143.0 74.2,142.5 C73.2,142.0 71.3,142.8 70.7,142.6 C70.1,142.4 69.9,141.8 70.6,141.4 Z'/><path d='M103.7,119.4 C104.4,118.9 106.6,117.6 108.2,117.8 C109.8,117.9 112.2,119.3 113.5,120.3 C114.9,121.2 115.9,122.2 116.5,123.6 C117.0,125.0 116.5,127.1 116.7,128.6 C116.9,130.1 118.3,131.1 117.9,132.5 C117.4,133.9 114.8,136.3 114.0,136.8 C113.2,137.4 112.9,136.9 113.0,136.0 C113.1,135.1 114.6,132.7 114.7,131.5 C114.9,130.3 114.1,129.9 113.8,128.9 C113.6,127.9 113.7,126.4 113.3,125.4 C113.0,124.3 112.7,123.4 111.7,122.7 C110.7,122.0 108.6,121.3 107.4,121.0 C106.1,120.8 104.6,121.3 104.0,121.0 C103.4,120.8 103.0,119.9 103.7,119.4 Z'/><path d='M105.4,141.7 C104.8,141.9 103.2,142.5 101.6,142.2 C100.0,141.9 96.9,140.9 95.7,140.0 C94.6,139.0 95.4,137.7 94.8,136.5 C94.2,135.3 92.4,134.2 92.2,132.8 C91.9,131.4 92.8,129.4 93.3,128.1 C93.7,126.8 94.4,125.4 94.9,125.0 C95.4,124.6 96.0,125.1 96.2,125.7 C96.4,126.3 96.3,127.4 96.1,128.5 C95.9,129.6 94.9,131.1 95.1,132.2 C95.3,133.3 97.1,134.0 97.5,134.9 C98.0,135.7 97.1,136.5 97.9,137.2 C98.8,137.9 101.4,138.5 102.6,139.0 C103.8,139.6 104.9,140.2 105.4,140.7 C105.8,141.1 106.0,141.4 105.4,141.7 Z'/><path d='M221.7,143.5 C221.5,142.4 221.3,138.9 222.2,137.7 C223.0,136.4 225.0,136.5 226.7,136.2 C228.3,135.9 230.6,135.8 232.1,135.8 C233.7,135.8 234.7,135.7 236.1,136.3 C237.6,136.9 239.6,138.0 240.9,139.4 C242.3,140.7 243.6,142.8 244.3,144.4 C245.0,146.0 245.2,148.2 244.9,149.1 C244.6,149.9 243.3,149.7 242.4,149.3 C241.5,149.0 240.3,148.0 239.5,146.9 C238.7,145.9 238.6,143.8 237.7,143.1 C236.7,142.4 234.6,143.3 233.7,142.9 C232.8,142.5 233.0,141.1 232.2,140.8 C231.3,140.4 229.8,141.0 228.6,141.0 C227.3,140.9 225.6,140.0 224.8,140.5 C224.0,141.1 224.1,144.0 223.6,144.5 C223.1,145.0 221.9,144.7 221.7,143.5 Z'/><path d='M243.5,156.6 C243.7,157.6 243.1,160.2 242.3,161.5 C241.4,162.8 240.0,164.2 238.4,164.5 C236.8,164.7 234.3,163.5 232.6,163.0 C230.8,162.4 229.3,162.2 228.0,161.2 C226.7,160.1 225.1,157.6 224.8,156.7 C224.5,155.7 225.3,155.4 226.2,155.5 C227.1,155.5 229.0,156.5 230.2,156.9 C231.3,157.3 231.9,157.5 233.0,157.7 C234.0,158.0 235.5,158.4 236.5,158.4 C237.6,158.5 238.5,158.4 239.3,157.9 C240.1,157.4 240.8,155.7 241.5,155.4 C242.2,155.2 243.4,155.5 243.5,156.6 Z'/><path d='M272.6,161.2 C272.2,162.1 270.4,163.9 268.9,164.7 C267.3,165.5 265.4,165.8 263.4,166.0 C261.4,166.2 258.9,166.6 257.1,166.0 C255.3,165.4 253.6,164.0 252.4,162.5 C251.3,161.1 250.7,158.9 250.1,157.3 C249.4,155.7 248.5,154.6 248.5,152.8 C248.5,150.9 249.3,148.2 250.2,146.4 C251.1,144.5 252.6,143.3 253.8,141.9 C255.0,140.4 255.9,138.4 257.5,137.6 C259.0,136.9 262.3,137.1 263.3,137.3 C264.4,137.6 264.4,138.5 263.7,139.0 C263.0,139.5 260.2,139.4 259.2,140.4 C258.3,141.4 258.6,143.7 257.9,145.0 C257.2,146.2 255.4,146.5 254.9,147.8 C254.4,149.0 254.9,151.2 255.0,152.4 C255.1,153.6 255.4,153.9 255.7,154.9 C256.0,155.9 256.0,157.5 256.7,158.5 C257.3,159.5 258.4,160.5 259.6,161.0 C260.8,161.5 262.5,161.4 263.9,161.5 C265.3,161.6 266.8,161.9 268.1,161.5 C269.4,161.2 270.7,159.5 271.4,159.4 C272.2,159.4 273.1,160.4 272.6,161.2 Z'/><path d='M274.6,148.0 C274.1,147.5 274.1,146.0 274.6,145.2 C275.0,144.4 276.2,143.4 277.1,143.1 C278.0,142.8 279.2,143.0 279.8,143.5 C280.3,144.0 280.6,145.4 280.3,146.3 C279.9,147.1 278.4,148.2 277.5,148.5 C276.5,148.8 275.1,148.6 274.6,148.0 Z'/><path d='M293.9,153.9 C293.4,153.3 292.2,151.2 292.1,149.9 C292.0,148.6 292.9,147.3 293.4,145.9 C294.0,144.5 294.5,142.6 295.5,141.4 C296.5,140.2 298.2,139.0 299.6,138.7 C300.9,138.4 302.2,139.7 303.6,139.7 C304.9,139.7 306.4,138.3 307.7,138.8 C308.9,139.3 310.4,141.4 311.2,142.7 C311.9,144.0 312.3,145.8 312.2,146.5 C312.0,147.3 311.0,147.5 310.4,147.3 C309.8,147.1 309.4,146.0 308.6,145.3 C307.8,144.7 306.6,143.5 305.8,143.3 C304.9,143.1 304.2,144.3 303.5,144.3 C302.7,144.4 302.2,143.6 301.3,143.6 C300.5,143.7 298.9,143.9 298.3,144.6 C297.6,145.4 297.9,147.1 297.5,148.0 C297.1,149.0 296.1,149.4 295.7,150.3 C295.4,151.2 295.6,152.9 295.3,153.5 C295.0,154.1 294.4,154.5 293.9,153.9 Z'/><path d='M306.5,156.2 C307.0,156.2 307.7,157.2 308.0,158.0 C308.3,158.7 308.3,160.0 308.0,160.5 C307.8,161.1 306.9,161.3 306.3,161.3 C305.7,161.3 304.8,161.0 304.5,160.4 C304.3,159.9 304.7,158.7 305.0,158.0 C305.3,157.3 305.9,156.2 306.5,156.2 Z'/><path d='M327.7,135.7 C327.1,134.9 327.1,131.9 326.7,130.1 C326.3,128.3 325.4,126.9 325.5,124.9 C325.5,122.9 325.7,119.4 326.8,117.9 C327.8,116.4 330.2,116.3 332.0,115.9 C333.7,115.5 335.3,115.8 337.2,115.7 C339.0,115.6 341.5,114.8 343.0,115.3 C344.4,115.9 344.8,117.5 346.0,119.0 C347.2,120.4 349.6,122.3 350.3,124.1 C351.1,125.9 350.7,128.9 350.4,129.9 C350.2,130.9 349.3,130.9 348.7,130.3 C348.1,129.7 347.7,127.6 346.7,126.4 C345.7,125.3 343.6,124.3 342.6,123.5 C341.7,122.7 341.9,122.3 341.1,121.9 C340.2,121.5 338.6,120.9 337.5,120.9 C336.5,120.9 335.7,121.7 334.8,122.0 C333.8,122.4 332.6,122.2 331.9,123.1 C331.2,123.9 330.8,126.0 330.6,127.2 C330.3,128.5 330.4,129.1 330.3,130.4 C330.3,131.7 330.6,134.1 330.2,135.0 C329.8,135.8 328.3,136.5 327.7,135.7 Z'/><path d='M341.2,138.5 C341.8,138.1 343.8,138.8 344.3,139.6 C344.8,140.4 344.4,142.1 344.2,143.2 C344.1,144.3 343.9,146.0 343.3,146.2 C342.7,146.4 341.4,145.0 340.9,144.2 C340.3,143.4 340.2,142.5 340.2,141.6 C340.3,140.6 340.5,138.8 341.2,138.5 Z'/><path d='M372.7,143.2 C372.1,143.3 370.7,143.0 369.6,142.5 C368.6,142.0 366.8,141.4 366.3,140.3 C365.8,139.2 366.3,137.3 366.5,135.8 C366.7,134.3 366.6,132.7 367.3,131.5 C368.1,130.3 370.0,128.7 370.8,128.4 C371.6,128.1 372.1,128.8 372.2,129.5 C372.3,130.2 371.7,131.8 371.6,132.7 C371.4,133.7 371.3,134.5 371.2,135.3 C371.2,136.2 371.1,137.0 371.2,137.8 C371.3,138.6 371.3,139.5 371.6,140.2 C371.9,140.9 372.9,141.5 373.1,142.0 C373.3,142.5 373.3,143.1 372.7,143.2 Z'/><path d='M376.6,124.7 C377.1,124.1 378.6,122.7 379.7,122.3 C380.7,121.9 382.1,121.9 383.0,122.3 C383.9,122.7 384.5,123.9 385.0,124.8 C385.6,125.7 386.0,126.8 386.3,127.7 C386.5,128.6 386.6,129.8 386.3,130.2 C386.1,130.7 385.5,130.6 385.0,130.5 C384.4,130.4 383.5,130.0 383.1,129.5 C382.7,129.0 382.8,128.0 382.5,127.5 C382.1,127.1 381.6,127.0 381.0,126.7 C380.5,126.4 380.0,125.9 379.3,125.8 C378.6,125.7 377.3,126.2 376.9,126.0 C376.4,125.8 376.1,125.3 376.6,124.7 Z'/><path d='M385.1,136.3 C385.3,136.9 385.6,138.8 385.2,139.6 C384.8,140.4 383.6,140.5 382.7,141.1 C381.8,141.6 380.7,142.6 379.9,142.9 C379.1,143.2 378.5,142.8 377.9,142.8 C377.2,142.8 376.3,143.1 376.0,142.9 C375.7,142.7 375.8,142.1 376.1,141.6 C376.3,141.1 377.0,140.4 377.3,139.9 C377.7,139.5 377.7,139.4 378.2,139.1 C378.7,138.8 379.6,138.3 380.2,137.9 C380.9,137.6 381.4,137.5 382.0,137.1 C382.6,136.7 383.2,135.8 383.7,135.7 C384.2,135.5 384.8,135.6 385.1,136.3 Z'/><path d='M10.0,180.5 C9.4,181.0 7.5,181.6 6.2,181.5 C4.9,181.5 3.7,180.8 2.4,180.3 C1.2,179.8 -0.6,179.9 -1.3,178.7 C-2.0,177.6 -1.6,174.9 -1.7,173.5 C-1.8,172.0 -2.3,171.1 -2.0,169.9 C-1.6,168.7 -0.6,167.4 0.3,166.3 C1.2,165.2 2.7,163.5 3.4,163.2 C4.2,163.0 4.7,163.9 4.8,164.7 C4.8,165.5 4.0,167.0 3.7,168.0 C3.5,169.0 3.2,169.7 3.1,170.4 C3.0,171.2 3.2,171.4 3.1,172.3 C3.1,173.2 2.6,175.2 2.9,176.0 C3.2,176.7 4.2,176.6 5.0,176.9 C5.7,177.2 6.5,177.5 7.3,177.8 C8.1,178.2 9.4,178.4 9.9,178.9 C10.3,179.3 10.6,180.1 10.0,180.5 Z'/><path d='M10.6,160.1 C11.3,159.7 13.3,159.3 14.8,159.4 C16.3,159.5 18.3,159.9 19.5,160.7 C20.7,161.6 21.7,163.0 22.0,164.7 C22.2,166.3 21.6,169.0 21.0,170.6 C20.4,172.1 19.2,173.6 18.5,174.0 C17.8,174.4 17.0,173.8 16.8,173.1 C16.6,172.5 17.5,171.4 17.4,170.4 C17.4,169.3 16.7,167.8 16.3,166.8 C16.0,165.8 16.1,165.2 15.6,164.5 C15.1,163.9 14.3,163.2 13.5,162.8 C12.7,162.4 11.2,162.8 10.7,162.3 C10.2,161.9 9.9,160.6 10.6,160.1 Z'/><path d='M409.6,180.8 C409.1,181.1 407.6,180.9 406.3,180.9 C405.1,180.9 403.4,180.9 402.1,180.6 C400.8,180.2 399.2,179.9 398.6,178.7 C398.1,177.4 398.6,174.7 398.7,173.2 C398.8,171.8 399.2,171.3 399.4,170.0 C399.6,168.7 399.4,166.6 400.0,165.5 C400.7,164.4 402.6,163.4 403.4,163.3 C404.2,163.1 404.8,164.1 404.7,164.7 C404.7,165.3 403.4,166.0 403.1,167.0 C402.8,167.9 403.0,169.5 402.9,170.4 C402.8,171.3 402.6,171.4 402.6,172.3 C402.6,173.2 402.7,174.9 403.0,175.8 C403.3,176.6 403.8,177.0 404.5,177.4 C405.2,177.7 406.4,177.5 407.3,177.7 C408.1,178.0 409.1,178.4 409.5,178.9 C409.9,179.4 410.1,180.5 409.6,180.8 Z'/><path d='M409.9,160.3 C410.7,159.8 413.0,159.5 414.7,159.4 C416.4,159.3 419.2,158.9 420.3,159.8 C421.5,160.7 421.5,163.3 421.7,164.9 C421.8,166.6 421.8,167.9 421.2,169.5 C420.7,171.0 418.9,173.5 418.1,174.2 C417.4,174.8 416.8,174.3 416.7,173.5 C416.6,172.6 417.5,170.4 417.6,169.3 C417.6,168.2 417.4,167.5 417.1,166.7 C416.9,165.8 416.6,164.7 416.0,164.0 C415.4,163.3 414.4,163.0 413.4,162.7 C412.4,162.4 410.6,162.7 410.0,162.3 C409.4,161.9 409.1,160.8 409.9,160.3 Z'/><path d='M98.4,189.5 C97.7,189.2 95.8,187.9 94.8,187.1 C93.8,186.2 92.9,185.5 92.5,184.2 C92.0,182.9 91.9,180.7 92.1,179.2 C92.4,177.8 93.1,176.3 93.9,175.4 C94.8,174.4 96.2,174.4 97.3,173.7 C98.3,173.0 99.3,171.2 100.4,171.2 C101.4,171.2 103.3,173.0 103.8,173.6 C104.4,174.2 104.1,174.8 103.6,174.9 C103.2,175.0 101.9,174.1 101.1,174.3 C100.3,174.5 99.5,175.5 98.9,176.1 C98.3,176.7 98.0,177.1 97.4,177.7 C96.8,178.4 95.4,179.0 95.2,180.0 C94.9,181.0 95.5,182.8 95.9,183.7 C96.3,184.6 97.2,184.6 97.7,185.4 C98.3,186.2 99.1,187.8 99.2,188.5 C99.3,189.2 99.1,189.7 98.4,189.5 Z'/><path d='M111.0,178.1 C111.7,178.6 113.6,180.0 114.1,181.5 C114.6,183.0 114.1,185.5 113.7,186.9 C113.4,188.4 112.8,189.5 111.8,190.3 C110.9,191.1 109.2,191.7 107.9,191.9 C106.6,192.2 104.6,192.2 103.9,192.0 C103.2,191.9 103.4,191.6 103.9,191.1 C104.3,190.7 105.8,189.8 106.7,189.3 C107.5,188.8 108.6,188.6 109.2,188.0 C109.9,187.5 110.0,186.9 110.4,185.9 C110.7,184.9 111.2,183.0 111.2,181.8 C111.1,180.6 110.0,179.3 110.0,178.7 C110.0,178.1 110.3,177.7 111.0,178.1 Z'/><path d='M151.7,193.5 C151.7,194.3 150.7,196.1 149.9,197.5 C149.1,198.9 148.4,201.1 147.0,201.9 C145.5,202.7 143.0,202.5 141.2,202.4 C139.5,202.3 138.3,202.0 136.7,201.2 C135.0,200.4 132.8,199.0 131.3,197.8 C129.8,196.5 128.7,195.0 127.5,193.5 C126.3,192.0 124.4,190.5 124.1,188.9 C123.8,187.3 125.2,185.5 125.8,183.9 C126.4,182.4 127.1,180.2 127.8,179.6 C128.4,179.1 129.2,179.9 129.6,180.7 C129.9,181.6 129.7,183.5 129.7,184.6 C129.7,185.8 129.0,186.9 129.5,187.9 C130.0,188.8 131.9,189.3 132.8,190.3 C133.6,191.3 133.5,192.9 134.4,193.8 C135.4,194.6 137.4,195.0 138.4,195.3 C139.5,195.6 139.8,195.3 140.7,195.5 C141.7,195.6 143.4,196.4 144.3,196.1 C145.2,195.8 145.1,194.3 146.0,193.8 C146.9,193.2 149.0,192.8 150.0,192.8 C150.9,192.7 151.8,192.7 151.7,193.5 Z'/><path d='M147.1,180.7 C146.5,181.4 145.5,182.6 144.6,182.3 C143.6,182.1 141.7,180.3 141.4,179.4 C141.1,178.5 142.1,177.5 142.7,176.8 C143.4,176.1 144.2,175.0 145.1,175.2 C146.1,175.5 148.0,177.2 148.3,178.1 C148.6,179.0 147.7,180.0 147.1,180.7 Z'/><path d='M239.5,184.6 C238.5,183.9 235.9,182.3 235.5,180.3 C235.2,178.3 236.0,174.3 237.2,172.5 C238.5,170.8 241.4,171.3 243.2,169.9 C244.9,168.4 246.0,165.2 247.9,164.0 C249.8,162.7 252.3,162.4 254.5,162.4 C256.8,162.5 259.9,162.9 261.5,164.1 C263.2,165.3 264.2,168.4 264.5,169.6 C264.7,170.7 263.9,171.1 263.1,171.0 C262.3,170.9 260.9,169.4 259.4,169.0 C258.0,168.6 255.9,168.5 254.3,168.7 C252.8,168.8 251.4,169.3 250.1,170.1 C248.7,170.9 247.5,172.6 246.3,173.5 C245.1,174.4 243.8,174.2 242.8,175.4 C241.8,176.7 240.4,179.4 240.1,180.8 C239.9,182.3 241.4,183.5 241.3,184.1 C241.2,184.7 240.5,185.2 239.5,184.6 Z'/><path d='M268.2,179.3 C268.8,180.3 269.8,183.5 269.5,185.5 C269.2,187.6 267.9,190.0 266.4,191.5 C264.8,193.0 262.2,193.7 260.1,194.6 C258.0,195.6 255.8,197.3 253.7,197.3 C251.5,197.3 248.3,195.3 247.3,194.6 C246.4,193.9 246.8,193.3 247.8,193.0 C248.8,192.7 251.8,193.6 253.3,192.8 C254.9,192.0 255.7,189.3 257.0,188.3 C258.3,187.3 259.9,187.6 261.1,186.8 C262.3,186.1 263.4,184.9 264.2,183.6 C265.0,182.4 265.2,180.1 265.9,179.4 C266.6,178.7 267.6,178.3 268.2,179.3 Z'/><path d='M306.6,204.1 C306.1,204.6 304.0,204.7 302.6,204.8 C301.1,205.0 299.7,205.4 298.1,205.0 C296.4,204.6 294.1,203.7 292.8,202.6 C291.5,201.4 290.6,199.7 290.1,198.1 C289.6,196.4 289.9,194.2 289.8,192.7 C289.8,191.1 289.4,189.4 289.7,188.8 C290.1,188.3 291.5,188.8 292.1,189.3 C292.7,189.8 293.0,191.0 293.4,192.1 C293.8,193.1 294.0,194.4 294.5,195.5 C295.0,196.5 295.3,197.7 296.2,198.3 C297.1,198.8 299.0,198.2 300.0,198.7 C301.1,199.2 301.4,200.6 302.3,201.2 C303.3,201.7 304.9,201.5 305.6,202.0 C306.4,202.5 307.1,203.6 306.6,204.1 Z'/><path d='M294.0,179.5 C294.5,178.9 296.5,178.2 298.1,178.0 C299.7,177.8 301.9,177.9 303.6,178.3 C305.2,178.7 306.7,179.3 308.1,180.4 C309.5,181.6 311.1,183.6 311.8,185.3 C312.6,187.0 312.5,189.0 312.4,190.7 C312.3,192.5 311.8,195.0 311.3,195.7 C310.8,196.5 310.1,196.0 309.5,195.2 C308.8,194.5 308.1,192.5 307.6,191.3 C307.1,190.2 307.1,189.3 306.4,188.4 C305.8,187.5 304.5,186.8 303.8,186.0 C303.0,185.2 303.0,184.1 302.1,183.6 C301.3,183.1 299.9,183.3 298.7,183.0 C297.6,182.6 295.9,182.2 295.2,181.6 C294.4,181.0 293.5,180.1 294.0,179.5 Z'/><path d='M339.2,194.0 C338.5,193.4 337.0,191.4 336.6,189.9 C336.2,188.3 336.6,186.5 336.9,184.8 C337.2,183.1 337.6,181.0 338.3,179.6 C339.1,178.1 340.1,176.6 341.4,176.1 C342.7,175.6 344.6,176.4 346.1,176.5 C347.6,176.6 349.0,176.2 350.3,176.7 C351.5,177.1 352.7,178.1 353.6,179.2 C354.4,180.2 355.5,182.2 355.4,183.0 C355.4,183.9 354.1,184.4 353.3,184.3 C352.6,184.2 351.8,182.8 351.0,182.5 C350.3,182.2 349.4,182.6 348.7,182.4 C347.9,182.2 347.3,181.4 346.6,181.3 C345.9,181.2 345.0,181.4 344.3,181.8 C343.6,182.1 342.9,182.4 342.5,183.3 C342.1,184.1 342.3,185.6 342.1,186.7 C341.8,187.7 341.2,188.6 341.0,189.8 C340.8,190.9 341.1,192.6 340.8,193.3 C340.5,194.0 339.9,194.6 339.2,194.0 Z'/><path d='M352.0,193.0 C352.7,193.1 353.4,194.5 353.7,195.3 C354.1,196.1 354.3,197.1 354.1,197.8 C353.9,198.5 353.1,199.4 352.4,199.5 C351.7,199.7 350.1,199.6 349.7,198.8 C349.3,198.0 349.4,195.9 349.8,194.9 C350.1,193.9 351.4,192.9 352.0,193.0 Z'/><path d='M-31.0,178.6 C-32.0,178.0 -34.1,175.5 -34.9,174.1 C-35.7,172.6 -35.4,171.7 -35.6,170.0 C-35.7,168.3 -36.2,165.5 -35.7,163.8 C-35.2,162.2 -33.9,160.8 -32.6,160.1 C-31.3,159.5 -28.6,159.6 -27.7,159.9 C-26.8,160.2 -26.8,161.3 -27.2,161.9 C-27.6,162.5 -29.4,162.7 -30.1,163.5 C-30.8,164.3 -31.0,165.4 -31.1,166.6 C-31.3,167.9 -30.9,169.7 -30.8,170.8 C-30.8,171.9 -31.1,172.1 -30.8,173.2 C-30.5,174.2 -29.0,176.3 -29.0,177.2 C-29.1,178.1 -30.0,179.1 -31.0,178.6 Z'/><path d='M-19.2,163.2 C-18.2,162.9 -15.0,162.3 -13.8,163.0 C-12.6,163.7 -12.7,166.1 -11.9,167.3 C-11.1,168.6 -9.6,169.1 -9.0,170.6 C-8.5,172.1 -8.1,175.2 -8.5,176.5 C-8.9,177.9 -10.6,178.5 -11.3,178.8 C-12.0,179.1 -12.5,178.6 -12.9,178.2 C-13.2,177.8 -13.3,177.3 -13.4,176.2 C-13.6,175.2 -13.2,172.7 -13.8,171.8 C-14.4,170.8 -16.4,171.2 -16.9,170.4 C-17.4,169.5 -16.5,167.6 -17.0,166.7 C-17.5,165.7 -19.5,165.3 -19.9,164.7 C-20.2,164.2 -20.2,163.5 -19.2,163.2 Z'/><path d='M-15.8,185.4 C-16.1,185.9 -17.1,186.9 -18.2,187.3 C-19.3,187.7 -21.4,188.0 -22.6,187.7 C-23.9,187.4 -24.8,186.3 -25.7,185.5 C-26.7,184.8 -27.6,184.1 -28.5,183.2 C-29.3,182.3 -30.5,180.8 -30.7,180.2 C-30.8,179.5 -30.1,179.0 -29.4,179.1 C-28.7,179.1 -27.5,180.3 -26.6,180.6 C-25.7,180.8 -24.7,180.2 -23.9,180.7 C-23.2,181.2 -23.0,182.9 -22.2,183.3 C-21.3,183.7 -19.8,183.1 -18.9,183.3 C-17.9,183.5 -16.9,183.9 -16.4,184.2 C-15.9,184.6 -15.5,184.9 -15.8,185.4 Z'/><path d='M368.0,179.6 C367.2,178.9 365.4,176.8 364.6,174.9 C363.8,173.0 363.1,170.1 363.2,168.4 C363.3,166.7 364.4,166.2 365.1,164.7 C365.7,163.3 365.6,160.3 367.0,159.6 C368.4,158.9 372.3,160.1 373.4,160.7 C374.6,161.2 374.5,162.1 374.0,162.7 C373.4,163.2 370.8,163.0 370.3,164.0 C369.7,164.9 370.9,167.2 370.6,168.1 C370.3,169.0 368.8,168.3 368.5,169.3 C368.2,170.3 368.7,172.4 368.8,174.0 C369.0,175.5 369.5,177.7 369.4,178.6 C369.2,179.6 368.8,180.2 368.0,179.6 Z'/><path d='M380.3,162.0 C381.3,161.9 384.5,162.2 385.9,162.9 C387.3,163.7 388.1,165.1 388.8,166.5 C389.6,167.9 389.8,169.8 390.2,171.2 C390.6,172.6 391.2,173.7 391.2,175.1 C391.2,176.6 390.6,179.3 390.2,180.0 C389.7,180.7 389.0,180.2 388.3,179.3 C387.6,178.4 386.3,175.9 385.8,174.8 C385.4,173.6 385.7,173.3 385.5,172.4 C385.3,171.4 385.2,170.0 384.7,169.0 C384.2,168.1 383.5,167.5 382.7,166.6 C381.8,165.7 380.0,164.3 379.6,163.6 C379.2,162.8 379.2,162.1 380.3,162.0 Z'/><path d='M384.4,186.0 C383.9,186.2 381.7,185.8 380.7,186.0 C379.6,186.2 379.3,187.3 378.2,187.4 C377.1,187.5 375.3,187.1 374.2,186.5 C373.1,185.9 372.2,184.9 371.5,183.8 C370.7,182.8 369.6,180.8 369.5,180.0 C369.3,179.2 369.9,178.9 370.6,179.1 C371.3,179.2 372.8,180.1 373.6,180.8 C374.4,181.4 374.7,182.7 375.5,182.9 C376.4,183.2 377.9,182.4 378.7,182.3 C379.5,182.3 379.3,182.3 380.1,182.6 C381.0,183.0 383.0,183.8 383.7,184.4 C384.4,184.9 384.9,185.7 384.4,186.0 Z'/><path d='M20.4,222.6 C19.7,223.0 17.4,223.7 15.7,223.1 C14.1,222.5 11.9,220.3 10.3,218.9 C8.7,217.6 7.5,216.6 6.1,215.0 C4.8,213.4 2.8,211.5 2.2,209.5 C1.6,207.6 2.1,205.4 2.5,203.4 C2.9,201.4 3.7,199.1 4.7,197.7 C5.6,196.3 7.5,195.2 8.4,195.1 C9.2,194.9 9.6,195.8 9.6,196.7 C9.6,197.5 8.9,198.7 8.5,199.9 C8.2,201.2 7.4,202.7 7.3,204.1 C7.3,205.5 7.6,206.8 8.1,208.1 C8.5,209.5 9.4,211.0 10.2,212.1 C11.0,213.2 12.0,213.6 13.0,214.7 C14.1,215.8 15.4,217.7 16.6,218.7 C17.7,219.7 19.3,220.0 20.0,220.6 C20.6,221.3 21.1,222.2 20.4,222.6 Z'/><path d='M15.3,193.1 C16.2,192.8 19.0,192.5 20.6,193.0 C22.1,193.4 23.5,194.7 24.7,196.1 C25.9,197.4 26.9,199.3 27.7,201.1 C28.4,202.9 29.0,205.0 29.3,206.8 C29.6,208.7 29.8,210.4 29.4,212.2 C28.9,214.0 27.1,216.9 26.4,217.7 C25.8,218.5 25.5,217.9 25.2,216.8 C25.0,215.6 25.4,212.5 25.2,210.9 C24.9,209.3 24.1,208.6 23.9,207.3 C23.6,205.9 24.1,204.3 23.7,203.0 C23.2,201.8 21.8,201.0 21.0,200.0 C20.2,199.0 19.9,197.8 19.0,197.0 C18.0,196.2 15.9,195.8 15.3,195.1 C14.7,194.5 14.4,193.5 15.3,193.1 Z'/><path d='M419.4,220.0 C418.7,220.8 416.6,223.3 415.3,223.3 C414.0,223.2 413.1,220.9 411.5,219.6 C409.8,218.2 406.8,217.0 405.4,215.2 C404.1,213.5 404.2,211.0 403.6,209.0 C403.1,207.0 402.3,205.3 402.3,203.3 C402.3,201.3 402.7,198.5 403.6,196.9 C404.5,195.3 406.9,194.1 407.8,193.8 C408.7,193.5 409.0,194.2 408.9,195.1 C408.8,196.0 407.7,197.6 407.3,199.0 C407.0,200.5 406.4,202.4 406.6,203.9 C406.8,205.3 407.9,206.5 408.6,207.8 C409.3,209.0 410.0,210.0 410.9,211.4 C411.7,212.7 412.9,214.8 413.8,216.0 C414.6,217.2 415.3,218.2 416.2,218.6 C417.1,219.0 418.5,218.0 419.0,218.3 C419.6,218.5 420.0,219.2 419.4,220.0 Z'/><path d='M414.9,191.9 C415.7,191.9 418.2,192.5 419.7,193.2 C421.2,193.8 422.5,194.4 424.0,195.7 C425.5,197.0 427.7,198.9 428.6,200.7 C429.6,202.5 429.5,204.6 429.5,206.7 C429.5,208.8 429.0,211.6 428.5,213.2 C428.0,214.8 427.0,215.8 426.4,216.1 C425.8,216.4 425.1,215.6 424.9,214.9 C424.7,214.3 425.5,213.6 425.4,212.3 C425.4,210.9 424.9,208.6 424.7,207.1 C424.4,205.5 424.7,204.2 424.1,202.9 C423.4,201.6 421.8,200.2 420.8,199.1 C419.9,198.0 419.4,197.5 418.4,196.5 C417.4,195.5 415.5,194.1 414.9,193.4 C414.3,192.6 414.1,191.9 414.9,191.9 Z'/><path d='M47.6,202.9 C47.3,202.0 46.7,199.4 47.3,197.9 C47.9,196.4 50.1,194.9 51.2,193.9 C52.4,192.9 52.7,192.1 54.3,191.9 C56.0,191.7 58.9,192.5 61.0,192.6 C63.2,192.7 65.4,191.9 67.1,192.7 C68.7,193.5 69.6,196.0 70.7,197.5 C71.9,199.0 73.6,200.8 73.9,201.6 C74.2,202.4 73.6,202.4 72.5,202.2 C71.5,202.0 68.9,201.2 67.6,200.6 C66.2,199.9 65.6,198.9 64.5,198.3 C63.3,197.8 62.2,197.6 60.7,197.3 C59.2,197.0 56.7,196.2 55.6,196.3 C54.5,196.4 55.0,197.3 54.2,197.9 C53.5,198.6 51.9,199.5 51.1,200.4 C50.2,201.2 49.8,202.8 49.2,203.2 C48.6,203.6 47.9,203.7 47.6,202.9 Z'/><path d='M73.5,210.4 C73.6,211.2 73.3,213.3 72.7,214.8 C72.1,216.3 71.3,218.6 69.8,219.5 C68.3,220.4 65.9,220.0 63.8,220.1 C61.8,220.3 59.0,221.1 57.3,220.2 C55.7,219.2 54.3,215.6 53.9,214.4 C53.4,213.2 54.0,213.0 54.7,213.2 C55.5,213.4 57.0,215.2 58.4,215.7 C59.9,216.2 61.9,216.6 63.4,216.3 C64.8,216.1 66.0,215.0 67.1,214.4 C68.2,213.7 69.1,213.1 69.9,212.4 C70.8,211.7 71.5,210.3 72.1,209.9 C72.7,209.6 73.4,209.6 73.5,210.4 Z'/><path d='M97.9,223.8 C97.3,223.9 95.8,223.4 94.7,222.8 C93.6,222.1 92.4,220.9 91.3,220.0 C90.3,219.0 89.0,218.3 88.5,217.2 C88.0,216.2 88.4,215.0 88.5,213.6 C88.5,212.3 88.3,210.5 88.8,209.2 C89.3,207.9 90.4,206.6 91.5,205.8 C92.5,205.1 94.2,204.6 94.9,204.5 C95.6,204.4 95.6,204.8 95.4,205.4 C95.3,205.9 94.7,207.1 94.1,207.9 C93.5,208.7 92.2,209.2 91.8,210.2 C91.4,211.1 91.6,212.5 91.6,213.4 C91.6,214.4 91.4,215.0 91.7,215.8 C92.1,216.5 92.9,217.0 93.5,217.8 C94.2,218.6 94.9,219.9 95.7,220.6 C96.4,221.4 97.6,221.8 98.0,222.4 C98.3,222.9 98.4,223.7 97.9,223.8 Z'/><path d='M100.8,201.9 C101.5,201.9 103.9,201.8 104.9,202.6 C105.9,203.4 106.3,205.3 106.9,206.6 C107.4,207.8 107.8,208.8 108.2,210.1 C108.6,211.5 109.6,213.2 109.4,214.7 C109.3,216.1 108.4,217.7 107.4,218.8 C106.3,219.9 103.9,221.0 103.1,221.3 C102.3,221.5 102.1,220.9 102.5,220.3 C102.9,219.7 104.8,218.5 105.4,217.4 C106.1,216.4 106.1,215.1 106.2,214.0 C106.2,212.8 106.1,211.6 105.9,210.6 C105.6,209.6 104.9,209.1 104.6,208.1 C104.2,207.1 104.3,205.5 103.6,204.6 C103.0,203.7 101.1,203.4 100.7,202.9 C100.2,202.5 100.1,202.0 100.8,201.9 Z'/><path d='M127.0,218.6 C126.0,218.4 122.6,217.1 121.3,216.0 C120.0,215.0 119.8,213.7 119.3,212.4 C118.9,211.1 118.5,209.7 118.5,208.2 C118.6,206.8 119.2,205.0 119.8,203.8 C120.4,202.5 120.9,201.3 122.1,200.7 C123.4,200.1 126.4,200.0 127.4,200.1 C128.3,200.2 128.3,200.8 127.8,201.4 C127.3,201.9 125.0,202.5 124.4,203.3 C123.7,204.0 124.2,204.9 123.9,205.8 C123.7,206.7 123.0,207.7 123.0,208.5 C122.9,209.4 123.2,210.3 123.5,211.1 C123.7,211.9 123.7,212.5 124.4,213.5 C125.1,214.5 127.4,216.4 127.8,217.2 C128.2,218.1 128.1,218.8 127.0,218.6 Z'/><path d='M139.2,202.4 C140.0,202.4 141.7,202.5 143.0,203.3 C144.2,204.1 145.9,205.9 146.8,207.2 C147.6,208.5 148.3,209.9 148.2,211.2 C148.0,212.6 146.8,214.2 145.8,215.2 C144.7,216.2 142.5,217.1 141.7,217.4 C140.9,217.6 140.9,217.1 141.0,216.5 C141.2,215.9 142.2,214.5 142.8,213.6 C143.4,212.6 144.7,211.7 144.7,210.8 C144.7,209.9 143.6,209.1 142.9,208.3 C142.1,207.4 140.7,206.3 140.0,205.5 C139.3,204.7 138.8,203.9 138.6,203.4 C138.5,202.9 138.5,202.4 139.2,202.4 Z'/><path d='M190.5,214.6 C189.9,214.7 188.3,214.6 187.4,214.2 C186.5,213.8 185.6,213.0 185.0,212.2 C184.4,211.3 183.9,210.1 183.8,209.0 C183.7,207.8 184.1,206.5 184.3,205.4 C184.5,204.3 184.6,203.0 184.9,202.5 C185.2,202.1 185.5,202.4 185.9,202.9 C186.3,203.4 187.0,204.7 187.3,205.6 C187.5,206.4 187.5,207.1 187.5,207.9 C187.6,208.7 187.3,209.7 187.6,210.4 C187.9,211.0 188.7,211.2 189.3,211.7 C189.8,212.2 190.7,212.8 190.9,213.3 C191.1,213.8 191.1,214.4 190.5,214.6 Z'/><path d='M188.9,197.8 C189.1,197.2 190.2,195.9 191.1,195.5 C192.0,195.1 193.3,195.1 194.4,195.4 C195.5,195.8 196.8,196.8 197.6,197.5 C198.5,198.2 199.0,199.0 199.5,199.8 C200.0,200.6 200.6,201.9 200.6,202.5 C200.7,203.0 200.1,203.2 199.6,203.0 C199.2,202.8 198.4,201.8 197.8,201.5 C197.2,201.1 196.7,201.2 196.1,200.8 C195.4,200.5 194.6,199.6 193.9,199.3 C193.2,199.0 192.4,198.8 191.7,198.7 C191.0,198.7 190.1,199.3 189.6,199.1 C189.1,199.0 188.6,198.4 188.9,197.8 Z'/><path d='M202.6,207.3 C202.7,207.8 202.6,209.3 202.4,210.3 C202.2,211.3 202.1,212.6 201.4,213.2 C200.8,213.8 199.4,213.6 198.6,214.0 C197.8,214.5 197.3,215.6 196.6,215.9 C195.8,216.1 194.5,215.8 194.1,215.6 C193.7,215.4 193.8,215.1 194.1,214.7 C194.4,214.3 195.3,213.7 195.8,213.2 C196.3,212.7 196.5,211.9 197.0,211.6 C197.5,211.2 198.4,211.5 198.9,211.1 C199.5,210.8 199.8,210.1 200.3,209.4 C200.8,208.8 201.3,207.5 201.7,207.2 C202.1,206.8 202.5,206.7 202.6,207.3 Z'/><path d='M196.4,223.5 C196.6,222.5 197.4,219.6 198.7,218.4 C200.0,217.3 202.3,216.8 204.2,216.4 C206.1,216.0 208.2,215.9 209.9,216.2 C211.7,216.4 213.5,216.9 214.8,217.9 C216.1,218.9 216.8,220.7 217.7,222.2 C218.7,223.7 220.5,225.4 220.6,226.9 C220.6,228.5 218.7,230.8 218.0,231.5 C217.2,232.3 216.2,231.9 216.0,231.3 C215.7,230.7 216.8,229.1 216.5,228.0 C216.2,226.9 214.9,225.7 214.1,224.8 C213.2,224.0 212.5,223.4 211.6,222.9 C210.7,222.4 209.9,221.9 208.8,221.6 C207.8,221.4 206.5,221.4 205.1,221.4 C203.8,221.4 202.0,221.3 200.8,221.7 C199.5,222.2 198.2,224.0 197.5,224.3 C196.7,224.6 196.2,224.4 196.4,223.5 Z'/><path d='M214.6,240.4 C214.1,241.3 212.0,243.3 210.4,244.0 C208.8,244.8 206.9,245.2 205.1,245.2 C203.4,245.2 201.3,244.8 199.9,244.1 C198.5,243.3 197.7,242.0 196.7,240.7 C195.8,239.5 194.7,238.1 194.2,236.7 C193.7,235.3 193.7,233.0 194.0,232.3 C194.3,231.5 195.3,231.7 195.9,232.1 C196.6,232.6 197.4,233.9 198.0,234.9 C198.7,235.8 199.0,236.9 199.7,237.6 C200.3,238.3 201.0,238.8 201.9,239.2 C202.8,239.6 204.0,239.5 205.3,239.8 C206.5,240.0 207.9,240.9 209.2,240.8 C210.6,240.6 212.3,238.8 213.2,238.7 C214.1,238.7 215.1,239.5 214.6,240.4 Z'/><path d='M253.3,222.0 C252.4,221.4 250.4,219.0 250.0,217.3 C249.6,215.5 250.4,213.4 250.7,211.4 C251.0,209.4 251.0,206.9 251.9,205.3 C252.8,203.6 254.9,202.4 256.2,201.3 C257.6,200.2 258.7,199.1 260.2,198.7 C261.7,198.3 264.6,198.4 265.4,198.8 C266.3,199.1 265.8,199.8 265.2,200.8 C264.6,201.8 262.7,203.6 261.8,204.6 C260.9,205.5 260.5,205.5 259.9,206.4 C259.4,207.2 259.3,208.6 258.6,209.6 C257.9,210.6 256.5,211.3 256.0,212.5 C255.4,213.6 255.6,215.0 255.4,216.4 C255.3,217.8 255.5,220.0 255.1,221.0 C254.8,221.9 254.1,222.7 253.3,222.0 Z'/><path d='M273.5,205.6 C274.4,206.3 275.8,209.2 276.9,211.2 C278.0,213.2 280.4,215.3 280.2,217.4 C279.9,219.5 276.8,222.0 275.4,223.9 C274.1,225.8 273.5,227.8 272.0,228.5 C270.5,229.3 267.6,228.7 266.7,228.3 C265.7,227.9 265.7,226.5 266.2,226.0 C266.7,225.4 268.9,226.0 269.7,225.1 C270.5,224.3 270.4,222.5 271.0,221.1 C271.7,219.6 273.3,217.7 273.5,216.3 C273.8,214.8 272.8,213.8 272.5,212.2 C272.1,210.7 271.3,208.2 271.5,207.0 C271.7,205.9 272.6,204.9 273.5,205.6 Z'/><path d='M317.0,242.0 C316.9,243.3 315.9,247.5 314.3,248.8 C312.6,250.1 309.4,249.3 307.0,249.8 C304.7,250.4 302.1,252.4 300.1,252.3 C298.0,252.2 296.2,250.8 294.7,249.4 C293.1,248.0 292.1,245.4 291.0,243.7 C289.9,241.9 288.8,240.5 288.2,238.7 C287.7,236.9 287.4,233.8 287.6,232.8 C287.9,231.9 288.7,232.3 289.8,233.0 C290.8,233.6 293.0,235.7 293.9,236.9 C294.8,238.1 294.6,239.1 295.2,240.3 C295.9,241.4 297.0,242.8 297.9,243.7 C298.9,244.6 299.8,245.5 301.1,245.6 C302.4,245.7 304.2,244.6 305.8,244.3 C307.4,243.9 309.1,244.0 310.7,243.4 C312.3,242.8 314.1,241.0 315.2,240.7 C316.2,240.5 317.2,240.7 317.0,242.0 Z'/><path d='M293.4,223.5 C293.7,222.4 295.8,220.3 297.5,218.7 C299.1,217.0 301.2,214.2 303.4,213.6 C305.7,212.9 308.9,214.0 311.1,214.8 C313.3,215.6 315.3,216.6 316.6,218.2 C318.0,219.8 318.8,222.4 319.1,224.5 C319.5,226.6 319.2,229.7 318.8,230.8 C318.3,231.9 317.5,231.7 316.7,231.1 C315.9,230.5 314.7,228.6 314.0,227.3 C313.3,226.0 313.4,224.0 312.5,223.3 C311.6,222.5 310.1,223.1 308.7,222.7 C307.3,222.3 305.5,220.8 304.0,220.9 C302.5,221.0 301.2,222.6 299.7,223.3 C298.3,224.0 296.4,225.2 295.3,225.3 C294.2,225.3 293.0,224.6 293.4,223.5 Z'/><path d='M379.4,198.7 C380.0,199.0 381.1,200.9 381.8,202.0 C382.6,203.1 383.7,204.2 384.0,205.5 C384.4,206.8 384.4,208.8 384.0,210.1 C383.7,211.3 382.7,212.0 382.0,213.0 C381.3,213.9 380.7,215.2 379.7,215.7 C378.8,216.2 377.6,216.2 376.3,216.1 C375.1,216.1 372.9,215.7 372.3,215.3 C371.7,214.8 371.9,213.8 372.5,213.5 C373.1,213.2 374.9,213.6 375.6,213.4 C376.4,213.1 376.7,212.3 377.2,211.9 C377.7,211.4 378.4,211.2 378.8,210.6 C379.1,210.1 378.9,209.5 379.2,208.7 C379.4,207.9 380.2,206.7 380.1,205.8 C380.0,204.9 379.0,204.4 378.6,203.4 C378.3,202.5 378.0,200.7 378.1,199.9 C378.2,199.1 378.7,198.3 379.4,198.7 Z'/><path d='M364.2,210.0 C363.5,209.6 362.4,207.6 361.9,206.3 C361.4,205.0 361.0,203.5 361.1,202.2 C361.1,200.9 361.6,199.5 362.2,198.4 C362.9,197.3 364.0,196.5 364.9,195.8 C365.9,195.1 367.4,194.2 368.0,194.3 C368.6,194.4 368.7,195.5 368.6,196.3 C368.5,197.1 367.9,198.4 367.4,199.1 C366.9,199.8 366.0,199.9 365.6,200.5 C365.3,201.2 365.4,202.2 365.4,203.0 C365.5,203.8 366.0,204.5 366.0,205.5 C366.1,206.5 366.2,208.2 365.8,209.0 C365.5,209.7 364.8,210.5 364.2,210.0 Z'/><path d='M18.8,250.9 C18.4,250.4 18.0,248.9 17.7,247.6 C17.4,246.3 16.7,244.3 17.1,243.1 C17.5,241.8 19.2,241.3 20.3,240.4 C21.4,239.6 22.3,238.3 23.6,237.9 C24.9,237.5 26.4,237.4 28.0,237.9 C29.5,238.3 32.1,240.0 32.8,240.8 C33.5,241.5 33.1,242.0 32.3,242.1 C31.5,242.3 29.1,241.7 27.9,241.6 C26.8,241.6 25.9,241.4 25.1,241.6 C24.3,241.9 23.8,242.8 23.1,243.2 C22.3,243.7 20.9,243.8 20.5,244.6 C20.2,245.3 21.1,246.7 21.0,247.7 C21.0,248.7 20.6,249.8 20.2,250.4 C19.9,250.9 19.3,251.3 18.8,250.9 Z'/><path d='M40.5,246.1 C41.3,246.6 43.3,248.4 43.7,249.5 C44.1,250.6 43.3,251.7 43.0,252.9 C42.7,254.0 42.8,255.6 41.8,256.5 C40.9,257.5 38.6,258.3 37.2,258.5 C35.8,258.8 34.0,258.3 33.2,258.0 C32.5,257.7 32.7,257.2 33.0,256.6 C33.2,256.1 34.0,255.2 34.8,254.7 C35.6,254.2 37.0,253.9 37.7,253.4 C38.3,252.9 38.4,252.2 38.6,251.6 C38.9,251.0 39.1,250.6 39.1,249.8 C39.2,249.1 38.8,247.4 39.0,246.8 C39.2,246.2 39.7,245.7 40.5,246.1 Z'/><path d='M73.1,276.4 C72.6,277.0 70.7,278.0 69.3,278.5 C67.9,278.9 66.1,279.0 64.7,279.0 C63.2,279.0 61.6,279.1 60.6,278.3 C59.5,277.4 59.1,275.2 58.4,273.7 C57.7,272.3 56.9,270.7 56.6,269.4 C56.4,268.2 56.7,266.7 56.9,266.2 C57.1,265.7 57.5,265.9 57.9,266.3 C58.3,266.7 58.5,267.8 59.1,268.7 C59.6,269.5 60.8,270.4 61.4,271.4 C62.0,272.4 62.1,274.1 62.7,274.9 C63.3,275.6 64.2,275.8 65.3,276.0 C66.3,276.2 67.7,276.2 68.9,276.1 C70.1,275.9 71.7,275.1 72.4,275.2 C73.1,275.3 73.6,275.9 73.1,276.4 Z'/><path d='M61.3,258.0 C61.6,257.4 62.8,256.2 64.1,255.5 C65.3,254.8 67.2,253.9 68.8,253.7 C70.4,253.6 72.5,253.7 73.8,254.5 C75.1,255.3 76.1,257.2 76.8,258.5 C77.6,259.8 78.3,261.5 78.3,262.2 C78.4,262.9 77.7,262.9 77.0,262.7 C76.3,262.4 75.2,261.4 74.3,260.7 C73.4,260.0 72.8,258.8 71.8,258.4 C70.8,258.0 69.6,258.2 68.4,258.2 C67.3,258.2 66.0,258.2 64.9,258.3 C63.9,258.4 62.7,259.0 62.1,259.0 C61.5,258.9 60.9,258.5 61.3,258.0 Z'/><path d='M111.1,264.5 C110.5,264.5 108.9,263.9 108.0,263.2 C107.1,262.5 106.4,261.3 105.6,260.3 C104.9,259.3 103.9,258.6 103.4,257.3 C102.9,256.1 102.5,254.2 102.7,252.7 C102.9,251.3 103.4,249.5 104.5,248.5 C105.5,247.5 107.6,247.6 108.9,246.8 C110.2,246.0 111.0,244.3 112.3,243.8 C113.7,243.2 115.5,243.4 116.9,243.7 C118.4,244.1 120.4,245.1 121.0,245.7 C121.5,246.4 120.8,247.4 120.1,247.5 C119.3,247.6 117.8,246.5 116.7,246.5 C115.5,246.4 114.1,246.6 113.2,247.2 C112.3,247.8 111.9,249.3 111.2,250.0 C110.5,250.7 109.5,250.8 108.9,251.5 C108.4,252.1 108.2,253.0 107.9,253.9 C107.7,254.8 107.2,256.0 107.3,256.8 C107.4,257.5 108.2,257.9 108.7,258.6 C109.2,259.2 109.9,259.7 110.3,260.4 C110.8,261.2 111.5,262.3 111.7,263.0 C111.8,263.7 111.8,264.4 111.1,264.5 Z'/><path d='M126.3,256.9 C126.5,257.5 126.5,258.6 126.1,259.1 C125.6,259.7 124.3,260.0 123.6,260.0 C122.8,260.1 121.9,259.8 121.6,259.3 C121.3,258.8 121.1,257.5 121.6,257.0 C122.0,256.4 123.6,255.9 124.4,255.9 C125.1,255.9 126.0,256.4 126.3,256.9 Z'/><path d='M141.5,267.2 C141.6,267.8 141.1,268.7 140.5,269.7 C139.9,270.7 138.9,272.5 137.7,273.3 C136.5,274.0 134.9,274.3 133.5,274.4 C132.2,274.6 130.7,274.7 129.5,274.3 C128.3,274.0 127.3,273.2 126.1,272.6 C125.0,271.9 123.1,271.5 122.7,270.5 C122.3,269.5 123.3,267.2 123.6,266.5 C124.0,265.8 124.6,265.8 124.9,266.2 C125.2,266.5 124.8,268.1 125.4,268.5 C126.1,269.0 127.9,268.4 128.7,268.7 C129.6,269.0 129.8,270.1 130.5,270.3 C131.2,270.5 132.2,270.0 133.0,269.8 C133.9,269.6 134.8,269.4 135.6,269.0 C136.5,268.6 137.3,267.8 138.0,267.4 C138.7,266.9 139.4,266.6 140.0,266.6 C140.6,266.5 141.4,266.7 141.5,267.2 Z'/><path d='M123.8,261.7 C123.8,260.9 124.1,258.8 124.9,257.8 C125.7,256.7 127.3,256.0 128.6,255.3 C129.9,254.7 131.5,254.2 132.7,253.9 C133.9,253.7 134.8,253.5 135.9,253.9 C137.0,254.4 138.7,256.1 139.1,256.8 C139.5,257.4 139.1,257.7 138.4,257.7 C137.7,257.8 135.9,257.2 135.0,257.1 C134.1,257.0 133.8,256.8 133.0,257.1 C132.2,257.3 131.3,258.3 130.3,258.7 C129.4,259.2 128.1,259.3 127.2,259.9 C126.3,260.5 125.5,261.8 124.9,262.1 C124.4,262.4 123.8,262.4 123.8,261.7 Z'/><path d='M189.2,259.8 C189.6,259.4 191.1,258.9 192.2,259.1 C193.3,259.3 194.2,260.3 195.6,260.8 C196.9,261.4 199.0,261.5 200.2,262.5 C201.3,263.4 202.2,265.2 202.5,266.5 C202.8,267.8 202.1,269.5 201.7,270.1 C201.3,270.8 200.7,270.6 200.1,270.3 C199.5,270.0 198.8,269.2 198.1,268.5 C197.5,267.8 197.1,266.7 196.3,266.1 C195.5,265.5 194.2,265.3 193.4,264.8 C192.7,264.3 192.2,263.6 191.5,263.1 C190.9,262.6 189.9,262.2 189.5,261.6 C189.1,261.1 188.7,260.2 189.2,259.8 Z'/><path d='M201.5,276.8 C201.4,277.3 200.5,278.6 199.9,279.3 C199.2,280.1 198.5,280.8 197.8,281.4 C197.1,281.9 196.7,282.2 195.7,282.5 C194.7,282.8 193.2,283.6 191.9,283.2 C190.6,282.9 188.5,281.2 187.9,280.6 C187.4,279.9 187.7,279.3 188.4,279.1 C189.1,278.9 191.0,279.4 192.1,279.4 C193.2,279.5 194.4,279.7 195.0,279.5 C195.7,279.3 195.7,278.7 196.0,278.3 C196.4,277.8 196.4,276.9 197.1,276.6 C197.9,276.3 199.9,276.3 200.6,276.3 C201.3,276.4 201.6,276.3 201.5,276.8 Z'/><path d='M182.2,274.4 C181.6,274.2 180.3,273.3 179.7,272.5 C179.2,271.7 179.0,270.9 178.8,269.7 C178.6,268.5 178.3,266.6 178.6,265.3 C178.8,264.1 179.4,262.9 180.2,262.3 C181.0,261.7 182.8,261.7 183.5,261.8 C184.1,261.9 184.4,262.4 184.3,262.8 C184.2,263.2 183.3,263.7 183.1,264.4 C182.9,265.1 182.9,266.0 183.0,266.9 C183.1,267.9 183.6,269.2 183.6,270.0 C183.6,270.9 183.1,271.2 183.0,271.8 C183.0,272.5 183.5,273.4 183.4,273.9 C183.3,274.3 182.9,274.7 182.2,274.4 Z'/><path d='M252.7,262.0 C252.8,261.0 253.9,257.9 255.1,256.8 C256.3,255.7 258.3,255.9 259.9,255.5 C261.5,255.1 263.0,254.4 264.7,254.3 C266.4,254.3 268.4,254.6 269.9,255.3 C271.5,255.9 272.9,257.1 274.0,258.4 C275.1,259.7 275.5,261.4 276.3,262.9 C277.2,264.5 279.0,267.0 279.2,267.9 C279.4,268.7 278.4,268.6 277.3,268.1 C276.3,267.6 273.9,265.8 272.8,264.8 C271.8,263.7 271.8,262.5 271.0,261.7 C270.2,260.9 269.1,260.3 268.1,259.9 C267.0,259.5 265.7,259.6 264.6,259.6 C263.5,259.5 262.5,259.5 261.3,259.5 C260.1,259.4 258.4,258.8 257.3,259.4 C256.2,260.0 255.4,262.7 254.7,263.1 C253.9,263.6 252.6,263.1 252.7,262.0 Z'/><path d='M274.3,279.9 C273.9,280.7 271.8,282.2 270.4,283.2 C268.9,284.1 267.3,285.4 265.5,285.6 C263.7,285.8 261.2,285.2 259.6,284.4 C257.9,283.6 256.8,282.3 255.6,280.9 C254.3,279.4 252.3,276.7 252.1,275.6 C251.8,274.6 253.0,274.4 254.2,274.6 C255.4,274.8 258.0,276.2 259.3,276.8 C260.6,277.4 260.9,277.9 261.9,278.3 C262.9,278.7 264.3,279.2 265.4,279.2 C266.5,279.3 267.2,278.7 268.5,278.6 C269.7,278.4 271.8,278.1 272.8,278.3 C273.8,278.6 274.7,279.1 274.3,279.9 Z'/><path d='M296.4,258.3 C295.9,258.8 294.2,259.9 292.9,259.9 C291.6,259.9 290.0,258.8 288.5,258.0 C287.1,257.2 285.7,256.2 284.4,255.1 C283.1,253.9 281.6,252.5 280.8,251.0 C280.0,249.6 279.7,247.7 279.6,246.2 C279.5,244.7 279.9,242.7 280.3,242.1 C280.7,241.5 281.5,241.9 282.0,242.5 C282.6,243.1 283.2,244.6 283.6,245.7 C283.9,246.8 283.4,248.4 284.1,249.3 C284.9,250.2 287.0,250.4 288.0,251.1 C289.0,251.9 289.4,253.3 290.2,254.0 C291.1,254.8 292.2,255.0 293.1,255.5 C294.1,256.0 295.4,256.5 296.0,257.0 C296.5,257.4 296.9,257.8 296.4,258.3 Z'/><path d='M285.8,234.8 C286.1,234.1 287.3,232.8 288.5,232.6 C289.7,232.4 291.5,233.2 292.9,233.8 C294.3,234.4 295.4,235.3 296.8,236.3 C298.2,237.3 300.4,238.3 301.3,239.7 C302.3,241.2 302.5,243.6 302.6,245.1 C302.6,246.7 301.9,248.4 301.5,249.0 C301.0,249.7 300.3,249.4 299.9,248.8 C299.4,248.3 299.2,247.1 298.9,245.9 C298.5,244.8 298.5,243.1 297.7,242.1 C296.9,241.1 295.2,240.4 294.2,239.8 C293.1,239.2 292.4,239.1 291.4,238.5 C290.5,238.0 289.5,236.8 288.7,236.4 C287.8,236.1 287.0,236.9 286.6,236.6 C286.1,236.3 285.5,235.4 285.8,234.8 Z'/><path d='M348.3,239.4 C349.2,239.7 352.0,241.7 353.0,242.8 C354.0,243.9 353.9,244.6 354.4,246.0 C355.0,247.4 355.8,249.3 356.2,251.1 C356.5,253.0 357.2,255.6 356.4,257.1 C355.7,258.6 353.0,258.8 351.5,259.9 C350.1,260.9 349.2,262.8 347.5,263.4 C345.8,263.9 343.2,263.9 341.5,263.3 C339.8,262.6 337.8,260.4 337.2,259.4 C336.6,258.5 337.2,257.9 338.0,257.8 C338.8,257.6 340.5,258.5 341.8,258.4 C343.0,258.3 344.6,257.9 345.5,257.3 C346.4,256.7 346.6,255.5 347.3,254.9 C348.1,254.3 349.7,254.4 350.0,253.7 C350.3,252.9 349.1,251.4 349.1,250.3 C349.1,249.2 350.0,248.0 350.0,247.2 C350.1,246.4 349.8,246.5 349.4,245.5 C348.9,244.5 347.4,242.2 347.2,241.2 C347.0,240.2 347.3,239.2 348.3,239.4 Z'/><path d='M329.7,244.1 C330.0,243.5 331.0,243.2 331.9,243.0 C332.9,242.8 334.6,242.5 335.4,243.0 C336.2,243.6 337.1,245.5 336.8,246.2 C336.5,246.9 334.6,247.1 333.5,247.2 C332.4,247.3 330.8,247.3 330.2,246.8 C329.6,246.3 329.4,244.8 329.7,244.1 Z'/><path d='M-16.3,248.0 C-15.7,247.5 -13.9,247.8 -12.2,247.5 C-10.5,247.2 -7.7,245.8 -6.0,246.2 C-4.3,246.5 -2.8,248.2 -1.8,249.6 C-0.8,250.9 -0.2,252.6 -0.1,254.4 C0.0,256.3 -0.5,259.7 -1.0,260.7 C-1.5,261.8 -2.3,261.4 -3.0,260.7 C-3.7,260.0 -4.4,257.4 -5.1,256.3 C-5.7,255.2 -6.3,254.8 -6.9,253.9 C-7.5,253.0 -7.6,251.4 -8.6,250.9 C-9.5,250.4 -11.5,251.3 -12.7,251.2 C-13.9,251.1 -15.1,250.9 -15.7,250.4 C-16.3,249.8 -16.8,248.5 -16.3,248.0 Z'/><path d='M-5.0,268.9 C-5.3,269.7 -6.9,271.8 -7.8,272.7 C-8.8,273.7 -9.6,274.2 -10.7,274.5 C-11.8,274.9 -13.1,274.5 -14.4,274.7 C-15.8,274.9 -17.7,276.3 -18.8,275.9 C-20.0,275.4 -20.9,272.8 -21.2,272.0 C-21.4,271.2 -21.0,270.9 -20.5,270.9 C-19.9,270.8 -18.6,271.8 -17.6,271.7 C-16.6,271.7 -15.4,270.6 -14.4,270.5 C-13.4,270.3 -12.5,271.1 -11.7,271.0 C-10.9,270.9 -10.4,270.6 -9.5,270.1 C-8.6,269.6 -6.9,268.1 -6.2,267.9 C-5.4,267.7 -4.8,268.1 -5.0,268.9 Z'/><path d='M-26.7,264.7 C-27.3,264.0 -28.1,261.6 -28.3,260.2 C-28.5,258.7 -28.4,257.3 -27.8,256.1 C-27.2,254.9 -25.7,254.1 -24.7,253.0 C-23.6,251.9 -22.5,250.2 -21.5,249.6 C-20.4,249.0 -18.9,249.3 -18.3,249.4 C-17.7,249.6 -17.7,250.1 -17.8,250.7 C-17.9,251.2 -18.5,251.8 -19.1,252.6 C-19.8,253.4 -21.0,254.3 -21.6,255.2 C-22.2,256.0 -22.5,256.9 -23.0,257.8 C-23.6,258.7 -24.5,259.2 -24.9,260.3 C-25.2,261.4 -24.8,263.6 -25.1,264.3 C-25.4,265.1 -26.2,265.4 -26.7,264.7 Z'/><path d='M384.0,248.0 C384.7,247.3 387.4,246.4 389.1,246.1 C390.8,245.7 392.7,245.2 394.2,245.9 C395.6,246.5 396.9,248.2 397.8,249.9 C398.8,251.5 399.8,254.2 399.9,255.9 C400.1,257.6 399.1,259.4 398.5,260.1 C398.0,260.8 397.2,260.5 396.6,260.1 C396.0,259.7 395.6,258.8 395.1,257.7 C394.7,256.5 394.6,254.3 393.9,253.2 C393.3,252.2 392.0,252.0 391.1,251.5 C390.2,251.0 389.6,250.3 388.5,250.1 C387.4,249.9 385.2,250.6 384.4,250.2 C383.7,249.9 383.2,248.7 384.0,248.0 Z'/><path d='M395.7,269.9 C395.4,270.4 393.9,270.9 392.9,271.9 C392.0,272.9 391.1,275.3 389.8,275.9 C388.6,276.5 387.0,275.5 385.5,275.4 C384.0,275.3 381.9,276.2 380.8,275.5 C379.8,274.8 379.3,272.2 379.2,271.2 C379.1,270.3 379.6,269.7 380.1,269.9 C380.5,270.0 381.0,271.8 381.9,272.1 C382.8,272.3 384.5,271.8 385.5,271.5 C386.6,271.2 387.3,270.8 388.3,270.4 C389.2,270.0 390.1,269.3 391.1,269.0 C392.1,268.8 393.6,268.6 394.4,268.7 C395.2,268.9 395.9,269.3 395.7,269.9 Z'/><path d='M373.2,263.6 C372.7,263.1 371.8,261.6 371.6,260.4 C371.4,259.1 371.5,257.5 372.0,256.2 C372.5,254.9 373.8,253.8 374.6,252.7 C375.5,251.6 375.8,250.4 377.2,249.7 C378.5,249.1 381.7,248.9 382.8,249.0 C383.8,249.1 383.8,249.7 383.3,250.4 C382.8,251.1 380.7,252.3 379.8,253.1 C378.9,253.9 378.8,254.4 378.1,255.2 C377.4,255.9 376.2,256.6 375.6,257.5 C375.0,258.4 374.7,259.5 374.6,260.5 C374.5,261.5 375.0,262.7 374.8,263.2 C374.6,263.7 373.8,264.1 373.2,263.6 Z'/><path d='M32.4,297.5 C32.3,296.8 33.4,295.4 34.0,294.2 C34.6,293.0 35.0,290.7 36.1,290.1 C37.3,289.5 39.3,290.4 41.0,290.7 C42.6,291.0 44.6,291.4 46.1,292.1 C47.6,292.9 49.5,294.3 49.9,295.2 C50.4,296.0 49.6,296.8 48.7,297.1 C47.9,297.5 46.1,297.5 44.9,297.4 C43.7,297.3 42.5,296.7 41.6,296.6 C40.6,296.5 39.8,296.5 39.1,296.7 C38.4,296.9 38.3,297.6 37.4,297.9 C36.6,298.2 35.1,298.6 34.3,298.5 C33.4,298.4 32.4,298.2 32.4,297.5 Z'/><path d='M54.9,303.9 C55.7,304.3 57.6,305.6 58.3,306.5 C59.0,307.5 59.1,308.6 59.2,309.8 C59.2,310.9 59.2,312.6 58.5,313.4 C57.8,314.2 55.9,314.0 54.8,314.4 C53.8,314.7 52.7,315.7 52.1,315.6 C51.4,315.5 51.0,314.4 51.0,313.8 C51.0,313.1 51.8,312.3 52.2,311.8 C52.5,311.2 52.8,310.9 53.1,310.4 C53.4,309.8 54.0,309.1 54.1,308.4 C54.1,307.8 53.4,307.2 53.3,306.5 C53.2,305.9 53.1,304.8 53.4,304.3 C53.6,303.9 54.1,303.6 54.9,303.9 Z'/><path d='M43.8,315.5 C43.3,315.8 42.0,316.3 41.0,316.3 C39.9,316.3 38.6,315.9 37.6,315.4 C36.7,314.8 36.0,313.9 35.2,313.0 C34.4,312.1 33.1,311.0 32.9,309.8 C32.7,308.6 33.4,306.7 33.9,305.9 C34.4,305.2 35.5,305.0 35.8,305.3 C36.2,305.7 35.8,307.1 36.2,307.9 C36.7,308.6 37.9,309.3 38.6,309.8 C39.4,310.4 39.9,310.6 40.5,311.0 C41.2,311.5 41.8,312.0 42.4,312.5 C42.9,313.0 43.7,313.5 44.0,314.0 C44.2,314.5 44.3,315.1 43.8,315.5 Z'/><path d='M95.3,321.2 C94.3,321.0 91.4,319.4 90.1,318.2 C88.7,317.0 87.8,315.6 87.3,313.9 C86.8,312.2 87.0,309.8 87.0,307.9 C87.0,306.1 86.6,304.1 87.3,302.8 C88.1,301.5 90.1,300.8 91.6,300.2 C93.1,299.6 95.6,298.9 96.5,299.1 C97.4,299.2 97.5,300.4 97.0,301.1 C96.6,301.8 94.8,302.5 94.0,303.3 C93.2,304.0 92.7,304.7 92.3,305.5 C91.8,306.4 91.4,307.3 91.4,308.5 C91.5,309.6 92.2,311.2 92.4,312.5 C92.6,313.8 92.1,315.0 92.7,316.2 C93.4,317.3 96.0,318.5 96.4,319.4 C96.8,320.2 96.4,321.4 95.3,321.2 Z'/><path d='M107.8,300.8 C108.9,301.0 112.4,302.4 113.7,303.6 C115.0,304.8 115.2,306.3 115.8,308.0 C116.4,309.6 117.9,312.0 117.5,313.6 C117.0,315.3 114.5,316.6 113.3,317.9 C112.2,319.2 111.2,321.2 110.6,321.6 C110.0,322.0 109.7,321.1 109.8,320.2 C109.8,319.4 110.4,317.5 111.0,316.3 C111.5,315.0 112.6,314.1 112.9,312.8 C113.1,311.6 112.8,310.0 112.4,308.8 C112.1,307.6 111.8,306.9 110.9,305.8 C109.9,304.8 107.5,303.2 107.0,302.3 C106.5,301.5 106.7,300.6 107.8,300.8 Z'/><path d='M125.1,300.7 C124.5,300.5 122.8,299.7 122.1,298.8 C121.5,297.8 121.5,296.3 121.2,295.1 C120.9,294.0 120.4,293.2 120.4,292.1 C120.4,291.0 120.8,289.5 121.3,288.6 C121.8,287.6 122.6,287.1 123.4,286.5 C124.3,285.9 125.2,285.1 126.2,284.9 C127.1,284.8 128.3,285.3 129.2,285.6 C130.1,286.0 130.9,286.5 131.6,287.1 C132.3,287.8 133.4,288.9 133.5,289.4 C133.6,290.0 132.9,290.6 132.5,290.5 C132.0,290.4 131.4,289.2 130.8,288.9 C130.2,288.6 129.6,288.7 129.0,288.6 C128.4,288.6 127.8,288.6 127.2,288.7 C126.6,288.8 126.0,289.0 125.5,289.3 C124.9,289.6 124.1,289.7 123.9,290.3 C123.6,290.9 123.8,292.1 123.9,292.9 C123.9,293.6 124.0,294.0 124.0,294.8 C124.1,295.6 124.1,296.8 124.4,297.6 C124.7,298.5 125.7,299.4 125.8,299.9 C126.0,300.5 125.7,300.9 125.1,300.7 Z'/><path d='M135.9,301.5 C135.5,301.8 134.4,301.5 134.0,301.1 C133.5,300.7 133.0,299.5 133.0,299.0 C133.1,298.4 133.7,298.1 134.2,297.9 C134.6,297.7 135.4,297.5 135.7,297.8 C136.0,298.1 135.9,299.0 135.9,299.6 C136.0,300.2 136.2,301.3 135.9,301.5 Z'/><path d='M178.9,304.0 C179.5,303.8 181.0,303.6 181.8,304.2 C182.6,304.8 183.3,306.5 183.8,307.5 C184.2,308.6 184.2,309.3 184.4,310.4 C184.5,311.6 185.1,313.4 184.7,314.5 C184.4,315.6 183.0,316.7 182.5,317.1 C181.9,317.4 181.5,317.0 181.5,316.6 C181.4,316.1 182.4,315.1 182.3,314.2 C182.1,313.3 180.9,312.0 180.6,311.2 C180.3,310.5 180.6,310.3 180.4,309.5 C180.3,308.8 179.9,307.6 179.5,306.9 C179.2,306.2 178.6,305.6 178.5,305.2 C178.4,304.7 178.4,304.2 178.9,304.0 Z'/><path d='M179.4,321.3 C179.1,321.9 178.0,323.5 177.2,323.9 C176.4,324.3 175.5,323.7 174.7,323.8 C173.9,323.8 173.1,324.3 172.4,324.1 C171.7,323.9 171.2,323.2 170.7,322.6 C170.3,321.9 169.6,320.7 169.5,320.2 C169.4,319.7 169.8,319.5 170.2,319.5 C170.6,319.5 171.6,319.8 172.1,320.2 C172.5,320.5 172.6,321.4 173.1,321.6 C173.5,321.8 174.1,321.4 174.7,321.4 C175.3,321.3 175.9,321.6 176.6,321.4 C177.3,321.2 178.3,320.2 178.8,320.2 C179.3,320.1 179.7,320.6 179.4,321.3 Z'/><path d='M167.2,317.2 C166.9,316.9 166.2,315.9 166.1,315.2 C165.9,314.5 166.1,313.8 166.3,313.0 C166.4,312.3 166.7,311.6 167.0,310.9 C167.2,310.2 167.2,309.4 167.8,308.9 C168.3,308.4 169.7,308.1 170.2,308.1 C170.8,308.2 171.2,308.6 171.1,308.9 C171.0,309.2 169.6,309.4 169.5,309.9 C169.3,310.4 170.3,311.4 170.2,311.9 C170.1,312.5 169.1,312.8 168.8,313.3 C168.6,313.8 168.7,314.3 168.6,314.9 C168.5,315.5 168.5,316.5 168.3,316.8 C168.1,317.2 167.6,317.5 167.2,317.2 Z'/><path d='M230.8,298.4 C230.0,298.6 227.3,298.6 225.7,298.5 C224.2,298.4 223.0,298.5 221.7,297.6 C220.4,296.7 219.0,294.8 218.0,293.3 C216.9,291.9 215.8,290.5 215.5,288.9 C215.3,287.2 216.0,284.5 216.4,283.7 C216.8,282.9 217.4,283.2 217.9,283.8 C218.4,284.5 219.0,286.6 219.6,287.7 C220.2,288.9 220.7,289.8 221.5,290.7 C222.3,291.6 223.5,292.7 224.4,293.4 C225.2,294.0 225.5,293.8 226.5,294.4 C227.6,295.0 229.9,296.5 230.6,297.2 C231.3,297.8 231.6,298.1 230.8,298.4 Z'/><path d='M218.8,277.4 C218.9,276.7 219.6,274.7 220.5,273.8 C221.5,272.9 223.2,272.4 224.4,272.2 C225.7,272.0 226.8,272.0 228.0,272.6 C229.2,273.3 230.5,275.0 231.8,276.0 C233.1,276.9 235.2,277.6 235.7,278.1 C236.1,278.6 235.5,279.0 234.6,279.1 C233.7,279.2 231.6,279.1 230.4,278.7 C229.2,278.2 228.3,276.9 227.4,276.4 C226.5,276.0 226.0,276.0 225.1,276.0 C224.2,276.0 222.9,276.1 222.0,276.5 C221.1,276.9 220.4,278.3 219.9,278.4 C219.3,278.6 218.7,278.2 218.8,277.4 Z'/><path d='M237.4,283.0 C237.9,283.5 239.0,285.1 239.4,286.3 C239.9,287.5 240.3,288.9 240.0,290.1 C239.8,291.4 238.7,292.9 238.0,293.8 C237.3,294.7 236.5,294.8 235.8,295.4 C235.0,296.1 233.8,297.6 233.3,297.8 C232.8,298.0 232.6,297.3 232.7,296.5 C232.8,295.8 233.5,294.2 234.0,293.4 C234.4,292.7 235.0,292.9 235.3,292.2 C235.7,291.5 235.6,290.0 235.9,289.0 C236.2,288.1 237.0,287.3 237.0,286.3 C237.0,285.4 235.9,284.0 236.0,283.5 C236.0,282.9 236.8,282.6 237.4,283.0 Z'/><path d='M259.8,284.0 C260.4,284.7 261.6,286.9 261.5,288.7 C261.5,290.5 260.6,293.2 259.6,294.7 C258.6,296.2 257.1,296.5 255.5,297.5 C253.9,298.5 251.9,300.0 250.0,300.5 C248.0,301.0 245.8,300.6 243.8,300.5 C241.9,300.4 239.6,300.6 238.2,299.7 C236.7,298.8 236.2,296.6 235.3,295.0 C234.4,293.5 233.0,291.4 233.0,290.5 C232.9,289.7 234.0,289.6 234.9,289.9 C235.8,290.3 237.3,291.9 238.3,292.6 C239.4,293.3 240.2,293.9 241.2,294.4 C242.3,294.8 243.4,295.4 244.6,295.4 C245.8,295.4 247.3,294.7 248.5,294.1 C249.7,293.6 250.9,292.7 251.9,292.2 C252.9,291.7 253.7,292.0 254.6,291.3 C255.4,290.5 256.5,288.8 257.0,287.7 C257.6,286.5 257.3,284.9 257.7,284.3 C258.2,283.7 259.1,283.3 259.8,284.0 Z'/><path d='M241.5,277.1 C241.4,276.5 241.9,275.6 242.6,275.0 C243.2,274.3 244.4,273.2 245.4,273.1 C246.3,273.1 248.0,274.1 248.2,274.9 C248.4,275.7 247.5,277.3 246.7,277.8 C245.9,278.4 244.4,278.3 243.6,278.1 C242.7,278.0 241.7,277.6 241.5,277.1 Z'/><path d='M290.3,283.1 C290.6,282.2 292.2,280.2 293.5,279.3 C294.7,278.5 296.5,278.1 298.0,278.0 C299.5,277.9 301.0,277.8 302.4,278.7 C303.7,279.6 305.1,281.8 306.0,283.2 C306.8,284.7 306.8,286.0 307.3,287.5 C307.8,288.9 309.1,290.4 309.2,292.0 C309.3,293.6 308.7,295.6 307.9,297.2 C307.2,298.7 306.1,300.4 304.9,301.4 C303.7,302.4 301.4,302.9 300.6,303.0 C299.7,303.0 299.6,302.1 299.9,301.5 C300.3,300.9 302.0,300.2 302.7,299.2 C303.4,298.2 304.0,296.8 304.2,295.6 C304.5,294.3 304.5,292.9 304.4,291.8 C304.3,290.7 303.8,289.7 303.5,288.8 C303.1,287.9 302.8,287.5 302.3,286.4 C301.8,285.3 301.2,283.1 300.4,282.5 C299.6,281.9 298.5,282.9 297.5,283.0 C296.5,283.0 295.5,282.7 294.5,283.0 C293.4,283.2 291.9,284.3 291.2,284.4 C290.5,284.4 289.9,283.9 290.3,283.1 Z'/><path d='M287.0,299.3 C286.4,299.2 285.8,298.1 285.7,297.4 C285.6,296.7 285.9,295.8 286.3,295.1 C286.7,294.5 287.5,293.6 288.1,293.7 C288.6,293.8 289.5,294.8 289.6,295.5 C289.7,296.3 289.4,297.6 288.9,298.2 C288.5,298.8 287.5,299.4 287.0,299.3 Z'/><path d='M76.7,329.2 C77.5,328.9 79.8,328.7 81.2,329.3 C82.5,329.8 83.6,331.3 84.6,332.4 C85.6,333.6 86.8,334.7 87.0,336.2 C87.3,337.8 86.7,339.8 86.1,341.6 C85.5,343.4 84.7,345.6 83.4,347.0 C82.2,348.4 79.7,349.8 78.7,350.0 C77.6,350.2 77.1,349.1 77.2,348.2 C77.4,347.4 78.9,346.0 79.6,344.8 C80.2,343.6 80.8,342.1 81.1,341.0 C81.4,339.8 81.3,338.7 81.2,337.8 C81.2,336.8 81.2,336.0 80.7,335.3 C80.3,334.6 79.3,334.2 78.6,333.5 C77.9,332.9 76.7,332.3 76.4,331.5 C76.0,330.8 75.9,329.6 76.7,329.2 Z'/><path d='M70.0,354.8 C69.3,354.9 67.5,354.4 66.1,354.0 C64.7,353.6 62.6,353.3 61.6,352.2 C60.6,351.1 60.2,348.9 60.0,347.3 C59.8,345.6 60.2,344.1 60.6,342.5 C60.9,340.9 61.6,338.5 62.3,337.9 C62.9,337.3 64.1,338.1 64.4,338.9 C64.7,339.6 64.1,341.5 64.2,342.6 C64.3,343.7 64.8,344.5 65.0,345.5 C65.2,346.5 65.1,347.8 65.6,348.7 C66.0,349.6 67.0,350.0 67.8,350.8 C68.5,351.6 69.7,352.6 70.1,353.3 C70.5,353.9 70.6,354.7 70.0,354.8 Z'/><path d='M74.0,356.9 C73.5,356.1 73.4,353.4 73.5,352.0 C73.6,350.6 73.8,349.9 74.7,348.7 C75.5,347.5 76.9,346.1 78.4,344.9 C80.0,343.8 82.1,342.0 83.9,341.7 C85.7,341.3 88.4,342.2 89.3,342.7 C90.2,343.1 90.0,343.7 89.4,344.4 C88.8,345.1 87.0,345.8 85.8,346.6 C84.6,347.4 83.0,348.4 82.1,349.4 C81.1,350.3 80.8,351.5 80.3,352.2 C79.8,352.8 79.8,352.6 79.1,353.3 C78.4,354.1 76.9,356.1 76.1,356.7 C75.2,357.3 74.4,357.7 74.0,356.9 Z'/><path d='M99.2,345.0 C99.8,344.9 100.8,345.3 101.5,346.0 C102.2,346.7 102.6,348.3 103.2,349.4 C103.7,350.5 104.3,351.4 104.9,352.4 C105.4,353.5 106.8,354.7 106.4,355.6 C106.0,356.6 103.6,358.0 102.6,358.3 C101.6,358.7 100.8,358.2 100.6,357.7 C100.5,357.2 101.7,356.0 101.5,355.3 C101.3,354.6 99.7,354.1 99.3,353.5 C98.9,352.8 99.4,352.0 99.2,351.3 C99.0,350.5 98.3,349.7 98.1,348.8 C98.0,348.0 98.1,346.9 98.3,346.3 C98.5,345.7 98.7,345.0 99.2,345.0 Z'/><path d='M97.5,364.9 C97.0,365.6 95.3,367.5 94.0,368.0 C92.7,368.4 91.1,367.4 89.7,367.6 C88.2,367.8 87.0,369.3 85.5,369.2 C84.0,369.0 81.9,367.4 80.8,366.6 C79.7,365.8 79.0,364.9 78.9,364.3 C78.8,363.7 79.3,363.3 80.0,363.1 C80.6,362.9 81.7,362.7 82.8,362.9 C83.8,363.2 85.4,364.8 86.5,364.8 C87.7,364.8 88.5,363.0 89.5,362.8 C90.5,362.7 91.5,363.7 92.7,363.8 C93.9,363.9 95.8,363.2 96.6,363.4 C97.3,363.6 97.9,364.1 97.5,364.9 Z'/><path d='M147.5,347.7 C147.0,348.2 144.9,349.2 143.6,349.6 C142.3,349.9 141.2,350.0 139.9,349.6 C138.6,349.2 137.1,348.2 135.9,347.2 C134.8,346.3 133.8,344.9 133.0,343.7 C132.2,342.6 131.3,341.7 131.1,340.5 C130.9,339.2 131.5,336.9 131.8,336.2 C132.2,335.6 132.8,336.0 133.4,336.6 C133.9,337.2 134.4,339.0 134.9,339.9 C135.4,340.7 135.8,340.9 136.4,341.7 C136.9,342.4 137.4,343.6 138.1,344.2 C138.9,344.8 140.0,344.9 140.9,345.3 C141.7,345.7 142.1,346.2 143.0,346.4 C144.0,346.6 145.8,346.1 146.6,346.3 C147.3,346.5 148.0,347.2 147.5,347.7 Z'/><path d='M135.8,331.5 C136.3,331.2 138.0,331.1 139.2,330.9 C140.3,330.8 141.6,330.3 142.6,330.6 C143.7,331.0 144.6,332.1 145.6,333.0 C146.6,333.8 147.7,334.8 148.5,335.8 C149.4,336.7 150.3,337.7 150.6,338.7 C150.8,339.6 150.1,341.0 149.8,341.5 C149.4,341.9 148.7,341.7 148.3,341.3 C147.9,341.0 147.6,340.1 147.1,339.6 C146.7,339.0 146.0,338.5 145.4,338.0 C144.7,337.4 143.9,336.9 143.3,336.2 C142.7,335.6 142.4,334.4 141.7,334.1 C141.1,333.7 140.4,334.4 139.5,334.2 C138.6,334.0 137.1,333.3 136.5,332.8 C135.8,332.4 135.4,331.8 135.8,331.5 Z'/><path d='M196.7,349.2 C196.6,350.1 196.2,352.8 195.1,353.8 C194.0,354.8 191.5,355.2 190.1,355.4 C188.7,355.7 188.0,355.3 186.7,355.1 C185.4,354.8 183.8,354.5 182.6,353.9 C181.4,353.2 180.4,352.2 179.6,351.1 C178.8,349.9 178.0,348.2 177.8,346.8 C177.6,345.4 178.1,343.2 178.4,342.5 C178.8,341.8 179.4,342.1 179.8,342.6 C180.3,343.1 180.9,344.7 181.3,345.7 C181.8,346.7 182.1,347.9 182.6,348.7 C183.2,349.4 184.0,350.0 184.8,350.2 C185.7,350.4 186.9,349.7 187.7,350.0 C188.4,350.3 188.5,351.6 189.5,351.8 C190.5,352.0 192.5,351.7 193.5,351.1 C194.5,350.5 195.1,348.7 195.6,348.3 C196.1,348.0 196.7,348.3 196.7,349.2 Z'/><path d='M183.1,333.7 C183.8,332.8 186.6,330.5 188.3,329.8 C189.9,329.1 191.4,329.4 192.9,329.6 C194.4,329.9 196.0,330.1 197.2,331.2 C198.4,332.3 199.7,334.7 200.2,336.3 C200.8,337.8 200.8,340.0 200.6,340.8 C200.3,341.6 199.5,341.4 198.7,341.1 C198.0,340.7 196.9,339.6 196.2,338.7 C195.4,337.8 194.8,336.3 194.1,335.4 C193.4,334.6 192.8,333.9 192.0,333.6 C191.1,333.4 190.3,333.8 189.0,334.0 C187.6,334.3 185.0,335.2 184.0,335.1 C183.1,335.1 182.4,334.6 183.1,333.7 Z'/><path d='M225.7,338.2 C225.3,339.2 223.6,341.9 222.1,342.9 C220.5,343.9 218.2,343.7 216.3,344.1 C214.5,344.6 212.7,345.6 211.1,345.5 C209.4,345.4 207.5,344.5 206.4,343.4 C205.3,342.3 204.5,339.9 204.5,339.0 C204.5,338.0 205.4,337.7 206.2,337.9 C206.9,338.0 207.8,339.5 208.9,339.9 C209.9,340.4 211.2,340.5 212.4,340.4 C213.5,340.4 214.5,339.8 215.8,339.6 C217.0,339.3 218.5,339.2 219.9,338.8 C221.3,338.4 223.4,337.1 224.3,337.0 C225.3,336.9 226.0,337.2 225.7,338.2 Z'/><path d='M202.5,333.3 C202.2,332.6 202.3,330.3 202.5,328.8 C202.6,327.3 202.8,325.7 203.6,324.4 C204.4,323.2 205.8,322.1 207.2,321.4 C208.5,320.6 210.3,320.2 211.8,320.0 C213.4,319.9 215.7,320.1 216.5,320.4 C217.3,320.7 217.2,321.2 216.7,321.8 C216.2,322.3 214.6,323.1 213.5,323.6 C212.3,324.0 210.9,324.0 209.9,324.5 C208.9,325.1 208.4,326.2 207.7,327.1 C206.9,328.0 206.0,328.7 205.4,329.7 C204.8,330.8 204.5,332.8 204.0,333.4 C203.5,334.0 202.8,334.1 202.5,333.3 Z'/><path d='M224.9,319.8 C225.9,319.6 228.7,319.5 229.8,320.2 C231.0,320.8 231.4,322.5 231.9,323.8 C232.3,325.0 232.8,326.3 232.5,327.8 C232.2,329.4 230.8,331.5 229.9,332.8 C229.0,334.1 227.9,335.2 227.3,335.6 C226.7,335.9 226.4,335.5 226.1,334.9 C225.8,334.3 225.4,333.0 225.7,331.9 C226.0,330.8 227.8,329.3 228.0,328.3 C228.3,327.3 227.3,326.7 227.1,325.8 C226.9,324.9 227.2,323.7 226.8,322.9 C226.3,322.1 224.5,321.5 224.2,321.0 C223.9,320.5 224.0,319.9 224.9,319.8 Z'/><path d='M239.0,349.0 C238.8,348.5 239.1,346.8 239.1,345.7 C239.1,344.6 238.6,343.5 238.9,342.5 C239.3,341.5 240.4,340.4 241.3,339.6 C242.2,338.7 243.2,337.8 244.3,337.3 C245.4,336.7 246.6,335.9 247.8,336.0 C249.0,336.2 250.8,337.6 251.7,338.3 C252.7,339.0 253.4,339.6 253.5,340.1 C253.7,340.6 253.0,341.1 252.6,341.3 C252.2,341.4 251.7,341.1 250.9,340.9 C250.1,340.7 248.8,340.2 247.9,340.1 C247.0,339.9 246.1,339.6 245.4,340.0 C244.8,340.4 244.6,341.8 244.0,342.5 C243.5,343.1 242.4,343.4 242.1,344.0 C241.7,344.6 242.2,345.2 241.9,346.0 C241.6,346.7 240.6,348.1 240.1,348.6 C239.7,349.1 239.2,349.5 239.0,349.0 Z'/><path d='M256.8,346.2 C257.1,346.7 257.2,348.2 257.2,349.3 C257.1,350.3 257.1,351.6 256.5,352.7 C255.8,353.7 254.3,355.1 253.3,355.8 C252.2,356.4 251.1,356.3 249.9,356.5 C248.8,356.6 247.5,356.9 246.4,356.4 C245.2,355.9 243.5,354.3 243.0,353.7 C242.6,353.1 243.0,352.6 243.6,352.7 C244.3,352.7 245.8,353.8 246.8,354.0 C247.8,354.2 248.6,354.0 249.4,353.8 C250.2,353.6 250.7,353.3 251.5,352.8 C252.3,352.3 253.6,351.6 254.2,350.9 C254.8,350.2 254.8,349.4 255.0,348.6 C255.3,347.8 255.5,346.7 255.8,346.3 C256.1,345.9 256.6,345.7 256.8,346.2 Z'/><path d='M286.2,316.7 C286.8,315.9 288.4,313.8 290.1,313.6 C291.8,313.3 294.5,314.7 296.3,315.4 C298.0,316.0 299.5,316.4 300.4,317.4 C301.3,318.4 301.3,320.2 301.4,321.6 C301.6,322.9 301.9,324.2 301.4,325.6 C300.9,326.9 299.3,329.1 298.5,329.6 C297.7,330.1 296.7,329.5 296.5,328.8 C296.4,328.1 297.4,326.3 297.4,325.4 C297.4,324.5 296.6,324.0 296.4,323.2 C296.2,322.4 296.5,321.5 296.1,320.8 C295.8,320.1 295.3,319.5 294.1,318.9 C293.0,318.3 290.6,317.6 289.4,317.5 C288.1,317.3 287.0,318.3 286.5,318.2 C285.9,318.0 285.6,317.5 286.2,316.7 Z'/><path d='M289.7,337.2 C288.7,337.7 285.2,338.4 283.5,338.3 C281.8,338.3 281.2,337.3 279.7,336.7 C278.1,336.1 275.7,335.9 274.4,334.8 C273.2,333.7 272.2,331.8 272.2,330.1 C272.1,328.3 273.2,325.8 274.1,324.2 C275.0,322.6 276.7,321.1 277.5,320.6 C278.3,320.1 278.6,320.7 278.8,321.4 C279.0,322.1 278.8,323.7 278.6,325.0 C278.4,326.2 277.6,327.8 277.8,328.8 C278.0,329.8 279.0,330.4 279.7,331.1 C280.5,331.7 281.5,332.1 282.2,332.6 C283.0,333.1 283.0,333.6 284.2,334.1 C285.4,334.5 288.4,335.0 289.3,335.6 C290.2,336.1 290.7,336.8 289.7,337.2 Z'/><path d='M321.8,347.0 C321.0,346.5 318.7,344.5 318.2,342.9 C317.6,341.4 318.1,339.6 318.6,337.7 C319.0,335.9 319.8,333.5 320.9,331.7 C321.9,330.0 323.2,328.1 324.9,327.3 C326.6,326.4 329.1,326.5 330.9,326.5 C332.8,326.4 335.3,326.6 336.1,326.9 C336.9,327.2 336.5,327.6 335.8,328.3 C335.1,328.9 333.1,330.5 331.8,331.0 C330.4,331.5 328.7,330.8 327.7,331.4 C326.6,332.1 326.3,333.6 325.6,334.8 C324.8,336.0 323.8,337.3 323.2,338.5 C322.6,339.7 322.1,340.7 322.1,342.0 C322.2,343.2 323.4,345.0 323.4,345.8 C323.3,346.7 322.7,347.5 321.8,347.0 Z'/><path d='M343.5,333.7 C344.3,334.3 346.8,336.0 347.3,337.4 C347.8,338.8 347.4,340.4 346.6,341.9 C345.9,343.5 344.2,345.5 342.8,346.9 C341.5,348.3 340.2,349.7 338.7,350.4 C337.2,351.0 334.5,351.1 333.7,350.9 C332.8,350.8 333.0,350.3 333.6,349.7 C334.1,349.1 336.1,348.2 337.1,347.3 C338.1,346.3 338.5,345.1 339.4,344.0 C340.4,342.9 342.2,341.8 342.9,340.8 C343.6,339.7 343.6,338.8 343.5,337.7 C343.4,336.7 342.3,335.0 342.3,334.3 C342.3,333.7 342.7,333.2 343.5,333.7 Z'/><path d='M17.0,-27.1 C17.8,-27.6 20.4,-27.6 22.5,-28.2 C24.6,-28.7 27.4,-30.2 29.5,-30.3 C31.5,-30.5 33.3,-30.2 35.0,-29.2 C36.8,-28.2 38.5,-26.0 39.9,-24.4 C41.4,-22.8 43.6,-21.4 43.8,-19.6 C44.1,-17.8 42.1,-15.5 41.3,-13.8 C40.6,-12.1 39.9,-10.0 39.2,-9.5 C38.5,-8.9 37.6,-9.6 37.1,-10.4 C36.6,-11.2 35.9,-12.9 36.0,-14.1 C36.2,-15.4 38.0,-16.7 38.0,-17.9 C37.9,-19.1 37.0,-20.5 35.9,-21.3 C34.7,-22.1 32.3,-22.5 31.0,-22.8 C29.6,-23.1 29.2,-23.1 27.9,-23.3 C26.6,-23.5 24.8,-23.5 23.1,-23.8 C21.5,-24.1 19.2,-24.6 18.2,-25.1 C17.1,-25.7 16.3,-26.6 17.0,-27.1 Z'/><path d='M28.5,-1.6 C27.6,-1.1 24.3,-0.4 22.3,-0.3 C20.2,-0.1 18.6,-0.2 16.5,-0.8 C14.4,-1.4 11.0,-2.4 9.6,-3.7 C8.2,-5.0 8.6,-7.0 8.2,-8.6 C7.8,-10.3 7.0,-12.9 7.2,-13.7 C7.3,-14.6 8.1,-14.4 9.0,-13.8 C9.8,-13.3 11.4,-11.3 12.3,-10.4 C13.2,-9.5 13.4,-9.1 14.5,-8.3 C15.5,-7.4 17.4,-6.0 18.7,-5.4 C20.1,-4.8 21.1,-4.9 22.7,-4.5 C24.2,-4.1 27.1,-3.6 28.1,-3.1 C29.1,-2.7 29.5,-2.0 28.5,-1.6 Z'/><path d='M17.4,374.7 C18.0,373.6 20.4,370.8 22.3,369.9 C24.2,369.0 27.0,368.8 29.0,369.2 C31.0,369.6 32.7,371.0 34.4,372.0 C36.1,373.0 38.0,373.9 39.3,375.3 C40.5,376.7 41.3,378.8 41.9,380.5 C42.5,382.3 43.2,384.2 42.8,385.7 C42.5,387.2 40.7,389.2 39.9,389.8 C39.1,390.3 38.1,389.6 37.9,388.8 C37.6,388.1 39.1,386.4 38.6,385.4 C38.1,384.4 35.8,383.6 35.0,382.6 C34.3,381.5 34.7,380.2 34.1,379.1 C33.6,378.1 32.6,377.2 31.6,376.5 C30.5,375.7 29.3,374.9 27.8,374.6 C26.4,374.4 24.6,374.5 23.0,374.8 C21.5,375.2 19.4,376.8 18.5,376.8 C17.5,376.7 16.7,375.9 17.4,374.7 Z'/><path d='M28.6,398.4 C27.6,399.3 24.4,400.6 22.4,401.1 C20.3,401.5 18.4,401.9 16.3,401.2 C14.2,400.6 11.4,399.0 10.0,397.4 C8.6,395.9 8.2,393.8 8.1,391.9 C8.0,390.1 8.9,387.1 9.5,386.1 C10.1,385.1 10.8,385.5 11.6,386.0 C12.4,386.5 13.9,388.2 14.5,389.2 C15.2,390.2 14.7,391.3 15.6,392.1 C16.5,392.9 18.6,393.7 19.8,394.1 C21.1,394.4 21.7,394.1 23.1,394.4 C24.4,394.7 27.0,395.2 27.9,395.9 C28.8,396.5 29.5,397.5 28.6,398.4 Z'/><path d='M417.0,-26.7 C417.7,-27.5 420.4,-28.5 422.4,-29.3 C424.3,-30.2 426.6,-31.9 428.6,-31.7 C430.6,-31.5 432.4,-29.3 434.4,-28.1 C436.3,-26.9 439.3,-26.0 440.5,-24.6 C441.8,-23.1 441.6,-21.3 441.9,-19.6 C442.3,-17.8 443.1,-15.7 442.5,-14.1 C441.9,-12.5 439.3,-10.7 438.3,-10.1 C437.3,-9.6 436.5,-10.2 436.5,-11.0 C436.5,-11.7 438.4,-13.2 438.4,-14.4 C438.4,-15.5 436.9,-17.0 436.2,-17.9 C435.6,-18.8 435.3,-19.2 434.3,-19.9 C433.3,-20.5 431.6,-21.1 430.4,-21.9 C429.2,-22.7 428.3,-24.1 427.1,-24.7 C425.9,-25.3 424.4,-25.4 422.9,-25.4 C421.5,-25.3 419.3,-24.1 418.3,-24.3 C417.3,-24.5 416.3,-25.8 417.0,-26.7 Z'/><path d='M428.3,-2.2 C427.4,-1.4 424.7,0.1 422.7,0.4 C420.7,0.6 417.8,0.3 416.0,-0.5 C414.2,-1.3 413.2,-3.1 412.0,-4.4 C410.7,-5.8 409.3,-7.2 408.5,-8.7 C407.8,-10.3 407.4,-12.9 407.5,-13.8 C407.7,-14.6 408.6,-14.4 409.4,-13.9 C410.2,-13.3 411.2,-11.2 412.3,-10.3 C413.4,-9.4 415.1,-9.2 416.1,-8.4 C417.2,-7.7 417.5,-6.6 418.6,-5.9 C419.8,-5.1 421.6,-4.3 423.1,-4.1 C424.6,-3.9 426.8,-4.9 427.6,-4.6 C428.5,-4.3 429.1,-3.1 428.3,-2.2 Z'/><path d='M417.5,373.3 C418.1,372.2 420.3,369.7 422.2,369.3 C424.1,368.8 426.7,370.1 428.9,370.5 C431.2,370.9 433.9,370.9 435.7,371.8 C437.6,372.6 439.0,374.2 440.2,375.6 C441.5,377.0 443.0,378.6 443.4,380.3 C443.7,382.0 442.8,384.1 442.2,385.7 C441.7,387.3 440.9,389.2 440.2,389.7 C439.4,390.2 438.4,389.4 437.9,388.7 C437.3,387.9 437.1,386.4 436.9,385.3 C436.8,384.3 437.3,383.2 437.0,382.2 C436.8,381.1 436.5,379.8 435.5,379.1 C434.6,378.5 432.8,379.0 431.5,378.3 C430.3,377.7 429.3,375.9 427.9,375.3 C426.5,374.7 424.5,374.7 423.0,374.7 C421.5,374.7 419.7,375.7 418.8,375.5 C417.8,375.3 417.0,374.3 417.5,373.3 Z'/><path d='M428.5,396.9 C427.6,398.2 424.3,401.4 422.3,401.8 C420.2,402.2 417.7,400.1 416.0,399.1 C414.4,398.1 413.7,396.9 412.2,395.7 C410.8,394.4 408.1,393.1 407.3,391.6 C406.5,390.0 407.0,387.2 407.4,386.3 C407.8,385.4 408.9,385.6 409.6,386.2 C410.4,386.8 410.7,388.7 411.8,389.7 C412.8,390.6 414.9,391.5 416.2,391.9 C417.4,392.4 418.2,391.8 419.3,392.4 C420.4,393.0 421.5,395.0 422.9,395.4 C424.3,395.7 426.9,394.1 427.8,394.4 C428.8,394.6 429.4,395.7 428.5,396.9 Z'/><path d='M114.0,365.8 C114.7,365.5 117.0,365.0 118.4,365.3 C119.8,365.6 121.3,366.9 122.6,367.7 C124.0,368.4 125.9,368.7 126.7,369.8 C127.4,370.9 127.2,372.8 127.2,374.2 C127.1,375.7 127.0,377.1 126.6,378.7 C126.1,380.2 125.8,382.7 124.7,383.7 C123.6,384.8 121.5,384.7 119.9,385.1 C118.4,385.5 116.2,386.3 115.4,386.3 C114.6,386.2 114.6,385.2 115.2,384.7 C115.7,384.1 117.6,383.5 118.7,383.0 C119.8,382.5 121.0,382.4 121.8,381.5 C122.6,380.7 123.2,379.0 123.5,377.8 C123.8,376.7 123.8,375.7 123.7,374.7 C123.6,373.6 123.6,372.5 123.1,371.8 C122.6,371.0 121.7,370.6 120.7,370.0 C119.8,369.4 118.7,368.5 117.6,368.1 C116.5,367.6 114.7,367.7 114.1,367.3 C113.5,366.9 113.3,366.2 114.0,365.8 Z'/><path d='M107.3,376.4 C107.6,376.8 107.7,377.6 107.3,378.2 C107.0,378.7 105.8,379.6 105.2,379.6 C104.7,379.7 104.3,378.8 104.1,378.3 C103.9,377.8 103.8,377.4 104.0,376.9 C104.3,376.4 105.2,375.4 105.7,375.3 C106.3,375.2 107.1,375.9 107.3,376.4 Z'/><path d='M210.6,-1.3 C210.1,-0.8 208.8,0.6 207.6,0.9 C206.4,1.3 204.6,0.9 203.4,0.6 C202.2,0.3 201.3,0.1 200.5,-0.6 C199.8,-1.3 199.0,-2.4 199.0,-3.5 C199.0,-4.7 200.0,-6.4 200.5,-7.6 C201.0,-8.7 201.5,-10.2 201.9,-10.7 C202.3,-11.1 202.7,-10.7 202.8,-10.2 C202.9,-9.6 202.8,-8.3 202.7,-7.4 C202.6,-6.4 202.3,-5.4 202.3,-4.6 C202.3,-3.8 202.5,-3.1 202.9,-2.6 C203.2,-2.2 203.7,-2.0 204.6,-1.8 C205.4,-1.6 206.8,-1.4 207.7,-1.5 C208.7,-1.6 209.8,-2.3 210.2,-2.2 C210.7,-2.2 211.0,-1.8 210.6,-1.3 Z'/><path d='M208.3,-14.5 C208.7,-15.0 210.1,-16.3 211.1,-16.5 C212.1,-16.8 213.4,-16.2 214.4,-15.7 C215.3,-15.2 216.0,-14.3 216.6,-13.5 C217.1,-12.7 217.6,-11.6 217.7,-10.7 C217.8,-9.9 217.3,-8.8 217.1,-8.5 C216.9,-8.1 216.6,-8.3 216.3,-8.6 C215.9,-8.8 215.2,-9.4 214.9,-10.0 C214.6,-10.5 214.7,-11.3 214.3,-11.7 C213.9,-12.2 213.3,-12.6 212.7,-12.9 C212.1,-13.2 211.4,-13.6 210.7,-13.7 C210.0,-13.8 208.9,-13.4 208.5,-13.6 C208.1,-13.7 207.8,-14.0 208.3,-14.5 Z'/><path d='M210.6,398.8 C210.1,399.2 208.8,399.9 207.7,400.2 C206.6,400.5 204.9,400.6 203.8,400.4 C202.7,400.2 201.6,399.7 200.9,399.0 C200.2,398.2 199.8,397.0 199.7,395.9 C199.5,394.9 199.7,393.8 200.1,392.8 C200.5,391.8 201.6,390.4 202.0,390.0 C202.5,389.6 202.7,389.9 202.8,390.4 C203.0,390.9 202.8,392.3 202.8,393.1 C202.8,393.8 202.5,394.3 202.6,395.0 C202.7,395.6 202.8,396.5 203.2,397.0 C203.6,397.5 204.3,397.7 205.0,397.8 C205.8,397.9 207.0,397.7 207.8,397.7 C208.7,397.7 209.7,397.6 210.2,397.7 C210.6,397.9 211.0,398.4 210.6,398.8 Z'/><path d='M208.0,384.8 C208.4,384.6 210.0,384.5 211.1,384.5 C212.1,384.5 213.3,384.6 214.4,384.8 C215.4,385.1 216.6,385.4 217.3,386.0 C218.0,386.6 218.8,387.4 218.8,388.4 C218.8,389.5 217.8,391.8 217.4,392.4 C217.0,393.1 216.4,392.8 216.1,392.3 C215.9,391.8 216.0,390.0 215.9,389.2 C215.8,388.4 215.8,387.9 215.3,387.5 C214.9,387.1 213.9,387.1 213.1,387.0 C212.3,386.9 211.5,387.3 210.7,387.1 C209.9,386.9 208.7,386.2 208.2,385.8 C207.8,385.5 207.5,385.1 208.0,384.8 Z'/><path d='M255.5,0.8 C254.9,1.4 252.5,2.7 251.3,3.2 C250.0,3.6 249.4,3.7 247.8,3.5 C246.2,3.3 243.3,3.2 241.7,2.2 C240.2,1.2 239.2,-0.8 238.5,-2.3 C237.8,-3.9 237.5,-6.4 237.6,-7.2 C237.8,-8.1 238.7,-8.0 239.5,-7.6 C240.4,-7.2 241.8,-5.9 242.7,-5.0 C243.6,-4.1 243.8,-2.6 244.9,-2.0 C246.0,-1.5 248.3,-1.9 249.3,-1.6 C250.3,-1.3 250.1,-0.5 251.0,-0.3 C251.9,-0.1 254.1,-0.7 254.9,-0.5 C255.6,-0.3 256.1,0.2 255.5,0.8 Z'/><path d='M239.1,-13.4 C238.8,-14.1 238.2,-16.2 238.6,-17.2 C239.0,-18.2 240.6,-18.4 241.4,-19.3 C242.3,-20.1 242.8,-21.6 243.8,-22.0 C244.7,-22.4 246.1,-21.8 247.1,-21.7 C248.2,-21.6 249.5,-21.6 249.9,-21.3 C250.4,-21.1 250.2,-20.4 249.9,-20.1 C249.5,-19.7 248.5,-19.3 247.8,-19.0 C247.1,-18.7 246.3,-18.9 245.7,-18.4 C245.1,-18.0 245.0,-16.8 244.2,-16.3 C243.5,-15.8 241.9,-16.1 241.3,-15.5 C240.6,-15.0 240.8,-13.4 240.4,-13.0 C240.0,-12.7 239.4,-12.7 239.1,-13.4 Z'/><path d='M258.1,-17.6 C258.8,-17.6 261.0,-17.5 261.6,-16.9 C262.2,-16.3 261.6,-14.9 261.9,-14.1 C262.3,-13.2 263.4,-12.7 263.7,-11.7 C264.0,-10.7 264.0,-9.0 263.7,-8.1 C263.5,-7.1 262.6,-6.5 262.1,-6.2 C261.6,-6.0 261.1,-6.3 260.8,-6.6 C260.5,-6.9 260.5,-7.5 260.2,-8.2 C259.9,-9.0 259.3,-10.2 259.1,-10.9 C258.8,-11.6 258.6,-12.0 258.6,-12.7 C258.6,-13.4 259.2,-14.4 259.0,-15.1 C258.8,-15.8 257.4,-16.2 257.3,-16.6 C257.1,-17.1 257.4,-17.5 258.1,-17.6 Z'/><path d='M256.6,402.3 C256.0,403.0 253.8,404.7 252.2,404.8 C250.7,404.9 249.1,403.4 247.3,402.9 C245.6,402.5 243.2,403.0 241.8,402.1 C240.3,401.3 239.5,399.5 238.8,397.9 C238.1,396.3 237.5,393.5 237.6,392.6 C237.8,391.6 239.0,391.6 239.7,392.2 C240.5,392.7 241.1,394.9 242.1,395.8 C243.0,396.7 244.0,397.2 245.1,397.6 C246.3,398.0 247.6,397.8 248.7,398.3 C249.8,398.7 250.7,399.9 251.9,400.3 C253.1,400.7 255.1,400.5 255.9,400.8 C256.7,401.1 257.2,401.6 256.6,402.3 Z'/><path d='M238.9,386.3 C238.8,385.8 239.4,384.8 239.7,383.8 C240.1,382.8 240.3,381.2 241.0,380.4 C241.7,379.5 243.0,379.4 243.8,378.8 C244.7,378.3 245.0,377.1 246.1,377.2 C247.3,377.2 250.0,378.5 250.8,379.1 C251.6,379.6 251.4,380.4 250.8,380.7 C250.1,381.0 247.9,380.5 247.0,380.7 C246.1,380.9 245.9,381.3 245.4,381.8 C244.9,382.2 244.6,383.0 244.1,383.6 C243.6,384.3 243.1,384.9 242.4,385.5 C241.8,386.0 240.9,386.6 240.3,386.7 C239.7,386.9 239.0,386.8 238.9,386.3 Z'/><path d='M257.7,382.7 C258.5,382.6 260.7,382.4 261.8,382.9 C262.8,383.3 263.3,384.7 263.8,385.6 C264.4,386.5 264.8,387.5 264.9,388.4 C265.0,389.3 264.8,390.1 264.4,391.0 C264.1,392.0 263.2,393.6 262.7,394.0 C262.1,394.5 261.4,394.1 261.0,393.6 C260.6,393.0 260.3,391.5 260.2,390.8 C260.1,390.1 260.3,389.8 260.3,389.2 C260.3,388.6 260.4,387.8 260.1,387.1 C259.8,386.4 259.1,385.7 258.5,385.1 C258.0,384.6 257.0,384.1 256.8,383.7 C256.7,383.3 256.9,382.8 257.7,382.7 Z'/><path d='M327.6,382.7 C327.2,382.1 326.9,380.1 326.8,378.6 C326.7,377.0 326.3,374.9 326.9,373.5 C327.5,372.1 329.2,371.1 330.5,370.3 C331.8,369.5 333.2,369.0 334.6,368.5 C336.0,368.0 337.5,367.3 338.8,367.2 C340.2,367.2 341.7,367.3 342.7,368.1 C343.7,369.0 344.7,371.4 344.8,372.3 C344.9,373.2 344.1,373.6 343.4,373.5 C342.7,373.5 341.4,372.5 340.6,372.2 C339.8,371.9 339.2,371.5 338.4,371.6 C337.6,371.6 336.5,372.1 335.7,372.6 C334.9,373.0 334.2,373.6 333.4,374.2 C332.7,374.8 331.5,375.3 331.2,376.1 C330.9,377.0 331.7,378.4 331.4,379.4 C331.1,380.5 329.8,381.9 329.1,382.4 C328.5,383.0 328.0,383.3 327.6,382.7 Z'/><path d='M346.9,380.4 C347.4,381.2 348.6,384.0 348.3,385.3 C348.0,386.6 346.1,387.0 345.2,388.5 C344.3,389.9 344.2,392.8 343.1,393.8 C341.9,394.9 339.9,394.7 338.5,394.6 C337.1,394.6 336.0,394.0 334.9,393.5 C333.8,393.0 332.4,392.2 332.1,391.6 C331.7,391.1 332.3,390.5 332.9,390.3 C333.5,390.0 334.8,390.1 335.6,390.0 C336.4,389.9 337.0,389.9 337.7,389.6 C338.4,389.3 339.2,388.9 339.9,388.2 C340.7,387.5 341.4,386.4 342.0,385.7 C342.7,384.9 343.4,384.5 343.9,383.6 C344.5,382.7 344.9,380.9 345.4,380.4 C345.9,379.9 346.4,379.6 346.9,380.4 Z'/><path d='M-12.6,380.6 C-13.2,380.7 -14.4,380.3 -15.3,379.9 C-16.2,379.5 -17.6,379.0 -17.9,378.1 C-18.3,377.1 -17.6,375.5 -17.4,374.3 C-17.2,373.0 -17.2,371.6 -16.7,370.6 C-16.3,369.7 -15.4,369.4 -14.7,368.5 C-13.9,367.6 -13.3,365.8 -12.3,365.0 C-11.4,364.3 -10.2,364.1 -9.1,363.9 C-7.9,363.7 -6.3,363.7 -5.3,364.1 C-4.3,364.4 -3.3,365.5 -3.1,366.0 C-2.8,366.5 -3.3,367.0 -3.8,367.2 C-4.3,367.5 -5.2,367.4 -5.9,367.5 C-6.7,367.5 -7.7,367.4 -8.3,367.7 C-9.0,368.0 -9.3,368.6 -9.8,369.1 C-10.4,369.6 -11.1,370.4 -11.6,370.9 C-12.2,371.3 -12.8,371.2 -13.0,371.8 C-13.3,372.3 -13.1,373.2 -13.4,374.0 C-13.6,374.8 -14.7,376.0 -14.6,376.6 C-14.5,377.2 -13.3,377.1 -12.9,377.5 C-12.5,378.0 -12.1,378.8 -12.0,379.3 C-12.0,379.8 -12.1,380.5 -12.6,380.6 Z'/><path d='M1.0,374.3 C1.3,374.7 1.1,375.5 0.8,376.0 C0.5,376.5 -0.2,377.1 -0.8,377.3 C-1.4,377.4 -2.5,377.3 -2.8,376.9 C-3.0,376.6 -2.6,375.6 -2.3,375.0 C-1.9,374.4 -1.2,373.6 -0.6,373.5 C-0.0,373.4 0.8,373.9 1.0,374.3 Z'/><path d='M387.1,380.8 C386.6,380.9 385.4,380.3 384.9,379.7 C384.3,379.0 384.3,377.8 383.7,376.9 C383.2,376.1 381.9,375.6 381.8,374.5 C381.6,373.5 382.2,371.6 382.7,370.5 C383.1,369.4 383.8,368.7 384.5,367.7 C385.3,366.7 386.2,365.3 387.3,364.6 C388.3,363.8 389.6,363.3 391.0,363.2 C392.3,363.1 394.3,363.6 395.4,363.9 C396.4,364.3 397.1,365.0 397.3,365.5 C397.5,366.1 396.8,366.9 396.3,367.2 C395.9,367.4 395.6,366.9 394.8,367.0 C394.1,367.1 392.7,367.4 391.8,367.7 C391.0,368.0 390.5,368.4 389.8,368.8 C389.2,369.2 388.3,369.7 387.8,370.2 C387.4,370.7 387.3,371.2 387.1,371.9 C386.9,372.5 386.7,373.6 386.6,374.2 C386.5,374.8 386.5,375.1 386.6,375.6 C386.7,376.1 387.1,376.6 387.3,377.2 C387.5,377.8 387.9,378.5 387.8,379.1 C387.8,379.7 387.6,380.7 387.1,380.8 Z'/><path d='M401.0,374.3 C401.3,374.7 401.7,375.7 401.5,376.2 C401.2,376.6 400.0,377.1 399.2,377.3 C398.4,377.5 397.0,377.7 396.7,377.3 C396.4,376.9 397.1,375.5 397.6,374.9 C398.0,374.4 398.8,374.1 399.4,374.0 C399.9,373.9 400.6,374.0 401.0,374.3 Z'/><path d='M107.0,17.6 C106.5,16.0 104.7,13.8 105.4,12.6 C106.1,11.4 109.5,10.1 111.0,10.2 C112.6,10.3 113.8,12.2 114.8,13.3 C115.9,14.5 117.3,15.8 117.2,17.0 C117.1,18.3 115.5,20.0 114.1,20.9 C112.6,21.8 109.7,23.2 108.5,22.7 C107.3,22.1 107.5,19.3 107.0,17.6 Z'/><path d='M262.4,29.6 C261.7,30.8 257.0,30.2 254.6,30.2 C252.3,30.1 250.1,30.3 248.4,29.4 C246.6,28.4 245.1,26.3 244.3,24.4 C243.6,22.5 242.4,18.7 243.8,17.8 C245.2,17.0 250.2,18.4 252.7,19.3 C255.1,20.2 256.8,21.6 258.4,23.3 C260.1,25.0 263.0,28.5 262.4,29.6 Z'/><path d='M-13.5,15.7 C-13.6,14.3 -11.8,12.6 -10.5,11.3 C-9.2,9.9 -8.0,8.3 -5.8,7.6 C-3.5,6.9 1.8,6.3 2.8,7.3 C3.7,8.4 0.9,12.1 -0.1,13.8 C-1.1,15.5 -1.7,16.4 -3.3,17.4 C-4.9,18.4 -8.0,19.9 -9.7,19.6 C-11.4,19.3 -13.4,17.1 -13.5,15.7 Z'/><path d='M384.3,16.4 C383.4,14.7 383.7,10.7 385.3,9.3 C387.0,7.9 391.7,7.8 394.2,7.7 C396.8,7.7 399.6,7.8 400.7,8.8 C401.8,9.8 401.3,11.9 401.0,13.8 C400.7,15.8 400.5,19.6 398.8,20.5 C397.1,21.4 393.0,19.8 390.6,19.1 C388.2,18.4 385.1,18.0 384.3,16.4 Z'/><path d='M197.1,55.4 C196.1,56.4 194.3,57.6 193.0,57.3 C191.7,57.0 189.9,54.8 189.3,53.5 C188.7,52.3 189.0,51.0 189.2,49.7 C189.5,48.4 189.7,45.8 190.7,45.5 C191.6,45.3 193.5,47.4 194.9,48.3 C196.3,49.3 198.7,50.1 199.0,51.2 C199.4,52.4 198.2,54.4 197.1,55.4 Z'/><path d='M338.0,63.3 C337.3,63.9 336.0,64.1 334.9,63.8 C333.8,63.5 332.3,62.6 331.3,61.3 C330.3,60.0 328.4,56.8 328.8,55.9 C329.2,54.9 332.2,55.7 333.8,55.6 C335.3,55.6 337.2,54.7 338.1,55.5 C339.1,56.3 339.6,59.1 339.6,60.4 C339.6,61.7 338.8,62.8 338.0,63.3 Z'/><path d='M84.8,109.3 C84.1,108.4 83.9,106.4 84.4,105.0 C84.9,103.7 86.4,101.7 87.8,101.2 C89.2,100.8 91.9,101.3 92.9,102.1 C94.0,103.0 94.1,105.2 94.0,106.6 C94.0,108.0 93.4,109.9 92.5,110.5 C91.6,111.2 89.7,110.7 88.5,110.5 C87.2,110.3 85.5,110.2 84.8,109.3 Z'/><path d='M388.1,104.0 C387.3,103.5 387.1,101.9 387.1,100.8 C387.0,99.7 387.2,98.7 387.8,97.5 C388.3,96.3 389.6,93.6 390.4,93.4 C391.2,93.2 392.1,95.1 392.8,96.2 C393.5,97.2 394.6,98.4 394.4,99.7 C394.2,101.1 392.6,103.3 391.6,104.0 C390.5,104.7 388.8,104.5 388.1,104.0 Z'/><path d='M155.5,153.8 C155.4,154.9 153.3,156.3 151.9,156.6 C150.5,156.9 148.6,156.2 147.0,155.8 C145.4,155.4 143.1,155.0 142.4,154.1 C141.7,153.2 142.0,151.4 142.9,150.4 C143.7,149.4 145.7,148.1 147.4,148.0 C149.0,148.0 151.5,149.2 152.8,150.2 C154.2,151.1 155.7,152.7 155.5,153.8 Z'/><path d='M201.3,129.4 C200.7,130.7 198.5,132.0 196.8,132.1 C195.1,132.2 192.3,131.0 191.1,129.9 C190.0,128.9 190.1,127.4 189.8,125.9 C189.4,124.5 188.2,122.0 189.0,121.2 C189.9,120.5 193.0,120.9 194.9,121.3 C196.8,121.8 199.5,122.8 200.5,124.1 C201.6,125.5 201.9,128.0 201.3,129.4 Z'/><path d='M38.8,186.9 C38.4,185.8 39.1,183.3 40.1,182.5 C41.2,181.6 43.8,181.6 45.2,181.9 C46.6,182.1 47.8,182.9 48.5,183.7 C49.2,184.6 49.5,186.0 49.1,187.0 C48.8,188.1 47.7,189.8 46.6,190.1 C45.5,190.5 43.8,189.8 42.5,189.3 C41.2,188.7 39.2,188.1 38.8,186.9 Z'/><path d='M176.2,173.3 C174.6,172.8 173.1,172.0 172.2,170.3 C171.2,168.7 170.1,165.3 170.7,163.4 C171.3,161.6 174.0,159.7 175.8,159.1 C177.5,158.5 179.6,158.8 181.2,159.9 C182.7,161.0 184.8,163.5 184.9,165.7 C185.1,167.9 183.5,172.0 182.1,173.3 C180.6,174.6 177.9,173.8 176.2,173.3 Z'/><path d='M212.8,180.9 C212.2,182.0 212.1,184.0 211.2,184.1 C210.4,184.2 208.5,182.4 207.5,181.6 C206.5,180.8 205.5,180.0 205.4,179.2 C205.3,178.4 206.1,177.6 206.9,177.0 C207.6,176.3 208.6,175.2 209.9,175.3 C211.2,175.4 214.1,176.5 214.6,177.4 C215.1,178.4 213.4,179.8 212.8,180.9 Z'/><path d='M338.2,215.8 C336.9,215.5 335.1,214.1 334.7,212.7 C334.4,211.3 335.6,209.3 336.2,207.4 C336.8,205.6 337.4,202.0 338.3,201.5 C339.3,201.1 340.8,203.6 342.1,204.7 C343.4,205.9 346.0,207.0 346.0,208.5 C346.1,210.1 343.6,212.7 342.3,213.9 C341.0,215.1 339.4,216.0 338.2,215.8 Z'/><path d='M232.0,253.5 C231.5,254.7 230.9,257.2 229.9,257.3 C228.9,257.5 226.8,255.4 225.9,254.4 C225.0,253.4 224.6,252.5 224.3,251.2 C224.1,249.8 223.5,247.0 224.4,246.3 C225.3,245.6 228.2,246.6 229.7,247.2 C231.1,247.8 232.6,249.0 233.0,250.1 C233.4,251.1 232.6,252.3 232.0,253.5 Z'/><path d='M14.5,303.7 C14.5,302.7 15.0,302.1 15.7,301.2 C16.5,300.3 17.8,298.4 18.9,298.4 C20.0,298.3 21.5,299.9 22.1,300.9 C22.8,301.8 23.0,302.9 22.7,304.0 C22.5,305.1 21.8,307.1 20.5,307.7 C19.3,308.3 16.3,308.1 15.3,307.4 C14.3,306.7 14.4,304.8 14.5,303.7 Z'/><path d='M330.3,312.7 C329.9,311.7 330.0,310.5 330.6,309.3 C331.3,308.0 332.6,306.1 334.1,305.4 C335.6,304.6 338.5,304.3 339.7,304.8 C341.0,305.4 341.6,307.0 341.6,308.5 C341.5,310.0 340.8,312.7 339.4,313.8 C338.0,314.8 334.7,314.9 333.2,314.7 C331.7,314.6 330.8,313.6 330.3,312.7 Z'/><path d='M27.5,348.8 C26.6,347.7 24.8,346.8 24.8,345.6 C24.8,344.4 26.4,342.2 27.6,341.5 C28.8,340.8 30.8,341.0 32.2,341.5 C33.6,341.9 35.8,343.1 36.1,344.2 C36.3,345.4 34.6,347.2 33.6,348.4 C32.7,349.7 31.5,351.8 30.5,351.9 C29.5,351.9 28.5,349.8 27.5,348.8 Z'/><path d='M375.3,340.0 C374.7,338.7 375.9,336.4 376.6,334.5 C377.4,332.6 378.1,329.6 379.8,328.4 C381.5,327.3 384.8,327.2 386.7,327.7 C388.7,328.2 391.6,329.6 391.6,331.3 C391.5,333.0 388.4,335.9 386.5,337.7 C384.7,339.5 382.4,341.7 380.5,342.1 C378.7,342.5 376.0,341.2 375.3,340.0 Z'/><path d='M122.6,384.5 C122.1,383.3 123.6,380.8 124.8,379.7 C125.9,378.5 128.1,377.8 129.5,377.9 C130.8,377.9 132.0,378.9 133.0,379.8 C134.1,380.8 136.0,382.3 135.8,383.4 C135.5,384.5 133.1,385.9 131.7,386.5 C130.3,387.0 128.9,387.0 127.4,386.6 C125.9,386.3 123.0,385.6 122.6,384.5 Z'/><path d='M177.8,371.9 C177.2,371.1 177.4,369.8 177.5,368.7 C177.6,367.5 177.5,366.2 178.2,365.1 C178.9,364.1 180.5,362.7 181.7,362.5 C182.8,362.2 184.7,362.8 185.0,363.7 C185.3,364.7 184.0,366.8 183.4,368.4 C182.7,370.0 182.1,372.6 181.2,373.2 C180.2,373.8 178.4,372.6 177.8,371.9 Z'/><path d='M20.8,229.3 C20.3,229.2 19.9,227.9 19.9,227.2 C19.9,226.5 20.3,225.3 20.7,225.1 C21.1,224.8 22.0,225.3 22.3,225.8 C22.5,226.2 22.6,227.2 22.3,227.7 C22.1,228.3 21.2,229.3 20.8,229.3 Z'/><path d='M53.8,152.3 C53.3,152.2 52.3,150.4 52.4,149.7 C52.4,148.9 53.5,148.0 54.1,147.7 C54.7,147.3 55.9,147.1 56.1,147.5 C56.4,147.9 56.1,149.3 55.7,150.1 C55.3,150.9 54.4,152.4 53.8,152.3 Z'/><path d='M126.5,117.4 C125.9,117.7 124.2,117.4 123.7,116.8 C123.2,116.1 123.1,114.1 123.4,113.5 C123.8,112.9 125.3,112.8 125.9,113.0 C126.6,113.3 127.2,114.3 127.3,115.1 C127.4,115.8 127.1,117.1 126.5,117.4 Z'/><path d='M352.4,374.9 C352.1,375.6 350.1,376.2 349.2,376.0 C348.3,375.7 347.3,374.3 347.0,373.5 C346.7,372.8 346.8,371.6 347.4,371.4 C348.1,371.1 350.2,371.3 351.0,371.9 C351.8,372.5 352.7,374.3 352.4,374.9 Z'/><path d='M155.9,356.3 C155.6,356.6 154.8,356.4 154.3,356.0 C153.9,355.6 153.0,354.5 153.1,354.0 C153.2,353.5 154.3,352.7 154.8,352.8 C155.4,352.9 156.2,354.1 156.4,354.7 C156.6,355.3 156.3,356.1 155.9,356.3 Z'/><path d='M104.5,267.5 C103.9,267.2 104.0,264.9 104.1,263.6 C104.3,262.3 104.9,260.2 105.5,259.8 C106.2,259.4 107.5,260.2 107.9,261.1 C108.2,262.0 108.2,264.1 107.6,265.1 C107.1,266.2 105.1,267.7 104.5,267.5 Z'/><path d='M358.4,386.6 C358.3,387.1 357.6,388.0 357.1,388.0 C356.6,388.0 355.7,387.2 355.4,386.7 C355.1,386.2 355.0,385.4 355.4,385.1 C355.8,384.7 357.3,384.4 357.8,384.7 C358.3,384.9 358.5,386.0 358.4,386.6 Z'/><path d='M276.0,63.2 C275.5,63.5 273.9,63.0 273.5,62.4 C273.1,61.8 273.2,60.2 273.5,59.6 C273.9,59.0 275.0,58.7 275.5,58.9 C276.0,59.1 276.6,60.3 276.7,61.0 C276.8,61.7 276.5,63.0 276.0,63.2 Z'/><path d='M185.9,94.7 C185.6,93.9 185.6,91.9 186.3,91.5 C186.9,91.1 188.7,91.8 189.5,92.4 C190.3,92.9 191.1,93.9 190.9,94.6 C190.7,95.2 189.0,96.4 188.2,96.4 C187.3,96.5 186.2,95.6 185.9,94.7 Z'/><path d='M156.8,392.9 C155.9,392.8 154.6,391.6 154.3,390.6 C154.0,389.6 154.6,387.4 155.3,386.8 C155.9,386.1 157.4,385.9 158.2,386.6 C159.0,387.3 160.2,389.7 160.0,390.8 C159.7,391.8 157.8,392.9 156.8,392.9 Z'/><path d='M98.8,239.5 C98.7,240.3 97.5,241.3 96.5,241.3 C95.6,241.4 93.8,240.7 93.3,239.9 C92.9,239.1 92.9,236.9 93.6,236.4 C94.3,235.9 96.8,236.2 97.7,236.7 C98.5,237.3 99.0,238.8 98.8,239.5 Z'/><path d='M337.7,275.8 C337.3,275.8 336.5,274.7 336.2,273.9 C335.8,273.1 335.2,271.4 335.5,270.9 C335.8,270.3 337.3,270.1 337.9,270.5 C338.4,271.0 339.0,272.7 338.9,273.6 C338.9,274.5 338.2,275.7 337.7,275.8 Z'/><path d='M197.1,377.4 C196.7,377.7 195.5,377.0 194.9,376.4 C194.4,375.9 193.6,374.8 193.7,374.2 C193.8,373.6 194.9,372.7 195.5,372.8 C196.1,373.0 196.8,374.3 197.1,375.0 C197.4,375.8 197.5,377.2 197.1,377.4 Z'/><path d='M179.5,15.2 C178.6,15.7 177.1,15.2 176.2,14.4 C175.3,13.6 173.9,11.4 174.2,10.3 C174.4,9.3 176.5,7.9 177.7,8.1 C179.0,8.4 181.3,10.6 181.5,11.8 C181.8,13.0 180.4,14.8 179.5,15.2 Z'/><path d='M-3.8,336.2 C-4.3,335.9 -4.6,334.9 -4.4,334.2 C-4.3,333.5 -3.7,332.0 -3.1,331.9 C-2.4,331.7 -1.0,332.5 -0.7,333.1 C-0.5,333.8 -1.1,335.3 -1.6,335.8 C-2.1,336.3 -3.3,336.4 -3.8,336.2 Z'/><path d='M396.4,335.8 C395.9,335.5 395.5,334.7 395.6,334.2 C395.7,333.7 396.5,332.9 397.0,332.8 C397.5,332.6 398.4,332.9 398.7,333.4 C399.0,334.0 399.0,335.6 398.6,336.0 C398.2,336.4 396.9,336.1 396.4,335.8 Z'/><path d='M138.7,3.3 C138.2,3.5 137.1,2.9 136.6,2.3 C136.2,1.7 135.5,0.5 135.8,-0.1 C136.0,-0.7 137.3,-1.4 138.0,-1.2 C138.6,-1.0 139.6,0.3 139.7,1.1 C139.8,1.8 139.2,3.1 138.7,3.3 Z'/><path d='M138.4,402.8 C137.9,403.0 136.8,403.0 136.4,402.6 C136.0,402.1 135.7,400.6 135.9,400.0 C136.2,399.4 137.4,398.5 138.0,398.7 C138.6,398.9 139.5,400.4 139.6,401.1 C139.7,401.8 139.0,402.5 138.4,402.8 Z'/><path d='M58.7,226.0 C58.6,225.3 59.8,224.1 60.7,223.5 C61.7,223.0 63.5,222.3 64.3,222.7 C65.1,223.1 66.0,224.9 65.6,225.7 C65.1,226.5 62.8,227.6 61.7,227.6 C60.6,227.7 58.9,226.7 58.7,226.0 Z'/><path d='M298.1,5.6 C297.7,5.9 296.2,5.6 295.4,5.2 C294.6,4.8 293.3,3.7 293.2,3.1 C293.1,2.5 293.9,1.6 294.6,1.5 C295.3,1.5 296.8,2.2 297.4,2.9 C298.0,3.6 298.4,5.2 298.1,5.6 Z'/><path d='M297.4,405.0 C297.0,405.6 296.0,406.4 295.2,406.0 C294.5,405.7 293.1,403.8 293.0,403.1 C292.8,402.3 293.8,401.6 294.6,401.6 C295.4,401.5 297.1,402.2 297.6,402.8 C298.1,403.4 297.8,404.5 297.4,405.0 Z'/><path d='M203.8,330.2 C203.2,330.5 202.1,330.4 201.6,330.0 C201.1,329.5 200.7,327.9 200.9,327.3 C201.2,326.7 202.4,326.4 203.1,326.5 C203.8,326.7 205.0,327.6 205.1,328.2 C205.3,328.8 204.4,329.9 203.8,330.2 Z'/><path d='M354.3,340.5 C353.8,340.3 353.5,339.0 353.7,338.1 C353.8,337.2 354.6,335.4 355.2,335.1 C355.9,334.8 357.3,335.3 357.5,336.0 C357.8,336.7 357.1,338.6 356.5,339.3 C356.0,340.1 354.8,340.7 354.3,340.5 Z'/><path d='M42.5,129.3 C42.2,129.6 41.2,129.5 40.5,129.2 C39.9,129.0 38.7,128.4 38.5,127.9 C38.4,127.4 39.0,126.4 39.6,126.3 C40.2,126.2 41.8,126.7 42.2,127.2 C42.7,127.7 42.7,129.0 42.5,129.3 Z'/><path d='M31.1,320.8 C30.7,320.3 30.3,319.0 30.7,318.3 C31.1,317.7 32.7,317.0 33.5,317.1 C34.2,317.2 35.2,318.4 35.1,319.1 C35.1,319.7 33.9,320.9 33.3,321.2 C32.6,321.5 31.5,321.2 31.1,320.8 Z'/><path d='M36.7,15.9 C36.3,15.4 36.9,13.4 37.6,12.8 C38.4,12.1 40.6,11.8 41.3,12.1 C42.1,12.3 42.3,13.5 42.1,14.2 C41.8,14.9 40.7,15.8 39.8,16.1 C38.9,16.4 37.1,16.5 36.7,15.9 Z'/><path d='M309.2,391.4 C308.7,391.4 307.9,390.5 307.8,389.8 C307.7,389.1 308.1,387.7 308.5,387.3 C308.8,387.0 309.5,387.2 309.9,387.6 C310.2,388.0 310.7,389.1 310.6,389.8 C310.5,390.4 309.7,391.4 309.2,391.4 Z'/><path d='M77.8,278.3 C77.7,277.7 78.2,276.9 78.7,276.5 C79.2,276.2 80.3,276.0 80.7,276.3 C81.2,276.6 81.7,277.6 81.5,278.2 C81.3,278.8 80.2,280.0 79.6,280.0 C79.0,280.0 78.0,278.9 77.8,278.3 Z'/><path d='M362.3,293.3 C361.8,293.8 360.9,294.1 360.0,293.8 C359.1,293.6 356.8,292.6 356.6,292.0 C356.4,291.4 357.7,290.3 358.7,290.0 C359.7,289.7 361.9,289.8 362.5,290.4 C363.1,290.9 362.7,292.7 362.3,293.3 Z'/><path d='M221.7,58.5 C221.5,57.7 222.6,56.1 223.3,55.7 C224.1,55.2 225.3,55.4 226.1,55.8 C226.9,56.3 228.3,57.5 228.1,58.3 C227.8,59.1 225.7,60.4 224.7,60.4 C223.6,60.5 221.9,59.3 221.7,58.5 Z'/><path d='M16.2,347.1 C16.1,347.6 14.7,348.2 13.8,348.2 C12.9,348.3 11.1,347.8 10.6,347.2 C10.1,346.7 10.3,345.4 10.9,345.0 C11.6,344.7 13.5,344.8 14.4,345.2 C15.2,345.5 16.2,346.6 16.2,347.1 Z'/><path d='M256.8,33.5 C256.7,32.8 257.7,31.4 258.5,31.2 C259.3,30.9 261.1,31.4 261.5,31.8 C262.0,32.2 261.5,33.2 261.2,33.7 C260.8,34.2 259.9,35.0 259.1,34.9 C258.4,34.9 256.9,34.1 256.8,33.5 Z'/><path d='M281.7,86.8 C281.2,86.3 281.4,84.2 281.9,83.4 C282.5,82.5 284.1,81.6 285.0,81.7 C285.9,81.8 287.4,83.3 287.4,84.1 C287.4,85.0 285.9,86.2 285.0,86.6 C284.0,87.1 282.2,87.3 281.7,86.8 Z'/><path d='M232.4,368.8 C231.8,368.6 231.3,367.3 231.4,366.5 C231.4,365.7 232.3,364.1 232.9,363.9 C233.4,363.6 234.5,364.2 234.8,364.9 C235.1,365.5 235.2,367.1 234.8,367.7 C234.4,368.4 233.0,369.0 232.4,368.8 Z'/><path d='M28.5,274.3 C28.2,273.8 28.6,272.4 29.2,272.0 C29.7,271.6 31.0,271.7 31.6,272.0 C32.2,272.3 32.8,273.3 32.6,273.8 C32.4,274.4 31.2,275.1 30.5,275.2 C29.8,275.3 28.7,274.8 28.5,274.3 Z'/><path d='M129.1,197.1 C129.0,197.9 128.4,199.4 127.5,199.5 C126.5,199.6 123.9,198.5 123.3,197.7 C122.8,196.9 123.5,195.2 124.3,194.7 C125.1,194.2 127.4,194.2 128.2,194.5 C129.0,194.9 129.2,196.2 129.1,197.1 Z'/><path d='M284.2,13.3 C283.8,13.5 283.2,13.5 282.8,13.2 C282.3,12.9 281.5,11.9 281.5,11.4 C281.5,10.9 282.1,10.1 282.7,10.1 C283.2,10.2 284.6,11.3 284.8,11.8 C285.1,12.4 284.5,13.1 284.2,13.3 Z'/><path d='M346.4,33.4 C345.9,33.2 345.4,32.0 345.4,31.0 C345.3,30.0 345.7,27.6 346.2,27.1 C346.8,26.7 348.1,27.6 348.6,28.3 C349.0,29.1 349.0,31.1 348.6,31.9 C348.3,32.7 346.9,33.5 346.4,33.4 Z'/><path d='M279.2,241.7 C278.7,241.9 277.3,241.1 276.7,240.3 C276.2,239.6 275.7,237.9 275.9,237.3 C276.1,236.7 277.2,236.5 277.9,236.8 C278.5,237.1 279.5,238.1 279.7,238.9 C279.9,239.8 279.7,241.5 279.2,241.7 Z'/><path d='M302.9,135.9 C302.7,136.4 302.0,136.8 301.3,136.9 C300.6,136.9 298.9,136.7 298.5,136.2 C298.1,135.7 298.5,134.4 299.1,134.0 C299.7,133.6 301.6,133.6 302.3,133.9 C302.9,134.2 303.0,135.4 302.9,135.9 Z'/><path d='M270.6,189.1 C269.9,189.1 268.3,187.2 268.1,185.8 C267.9,184.5 268.7,181.7 269.5,180.9 C270.3,180.2 272.2,180.4 272.8,181.2 C273.3,182.0 273.1,184.3 272.7,185.7 C272.4,187.0 271.4,189.0 270.6,189.1 Z'/><path d='M231.0,230.3 C230.9,229.6 232.3,228.1 233.2,227.8 C234.1,227.4 235.8,227.7 236.4,228.1 C237.1,228.5 237.3,229.4 236.9,230.1 C236.5,230.7 234.9,232.0 233.9,232.0 C233.0,232.1 231.1,231.0 231.0,230.3 Z'/><path d='M173.7,52.8 C173.6,53.3 172.2,53.8 171.5,53.8 C170.9,53.7 169.8,52.9 169.6,52.4 C169.4,51.9 169.7,51.1 170.2,50.8 C170.6,50.6 171.8,50.6 172.3,51.0 C172.9,51.3 173.8,52.4 173.7,52.8 Z'/><path d='M118.9,245.1 C118.2,245.0 116.8,243.8 116.9,243.0 C116.9,242.2 118.4,240.7 119.1,240.2 C119.9,239.8 120.9,239.8 121.3,240.5 C121.6,241.1 121.8,243.2 121.4,243.9 C121.1,244.7 119.7,245.3 118.9,245.1 Z'/><path d='M9.8,373.5 C9.5,374.1 8.1,374.3 7.2,374.2 C6.3,374.1 4.5,373.4 4.2,372.8 C3.9,372.2 4.8,371.0 5.6,370.6 C6.4,370.3 8.3,370.0 9.0,370.5 C9.7,371.0 10.1,372.8 9.8,373.5 Z'/><path d='M410.6,373.8 C410.3,374.5 408.3,374.8 407.2,374.7 C406.1,374.5 404.4,373.6 404.0,372.8 C403.6,372.0 404.1,370.2 404.9,369.8 C405.8,369.4 408.2,369.7 409.1,370.4 C410.1,371.1 410.9,373.1 410.6,373.8 Z'/><path d='M342.7,90.0 C341.8,90.1 340.0,88.8 339.6,87.7 C339.2,86.6 339.9,84.2 340.4,83.5 C340.9,82.8 341.8,82.9 342.6,83.5 C343.4,84.0 345.0,85.7 345.0,86.8 C345.1,87.9 343.7,89.8 342.7,90.0 Z'/><path d='M103.5,352.3 C102.8,352.4 101.0,351.1 100.7,350.0 C100.4,349.0 101.1,346.7 101.7,346.0 C102.3,345.4 103.8,345.8 104.4,346.3 C104.9,346.9 105.1,348.4 105.0,349.4 C104.8,350.4 104.2,352.2 103.5,352.3 Z'/><path d='M273.3,285.4 C273.2,286.4 271.7,288.0 270.7,288.1 C269.8,288.2 268.4,286.9 267.8,286.0 C267.3,285.1 266.8,283.3 267.4,282.7 C268.0,282.0 270.6,281.6 271.6,282.0 C272.6,282.5 273.5,284.4 273.3,285.4 Z'/><path d='M245.4,83.3 C244.7,83.3 243.1,82.2 243.0,81.5 C242.9,80.7 244.0,79.4 244.7,79.0 C245.4,78.5 246.7,78.5 247.1,78.9 C247.5,79.4 247.3,80.8 247.1,81.5 C246.8,82.2 246.0,83.3 245.4,83.3 Z'/><path d='M269.4,76.3 C269.3,76.7 268.6,77.1 268.1,77.1 C267.7,77.1 266.9,76.7 266.7,76.3 C266.5,75.9 266.5,75.0 266.8,74.7 C267.2,74.5 268.3,74.7 268.7,75.0 C269.1,75.3 269.5,76.0 269.4,76.3 Z'/><path d='M37.3,162.6 C36.6,162.7 35.3,161.4 34.9,160.5 C34.4,159.6 34.1,158.0 34.5,157.3 C34.9,156.5 36.5,155.6 37.3,156.0 C38.1,156.4 39.1,158.6 39.1,159.7 C39.1,160.8 38.0,162.5 37.3,162.6 Z'/><path d='M57.6,92.0 C57.3,91.5 58.2,89.9 58.8,89.3 C59.4,88.7 60.4,88.2 61.2,88.4 C61.9,88.6 63.2,89.8 63.1,90.5 C63.0,91.2 61.5,92.3 60.6,92.6 C59.7,92.8 57.9,92.6 57.6,92.0 Z'/><path d='M161.3,111.9 C161.2,112.5 159.7,112.9 158.8,113.0 C157.9,113.1 156.4,113.1 156.0,112.5 C155.5,111.9 155.5,109.9 156.2,109.3 C156.8,108.8 158.9,108.8 159.7,109.2 C160.6,109.7 161.5,111.2 161.3,111.9 Z'/><path d='M144.2,12.3 C144.1,11.9 144.5,11.0 144.9,10.7 C145.4,10.5 146.4,10.3 146.9,10.5 C147.4,10.7 148.1,11.6 147.9,12.0 C147.7,12.4 146.4,12.8 145.8,12.9 C145.2,13.0 144.4,12.6 144.2,12.3 Z'/><path d='M12.0,147.5 C11.6,147.2 11.6,146.0 11.9,145.3 C12.2,144.7 13.4,143.8 14.0,143.7 C14.6,143.6 15.4,144.3 15.4,144.9 C15.5,145.6 14.9,147.1 14.3,147.5 C13.8,147.9 12.4,147.9 12.0,147.5 Z'/><path d='M385.9,41.6 C385.5,41.2 385.2,39.8 385.7,39.1 C386.2,38.4 388.3,37.5 389.0,37.6 C389.7,37.6 390.1,38.6 390.0,39.3 C389.9,40.0 389.0,41.5 388.4,41.9 C387.7,42.3 386.4,42.1 385.9,41.6 Z'/><path d='M86.5,91.8 C86.4,91.4 86.7,90.5 87.3,90.3 C87.9,90.1 89.3,90.3 89.9,90.7 C90.4,91.0 90.8,91.9 90.5,92.3 C90.1,92.7 88.3,93.2 87.7,93.1 C87.0,93.0 86.6,92.3 86.5,91.8 Z'/><path d='M305.8,254.4 C305.3,254.7 303.8,254.9 303.4,254.4 C303.1,253.9 303.2,252.2 303.5,251.5 C303.7,250.7 304.6,249.6 305.1,249.8 C305.5,250.0 306.2,251.9 306.3,252.6 C306.4,253.4 306.2,254.1 305.8,254.4 Z'/><path d='M246.5,176.7 C246.2,177.4 244.2,177.6 243.0,177.4 C241.9,177.2 240.0,176.4 239.6,175.4 C239.2,174.4 240.0,171.8 240.9,171.5 C241.8,171.2 244.0,172.6 244.9,173.5 C245.9,174.4 246.9,176.1 246.5,176.7 Z'/><path d='M323.8,270.9 C323.7,270.3 324.5,269.2 325.2,269.0 C325.8,268.8 327.1,269.2 327.6,269.7 C328.2,270.1 328.7,271.1 328.3,271.6 C327.9,272.1 326.1,272.7 325.4,272.6 C324.6,272.5 323.8,271.5 323.8,270.9 Z'/><path d='M-6.8,344.5 C-7.1,343.9 -6.6,342.3 -6.0,341.7 C-5.4,341.1 -3.7,340.8 -3.2,341.0 C-2.6,341.2 -2.6,342.3 -2.7,342.9 C-2.8,343.5 -3.3,344.5 -4.0,344.7 C-4.7,345.0 -6.5,345.0 -6.8,344.5 Z'/><path d='M393.9,344.0 C393.6,343.5 393.7,342.2 394.1,341.8 C394.6,341.3 395.9,341.2 396.6,341.4 C397.3,341.6 398.2,342.3 398.1,342.9 C398.0,343.5 396.7,344.9 396.0,345.1 C395.3,345.3 394.2,344.6 393.9,344.0 Z'/><path d='M365.4,294.6 C364.9,294.7 363.8,293.3 363.5,292.4 C363.3,291.5 363.4,289.8 363.7,289.3 C364.1,288.7 365.4,288.6 365.9,289.1 C366.3,289.6 366.6,291.1 366.5,292.1 C366.5,293.0 365.9,294.5 365.4,294.6 Z'/><path d='M188.0,76.8 C187.6,76.0 188.7,73.2 189.7,72.5 C190.6,71.9 192.9,72.3 194.0,72.8 C195.1,73.4 196.4,75.1 196.1,75.9 C195.8,76.7 193.5,77.6 192.2,77.7 C190.8,77.9 188.4,77.7 188.0,76.8 Z'/><path d='M315.4,1.4 C314.6,1.3 313.7,-0.3 313.6,-1.3 C313.5,-2.2 314.3,-4.0 314.8,-4.4 C315.4,-4.8 316.5,-4.3 317.0,-3.6 C317.6,-3.0 318.5,-1.3 318.2,-0.5 C318.0,0.4 316.2,1.6 315.4,1.4 Z'/><path d='M315.5,400.6 C314.8,400.5 313.5,399.8 313.3,398.8 C313.2,397.8 313.9,395.3 314.5,394.8 C315.2,394.3 316.8,395.2 317.3,395.9 C317.8,396.6 317.9,398.4 317.6,399.1 C317.3,399.9 316.2,400.6 315.5,400.6 Z'/><path d='M18.3,316.7 C17.7,317.3 16.0,317.5 15.1,317.0 C14.3,316.6 13.1,314.7 13.3,313.9 C13.4,313.2 15.0,312.7 15.8,312.6 C16.7,312.6 18.0,313.1 18.4,313.7 C18.8,314.4 18.8,316.2 18.3,316.7 Z'/><path d='M238.4,90.2 C237.7,89.8 237.2,87.2 237.6,86.2 C238.0,85.1 239.7,84.3 240.7,84.0 C241.8,83.6 243.8,83.5 244.0,84.3 C244.2,85.0 242.9,87.5 242.0,88.4 C241.0,89.4 239.1,90.6 238.4,90.2 Z'/><path d='M355.9,19.7 C355.1,20.2 352.9,19.9 352.4,19.2 C351.8,18.5 352.1,16.6 352.5,15.7 C352.8,14.8 353.7,13.7 354.5,13.8 C355.3,13.9 357.0,15.5 357.3,16.5 C357.5,17.4 356.7,19.2 355.9,19.7 Z'/><path d='M224.1,215.5 C223.8,216.0 222.7,216.0 221.9,215.8 C221.1,215.6 219.5,214.7 219.2,214.2 C219.0,213.6 219.8,212.6 220.5,212.4 C221.2,212.2 222.9,212.7 223.5,213.2 C224.1,213.7 224.4,215.1 224.1,215.5 Z'/><path d='M72.6,73.3 C72.4,74.0 71.3,75.0 70.3,74.9 C69.3,74.8 67.1,73.5 66.7,72.7 C66.3,71.9 66.8,70.4 67.6,70.1 C68.4,69.8 70.6,70.4 71.4,71.0 C72.3,71.5 72.8,72.7 72.6,73.3 Z'/><path d='M153.4,194.8 C153.3,194.0 155.1,192.7 156.1,192.2 C157.1,191.7 158.8,191.6 159.5,192.0 C160.1,192.4 160.1,193.7 159.7,194.4 C159.2,195.2 157.8,196.7 156.8,196.8 C155.7,196.8 153.5,195.5 153.4,194.8 Z'/><path d='M256.3,381.7 C255.7,382.2 253.6,381.8 252.6,381.3 C251.6,380.7 250.3,379.1 250.2,378.3 C250.2,377.5 251.3,376.6 252.2,376.5 C253.2,376.4 255.2,377.0 255.9,377.9 C256.5,378.8 256.8,381.1 256.3,381.7 Z'/><path d='M311.4,291.3 C310.8,291.3 309.7,290.7 309.6,290.0 C309.4,289.3 310.0,287.4 310.4,287.0 C310.9,286.5 311.7,287.0 312.1,287.5 C312.6,288.0 313.3,289.4 313.2,290.0 C313.1,290.7 312.0,291.3 311.4,291.3 Z'/><path d='M79.3,201.1 C79.2,200.7 79.8,199.8 80.3,199.5 C80.9,199.2 82.4,199.0 82.8,199.3 C83.2,199.5 83.3,200.4 82.9,200.9 C82.6,201.4 81.5,202.2 80.9,202.2 C80.3,202.2 79.4,201.5 79.3,201.1 Z'/>";

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><g fill='${spotColor}' fill-opacity='${coreOpacity}' fill-rule='evenodd'>${innerPaths}</g><g fill='${spotColor}' fill-opacity='${borderOpacity}' fill-rule='evenodd'>${outerPaths}</g></svg>`;
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
