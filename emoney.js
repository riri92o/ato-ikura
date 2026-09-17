"use strict";

/* QR/e-money balances, charges, adjustments, and history. */

function getEmoneyBalance(emoneyId) {
  return Core.calculateEmoneyBalance(emoneyId, state.emoneys, state.emoneyTransactions, state.expenses);
}
function getTotalEmoneyBalance() {
  return (state.emoneys || []).reduce((total, em) => total + getEmoneyBalance(em.id), 0);
}
function renderEmoneyList() {
  const totalValEl = byId("emoney-total-balance-val");
  const totalCountEl = byId("emoney-total-services-count");
  const emptyStateEl = byId("emoney-empty-state");
  const listEl = byId("emoney-services-list");

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
  showDialog(byId("emoney-history-dialog"));
}
function renderEmoneyDetail(emoneyId) {
  selectedDetailEmoneyId = emoneyId;
  const em = (state.emoneys || []).find((e) => e.id === emoneyId);
  if (!em) {
    closeDialog(byId("emoney-history-dialog"));
    renderEmoneyList();
    return;
  }

  const titleEl = byId("emoney-history-dialog-title");
  if (titleEl) titleEl.textContent = `${em.name}の取引履歴`;

  const iconDef = EMONEY_ICONS[em.icon] || EMONEY_ICONS.qr;
  const currentBal = getEmoneyBalance(em.id);

  const iconEl = byId("emoney-detail-icon-box");
  if (iconEl) {
    iconEl.innerHTML = iconDef.svg;
    iconEl.style.backgroundColor = em.color || "#e60012";
    iconEl.style.color = "#ffffff";
  }

  const nameEl = byId("emoney-detail-name");
  if (nameEl) nameEl.textContent = em.name;

  const badgeEl = byId("emoney-detail-default-badge");
  if (badgeEl) badgeEl.classList.toggle("is-hidden", !em.isDefault);

  const balEl = byId("emoney-detail-balance");
  if (balEl) {
    balEl.textContent = formatYen(currentBal);
    balEl.classList.toggle("is-negative", currentBal < 0);
  }

  const initBalEl = byId("emoney-detail-initial-balance");
  if (initBalEl) initBalEl.textContent = formatYen(em.initialBalance);

  // 履歴アイテム生成（支出、チャージ、残高調整）
  const listEl = byId("emoney-history-list");
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
  const totalBalEl = byId("home-emoney-total-balance");
  const chipsContainer = byId("home-emoney-services-chips");
  const emptyHint = byId("home-emoney-empty-text");

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
  byId("emoney-form").reset();
  byId("emoney-id").value = emoney ? emoney.id : "";
  byId("emoney-dialog-title").textContent = emoney ? "QR・電子マネーを編集" : "QR・電子マネーを追加";
  byId("emoney-name").value = emoney ? emoney.name : "";
  byId("emoney-initial-balance").value = emoney ? formatNumber(emoney.initialBalance) : "0";
  byId("emoney-color").value = emoney ? emoney.color : "#e60012";
  byId("emoney-icon").value = emoney ? emoney.icon : "qr";
  byId("emoney-is-default").checked = emoney ? Boolean(emoney.isDefault) : (state.emoneys.length === 0);

  // カラープリセットのアクティブ状態更新
  const activeColor = (emoney ? emoney.color : "#e60012").toLowerCase();
  document.querySelectorAll("#emoney-color-presets .color-preset-chip").forEach((c) => {
    c.classList.toggle("is-active", (c.dataset.color || "").toLowerCase() === activeColor);
  });

  byId("delete-emoney-btn").classList.toggle("is-hidden", !emoney);
  showDialog(byId("emoney-dialog"));
}
function saveEmoneyFromForm(event) {
  event.preventDefault();
  const name = byId("emoney-name").value.trim();
  if (!name) {
    showToast("名称を入力してください。");
    byId("emoney-name").focus();
    return;
  }

  const id = byId("emoney-id").value;
  const existing = state.emoneys.find((e) => e.id === id);
  const isDefault = byId("emoney-is-default").checked;

  // 初期選択にできるのは1つだけ
  if (isDefault) {
    state.emoneys.forEach((e) => {
      if (!existing || e.id !== existing.id) e.isDefault = false;
    });
  }

  const record = {
    id: existing ? existing.id : uid("emoney"),
    name: name.slice(0, 40),
    initialBalance: Core.normalizeAmount(byId("emoney-initial-balance").value),
    color: byId("emoney-color").value || "#e60012",
    icon: EMONEY_ICONS[byId("emoney-icon").value] ? byId("emoney-icon").value : "qr",
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
  closeDialog(byId("emoney-dialog"));
  renderAll();
  if (selectedDetailEmoneyId) renderEmoneyDetail(selectedDetailEmoneyId);
  showToast(existing ? "QR・電子マネーを更新しました。" : "QR・電子マネーを追加しました。");
}
async function deleteCurrentEmoney() {
  const id = byId("emoney-id").value;
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
  closeDialog(byId("emoney-dialog"));
  closeDialog(byId("emoney-history-dialog"));
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

  byId("charge-form").reset();
  byId("charge-id").value = charge ? charge.id : "";
  byId("charge-emoney-id").value = em.id;
  byId("charge-dialog-title").textContent = charge ? "チャージを編集" : "チャージを登録";
  byId("charge-target-service").textContent = em.name;
  byId("charge-amount").value = charge ? formatNumber(charge.amount) : "";
  byId("charge-date").value = charge ? charge.date : Core.todayKey();

  // チャージ元セレクト生成（現金・銀行口座・他 ＋ 登録カード一覧）
  const sourceOptions = [{ value: "cash", label: "現金・銀行口座・他" }];
  (state.cards || []).forEach((c) => {
    sourceOptions.push({ value: `card_${c.id}`, label: `クレジットカード: ${c.name}` });
  });
  fillSelect(byId("charge-source"), sourceOptions);
  byId("charge-source").value = charge && charge.cardId ? `card_${charge.cardId}` : "cash";

  byId("charge-memo").value = charge ? charge.memo || "" : "";
  byId("delete-charge-btn").classList.toggle("is-hidden", !charge);

  showDialog(byId("charge-dialog"));
  window.setTimeout(() => byId("charge-amount").focus(), 40);
}
function saveChargeFromForm(event) {
  event.preventDefault();
  const amount = Core.normalizeAmount(byId("charge-amount").value);
  const date = byId("charge-date").value;
  const emoneyId = byId("charge-emoney-id").value;
  const sourceVal = byId("charge-source").value;
  const cardId = sourceVal.startsWith("card_") ? sourceVal.replace("card_", "") : "";

  if (amount <= 0) {
    showToast("1円以上の金額を入力してください。");
    byId("charge-amount").focus();
    return;
  }
  if (!Core.parseDateKey(date)) {
    showToast("正しい日付を入力してください。");
    byId("charge-date").focus();
    return;
  }

  const id = byId("charge-id").value;
  const existing = (state.emoneyTransactions || []).find((t) => t.id === id);

  const record = {
    id: existing ? existing.id : uid("emoney_tx"),
    type: "charge",
    emoneyId: emoneyId,
    amount: amount,
    date: date,
    cardId: cardId,
    memo: byId("charge-memo").value.trim().slice(0, 200),
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
  closeDialog(byId("charge-dialog"));
  renderAll();
  if (selectedDetailEmoneyId === emoneyId) {
    renderEmoneyDetail(emoneyId);
  }
  showToast(existing ? "チャージを更新しました。" : "チャージを登録しました。");
}
async function deleteCurrentCharge() {
  const id = byId("charge-id").value;
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
  closeDialog(byId("charge-dialog"));
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
  byId("emoney-adjust-form").reset();
  byId("adjust-emoney-id").value = em.id;
  byId("adjust-current-balance-display").textContent = formatYen(currentBal);
  byId("adjust-target-balance").value = formatNumber(currentBal);
  byId("adjust-date").value = Core.todayKey();
  byId("adjust-memo").value = "";
  updateAdjustDiffPreview();

  showDialog(byId("emoney-adjust-dialog"));
}
function updateAdjustDiffPreview() {
  const emoneyId = byId("adjust-emoney-id").value;
  const currentBal = getEmoneyBalance(emoneyId);
  const targetVal = byId("adjust-target-balance").value;
  const targetBal = targetVal === "" ? currentBal : Core.normalizeAmount(targetVal);
  const diff = targetBal - currentBal;

  const previewEl = byId("adjust-diff-preview");
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
  const emoneyId = byId("adjust-emoney-id").value;
  const currentBal = getEmoneyBalance(emoneyId);
  const targetBal = Core.normalizeAmount(byId("adjust-target-balance").value);
  const date = byId("adjust-date").value;
  const diff = targetBal - currentBal;

  if (!Core.parseDateKey(date)) {
    showToast("正しい日付を入力してください。");
    return;
  }

  if (diff === 0) {
    showToast("残高に変更はありません。");
    closeDialog(byId("emoney-adjust-dialog"));
    return;
  }

  const record = {
    id: uid("emoney_tx"),
    type: "adjustment",
    emoneyId: emoneyId,
    diff: diff,
    targetBalance: targetBal,
    date: date,
    memo: byId("adjust-memo").value.trim().slice(0, 200),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  if (!state.emoneyTransactions) state.emoneyTransactions = [];
  state.emoneyTransactions.push(record);

  saveState();
  closeDialog(byId("emoney-adjust-dialog"));
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
