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
    const outerOpacity = isDarkBg ? 0.18 : 0.12;
    const centerOpacity = isDarkBg ? 0.22 : 0.16;

    const outerPaths = "<path d='M339.3,355.2 C339.7,355.5 338.3,356.7 338.4,357.8 C338.5,358.8 339.8,359.5 339.8,360.6 C339.9,361.6 339.6,363.1 338.6,363.1 C337.6,363.0 335.3,361.1 334.8,360.3 C334.3,359.6 335.5,359.8 335.9,359.3 C336.3,358.8 336.6,358.4 336.6,357.8 C336.7,357.2 335.6,356.7 336.1,356.2 C336.6,355.7 338.8,354.9 339.3,355.2 Z'/><path d='M335.0,365.9 C334.6,366.5 332.8,366.0 331.6,365.7 C330.3,365.5 330.0,364.8 328.8,364.5 C327.5,364.2 325.4,364.8 325.2,364.2 C325.1,363.5 327.1,361.6 328.0,361.2 C328.9,360.9 328.9,362.1 329.6,362.3 C330.3,362.6 330.7,362.5 331.5,362.6 C332.3,362.6 332.8,362.0 333.6,362.7 C334.3,363.3 335.4,365.3 335.0,365.9 Z'/><path d='M324.4,361.8 C323.5,361.6 323.1,360.2 323.0,359.1 C322.9,358.0 323.5,357.4 323.7,356.2 C323.9,355.0 323.3,353.3 324.0,353.1 C324.6,352.9 326.7,354.4 327.2,355.1 C327.7,355.9 326.6,356.1 326.4,356.8 C326.3,357.4 326.3,357.9 326.5,358.5 C326.6,359.2 327.6,359.5 327.2,360.1 C326.8,360.8 325.2,362.0 324.4,361.8 Z'/><path d='M328.5,350.2 C328.8,349.8 330.1,350.7 331.1,350.7 C332.1,350.6 332.5,350.1 333.6,350.1 C334.7,350.0 336.4,349.6 336.6,350.3 C336.8,351.0 335.2,352.7 334.4,353.4 C333.6,354.0 333.3,353.5 332.6,353.4 C332.0,353.3 331.8,352.9 331.2,352.9 C330.5,352.8 330.1,353.5 329.5,353.0 C329.0,352.5 328.2,350.7 328.5,350.2 Z'/><path d='M213.8,155.6 C214.8,156.5 213.8,157.9 213.0,159.0 C212.2,160.1 210.9,160.1 209.9,161.0 C208.9,162.0 208.9,164.0 207.9,163.6 C206.9,163.3 205.4,160.5 205.0,159.3 C204.6,158.1 205.5,158.3 206.1,157.8 C206.7,157.2 207.6,157.3 208.0,156.7 C208.4,156.1 206.9,154.9 208.0,154.6 C209.2,154.4 212.8,154.7 213.8,155.6 Z'/><path d='M203.7,165.7 C203.3,166.6 201.7,165.9 200.5,165.4 C199.3,165.0 199.1,163.7 197.8,163.5 C196.5,163.3 194.0,165.2 193.9,164.5 C193.7,163.8 195.8,160.8 196.8,159.9 C197.8,159.1 198.1,160.3 198.8,160.3 C199.6,160.3 200.0,159.8 200.7,159.9 C201.5,160.1 202.1,159.8 202.7,160.9 C203.3,162.1 204.2,164.8 203.7,165.7 Z'/><path d='M191.4,161.5 C190.3,161.5 190.4,159.3 190.2,157.9 C190.0,156.5 190.9,155.8 190.5,154.4 C190.1,152.9 187.5,151.1 188.2,150.6 C189.0,150.1 193.0,151.3 194.2,151.9 C195.4,152.6 194.1,153.2 194.3,154.0 C194.4,154.9 194.6,155.2 194.8,156.0 C195.1,156.8 196.1,157.1 195.4,158.2 C194.7,159.3 192.4,161.6 191.4,161.5 Z'/><path d='M192.4,144.1 C192.4,143.2 194.6,143.7 195.9,143.1 C197.2,142.6 197.6,141.7 198.9,141.4 C200.2,141.0 201.8,140.5 202.4,141.3 C203.0,142.2 202.4,144.7 201.9,145.7 C201.4,146.6 200.5,145.7 199.7,146.1 C199.0,146.5 198.9,147.2 198.1,147.6 C197.3,147.9 196.9,148.5 195.8,147.8 C194.6,147.1 192.4,145.1 192.4,144.1 Z'/><path d='M204.5,142.9 C205.3,142.4 206.5,143.1 207.6,143.6 C208.8,144.1 209.4,144.6 210.2,145.6 C211.0,146.5 212.1,147.6 211.6,148.5 C211.1,149.5 208.7,150.3 207.8,150.3 C206.9,150.3 207.5,148.9 206.9,148.4 C206.3,147.9 205.4,148.4 204.7,148.0 C204.0,147.5 203.5,147.2 203.4,146.2 C203.4,145.2 203.7,143.4 204.5,142.9 Z'/><path d='M165.4,92.7 C165.3,93.7 164.3,94.2 163.4,94.4 C162.5,94.6 161.8,94.0 160.9,93.6 C160.1,93.2 159.1,93.1 159.0,92.3 C158.9,91.4 159.8,89.8 160.3,89.3 C160.7,88.8 160.9,89.6 161.4,89.7 C161.9,89.7 162.1,89.7 162.6,89.7 C163.1,89.6 163.3,88.9 163.9,89.5 C164.4,90.1 165.5,91.7 165.4,92.7 Z'/><path d='M157.0,90.5 C156.1,90.7 154.8,90.3 154.4,89.6 C154.0,88.9 155.1,87.9 155.1,86.9 C155.1,86.0 154.0,85.3 154.5,84.9 C155.0,84.5 156.9,84.8 157.5,85.1 C158.1,85.4 157.4,85.9 157.6,86.4 C157.8,86.8 158.4,86.8 158.6,87.3 C158.8,87.7 159.1,87.9 158.8,88.6 C158.5,89.3 157.8,90.3 157.0,90.5 Z'/><path d='M155.3,80.5 C154.9,79.6 155.6,79.0 156.2,78.3 C156.8,77.6 157.3,77.3 158.2,77.0 C159.1,76.8 160.0,76.2 160.6,77.0 C161.2,77.9 161.3,80.3 161.3,81.2 C161.2,82.2 160.6,81.4 160.2,81.6 C159.9,81.7 159.7,81.9 159.3,82.2 C159.0,82.4 159.2,83.1 158.4,82.8 C157.6,82.5 155.7,81.4 155.3,80.5 Z'/><path d='M163.8,77.4 C164.5,76.7 165.3,77.6 166.2,78.1 C167.0,78.6 167.3,79.0 168.1,79.7 C168.8,80.4 170.5,80.7 170.1,81.4 C169.7,82.2 167.1,83.2 166.1,83.4 C165.1,83.6 165.6,82.7 165.2,82.4 C164.7,82.1 164.4,82.1 164.0,81.9 C163.5,81.7 162.9,82.5 162.8,81.6 C162.8,80.7 163.2,78.1 163.8,77.4 Z'/><path d='M170.2,84.9 C171.0,85.4 169.9,86.3 169.8,87.2 C169.6,88.2 169.9,89.0 169.3,89.6 C168.7,90.3 167.6,90.7 166.8,90.5 C165.9,90.3 165.3,89.2 165.0,88.6 C164.8,88.0 165.3,87.9 165.5,87.4 C165.7,87.0 166.0,86.8 166.1,86.4 C166.2,85.9 165.2,85.4 166.1,85.2 C166.9,84.9 169.5,84.5 170.2,84.9 Z'/><path d='M210.3,304.7 C209.6,304.2 209.1,302.9 209.2,301.9 C209.3,300.8 210.0,300.3 210.8,299.5 C211.6,298.8 212.2,297.8 213.0,298.0 C213.9,298.1 214.9,299.6 215.1,300.4 C215.3,301.1 214.1,300.9 213.9,301.5 C213.7,302.1 214.4,302.7 214.2,303.3 C214.0,304.0 213.5,304.5 212.8,304.7 C212.0,305.0 211.1,305.3 210.3,304.7 Z'/><path d='M215.3,295.8 C215.5,294.8 216.9,294.5 217.9,294.6 C218.9,294.8 219.2,296.4 220.4,296.5 C221.5,296.6 223.4,294.6 223.6,295.3 C223.8,295.9 222.0,299.1 221.3,299.8 C220.5,300.6 220.5,299.2 219.9,299.0 C219.3,298.8 218.9,298.8 218.3,299.0 C217.7,299.1 217.5,300.4 216.9,299.8 C216.3,299.2 215.1,296.9 215.3,295.8 Z'/><path d='M227.5,301.0 C228.5,301.1 228.6,302.3 228.6,303.3 C228.6,304.3 227.6,304.7 227.6,305.8 C227.5,306.8 229.3,308.4 228.5,308.6 C227.7,308.7 224.3,307.2 223.5,306.6 C222.7,305.9 224.4,305.9 224.5,305.4 C224.6,304.9 224.2,304.5 224.0,304.0 C223.8,303.4 222.9,303.3 223.6,302.7 C224.3,302.1 226.5,300.8 227.5,301.0 Z'/><path d='M226.0,311.7 C225.9,312.4 223.9,312.0 222.7,312.2 C221.6,312.4 221.2,312.5 220.2,312.8 C219.1,313.1 217.9,314.1 217.4,313.7 C217.0,313.2 217.4,311.4 217.9,310.7 C218.3,310.1 219.1,310.6 219.8,310.4 C220.5,310.1 220.7,309.9 221.4,309.6 C222.1,309.3 222.2,308.5 223.1,308.9 C224.0,309.3 226.1,311.0 226.0,311.7 Z'/><path d='M216.2,313.5 C215.5,314.0 214.7,313.2 213.8,312.8 C212.9,312.4 212.5,312.1 211.8,311.4 C211.1,310.7 209.9,310.2 210.3,309.4 C210.7,308.6 212.8,307.7 213.7,307.5 C214.6,307.3 214.5,308.0 214.9,308.5 C215.2,309.0 215.2,309.5 215.6,309.9 C216.1,310.3 217.0,309.7 217.1,310.5 C217.2,311.2 216.8,313.0 216.2,313.5 Z'/><path d='M16.8,264.1 C15.4,264.1 12.5,263.3 11.9,261.8 C11.3,260.4 13.9,258.8 14.0,256.8 C14.0,254.8 11.6,252.3 12.2,251.7 C12.9,251.2 16.3,253.0 17.3,254.0 C18.2,255.0 17.0,255.8 17.1,256.9 C17.1,258.0 17.0,258.6 17.4,259.7 C17.8,260.7 19.0,261.2 18.9,262.1 C18.8,263.0 18.2,264.2 16.8,264.1 Z'/><path d='M19.3,247.6 C19.7,246.7 21.2,246.4 22.6,245.9 C24.1,245.4 25.2,244.8 26.6,245.2 C28.0,245.6 29.5,246.7 29.6,248.0 C29.8,249.3 28.1,251.4 27.3,251.8 C26.5,252.1 26.4,250.0 25.6,249.7 C24.8,249.5 24.2,250.2 23.2,250.4 C22.2,250.5 21.6,251.1 20.8,250.5 C20.0,250.0 19.0,248.6 19.3,247.6 Z'/><path d='M33.5,249.9 C34.7,250.1 35.4,251.9 35.7,253.3 C36.0,254.8 34.9,255.7 35.0,257.4 C35.0,259.0 36.9,261.2 36.0,261.6 C35.2,262.1 31.7,260.5 30.6,259.6 C29.5,258.7 30.5,258.2 30.6,257.3 C30.7,256.3 31.2,255.8 31.1,254.8 C31.0,253.9 29.6,253.5 30.1,252.5 C30.6,251.5 32.4,249.8 33.5,249.9 Z'/><path d='M32.7,267.1 C32.7,268.2 30.0,267.3 28.3,267.9 C26.7,268.5 26.1,270.2 24.6,270.1 C23.1,270.0 21.4,268.7 20.9,267.4 C20.4,266.2 21.3,264.5 22.0,263.8 C22.7,263.2 23.5,264.4 24.3,264.2 C25.2,263.9 25.4,263.1 26.3,262.7 C27.1,262.4 27.4,261.5 28.7,262.4 C29.9,263.3 32.8,266.0 32.7,267.1 Z'/><path d='M69.3,342.1 C68.3,341.8 70.8,339.7 71.2,338.4 C71.6,337.0 71.4,336.5 71.5,335.2 C71.6,333.8 70.8,331.6 71.8,331.6 C72.8,331.5 75.8,333.8 76.6,334.8 C77.5,335.9 76.0,335.9 76.0,336.6 C75.9,337.3 76.5,337.7 76.5,338.4 C76.4,339.2 77.2,339.5 75.8,340.3 C74.4,341.0 70.2,342.5 69.3,342.1 Z'/><path d='M75.9,328.3 C76.0,327.2 77.8,327.5 79.1,327.5 C80.3,327.4 80.9,328.3 82.2,328.0 C83.6,327.7 85.6,325.0 85.9,325.9 C86.2,326.8 84.6,331.3 83.8,332.7 C83.0,334.1 82.7,332.9 82.1,333.0 C81.5,333.1 81.3,333.2 80.6,333.2 C79.9,333.2 79.6,334.0 78.7,333.0 C77.8,332.1 75.8,329.5 75.9,328.3 Z'/><path d='M90.5,332.0 C91.8,331.8 92.0,333.1 92.7,334.0 C93.3,335.0 93.5,335.7 93.7,336.8 C94.0,338.0 95.0,339.3 93.9,339.8 C92.8,340.3 89.5,339.6 88.3,339.2 C87.1,338.8 88.2,338.2 87.9,337.7 C87.7,337.1 87.3,336.9 87.0,336.4 C86.6,335.9 85.5,336.2 86.2,335.3 C86.9,334.5 89.2,332.3 90.5,332.0 Z'/><path d='M94.0,343.4 C94.6,344.3 91.5,344.4 90.3,345.3 C89.2,346.2 89.1,346.7 88.1,347.6 C87.1,348.6 86.4,350.8 85.5,350.1 C84.6,349.4 83.8,345.6 83.7,344.2 C83.6,342.8 84.4,343.4 85.0,343.1 C85.6,342.7 86.3,342.9 86.8,342.4 C87.2,341.9 85.9,340.5 87.3,340.7 C88.8,340.9 93.4,342.4 94.0,343.4 Z'/><path d='M78.6,349.6 C77.6,350.6 76.1,349.9 75.2,349.0 C74.4,348.2 75.3,346.2 74.3,345.3 C73.3,344.3 69.6,345.1 70.1,344.2 C70.7,343.3 75.8,341.1 77.2,340.8 C78.7,340.5 77.1,342.0 77.4,342.5 C77.7,343.1 78.1,343.3 78.7,343.5 C79.3,343.7 80.4,342.4 80.4,343.6 C80.4,344.8 79.7,348.5 78.6,349.6 Z'/><path d='M204.0,220.6 C203.2,220.5 202.1,219.1 201.5,217.9 C201.0,216.6 201.3,215.7 201.1,214.3 C201.0,212.8 200.3,211.0 200.9,210.5 C201.4,210.0 203.2,211.0 203.8,211.8 C204.3,212.5 203.6,213.2 203.7,214.2 C203.7,215.1 203.5,215.8 204.0,216.6 C204.4,217.4 205.8,217.3 205.9,218.1 C205.9,218.9 204.9,220.6 204.0,220.6 Z'/><path d='M207.9,206.3 C208.6,205.7 210.1,205.6 211.7,205.8 C213.2,206.0 214.4,206.3 215.6,207.3 C216.7,208.4 217.7,210.2 217.4,211.2 C217.0,212.1 214.9,212.5 214.0,212.3 C213.1,212.1 213.5,210.7 212.8,210.0 C212.2,209.4 211.4,209.3 210.5,209.2 C209.6,209.0 208.8,209.9 208.3,209.3 C207.7,208.7 207.2,207.0 207.9,206.3 Z'/><path d='M217.0,213.8 C217.5,214.7 217.6,216.8 216.9,218.5 C216.2,220.2 215.1,221.5 213.4,222.1 C211.8,222.7 209.6,222.0 208.7,221.4 C207.7,220.8 208.2,219.5 208.7,218.9 C209.3,218.3 210.5,218.9 211.4,218.4 C212.3,217.9 212.6,217.3 213.2,216.4 C213.8,215.5 213.5,214.4 214.3,213.8 C215.0,213.3 216.5,212.8 217.0,213.8 Z'/><path d='M372.4,337.7 C371.6,338.3 370.0,337.9 368.6,337.5 C367.1,337.1 365.8,336.8 365.1,335.7 C364.3,334.5 364.4,332.5 364.7,331.6 C365.0,330.7 365.9,330.7 366.5,330.9 C367.1,331.2 367.2,332.2 367.8,332.9 C368.5,333.6 368.8,334.2 369.7,334.5 C370.6,334.9 371.7,334.2 372.2,334.9 C372.7,335.5 373.1,337.2 372.4,337.7 Z'/><path d='M363.1,327.0 C362.7,326.1 363.6,323.9 364.8,323.0 C366.0,322.0 367.6,322.8 369.2,322.2 C370.8,321.6 372.3,319.6 373.0,319.8 C373.6,320.0 373.1,322.5 372.5,323.3 C371.9,324.2 370.9,323.6 369.9,324.0 C368.9,324.4 368.3,324.6 367.6,325.3 C366.9,326.1 367.4,327.5 366.5,327.8 C365.6,328.2 363.4,328.0 363.1,327.0 Z'/><path d='M378.3,322.0 C379.0,322.3 378.3,325.0 378.8,326.8 C379.3,328.6 380.8,329.4 380.7,331.0 C380.6,332.6 379.3,334.7 378.3,334.9 C377.3,335.2 375.7,333.3 375.5,332.4 C375.4,331.5 377.1,331.3 377.4,330.3 C377.8,329.2 377.6,328.4 377.2,327.3 C376.8,326.3 375.3,326.1 375.5,325.0 C375.7,324.0 377.6,321.6 378.3,322.0 Z'/><path d='M76.2,113.2 C77.4,112.2 80.6,111.0 82.8,111.7 C85.0,112.5 86.0,114.7 87.2,116.9 C88.3,119.2 89.1,121.5 88.5,122.8 C87.8,124.2 85.0,124.2 83.8,123.7 C82.7,123.3 83.6,121.4 82.8,120.4 C82.0,119.4 81.1,119.4 79.9,118.7 C78.6,118.0 77.2,118.0 76.5,116.9 C75.7,115.8 74.9,114.3 76.2,113.2 Z'/><path d='M88.7,131.0 C89.0,132.5 87.3,134.7 85.4,136.5 C83.6,138.3 81.8,140.0 79.4,139.9 C77.0,139.8 74.4,137.5 73.5,136.0 C72.6,134.4 73.8,132.9 74.8,132.2 C75.7,131.5 77.0,132.8 78.3,132.5 C79.6,132.2 80.1,131.5 81.3,130.7 C82.5,130.0 82.8,128.6 84.3,128.7 C85.8,128.7 88.5,129.4 88.7,131.0 Z'/><path d='M67.1,131.9 C65.6,131.4 64.4,128.6 64.1,126.2 C63.8,123.8 64.4,122.2 65.4,119.8 C66.5,117.5 67.9,114.7 69.2,114.5 C70.6,114.2 72.0,117.0 72.3,118.6 C72.7,120.2 71.6,120.9 71.0,122.3 C70.3,123.7 69.1,124.4 69.2,125.8 C69.2,127.1 71.7,127.8 71.3,129.0 C70.9,130.3 68.5,132.5 67.1,131.9 Z'/><path d='M332.9,300.5 C333.8,300.1 335.3,300.0 336.1,300.6 C336.9,301.2 336.7,302.3 336.9,303.3 C337.1,304.4 337.4,305.3 336.9,305.9 C336.3,306.5 334.9,306.5 334.3,306.2 C333.7,306.0 334.3,305.2 334.0,304.7 C333.7,304.2 333.2,304.1 332.8,303.7 C332.3,303.2 331.6,303.3 331.7,302.6 C331.7,302.0 332.0,300.9 332.9,300.5 Z'/><path d='M336.5,306.0 C337.1,306.4 336.7,307.4 336.6,308.4 C336.4,309.3 336.3,309.8 335.8,310.6 C335.4,311.5 335.1,312.6 334.5,312.7 C333.9,312.7 332.9,311.4 332.8,310.8 C332.7,310.2 333.6,310.1 333.9,309.6 C334.3,309.0 334.8,308.6 334.8,308.0 C334.8,307.4 333.4,306.7 333.8,306.3 C334.1,305.9 336.0,305.6 336.5,306.0 Z'/><path d='M329.8,316.1 C329.4,316.8 328.5,315.4 327.6,315.1 C326.7,314.8 326.2,315.1 325.5,314.7 C324.7,314.3 323.8,313.9 324.0,313.0 C324.1,312.2 325.6,310.7 326.2,310.5 C326.8,310.2 326.6,311.2 326.9,311.6 C327.3,312.0 327.6,312.6 328.1,312.6 C328.6,312.5 329.2,310.8 329.5,311.5 C329.8,312.2 330.2,315.4 329.8,316.1 Z'/><path d='M322.2,310.6 C321.5,310.5 321.1,309.7 320.7,308.9 C320.3,308.1 320.1,307.6 320.1,306.6 C320.0,305.7 319.8,304.6 320.5,304.3 C321.3,304.1 323.1,304.8 323.9,305.3 C324.6,305.8 324.3,306.2 324.3,306.7 C324.2,307.3 323.8,307.6 323.8,308.2 C323.8,308.7 324.5,309.1 324.2,309.6 C323.9,310.1 322.9,310.8 322.2,310.6 Z'/><path d='M323.0,302.6 C322.8,301.9 323.2,301.0 323.8,300.4 C324.4,299.8 325.1,299.7 325.9,299.5 C326.8,299.2 327.6,298.8 328.1,299.2 C328.6,299.6 328.6,300.9 328.4,301.4 C328.2,302.0 327.6,301.8 327.1,302.0 C326.5,302.3 326.1,302.3 325.7,302.7 C325.3,303.1 325.6,304.0 325.1,304.0 C324.5,304.0 323.3,303.4 323.0,302.6 Z'/><path d='M139.7,347.1 C139.9,347.8 138.9,348.5 138.4,349.7 C138.0,350.9 138.1,352.0 137.3,353.0 C136.5,354.0 135.3,355.3 134.5,354.8 C133.6,354.3 133.0,351.6 132.9,350.5 C132.9,349.4 133.9,349.8 134.4,349.2 C135.0,348.6 134.9,348.3 135.5,347.7 C136.2,347.2 136.7,346.6 137.6,346.5 C138.4,346.3 139.6,346.5 139.7,347.1 Z'/><path d='M130.6,356.2 C130.0,356.8 129.1,354.5 127.9,354.0 C126.8,353.6 125.6,354.6 124.7,354.0 C123.9,353.3 123.4,351.9 123.7,350.8 C124.0,349.8 125.5,348.8 126.3,348.5 C127.1,348.2 127.2,349.0 127.7,349.4 C128.3,349.7 128.5,349.8 129.1,350.2 C129.7,350.6 130.4,350.2 130.7,351.4 C131.0,352.6 131.1,355.7 130.6,356.2 Z'/><path d='M121.1,346.2 C120.2,345.7 119.8,344.3 119.9,343.0 C119.9,341.8 120.7,341.2 121.3,340.0 C121.8,338.8 121.8,337.1 122.7,337.0 C123.5,337.0 125.1,338.8 125.6,339.7 C126.1,340.7 125.3,341.0 125.0,341.8 C124.6,342.5 124.0,342.8 123.8,343.6 C123.6,344.3 124.5,345.2 123.9,345.7 C123.4,346.2 121.9,346.7 121.1,346.2 Z'/><path d='M123.9,336.6 C124.0,335.8 125.9,336.4 127.1,335.9 C128.2,335.4 128.5,334.3 129.6,334.1 C130.8,333.8 132.2,333.6 132.7,334.6 C133.2,335.5 132.4,338.1 131.9,338.9 C131.4,339.6 130.8,338.2 130.1,338.2 C129.4,338.2 129.0,338.6 128.4,338.9 C127.7,339.3 127.7,340.4 126.8,339.9 C125.9,339.4 123.9,337.4 123.9,336.6 Z'/><path d='M138.6,335.7 C139.6,335.4 139.9,337.2 140.3,338.4 C140.8,339.5 140.4,340.3 141.0,341.5 C141.5,342.6 143.6,343.8 143.0,344.3 C142.3,344.9 139.0,344.8 137.8,344.4 C136.6,344.1 137.5,343.2 137.1,342.6 C136.7,342.0 136.2,341.9 135.8,341.3 C135.4,340.8 134.5,340.9 135.0,339.7 C135.6,338.6 137.5,335.9 138.6,335.7 Z'/><path d='M366.6,131.4 C367.7,130.9 369.5,132.9 371.4,134.0 C373.3,135.1 374.8,135.3 376.2,136.9 C377.5,138.6 378.9,141.0 378.0,142.3 C377.1,143.6 373.1,143.7 371.7,143.4 C370.3,143.0 371.4,141.6 370.9,140.5 C370.3,139.4 370.1,138.5 369.1,137.7 C368.1,136.9 366.4,137.9 365.9,136.6 C365.4,135.4 365.5,131.9 366.6,131.4 Z'/><path d='M374.3,154.0 C374.1,155.2 370.9,154.8 368.8,155.4 C366.7,156.0 365.9,156.9 363.8,157.1 C361.6,157.3 358.6,157.6 358.1,156.4 C357.5,155.2 359.9,152.1 361.1,151.1 C362.3,150.1 363.0,151.5 364.3,151.6 C365.5,151.8 366.4,152.3 367.5,151.9 C368.7,151.5 368.5,149.2 369.9,149.6 C371.3,150.0 374.5,152.8 374.3,154.0 Z'/><path d='M353.4,148.8 C352.6,148.1 354.1,145.6 354.2,143.3 C354.4,141.1 353.2,139.1 354.3,137.5 C355.3,135.9 358.3,135.3 359.7,135.3 C361.0,135.4 361.3,136.7 361.0,137.6 C360.6,138.5 358.8,138.8 358.1,140.1 C357.4,141.3 357.5,142.3 357.5,143.7 C357.6,145.1 359.1,146.0 358.2,147.0 C357.4,148.1 354.2,149.6 353.4,148.8 Z'/><path d='M228.1,77.5 C228.8,78.9 226.2,81.3 224.4,83.1 C222.6,85.0 221.6,86.1 219.4,86.9 C217.1,87.7 214.3,88.1 213.2,87.1 C212.1,86.0 213.2,82.6 214.0,81.6 C214.8,80.5 216.1,82.2 217.3,81.8 C218.5,81.5 219.3,80.8 220.0,79.7 C220.7,78.6 219.2,76.9 220.8,76.5 C222.4,76.0 227.4,76.2 228.1,77.5 Z'/><path d='M205.7,81.1 C204.7,80.6 204.4,78.7 203.9,76.9 C203.3,75.0 202.3,73.4 202.9,71.8 C203.6,70.1 205.8,68.8 207.1,68.6 C208.3,68.3 208.9,69.5 209.3,70.6 C209.6,71.6 209.3,72.5 208.9,73.7 C208.6,74.9 207.7,75.3 207.7,76.4 C207.7,77.5 209.3,78.3 208.9,79.2 C208.5,80.1 206.7,81.5 205.7,81.1 Z'/><path d='M212.3,63.4 C213.2,62.3 216.0,62.9 217.9,63.6 C219.9,64.4 220.7,65.6 222.0,67.2 C223.3,68.7 224.6,70.3 224.4,71.5 C224.2,72.6 222.0,73.1 221.0,72.9 C219.9,72.8 220.0,71.3 219.0,70.7 C218.1,70.1 217.4,70.1 216.3,69.8 C215.2,69.6 214.4,70.9 213.6,69.6 C212.8,68.3 211.5,64.6 212.3,63.4 Z'/><path d='M4.5,142.4 C4.0,142.1 5.4,141.2 5.5,140.4 C5.6,139.5 4.9,139.0 5.0,138.3 C5.2,137.5 5.4,136.5 6.1,136.5 C6.9,136.6 8.4,137.9 8.7,138.5 C9.1,139.0 8.3,139.0 8.0,139.4 C7.8,139.8 7.6,140.1 7.6,140.5 C7.7,141.0 8.9,141.3 8.2,141.7 C7.6,142.0 5.1,142.6 4.5,142.4 Z'/><path d='M7.5,136.4 C7.4,135.8 8.3,135.9 8.8,135.3 C9.3,134.8 9.4,133.7 10.0,133.6 C10.7,133.4 11.6,134.0 12.0,134.7 C12.4,135.3 12.2,136.5 12.0,137.0 C11.8,137.5 11.5,137.1 11.0,137.1 C10.6,137.2 10.2,136.9 9.8,137.1 C9.4,137.3 9.7,138.3 9.3,138.1 C8.8,138.0 7.6,137.0 7.5,136.4 Z'/><path d='M14.6,134.5 C15.1,134.3 15.4,135.6 16.0,136.3 C16.5,136.9 16.8,137.1 17.2,137.8 C17.7,138.4 18.5,139.1 18.3,139.5 C18.0,140.0 16.5,140.2 15.9,140.1 C15.4,139.9 15.6,139.4 15.4,138.9 C15.2,138.4 15.2,137.9 14.8,137.6 C14.4,137.3 13.5,138.0 13.4,137.4 C13.4,136.8 14.0,134.7 14.6,134.5 Z'/><path d='M18.2,142.8 C18.6,143.4 18.6,144.5 18.2,145.2 C17.7,145.9 16.7,145.6 16.0,146.2 C15.2,146.8 15.0,148.5 14.5,148.3 C14.0,148.1 13.5,146.0 13.4,145.1 C13.4,144.3 14.0,144.4 14.3,144.0 C14.7,143.6 14.8,143.5 15.2,143.1 C15.5,142.8 15.5,142.2 16.1,142.1 C16.7,142.1 17.8,142.1 18.2,142.8 Z'/><path d='M13.1,147.0 C12.7,147.7 11.8,148.1 10.9,148.3 C9.9,148.5 9.1,148.4 8.4,147.9 C7.6,147.4 7.0,146.5 7.1,145.7 C7.2,144.9 8.3,144.1 8.9,143.9 C9.5,143.7 9.5,144.6 10.0,144.7 C10.6,144.9 10.9,144.6 11.4,144.7 C12.0,144.7 12.4,144.5 12.7,145.0 C13.0,145.5 13.4,146.4 13.1,147.0 Z'/><path d='M405.8,144.6 C405.0,144.6 404.8,143.6 404.6,142.8 C404.3,141.9 404.7,141.4 404.7,140.5 C404.7,139.6 404.0,138.4 404.6,138.1 C405.2,137.9 407.1,138.8 407.8,139.3 C408.4,139.8 407.8,140.1 407.7,140.7 C407.7,141.2 407.4,141.6 407.6,142.0 C407.8,142.5 409.1,142.4 408.7,142.9 C408.4,143.4 406.7,144.7 405.8,144.6 Z'/><path d='M405.9,135.0 C405.8,134.3 407.6,134.5 408.6,134.3 C409.6,134.2 410.1,134.3 411.0,134.3 C411.9,134.3 412.8,133.8 413.1,134.4 C413.5,134.9 413.1,136.6 412.7,137.0 C412.3,137.5 411.9,136.6 411.3,136.6 C410.8,136.5 410.2,136.3 409.8,136.7 C409.4,137.0 410.0,138.6 409.3,138.3 C408.5,137.9 406.0,135.8 405.9,135.0 Z'/><path d='M416.6,133.6 C417.3,133.1 417.8,134.2 418.3,134.9 C418.7,135.6 418.7,136.2 418.9,137.1 C419.0,137.9 419.5,138.5 418.9,139.1 C418.4,139.6 416.6,140.0 416.0,139.9 C415.4,139.8 416.1,139.2 416.0,138.7 C415.9,138.2 415.8,137.9 415.5,137.6 C415.2,137.3 414.2,137.9 414.4,137.1 C414.6,136.3 415.8,134.0 416.6,133.6 Z'/><path d='M419.4,142.1 C419.8,142.6 419.2,143.6 418.7,144.3 C418.1,145.0 417.4,145.0 416.7,145.6 C416.0,146.2 415.8,147.5 415.3,147.3 C414.8,147.2 414.1,145.6 414.1,144.9 C414.1,144.3 414.8,144.5 415.2,144.1 C415.6,143.7 415.9,143.5 416.1,143.0 C416.4,142.5 416.0,141.8 416.7,141.6 C417.3,141.4 419.0,141.5 419.4,142.1 Z'/><path d='M412.3,148.9 C411.9,149.4 411.1,148.4 410.3,148.1 C409.5,147.9 409.0,148.2 408.2,147.8 C407.5,147.5 406.5,147.2 406.7,146.4 C406.9,145.6 408.7,144.1 409.3,143.8 C409.9,143.5 409.5,144.7 409.9,144.9 C410.2,145.2 410.6,144.9 411.1,145.1 C411.5,145.3 412.0,145.0 412.2,145.7 C412.5,146.5 412.7,148.4 412.3,148.9 Z'/><path d='M15.3,186.2 C14.8,185.3 17.0,183.7 17.8,181.9 C18.6,180.2 18.2,178.7 19.3,177.3 C20.5,176.0 22.5,174.6 23.6,175.0 C24.8,175.4 25.3,177.9 25.1,179.1 C25.0,180.4 23.7,180.3 22.8,181.1 C22.0,182.0 21.5,182.4 21.0,183.4 C20.5,184.4 21.5,185.7 20.3,186.3 C19.2,186.8 15.8,187.0 15.3,186.2 Z'/><path d='M29.5,174.7 C30.5,174.2 32.0,175.6 33.7,176.4 C35.5,177.2 37.2,177.2 38.2,178.7 C39.1,180.1 39.3,182.5 38.7,183.6 C38.1,184.8 36.4,184.8 35.3,184.5 C34.2,184.2 34.1,183.0 33.3,182.3 C32.4,181.6 32.0,181.5 31.1,180.9 C30.2,180.2 29.2,180.3 28.8,179.0 C28.5,177.8 28.5,175.2 29.5,174.7 Z'/><path d='M38.9,189.0 C39.6,190.1 39.1,191.9 38.4,193.3 C37.6,194.8 36.4,195.1 35.1,196.2 C33.7,197.2 32.5,199.0 31.4,198.5 C30.4,198.0 29.8,194.8 29.9,193.5 C30.0,192.3 31.4,192.9 32.1,192.3 C32.9,191.6 33.2,191.2 33.7,190.3 C34.3,189.5 33.9,188.4 34.9,188.1 C36.0,187.8 38.2,188.0 38.9,189.0 Z'/><path d='M27.7,198.5 C26.8,199.1 25.2,197.5 23.4,196.9 C21.7,196.3 20.2,196.6 18.9,195.4 C17.6,194.3 16.5,192.4 17.1,191.1 C17.7,189.7 20.9,188.8 22.1,188.9 C23.2,189.0 22.1,190.7 22.7,191.5 C23.3,192.3 24.1,192.4 25.1,192.9 C26.1,193.3 27.2,192.6 27.7,193.7 C28.2,194.8 28.5,197.9 27.7,198.5 Z'/><path d='M119.1,238.4 C119.2,236.8 122.2,235.9 124.7,234.8 C127.2,233.7 129.2,232.2 131.5,232.9 C133.8,233.7 135.8,236.7 136.2,238.4 C136.6,240.2 134.9,241.2 133.7,241.8 C132.5,242.4 131.5,241.4 130.2,241.3 C128.9,241.3 128.2,241.1 127.0,241.4 C125.8,241.8 125.6,243.6 124.0,243.0 C122.5,242.4 119.0,240.0 119.1,238.4 Z'/><path d='M141.9,241.1 C143.6,241.9 144.0,245.6 143.7,248.3 C143.5,251.1 142.4,252.7 140.7,255.0 C139.1,257.4 137.3,260.1 135.7,260.0 C134.1,259.9 133.0,256.2 132.7,254.4 C132.4,252.6 133.7,252.3 134.3,251.0 C135.0,249.7 135.7,249.4 136.0,248.0 C136.2,246.7 134.4,245.8 135.6,244.4 C136.8,243.0 140.3,240.3 141.9,241.1 Z'/><path d='M125.6,260.2 C124.2,260.5 122.7,257.8 120.5,256.0 C118.4,254.1 116.0,253.6 114.9,251.0 C113.8,248.5 113.4,244.3 114.9,243.2 C116.4,242.2 121.0,244.4 122.4,245.6 C123.9,246.9 121.9,248.0 122.2,249.4 C122.5,250.8 123.0,251.7 124.0,252.7 C125.0,253.7 126.9,253.1 127.2,254.6 C127.5,256.1 126.9,259.9 125.6,260.2 Z'/><path d='M58.6,77.2 C60.0,77.4 61.4,79.1 61.8,80.7 C62.1,82.3 60.4,83.3 60.2,85.2 C59.9,87.1 61.5,89.7 60.6,90.1 C59.7,90.5 56.5,88.3 55.7,87.2 C54.8,86.1 56.4,85.6 56.4,84.6 C56.3,83.5 55.8,83.0 55.5,82.1 C55.2,81.1 54.1,80.7 54.8,79.8 C55.4,78.8 57.2,77.0 58.6,77.2 Z'/><path d='M53.6,96.4 C53.0,97.5 50.3,95.7 48.3,95.3 C46.3,94.9 45.4,95.0 43.5,94.3 C41.7,93.6 38.8,93.1 38.9,91.8 C39.1,90.4 42.7,88.1 44.2,87.6 C45.6,87.0 45.4,88.5 46.3,89.0 C47.2,89.6 47.7,90.4 48.7,90.5 C49.7,90.7 50.4,88.6 51.4,89.8 C52.4,90.9 54.2,95.3 53.6,96.4 Z'/><path d='M38.1,90.2 C37.1,89.9 38.4,87.3 38.4,85.6 C38.4,83.9 38.3,83.4 38.2,81.7 C38.0,80.0 36.6,77.3 37.7,77.0 C38.7,76.7 42.5,79.2 43.5,80.2 C44.6,81.3 43.1,81.6 43.0,82.4 C42.9,83.3 43.0,83.7 43.1,84.6 C43.2,85.5 44.5,85.8 43.5,86.9 C42.5,88.0 39.2,90.4 38.1,90.2 Z'/><path d='M42.5,73.6 C42.6,72.0 44.6,70.8 46.4,70.2 C48.2,69.7 49.8,69.9 51.6,70.7 C53.3,71.6 54.7,73.1 55.1,74.4 C55.5,75.6 54.4,76.6 53.5,76.9 C52.6,77.1 51.8,75.6 50.7,75.7 C49.6,75.8 49.0,76.8 48.0,77.3 C47.0,77.8 46.8,78.9 45.7,78.2 C44.6,77.4 42.3,75.2 42.5,73.6 Z'/><path d='M210.7,16.2 C212.0,15.5 213.9,15.8 215.6,16.6 C217.3,17.3 218.5,18.3 219.1,19.9 C219.7,21.6 220.0,23.8 218.7,24.9 C217.3,26.0 213.9,25.9 212.5,25.6 C211.1,25.3 212.2,24.3 211.7,23.5 C211.2,22.8 210.8,22.7 210.2,22.0 C209.6,21.3 208.7,21.3 208.8,20.2 C208.9,19.0 209.3,16.9 210.7,16.2 Z'/><path d='M219.7,29.5 C220.5,30.5 217.5,31.4 216.5,32.8 C215.4,34.1 215.4,35.1 214.3,36.3 C213.2,37.4 212.0,39.4 210.8,38.6 C209.6,37.7 208.4,33.6 208.2,32.0 C208.0,30.5 209.1,31.3 209.8,30.9 C210.5,30.5 211.2,30.5 211.7,29.9 C212.2,29.3 210.6,27.9 212.2,27.8 C213.8,27.7 218.8,28.5 219.7,29.5 Z'/><path d='M202.3,38.0 C201.0,39.0 199.0,38.5 197.6,37.7 C196.2,36.9 195.8,35.5 195.2,33.9 C194.6,32.3 193.9,30.8 194.6,29.7 C195.4,28.6 197.9,28.3 199.1,28.4 C200.3,28.4 199.9,29.5 200.6,30.1 C201.2,30.7 201.6,30.8 202.3,31.3 C203.0,31.8 203.9,31.3 203.9,32.6 C203.9,34.0 203.5,37.0 202.3,38.0 Z'/><path d='M191.5,22.9 C190.5,21.7 193.7,20.3 195.2,19.0 C196.7,17.7 197.6,17.7 199.0,16.3 C200.5,14.9 201.4,11.1 202.5,12.0 C203.6,12.9 204.7,19.0 204.6,20.8 C204.5,22.6 202.9,20.5 202.1,20.9 C201.4,21.3 201.2,22.1 200.8,22.9 C200.4,23.7 201.9,25.0 200.0,25.0 C198.2,25.0 192.5,24.1 191.5,22.9 Z'/><path d='M318.7,205.2 C319.1,204.2 320.8,202.8 322.4,202.7 C324.0,202.5 324.9,203.6 326.6,204.3 C328.2,205.0 330.3,205.4 330.4,206.3 C330.5,207.2 328.3,208.4 327.2,208.8 C326.1,209.1 325.9,208.2 325.1,207.8 C324.3,207.5 323.9,207.1 323.0,207.1 C322.1,207.1 321.5,208.1 320.6,207.7 C319.8,207.4 318.4,206.3 318.7,205.2 Z'/><path d='M331.8,210.6 C332.5,211.3 332.0,212.8 331.6,214.1 C331.3,215.5 331.1,216.6 330.0,217.3 C329.0,218.1 327.4,218.3 326.4,217.9 C325.5,217.5 325.2,215.9 325.2,215.2 C325.3,214.5 326.0,214.7 326.6,214.3 C327.2,213.9 327.9,213.7 328.2,213.0 C328.5,212.4 327.3,211.5 328.0,211.1 C328.7,210.6 331.0,210.0 331.8,210.6 Z'/><path d='M322.7,218.9 C321.9,219.4 320.5,218.7 319.0,218.0 C317.6,217.4 316.2,216.9 315.7,215.5 C315.1,214.2 315.5,212.2 316.1,211.4 C316.8,210.5 318.2,211.0 318.9,211.4 C319.6,211.9 319.1,212.8 319.5,213.6 C319.9,214.5 320.0,215.2 320.7,215.6 C321.4,216.1 322.7,215.1 323.1,215.7 C323.5,216.4 323.5,218.5 322.7,218.9 Z'/><path d='M176.4,249.6 C176.8,248.6 178.7,249.2 180.5,248.5 C182.3,247.8 183.5,246.0 185.3,246.1 C187.0,246.3 189.0,247.8 189.3,249.3 C189.5,250.7 187.6,252.8 186.5,253.4 C185.5,253.9 185.1,252.1 184.0,251.8 C182.9,251.4 182.1,251.3 181.0,251.6 C179.9,252.0 179.4,253.8 178.5,253.4 C177.6,253.0 176.0,250.6 176.4,249.6 Z'/><path d='M193.1,252.3 C194.1,252.6 193.6,254.9 193.8,256.5 C193.9,258.1 193.9,258.7 193.9,260.3 C193.9,261.8 194.8,263.7 193.9,264.2 C192.9,264.6 190.2,263.3 189.2,262.5 C188.3,261.7 188.8,261.1 189.0,260.1 C189.1,259.2 189.9,258.6 189.9,257.6 C189.9,256.6 188.3,256.3 189.0,255.2 C189.6,254.1 192.1,252.1 193.1,252.3 Z'/><path d='M189.5,270.2 C189.3,271.4 187.5,272.0 186.0,272.7 C184.4,273.4 183.2,274.0 181.6,273.6 C179.9,273.3 178.3,272.2 177.8,270.9 C177.4,269.6 178.5,267.9 179.3,267.3 C180.1,266.6 180.8,267.9 181.8,267.8 C182.8,267.7 183.1,266.8 184.1,266.6 C185.2,266.3 185.9,265.9 187.0,266.7 C188.1,267.4 189.7,269.0 189.5,270.2 Z'/><path d='M173.2,268.8 C171.8,268.7 170.1,266.9 169.5,265.1 C169.0,263.3 170.3,261.8 170.5,259.8 C170.8,257.8 169.9,255.7 170.8,255.1 C171.7,254.5 174.2,255.9 175.0,256.9 C175.9,257.8 175.0,258.7 174.9,259.9 C174.9,261.1 174.7,261.7 175.0,262.9 C175.3,264.0 176.9,264.3 176.5,265.5 C176.2,266.7 174.6,268.9 173.2,268.8 Z'/><path d='M129.3,51.5 C129.3,52.6 125.9,50.2 124.1,50.7 C122.4,51.1 122.3,53.2 120.7,53.7 C119.1,54.3 116.8,54.9 116.3,53.4 C115.9,51.9 117.5,47.4 118.3,46.1 C119.1,44.8 119.6,46.9 120.4,46.8 C121.2,46.8 121.6,46.3 122.4,46.0 C123.2,45.6 122.9,44.0 124.3,45.1 C125.7,46.2 129.4,50.4 129.3,51.5 Z'/><path d='M110.8,48.7 C109.5,49.0 109.5,47.0 109.0,45.8 C108.4,44.5 108.7,43.9 108.0,42.6 C107.2,41.3 104.3,39.8 105.4,39.2 C106.4,38.6 111.5,39.1 113.1,39.5 C114.7,39.9 113.0,40.7 113.4,41.3 C113.7,41.9 114.5,42.0 114.9,42.6 C115.3,43.1 116.3,42.9 115.5,44.1 C114.6,45.4 112.0,48.3 110.8,48.7 Z'/><path d='M106.7,35.5 C105.8,34.4 108.4,33.5 109.4,32.0 C110.5,30.6 110.5,29.0 111.9,28.3 C113.3,27.6 115.4,27.5 116.6,28.4 C117.8,29.4 117.9,31.5 117.9,32.9 C118.0,34.2 117.2,34.4 116.7,35.1 C116.1,35.7 115.8,35.7 115.2,36.2 C114.6,36.8 115.6,37.9 113.8,37.8 C112.1,37.6 107.6,36.7 106.7,35.5 Z'/><path d='M117.6,26.6 C118.2,24.9 120.2,25.5 122.0,25.6 C123.7,25.7 124.7,26.2 126.3,26.9 C128.0,27.6 130.8,27.5 130.4,29.2 C130.0,30.8 126.0,34.2 124.5,35.2 C123.0,36.1 123.6,34.2 122.9,33.9 C122.2,33.6 121.7,33.5 120.9,33.5 C120.1,33.5 119.6,35.4 119.0,34.0 C118.3,32.7 117.0,28.3 117.6,26.6 Z'/><path d='M133.6,34.5 C135.1,34.9 134.0,37.3 133.9,39.0 C133.8,40.7 133.3,41.4 133.0,43.1 C132.7,44.9 134.1,47.7 132.6,47.7 C131.0,47.7 126.4,44.3 125.2,43.0 C124.0,41.8 126.5,42.2 126.7,41.5 C126.9,40.8 126.2,40.3 126.2,39.4 C126.2,38.6 125.2,38.2 126.7,37.2 C128.2,36.2 132.2,34.2 133.6,34.5 Z'/><path d='M322.4,237.4 C323.4,236.7 326.3,238.5 328.2,239.6 C330.2,240.8 330.5,241.7 332.2,243.3 C333.8,244.9 336.8,246.6 336.5,247.7 C336.2,248.7 332.1,249.0 330.7,248.6 C329.2,248.3 329.9,246.8 329.1,245.8 C328.3,244.9 327.9,244.1 326.7,243.6 C325.6,243.2 324.3,244.8 323.5,243.5 C322.6,242.3 321.5,238.2 322.4,237.4 Z'/><path d='M336.5,251.6 C337.1,252.6 335.0,254.2 334.0,256.0 C332.9,257.9 332.8,259.6 331.1,260.7 C329.5,261.8 327.0,262.4 325.8,261.4 C324.6,260.4 324.8,257.0 325.2,255.7 C325.5,254.4 326.9,255.5 327.7,255.0 C328.6,254.5 328.8,253.8 329.4,253.0 C330.0,252.1 329.3,250.9 330.7,250.6 C332.1,250.3 335.8,250.5 336.5,251.6 Z'/><path d='M316.2,256.3 C315.1,256.0 315.4,253.8 314.6,251.9 C313.9,250.0 312.1,248.8 312.3,246.9 C312.5,245.1 314.1,242.8 315.6,242.7 C317.1,242.5 319.3,244.9 320.0,246.1 C320.6,247.2 319.0,247.3 318.7,248.3 C318.3,249.3 317.9,250.1 318.2,251.1 C318.4,252.1 320.3,252.2 319.9,253.3 C319.5,254.3 317.2,256.6 316.2,256.3 Z'/><path d='M254.2,140.6 C254.3,141.4 252.7,142.2 251.5,143.0 C250.3,143.8 249.5,144.5 248.2,144.6 C246.9,144.6 245.4,144.0 245.0,143.2 C244.5,142.4 245.4,140.9 245.9,140.5 C246.5,140.1 247.0,141.3 247.8,141.3 C248.5,141.3 249.0,140.9 249.6,140.4 C250.3,140.0 250.2,138.9 251.1,139.0 C252.1,139.0 254.2,139.8 254.2,140.6 Z'/><path d='M239.6,139.5 C239.0,139.0 240.4,137.1 240.9,135.8 C241.3,134.4 241.3,134.0 242.0,132.7 C242.6,131.4 243.4,129.3 244.1,129.3 C244.8,129.2 245.5,131.6 245.4,132.5 C245.3,133.5 244.2,133.3 243.7,134.1 C243.2,134.8 243.0,135.3 243.0,136.1 C242.9,137.0 244.2,137.5 243.5,138.1 C242.9,138.8 240.1,140.0 239.6,139.5 Z'/><path d='M247.2,129.0 C247.9,128.4 249.2,129.4 250.4,130.0 C251.7,130.5 252.6,130.6 253.5,131.6 C254.3,132.6 255.1,134.0 254.6,134.9 C254.2,135.7 252.0,136.0 251.2,135.8 C250.4,135.6 251.0,134.6 250.6,134.0 C250.2,133.4 249.7,133.2 249.0,133.0 C248.3,132.7 247.6,133.5 247.2,132.7 C246.8,131.9 246.6,129.5 247.2,129.0 Z'/><path d='M270.9,224.3 C270.9,225.3 270.2,226.4 269.4,226.7 C268.6,226.9 267.8,225.6 266.8,225.6 C265.7,225.7 264.5,227.5 264.1,227.0 C263.8,226.6 264.7,224.1 265.3,223.2 C265.8,222.4 266.2,223.0 266.7,222.8 C267.3,222.7 267.5,222.7 268.0,222.5 C268.5,222.4 268.6,221.7 269.2,222.1 C269.8,222.4 270.9,223.4 270.9,224.3 Z'/><path d='M262.5,224.7 C261.7,225.1 260.9,224.4 260.2,223.8 C259.5,223.3 259.0,222.8 258.8,221.9 C258.7,221.0 258.8,220.0 259.5,219.4 C260.3,218.8 262.1,218.8 262.6,219.0 C263.1,219.2 262.1,220.0 262.3,220.4 C262.4,220.9 262.9,221.0 263.3,221.3 C263.8,221.6 264.6,221.2 264.4,221.8 C264.2,222.5 263.3,224.3 262.5,224.7 Z'/><path d='M260.2,216.2 C259.7,215.5 259.6,214.4 259.9,213.7 C260.2,213.0 261.0,212.9 261.8,212.5 C262.5,212.1 263.0,211.3 263.6,211.7 C264.2,212.0 264.6,213.4 264.7,214.2 C264.8,214.9 264.6,215.2 264.2,215.5 C263.8,215.8 263.2,215.5 262.8,215.8 C262.5,216.1 262.9,216.9 262.4,217.0 C261.9,217.0 260.7,216.8 260.2,216.2 Z'/><path d='M266.5,210.5 C267.0,209.9 268.1,210.4 268.8,210.8 C269.5,211.3 269.6,212.2 270.3,212.8 C270.9,213.4 272.1,213.2 272.1,213.7 C272.1,214.3 270.7,215.3 270.1,215.5 C269.4,215.7 269.4,215.1 269.0,214.8 C268.5,214.6 268.3,214.5 267.8,214.2 C267.4,214.0 266.8,214.5 266.6,213.7 C266.3,213.0 266.1,211.1 266.5,210.5 Z'/><path d='M274.0,217.3 C274.6,217.6 274.8,218.7 274.6,219.5 C274.4,220.3 273.3,220.4 273.0,221.3 C272.8,222.2 273.9,224.0 273.3,224.1 C272.7,224.1 270.5,222.1 270.0,221.4 C269.6,220.6 270.9,220.9 271.1,220.4 C271.2,220.0 270.9,219.6 270.9,219.0 C270.9,218.5 270.6,218.1 271.2,217.8 C271.8,217.4 273.3,217.0 274.0,217.3 Z'/><path d='M285.2,61.1 C284.1,61.4 282.3,59.9 280.7,58.6 C279.1,57.2 277.9,56.3 277.2,54.4 C276.6,52.4 276.7,49.7 277.5,48.8 C278.4,47.9 280.8,49.0 281.5,49.9 C282.2,50.9 280.5,52.3 281.0,53.4 C281.4,54.6 282.6,54.9 283.6,55.7 C284.7,56.5 285.9,56.2 286.2,57.3 C286.5,58.4 286.3,60.8 285.2,61.1 Z'/><path d='M282.7,42.8 C283.3,41.8 285.4,40.9 287.3,40.8 C289.3,40.6 290.6,41.1 292.4,42.0 C294.2,42.9 296.4,44.0 296.5,45.2 C296.6,46.4 294.1,47.7 292.8,47.9 C291.6,48.1 291.3,47.0 290.2,46.4 C289.1,45.9 288.6,45.3 287.4,45.2 C286.3,45.0 285.2,46.2 284.3,45.7 C283.3,45.3 282.1,43.8 282.7,42.8 Z'/><path d='M298.6,52.2 C299.3,53.3 298.9,55.6 298.1,57.5 C297.3,59.4 296.4,60.8 294.6,61.7 C292.9,62.5 290.4,62.4 289.2,61.8 C288.0,61.2 288.4,59.7 288.7,58.6 C289.1,57.5 290.1,57.2 290.9,56.4 C291.7,55.6 291.9,55.3 292.6,54.5 C293.3,53.6 293.3,52.5 294.5,52.0 C295.7,51.6 297.9,51.1 298.6,52.2 Z'/><path d='M243.4,373.9 C243.3,375.1 241.8,376.4 240.2,377.7 C238.6,378.9 237.2,380.3 235.2,380.4 C233.2,380.5 230.5,379.3 230.0,378.0 C229.5,376.7 231.6,374.5 232.7,373.7 C233.9,372.9 234.4,373.9 235.5,374.0 C236.7,374.0 237.4,374.5 238.4,374.0 C239.3,373.6 239.3,371.9 240.3,371.9 C241.3,371.9 243.4,372.8 243.4,373.9 Z'/><path d='M225.0,374.0 C223.7,373.4 223.8,370.5 224.2,368.5 C224.5,366.6 225.6,365.6 226.9,364.0 C228.1,362.4 229.1,360.7 230.3,360.8 C231.5,360.9 232.8,363.5 232.9,364.6 C232.9,365.7 231.2,365.4 230.8,366.2 C230.4,367.0 230.7,367.8 230.7,368.8 C230.7,369.8 231.9,370.3 230.8,371.3 C229.6,372.4 226.3,374.5 225.0,374.0 Z'/><path d='M236.5,359.7 C237.7,358.7 240.4,358.4 242.0,359.3 C243.5,360.3 243.5,362.3 244.3,364.2 C245.2,366.1 246.9,367.9 246.2,368.8 C245.5,369.8 242.1,369.4 240.9,368.9 C239.7,368.5 240.5,367.5 240.1,366.6 C239.7,365.7 239.6,364.9 238.8,364.3 C238.0,363.8 236.6,364.9 236.2,364.0 C235.7,363.1 235.4,360.6 236.5,359.7 Z'/><path d='M155.5,313.8 C156.2,314.6 156.8,316.5 156.4,318.0 C156.0,319.4 154.8,320.3 153.4,321.0 C152.0,321.8 150.3,322.3 149.5,321.9 C148.6,321.5 148.9,319.8 149.2,319.1 C149.6,318.4 150.6,318.7 151.3,318.2 C152.0,317.6 152.4,317.2 152.7,316.4 C153.0,315.6 152.4,314.7 153.0,314.2 C153.6,313.7 154.9,313.1 155.5,313.8 Z'/><path d='M145.6,321.2 C144.8,321.4 143.6,320.4 142.9,319.4 C142.2,318.4 142.4,317.5 142.1,316.2 C141.7,314.9 140.3,313.3 140.9,312.8 C141.6,312.3 144.6,313.4 145.4,313.9 C146.2,314.5 144.7,314.9 144.7,315.6 C144.7,316.4 144.9,316.9 145.3,317.5 C145.8,318.1 146.9,317.7 147.0,318.5 C147.1,319.2 146.4,321.1 145.6,321.2 Z'/><path d='M146.8,306.7 C147.3,305.9 149.1,306.3 150.3,306.8 C151.5,307.2 151.7,308.3 152.9,309.0 C154.0,309.7 156.3,309.7 156.1,310.5 C156.0,311.2 153.1,312.7 152.1,312.9 C151.1,313.1 151.7,311.8 151.2,311.4 C150.7,311.0 150.2,311.1 149.5,310.9 C148.9,310.7 148.3,311.3 147.7,310.5 C147.2,309.6 146.3,307.4 146.8,306.7 Z'/><path d='M312.8,128.3 C311.3,129.1 309.2,128.2 307.6,127.0 C305.9,125.8 305.0,124.3 304.6,122.3 C304.3,120.3 304.5,118.0 305.9,117.0 C307.4,116.0 310.8,116.8 312.0,117.4 C313.2,118.0 311.4,119.0 311.7,119.9 C312.1,120.7 312.9,120.9 313.6,121.5 C314.3,122.2 315.4,121.8 315.3,123.1 C315.1,124.4 314.4,127.5 312.8,128.3 Z'/><path d='M304.6,113.2 C303.7,111.8 305.7,109.8 307.2,108.5 C308.7,107.3 310.4,107.4 312.3,106.9 C314.2,106.3 315.8,104.8 316.8,105.8 C317.8,106.8 317.7,110.8 317.3,111.9 C316.9,113.1 315.5,111.2 314.6,111.5 C313.7,111.8 313.3,112.6 312.8,113.4 C312.2,114.2 313.4,115.7 311.8,115.7 C310.1,115.7 305.5,114.7 304.6,113.2 Z'/><path d='M320.9,107.0 C322.1,106.0 324.3,105.7 325.7,106.4 C327.1,107.0 327.4,108.6 328.0,110.1 C328.5,111.7 329.2,113.1 328.4,114.3 C327.6,115.4 325.2,115.7 324.0,115.7 C322.8,115.7 323.0,114.9 322.6,114.2 C322.1,113.5 322.1,112.9 321.5,112.3 C320.9,111.8 319.8,112.4 319.6,111.3 C319.5,110.3 319.7,108.0 320.9,107.0 Z'/><path d='M328.6,123.1 C329.3,124.6 327.6,126.3 326.2,127.5 C324.7,128.8 323.4,128.4 321.4,129.3 C319.5,130.1 317.3,132.9 316.5,131.8 C315.6,130.7 316.5,125.0 317.2,123.6 C317.9,122.1 318.9,124.5 319.9,124.4 C320.9,124.3 321.7,123.9 322.3,123.1 C322.9,122.3 321.6,120.3 322.9,120.3 C324.1,120.3 327.9,121.7 328.6,123.1 Z'/><path d='M371.5,370.9 C370.2,371.1 371.3,368.8 370.8,367.5 C370.2,366.2 369.2,365.8 368.9,364.5 C368.5,363.2 367.8,361.4 369.1,360.9 C370.4,360.5 374.2,361.8 375.4,362.4 C376.6,363.1 375.1,363.4 375.2,364.1 C375.2,364.7 375.2,365.2 375.6,365.7 C376.0,366.2 377.9,365.6 377.1,366.6 C376.3,367.7 372.8,370.7 371.5,370.9 Z'/><path d='M372.1,358.7 C371.6,357.8 373.1,357.5 373.7,356.5 C374.3,355.4 374.3,354.4 375.2,353.5 C376.1,352.6 377.2,350.8 378.0,351.8 C378.9,352.8 379.6,357.1 379.7,358.5 C379.7,359.9 378.8,358.6 378.2,358.8 C377.6,359.0 377.1,359.0 376.7,359.5 C376.3,359.9 377.1,361.2 376.1,361.0 C375.2,360.9 372.6,359.6 372.1,358.7 Z'/><path d='M383.6,353.9 C384.3,353.2 385.3,354.3 386.3,354.8 C387.4,355.3 388.0,355.5 388.8,356.3 C389.7,357.1 391.3,357.7 390.7,358.7 C390.1,359.7 386.9,361.0 385.8,361.2 C384.7,361.4 385.6,360.1 385.3,359.7 C384.9,359.2 384.4,359.3 383.8,358.9 C383.2,358.6 382.5,359.1 382.5,358.1 C382.4,357.0 382.8,354.5 383.6,353.9 Z'/><path d='M392.6,361.4 C394.0,361.9 393.2,363.6 393.1,365.2 C393.0,366.7 393.2,367.9 392.3,369.0 C391.3,370.2 390.0,371.2 388.5,370.9 C387.1,370.6 385.5,368.5 384.9,367.5 C384.4,366.5 385.4,366.6 385.6,365.9 C385.9,365.3 385.9,365.0 386.0,364.3 C386.1,363.7 384.7,363.3 386.0,362.7 C387.4,362.1 391.2,360.9 392.6,361.4 Z'/><path d='M384.1,374.6 C383.9,375.9 382.3,375.3 381.2,375.3 C380.0,375.3 379.4,374.8 378.3,374.5 C377.1,374.2 375.5,374.9 375.4,373.8 C375.4,372.7 377.2,370.0 378.1,369.0 C378.9,367.9 379.2,368.4 379.8,368.4 C380.4,368.3 380.5,368.7 381.0,368.7 C381.5,368.7 381.7,367.3 382.3,368.5 C382.9,369.7 384.3,373.2 384.1,374.6 Z'/><path d='M60.7,289.4 C59.4,289.5 58.3,287.2 56.9,285.3 C55.5,283.5 54.3,282.4 53.8,280.2 C53.4,278.0 53.5,275.0 54.8,274.3 C56.2,273.5 59.6,275.4 60.8,276.4 C61.9,277.4 60.6,278.3 60.8,279.5 C61.0,280.7 61.0,281.3 61.6,282.4 C62.1,283.5 63.7,283.5 63.5,284.9 C63.3,286.3 62.0,289.3 60.7,289.4 Z'/><path d='M63.5,268.0 C64.1,266.5 66.5,264.8 68.4,264.8 C70.4,264.9 71.4,266.9 73.1,268.2 C74.9,269.6 77.4,270.0 77.1,271.4 C76.9,272.8 73.3,274.9 72.0,275.2 C70.7,275.5 71.4,273.6 70.6,272.8 C69.7,272.1 69.0,271.6 67.9,271.6 C66.8,271.5 66.0,273.3 65.1,272.6 C64.2,271.9 62.8,269.6 63.5,268.0 Z'/><path d='M80.0,279.7 C80.5,280.8 78.4,282.8 77.3,284.8 C76.1,286.8 76.0,288.7 74.2,289.8 C72.4,290.9 69.6,291.2 68.4,290.4 C67.1,289.6 67.5,286.9 67.9,285.6 C68.4,284.4 69.7,284.8 70.6,284.1 C71.6,283.4 71.8,282.9 72.6,282.0 C73.4,281.0 73.1,279.8 74.6,279.3 C76.1,278.9 79.5,278.7 80.0,279.7 Z'/>";
    const centerPaths = "<path d='M334.8,357.8 C334.8,359.0 333.6,360.9 332.3,361.3 C331.0,361.8 329.0,361.3 328.4,360.2 C327.8,359.2 328.6,357.2 329.4,356.2 C330.1,355.1 331.0,354.7 332.1,355.0 C333.1,355.3 334.7,356.5 334.8,357.8 Z'/><path d='M204.3,153.5 C204.4,154.7 204.1,156.6 202.6,157.0 C201.1,157.5 197.7,156.8 196.8,155.7 C195.9,154.7 197.0,152.9 198.1,151.9 C199.2,150.9 200.9,150.5 202.2,150.8 C203.4,151.1 204.3,152.2 204.3,153.5 Z'/><path d='M164.6,85.4 C164.6,86.6 163.9,88.6 163.0,88.8 C162.2,89.0 161.0,87.6 160.3,86.6 C159.7,85.6 159.5,84.6 159.9,83.8 C160.4,83.1 161.8,82.6 162.7,82.9 C163.6,83.2 164.5,84.2 164.6,85.4 Z'/><path d='M222.1,304.7 C222.2,306.3 221.2,308.8 220.0,309.3 C218.8,309.8 217.1,308.7 216.2,307.2 C215.3,305.7 214.9,302.9 215.6,301.7 C216.3,300.5 218.4,300.7 219.7,301.3 C221.0,301.9 222.1,303.1 222.1,304.7 Z'/><path d='M26.7,257.1 C26.7,258.3 25.9,259.5 24.9,259.8 C24.0,260.1 22.7,259.6 21.9,258.6 C21.0,257.6 20.2,255.7 20.8,254.8 C21.5,253.8 23.9,253.4 25.1,253.9 C26.3,254.3 26.7,255.9 26.7,257.1 Z'/><path d='M85.8,338.5 C85.8,339.6 83.9,340.4 82.7,340.7 C81.4,341.1 80.2,341.0 79.7,340.2 C79.2,339.5 79.5,338.1 80.1,337.1 C80.8,336.1 81.9,334.9 83.0,335.2 C84.1,335.5 85.9,337.4 85.8,338.5 Z'/><path d='M210.9,214.0 C210.8,214.9 210.2,215.4 209.4,215.8 C208.5,216.2 207.1,216.6 206.6,215.9 C206.1,215.2 206.3,213.2 206.9,212.3 C207.5,211.4 208.9,210.9 209.7,211.2 C210.4,211.6 210.9,213.1 210.9,214.0 Z'/><path d='M376.0,329.0 C375.9,330.4 374.2,331.4 372.8,331.9 C371.4,332.3 369.8,332.2 368.9,331.1 C368.0,330.0 367.4,327.7 368.3,326.5 C369.2,325.2 371.7,324.3 373.2,324.8 C374.8,325.4 376.1,327.6 376.0,329.0 Z'/><path d='M81.2,125.0 C81.2,126.9 80.3,129.1 78.9,129.5 C77.5,129.8 75.4,128.2 74.2,126.8 C73.0,125.4 71.9,123.7 72.8,122.5 C73.8,121.2 77.3,119.9 79.0,120.4 C80.6,120.9 81.2,123.2 81.2,125.0 Z'/><path d='M332.0,306.9 C331.9,308.1 330.8,309.1 329.9,309.4 C329.0,309.7 328.0,309.1 327.6,308.3 C327.1,307.5 327.1,306.5 327.6,305.5 C328.2,304.5 329.4,302.8 330.3,303.1 C331.1,303.4 332.1,305.6 332.0,306.9 Z'/><path d='M134.7,344.5 C134.7,345.7 133.3,347.0 132.1,347.3 C130.8,347.5 129.5,346.7 128.5,345.8 C127.6,344.8 126.5,343.4 127.2,342.6 C128.0,341.7 130.8,341.0 132.3,341.3 C133.8,341.7 134.8,343.3 134.7,344.5 Z'/><path d='M368.4,144.6 C368.3,146.1 367.2,147.1 365.8,147.6 C364.3,148.2 362.2,148.7 361.2,147.4 C360.3,146.2 360.1,143.1 361.1,141.6 C362.1,140.0 364.8,139.1 366.3,139.7 C367.7,140.3 368.5,143.0 368.4,144.6 Z'/><path d='M217.8,75.6 C217.8,77.2 217.3,79.5 216.0,80.1 C214.8,80.6 212.2,79.8 211.5,78.5 C210.8,77.2 211.6,74.9 212.5,73.6 C213.4,72.2 214.8,71.5 215.8,71.9 C216.9,72.3 217.7,74.0 217.8,75.6 Z'/><path d='M14.6,140.9 C14.7,142.0 13.9,143.9 13.1,144.2 C12.2,144.5 11.0,143.3 10.3,142.3 C9.5,141.2 8.8,139.5 9.3,138.8 C9.8,138.1 11.6,138.4 12.7,138.8 C13.8,139.2 14.6,139.8 14.6,140.9 Z'/><path d='M415.2,140.9 C415.2,142.0 414.0,143.2 413.0,143.5 C412.0,143.7 410.9,143.0 410.2,142.2 C409.5,141.3 408.9,139.9 409.4,139.2 C410.0,138.4 411.8,138.0 413.0,138.4 C414.1,138.7 415.2,139.9 415.2,140.9 Z'/><path d='M30.3,186.4 C30.3,187.2 29.6,188.1 28.6,188.4 C27.5,188.6 25.9,188.5 25.2,187.8 C24.5,187.2 24.5,185.7 25.2,185.0 C25.9,184.3 27.6,184.0 28.6,184.3 C29.7,184.6 30.3,185.6 30.3,186.4 Z'/><path d='M133.7,247.8 C133.7,249.9 132.5,252.5 130.9,252.9 C129.4,253.4 127.3,251.9 125.9,250.1 C124.5,248.3 123.0,245.7 124.1,244.1 C125.1,242.6 129.0,241.8 131.0,242.6 C132.9,243.3 133.7,245.7 133.7,247.8 Z'/><path d='M53.2,83.4 C53.2,85.0 51.8,87.0 50.5,87.4 C49.2,87.8 47.6,86.9 46.7,85.5 C45.8,84.2 45.3,81.9 46.0,80.7 C46.7,79.5 49.0,78.9 50.5,79.5 C51.9,80.0 53.2,81.8 53.2,83.4 Z'/><path d='M210.1,26.4 C210.1,28.0 209.6,30.0 207.8,30.6 C205.9,31.1 202.0,30.3 200.8,29.0 C199.6,27.8 200.4,25.5 201.8,24.2 C203.1,22.9 206.0,22.1 207.6,22.5 C209.3,22.9 210.1,24.8 210.1,26.4 Z'/><path d='M325.8,211.6 C325.7,212.4 324.9,213.1 324.2,213.3 C323.5,213.5 322.6,213.2 322.1,212.5 C321.6,211.9 321.1,210.9 321.6,210.2 C322.0,209.5 323.6,208.9 324.4,209.2 C325.2,209.4 325.8,210.7 325.8,211.6 Z'/><path d='M186.9,259.9 C186.8,261.4 184.7,262.4 183.1,262.8 C181.6,263.2 179.9,262.9 179.2,261.9 C178.4,261.0 178.5,259.4 179.4,258.1 C180.3,256.8 182.2,255.2 183.7,255.5 C185.2,255.9 187.1,258.5 186.9,259.9 Z'/><path d='M122.9,39.8 C122.9,40.7 122.3,41.7 121.0,42.1 C119.7,42.6 117.1,42.5 116.4,41.8 C115.8,41.1 116.8,39.4 117.8,38.5 C118.7,37.6 120.0,37.1 121.1,37.3 C122.1,37.6 122.9,38.8 122.9,39.8 Z'/><path d='M328.6,249.6 C328.6,251.1 327.3,252.8 325.7,253.4 C324.1,254.0 321.4,253.9 320.6,252.7 C319.7,251.4 320.4,248.5 321.4,247.2 C322.4,245.8 324.2,245.5 325.6,246.0 C327.1,246.5 328.6,248.1 328.6,249.6 Z'/><path d='M249.4,136.9 C249.4,137.9 248.5,139.2 247.8,139.5 C247.1,139.7 246.2,139.1 245.7,138.2 C245.2,137.4 245.0,136.0 245.4,135.2 C245.8,134.5 246.9,134.3 247.7,134.6 C248.5,134.9 249.4,135.9 249.4,136.9 Z'/><path d='M268.9,218.5 C268.9,219.7 268.3,221.3 267.4,221.7 C266.6,222.1 265.0,221.5 264.4,220.5 C263.9,219.6 264.3,217.8 264.9,216.9 C265.4,216.0 266.5,215.6 267.3,215.9 C268.1,216.2 268.9,217.4 268.9,218.5 Z'/><path d='M290.9,51.7 C290.9,52.7 290.1,54.0 288.7,54.4 C287.3,54.9 284.5,54.9 283.7,54.0 C282.9,53.1 283.7,50.9 284.7,50.0 C285.7,49.0 287.3,49.0 288.6,49.3 C289.8,49.7 290.9,50.7 290.9,51.7 Z'/><path d='M239.5,369.0 C239.5,370.8 238.6,373.2 237.4,373.6 C236.1,374.0 234.2,372.3 233.2,370.9 C232.1,369.4 231.1,367.6 231.9,366.3 C232.8,365.1 235.8,364.0 237.3,364.6 C238.8,365.1 239.5,367.2 239.5,369.0 Z'/><path d='M150.9,314.8 C150.8,315.9 150.4,316.7 149.5,317.0 C148.7,317.4 147.2,317.3 146.7,316.5 C146.1,315.8 146.3,314.2 146.9,313.2 C147.5,312.3 149.0,311.4 149.8,311.7 C150.6,312.0 150.9,313.7 150.9,314.8 Z'/><path d='M320.9,117.8 C320.8,119.6 320.4,121.6 319.1,122.1 C317.8,122.6 315.3,121.9 314.3,120.5 C313.4,119.0 313.3,116.5 314.3,115.1 C315.2,113.6 317.8,112.7 319.1,113.2 C320.5,113.8 320.9,116.0 320.9,117.8 Z'/><path d='M385.3,363.7 C385.1,365.2 383.3,365.9 381.8,366.3 C380.2,366.8 378.5,367.3 377.5,366.2 C376.6,365.1 376.2,362.4 377.1,361.0 C378.1,359.6 380.8,358.6 382.4,359.2 C384.0,359.7 385.4,362.3 385.3,363.7 Z'/><path d='M72.5,278.8 C72.5,280.6 70.8,282.6 68.9,283.1 C66.9,283.7 63.8,282.9 62.9,281.6 C61.9,280.4 63.1,278.3 64.3,276.8 C65.5,275.3 67.3,273.8 68.9,274.1 C70.6,274.5 72.5,277.0 72.5,278.8 Z'/><path d='M379.5,16.0 C379.5,16.9 379.4,18.0 378.5,18.4 C377.7,18.7 375.8,18.5 375.3,17.7 C374.7,16.9 375.0,15.3 375.6,14.5 C376.3,13.6 377.8,13.1 378.5,13.4 C379.3,13.7 379.5,15.0 379.5,16.0 Z'/><path d='M9.5,91.7 C9.5,92.8 9.4,94.6 8.3,95.0 C7.2,95.4 4.9,94.8 4.1,93.8 C3.2,92.7 3.4,90.6 4.1,89.7 C4.9,88.8 6.9,88.8 8.0,89.2 C9.1,89.6 9.4,90.5 9.5,91.7 Z'/><path d='M57.1,362.1 C57.2,363.1 56.6,364.5 55.5,364.9 C54.4,365.2 52.5,364.7 51.6,363.8 C50.7,362.8 50.4,360.9 51.2,360.1 C51.9,359.2 54.2,359.1 55.4,359.5 C56.6,359.9 57.1,361.0 57.1,362.1 Z'/><path d='M178.1,159.4 C178.1,160.6 176.1,161.6 174.6,162.1 C173.1,162.6 171.5,162.9 170.8,161.9 C170.1,160.9 170.3,158.3 171.1,157.1 C171.9,156.0 173.3,155.7 174.7,156.1 C176.1,156.6 178.2,158.2 178.1,159.4 Z'/><path d='M108.8,210.0 C108.7,211.8 106.7,213.3 105.1,213.9 C103.5,214.5 101.6,214.5 100.7,213.0 C99.7,211.6 99.4,208.3 100.3,206.6 C101.3,204.9 103.8,203.9 105.5,204.6 C107.2,205.3 108.9,208.1 108.8,210.0 Z'/><path d='M49.2,389.4 C49.2,390.4 48.2,391.8 47.2,392.1 C46.3,392.4 45.2,391.6 44.6,390.8 C44.0,389.9 43.6,388.4 44.2,387.6 C44.7,386.9 46.1,386.7 47.1,387.0 C48.1,387.4 49.2,388.4 49.2,389.4 Z'/><path d='M388.5,29.1 C388.6,30.6 388.1,32.8 386.8,33.3 C385.5,33.8 382.9,32.7 382.1,31.5 C381.2,30.3 381.8,28.3 382.7,27.2 C383.6,26.1 385.3,25.6 386.4,25.9 C387.6,26.3 388.5,27.7 388.5,29.1 Z'/><path d='M386.7,343.8 C386.7,344.9 385.6,345.8 384.4,346.3 C383.1,346.8 381.3,346.9 380.7,346.1 C380.1,345.2 380.6,343.1 381.3,342.0 C382.1,340.8 383.5,340.0 384.6,340.4 C385.7,340.8 386.8,342.6 386.7,343.8 Z'/><path d='M295.7,141.8 C295.7,142.7 294.4,144.0 293.5,144.3 C292.5,144.7 291.4,144.5 290.8,143.5 C290.2,142.6 290.0,140.5 290.5,139.7 C291.0,139.0 292.3,139.3 293.3,139.7 C294.4,140.1 295.7,140.8 295.7,141.8 Z'/><path d='M107.4,126.5 C107.4,127.9 105.7,129.6 104.4,130.0 C103.1,130.5 101.6,130.0 100.7,128.7 C99.9,127.5 99.4,124.9 100.2,123.8 C100.9,122.7 102.9,122.6 104.3,123.1 C105.8,123.7 107.4,125.1 107.4,126.5 Z'/><path d='M50.0,150.0 C50.1,151.3 49.2,153.5 48.4,153.8 C47.5,154.1 46.5,153.0 45.8,151.7 C45.0,150.3 44.1,148.1 44.5,147.2 C45.0,146.4 47.0,146.9 48.1,147.4 C49.2,148.0 49.9,148.8 50.0,150.0 Z'/><path d='M400.7,332.7 C400.7,334.1 399.3,336.3 398.1,336.7 C396.8,337.0 395.0,335.8 394.3,334.6 C393.5,333.4 393.5,331.8 394.2,330.8 C394.9,329.8 396.5,329.3 397.8,329.7 C399.1,330.1 400.6,331.3 400.7,332.7 Z'/><path d='M0.7,332.7 C0.7,334.3 -0.5,335.7 -2.1,336.2 C-3.6,336.8 -6.0,336.8 -7.1,335.5 C-8.1,334.3 -8.3,331.2 -7.3,329.8 C-6.2,328.4 -3.4,328.0 -1.8,328.6 C-0.3,329.2 0.7,331.2 0.7,332.7 Z'/><path d='M271.3,238.3 C271.3,239.6 270.2,241.4 269.2,241.7 C268.1,242.0 266.8,240.8 266.1,239.8 C265.4,238.7 265.1,237.4 265.7,236.4 C266.3,235.5 268.0,234.8 269.1,235.1 C270.2,235.5 271.2,237.0 271.3,238.3 Z'/><path d='M163.3,379.8 C163.3,381.4 163.0,383.4 161.7,384.0 C160.4,384.6 157.6,384.1 156.8,382.9 C156.0,381.6 156.8,379.0 157.8,377.6 C158.7,376.2 160.5,375.5 161.6,375.9 C162.7,376.3 163.3,378.2 163.3,379.8 Z'/><path d='M117.5,1.3 C117.5,2.1 116.7,3.0 115.9,3.2 C115.1,3.4 114.1,3.0 113.7,2.4 C113.3,1.9 113.4,0.9 113.8,0.3 C114.3,-0.3 115.3,-1.0 116.0,-0.8 C116.7,-0.6 117.5,0.5 117.5,1.3 Z'/><path d='M117.1,401.3 C117.1,402.1 116.6,403.1 115.9,403.3 C115.3,403.5 114.2,403.0 113.8,402.4 C113.4,401.8 113.7,401.1 114.2,400.5 C114.6,399.9 115.3,399.3 115.9,399.5 C116.5,399.6 117.1,400.6 117.1,401.3 Z'/><path d='M188.5,199.5 C188.6,200.8 188.2,203.0 187.1,203.3 C186.0,203.5 183.9,202.0 183.0,200.9 C182.1,199.8 181.6,198.6 182.4,197.8 C183.1,196.9 185.5,196.3 186.7,196.6 C187.9,197.0 188.4,198.2 188.5,199.5 Z'/><path d='M221.2,378.3 C221.2,379.0 220.6,379.9 220.0,380.1 C219.3,380.3 218.5,379.9 218.0,379.3 C217.5,378.7 217.3,377.6 217.7,377.1 C218.0,376.6 219.2,376.4 219.9,376.7 C220.6,376.9 221.2,377.7 221.2,378.3 Z'/><path d='M175.7,71.1 C175.7,71.9 174.9,72.8 174.2,73.0 C173.5,73.2 172.7,72.7 172.3,72.1 C172.0,71.5 171.9,70.7 172.3,70.1 C172.7,69.5 173.6,68.8 174.3,69.0 C175.0,69.2 175.8,70.3 175.7,71.1 Z'/><path d='M292.6,226.1 C292.7,226.9 292.0,228.5 291.2,228.8 C290.5,229.1 289.2,228.3 288.6,227.4 C288.0,226.5 287.8,225.0 288.2,224.4 C288.7,223.8 290.0,224.1 290.9,224.5 C291.8,224.8 292.5,225.2 292.6,226.1 Z'/><path d='M91.1,85.0 C91.1,86.1 90.5,87.6 89.4,88.0 C88.3,88.4 86.3,88.0 85.6,87.0 C84.9,86.1 85.1,84.1 85.9,83.2 C86.6,82.3 88.1,82.2 89.2,82.6 C90.2,83.0 91.1,83.9 91.1,85.0 Z'/><path d='M371.1,227.2 C371.1,228.2 370.0,229.4 368.8,229.8 C367.6,230.3 365.6,230.2 365.0,229.4 C364.3,228.5 364.8,226.4 365.6,225.5 C366.3,224.6 367.6,224.5 368.7,224.9 C369.8,225.2 371.1,226.2 371.1,227.2 Z'/><path d='M137.5,183.6 C137.5,184.5 136.5,185.4 135.5,185.7 C134.4,186.0 132.9,185.9 132.3,185.2 C131.7,184.5 132.0,183.1 132.6,182.3 C133.3,181.4 134.7,180.9 135.6,181.1 C136.6,181.4 137.5,182.7 137.5,183.6 Z'/><path d='M188.7,102.5 C188.7,103.1 187.7,104.1 187.0,104.3 C186.3,104.5 185.6,104.0 185.1,103.4 C184.6,102.8 184.2,101.7 184.6,101.2 C184.9,100.8 186.1,100.8 186.9,101.1 C187.7,101.3 188.6,101.8 188.7,102.5 Z'/><path d='M87.1,388.5 C87.1,389.5 86.8,390.5 85.9,390.8 C85.1,391.1 83.5,390.5 83.0,389.8 C82.4,389.1 82.5,388.1 83.1,387.3 C83.7,386.5 85.2,385.8 86.0,386.0 C86.8,386.3 87.1,387.6 87.1,388.5 Z'/><path d='M381.1,72.2 C381.1,72.9 379.9,73.7 379.0,74.0 C378.2,74.2 377.3,73.9 376.8,73.3 C376.3,72.7 376.1,71.5 376.5,70.9 C377.0,70.3 378.1,70.2 379.0,70.4 C379.9,70.7 381.1,71.5 381.1,72.2 Z'/><path d='M196.8,295.7 C196.7,297.1 195.5,298.2 194.0,298.7 C192.4,299.2 189.9,299.2 189.0,298.2 C188.2,297.2 188.7,294.9 189.7,293.7 C190.7,292.5 192.8,291.7 194.2,292.1 C195.6,292.5 196.8,294.4 196.8,295.7 Z'/><path d='M288.1,257.3 C288.1,258.1 287.3,259.4 286.6,259.6 C285.8,259.9 284.8,259.3 284.4,258.6 C283.9,257.8 283.9,256.6 284.3,256.0 C284.7,255.4 285.6,255.3 286.4,255.6 C287.1,255.9 288.1,256.5 288.1,257.3 Z'/><path d='M295.1,334.6 C295.0,335.6 293.9,336.5 292.7,336.8 C291.6,337.0 290.1,336.8 289.4,336.0 C288.6,335.2 288.3,333.8 289.0,332.9 C289.8,332.0 291.9,331.2 293.1,331.5 C294.3,331.8 295.1,333.5 295.1,334.6 Z'/><path d='M382.6,269.6 C382.6,270.6 382.1,271.9 381.3,272.2 C380.5,272.5 379.1,272.1 378.7,271.3 C378.2,270.5 378.4,269.0 378.9,268.1 C379.4,267.3 380.5,266.8 381.3,267.1 C382.0,267.4 382.5,268.6 382.6,269.6 Z'/><path d='M201.7,238.3 C201.7,239.6 201.5,241.4 200.5,241.8 C199.5,242.1 197.4,241.0 196.6,240.0 C195.8,239.0 195.8,237.5 196.6,236.7 C197.3,235.8 199.2,235.4 200.2,235.7 C201.2,236.0 201.6,237.1 201.7,238.3 Z'/><path d='M364.0,372.0 C364.1,373.9 363.8,376.8 362.4,377.4 C361.1,377.9 358.2,376.6 357.3,375.0 C356.3,373.4 356.7,370.8 357.7,369.4 C358.6,367.9 360.8,367.3 362.1,367.9 C363.3,368.4 364.0,370.1 364.0,372.0 Z'/><path d='M216.4,254.0 C216.4,255.2 214.9,256.3 213.6,256.9 C212.2,257.5 210.6,258.1 209.8,256.9 C209.0,255.7 208.8,252.1 209.5,250.8 C210.3,249.6 212.3,250.2 213.6,250.8 C215.0,251.4 216.4,252.8 216.4,254.0 Z'/><path d='M32.3,160.6 C32.3,161.1 31.4,161.7 30.6,161.9 C29.8,162.1 28.9,162.1 28.4,161.6 C27.9,161.2 27.9,160.0 28.3,159.6 C28.7,159.2 29.7,159.4 30.5,159.6 C31.3,159.8 32.3,160.2 32.3,160.6 Z'/><path d='M203.4,108.3 C203.4,109.4 203.0,110.8 202.1,111.1 C201.2,111.5 199.4,110.8 198.8,109.9 C198.2,109.1 198.4,107.6 199.0,106.8 C199.7,106.0 201.1,105.6 202.0,105.9 C202.8,106.2 203.4,107.3 203.4,108.3 Z'/><path d='M400.0,179.7 C400.0,180.8 399.6,182.6 398.9,182.8 C398.2,183.1 397.2,182.1 396.5,181.0 C395.8,180.0 395.0,178.1 395.4,177.5 C395.8,176.8 397.7,177.1 398.6,177.6 C399.6,178.1 399.9,178.7 400.0,179.7 Z'/><path d='M0.3,179.7 C0.3,181.0 -0.1,182.5 -0.9,182.8 C-1.8,183.1 -3.3,182.2 -4.0,181.2 C-4.7,180.2 -5.1,178.9 -4.4,177.9 C-3.8,177.0 -1.9,176.1 -0.9,176.5 C0.0,176.9 0.3,178.5 0.3,179.7 Z'/><path d='M33.1,373.7 C33.1,375.0 31.8,376.3 30.4,376.9 C29.1,377.5 27.2,378.1 26.4,376.9 C25.6,375.6 25.7,372.0 26.5,370.7 C27.3,369.4 29.1,369.9 30.4,370.5 C31.8,371.1 33.2,372.5 33.1,373.7 Z'/><path d='M267.4,22.6 C267.3,23.6 266.0,24.6 265.0,24.9 C264.1,25.2 263.0,24.9 262.5,24.1 C262.0,23.3 262.0,22.0 262.6,21.1 C263.1,20.3 264.2,19.5 265.2,19.7 C266.1,20.0 267.4,21.5 267.4,22.6 Z'/><path d='M139.6,74.4 C139.7,76.2 139.2,78.8 138.2,79.2 C137.1,79.6 135.4,77.9 134.4,76.3 C133.5,74.8 132.7,72.8 133.4,71.5 C134.1,70.3 136.7,69.6 138.0,70.2 C139.2,70.8 139.6,72.6 139.6,74.4 Z'/><path d='M48.6,56.5 C48.6,57.2 48.5,58.3 47.9,58.6 C47.2,58.8 45.9,58.5 45.4,57.8 C44.9,57.1 44.9,55.7 45.3,55.2 C45.8,54.7 46.9,55.0 47.6,55.2 C48.2,55.5 48.5,55.8 48.6,56.5 Z'/><path d='M264.0,37.2 C264.0,38.7 262.4,40.9 261.3,41.2 C260.3,41.6 259.2,40.2 258.6,38.9 C257.9,37.7 257.7,36.2 258.2,35.1 C258.8,34.0 260.1,33.1 261.2,33.5 C262.4,33.9 263.9,35.6 264.0,37.2 Z'/><path d='M237.1,158.4 C237.1,159.6 235.2,161.1 233.9,161.4 C232.6,161.6 231.6,160.6 230.7,159.6 C229.8,158.6 228.6,157.2 229.3,156.4 C229.9,155.5 232.3,155.1 233.9,155.5 C235.5,155.9 237.1,157.2 237.1,158.4 Z'/><path d='M144.3,133.2 C144.3,134.3 143.7,136.0 142.6,136.3 C141.6,136.6 139.8,135.8 139.1,134.9 C138.3,133.9 138.3,132.3 139.0,131.5 C139.6,130.8 141.3,130.6 142.4,131.0 C143.4,131.3 144.2,132.2 144.3,133.2 Z'/><path d='M290.0,181.9 C290.0,182.9 289.1,184.4 288.3,184.7 C287.5,184.9 286.4,184.2 285.9,183.3 C285.4,182.5 285.5,181.3 286.0,180.6 C286.4,179.9 287.3,179.7 288.1,179.9 C288.9,180.2 289.9,181.0 290.0,181.9 Z'/><path d='M118.5,217.6 C118.5,218.4 117.3,219.3 116.5,219.4 C115.8,219.6 115.1,219.0 114.6,218.5 C114.2,217.9 114.1,217.2 114.4,216.7 C114.8,216.1 115.7,215.6 116.5,215.8 C117.3,216.0 118.5,216.9 118.5,217.6 Z'/><path d='M309.4,101.2 C309.3,102.8 307.6,103.8 306.0,104.4 C304.5,105.0 302.6,105.3 301.8,104.1 C301.0,102.9 301.0,100.0 301.9,98.4 C302.8,96.8 305.0,95.7 306.5,96.3 C308.0,96.8 309.5,99.6 309.4,101.2 Z'/>";

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><g fill='${spotColor}' fill-opacity='${outerOpacity}' fill-rule='evenodd'>${outerPaths}</g><g fill='${spotColor}' fill-opacity='${centerOpacity}' fill-rule='evenodd'>${centerPaths}</g></svg>`;
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
