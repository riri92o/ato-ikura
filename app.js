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
    const spotOpacity = isDarkBg ? 0.12 : 0.07;

    const paths = "<path d='M64.1,27.0 C63.0,26.1 63.6,23.2 63.5,21.4 C63.3,19.5 62.5,17.3 63.4,15.9 C64.3,14.5 67.4,12.9 68.9,13.1 C70.3,13.4 71.6,15.9 72.0,17.3 C72.5,18.7 72.0,19.8 71.7,21.4 C71.3,23.1 71.4,26.3 70.1,27.2 C68.9,28.2 65.2,28.0 64.1,27.0 Z'/><path d='M146.5,22.8 C145.3,23.8 141.5,22.8 139.4,22.2 C137.3,21.7 135.7,21.0 134.0,19.6 C132.3,18.1 129.2,15.5 129.0,13.7 C128.8,11.9 130.7,9.7 132.6,9.0 C134.5,8.3 138.1,8.2 140.4,9.4 C142.8,10.6 145.7,13.7 146.7,16.0 C147.7,18.2 147.7,21.7 146.5,22.8 Z'/><path d='M218.0,28.5 C217.6,28.0 217.6,26.3 218.1,25.7 C218.6,25.0 220.2,24.5 221.1,24.5 C222.1,24.5 223.6,24.9 223.9,25.5 C224.1,26.1 223.3,27.6 222.7,28.1 C222.2,28.7 221.3,28.7 220.5,28.8 C219.7,28.8 218.4,29.0 218.0,28.5 Z'/><path d='M221.0,25.5 C220.5,25.3 219.9,24.1 220.2,23.4 C220.6,22.6 222.2,21.2 223.0,20.8 C223.8,20.5 224.7,20.8 225.0,21.2 C225.2,21.6 225.0,22.5 224.7,23.1 C224.4,23.7 223.8,24.4 223.2,24.8 C222.5,25.2 221.4,25.8 221.0,25.5 Z'/><path d='M272.1,29.1 C270.3,30.4 266.6,33.0 265.0,32.5 C263.5,31.9 263.2,27.8 262.8,25.6 C262.3,23.5 261.3,20.9 262.3,19.6 C263.2,18.2 266.5,17.6 268.4,17.5 C270.3,17.4 272.5,17.9 273.7,19.0 C274.8,20.2 275.7,22.5 275.4,24.2 C275.2,25.9 273.8,27.7 272.1,29.1 Z'/><path d='M381.6,7.5 C382.0,7.0 383.3,5.5 384.3,5.2 C385.3,4.9 386.6,5.4 387.7,5.8 C388.7,6.2 390.1,6.8 390.6,7.7 C391.2,8.6 391.0,10.6 391.0,11.2 C390.9,11.9 390.6,11.7 390.1,11.6 C389.5,11.5 388.2,11.0 387.5,10.7 C386.8,10.5 386.5,10.3 386.0,10.0 C385.5,9.7 385.0,9.2 384.4,8.9 C383.7,8.6 382.4,8.6 382.0,8.3 C381.5,8.1 381.2,8.0 381.6,7.5 Z'/><path d='M391.6,16.3 C391.7,16.8 392.1,18.3 391.8,19.0 C391.5,19.7 390.5,20.0 389.9,20.5 C389.2,21.1 388.7,22.0 388.0,22.1 C387.2,22.2 385.8,21.6 385.4,21.4 C384.9,21.2 385.1,21.1 385.3,20.7 C385.5,20.3 386.1,19.2 386.6,18.8 C387.0,18.3 387.4,18.3 387.9,18.1 C388.4,17.8 388.8,17.6 389.4,17.3 C389.9,16.9 390.7,16.3 391.1,16.1 C391.4,16.0 391.5,15.8 391.6,16.3 Z'/><path d='M381.5,20.0 C381.0,20.0 379.7,20.0 379.1,19.6 C378.4,19.2 377.9,18.4 377.6,17.7 C377.2,17.0 377.0,16.2 377.0,15.4 C377.0,14.7 377.3,13.5 377.5,13.2 C377.6,12.8 377.7,12.9 377.9,13.2 C378.2,13.5 378.6,14.4 378.9,15.0 C379.1,15.6 379.1,16.2 379.4,16.7 C379.7,17.2 380.2,17.5 380.5,18.0 C380.9,18.5 381.5,19.3 381.7,19.7 C381.8,20.0 381.9,20.1 381.5,20.0 Z'/><path d='M83.4,84.3 C84.0,84.7 85.8,85.8 86.4,87.0 C87.0,88.1 87.2,89.9 86.9,91.2 C86.6,92.5 85.5,93.7 84.6,94.7 C83.6,95.7 82.6,97.0 81.4,97.3 C80.2,97.6 78.1,96.7 77.4,96.5 C76.8,96.2 77.0,96.3 77.5,95.9 C78.0,95.5 79.4,94.7 80.2,94.2 C80.9,93.6 81.5,93.2 82.0,92.6 C82.5,91.9 83.1,91.3 83.4,90.5 C83.7,89.7 83.8,88.8 83.7,87.8 C83.6,86.9 82.9,85.5 82.8,84.9 C82.8,84.3 82.8,84.0 83.4,84.3 Z'/><path d='M71.5,93.2 C70.9,92.6 69.3,90.9 69.0,89.5 C68.7,88.1 69.1,86.2 69.8,84.9 C70.5,83.6 71.9,82.2 73.2,81.7 C74.6,81.2 76.9,81.6 77.7,81.7 C78.4,81.9 78.1,82.0 77.8,82.6 C77.4,83.1 76.1,84.2 75.4,85.0 C74.7,85.7 74.2,86.2 73.7,87.0 C73.3,87.7 73.1,88.5 72.8,89.5 C72.6,90.4 72.5,92.2 72.2,92.8 C72.0,93.4 72.0,93.7 71.5,93.2 Z'/><path d='M108.1,88.7 C107.6,88.2 106.4,86.5 106.2,85.3 C106.0,84.1 106.4,82.6 106.9,81.4 C107.4,80.3 108.4,79.2 109.5,78.4 C110.5,77.5 111.8,76.4 113.0,76.3 C114.2,76.2 116.2,77.5 116.8,77.9 C117.4,78.3 117.1,78.4 116.6,78.7 C116.1,79.0 114.5,79.2 113.7,79.7 C113.0,80.1 112.5,80.9 111.9,81.6 C111.4,82.2 111.2,82.7 110.7,83.4 C110.2,84.0 109.4,84.6 109.1,85.4 C108.8,86.3 108.9,87.8 108.7,88.4 C108.5,88.9 108.5,89.2 108.1,88.7 Z'/><path d='M121.9,82.6 C122.2,83.1 123.5,84.7 123.6,85.9 C123.7,87.0 123.0,88.3 122.4,89.4 C121.8,90.4 120.9,91.4 120.0,92.2 C119.1,92.9 117.8,93.9 116.7,94.0 C115.6,94.1 113.8,93.0 113.2,92.7 C112.6,92.5 112.8,92.5 113.3,92.3 C113.8,92.0 115.3,91.7 116.2,91.4 C117.1,91.1 118.0,90.9 118.7,90.4 C119.3,89.8 119.7,89.0 120.1,88.2 C120.5,87.4 120.8,86.7 121.0,85.8 C121.2,84.9 121.3,83.3 121.5,82.8 C121.6,82.2 121.5,82.1 121.9,82.6 Z'/><path d='M212.8,95.8 C212.1,95.5 209.8,94.6 208.7,93.5 C207.6,92.4 206.6,90.6 206.4,89.0 C206.1,87.4 206.6,85.5 207.2,84.0 C207.8,82.5 208.9,80.8 210.1,80.0 C211.4,79.1 213.9,78.7 214.7,78.7 C215.5,78.6 215.4,79.0 215.1,79.6 C214.7,80.2 213.3,81.5 212.7,82.5 C212.1,83.5 211.7,84.5 211.5,85.5 C211.2,86.5 211.2,87.5 211.3,88.5 C211.3,89.5 211.5,90.4 211.9,91.6 C212.2,92.7 213.1,94.5 213.2,95.2 C213.4,95.9 213.6,96.0 212.8,95.8 Z'/><path d='M223.3,81.7 C224.1,82.1 226.5,83.3 227.2,84.6 C227.8,85.8 227.8,87.9 227.5,89.4 C227.2,90.9 226.3,92.7 225.2,93.6 C224.2,94.6 221.7,95.0 221.0,95.1 C220.2,95.2 220.3,94.8 220.6,94.2 C220.9,93.6 222.1,92.3 222.5,91.4 C223.0,90.5 223.0,89.6 223.2,88.7 C223.4,87.7 223.7,86.8 223.6,85.8 C223.5,84.8 222.7,83.2 222.7,82.5 C222.6,81.9 222.6,81.4 223.3,81.7 Z'/><path d='M277.2,57.7 C277.4,58.2 277.8,59.5 277.7,60.4 C277.6,61.3 277.3,62.4 276.7,63.1 C276.1,63.7 275.1,64.4 274.2,64.5 C273.3,64.7 271.9,64.3 271.4,64.1 C271.0,63.9 271.1,63.7 271.4,63.3 C271.6,63.0 272.6,62.5 273.0,62.0 C273.4,61.5 273.5,60.9 273.9,60.5 C274.2,60.1 274.6,59.9 275.0,59.4 C275.4,58.9 276.1,58.0 276.5,57.8 C276.8,57.5 277.0,57.3 277.2,57.7 Z'/><path d='M267.1,63.6 C266.7,63.4 265.4,62.8 264.8,62.1 C264.2,61.4 263.7,60.4 263.5,59.5 C263.3,58.6 263.3,57.5 263.6,56.6 C263.9,55.7 264.8,54.5 265.1,54.2 C265.4,53.8 265.5,54.0 265.6,54.5 C265.6,54.9 265.4,56.1 265.4,56.9 C265.4,57.7 265.4,58.4 265.6,59.1 C265.7,59.7 266.1,60.3 266.4,61.0 C266.7,61.7 267.2,62.9 267.3,63.3 C267.4,63.7 267.5,63.8 267.1,63.6 Z'/><path d='M269.6,52.0 C269.8,51.9 270.5,51.5 271.0,51.4 C271.4,51.4 271.9,51.4 272.4,51.5 C272.9,51.5 273.5,51.4 273.9,51.6 C274.3,51.9 274.6,52.8 274.7,53.1 C274.8,53.4 274.7,53.4 274.4,53.5 C274.1,53.5 273.4,53.5 273.0,53.5 C272.6,53.5 272.3,53.5 272.0,53.4 C271.6,53.3 271.3,53.3 271.0,53.1 C270.6,53.0 270.0,52.7 269.8,52.5 C269.5,52.3 269.4,52.2 269.6,52.0 Z'/><path d='M331.8,84.5 C331.7,84.0 331.4,82.3 331.7,81.3 C332.0,80.4 332.6,79.3 333.4,78.6 C334.1,77.8 335.2,77.2 336.2,77.0 C337.2,76.8 338.8,77.2 339.3,77.4 C339.9,77.6 339.7,77.7 339.4,78.1 C339.1,78.6 338.1,79.6 337.6,80.2 C337.0,80.7 336.7,81.0 336.2,81.4 C335.6,81.8 334.9,82.0 334.3,82.6 C333.7,83.1 333.1,84.2 332.7,84.6 C332.3,84.9 332.0,85.0 331.8,84.5 Z'/><path d='M344.1,78.1 C344.7,78.2 346.6,78.7 347.3,79.4 C348.1,80.2 348.3,81.6 348.6,82.7 C348.8,83.8 349.2,85.1 348.9,86.1 C348.6,87.2 347.4,88.5 347.0,89.0 C346.7,89.4 346.7,89.2 346.5,88.7 C346.4,88.2 346.1,86.7 346.1,85.8 C346.0,84.9 346.5,84.1 346.3,83.3 C346.1,82.6 345.4,82.0 345.0,81.2 C344.5,80.4 343.9,79.1 343.8,78.6 C343.6,78.1 343.5,78.0 344.1,78.1 Z'/><path d='M343.5,92.6 C343.3,92.9 342.5,93.6 341.9,94.0 C341.3,94.4 340.5,94.8 339.8,94.9 C339.1,94.9 338.3,94.5 337.7,94.2 C337.1,93.8 336.3,93.0 336.1,92.7 C335.8,92.3 335.9,92.3 336.3,92.2 C336.6,92.1 337.6,92.1 338.2,92.1 C338.7,92.0 339.2,92.0 339.8,92.0 C340.3,92.0 340.8,92.1 341.4,92.1 C342.0,92.2 342.9,92.0 343.3,92.1 C343.6,92.2 343.8,92.3 343.5,92.6 Z'/><path d='M354.5,73.3 C354.8,72.4 355.8,69.8 357.0,68.8 C358.3,67.8 360.5,67.3 362.1,67.4 C363.7,67.6 365.6,68.6 366.8,69.6 C368.0,70.7 369.0,72.9 369.3,73.7 C369.6,74.5 369.2,74.5 368.5,74.3 C367.8,74.2 366.2,73.1 365.1,72.9 C364.0,72.7 362.9,73.0 361.9,73.0 C360.9,73.1 360.2,73.2 359.1,73.3 C357.9,73.5 355.9,73.8 355.2,73.8 C354.4,73.8 354.2,74.1 354.5,73.3 Z'/><path d='M369.3,80.9 C369.4,81.3 369.6,82.7 369.4,83.5 C369.1,84.3 368.5,85.1 367.9,85.6 C367.3,86.2 366.5,86.7 365.7,86.9 C364.9,87.1 363.6,87.1 363.2,87.0 C362.7,86.9 362.8,86.7 363.0,86.4 C363.3,86.0 364.2,85.5 364.7,85.0 C365.2,84.6 365.5,84.0 365.9,83.6 C366.4,83.1 366.9,82.8 367.4,82.4 C367.8,81.9 368.5,81.0 368.8,80.8 C369.2,80.5 369.3,80.4 369.3,80.9 Z'/><path d='M358.0,86.3 C357.5,86.2 356.0,86.1 355.1,85.6 C354.3,85.2 353.6,84.3 353.1,83.5 C352.7,82.6 352.5,81.5 352.6,80.6 C352.7,79.6 353.6,78.3 353.9,77.9 C354.2,77.5 354.3,77.7 354.6,78.0 C354.9,78.4 355.3,79.5 355.6,80.1 C355.9,80.8 356.1,81.3 356.4,81.9 C356.8,82.4 357.3,82.6 357.6,83.3 C357.9,83.9 358.3,85.2 358.3,85.7 C358.4,86.2 358.6,86.3 358.0,86.3 Z'/><path d='M28.5,143.7 C28.1,144.8 26.9,147.1 25.7,147.3 C24.5,147.4 21.9,145.7 21.4,144.6 C20.8,143.4 21.7,141.4 22.4,140.3 C23.1,139.3 24.5,138.4 25.5,138.5 C26.5,138.5 27.7,139.6 28.2,140.5 C28.7,141.4 28.9,142.5 28.5,143.7 Z'/><path d='M22.0,144.0 C21.0,144.7 19.3,145.7 18.0,144.8 C16.7,144.0 14.8,140.7 14.3,138.8 C13.7,136.9 13.8,133.9 14.6,133.6 C15.5,133.3 17.8,135.7 19.3,136.8 C20.9,138.0 23.5,139.3 24.0,140.5 C24.4,141.7 23.0,143.3 22.0,144.0 Z'/><path d='M122.1,116.0 C121.7,117.3 119.8,119.0 118.1,119.2 C116.5,119.4 113.6,118.2 112.3,117.1 C111.0,116.1 110.2,114.1 110.2,113.0 C110.2,111.8 111.2,110.9 112.2,110.0 C113.2,109.2 114.8,107.5 116.2,107.7 C117.6,108.0 119.4,110.0 120.4,111.4 C121.4,112.8 122.5,114.7 122.1,116.0 Z'/><path d='M267.2,143.7 C266.5,143.9 264.3,144.5 262.9,144.3 C261.6,144.0 260.1,143.1 259.1,142.1 C258.1,141.1 257.4,139.7 257.0,138.3 C256.6,137.0 256.7,134.9 256.8,134.2 C256.9,133.5 257.2,133.7 257.7,134.2 C258.2,134.7 259.1,136.2 259.7,137.0 C260.4,137.9 260.8,138.9 261.5,139.5 C262.2,140.1 263.2,140.3 264.2,140.9 C265.1,141.4 266.6,142.4 267.1,142.9 C267.6,143.3 267.9,143.5 267.2,143.7 Z'/><path d='M260.1,127.9 C260.2,127.4 260.6,125.9 261.3,125.3 C261.9,124.7 262.9,124.5 263.8,124.3 C264.6,124.0 265.6,123.9 266.4,124.0 C267.3,124.1 268.5,124.8 268.9,125.1 C269.3,125.4 269.1,125.4 268.7,125.7 C268.3,126.0 267.2,126.5 266.5,126.7 C265.9,127.0 265.4,127.3 264.8,127.4 C264.1,127.6 263.5,127.6 262.8,127.7 C262.1,127.9 261.0,128.3 260.5,128.3 C260.1,128.3 260.0,128.4 260.1,127.9 Z'/><path d='M272.9,128.5 C273.3,128.6 274.4,129.0 274.8,129.5 C275.3,130.0 275.7,130.7 275.9,131.3 C276.0,131.9 276.2,132.7 276.0,133.4 C275.8,134.0 275.0,134.9 274.7,135.2 C274.4,135.5 274.3,135.4 274.0,135.1 C273.8,134.8 273.6,134.0 273.4,133.5 C273.2,133.0 272.8,132.6 272.7,132.2 C272.5,131.7 272.6,131.3 272.5,130.7 C272.5,130.2 272.4,129.3 272.5,128.9 C272.5,128.5 272.5,128.4 272.9,128.5 Z'/><path d='M330.9,104.9 C331.0,104.4 331.4,102.8 332.0,101.9 C332.6,101.0 333.4,99.7 334.3,99.3 C335.3,98.9 336.8,99.1 337.8,99.4 C338.9,99.6 340.3,100.3 340.7,100.7 C341.2,101.1 340.9,101.2 340.5,101.5 C340.0,101.8 338.7,102.3 338.0,102.5 C337.2,102.8 336.5,102.6 335.9,102.9 C335.2,103.1 334.8,103.7 334.1,104.1 C333.4,104.5 332.2,105.2 331.7,105.3 C331.2,105.4 330.9,105.5 330.9,104.9 Z'/><path d='M345.9,104.6 C346.4,105.1 347.9,106.6 348.2,107.7 C348.6,108.9 348.2,110.4 347.8,111.6 C347.4,112.8 346.9,114.3 346.0,115.0 C345.0,115.8 342.8,115.9 342.1,116.0 C341.4,116.1 341.6,116.0 341.8,115.4 C342.0,114.9 342.9,113.6 343.3,112.7 C343.6,111.9 343.8,111.2 344.1,110.4 C344.4,109.6 344.8,108.9 345.0,108.0 C345.2,107.1 345.2,105.5 345.3,104.9 C345.5,104.4 345.5,104.2 345.9,104.6 Z'/><path d='M336.2,114.7 C335.8,114.6 334.6,114.5 333.9,114.1 C333.3,113.8 332.7,113.1 332.3,112.4 C331.9,111.8 331.5,111.0 331.4,110.3 C331.3,109.5 331.6,108.4 331.8,108.0 C331.9,107.6 331.9,107.7 332.1,108.0 C332.4,108.3 332.8,109.3 333.1,109.8 C333.4,110.3 333.8,110.7 334.2,111.2 C334.5,111.7 334.7,112.2 335.0,112.7 C335.4,113.2 336.1,113.9 336.3,114.2 C336.5,114.5 336.6,114.7 336.2,114.7 Z'/><path d='M24.4,172.7 C23.6,172.6 22.8,171.8 22.5,170.9 C22.2,170.1 22.4,169.0 22.7,167.7 C23.0,166.5 23.6,163.7 24.4,163.5 C25.2,163.4 26.9,165.2 27.5,166.6 C28.0,168.0 28.1,170.9 27.6,171.9 C27.1,173.0 25.3,172.9 24.4,172.7 Z'/><path d='M23.8,175.4 C23.7,174.7 23.8,173.7 24.5,173.2 C25.2,172.7 27.2,172.1 28.2,172.3 C29.1,172.5 30.0,173.7 30.1,174.5 C30.3,175.3 29.7,176.8 28.9,177.2 C28.1,177.6 26.2,177.2 25.3,176.9 C24.5,176.6 23.9,176.0 23.8,175.4 Z'/><path d='M77.3,171.7 C76.5,171.7 74.2,171.7 73.0,170.9 C71.9,170.1 70.8,168.6 70.3,167.2 C69.8,165.8 69.7,163.9 70.2,162.5 C70.6,161.1 71.9,159.7 73.0,158.9 C74.1,158.1 76.1,157.5 76.8,157.4 C77.5,157.3 77.3,157.7 77.1,158.3 C76.9,158.9 75.9,160.3 75.5,161.1 C75.0,162.0 74.4,162.6 74.2,163.4 C74.1,164.2 74.3,165.1 74.5,166.0 C74.7,166.8 74.9,167.7 75.4,168.5 C75.9,169.3 77.2,170.5 77.5,171.0 C77.8,171.5 78.0,171.8 77.3,171.7 Z'/><path d='M83.8,158.4 C84.5,158.7 86.7,159.6 87.5,160.7 C88.3,161.8 88.7,163.7 88.7,165.1 C88.6,166.6 88.1,168.4 87.1,169.5 C86.2,170.5 83.8,171.1 83.1,171.3 C82.4,171.5 82.5,171.2 82.7,170.6 C82.8,169.9 83.6,168.4 84.0,167.5 C84.3,166.5 84.8,165.8 84.9,164.9 C84.9,164.0 84.5,163.2 84.3,162.2 C84.1,161.2 83.5,159.6 83.4,159.0 C83.3,158.4 83.1,158.1 83.8,158.4 Z'/><path d='M119.9,184.9 C119.4,184.4 117.8,182.6 117.7,181.3 C117.5,180.1 118.5,178.4 119.3,177.3 C120.1,176.2 121.2,175.2 122.4,174.5 C123.6,173.9 125.2,173.4 126.4,173.6 C127.7,173.8 129.3,175.3 129.8,175.7 C130.3,176.2 130.0,176.2 129.4,176.4 C128.9,176.7 127.3,176.9 126.4,177.2 C125.5,177.5 124.9,177.7 124.3,178.0 C123.7,178.4 123.1,178.8 122.6,179.4 C122.2,180.0 121.9,180.7 121.6,181.5 C121.3,182.4 121.0,184.0 120.8,184.5 C120.5,185.1 120.5,185.5 119.9,184.9 Z'/><path d='M133.5,179.3 C133.9,180.0 135.3,181.9 135.3,183.3 C135.3,184.6 134.5,186.3 133.6,187.3 C132.7,188.4 131.2,189.4 129.9,189.7 C128.6,190.1 126.5,189.6 125.8,189.4 C125.1,189.2 125.3,189.1 125.8,188.8 C126.3,188.4 128.0,187.9 128.8,187.3 C129.7,186.7 130.4,186.1 130.9,185.3 C131.5,184.6 131.7,183.7 132.0,182.7 C132.3,181.8 132.6,180.1 132.9,179.6 C133.1,179.0 133.1,178.7 133.5,179.3 Z'/><path d='M160.4,173.7 C160.3,172.7 163.5,170.5 165.1,169.8 C166.7,169.2 168.6,169.5 169.9,169.8 C171.1,170.1 172.2,170.8 172.6,171.8 C173.1,172.9 173.6,175.5 172.5,176.2 C171.4,176.9 168.1,176.4 166.1,176.0 C164.0,175.5 160.6,174.7 160.4,173.7 Z'/><path d='M168.9,179.2 C168.5,178.3 167.9,176.1 168.7,175.7 C169.6,175.2 172.4,175.8 173.8,176.2 C175.1,176.6 176.8,177.1 177.0,177.9 C177.2,178.6 175.8,180.3 174.8,180.8 C173.8,181.3 171.9,181.2 170.9,180.9 C169.9,180.6 169.3,180.1 168.9,179.2 Z'/><path d='M229.7,185.8 C229.1,185.3 227.6,183.6 227.0,182.2 C226.4,180.9 225.9,179.1 226.1,177.5 C226.3,176.0 227.0,174.1 228.1,173.1 C229.1,172.0 231.6,171.3 232.4,171.1 C233.2,170.8 233.1,171.1 232.9,171.8 C232.8,172.5 231.9,174.2 231.5,175.3 C231.2,176.4 231.0,177.3 230.8,178.4 C230.7,179.4 230.6,180.3 230.6,181.4 C230.5,182.6 230.6,184.5 230.5,185.3 C230.3,186.0 230.3,186.3 229.7,185.8 Z'/><path d='M240.6,169.8 C241.3,169.7 243.5,169.7 244.6,170.3 C245.8,170.8 246.8,172.0 247.7,173.1 C248.6,174.2 249.8,175.5 249.9,176.8 C250.0,178.1 248.7,180.2 248.3,180.9 C247.9,181.6 247.8,181.3 247.5,180.8 C247.1,180.3 246.6,178.6 246.1,177.7 C245.6,176.9 244.8,176.3 244.3,175.5 C243.7,174.7 243.5,173.8 242.8,173.0 C242.1,172.2 240.7,171.4 240.4,170.8 C240.0,170.3 239.9,169.9 240.6,169.8 Z'/><path d='M247.6,186.7 C247.5,187.4 246.8,189.1 246.0,190.1 C245.2,191.1 244.2,192.2 243.0,192.7 C241.9,193.2 240.3,193.4 239.1,193.1 C237.9,192.9 236.2,191.5 235.7,191.0 C235.1,190.5 235.3,190.6 235.8,190.3 C236.4,190.0 237.9,189.6 238.9,189.2 C239.8,188.9 240.5,188.5 241.4,188.1 C242.2,187.8 243.0,187.6 243.9,187.3 C244.8,187.0 246.4,186.3 247.0,186.2 C247.6,186.1 247.8,186.1 247.6,186.7 Z'/><path d='M266.0,169.3 C265.6,168.9 264.7,167.4 264.6,166.4 C264.5,165.4 264.9,164.2 265.3,163.2 C265.7,162.3 266.3,161.1 267.2,160.6 C268.0,160.0 269.7,159.8 270.3,159.7 C270.9,159.7 270.8,159.9 270.6,160.4 C270.3,160.8 269.4,161.7 269.0,162.4 C268.6,163.1 268.5,163.8 268.2,164.5 C267.9,165.2 267.4,165.8 267.1,166.5 C266.8,167.3 266.8,168.6 266.6,169.1 C266.4,169.6 266.3,169.8 266.0,169.3 Z'/><path d='M275.1,161.1 C275.5,161.1 276.7,161.3 277.4,161.7 C278.1,162.0 279.0,162.6 279.3,163.2 C279.7,163.9 279.8,164.9 279.7,165.7 C279.6,166.5 279.2,167.6 279.0,167.9 C278.8,168.3 278.6,168.2 278.5,167.8 C278.3,167.5 278.2,166.5 277.9,166.0 C277.7,165.5 277.1,165.2 276.8,164.7 C276.5,164.2 276.5,163.6 276.2,163.1 C275.9,162.6 275.1,162.0 274.9,161.6 C274.8,161.3 274.7,161.1 275.1,161.1 Z'/><path d='M276.9,173.1 C276.7,173.5 276.0,174.4 275.4,174.7 C274.9,174.9 274.1,174.9 273.4,174.9 C272.8,174.9 272.0,175.0 271.4,174.7 C270.8,174.5 270.1,173.6 269.9,173.2 C269.7,172.9 269.8,172.9 270.1,172.8 C270.5,172.7 271.4,172.7 271.9,172.6 C272.4,172.5 272.9,172.2 273.4,172.2 C273.8,172.2 274.3,172.5 274.9,172.6 C275.4,172.7 276.2,172.5 276.5,172.6 C276.9,172.6 277.1,172.8 276.9,173.1 Z'/><path d='M311.3,169.2 C310.1,169.4 307.8,166.4 307.3,164.3 C306.8,162.1 307.4,158.0 308.2,156.2 C309.1,154.4 311.1,153.3 312.4,153.4 C313.7,153.4 315.9,155.2 316.2,156.8 C316.5,158.4 315.0,160.9 314.2,162.9 C313.4,165.0 312.4,168.9 311.3,169.2 Z'/><path d='M321.7,167.4 C321.2,168.2 319.7,169.2 318.4,168.7 C317.2,168.1 314.7,165.4 314.2,164.1 C313.7,162.8 314.7,161.5 315.4,161.0 C316.1,160.5 317.5,160.3 318.5,160.9 C319.5,161.4 320.6,163.1 321.1,164.2 C321.7,165.3 322.1,166.7 321.7,167.4 Z'/><path d='M30.6,208.5 C31.3,208.6 33.4,209.3 34.4,210.2 C35.4,211.0 36.3,212.4 36.7,213.8 C37.0,215.1 37.0,216.7 36.5,218.0 C36.1,219.3 34.7,220.9 34.1,221.4 C33.5,221.9 33.3,221.5 33.1,220.9 C32.8,220.3 33.0,218.7 32.8,217.7 C32.5,216.7 31.9,216.0 31.6,215.1 C31.3,214.3 31.2,213.6 30.9,212.6 C30.6,211.7 30.0,210.1 29.9,209.4 C29.9,208.7 29.8,208.4 30.6,208.5 Z'/><path d='M28.0,226.4 C27.4,226.9 25.5,228.2 24.1,228.3 C22.8,228.5 21.2,227.9 19.9,227.4 C18.6,226.8 17.0,226.0 16.3,224.9 C15.5,223.7 15.4,221.3 15.4,220.6 C15.4,219.8 15.6,219.9 16.2,220.3 C16.8,220.6 18.0,221.9 18.9,222.4 C19.8,223.0 20.8,223.1 21.7,223.4 C22.6,223.7 23.3,223.9 24.3,224.3 C25.3,224.6 27.0,225.2 27.7,225.6 C28.3,225.9 28.5,226.0 28.0,226.4 Z'/><path d='M15.6,215.0 C15.5,214.5 15.3,213.2 15.4,212.4 C15.6,211.6 15.9,210.6 16.4,210.0 C16.9,209.3 17.8,208.8 18.6,208.5 C19.4,208.3 20.7,208.2 21.2,208.2 C21.6,208.3 21.6,208.4 21.4,208.9 C21.3,209.4 20.7,210.4 20.3,211.0 C19.9,211.5 19.5,211.8 19.1,212.3 C18.6,212.7 18.1,213.0 17.6,213.5 C17.1,214.0 16.5,214.9 16.1,215.1 C15.8,215.4 15.7,215.4 15.6,215.0 Z'/><path d='M64.9,225.5 C64.3,226.1 62.6,227.6 61.2,228.0 C59.8,228.5 57.8,228.6 56.4,228.1 C55.0,227.7 53.7,226.3 52.7,225.1 C51.8,223.9 50.9,222.4 50.7,221.0 C50.5,219.6 51.3,217.4 51.5,216.7 C51.8,216.0 51.8,216.3 52.2,216.8 C52.6,217.3 53.3,219.1 53.9,220.0 C54.5,220.9 54.9,221.7 55.6,222.3 C56.3,223.0 57.2,223.2 58.1,223.6 C58.9,224.0 59.8,224.6 60.8,224.8 C61.9,224.9 63.6,224.5 64.3,224.7 C65.0,224.8 65.4,225.0 64.9,225.5 Z'/><path d='M54.9,210.5 C55.5,209.9 57.1,208.3 58.5,207.9 C59.8,207.4 61.5,207.5 63.0,207.8 C64.5,208.1 66.2,208.7 67.4,209.7 C68.5,210.7 69.7,212.2 70.0,213.7 C70.3,215.1 69.5,217.5 69.3,218.2 C69.1,219.0 69.0,218.7 68.6,218.2 C68.2,217.7 67.4,216.0 66.8,215.1 C66.1,214.2 65.6,213.2 64.8,212.6 C64.0,212.1 62.9,212.1 61.9,211.8 C60.9,211.5 60.0,210.9 58.9,210.8 C57.8,210.6 56.0,211.0 55.3,211.0 C54.6,210.9 54.4,211.0 54.9,210.5 Z'/><path d='M117.3,222.4 C117.0,223.0 116.2,224.8 115.2,225.4 C114.2,226.1 112.7,226.3 111.4,226.2 C110.2,226.0 108.7,225.4 107.9,224.5 C107.2,223.7 106.9,221.6 106.8,221.0 C106.7,220.4 106.8,220.6 107.3,220.7 C107.8,220.9 109.1,221.5 109.9,221.8 C110.7,222.1 111.2,222.6 111.9,222.7 C112.6,222.8 113.3,222.7 114.1,222.6 C115.0,222.4 116.4,222.1 116.9,222.0 C117.4,222.0 117.6,221.8 117.3,222.4 Z'/><path d='M107.6,214.4 C107.8,213.9 108.5,212.4 109.3,211.8 C110.1,211.2 111.3,211.0 112.3,210.9 C113.4,210.8 114.8,210.7 115.6,211.3 C116.4,211.8 117.1,213.5 117.3,214.1 C117.5,214.7 117.2,214.6 116.7,214.6 C116.1,214.7 114.9,214.5 114.2,214.4 C113.5,214.2 113.0,213.7 112.4,213.7 C111.8,213.7 111.3,214.2 110.6,214.4 C109.9,214.6 108.6,214.8 108.1,214.8 C107.6,214.8 107.4,214.9 107.6,214.4 Z'/><path d='M176.1,247.3 C175.2,247.6 172.2,248.2 170.4,247.8 C168.5,247.3 166.6,246.0 165.2,244.6 C163.9,243.2 162.5,241.1 162.2,239.3 C162.0,237.4 163.2,234.4 163.6,233.5 C164.0,232.5 163.9,232.9 164.6,233.6 C165.2,234.3 166.6,236.5 167.4,237.7 C168.2,238.9 168.7,239.6 169.5,240.7 C170.2,241.7 170.8,243.1 171.9,244.0 C173.0,244.9 175.4,245.5 176.1,246.0 C176.8,246.6 177.1,247.0 176.1,247.3 Z'/><path d='M168.4,227.5 C168.7,226.8 169.9,224.6 171.0,223.8 C172.2,223.0 174.0,222.5 175.5,222.6 C176.9,222.6 178.6,223.2 179.8,224.0 C181.0,224.9 182.1,226.8 182.4,227.5 C182.8,228.3 182.4,228.3 181.8,228.3 C181.1,228.3 179.5,227.5 178.5,227.5 C177.4,227.4 176.4,227.9 175.5,228.1 C174.5,228.2 173.9,228.4 172.8,228.4 C171.8,228.4 169.8,228.3 169.0,228.2 C168.3,228.0 168.1,228.2 168.4,227.5 Z'/><path d='M186.2,233.9 C186.5,234.4 187.0,235.8 187.2,236.8 C187.4,237.8 187.5,239.1 187.2,240.1 C186.9,241.1 186.3,242.1 185.4,242.7 C184.6,243.3 182.8,243.6 182.1,243.7 C181.5,243.7 181.6,243.6 181.6,243.0 C181.7,242.5 182.2,241.3 182.5,240.5 C182.8,239.8 183.2,239.2 183.4,238.5 C183.6,237.8 183.6,237.1 183.9,236.4 C184.2,235.6 184.9,234.4 185.3,234.0 C185.7,233.6 185.9,233.5 186.2,233.9 Z'/><path d='M223.8,232.1 C222.8,232.3 220.9,233.0 220.2,231.8 C219.4,230.6 218.8,226.4 219.4,224.8 C220.0,223.3 222.4,223.1 223.8,222.4 C225.2,221.7 227.3,219.8 227.9,220.6 C228.5,221.4 227.8,225.4 227.5,227.1 C227.2,228.8 226.7,229.9 226.1,230.8 C225.4,231.6 224.7,231.9 223.8,232.1 Z'/><path d='M265.1,240.3 C264.6,239.9 264.2,239.1 264.3,238.2 C264.5,237.2 265.0,235.7 265.8,234.8 C266.6,233.9 268.5,232.5 269.4,232.6 C270.2,232.6 270.8,234.2 270.9,235.1 C271.0,236.1 270.5,237.4 269.9,238.3 C269.3,239.2 268.2,240.2 267.5,240.6 C266.7,240.9 265.7,240.7 265.1,240.3 Z'/><path d='M340.8,244.7 C339.9,244.5 338.8,245.0 338.5,244.4 C338.1,243.7 338.4,241.5 338.8,240.6 C339.2,239.8 340.1,239.3 340.7,239.1 C341.2,238.9 341.7,239.0 342.3,239.4 C342.9,239.7 344.1,240.2 344.3,241.2 C344.5,242.2 344.0,244.8 343.4,245.4 C342.8,246.0 341.6,244.9 340.8,244.7 Z'/><path d='M372.1,241.0 C371.5,240.8 369.5,240.1 368.8,239.2 C368.1,238.2 368.0,236.7 368.0,235.5 C368.0,234.3 368.3,232.9 368.9,231.9 C369.4,230.9 370.8,229.7 371.4,229.4 C371.9,229.0 372.0,229.3 372.0,229.9 C372.1,230.5 371.8,231.9 371.7,232.8 C371.7,233.7 371.6,234.4 371.7,235.2 C371.7,236.1 371.8,236.8 372.0,237.7 C372.2,238.5 372.7,239.9 372.7,240.5 C372.7,241.0 372.8,241.3 372.1,241.0 Z'/><path d='M376.1,225.1 C376.7,224.7 378.4,223.7 379.6,223.7 C380.8,223.6 382.1,224.4 383.2,225.0 C384.2,225.6 385.4,226.3 386.1,227.3 C386.7,228.2 387.0,230.2 387.1,230.8 C387.1,231.4 386.9,231.4 386.4,231.1 C385.8,230.9 384.8,229.8 384.0,229.3 C383.2,228.7 382.4,228.4 381.6,228.0 C380.8,227.7 380.0,227.4 379.2,227.1 C378.3,226.7 376.8,226.2 376.3,225.9 C375.8,225.6 375.5,225.5 376.1,225.1 Z'/><path d='M385.7,237.9 C385.9,238.4 386.1,239.6 385.8,240.3 C385.6,241.0 385.0,241.5 384.4,242.0 C383.9,242.5 383.5,243.4 382.8,243.5 C382.1,243.6 380.7,243.0 380.3,242.8 C379.8,242.5 379.9,242.4 380.0,242.0 C380.1,241.5 380.5,240.3 380.8,239.9 C381.2,239.5 381.7,239.6 382.1,239.3 C382.5,239.1 382.7,238.8 383.2,238.5 C383.6,238.2 384.4,237.7 384.8,237.6 C385.2,237.5 385.5,237.5 385.7,237.9 Z'/><path d='M0.9,273.8 C0.1,271.9 -0.3,268.5 0.8,266.9 C2.0,265.4 5.5,264.7 7.8,264.4 C10.1,264.1 13.3,264.1 14.7,265.3 C16.0,266.4 16.2,269.7 15.8,271.5 C15.3,273.4 13.8,275.3 12.1,276.5 C10.4,277.6 7.3,279.0 5.5,278.6 C3.6,278.1 1.7,275.8 0.9,273.8 Z'/><path d='M402.2,273.3 C401.5,271.6 400.3,268.4 401.3,267.2 C402.2,266.0 405.6,266.4 408.0,266.0 C410.3,265.6 413.8,263.9 415.2,264.8 C416.6,265.7 417.1,269.9 416.4,271.6 C415.7,273.3 412.9,274.0 411.1,275.1 C409.4,276.1 407.2,278.2 405.7,278.0 C404.2,277.7 403.0,275.1 402.2,273.3 Z'/><path d='M68.0,256.5 C68.0,256.0 68.0,254.3 68.5,253.5 C69.0,252.8 70.1,252.3 71.0,251.9 C71.9,251.5 73.1,251.2 74.0,251.4 C74.9,251.6 76.1,252.6 76.4,253.0 C76.8,253.4 76.6,253.4 76.2,253.5 C75.8,253.7 74.6,253.9 74.0,254.1 C73.3,254.3 72.7,254.4 72.1,254.6 C71.5,254.9 70.9,255.0 70.3,255.4 C69.7,255.7 69.0,256.6 68.6,256.8 C68.2,256.9 68.0,257.0 68.0,256.5 Z'/><path d='M80.6,255.4 C81.0,255.6 81.9,256.4 82.2,257.1 C82.6,257.8 83.0,258.7 82.9,259.5 C82.8,260.2 82.3,261.0 81.9,261.7 C81.4,262.3 80.6,263.1 80.2,263.3 C79.9,263.5 79.8,263.3 79.7,262.9 C79.6,262.6 79.5,261.5 79.5,260.9 C79.6,260.3 79.9,259.9 79.9,259.3 C79.9,258.8 79.5,258.4 79.6,257.8 C79.6,257.2 79.9,256.1 80.0,255.7 C80.2,255.3 80.3,255.1 80.6,255.4 Z'/><path d='M74.8,265.8 C74.5,266.0 73.7,266.8 73.1,266.8 C72.5,266.9 71.9,266.5 71.4,266.3 C70.9,266.0 70.3,265.8 69.9,265.4 C69.5,264.9 69.1,264.1 69.0,263.7 C69.0,263.4 69.1,263.4 69.4,263.4 C69.7,263.4 70.5,263.5 71.0,263.6 C71.5,263.7 71.8,263.8 72.2,264.0 C72.6,264.2 72.9,264.4 73.4,264.6 C73.8,264.9 74.5,265.1 74.7,265.3 C75.0,265.5 75.1,265.5 74.8,265.8 Z'/><path d='M208.9,270.0 C208.2,269.5 206.2,267.9 205.8,266.5 C205.4,265.2 206.1,263.5 206.4,262.1 C206.8,260.6 206.9,258.7 207.8,257.7 C208.8,256.7 211.5,256.4 212.4,256.2 C213.2,256.1 213.0,256.3 212.9,257.1 C212.9,257.8 212.3,259.6 211.9,260.6 C211.6,261.6 210.8,262.2 210.7,263.1 C210.5,264.0 211.1,264.9 210.9,265.9 C210.8,267.0 210.1,268.9 209.7,269.6 C209.4,270.2 209.5,270.5 208.9,270.0 Z'/><path d='M220.3,255.7 C220.9,255.6 222.5,255.4 223.5,255.7 C224.5,256.0 225.5,256.7 226.3,257.5 C227.1,258.2 227.9,259.2 228.2,260.2 C228.4,261.2 227.9,262.9 227.8,263.5 C227.6,264.1 227.6,263.9 227.1,263.6 C226.6,263.4 225.3,262.5 224.7,261.9 C224.1,261.3 224.0,260.6 223.5,260.1 C223.0,259.7 222.3,259.6 221.7,259.0 C221.2,258.4 220.4,257.0 220.2,256.4 C219.9,255.9 219.8,255.8 220.3,255.7 Z'/><path d='M226.8,268.6 C226.8,269.2 226.6,271.0 226.1,271.9 C225.5,272.8 224.5,273.5 223.6,274.1 C222.6,274.7 221.5,275.5 220.4,275.5 C219.4,275.5 217.7,274.5 217.2,274.2 C216.7,273.9 216.8,273.9 217.3,273.5 C217.7,273.2 219.0,272.5 219.8,272.2 C220.6,271.8 221.3,271.8 222.0,271.4 C222.7,271.1 223.4,270.7 224.1,270.2 C224.8,269.6 225.8,268.6 226.2,268.4 C226.7,268.1 226.8,268.0 226.8,268.6 Z'/><path d='M289.7,280.6 C289.0,281.0 286.7,281.6 285.1,281.5 C283.5,281.5 281.4,281.2 280.1,280.3 C278.8,279.3 277.7,277.6 277.2,276.1 C276.8,274.5 277.3,271.9 277.6,271.0 C277.8,270.1 278.1,270.4 278.7,270.8 C279.4,271.2 280.6,272.8 281.5,273.6 C282.3,274.3 283.2,274.8 284.0,275.4 C284.9,276.0 285.6,276.3 286.6,276.9 C287.5,277.6 289.1,278.8 289.7,279.5 C290.2,280.1 290.5,280.3 289.7,280.6 Z'/><path d='M278.6,265.1 C278.6,264.3 278.6,262.2 279.1,261.0 C279.6,259.8 280.6,258.5 281.8,257.8 C282.9,257.1 284.4,256.7 285.8,256.7 C287.1,256.7 289.0,257.5 289.7,257.8 C290.3,258.1 290.1,258.2 289.6,258.7 C289.2,259.2 287.7,260.3 286.9,260.9 C286.0,261.4 285.4,261.7 284.6,262.1 C283.8,262.5 283.0,262.9 282.2,263.5 C281.3,264.0 280.0,265.1 279.4,265.4 C278.8,265.6 278.7,265.8 278.6,265.1 Z'/><path d='M294.7,261.1 C295.2,261.2 296.5,261.7 297.3,262.3 C298.1,262.8 299.1,263.6 299.6,264.4 C300.0,265.3 300.4,266.5 300.2,267.5 C300.1,268.4 299.0,269.9 298.6,270.3 C298.2,270.8 298.2,270.6 297.8,270.2 C297.4,269.8 296.6,268.7 296.3,268.0 C295.9,267.3 296.1,266.7 295.8,266.1 C295.5,265.5 294.8,265.3 294.6,264.5 C294.3,263.8 294.1,262.4 294.1,261.8 C294.2,261.2 294.1,261.0 294.7,261.1 Z'/><path d='M40.6,318.4 C40.2,319.5 39.2,323.0 37.6,324.5 C36.0,326.0 33.3,327.0 31.0,327.2 C28.7,327.4 26.0,326.8 23.9,325.8 C21.9,324.8 19.5,323.0 18.5,321.1 C17.5,319.2 17.9,315.4 18.0,314.3 C18.1,313.1 18.3,313.4 18.9,314.2 C19.6,314.9 20.7,317.5 21.9,318.7 C23.0,320.0 24.5,321.0 26.0,321.4 C27.4,321.9 29.0,321.5 30.5,321.5 C32.1,321.4 33.9,321.8 35.4,321.2 C36.9,320.6 38.8,318.4 39.6,317.9 C40.5,317.4 40.9,317.3 40.6,318.4 Z'/><path d='M21.6,306.9 C22.0,306.0 23.3,303.1 24.8,302.1 C26.2,301.2 28.6,300.9 30.5,301.1 C32.3,301.3 34.3,302.2 35.7,303.3 C37.1,304.4 38.4,306.9 38.7,307.7 C39.1,308.5 38.9,308.3 38.0,308.1 C37.2,307.9 35.2,306.9 33.9,306.4 C32.6,305.9 31.5,305.2 30.3,305.0 C29.0,304.9 27.6,305.0 26.3,305.4 C24.9,305.8 23.1,307.1 22.3,307.3 C21.5,307.6 21.2,307.7 21.6,306.9 Z'/><path d='M89.6,317.2 C89.1,317.4 87.2,317.7 86.1,317.4 C85.0,317.1 83.9,316.4 82.9,315.5 C81.9,314.7 80.7,313.6 80.4,312.5 C80.0,311.3 80.3,309.7 80.8,308.5 C81.3,307.4 82.6,306.0 83.1,305.6 C83.6,305.2 83.6,305.5 83.8,306.1 C83.9,306.7 83.8,308.2 83.9,309.1 C84.0,309.9 84.0,310.6 84.2,311.3 C84.4,312.1 84.6,313.0 85.1,313.5 C85.6,314.1 86.4,314.2 87.2,314.7 C87.9,315.2 89.2,316.0 89.6,316.4 C90.0,316.9 90.2,317.0 89.6,317.2 Z'/><path d='M87.1,301.3 C87.8,301.1 90.0,300.4 91.4,300.5 C92.9,300.7 94.6,301.4 95.7,302.4 C96.8,303.3 97.8,305.0 98.1,306.4 C98.4,307.8 97.9,310.1 97.8,310.8 C97.6,311.5 97.5,311.3 97.2,310.7 C96.9,310.1 96.5,308.2 95.9,307.2 C95.4,306.2 94.6,305.3 93.8,304.6 C92.9,303.9 91.9,303.4 90.8,302.9 C89.7,302.5 87.8,302.1 87.2,301.8 C86.6,301.5 86.4,301.5 87.1,301.3 Z'/><path d='M145.4,320.9 C144.3,320.9 142.5,318.3 141.9,316.8 C141.3,315.3 141.5,313.1 141.8,311.9 C142.1,310.6 142.9,309.5 143.6,309.3 C144.4,309.2 145.5,309.8 146.3,311.0 C147.1,312.2 148.7,315.0 148.6,316.6 C148.4,318.3 146.6,320.9 145.4,320.9 Z'/><path d='M143.2,318.8 C142.7,319.5 140.8,319.2 139.6,319.3 C138.5,319.4 136.8,319.8 136.3,319.3 C135.7,318.7 136.1,316.8 136.6,315.9 C137.0,315.0 137.9,314.2 138.9,314.0 C139.9,313.8 141.8,314.1 142.5,314.9 C143.2,315.7 143.6,318.1 143.2,318.8 Z'/><path d='M216.6,327.5 C216.0,326.1 217.0,322.9 218.5,321.4 C220.0,320.0 223.2,319.0 225.6,318.8 C228.0,318.7 231.7,319.2 233.0,320.5 C234.3,321.8 234.1,325.0 233.3,326.8 C232.6,328.7 230.3,331.1 228.4,331.6 C226.6,332.2 224.2,330.8 222.3,330.1 C220.3,329.4 217.2,329.0 216.6,327.5 Z'/><path d='M263.4,334.4 C263.0,333.8 262.0,331.7 261.9,330.2 C261.8,328.7 262.3,326.9 263.1,325.5 C263.9,324.2 265.2,322.7 266.6,322.0 C268.0,321.2 270.1,320.8 271.6,321.1 C273.1,321.5 274.9,323.3 275.5,323.9 C276.1,324.5 275.7,324.7 275.0,324.8 C274.4,325.0 272.6,324.6 271.5,324.8 C270.5,325.1 269.6,325.7 268.8,326.2 C267.9,326.7 266.9,327.1 266.4,327.9 C265.9,328.6 266.1,329.7 265.8,330.7 C265.5,331.8 264.8,333.5 264.4,334.1 C264.0,334.7 263.9,335.1 263.4,334.4 Z'/><path d='M280.0,330.3 C280.1,331.0 280.8,333.1 280.5,334.4 C280.3,335.7 279.4,337.0 278.4,338.0 C277.5,339.1 276.3,340.1 275.0,340.6 C273.7,341.2 272.0,341.5 270.7,341.2 C269.5,340.9 267.8,339.3 267.3,338.8 C266.7,338.4 267.0,338.3 267.6,338.3 C268.2,338.2 269.9,338.6 270.9,338.6 C272.0,338.5 273.0,338.2 273.9,337.8 C274.9,337.4 275.9,337.0 276.6,336.3 C277.3,335.6 277.6,334.6 278.1,333.6 C278.6,332.6 279.1,331.0 279.4,330.4 C279.7,329.9 279.8,329.7 280.0,330.3 Z'/><path d='M330.6,314.2 C330.6,315.6 327.6,318.0 325.9,318.2 C324.2,318.3 321.8,316.1 320.3,315.1 C318.8,314.2 317.6,313.6 317.0,312.3 C316.3,311.0 315.6,308.2 316.5,307.5 C317.4,306.8 320.8,307.8 322.4,308.3 C323.9,308.7 324.5,309.0 325.8,310.0 C327.2,310.9 330.6,312.8 330.6,314.2 Z'/><path d='M380.4,333.4 C380.0,334.0 378.5,334.8 377.8,334.7 C377.1,334.7 376.3,333.5 375.9,332.9 C375.5,332.2 375.1,331.1 375.4,330.6 C375.7,330.0 376.9,329.7 377.6,329.7 C378.3,329.7 379.2,330.1 379.7,330.7 C380.2,331.4 380.7,332.7 380.4,333.4 Z'/><path d='M376.3,329.7 C375.7,329.5 374.4,328.7 374.3,328.1 C374.3,327.5 375.6,326.6 376.3,326.2 C376.9,325.8 377.6,325.4 378.2,325.6 C378.8,325.8 379.9,326.7 379.9,327.3 C379.9,327.8 378.7,328.6 378.1,329.0 C377.5,329.4 377.0,329.8 376.3,329.7 Z'/><path d='M20.4,-3.9 C19.6,-3.3 17.0,-1.4 15.2,-1.3 C13.5,-1.2 11.3,-2.2 9.7,-3.3 C8.2,-4.4 6.6,-6.2 6.0,-7.9 C5.4,-9.6 6.0,-12.5 6.3,-13.5 C6.5,-14.5 7.0,-14.1 7.6,-13.6 C8.3,-13.0 9.1,-11.1 10.0,-10.2 C11.0,-9.3 12.0,-8.7 13.1,-8.3 C14.1,-7.8 15.0,-7.9 16.1,-7.4 C17.3,-6.8 19.4,-5.6 20.1,-5.1 C20.8,-4.5 21.2,-4.6 20.4,-3.9 Z'/><path d='M8.4,-22.9 C8.8,-23.8 10.0,-26.5 11.4,-27.5 C12.7,-28.4 14.9,-28.7 16.7,-28.7 C18.4,-28.8 20.5,-28.4 21.9,-27.6 C23.4,-26.7 24.9,-24.3 25.3,-23.5 C25.8,-22.6 25.5,-22.8 24.6,-22.7 C23.8,-22.6 21.6,-22.8 20.3,-23.0 C19.0,-23.1 18.0,-23.7 16.8,-23.7 C15.7,-23.7 14.6,-23.2 13.3,-22.9 C12.1,-22.7 10.0,-22.1 9.2,-22.1 C8.4,-22.1 8.0,-22.0 8.4,-22.9 Z'/><path d='M28.3,-16.1 C28.6,-15.5 29.6,-13.8 29.6,-12.6 C29.7,-11.4 29.2,-10.0 28.7,-8.9 C28.2,-7.8 27.4,-6.6 26.5,-5.9 C25.5,-5.2 23.6,-4.7 22.9,-4.6 C22.3,-4.5 22.4,-4.6 22.6,-5.2 C22.8,-5.8 23.6,-7.2 24.1,-8.0 C24.5,-8.9 24.8,-9.7 25.2,-10.5 C25.6,-11.4 25.9,-12.1 26.3,-13.0 C26.7,-13.9 27.4,-15.5 27.7,-16.0 C28.0,-16.5 28.0,-16.7 28.3,-16.1 Z'/><path d='M20.4,396.0 C19.6,396.5 17.1,398.2 15.3,398.3 C13.5,398.5 11.3,397.7 9.7,396.7 C8.2,395.7 6.5,393.9 6.0,392.2 C5.4,390.5 6.2,387.4 6.4,386.5 C6.7,385.5 6.7,385.9 7.4,386.4 C8.2,386.9 9.9,388.5 10.8,389.4 C11.7,390.3 12.0,391.4 12.9,392.0 C13.7,392.7 14.9,392.6 16.1,393.1 C17.3,393.6 19.4,394.5 20.1,395.0 C20.8,395.5 21.2,395.4 20.4,396.0 Z'/><path d='M8.4,377.1 C8.7,376.2 10.1,373.8 11.5,372.8 C12.9,371.9 14.9,371.3 16.7,371.3 C18.4,371.3 20.3,372.0 21.8,372.9 C23.2,373.8 24.9,375.8 25.3,376.5 C25.8,377.3 25.4,377.3 24.5,377.4 C23.7,377.5 21.5,377.3 20.3,377.1 C19.0,376.9 18.0,376.4 16.8,376.4 C15.7,376.4 14.7,376.9 13.4,377.1 C12.1,377.4 10.0,377.9 9.2,377.9 C8.3,377.9 8.0,377.9 8.4,377.1 Z'/><path d='M28.4,383.9 C28.7,384.5 29.7,386.3 29.7,387.4 C29.7,388.6 29.1,389.9 28.6,391.0 C28.1,392.2 27.6,393.6 26.7,394.3 C25.8,395.1 23.7,395.4 23.0,395.5 C22.3,395.5 22.3,395.3 22.5,394.7 C22.7,394.2 23.6,392.8 24.1,392.0 C24.6,391.1 25.2,390.5 25.5,389.6 C25.8,388.8 25.6,387.9 26.0,386.9 C26.3,386.0 27.1,384.5 27.5,384.0 C27.9,383.5 28.0,383.3 28.4,383.9 Z'/><path d='M420.4,-4.0 C419.6,-3.6 417.2,-2.4 415.4,-2.2 C413.5,-2.0 410.9,-1.8 409.3,-2.8 C407.8,-3.7 406.5,-6.1 406.0,-7.9 C405.5,-9.7 406.1,-12.6 406.4,-13.5 C406.6,-14.5 407.0,-14.1 407.7,-13.6 C408.3,-13.1 409.6,-11.4 410.5,-10.4 C411.4,-9.5 411.9,-8.6 412.9,-8.0 C413.8,-7.4 414.9,-7.4 416.1,-6.9 C417.3,-6.4 419.4,-5.4 420.1,-5.0 C420.8,-4.5 421.2,-4.5 420.4,-4.0 Z'/><path d='M408.3,-22.9 C408.7,-23.8 410.1,-26.2 411.5,-27.1 C412.9,-28.0 414.9,-28.5 416.7,-28.6 C418.4,-28.6 420.5,-28.3 421.9,-27.5 C423.3,-26.6 424.8,-24.2 425.3,-23.4 C425.7,-22.6 425.4,-22.7 424.5,-22.6 C423.7,-22.5 421.6,-22.8 420.3,-22.9 C419.0,-23.1 418.0,-23.7 416.8,-23.6 C415.7,-23.5 414.8,-22.7 413.6,-22.4 C412.3,-22.2 410.1,-22.0 409.2,-22.1 C408.3,-22.2 408.0,-22.1 408.3,-22.9 Z'/><path d='M428.3,-16.1 C428.7,-15.5 429.7,-13.8 429.8,-12.5 C430.0,-11.3 429.8,-9.8 429.2,-8.7 C428.6,-7.6 427.3,-6.8 426.3,-6.1 C425.2,-5.4 423.6,-4.6 423.0,-4.5 C422.4,-4.3 422.4,-4.6 422.5,-5.3 C422.7,-5.9 423.4,-7.4 423.8,-8.3 C424.2,-9.2 424.6,-9.9 424.9,-10.7 C425.3,-11.5 425.6,-12.2 426.0,-13.1 C426.5,-14.0 427.3,-15.5 427.7,-16.0 C428.1,-16.5 428.0,-16.7 428.3,-16.1 Z'/><path d='M420.4,395.9 C419.6,396.4 417.1,398.0 415.3,398.0 C413.6,398.1 411.5,397.4 409.9,396.4 C408.3,395.4 406.5,393.8 405.9,392.2 C405.3,390.5 406.1,387.5 406.4,386.5 C406.6,385.5 406.8,385.9 407.5,386.4 C408.3,386.9 409.9,388.4 410.8,389.4 C411.6,390.4 411.8,391.7 412.7,392.3 C413.6,392.8 414.9,392.3 416.1,392.7 C417.4,393.2 419.3,394.3 420.0,394.9 C420.7,395.4 421.2,395.4 420.4,395.9 Z'/><path d='M408.5,377.2 C408.9,376.5 410.4,374.3 411.7,373.4 C413.1,372.5 415.0,372.0 416.7,371.9 C418.4,371.7 420.5,371.6 422.0,372.4 C423.4,373.2 424.9,375.7 425.3,376.5 C425.8,377.3 425.4,377.3 424.6,377.3 C423.8,377.3 421.7,376.7 420.4,376.6 C419.2,376.5 418.0,376.5 416.9,376.6 C415.7,376.7 414.7,377.0 413.4,377.2 C412.1,377.4 410.0,377.9 409.2,377.9 C408.4,377.9 408.1,378.0 408.5,377.2 Z'/><path d='M428.4,383.9 C428.8,384.4 429.8,386.3 429.8,387.5 C429.9,388.7 429.2,390.0 428.7,391.1 C428.1,392.2 427.6,393.5 426.6,394.3 C425.7,395.0 423.6,395.4 423.0,395.5 C422.3,395.6 422.4,395.4 422.6,394.8 C422.8,394.3 423.8,393.0 424.3,392.2 C424.9,391.3 425.4,390.6 425.7,389.7 C426.1,388.8 426.1,387.9 426.4,387.0 C426.7,386.0 427.3,384.5 427.6,384.0 C428.0,383.5 428.1,383.3 428.4,383.9 Z'/><path d='M91.3,357.4 C91.8,358.6 93.2,362.6 92.5,364.7 C91.8,366.8 89.4,368.9 87.3,370.2 C85.3,371.5 82.5,372.6 80.3,372.4 C78.1,372.2 75.1,369.8 74.1,369.0 C73.2,368.2 73.7,368.3 74.7,367.8 C75.7,367.4 78.5,367.0 79.9,366.5 C81.4,365.9 82.2,365.1 83.4,364.4 C84.6,363.7 86.3,363.4 87.3,362.2 C88.4,361.1 89.1,358.4 89.8,357.6 C90.4,356.8 90.9,356.2 91.3,357.4 Z'/><path d='M66.9,361.0 C66.5,360.0 65.5,357.1 65.6,355.1 C65.7,353.1 66.2,350.4 67.5,348.9 C68.7,347.3 71.2,346.2 73.1,345.7 C75.1,345.2 78.1,345.5 79.1,345.7 C80.2,345.9 79.8,346.3 79.2,347.0 C78.5,347.7 76.3,349.0 75.2,350.0 C74.1,351.0 73.5,352.0 72.6,353.0 C71.7,354.1 70.6,354.8 69.9,356.1 C69.1,357.4 68.4,359.9 67.9,360.8 C67.4,361.6 67.3,361.9 66.9,361.0 Z'/><path d='M119.8,-6.1 C119.4,-5.6 117.3,-5.8 116.3,-6.4 C115.3,-6.9 114.4,-8.5 113.7,-9.5 C112.9,-10.5 111.7,-11.8 111.7,-12.5 C111.7,-13.2 112.8,-13.7 113.6,-13.7 C114.4,-13.6 115.5,-12.8 116.3,-12.2 C117.2,-11.5 118.2,-10.8 118.8,-9.8 C119.4,-8.8 120.2,-6.7 119.8,-6.1 Z'/><path d='M119.0,393.0 C118.4,393.6 117.4,393.9 116.3,393.6 C115.2,393.3 112.9,392.1 112.3,391.1 C111.7,390.2 112.4,389.0 112.4,387.9 C112.5,386.8 111.9,384.7 112.6,384.6 C113.2,384.5 115.4,386.5 116.5,387.4 C117.7,388.4 119.0,389.4 119.5,390.3 C119.9,391.3 119.5,392.5 119.0,393.0 Z'/><path d='M173.0,-14.0 C173.1,-14.6 173.7,-16.5 174.5,-17.2 C175.3,-17.8 176.7,-17.7 177.8,-17.6 C178.9,-17.6 180.2,-17.5 181.1,-17.0 C182.1,-16.6 183.2,-15.8 183.7,-14.9 C184.2,-14.0 184.1,-12.2 184.1,-11.6 C184.0,-11.1 183.7,-11.2 183.2,-11.4 C182.8,-11.6 182.1,-12.6 181.5,-13.0 C180.9,-13.4 180.2,-13.6 179.6,-13.7 C179.0,-13.9 178.5,-14.0 177.9,-14.1 C177.2,-14.2 176.6,-14.2 175.9,-14.1 C175.2,-14.0 174.0,-13.6 173.6,-13.5 C173.1,-13.5 172.8,-13.4 173.0,-14.0 Z'/><path d='M183.0,-5.3 C182.6,-4.9 181.5,-3.5 180.5,-3.0 C179.5,-2.4 178.1,-1.9 177.0,-2.0 C175.8,-2.0 174.4,-2.7 173.6,-3.5 C172.7,-4.2 172.1,-6.1 171.9,-6.6 C171.7,-7.2 171.9,-7.1 172.4,-6.9 C172.8,-6.6 173.9,-5.5 174.7,-5.2 C175.5,-4.9 176.5,-4.9 177.3,-4.9 C178.1,-4.9 178.9,-4.8 179.8,-4.9 C180.6,-5.1 182.0,-5.6 182.6,-5.7 C183.1,-5.8 183.3,-5.8 183.0,-5.3 Z'/><path d='M173.0,386.0 C173.2,385.5 173.9,383.8 174.7,383.3 C175.5,382.7 176.7,382.7 177.8,382.6 C178.9,382.5 180.3,382.3 181.3,382.7 C182.2,383.2 183.1,384.3 183.6,385.2 C184.0,386.2 184.1,387.8 184.0,388.4 C184.0,388.9 183.7,388.8 183.2,388.6 C182.7,388.4 181.6,387.8 181.1,387.3 C180.5,386.9 180.3,386.2 179.8,385.9 C179.2,385.6 178.5,385.7 177.9,385.7 C177.2,385.8 176.8,386.2 176.1,386.3 C175.4,386.4 174.0,386.5 173.5,386.4 C173.0,386.4 172.8,386.6 173.0,386.0 Z'/><path d='M182.9,394.6 C182.6,395.1 181.5,396.5 180.5,397.0 C179.5,397.6 178.1,398.1 177.0,398.0 C175.8,397.9 174.6,397.1 173.7,396.3 C172.9,395.6 172.1,393.9 171.9,393.4 C171.6,392.9 171.8,393.0 172.3,393.2 C172.8,393.4 174.0,394.3 174.8,394.7 C175.6,395.1 176.4,395.5 177.2,395.6 C178.1,395.7 178.9,395.3 179.8,395.1 C180.7,394.9 182.0,394.4 182.5,394.3 C183.1,394.2 183.3,394.2 182.9,394.6 Z'/><path d='M208.1,361.9 C208.3,361.0 209.0,358.3 210.2,357.1 C211.3,355.8 213.1,354.7 214.8,354.2 C216.4,353.8 218.6,353.6 220.2,354.2 C221.8,354.7 223.7,356.9 224.3,357.7 C224.8,358.4 224.5,358.3 223.7,358.6 C222.9,358.8 220.7,359.0 219.5,359.2 C218.2,359.4 217.3,359.6 216.2,359.9 C215.1,360.1 214.0,360.1 212.8,360.5 C211.7,361.0 210.0,362.3 209.2,362.5 C208.4,362.7 208.0,362.8 208.1,361.9 Z'/><path d='M230.1,365.5 C230.5,366.4 231.9,369.0 231.9,370.7 C231.8,372.4 230.7,374.2 229.7,375.7 C228.7,377.2 227.3,378.8 225.7,379.5 C224.1,380.1 221.2,379.7 220.2,379.6 C219.3,379.4 219.5,379.2 220.1,378.6 C220.6,378.0 222.5,376.8 223.5,375.9 C224.5,375.1 225.5,374.2 226.2,373.2 C226.8,372.1 226.9,370.9 227.4,369.6 C228.0,368.4 228.9,366.4 229.4,365.7 C229.8,365.0 229.7,364.7 230.1,365.5 Z'/><path d='M213.2,380.1 C212.5,380.2 210.8,380.0 209.6,379.7 C208.5,379.4 207.1,378.9 206.4,378.1 C205.6,377.2 205.3,375.8 205.1,374.6 C204.9,373.4 205.0,371.7 205.1,371.1 C205.3,370.5 205.6,370.5 206.1,370.8 C206.6,371.1 207.6,372.3 208.3,372.9 C209.0,373.5 209.8,373.8 210.4,374.5 C210.9,375.1 211.1,376.0 211.7,376.8 C212.2,377.6 213.3,378.7 213.5,379.2 C213.8,379.8 213.8,380.0 213.2,380.1 Z'/><path d='M295.9,379.3 C296.4,380.0 297.4,382.3 297.3,383.7 C297.2,385.2 296.2,386.7 295.2,387.9 C294.3,389.0 293.0,390.3 291.6,390.7 C290.2,391.2 287.8,390.6 287.0,390.4 C286.2,390.1 286.4,389.9 286.8,389.3 C287.1,388.6 288.3,387.3 289.1,386.5 C289.9,385.8 290.8,385.5 291.3,384.8 C291.9,384.1 291.9,383.1 292.4,382.2 C293.0,381.3 294.2,379.8 294.7,379.3 C295.3,378.8 295.5,378.5 295.9,379.3 Z'/><path d='M278.7,388.6 C278.0,388.4 276.2,387.7 275.2,386.9 C274.2,386.0 273.2,384.8 272.8,383.5 C272.4,382.3 272.1,380.7 272.5,379.4 C272.9,378.2 274.5,376.6 275.1,376.1 C275.7,375.6 275.7,375.9 276.1,376.5 C276.4,377.1 277.0,378.7 277.2,379.6 C277.4,380.6 277.2,381.4 277.4,382.2 C277.6,383.0 278.2,383.6 278.5,384.6 C278.8,385.5 279.3,387.1 279.4,387.7 C279.4,388.4 279.4,388.7 278.7,388.6 Z'/><path d='M278.7,371.6 C278.9,371.1 279.8,369.6 280.6,369.0 C281.4,368.4 282.6,368.1 283.6,368.0 C284.6,367.9 285.8,368.1 286.7,368.5 C287.7,368.8 288.9,369.7 289.3,370.1 C289.7,370.4 289.6,370.4 289.1,370.6 C288.6,370.8 287.2,371.0 286.4,371.0 C285.5,371.1 284.7,370.7 284.0,370.8 C283.2,370.9 282.5,371.4 281.7,371.6 C280.9,371.8 279.5,372.0 279.0,372.0 C278.5,372.0 278.4,372.1 278.7,371.6 Z'/><path d='M328.2,383.2 C327.3,383.5 325.6,382.8 324.8,381.8 C323.9,380.8 322.9,378.5 323.0,377.2 C323.2,375.9 324.6,374.0 325.5,373.9 C326.4,373.9 327.5,376.0 328.2,377.0 C328.9,378.0 329.8,379.0 329.8,380.0 C329.8,381.0 329.0,382.9 328.2,383.2 Z'/><path d='M319.3,374.8 C319.1,373.7 319.6,372.1 320.4,371.3 C321.3,370.5 323.7,369.6 324.7,369.9 C325.6,370.2 325.9,372.1 326.0,373.1 C326.2,374.1 326.3,375.2 325.6,375.9 C324.9,376.7 322.8,377.9 321.8,377.7 C320.7,377.5 319.5,375.8 319.3,374.8 Z'/><path d='M-14.1,366.4 C-14.8,366.2 -17.0,365.5 -18.1,364.5 C-19.1,363.5 -20.3,361.9 -20.5,360.5 C-20.7,359.0 -20.2,357.1 -19.5,355.9 C-18.7,354.6 -16.7,353.4 -16.0,353.0 C-15.4,352.7 -15.5,352.9 -15.6,353.6 C-15.8,354.2 -16.6,355.8 -16.9,356.9 C-17.2,357.9 -17.3,359.0 -17.2,360.0 C-17.0,361.0 -16.5,362.0 -16.0,362.9 C-15.4,363.9 -14.1,365.1 -13.8,365.7 C-13.5,366.3 -13.4,366.6 -14.1,366.4 Z'/><path d='M-9.4,351.0 C-8.7,350.9 -6.7,350.8 -5.7,351.3 C-4.6,351.8 -3.6,352.9 -3.0,354.0 C-2.3,355.0 -1.8,356.4 -1.8,357.6 C-1.8,358.7 -2.7,360.5 -2.9,361.0 C-3.2,361.6 -3.2,361.4 -3.4,360.9 C-3.7,360.4 -4.1,358.9 -4.3,358.0 C-4.6,357.1 -4.7,356.2 -5.2,355.4 C-5.7,354.7 -6.5,354.2 -7.2,353.6 C-7.9,352.9 -9.1,351.9 -9.5,351.5 C-9.8,351.1 -10.0,351.0 -9.4,351.0 Z'/><path d='M385.9,366.4 C385.1,366.2 382.5,365.8 381.5,364.9 C380.5,363.9 380.0,361.9 379.8,360.4 C379.7,358.9 379.8,357.1 380.5,355.8 C381.2,354.6 383.4,353.5 384.0,353.1 C384.7,352.7 384.5,352.9 384.4,353.6 C384.3,354.2 383.9,356.0 383.7,357.1 C383.4,358.2 382.8,359.1 382.9,360.0 C383.0,360.9 383.8,361.7 384.4,362.7 C384.9,363.6 385.9,365.1 386.2,365.7 C386.4,366.3 386.6,366.5 385.9,366.4 Z'/><path d='M390.6,351.0 C391.2,351.0 393.1,351.0 394.2,351.5 C395.3,352.0 396.4,352.9 397.1,353.9 C397.8,354.9 398.3,356.4 398.3,357.5 C398.3,358.7 397.4,360.5 397.1,361.0 C396.8,361.6 396.8,361.4 396.5,360.9 C396.3,360.4 396.1,358.9 395.7,358.0 C395.4,357.1 394.8,356.5 394.4,355.7 C393.9,354.9 393.6,354.0 392.9,353.3 C392.3,352.6 390.9,351.9 390.5,351.5 C390.1,351.1 390.0,351.0 390.6,351.0 Z'/><path d='M164.3,158.6 C163.7,158.3 162.9,157.1 162.9,156.6 C163.0,156.1 164.1,155.6 164.8,155.5 C165.4,155.4 166.6,155.5 167.0,156.0 C167.3,156.5 167.1,158.0 166.7,158.4 C166.2,158.9 164.9,158.9 164.3,158.6 Z'/><path d='M298.0,93.1 C297.5,93.9 296.3,94.3 295.5,94.2 C294.6,94.0 293.2,93.1 293.0,92.2 C292.7,91.3 293.1,89.2 294.0,88.7 C295.0,88.3 297.8,88.8 298.5,89.5 C299.1,90.3 298.5,92.4 298.0,93.1 Z'/><path d='M7.0,67.4 C6.2,67.7 4.2,66.6 3.6,65.8 C3.0,65.0 2.9,63.4 3.4,62.5 C3.9,61.5 5.9,60.0 6.7,60.3 C7.5,60.5 8.3,62.8 8.4,64.0 C8.4,65.2 7.8,67.1 7.0,67.4 Z'/><path d='M406.9,67.2 C406.0,67.6 403.6,67.0 403.0,66.2 C402.5,65.4 402.9,63.5 403.5,62.5 C404.1,61.5 405.9,60.0 406.7,60.3 C407.5,60.5 408.3,62.8 408.3,64.0 C408.4,65.1 407.8,66.8 406.9,67.2 Z'/><path d='M127.1,253.1 C126.7,253.5 125.0,253.1 124.3,252.6 C123.6,252.1 122.8,250.8 122.8,250.1 C122.7,249.5 123.3,248.8 124.0,248.8 C124.6,248.9 126.2,249.6 126.7,250.3 C127.2,251.0 127.5,252.7 127.1,253.1 Z'/><path d='M139.7,159.2 C139.0,159.5 137.6,158.6 137.2,158.0 C136.7,157.5 136.5,156.5 136.8,156.0 C137.2,155.6 138.6,155.3 139.4,155.3 C140.1,155.4 141.3,155.8 141.3,156.5 C141.4,157.1 140.4,158.9 139.7,159.2 Z'/><path d='M279.7,228.7 C279.4,229.5 277.1,230.0 275.9,229.8 C274.7,229.6 272.8,228.3 272.5,227.5 C272.3,226.7 273.5,225.3 274.4,225.0 C275.3,224.6 276.8,224.8 277.7,225.5 C278.6,226.1 280.0,228.0 279.7,228.7 Z'/><path d='M177.6,4.7 C177.6,4.2 178.6,3.3 179.6,3.1 C180.6,2.8 182.8,2.6 183.5,3.0 C184.2,3.4 184.4,5.0 183.8,5.5 C183.2,6.0 180.8,6.2 179.8,6.0 C178.7,5.9 177.6,5.2 177.6,4.7 Z'/><path d='M176.6,404.8 C176.6,404.2 178.3,403.3 179.5,403.0 C180.7,402.7 183.0,402.5 183.7,402.9 C184.4,403.4 184.3,404.9 183.7,405.4 C183.0,406.0 180.9,406.4 179.7,406.3 C178.5,406.1 176.6,405.3 176.6,404.8 Z'/><path d='M89.2,206.4 C88.3,206.1 86.8,204.2 86.8,203.3 C86.8,202.4 88.3,201.4 89.4,201.1 C90.4,200.7 92.5,200.6 93.0,201.2 C93.5,201.9 92.9,203.9 92.3,204.8 C91.7,205.6 90.1,206.6 89.2,206.4 Z'/><path d='M353.9,128.1 C353.9,128.6 353.5,130.0 352.9,130.1 C352.3,130.2 350.5,129.5 350.2,128.9 C349.8,128.3 350.4,126.8 350.8,126.5 C351.3,126.1 352.5,126.5 353.1,126.7 C353.6,127.0 353.9,127.5 353.9,128.1 Z'/><path d='M301.2,313.6 C300.7,313.3 299.9,312.8 300.0,312.2 C300.1,311.6 301.3,310.4 301.9,310.3 C302.5,310.1 303.6,310.5 303.8,311.1 C304.0,311.7 303.5,313.5 303.1,313.9 C302.7,314.4 301.7,313.9 301.2,313.6 Z'/><path d='M-0.7,137.8 C-1.5,137.5 -2.8,135.7 -2.6,134.8 C-2.5,133.9 -0.9,132.5 -0.1,132.3 C0.8,132.0 2.2,132.5 2.6,133.2 C3.0,133.9 3.1,135.9 2.6,136.7 C2.0,137.4 0.2,138.1 -0.7,137.8 Z'/><path d='M399.5,137.3 C398.6,136.9 397.6,135.8 397.6,134.8 C397.6,133.8 398.9,131.7 399.8,131.4 C400.6,131.1 402.1,132.2 402.7,133.2 C403.2,134.1 403.4,136.3 402.9,137.0 C402.4,137.6 400.4,137.6 399.5,137.3 Z'/><path d='M382.6,390.0 C382.5,390.6 381.0,391.4 380.3,391.5 C379.6,391.6 378.6,391.1 378.3,390.6 C377.9,390.1 377.7,389.2 378.1,388.7 C378.5,388.3 379.9,387.7 380.7,387.9 C381.4,388.2 382.6,389.4 382.6,390.0 Z'/><path d='M51.5,176.3 C51.3,176.7 49.7,176.9 48.7,176.8 C47.7,176.7 45.8,176.1 45.4,175.6 C45.1,175.0 45.9,173.9 46.6,173.7 C47.3,173.4 48.9,173.6 49.8,174.0 C50.6,174.4 51.7,175.8 51.5,176.3 Z'/><path d='M275.7,270.1 C275.4,270.6 274.4,271.2 273.7,270.9 C273.1,270.6 272.1,269.1 271.9,268.4 C271.8,267.8 272.2,267.2 272.9,267.2 C273.6,267.1 275.5,267.4 276.0,267.9 C276.4,268.4 276.1,269.6 275.7,270.1 Z'/><path d='M104.0,341.8 C103.9,341.2 104.7,340.0 105.6,339.7 C106.5,339.5 108.5,339.8 109.2,340.1 C110.0,340.3 110.8,340.9 110.3,341.4 C109.8,341.9 107.4,342.8 106.3,342.9 C105.3,342.9 104.1,342.3 104.0,341.8 Z'/><path d='M363.0,318.6 C362.4,317.7 362.4,315.7 362.9,315.1 C363.3,314.5 364.6,314.7 365.5,315.1 C366.3,315.5 367.5,316.7 367.7,317.6 C367.9,318.6 367.2,320.5 366.4,320.7 C365.7,320.8 363.6,319.5 363.0,318.6 Z'/><path d='M58.0,14.5 C57.9,15.3 57.1,16.4 56.3,16.6 C55.6,16.8 53.8,16.3 53.4,15.7 C53.0,15.1 53.4,13.5 54.0,12.9 C54.5,12.2 56.1,11.6 56.8,11.9 C57.5,12.1 58.1,13.7 58.0,14.5 Z'/><path d='M384.4,270.0 C384.2,270.5 382.8,271.0 381.9,271.0 C381.1,270.9 379.5,270.2 379.3,269.6 C379.0,269.1 380.0,267.9 380.6,267.6 C381.2,267.3 382.4,267.4 383.0,267.8 C383.6,268.2 384.6,269.5 384.4,270.0 Z'/><path d='M299.9,298.2 C299.2,298.6 297.7,298.5 297.1,298.2 C296.6,297.8 296.1,296.4 296.6,295.9 C297.0,295.4 298.9,295.1 299.7,295.1 C300.6,295.1 301.5,295.5 301.5,296.0 C301.6,296.5 300.6,297.8 299.9,298.2 Z'/><path d='M374.4,138.9 C373.9,139.2 372.6,138.8 372.1,138.3 C371.6,137.8 371.1,136.3 371.3,135.7 C371.5,135.1 372.5,134.5 373.2,134.7 C373.9,134.8 375.3,135.8 375.5,136.5 C375.7,137.2 375.0,138.6 374.4,138.9 Z'/><path d='M27.9,67.3 C27.1,67.1 25.9,66.1 25.9,65.4 C25.8,64.7 26.8,63.6 27.6,63.2 C28.3,62.7 29.9,62.2 30.4,62.8 C30.8,63.3 30.9,65.5 30.4,66.3 C30.0,67.0 28.6,67.4 27.9,67.3 Z'/><path d='M55.2,11.0 C54.9,11.7 53.1,12.1 52.3,12.1 C51.5,12.0 50.5,11.5 50.5,10.8 C50.4,10.1 51.4,8.4 52.1,7.8 C52.8,7.3 54.0,7.1 54.5,7.6 C55.0,8.1 55.6,10.2 55.2,11.0 Z'/><path d='M55.2,410.9 C54.9,411.7 53.0,412.3 52.3,412.3 C51.6,412.2 51.1,411.3 51.0,410.6 C51.0,409.8 51.5,408.1 52.0,407.7 C52.6,407.2 53.8,407.3 54.3,407.8 C54.9,408.4 55.5,410.2 55.2,410.9 Z'/><path d='M275.9,224.7 C275.2,225.4 272.6,225.7 271.8,225.3 C271.0,224.8 270.7,222.9 270.9,221.8 C271.1,220.7 272.2,218.7 273.0,218.6 C273.8,218.5 275.3,220.0 275.8,221.0 C276.3,222.1 276.5,224.0 275.9,224.7 Z'/><path d='M282.5,208.1 C282.1,208.6 281.2,208.9 280.6,208.7 C279.9,208.5 278.6,207.5 278.5,206.8 C278.4,206.1 279.2,204.6 280.0,204.4 C280.7,204.2 282.7,205.1 283.1,205.7 C283.5,206.3 282.9,207.6 282.5,208.1 Z'/><path d='M38.3,370.0 C38.0,369.5 38.1,368.5 38.7,367.8 C39.3,367.1 41.3,365.8 42.1,365.8 C42.8,365.9 43.4,367.1 43.2,367.9 C42.9,368.7 41.3,370.4 40.5,370.7 C39.7,371.1 38.6,370.4 38.3,370.0 Z'/><path d='M167.3,383.0 C167.0,383.8 165.9,385.0 165.1,384.8 C164.3,384.7 162.8,383.0 162.6,382.3 C162.3,381.6 162.8,380.8 163.5,380.5 C164.2,380.2 166.0,380.1 166.6,380.5 C167.2,380.9 167.5,382.3 167.3,383.0 Z'/><path d='M101.1,55.2 C100.4,54.5 100.0,52.4 100.5,51.6 C100.9,50.8 102.8,50.0 103.6,50.1 C104.5,50.3 105.3,51.6 105.5,52.5 C105.7,53.4 105.4,55.1 104.7,55.5 C103.9,56.0 101.8,55.8 101.1,55.2 Z'/><path d='M253.6,172.7 C253.0,172.3 252.8,170.9 252.9,170.2 C253.1,169.5 253.7,168.6 254.4,168.6 C255.1,168.6 256.6,169.3 257.1,170.0 C257.5,170.8 257.6,172.6 257.1,173.0 C256.5,173.5 254.3,173.2 253.6,172.7 Z'/><path d='M268.4,226.5 C267.7,227.2 265.1,227.0 264.1,226.3 C263.1,225.6 262.3,223.2 262.4,222.2 C262.5,221.2 263.7,220.5 264.7,220.6 C265.7,220.6 267.8,221.3 268.4,222.3 C269.0,223.3 269.1,225.8 268.4,226.5 Z'/><path d='M147.7,126.1 C146.8,125.4 145.7,123.1 146.0,122.4 C146.2,121.6 148.1,121.5 149.2,121.7 C150.4,121.8 152.4,122.6 152.8,123.3 C153.1,124.1 152.2,125.9 151.3,126.4 C150.5,126.8 148.6,126.8 147.7,126.1 Z'/><path d='M195.5,44.7 C194.8,45.0 193.4,44.3 192.7,43.6 C192.0,42.9 191.0,41.0 191.3,40.4 C191.6,39.8 193.4,39.8 194.4,40.0 C195.3,40.2 196.7,40.9 196.9,41.7 C197.1,42.5 196.2,44.4 195.5,44.7 Z'/><path d='M198.4,0.5 C198.3,-0.1 200.2,-1.4 201.3,-1.8 C202.4,-2.1 204.2,-1.8 205.2,-1.4 C206.1,-1.1 207.4,-0.3 206.8,0.2 C206.3,0.7 203.3,1.6 201.9,1.7 C200.5,1.7 198.5,1.1 198.4,0.5 Z'/><path d='M198.3,400.5 C198.1,400.0 199.9,398.7 201.3,398.2 C202.7,397.8 205.7,397.7 206.4,398.0 C207.1,398.3 206.1,399.5 205.4,400.0 C204.7,400.6 203.4,401.0 202.2,401.1 C201.0,401.1 198.4,401.0 198.3,400.5 Z'/><path d='M320.4,326.1 C320.1,326.6 318.9,327.1 318.1,326.9 C317.2,326.6 315.9,325.5 315.4,324.8 C314.9,324.0 314.5,322.6 315.2,322.4 C315.9,322.1 318.9,323.0 319.8,323.6 C320.6,324.2 320.7,325.5 320.4,326.1 Z'/><path d='M255.0,331.5 C254.9,331.1 255.6,330.3 256.1,330.1 C256.5,329.9 257.6,330.0 257.9,330.3 C258.3,330.5 258.4,331.3 258.2,331.6 C258.0,332.0 257.0,332.4 256.4,332.4 C255.9,332.4 255.0,331.8 255.0,331.5 Z'/><path d='M361.3,106.0 C361.0,105.4 361.3,103.9 362.0,103.3 C362.7,102.8 364.6,102.7 365.4,102.9 C366.3,103.0 367.4,103.5 367.1,104.2 C366.9,104.9 364.9,106.8 363.9,107.1 C363.0,107.4 361.6,106.7 361.3,106.0 Z'/><path d='M7.1,243.5 C7.0,244.3 6.3,245.9 5.7,246.0 C5.1,246.2 4.0,245.3 3.5,244.5 C3.1,243.7 2.7,241.9 3.1,241.3 C3.5,240.7 5.4,240.6 6.1,241.0 C6.7,241.4 7.1,242.7 7.1,243.5 Z'/><path d='M407.3,243.5 C407.2,244.4 406.5,246.2 405.8,246.4 C405.2,246.6 403.6,245.5 403.2,244.7 C402.9,243.9 403.2,242.4 403.6,241.8 C404.1,241.3 405.3,241.2 405.9,241.4 C406.5,241.7 407.3,242.7 407.3,243.5 Z'/><path d='M259.6,41.8 C259.1,42.0 258.3,41.6 258.0,41.1 C257.6,40.5 257.6,39.4 257.7,38.7 C257.9,38.0 258.4,36.8 259.0,37.0 C259.5,37.3 260.8,39.4 260.9,40.2 C261.0,41.0 260.1,41.7 259.6,41.8 Z'/><path d='M61.1,134.2 C60.4,133.9 59.7,131.9 59.8,131.0 C60.0,130.1 61.2,128.9 62.0,128.8 C62.7,128.6 64.1,129.3 64.4,130.0 C64.7,130.6 64.4,131.9 63.9,132.6 C63.3,133.3 61.7,134.5 61.1,134.2 Z'/><path d='M208.2,343.0 C207.7,342.7 207.6,341.6 207.9,340.9 C208.1,340.2 209.2,338.9 209.8,338.8 C210.3,338.6 210.9,339.4 211.0,340.1 C211.1,340.7 210.8,342.2 210.3,342.7 C209.8,343.2 208.6,343.3 208.2,343.0 Z'/><path d='M144.1,376.2 C143.7,376.3 142.7,375.6 142.2,375.0 C141.7,374.3 141.0,373.0 141.1,372.4 C141.1,371.8 142.0,370.9 142.6,371.1 C143.2,371.4 144.4,373.1 144.7,374.0 C144.9,374.8 144.5,376.0 144.1,376.2 Z'/><path d='M382.7,194.5 C382.1,194.2 381.8,192.6 382.0,191.5 C382.1,190.4 383.0,188.1 383.6,187.8 C384.2,187.4 385.3,188.4 385.6,189.3 C385.9,190.2 386.2,192.3 385.7,193.2 C385.2,194.1 383.3,194.8 382.7,194.5 Z'/><path d='M31.3,82.5 C30.8,82.8 29.8,82.7 29.2,82.3 C28.7,81.9 27.9,80.6 28.1,80.1 C28.3,79.7 29.9,79.2 30.5,79.3 C31.2,79.4 32.0,80.0 32.1,80.5 C32.3,81.1 31.8,82.2 31.3,82.5 Z'/><path d='M96.7,109.2 C96.2,109.4 95.2,108.8 94.8,108.3 C94.5,107.8 94.4,106.8 94.6,106.3 C94.9,105.8 95.8,104.9 96.4,105.1 C97.0,105.2 97.9,106.5 98.0,107.2 C98.0,107.9 97.2,109.0 96.7,109.2 Z'/><path d='M165.1,8.5 C164.5,8.8 162.5,7.8 161.8,7.0 C161.1,6.2 160.8,4.6 161.0,3.8 C161.2,3.0 162.3,2.1 163.0,2.3 C163.7,2.4 164.9,3.9 165.2,4.9 C165.6,5.9 165.6,8.1 165.1,8.5 Z'/><path d='M165.0,408.4 C164.5,408.7 162.8,407.5 162.0,406.7 C161.2,405.9 160.2,404.2 160.4,403.4 C160.5,402.6 162.2,401.7 163.0,401.9 C163.8,402.2 164.7,403.8 165.1,404.9 C165.4,406.0 165.6,408.1 165.0,408.4 Z'/><path d='M154.0,111.5 C153.6,111.2 153.5,109.5 153.9,108.7 C154.3,107.8 155.8,106.5 156.5,106.4 C157.2,106.3 158.1,107.4 158.1,108.1 C158.1,108.7 157.2,109.8 156.6,110.4 C155.9,111.0 154.5,111.8 154.0,111.5 Z'/><path d='M371.4,364.4 C371.0,364.0 370.9,362.8 371.4,362.1 C371.9,361.4 373.8,360.3 374.5,360.3 C375.1,360.2 375.3,361.4 375.1,362.1 C375.0,362.8 374.2,364.0 373.6,364.4 C373.0,364.8 371.8,364.8 371.4,364.4 Z'/><path d='M184.5,220.3 C183.6,220.3 181.7,219.8 181.5,219.0 C181.2,218.2 182.2,215.9 183.0,215.4 C183.8,214.8 185.7,215.2 186.3,215.8 C187.0,216.5 187.2,218.3 186.9,219.1 C186.6,219.8 185.4,220.3 184.5,220.3 Z'/><path d='M175.0,53.2 C174.8,53.6 174.1,54.1 173.6,54.0 C173.1,53.9 172.1,53.2 172.0,52.7 C171.9,52.3 172.5,51.2 172.9,51.1 C173.4,50.9 174.4,51.3 174.8,51.7 C175.1,52.0 175.2,52.9 175.0,53.2 Z'/><path d='M11.8,130.1 C11.1,130.3 9.7,129.0 9.3,128.4 C8.8,127.7 8.7,126.6 9.2,126.0 C9.6,125.5 11.2,124.9 11.9,125.1 C12.6,125.3 13.3,126.5 13.3,127.3 C13.3,128.2 12.4,129.9 11.8,130.1 Z'/><path d='M216.5,107.5 C216.1,107.0 216.3,105.4 216.8,104.8 C217.3,104.2 219.0,103.6 219.7,103.7 C220.3,103.8 220.7,104.5 220.6,105.1 C220.5,105.8 219.8,107.2 219.1,107.6 C218.4,108.0 216.9,107.9 216.5,107.5 Z'/><path d='M197.8,295.1 C197.5,295.5 195.9,295.0 195.0,294.4 C194.2,293.7 192.8,291.7 192.7,291.1 C192.7,290.5 194.1,290.6 194.9,290.8 C195.7,291.0 196.9,291.5 197.4,292.2 C197.9,293.0 198.2,294.7 197.8,295.1 Z'/><path d='M126.3,314.5 C125.6,313.5 124.6,311.3 125.0,310.8 C125.3,310.2 127.4,310.8 128.5,311.3 C129.5,311.7 131.2,312.7 131.4,313.6 C131.6,314.5 130.4,316.7 129.5,316.8 C128.7,317.0 127.1,315.5 126.3,314.5 Z'/><path d='M278.5,213.4 C278.3,214.1 277.6,215.3 276.7,215.3 C275.9,215.2 274.0,213.8 273.5,212.9 C273.0,212.1 273.0,210.5 273.7,210.2 C274.5,209.9 277.0,210.6 277.8,211.2 C278.6,211.7 278.7,212.7 278.5,213.4 Z'/><path d='M342.2,188.5 C341.3,188.2 340.8,185.5 340.8,184.3 C340.9,183.1 341.8,181.7 342.6,181.1 C343.4,180.6 345.1,180.2 345.7,181.1 C346.3,181.9 346.8,184.8 346.2,186.0 C345.6,187.3 343.1,188.8 342.2,188.5 Z'/><path d='M171.9,276.1 C171.3,276.5 169.9,276.7 169.4,276.3 C169.0,275.9 168.9,274.3 169.1,273.7 C169.3,273.0 170.2,272.4 170.8,272.4 C171.5,272.5 172.8,273.4 173.0,274.0 C173.2,274.6 172.5,275.7 171.9,276.1 Z'/><path d='M39.4,12.7 C38.7,12.8 37.1,11.9 36.6,11.0 C36.1,10.2 35.9,8.3 36.5,7.7 C37.1,7.1 39.4,6.9 40.1,7.3 C40.8,7.7 40.9,9.1 40.7,10.0 C40.6,10.9 40.1,12.5 39.4,12.7 Z'/><path d='M39.4,412.4 C38.7,412.5 37.6,411.4 37.2,410.7 C36.9,410.0 36.8,408.9 37.3,408.4 C37.7,407.8 39.3,407.2 40.0,407.5 C40.7,407.7 41.4,409.2 41.3,410.1 C41.2,410.9 40.1,412.3 39.4,412.4 Z'/>";

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><g fill='${spotColor}' fill-opacity='${spotOpacity}' fill-rule='evenodd'>${paths}</g></svg>`;
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
