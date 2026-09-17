"use strict";

/* Credit card rendering, editing, and confirmed payments. */

function renderCards() {
  const list = byId("cards-list");
  if (!state.cards.length) {
    list.replaceChildren(emptyState("カードが登録されていません", "カードを追加すると、利用日から引き落とし日を自動計算します。"));
    return;
  }
  list.replaceChildren(...state.cards.map(createCardItem));
}
function renderCardHistoryList(cardId = null) {
  const card = cardId ? state.cards.find((c) => c.id === cardId) : null;
  const heading = byId("card-history-heading");
  if (heading) {
    heading.textContent = card ? `${card.name}の確定額履歴` : "確定額の履歴";
  }

  const list = byId("card-history-list");
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
function openCardDialog(cardId = "") {
  const card = cardId ? state.cards.find((item) => item.id === cardId) : null;
  byId("card-form").reset();
  byId("card-id").value = card ? card.id : "";
  byId("card-dialog-title").textContent = card ? "カード設定を編集" : "カードを追加";
  byId("card-name").value = card ? card.name : "";
  byId("card-closing-day").value = card ? String(card.closingDay) : "end";
  byId("card-payment-day").value = card ? String(card.paymentDay) : "27";
  byId("card-payment-month").value = card ? String(card.paymentMonth) : "1";
  byId("card-weekend").value = card ? card.weekendAdjustment : "none";
  byId("card-color").value = card ? card.color : "#4f9d73";
  byId("card-memo").value = card ? card.memo : "";
  byId("delete-card-button").classList.toggle("is-hidden", !card);
  showDialog(byId("card-dialog"));
}
function saveCardFromForm(event) {
  event.preventDefault();
  const name = byId("card-name").value.trim();
  if (!name) {
    showToast("カード名を入力してください。");
    byId("card-name").focus();
    return;
  }
  const id = byId("card-id").value;
  const existing = state.cards.find((item) => item.id === id);
  const closingValue = byId("card-closing-day").value;
  const record = {
    id: existing ? existing.id : uid("card"),
    name: name.slice(0, 40),
    closingDay: closingValue === "end" ? "end" : Number(closingValue),
    paymentDay: Number(byId("card-payment-day").value),
    paymentMonth: Number(byId("card-payment-month").value) === 0 ? 0 : 1,
    weekendAdjustment: byId("card-weekend").value,
    color: byId("card-color").value,
    memo: byId("card-memo").value.trim().slice(0, 200),
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
  closeDialog(byId("card-dialog"));
  renderAll();
  showToast(existing ? "カード設定を更新しました。" : "カードを追加しました。");
}
async function deleteCurrentCard() {
  const id = byId("card-id").value;
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
  closeDialog(byId("card-dialog"));
  renderAll();
  showToast("カードを削除しました。");
}
function openManualPaymentDialog(cardId, paymentId = "") {
  const payment = paymentId ? state.manualPayments.find((item) => item.id === paymentId) : null;
  const card = state.cards.find((item) => item.id === cardId);

  byId("manual-payment-form").reset();
  byId("manual-payment-id").value = payment ? payment.id : "";
  byId("manual-payment-card-id").value = cardId;
  byId("manual-payment-amount").value = payment ? formatNumber(payment.amount) : "";

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
  byId("manual-payment-date").value = defaultDate;
  byId("manual-payment-memo").value = payment ? payment.memo : "";

  const kickerEl = byId("manual-payment-card-kicker");
  if (kickerEl) {
    kickerEl.textContent = card ? `対象カード: ${card.name}` : "初回の確定額にも使えます";
  }
  const titleEl = byId("manual-payment-dialog-title");
  if (titleEl) {
    titleEl.textContent = payment ? "確定済みの引落を編集" : "確定済みの引落を追加";
  }
  const hintEl = byId("manual-payment-date-hint");
  if (hintEl) {
    if (card) {
      const weekendAdj = { none: "", previous: "（前営業日調整）", next: "（翌営業日調整）" }[card.weekendAdjustment] || "";
      hintEl.textContent = `※ ${card.name}の設定（${card.paymentDay}日引落${weekendAdj}）から自動セットしています。手動変更も可能です。`;
    } else {
      hintEl.textContent = "※ 必要に応じて引落日を変更できます。";
    }
  }

  byId("delete-manual-payment-button").classList.toggle("is-hidden", !payment);
  showDialog(byId("manual-payment-dialog"));
}
function saveManualPaymentFromForm(event) {
  event.preventDefault();
  const amount = Core.normalizeAmount(byId("manual-payment-amount").value);
  const date = byId("manual-payment-date").value;
  const cardId = byId("manual-payment-card-id").value;
  if (amount <= 0 || !Core.parseDateKey(date) || !state.cards.some((card) => card.id === cardId)) {
    showToast("金額と引落日を確認してください。");
    return;
  }
  const id = byId("manual-payment-id").value;
  const existing = state.manualPayments.find((item) => item.id === id);
  const record = {
    id: existing ? existing.id : uid("manual"),
    cardId,
    amount,
    date,
    memo: byId("manual-payment-memo").value.trim().slice(0, 200),
    createdAt: existing ? existing.createdAt : new Date().toISOString(),
    isSample: existing ? existing.isSample : false,
  };
  if (existing) Object.assign(existing, record);
  else state.manualPayments.push(record);
  saveState();
  closeDialog(byId("manual-payment-dialog"));
  renderAll();
  showToast(existing ? "確定額を更新しました。" : "確定額を追加しました。");
}
async function deleteCurrentManualPayment() {
  const id = byId("manual-payment-id").value;
  if (!state.manualPayments.some((item) => item.id === id)) return;
  const confirmed = await confirmAction("確定額を削除しますか？", "このカード引き落とし予定を削除します。", "削除する");
  if (!confirmed) return;
  state.manualPayments = state.manualPayments.filter((item) => item.id !== id);
  saveState();
  closeDialog(byId("manual-payment-dialog"));
  renderAll();
  showToast("確定額を削除しました。");
}
