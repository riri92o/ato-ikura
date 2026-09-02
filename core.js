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

  function isSameDate(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
  }

  function getVernalEquinoxDay(year) {
    return Math.floor(20.8431 + 0.242194 * (year - 1980) - Math.floor((year - 1980) / 4));
  }

  function getAutumnalEquinoxDay(year) {
    return Math.floor(23.2488 + 0.242194 * (year - 1980) - Math.floor((year - 1980) / 4));
  }

  function getNthMonday(year, monthIndex, n) {
    const firstDay = new Date(year, monthIndex, 1, 12).getDay();
    const offset = (8 - firstDay) % 7;
    return 1 + offset + (n - 1) * 7;
  }

  function isFixedOrCalculatedHoliday(year, monthIndex, day) {
    // monthIndex: 0-indexed (0 = 1月, 11 = 12月)
    const m = monthIndex + 1;
    if (m === 1) {
      if (day === 1) return true; // 元日
      if (day === getNthMonday(year, 0, 2)) return true; // 成人の日 (第2月曜)
    } else if (m === 2) {
      if (day === 11) return true; // 建国記念の日
      if (year >= 2020 && day === 23) return true; // 天皇誕生日
    } else if (m === 3) {
      if (day === getVernalEquinoxDay(year)) return true; // 春分の日
    } else if (m === 4) {
      if (day === 29) return true; // 昭和の日
    } else if (m === 5) {
      if (day === 3 || day === 4 || day === 5) return true; // 憲法記念日, みどりの日, こどもの日
    } else if (m === 7) {
      if (day === getNthMonday(year, 6, 3)) return true; // 海の日 (第3月曜)
    } else if (m === 8) {
      if (year >= 2016 && day === 11) return true; // 山の日
    } else if (m === 9) {
      if (day === getNthMonday(year, 8, 3)) return true; // 敬老の日 (第3月曜)
      if (day === getAutumnalEquinoxDay(year)) return true; // 秋分の日
    } else if (m === 10) {
      if (day === getNthMonday(year, 9, 2)) return true; // スポーツの日 (第2月曜)
    } else if (m === 11) {
      if (day === 3 || day === 23) return true; // 文化の日, 勤労感謝の日
    }
    return false;
  }

  function isJapaneseHoliday(date) {
    if (!date) return false;
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = date.getDate();

    if (isFixedOrCalculatedHoliday(year, monthIndex, day)) return true;

    // 国民の休日（前日と翌日の両方が祝日である平日）
    const prevDate = new Date(year, monthIndex, day - 1, 12);
    const nextDate = new Date(year, monthIndex, day + 1, 12);
    if (
      date.getDay() !== 0 &&
      isFixedOrCalculatedHoliday(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate()) &&
      isFixedOrCalculatedHoliday(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate())
    ) {
      return true;
    }

    // 振替休日判定（日曜日が祝日の場合、それ以降の直近の祝日でない平日）
    if (date.getDay() !== 0) {
      let check = new Date(year, monthIndex, day - 1, 12);
      while (isFixedOrCalculatedHoliday(check.getFullYear(), check.getMonth(), check.getDate())) {
        if (check.getDay() === 0) {
          // 日曜日まで遡れて祝日だったなら、この日は振替休日
          return true;
        }
        check.setDate(check.getDate() - 1);
      }
    }

    return false;
  }

  function isNonBusinessDay(date) {
    if (!date) return false;
    const day = date.getDay();
    if (day === 0 || day === 6) return true; // 土日
    return isJapaneseHoliday(date); // 日本の祝日・振替休日・国民の休日
  }

  function adjustWeekend(date, mode) {
    if (mode !== "previous" && mode !== "next") return date;
    const result = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
    const direction = mode === "previous" ? -1 : 1;
    while (isNonBusinessDay(result)) {
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

  function calculateScheduledPaymentDate(monthDateKey, card) {
    const monthDate = parseDateKey(monthDateKey);
    if (!monthDate || !card) return "";

    const year = monthDate.getFullYear();
    const monthIndex = monthDate.getMonth();
    const paymentDay = clampDay(
      year,
      monthIndex,
      Number(card.paymentDay) || 1
    );

    const unadjusted = new Date(
      year,
      monthIndex,
      paymentDay,
      12
    );

    return toDateKey(
      adjustWeekend(
        unadjusted,
        card.weekendAdjustment || "none"
      )
    );
  }

  function getExpensePaymentDate(expense, cards) {
    if (!expense || expense.paymentMethod !== CREDIT_PAYMENT) return "";

    // 手動変更があれば最優先
    if (parseDateKey(expense.paymentDateOverride)) {
      return expense.paymentDateOverride;
    }

    // 登録時に保存した自動計算日
    if (parseDateKey(expense.calculatedPaymentDate)) {
      return expense.calculatedPaymentDate;
    }

    // カード設定から再計算
    const card = (cards || []).find((item) => item.id === expense.cardId);

    if (card) {
      return calculatePaymentDate(expense.date, card);
    }

    return "";
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

  function getCycleRange(monthKey, cycleStartDay) {
    const parsed = parseDateKey(`${monthKey}-01`);
    if (!parsed) return { startDate: `${monthKey}-01`, endDate: `${monthKey}-28`, label: monthKey };

    const year = parsed.getFullYear();
    const monthIndex = parsed.getMonth();
    const startDayNum = cycleStartDay === "end" ? "end" : Math.min(28, Math.max(1, Number(cycleStartDay) || 1));

    if (startDayNum === 1) {
      const lastDay = daysInMonth(year, monthIndex);
      const start = `${year}-${pad2(monthIndex + 1)}-01`;
      const end = `${year}-${pad2(monthIndex + 1)}-${pad2(lastDay)}`;
      return {
        startDate: start,
        endDate: end,
        label: `${monthIndex + 1}月1日〜${monthIndex + 1}月${lastDay}日`,
        shortLabel: `${monthIndex + 1}/1〜${monthIndex + 1}/${lastDay}`,
      };
    }

    if (startDayNum === "end") {
      const curLastDay = daysInMonth(year, monthIndex);
      const nextMonth = addMonths(year, monthIndex, 1);
      const nextLastDay = daysInMonth(nextMonth.year, nextMonth.monthIndex);
      const start = `${year}-${pad2(monthIndex + 1)}-${pad2(curLastDay)}`;
      const end = `${nextMonth.year}-${pad2(nextMonth.monthIndex + 1)}-${pad2(nextLastDay - 1)}`;
      return {
        startDate: start,
        endDate: end,
        label: `${monthIndex + 1}月末〜${nextMonth.monthIndex + 1}月末前日`,
        shortLabel: `${monthIndex + 1}月末〜${nextMonth.monthIndex + 1}/${nextLastDay - 1}`,
      };
    }

    const start = `${year}-${pad2(monthIndex + 1)}-${pad2(startDayNum)}`;
    const nextMonth = addMonths(year, monthIndex, 1);
    const endDayNum = startDayNum - 1;
    const end = `${nextMonth.year}-${pad2(nextMonth.monthIndex + 1)}-${pad2(endDayNum)}`;

    return {
      startDate: start,
      endDate: end,
      label: `${monthIndex + 1}月${startDayNum}日〜${nextMonth.monthIndex + 1}月${endDayNum}日`,
      shortLabel: `${monthIndex + 1}/${startDayNum}〜${nextMonth.monthIndex + 1}/${endDayNum}`,
    };
  }

  function getDateCycleMonthKey(dateKey, cycleStartDay) {
    const date = parseDateKey(dateKey);
    if (!date) return "";
    const startDayNum = cycleStartDay === "end" ? "end" : Math.min(28, Math.max(1, Number(cycleStartDay) || 1));
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = date.getDate();

    if (startDayNum === 1) {
      return `${year}-${pad2(monthIndex + 1)}`;
    }

    if (startDayNum === "end") {
      const lastDay = daysInMonth(year, monthIndex);
      if (day === lastDay) {
        return `${year}-${pad2(monthIndex + 1)}`;
      }
      const prev = addMonths(year, monthIndex, -1);
      return `${prev.year}-${pad2(prev.monthIndex + 1)}`;
    }

    if (day >= startDayNum) {
      return `${year}-${pad2(monthIndex + 1)}`;
    } else {
      const prev = addMonths(year, monthIndex, -1);
      return `${prev.year}-${pad2(prev.monthIndex + 1)}`;
    }
  }

  function summarizeMonth(monthKey, expenses, cards, manualPayments, cycleStartDay = 1) {
    const range = getCycleRange(monthKey, cycleStartDay);
    const daily = buildDailyTotals(expenses, cards, manualPayments);
    const summary = {
      usage: 0,
      direct: 0,
      cardWithdrawal: 0,
      outflow: 0,
      categories: {},
      startDate: range.startDate,
      endDate: range.endDate,
      label: range.label,
      shortLabel: range.shortLabel,
    };

    (expenses || []).forEach((expense) => {
      if (!parseDateKey(expense.date)) return;
      if (expense.date >= range.startDate && expense.date <= range.endDate) {
        const amount = normalizeAmount(expense.amount);
        summary.usage += amount;
        summary.categories[expense.category || "その他"] = (summary.categories[expense.category || "その他"] || 0) + amount;
      }
    });

    daily.forEach((value, dateKey) => {
      if (dateKey >= range.startDate && dateKey <= range.endDate) {
        summary.direct += value.direct;
        summary.cardWithdrawal += value.cardWithdrawal;
        summary.outflow += value.outflow;
      }
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
    addMonths,
    buildDailyTotals,
    calculatePaymentDate,
    calculateScheduledPaymentDate,
    daysInMonth,
    getCycleRange,
    getDateCycleMonthKey,
    getExpensePaymentDate,
    getNextCardWithdrawal,
    getUpcomingCardTotal,
    isDirectPayment,
    isJapaneseHoliday,
    isNonBusinessDay,
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

