"use strict";

/* Fixed cost and subscription views and editing. */

function moveSubscriptionMonth(amount) {
  const date = Core.parseDateKey(subscriptionMonth);
  if (!date) return;
  date.setMonth(date.getMonth() + amount, 1);
  subscriptionMonth = Core.toDateKey(date);
  renderSubscriptionsView();
}
function switchSubscriptionScope(scope) {
  subscriptionScope = scope;
  const scopeMonth = byId("sub-scope-month");
  const scopeAll = byId("sub-scope-all");
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

  const titleEl = byId("sub-month-title");
  if (titleEl && parsedDate) {
    titleEl.textContent = `${parsedDate.getFullYear()}年${parsedDate.getMonth() + 1}月`;
  }
  const picker = byId("sub-month-picker");
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

  const totalEl = byId("sub-summary-total");
  if (totalEl) totalEl.textContent = formatYen(totalMonthAmount);
  const statFixedEl = byId("sub-stat-fixed");
  if (statFixedEl) statFixedEl.textContent = formatYen(fixedSubtotal);
  const statSubEl = byId("sub-stat-sub");
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

  const container = byId("subscription-list");
  const emptyCard = byId("subscription-empty-state");

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
  const select = byId("sub-card-select");
  if (!select) return;
  const options = state.cards.map((c) => ({ value: c.id, label: c.name }));
  fillSelect(select, options.length ? options : [{ value: "", label: "登録カードなし" }]);
  if (selectedCardId && state.cards.some((c) => c.id === selectedCardId)) {
    select.value = selectedCardId;
  }
}
function setSubscriptionIconInForm(iconId) {
  const iconKey = SUBSCRIPTION_ICONS[iconId] ? iconId : "other";
  const hidden = byId("sub-icon-val");
  if (hidden) hidden.value = iconKey;

  const preview = byId("sub-icon-preview-box");
  if (preview) {
    const def = SUBSCRIPTION_ICONS[iconKey] || SUBSCRIPTION_ICONS.other;
    preview.innerHTML = def.svg;
  }
}
function openSubscriptionIconDialog() {
  const grid = byId("sub-icon-grid");
  if (!grid) return;

  const currentIcon = byId("sub-icon-val")?.value || "other";
  const buttons = Object.entries(SUBSCRIPTION_ICONS).map(([key, def]) => {
    const btn = createElement("button", `sub-icon-btn${key === currentIcon ? " is-selected" : ""}`);
    btn.type = "button";
    btn.innerHTML = `${def.svg}<span>${def.name}</span>`;
    btn.addEventListener("click", () => {
      setSubscriptionIconInForm(key);
      closeDialog(byId("subscription-icon-dialog"));
    });
    return btn;
  });

  grid.replaceChildren(...buttons);
  showDialog(byId("subscription-icon-dialog"));
}
function updateSubscriptionFormVisibility() {
  const paymentMethod = byId("sub-payment-method").value;
  const isCredit = paymentMethod === Core.CREDIT_PAYMENT;
  const cardField = byId("sub-card-field");
  const withdrawalRow = byId("sub-withdrawal-toggle-row");

  if (cardField) cardField.classList.toggle("is-hidden", !isCredit);
  if (withdrawalRow) withdrawalRow.classList.toggle("is-hidden", !isCredit);

  const interval = byId("sub-interval-select").value;
  const dayField = byId("sub-day-field");
  const monthField = byId("sub-month-field");
  const onetimeField = byId("sub-onetime-field");

  if (dayField) dayField.classList.toggle("is-hidden", interval === "once");
  if (monthField) monthField.classList.toggle("is-hidden", interval !== "yearly");
  if (onetimeField) onetimeField.classList.toggle("is-hidden", interval !== "once");

  updateSubscriptionDayHint();
}
function updateSubscriptionDayHint() {
  const paymentMethod = byId("sub-payment-method").value;
  const isCredit = paymentMethod === Core.CREDIT_PAYMENT;
  const hintEl = byId("sub-day-hint");
  if (!hintEl) return;

  if (isCredit) {
    const cardId = byId("sub-card-select").value;
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
  const isCredit = byId("sub-payment-method").value === Core.CREDIT_PAYMENT;
  if (isCredit) {
    const cardId = byId("sub-card-select").value;
    const card = state.cards.find((c) => c.id === cardId);
    if (card && byId("sub-day-select")) {
      byId("sub-day-select").value = String(card.paymentDay);
    }
  }
  updateSubscriptionDayHint();
}
function openSubscriptionDialog(subId = "") {
  const sub = subId ? state.subscriptions.find((item) => item.id === subId) : null;
  const form = byId("subscription-form");
  if (form) form.reset();

  const titleEl = byId("subscription-dialog-title");
  if (titleEl) titleEl.textContent = sub ? "固定費・サブスクを編集" : "固定費・サブスクを追加";

  byId("sub-id").value = sub ? sub.id : "";
  byId("sub-name-input").value = sub ? sub.name : "";
  setSubscriptionIconInForm(sub ? sub.icon : "other");
  byId("sub-type-select").value = sub ? sub.type : "fixed";
  byId("sub-amount-input").value = sub ? formatNumber(sub.amount) : "";
  byId("sub-amount-type").value = sub ? sub.amountType : "fixed";
  byId("sub-interval-select").value = sub ? sub.interval : "monthly";

  const initialPayMethod = sub ? sub.paymentMethod : (state.cards.length ? Core.CREDIT_PAYMENT : "口座引き落とし");
  byId("sub-payment-method").value = initialPayMethod;

  refreshSubscriptionCardOptions(sub ? sub.cardId : "");

  let dayVal = "1";
  if (sub) {
    dayVal = String(sub.paymentDay);
  } else if (initialPayMethod === Core.CREDIT_PAYMENT && state.cards.length) {
    const selectedCardId = byId("sub-card-select").value || state.cards[0].id;
    const selectedCard = state.cards.find((c) => c.id === selectedCardId) || state.cards[0];
    dayVal = String(selectedCard.paymentDay);
  }
  byId("sub-day-select").value = dayVal;

  const monthVal = sub ? String(sub.paymentMonth || 1) : "1";
  byId("sub-month-select").value = monthVal;

  byId("sub-onetime-input").value = sub ? (sub.oneTimeDate || "") : Core.todayKey();
  byId("sub-include-withdrawal").checked = sub ? sub.includeInWithdrawal !== false : true;
  byId("sub-category-select").value = sub ? sub.category : "固定費";
  byId("sub-memo-input").value = sub ? sub.memo : "";
  byId("sub-is-active").checked = sub ? sub.isActive !== false : true;

  updateSubscriptionFormVisibility();

  const delBtn = byId("delete-subscription-btn");
  if (delBtn) delBtn.classList.toggle("is-hidden", !sub);

  showDialog(byId("subscription-dialog"));
}
function saveSubscriptionFromForm(event) {
  event.preventDefault();
  const name = byId("sub-name-input").value.trim();
  const amount = Core.normalizeAmount(byId("sub-amount-input").value);
  if (!name || amount <= 0) {
    showToast("サービス名と金額を入力してください。");
    return;
  }

  const id = byId("sub-id").value;
  const existing = state.subscriptions.find((item) => item.id === id);

  const paymentMethod = byId("sub-payment-method").value;
  const cardId = paymentMethod === Core.CREDIT_PAYMENT ? byId("sub-card-select").value : "";
  const interval = byId("sub-interval-select").value;

  const record = {
    id: existing ? existing.id : uid("sub"),
    name,
    icon: byId("sub-icon-val").value || "other",
    type: byId("sub-type-select").value,
    amount,
    amountType: byId("sub-amount-type").value,
    interval,
    paymentDay: interval === "once" ? 1 : (byId("sub-day-select").value === "end" ? "end" : Number(byId("sub-day-select").value) || 1),
    paymentMonth: interval === "yearly" ? Number(byId("sub-month-select").value) || 1 : null,
    oneTimeDate: interval === "once" ? byId("sub-onetime-input").value : "",
    paymentMethod,
    cardId,
    includeInWithdrawal: byId("sub-include-withdrawal").checked,
    category: byId("sub-category-select").value,
    memo: byId("sub-memo-input").value.trim().slice(0, 200),
    isActive: byId("sub-is-active").checked,
    createdAt: existing ? existing.createdAt : new Date().toISOString(),
    isSample: existing ? existing.isSample : false,
  };

  if (existing) {
    Object.assign(existing, record);
  } else {
    state.subscriptions.push(record);
  }

  saveState();
  closeDialog(byId("subscription-dialog"));
  renderAll();
  showToast(existing ? `「${name}」を更新しました。` : `「${name}」を登録しました。`);
}
function openSubscriptionDetailDialog(subId) {
  const sub = state.subscriptions.find((item) => item.id === subId);
  if (!sub) return;

  selectedDetailSubId = subId;

  const nameEl = byId("sub-detail-name");
  if (nameEl) nameEl.textContent = sub.name;

  const amtEl = byId("sub-detail-amount");
  if (amtEl) amtEl.textContent = formatYen(sub.amount);

  const iconWrap = byId("sub-detail-icon-wrap");
  if (iconWrap) {
    const iconDef = SUBSCRIPTION_ICONS[sub.icon] || SUBSCRIPTION_ICONS.other;
    iconWrap.innerHTML = iconDef.svg;
  }

  const intervalBadge = byId("sub-detail-interval-badge");
  if (intervalBadge) {
    intervalBadge.textContent = { monthly: "毎月", yearly: "毎年", once: "一回のみ" }[sub.interval] || "毎月";
  }

  const statusPill = byId("sub-detail-status-pill");
  if (statusPill) {
    const active = sub.isActive !== false;
    statusPill.textContent = active ? "有効" : "停止中";
    statusPill.classList.toggle("is-active", active);
    statusPill.classList.toggle("is-paused", !active);
  }

  const typeEl = byId("sub-detail-type");
  if (typeEl) typeEl.textContent = sub.type === "subscription" ? "サブスク（定期サービス）" : "固定費";

  // 次回支払日計算
  const nowKey = Core.todayKey().slice(0, 7);
  let nextDate = Core.getSubscriptionUsageDate(sub, nowKey);
  if (!nextDate || nextDate < Core.todayKey()) {
    const nextMonthObj = Core.addMonths(Number(nowKey.slice(0, 4)), Number(nowKey.slice(5, 7)) - 1, 1);
    const nextMKey = `${nextMonthObj.year}-${String(nextMonthObj.monthIndex + 1).padStart(2, "0")}`;
    nextDate = Core.getSubscriptionUsageDate(sub, nextMKey) || nextDate;
  }
  const nextDateEl = byId("sub-detail-next-date");
  if (nextDateEl) {
    nextDateEl.textContent = nextDate ? formatDate(nextDate) : "—";
  }

  const payEl = byId("sub-detail-payment-method");
  if (payEl) payEl.textContent = sub.paymentMethod;

  const cardRow = byId("sub-detail-card-row");
  const cardNameEl = byId("sub-detail-card-name");
  const isCredit = sub.paymentMethod === Core.CREDIT_PAYMENT;
  if (cardRow) cardRow.classList.toggle("is-hidden", !isCredit);
  if (cardNameEl && isCredit) {
    const card = state.cards.find((c) => c.id === sub.cardId);
    cardNameEl.textContent = card ? card.name : "未選択";
  }

  const withdrawalRow = byId("sub-detail-withdrawal-row");
  const withdrawalStatusEl = byId("sub-detail-withdrawal-status");
  if (withdrawalRow) withdrawalRow.classList.toggle("is-hidden", !isCredit);
  if (withdrawalStatusEl && isCredit) {
    withdrawalStatusEl.textContent = sub.includeInWithdrawal !== false ? "引き落とし予定に含む" : "含まない（対象外）";
  }

  const catEl = byId("sub-detail-category");
  if (catEl) catEl.textContent = sub.category;

  const memoRow = byId("sub-detail-memo-row");
  const memoEl = byId("sub-detail-memo");
  if (memoRow) memoRow.classList.toggle("is-hidden", !sub.memo);
  if (memoEl) memoEl.textContent = sub.memo || "";

  const toggleBtn = byId("sub-detail-toggle-active-btn");
  if (toggleBtn) {
    toggleBtn.textContent = sub.isActive !== false ? "一時停止する" : "再開する";
  }

  showDialog(byId("subscription-detail-dialog"));
}
function toggleSubscriptionActive(subId) {
  const sub = state.subscriptions.find((item) => item.id === subId);
  if (!sub) return;

  sub.isActive = (sub.isActive === false);
  saveState();
  closeDialog(byId("subscription-detail-dialog"));
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
  closeDialog(byId("subscription-detail-dialog"));
  closeDialog(byId("subscription-dialog"));
  renderAll();
  showToast(`「${sub.name}」を削除しました。`);
}
function deleteCurrentSubscription() {
  const id = byId("sub-id").value;
  if (id) deleteSubscription(id);
}
