"use strict";

/* Report navigation, summaries, advice, and charts. */

let categoryChartInstance = null;
let trendChartInstance = null;
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

  const balanceCurrentEl = byId("balance-current");
  const balanceUpcomingEl = byId("balance-upcoming");
  const balanceFixedEl = byId("balance-fixed-upcoming");
  const balanceAfterEl = byId("balance-after");
  const balanceAvailableEl = byId("balance-available");

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
  const container = byId("category-summary");
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
function switchReportSubTab(subTab) {
  if (!["outlook", "analysis"].includes(subTab)) return;
  reportSubTab = subTab;
  const isOutlook = subTab === "outlook";
  const outlookBtn = byId("report-tab-outlook-btn");
  const analysisBtn = byId("report-tab-analysis-btn");
  const outlookPane = byId("report-pane-outlook");
  const analysisPane = byId("report-pane-analysis");

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
  const reportTitle = byId("report-month-title");
  if (!reportTitle) return;

  const monthDate = Core.parseDateKey(reportMonth);
  const monthKey = reportMonth.slice(0, 7);
  const cycleDay = state.settings.cycleStartDay || 1;
  const cycleRange = Core.getCycleRange(monthKey, cycleDay);

  reportTitle.textContent = `${monthDate.getFullYear()}年${monthDate.getMonth() + 1}月`;
  const picker = byId("report-month-picker");
  if (picker) picker.value = monthKey;

  const badge = byId("report-cycle-period-badge");
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
  const list = byId("report-upcoming-withdrawals-list");
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
  const banner = byId(prefix === "report-advisor" ? "report-smart-advisor-banner" : "smart-advisor-banner");
  if (!banner) return;

  const monthKey = (prefix === "report-advisor" ? reportMonth : currentMonth).slice(0, 7);
  const advices = generateSmartAdvices(monthKey);
  if (!advices.length) return;

  const idx = prefix === "report-advisor" ? advisorReportIndex : advisorHomeIndex;
  const currentAdvice = advices[idx % advices.length];

  const badgeEl = byId(prefix === "report-advisor" ? "report-advisor-badge" : "advisor-badge");
  const textEl = byId(prefix === "report-advisor" ? "report-advisor-text" : "advisor-text");
  const unsetAdvisorTextEl = byId("advisor-text-unset");

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

  const banner = byId(prefix === "report-advisor" ? "report-smart-advisor-banner" : "smart-advisor-banner");
  if (banner) {
    banner.classList.remove("banner-pulse");
    void banner.offsetWidth;
    banner.classList.add("banner-pulse");
  }
  const unsetBanner = byId("smart-advisor-banner-unset");
  if (unsetBanner) {
    unsetBanner.classList.remove("banner-pulse");
    void unsetBanner.offsetWidth;
    unsetBanner.classList.add("banner-pulse");
  }

  renderSmartAdvisor(prefix);
}
function renderMonthComparisonBanner() {
  const banner = byId("report-month-comparison-card");
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
  const container = byId("payment-methods-breakdown");
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
  const container = byId("fixed-vs-other-breakdown");
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
  const legendContainer = byId("category-chart-legend");
  const chartCanvas = byId("category-chart");
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
  const chartCanvas = byId("monthly-trend-chart");
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
