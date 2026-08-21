(function (global) {
  "use strict";

  const CREDIT_PAYMENT = "クレジットカード";

  function pad2(value) {
    return String(value).padStart(2, "0");
  }

  function isValidDateParts(year, month, day) {
    const date = new Date(year, month - 1, day, 12, 0, 0, 0);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  }

  function parseDateKey(value) {
    if (typeof value !== "string") return null;
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (!match) return null;
    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    if (!isValidDateParts(year, month, day)) return null;
    return new Date(year, month - 1, day, 12, 0, 0, 0);
  }

  function toDateKey(date) {
    return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
  }

  function todayKey() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(new Date());
    const values = Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
    return `${values.year}-${values.month}-${values.day}`;
  }

  function monthKeyFromDateKey(dateKey) {
    return typeof dateKey === "string" && /^\d{4}-\d{2}/.test(dateKey) ? dateKey.slice(0, 7) : "";
  }

  function daysInMonth(year, monthIndex) {
    return new Date(year, monthIndex + 1, 0, 12).getDate();
  }

  function clampDay(year, monthIndex, day) {
    return Math.min(Math.max(1, Number(day) || 1), daysInMonth(year, monthIndex));
  }

  function addDays(dateKey, amount) {
    const date = parseDateKey(dateKey);
    if (!date) return "";
    date.setDate(date.getDate() + Number(amount || 0));
    return toDateKey(date);
  }

  function addMonths(year, monthIndex, amount) {
    const result = new Date(year, monthIndex + amount, 1, 12);
    return { year: result.getFullYear(), monthIndex: result.getMonth() };
  }

  function adjustWeekend(date, mode) {
    if (mode !== "previous" && mode !== "next") return date;
    const result = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
    const direction = mode === "previous" ? -1 : 1;
    while (result.getDay() === 0 || result.getDay() === 6) {
      result.setDate(result.getDate() + direction);
    }
    return result;
  }

  function calculatePaymentDate(purchaseDateKey, card) {
    const purchaseDate = parseDateKey(purchaseDateKey);
    if (!purchaseDate || !card) return "";

    const purchaseYear = purchaseDate.getFullYear();
    const purchaseMonth = purchaseDate.getMonth();
    const purchaseDay = purchaseDate.getDate();
    let closingYear = purchaseYear;
    let closingMonth = purchaseMonth;

    if (card.closingDay !== "end") {
      const closingDay = Math.min(28, Math.max(1, Number(card.closingDay) || 1));
      if (purchaseDay > closingDay) {
        const next = addMonths(purchaseYear, purchaseMonth, 1);
        closingYear = next.year;
        closingMonth = next.monthIndex;
      }
    }

    const paymentOffset = Number(card.paymentMonth) === 0 ? 0 : 1;
    const paymentMonth = addMonths(closingYear, closingMonth, paymentOffset);
    const paymentDay = clampDay(paymentMonth.year, paymentMonth.monthIndex, Number(card.paymentDay) || 1);
    const unadjusted = new Date(paymentMonth.year, paymentMonth.monthIndex, paymentDay, 12);
    return toDateKey(adjustWeekend(unadjusted, card.weekendAdjustment || "none"));
  }

  function getExpensePaymentDate(expense, cards) {
    if (!expense || expense.paymentMethod !== CREDIT_PAYMENT) return "";
    if (parseDateKey(expense.paymentDateOverride)) return expense.paymentDateOverride;
    if (parseDateKey(expense.calculatedPaymentDate)) return expense.calculatedPaymentDate;
    const card = (cards || []).find((item) => item.id === expense.cardId);
    return calculatePaymentDate(expense.date, card);
  }

  function normalizeAmount(value) {
    const numeric = typeof value === "string" ? Number(value.replace(/[^0-9-]/g, "")) : Number(value);
    if (!Number.isFinite(numeric)) return 0;
    return Math.max(0, Math.round(numeric));
  }

  function isDirectPayment(expense) {
    return expense && expense.paymentMethod !== CREDIT_PAYMENT;
  }

  function buildDailyTotals(expenses, cards, manualPayments) {
    const totals = new Map();
    const ensure = (dateKey) => {
      if (!totals.has(dateKey)) {
        totals.set(dateKey, { usage: 0, direct: 0, cardWithdrawal: 0, outflow: 0 });
      }
      return totals.get(dateKey);
    };

    (expenses || []).forEach((expense) => {
      if (!parseDateKey(expense.date)) return;
      const amount = normalizeAmount(expense.amount);
      const usageDay = ensure(expense.date);
      usageDay.usage += amount;
      if (isDirectPayment(expense)) {
        usageDay.direct += amount;
        usageDay.outflow += amount;
      } else {
        const paymentDate = getExpensePaymentDate(expense, cards);
        if (paymentDate) {
          const paymentDay = ensure(paymentDate);
          paymentDay.cardWithdrawal += amount;
          paymentDay.outflow += amount;
        }
      }
    });

    (manualPayments || []).forEach((payment) => {
      if (!parseDateKey(payment.date)) return;
      const amount = normalizeAmount(payment.amount);
      const paymentDay = ensure(payment.date);
      paymentDay.cardWithdrawal += amount;
      paymentDay.outflow += amount;
    });

    return totals;
  }

  function summarizeMonth(monthKey, expenses, cards, manualPayments) {
    const daily = buildDailyTotals(expenses, cards, manualPayments);
    const summary = {
      usage: 0,
      direct: 0,
      cardWithdrawal: 0,
      outflow: 0,
      categories: {},
    };

    (expenses || []).forEach((expense) => {
      if (monthKeyFromDateKey(expense.date) !== monthKey) return;
      const amount = normalizeAmount(expense.amount);
      summary.usage += amount;
      summary.categories[expense.category || "その他"] = (summary.categories[expense.category || "その他"] || 0) + amount;
    });

    daily.forEach((value, dateKey) => {
      if (monthKeyFromDateKey(dateKey) !== monthKey) return;
      summary.direct += value.direct;
      summary.cardWithdrawal += value.cardWithdrawal;
      summary.outflow += value.outflow;
    });
    return summary;
  }

  function getUpcomingCardTotal(startDateKey, days, expenses, cards, manualPayments) {
    const endDateKey = addDays(startDateKey, days);
    if (!endDateKey) return 0;
    const daily = buildDailyTotals(expenses, cards, manualPayments);
    let total = 0;
    daily.forEach((value, dateKey) => {
      if (dateKey >= startDateKey && dateKey <= endDateKey) total += value.cardWithdrawal;
    });
    return total;
  }

  function getNextCardWithdrawal(startDateKey, expenses, cards, manualPayments) {
    const daily = buildDailyTotals(expenses, cards, manualPayments);
    const candidates = [];
    daily.forEach((value, dateKey) => {
      if (dateKey >= startDateKey && value.cardWithdrawal > 0) {
        candidates.push({ date: dateKey, amount: value.cardWithdrawal });
      }
    });
    candidates.sort((a, b) => a.date.localeCompare(b.date));
    return candidates[0] || null;
  }

  function isValidStateShape(data) {
    if (!data || typeof data !== "object") return false;
    return Array.isArray(data.expenses) && Array.isArray(data.cards) && Array.isArray(data.manualPayments) && data.settings && typeof data.settings === "object";
  }

  const api = {
    CREDIT_PAYMENT,
    addDays,
    buildDailyTotals,
    calculatePaymentDate,
    daysInMonth,
    getExpensePaymentDate,
    getNextCardWithdrawal,
    getUpcomingCardTotal,
    isDirectPayment,
    isValidStateShape,
    monthKeyFromDateKey,
    normalizeAmount,
    parseDateKey,
    summarizeMonth,
    toDateKey,
    todayKey,
  };

  global.AtoIkuraCore = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
