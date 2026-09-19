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
  { id: "marble", name: "マーブル" },
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
let toastTimer = null;

const byId = (id) => document.getElementById(id);














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

  const quickBtn = byId("btn-quick-super-reload");
  if (quickBtn) quickBtn.addEventListener("click", () => handleReload(quickBtn));
}

function switchSettingsSubView(viewKey) {
  const subviews = {
    menu: byId("settings-menu-subview"),
    widgets: byId("settings-subview-widgets"),
    cycle: byId("settings-subview-cycle"),
    balance: byId("settings-subview-balance"),
    theme: byId("settings-subview-theme"),
    backup: byId("settings-subview-backup"),
    tutorial: byId("settings-subview-tutorial"),
    guide: byId("settings-subview-guide"),
  };

  Object.entries(subviews).forEach(([key, el]) => {
    if (el) el.classList.toggle("is-active", key === viewKey);
  });
  const floatingPreview = byId("theme-floating-preview");
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
  const mainView = byId("cards-main-subview");
  const historyView = byId("cards-history-subview");
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

  const todayBtn = byId("today-button");
  if (todayBtn) todayBtn.classList.toggle("is-hidden", view !== "calendar");

  const floatingPreview = byId("theme-floating-preview");
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
  const quickAddBtn = byId("quick-add-button");
  if (quickAddBtn) {
    const showQuickAdd = currentView === "calendar";
    quickAddBtn.style.display = showQuickAdd ? "inline-flex" : "none";
    quickAddBtn.classList.toggle("is-hidden", !showQuickAdd);
  }

  const emoneyFab = byId("add-emoney-fab");
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
  const indicator = byId("bottom-nav-indicator");
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
  const cardsTab = byId("payments-tab-cards");
  const emoneyTab = byId("payments-tab-emoney");
  const subTab = byId("payments-tab-subscriptions");
  const cardsView = byId("cards-payment-subview");
  const emoneyView = byId("emoney-payment-subview");
  const subView = byId("subscriptions-payment-subview");

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

  byId("calendar-title").textContent = `${monthDate.getFullYear()}年${monthDate.getMonth() + 1}月`;
  byId("month-picker").value = monthKey;

  const cycleBadge = byId("cycle-period-badge");
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
  const container = byId("home-widgets-container");
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
        const el = byId(`widget-${w.id}`);
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
        const el = byId(`widget-${w.id}`);
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

  const elCurrent = byId("home-balance-current");
  const elUpcoming = byId("home-balance-upcoming");
  const elAfter = byId("home-balance-after");
  const elAvailable = byId("home-balance-available");

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
  const list = byId("home-upcoming-withdrawals-list");
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
  const container = byId("home-category-top3-list");
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
  const elSpent = byId("home-weekly-spent");
  const elAvg = byId("home-weekly-avg");
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
  const container = byId(containerId);
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
  const legend = byId("calendar-legend");
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
  const grid = byId("calendar-grid");
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
  const usageBtn = byId("mode-usage-btn");
  const outflowBtn = byId("mode-outflow-btn");
  if (usageBtn && outflowBtn) {
    usageBtn.classList.toggle("is-active", isUsage);
    usageBtn.setAttribute("aria-selected", isUsage ? "true" : "false");
    outflowBtn.classList.toggle("is-active", !isUsage);
    outflowBtn.setAttribute("aria-selected", !isUsage ? "true" : "false");
  }

  // モード別の集計値と予算
  const currentAmount = isUsage ? summary.usage : summary.outflow;
  const budget = getEffectiveBudget(monthKey, mode);

  const budgetSetContainer = byId("summary-budget-set");
  const budgetUnsetContainer = byId("summary-budget-unset");
  const primaryLabel = byId("budget-primary-label");
  const remainingEl = byId("budget-remaining-amount");
  const remainingUnitEl = byId("budget-remaining-unit");
  const spentLabel = byId("budget-spent-label");
  const spentAmountEl = byId("budget-spent-amount");
  const gaugeFill = byId("budget-gauge-fill");
  const totalValEl = byId("budget-total-val");
  const percentValEl = byId("budget-percent-val");
  const unsetSpentLabel = byId("budget-unset-spent-label");
  const unsetSpentAmountEl = byId("budget-unset-spent-amount");

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
  byId("summary-direct").textContent = formatYen(summary.direct);
  byId("summary-card").textContent = formatYen(summary.cardWithdrawal);
  byId("summary-outflow").textContent = formatYen(summary.outflow);
  const next = Core.getNextCardWithdrawal(Core.todayKey(), state.expenses, state.cards, state.manualPayments, state.subscriptions, state.emoneyTransactions);
  byId("summary-next-card").textContent = next ? `${formatShortDate(next.date)}・${formatYen(next.amount)}` : "予定なし";
}

function openBudgetDialog() {
  const monthKey = currentMonth.slice(0, 7);
  const monthDate = Core.parseDateKey(currentMonth);
  const cycleDay = state.settings.cycleStartDay || 1;
  const cycleRange = Core.getCycleRange(monthKey, cycleDay);
  byId("budget-dialog-title").textContent = cycleDay === 1
    ? `${monthDate.getFullYear()}年${monthDate.getMonth() + 1}月の予算`
    : `${monthDate.getFullYear()}年${monthDate.getMonth() + 1}月度 (${cycleRange.shortLabel}) の予算`;

  const usageVal = getEffectiveBudget(monthKey, "usage");
  const outflowVal = getEffectiveBudget(monthKey, "outflow");

  byId("budget-usage-input").value = usageVal === null ? "" : formatNumber(usageVal);
  byId("budget-outflow-input").value = outflowVal === null ? "" : formatNumber(outflowVal);

  showDialog(byId("budget-dialog"));
  window.setTimeout(() => byId("budget-usage-input").focus(), 40);
}

function saveBudgetFromForm(event) {
  if (event) event.preventDefault();
  const monthKey = currentMonth.slice(0, 7);
  const usageRaw = byId("budget-usage-input").value.trim();
  const outflowRaw = byId("budget-outflow-input").value.trim();

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
  closeDialog(byId("budget-dialog"));
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
  closeDialog(byId("budget-dialog"));
  renderMonthlySummary();
  showToast("この月の個別予算をクリアしました。");
}



function renderHistory() {
  const month = byId("history-month").value;
  const category = byId("history-category").value;
  const payment = byId("history-payment").value;
  const query = (byId("history-search")?.value || "").trim().toLowerCase();
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
  const resultCount = byId("history-result-count");
  resultCount.replaceChildren(
    createElement("span", "", `${items.length}件`),
    createElement("strong", "", `合計 ${formatYen(filteredTotal)}`)
  );
  const list = byId("history-list");
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





/* ==========================================================================
   QR・電子マネー管理ロジック
   ========================================================================== */



















/* ==========================================================================
   固定費・サブスク（サービス一覧型UI）ロジック
   ========================================================================== */


















let isFavoritesDeleteMode = false;

function renderFavoriteChips() {
  const list = byId("favorites-chips-list");
  const manageBtn = byId("manage-favorites-button");
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
  byId("expense-amount").value = formatNumber(fav.amount);
  byId("expense-category").value = fav.category;
  byId("expense-payment").value = fav.paymentMethod;
  refreshExpenseCardOptions(fav.cardId || "");
  updateExpensePaymentFields();
  byId("expense-memo").value = fav.memo || fav.title || "";
  const includeWithdrawalInput = byId("expense-include-withdrawal");
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
  const rawAmount = byId("expense-amount").value;
  const amount = Core.normalizeAmount(rawAmount);
  if (amount <= 0) {
    showToast("金額を入力してからお気に入りに登録してください");
    byId("expense-amount").focus();
    return;
  }

  const category = byId("expense-category").value;
  const paymentMethod = byId("expense-payment").value;
  const cardId = paymentMethod === Core.CREDIT_PAYMENT ? byId("expense-card").value : "";
  const includeInWithdrawal = byId("expense-include-withdrawal") ? byId("expense-include-withdrawal").checked : true;
  const memo = byId("expense-memo").value.trim();

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
  byId("setting-cycle-start-day").value = String(state.settings.cycleStartDay || 1);
  updateCyclePreview();
  byId("setting-balance").value = state.settings.currentBalance === null ? "" : formatNumber(state.settings.currentBalance);
  byId("setting-reserve").value = state.settings.minimumReserve === null ? "" : formatNumber(state.settings.minimumReserve);
  byId("theme-select").value = state.settings.theme;
  byId("theme-color-1").value = state.settings.themeColor1 || "#185a37";
  const themeColor2El = byId("theme-color-2");
  if (themeColor2El) themeColor2El.value = state.settings.themeColor2 || state.settings.themeColor1 || "#185a37";
  byId("setting-bg-color").value = state.settings.bgColor || "#ffffff";
  const effectiveCardBg = state.settings.cardBgColor || (getLuminance(state.settings.bgColor || "#ffffff") < 0.45 ? "#1e293b" : "#ffffff");
  const settingCardBgEl = byId("setting-card-bg-color");
  if (settingCardBgEl) settingCardBgEl.value = effectiveCardBg;
  const settingCardBgValEl = byId("setting-card-bg-color-val");
  if (settingCardBgValEl) settingCardBgValEl.textContent = effectiveCardBg.toUpperCase();
  byId("setting-border-color").value = state.settings.borderColor || "#e2e8f0";
  byId("setting-gauge-color").value = state.settings.gaugeColor || "#34d399";
  const usageColor = state.settings.usageColor || "#0284c7";
  const usageColorEl = byId("setting-usage-color");
  if (usageColorEl) usageColorEl.value = usageColor;
  byId("theme-color-1-val").textContent = (state.settings.themeColor1 || "#185a37").toUpperCase();
  const themeColor2ValEl = byId("theme-color-2-val");
  if (themeColor2ValEl) themeColor2ValEl.textContent = (state.settings.themeColor2 || state.settings.themeColor1 || "#185a37").toUpperCase();
  byId("setting-bg-color-val").textContent = (state.settings.bgColor || "#ffffff").toUpperCase();
  byId("setting-border-color-val").textContent = (state.settings.borderColor || "#e2e8f0").toUpperCase();
  byId("setting-gauge-color-val").textContent = (state.settings.gaugeColor || "#34d399").toUpperCase();
  const usageColorValEl = byId("setting-usage-color-val");
  if (usageColorValEl) usageColorValEl.textContent = usageColor.toUpperCase();
  const budgetModeEl = byId("setting-budget-mode");
  if (budgetModeEl) budgetModeEl.value = state.settings.budgetMode || "usage";
  renderPresetPalette();
  renderSkinPalette();
  updatePresetButtons();
  applyThemeColors();
  applyThemeSkin();
  renderHomeWidgetsManageList("settings-widgets-manage-list");
}

function updateCyclePreview() {
  const cycleDayVal = byId("setting-cycle-start-day").value;
  const cycleDay = cycleDayVal === "end" ? "end" : Math.min(28, Math.max(1, Number(cycleDayVal) || 1));
  const curMonthKey = currentMonth.slice(0, 7);
  const range = Core.getCycleRange(curMonthKey, cycleDay);
  const previewEl = byId("cycle-preview-dates");
  if (previewEl) {
    previewEl.textContent = `${range.label} (${curMonthKey}度)`;
  }
}

function saveCycleSettings() {
  const cycleDayVal = byId("setting-cycle-start-day").value;
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

  byId("expense-id").value = expense ? expense.id : "";
  byId("expense-dialog-title").textContent = expense ? "支出を編集" : "支出を追加";
  byId("expense-amount").value = expense ? formatNumber(expense.amount) : "";
  byId("expense-date").value = expense ? expense.date : dateKey;
  byId("expense-category").value = expense ? expense.category : "食費";
  byId("expense-payment").value = initialPaymentMethod;
  byId("expense-memo").value = expense ? expense.memo : "";
  byId("expense-payment-date").value = expense ? expense.paymentDateOverride || "" : "";
  const includeWithdrawalInput = byId("expense-include-withdrawal");
  if (includeWithdrawalInput) {
    includeWithdrawalInput.checked = expense ? (expense.includeInWithdrawal !== false) : true;
  }
  byId("expense-amount-error").textContent = "";
  byId("delete-expense-button").classList.toggle("is-hidden", !expense);
  refreshExpenseCardOptions(expense ? expense.cardId : "");
  refreshExpenseEmoneyOptions(expense ? expense.emoneyId : (defaultEmoney ? defaultEmoney.id : ""));
  updateExpensePaymentFields();

  renderDayRecords(byId("expense-date").value);
  showDialog(byId("expense-dialog"));
  window.setTimeout(() => byId("expense-amount").focus(), 40);
}

function refreshExpenseCardOptions(selectedId) {
  const options = [{ value: "", label: state.cards.length ? "カードを選択" : "カードを先に登録してください" }];
  state.cards.forEach((card) => options.push({ value: card.id, label: card.name }));
  fillSelect(byId("expense-card"), options);
  byId("expense-card").value = state.cards.some((card) => card.id === selectedId) ? selectedId : "";
}

function refreshExpenseEmoneyOptions(selectedId) {
  const options = [{ value: "", label: (state.emoneys || []).length ? "QR・電子マネーを選択" : "先にQR・電子マネーを登録してください" }];
  (state.emoneys || []).forEach((em) => options.push({ value: em.id, label: em.name }));
  fillSelect(byId("expense-emoney"), options);
  const emSelect = byId("expense-emoney");
  if (emSelect) {
    emSelect.value = (state.emoneys || []).some((em) => em.id === selectedId)
      ? selectedId
      : ((state.emoneys || [])[0]?.id || "");
  }
}

function updateExpensePaymentFields() {
  const payment = byId("expense-payment").value;
  const credit = payment === Core.CREDIT_PAYMENT;
  const emoney = payment === "QR・電子マネー";

  byId("expense-card-field").classList.toggle("is-hidden", !credit);
  const emField = byId("expense-emoney-field");
  if (emField) emField.classList.toggle("is-hidden", !emoney);

  byId("payment-date-section").classList.toggle("is-hidden", !credit);
  const toggleRow = byId("expense-withdrawal-toggle-row");
  if (toggleRow) toggleRow.classList.toggle("is-hidden", !credit);
  updateCalculatedPaymentDate();
}

function updateCalculatedPaymentDate() {
  const credit = byId("expense-payment").value === Core.CREDIT_PAYMENT;
  const card = state.cards.find((item) => item.id === byId("expense-card").value);
  const dateKey = byId("expense-date").value;
  const calculated = credit ? Core.calculatePaymentDate(dateKey, card) : "";
  byId("calculated-payment-date").textContent = calculated ? formatDate(calculated, { year: "numeric", month: "long", day: "numeric", weekday: "short" }) : "カードを選択してください";
}

function renderDayRecords(dateKey) {
  const section = byId("day-records-section");
  const list = byId("day-records-list");
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
          closeDialog(byId("expense-dialog"));
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
          closeDialog(byId("expense-dialog"));
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
            closeDialog(byId("expense-dialog"));
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
  const amount = Core.normalizeAmount(byId("expense-amount").value);
  const date = byId("expense-date").value;
  const paymentMethod = byId("expense-payment").value;
  const cardId = paymentMethod === Core.CREDIT_PAYMENT ? byId("expense-card").value : "";
  const emoneyId = paymentMethod === "QR・電子マネー" ? byId("expense-emoney").value : "";
  if (amount <= 0) {
    byId("expense-amount-error").textContent = "1円以上の金額を入力してください。";
    byId("expense-amount").focus();
    return;
  }
  if (!Core.parseDateKey(date)) {
    showToast("正しい利用日を入力してください。");
    byId("expense-date").focus();
    return;
  }
  if (paymentMethod === Core.CREDIT_PAYMENT && !state.cards.some((card) => card.id === cardId)) {
    showToast("使用したカードを選択してください。先にカード登録が必要です。");
    byId("expense-card").focus();
    return;
  }
  if (paymentMethod === "QR・電子マネー" && !(state.emoneys || []).some((em) => em.id === emoneyId)) {
    showToast("使用したQR・電子マネーを選択してください。先にQR・電子マネーの登録が必要です。");
    byId("expense-emoney").focus();
    return;
  }
  const override = byId("expense-payment-date").value;
  if (override && !Core.parseDateKey(override)) {
    showToast("手動支払日が正しくありません。");
    return;
  }

  const includeInWithdrawal = byId("expense-include-withdrawal") ? byId("expense-include-withdrawal").checked : true;

  const id = byId("expense-id").value;
  const existing = state.expenses.find((item) => item.id === id);
  const record = {
    id: existing ? existing.id : uid("exp"),
    amount,
    date,
    category: CATEGORIES.includes(byId("expense-category").value) ? byId("expense-category").value : "その他",
    paymentMethod,
    cardId,
    emoneyId,
    includeInWithdrawal,
    paymentDateOverride: paymentMethod === Core.CREDIT_PAYMENT ? override : "",
    calculatedPaymentDate: paymentMethod === Core.CREDIT_PAYMENT
      ? Core.calculatePaymentDate(date, state.cards.find((card) => card.id === cardId))
      : "",
    memo: byId("expense-memo").value.trim().slice(0, 200),
    createdAt: existing ? existing.createdAt : new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isSample: existing ? existing.isSample : false,
  };
  if (existing) Object.assign(existing, record);
  else state.expenses.push(record);
  saveState();
  closeDialog(byId("expense-dialog"));
  currentMonth = firstOfMonth(date);
  renderAll();
  showToast(existing ? "支出を更新しました。" : "支出を登録しました。");
}

async function deleteCurrentExpense() {
  const id = byId("expense-id").value;
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
  closeDialog(byId("expense-dialog"));
  renderAll();
  if (selectedDetailEmoneyId) {
    renderEmoneyDetail(selectedDetailEmoneyId);
  }
  showToast("支出を削除しました。");
}







function saveBalanceSettings() {
  const balanceRaw = byId("setting-balance").value.trim();
  const reserveRaw = byId("setting-reserve").value.trim();
  state.settings.currentBalance = balanceRaw === "" ? null : Core.normalizeAmount(balanceRaw);
  state.settings.minimumReserve = reserveRaw === "" ? null : Core.normalizeAmount(reserveRaw);
  saveState();
  renderAll();
  showToast("残高設定を保存しました。");
}

function saveTheme() {
  state.settings.theme = byId("theme-select").value;
  saveState();
  applyTheme();
  showToast("テーマを変更しました。");
}

function applyTheme() {
  const theme = state.settings.theme || "auto";
  if (theme === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", theme);
  const themeSelect = byId("theme-select");
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

function generateMarbleSvg(themeColor, isDarkBg) {
  const color = themeColor || "#007a78";
  const op1 = isDarkBg ? 0.24 : 0.14;
  const op2 = isDarkBg ? 0.16 : 0.09;
  const op3 = isDarkBg ? 0.10 : 0.05;

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='360' height='360' viewBox='0 0 360 360' fill='none'><g stroke='${color}' stroke-opacity='${op1}' stroke-linecap='round' stroke-linejoin='round'><path d='M-20,40 Q60,80 110,130 T220,240 Q290,290 380,340' stroke-width='2.6'/><path d='M340,-20 Q290,70 240,120 T130,230 Q80,280 40,380' stroke-width='2.2'/><path d='M-20,400 Q60,440 110,490 T220,600 Q290,650 380,700' stroke-width='2.6'/><path d='M-380,40 Q-300,80 -250,130 T-140,240 Q-70,290 20,340' stroke-width='2.6'/><path d='M340,340 Q290,430 240,480 T130,590 Q80,640 40,740' stroke-width='2.2'/><path d='M-20,-20 Q-70,70 -120,120 T-230,230 Q-280,280 -320,380' stroke-width='2.2'/></g><g stroke='${color}' stroke-opacity='${op2}' stroke-linecap='round' stroke-linejoin='round'><path d='M110,130 Q160,110 210,135 T300,160' stroke-width='1.5'/><path d='M220,240 Q180,280 195,330 T220,390' stroke-width='1.4'/><path d='M60,80 Q40,140 20,170 T-20,210' stroke-width='1.4'/><path d='M290,290 Q340,260 380,270' stroke-width='1.3'/><path d='M240,120 Q190,90 170,40 T150,-20' stroke-width='1.5'/><path d='M130,230 Q90,200 40,210 T-20,200' stroke-width='1.4'/><path d='M290,70 Q330,110 370,120' stroke-width='1.3'/><path d='M80,280 Q120,310 140,360 T150,400' stroke-width='1.4'/><path d='M0,180 Q90,160 170,200 T360,190' stroke-width='1.6'/><path d='M170,200 Q220,160 260,80 T300,-10' stroke-width='1.2'/><path d='M170,200 Q140,260 90,300 T20,370' stroke-width='1.3'/><path d='M0,540 Q90,520 170,560 T360,550' stroke-width='1.6'/><path d='M-360,180 Q-270,160 -190,200 T0,190' stroke-width='1.6'/></g><g stroke='${color}' stroke-opacity='${op3}' stroke-linecap='round' stroke-linejoin='round'><path d='M160,110 Q180,70 210,60' stroke-width='0.9'/><path d='M210,135 Q230,170 260,180' stroke-width='0.8'/><path d='M180,280 Q140,290 120,330' stroke-width='0.9'/><path d='M195,330 Q230,340 250,370' stroke-width='0.8'/><path d='M40,140 Q70,170 80,210' stroke-width='0.8'/><path d='M190,90 Q150,110 130,100' stroke-width='0.9'/><path d='M90,200 Q100,160 80,130' stroke-width='0.8'/><path d='M260,80 Q290,60 320,80' stroke-width='0.8'/><path d='M140,260 Q170,280 190,270' stroke-width='0.9'/><path d='M310,160 Q340,180 370,170' stroke-width='0.8'/><path d='M40,210 Q20,250 10,270' stroke-width='0.8'/><path d='M240,120 Q270,150 290,140' stroke-width='0.9'/><path d='M120,310 Q100,340 110,380' stroke-width='0.8'/></g></svg>`;
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
  document.documentElement.style.setProperty("--bg", bgColor);
  document.documentElement.style.setProperty("--border-color", borderColor);
  document.documentElement.style.setProperty("--border", borderColor);
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

  if (document.documentElement && document.documentElement.style) {
    document.documentElement.style.backgroundColor = bgColor;
  }
  if (document.body && document.body.style) {
    document.body.style.backgroundColor = "transparent";
  }

  if (document.documentElement && document.documentElement.dataset) {
    document.documentElement.dataset.darkBg = isDarkBg ? "true" : "false";
  }
  if (document.body && document.body.dataset) {
    document.body.dataset.darkBg = isDarkBg ? "true" : "false";
  }

  try {
    const marblePattern = generateMarbleSvg(color1, isDarkBg);
    const starryPattern = generateStarrySvg(color1, isDarkBg);
    document.documentElement.style.setProperty("--marble-pattern", marblePattern);
    document.documentElement.style.setProperty("--leopard-pattern", marblePattern);
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

  const val1 = byId("theme-color-1-val");
  if (val1) val1.textContent = color1.toUpperCase();

  const input1 = byId("theme-color-1");
  if (input1 && input1.value.toLowerCase() !== color1.toLowerCase()) input1.value = color1;

  const bgInput = byId("setting-bg-color");
  const bgVal = byId("setting-bg-color-val");
  if (bgInput && bgInput.value.toLowerCase() !== bgColor.toLowerCase()) bgInput.value = bgColor;
  if (bgVal) bgVal.textContent = bgColor.toUpperCase();

  const cardBgInput = byId("setting-card-bg-color");
  const cardBgVal = byId("setting-card-bg-color-val");
  if (cardBgInput && cardBgInput.value.toLowerCase() !== effectiveCardBg.toLowerCase()) cardBgInput.value = effectiveCardBg;
  if (cardBgVal) cardBgVal.textContent = effectiveCardBg.toUpperCase();

  const borderInput = byId("setting-border-color");
  const borderVal = byId("setting-border-color-val");
  if (borderInput && borderInput.value.toLowerCase() !== borderColor.toLowerCase()) borderInput.value = borderColor;
  if (borderVal) borderVal.textContent = borderColor.toUpperCase();

  const gaugeInput = byId("setting-gauge-color");
  const gaugeVal = byId("setting-gauge-color-val");
  if (gaugeInput && gaugeInput.value.toLowerCase() !== gaugeColor.toLowerCase()) gaugeInput.value = gaugeColor;
  if (gaugeVal) gaugeVal.textContent = gaugeColor.toUpperCase();

  const usageInput = byId("setting-usage-color");
  const usageVal = byId("setting-usage-color-val");
  if (usageInput && usageInput.value.toLowerCase() !== usageColor.toLowerCase()) usageInput.value = usageColor;
  if (usageVal) usageVal.textContent = usageColor.toUpperCase();

  // 細かく設定カード内の色見本サークル更新
  const cCircle1 = byId("theme-color-1-circle");
  if (cCircle1) cCircle1.style.backgroundColor = color1;
  const cCircleBg = byId("setting-bg-color-circle");
  if (cCircleBg) cCircleBg.style.backgroundColor = bgColor;
  const cCircleCardBg = byId("setting-card-bg-color-circle");
  if (cCircleCardBg) cCircleCardBg.style.backgroundColor = effectiveCardBg;
  const cCircleBorder = byId("setting-border-color-circle");
  if (cCircleBorder) cCircleBorder.style.backgroundColor = borderColor;
  const cCircleGauge = byId("setting-gauge-color-circle");
  if (cCircleGauge) cCircleGauge.style.backgroundColor = gaugeColor;

  // 見本スマホ画面（リアルタイムライブプレビュー）の反映
  const mockup = byId("theme-phone-mockup");
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
      byId("phone-preview-summary"),
      byId("phone-preview-gauge-card"),
      byId("phone-preview-advisor"),
      byId("phone-preview-calendar"),
    ];
    miniCards.forEach((cardEl) => {
      if (cardEl) {
        cardEl.style.borderColor = borderColor;
        cardEl.style.backgroundColor = effectiveCardBg;
        cardEl.style.color = cardTextColor;
      }
    });

    const miniRemaining = byId("phone-preview-remaining");
    if (miniRemaining) miniRemaining.style.color = color1;

    const miniKicker = mockup.querySelector(".mini-summary-kicker");
    if (miniKicker) miniKicker.style.color = cardTextMuted;

    const miniCircleBtn = mockup.querySelector(".mini-summary-circle-btn");
    if (miniCircleBtn) {
      miniCircleBtn.style.color = cardTextMuted;
      miniCircleBtn.style.backgroundColor = isDarkCard ? "rgba(255,255,255,0.1)" : "#f1f5f9";
      miniCircleBtn.style.borderColor = borderColor;
    }

    const miniSpent = byId("phone-preview-spent");
    if (miniSpent) miniSpent.style.color = cardTextColor;

    const miniSub = mockup.querySelector(".mini-summary-sub");
    if (miniSub) {
      miniSub.style.color = cardTextMuted;
      miniSub.style.borderTopColor = borderColor;
    }

    const miniGauge = byId("phone-preview-gauge");
    if (miniGauge) {
      miniGauge.style.background = gaugeColor;
      miniGauge.style.width = "42%";
    }

    const miniGaugeTrack = mockup.querySelector(".phone-mini-gauge-track");
    if (miniGaugeTrack) {
      miniGaugeTrack.style.backgroundColor = isDarkCard ? "rgba(255, 255, 255, 0.15)" : "#e2e8f0";
    }

    const miniGaugePercent = byId("phone-preview-percent");
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

    const miniToday = byId("phone-preview-today");
    if (miniToday) {
      miniToday.style.backgroundColor = color1;
      miniToday.style.color = "#ffffff";
    }

    const miniFab = byId("phone-preview-fab");
    if (miniFab) {
      miniFab.style.backgroundColor = color1;
      miniFab.style.color = "#ffffff";
    }

    const miniNav = byId("phone-preview-nav");
    if (miniNav) {
      miniNav.style.borderColor = borderColor;
      miniNav.style.backgroundColor = effectiveCardBg;
    }

    mockup.querySelectorAll(".mini-nav-item:not(.is-active)").forEach((el) => {
      el.style.color = cardTextMuted;
    });

    const miniNavActive = byId("phone-preview-nav-active");
    if (miniNavActive) miniNavActive.style.color = color1;

    const modeUsageTab = byId("phone-mode-usage");
    if (modeUsageTab) {
      modeUsageTab.style.backgroundColor = color1;
      modeUsageTab.style.color = "#ffffff";
    }
  }

  const themeCodeInput = byId("theme-code-input");
  if (themeCodeInput && document.activeElement !== themeCodeInput) {
    themeCodeInput.value = getThemeCode();
  }

  updatePresetButtons();
  updateThemeComboBadge();
}

function updateThemeComboBadge() {
  const label = byId("theme-combo-label");
  const dot = byId("theme-combo-dot");
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

  const mockup = byId("theme-phone-mockup");
  if (mockup) {
    mockup.setAttribute("data-skin", skin);
    if (mockup.dataset) mockup.dataset.skin = skin;
  }

  updateSkinTiles();
  updateThemeComboBadge();
}

function renderSkinPalette() {
  const grid = byId("skin-palette-grid");
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
      const codeInput = byId("theme-code-input");
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

  const customBtn = byId("preset-custom-btn");
  if (customBtn) {
    customBtn.classList.toggle("is-active", !matchedAny);
  }
}

function renderPresetPalette() {
  const grid = byId("preset-palette-grid");
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
    const colorInput = byId("theme-color-1");
    if (colorInput) colorInput.click();
  });
  grid.append(customBtn);

  updatePresetButtons();
}

function setupHomeWidgetsDragAndDrop() {
  const container = byId("home-widgets-container");
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
  const preview = byId("theme-floating-preview");
  if (!preview) return;

  const header = byId("floating-preview-header") || preview;
  const minBtn = byId("floating-preview-min-btn");

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
  const dialog = byId("confirm-dialog");
  byId("confirm-title").textContent = title;
  byId("confirm-message").textContent = message;
  byId("confirm-ok").textContent = okLabel;
  byId("confirm-ok").className = destructive ? "button button-danger" : "button button-primary";
  byId("confirm-cancel").classList.toggle("is-hidden", !destructive);
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
  const toast = byId("toast");
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
