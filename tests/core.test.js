"use strict";

const assert = require("node:assert/strict");
const Core = require("../core.js");

const monthEndCard = {
  id: "card-a",
  closingDay: "end",
  paymentDay: 27,
  paymentMonth: 1,
  weekendAdjustment: "none",
};

const fifteenthCard = {
  id: "card-b",
  closingDay: 15,
  paymentDay: 10,
  paymentMonth: 1,
  weekendAdjustment: "none",
};

function expense(overrides) {
  return {
    id: "expense",
    amount: 1000,
    date: "2026-08-20",
    category: "食費",
    paymentMethod: "現金",
    cardId: "",
    paymentDateOverride: "",
    ...overrides,
  };
}

// 1. 現金は利用日当日の利用額・出金額になる。
let daily = Core.buildDailyTotals([expense({ paymentMethod: "現金" })], [], []);
assert.equal(daily.get("2026-08-20").usage, 1000);
assert.equal(daily.get("2026-08-20").outflow, 1000);

// 2・3. クレジットカードは利用日の出金にならず、支払日の引き落としになる。
daily = Core.buildDailyTotals([
  expense({ paymentMethod: Core.CREDIT_PAYMENT, cardId: monthEndCard.id }),
], [monthEndCard], []);
assert.equal(daily.get("2026-08-20").usage, 1000);
assert.equal(daily.get("2026-08-20").outflow, 0);
assert.equal(daily.get("2026-09-27").cardWithdrawal, 1000);

// 4. 複数カードは別々の支払日に集計される。
daily = Core.buildDailyTotals([
  expense({ id: "a", paymentMethod: Core.CREDIT_PAYMENT, cardId: monthEndCard.id }),
  expense({ id: "b", paymentMethod: Core.CREDIT_PAYMENT, cardId: fifteenthCard.id, date: "2026-08-20", amount: 2000 }),
], [monthEndCard, fifteenthCard], []);
assert.equal(daily.get("2026-09-27").cardWithdrawal, 1000);
assert.equal(daily.get("2026-10-10").cardWithdrawal, 2000);

// 5. 月末締め・15日締めの境界。
assert.equal(Core.calculatePaymentDate("2026-08-31", monthEndCard), "2026-09-27");
assert.equal(Core.calculatePaymentDate("2026-08-15", fifteenthCard), "2026-09-10");
assert.equal(Core.calculatePaymentDate("2026-08-16", fifteenthCard), "2026-10-10");

// 6. 12月から翌年1月へ正しくまたぐ。
const currentMonthCard = { closingDay: 10, paymentDay: 27, paymentMonth: 0, weekendAdjustment: "none" };
assert.equal(Core.calculatePaymentDate("2026-12-11", currentMonthCard), "2027-01-27");

// 7. 存在しない支払日は月末へ調整し、うるう年にも対応する。
const day31Card = { closingDay: "end", paymentDay: 31, paymentMonth: 1, weekendAdjustment: "none" };
assert.equal(Core.calculatePaymentDate("2028-01-31", day31Card), "2028-02-29");
assert.equal(Core.calculatePaymentDate("2027-01-31", day31Card), "2027-02-28");

// 土日・祝日調整。
const weekendCard = { closingDay: "end", paymentDay: 27, paymentMonth: 1, weekendAdjustment: "next" };
assert.equal(Core.calculatePaymentDate("2026-08-01", weekendCard), "2026-09-28"); // 2026-09-27(日) -> 2026-09-28(月)

// 祝日の自動判定とスライド
// 2026-05-03は日曜日(憲法記念日)、05-04みどりの日、05-05こどもの日、05-06振替休日 -> nextなら05-07(木)へ
const mayHolidayCard = { closingDay: "end", paymentDay: 3, paymentMonth: 1, weekendAdjustment: "next" };
assert.equal(Core.calculatePaymentDate("2026-04-01", mayHolidayCard), "2026-05-07");

// 2026-11-23は月曜日(勤労感謝の日) -> previousなら2026-11-20(金)へ
const novHolidayPrevCard = { closingDay: "end", paymentDay: 23, paymentMonth: 1, weekendAdjustment: "previous" };
assert.equal(Core.calculatePaymentDate("2026-10-01", novHolidayPrevCard), "2026-11-20");

// 祝日判定関数
assert.equal(Core.isJapaneseHoliday(new Date(2026, 0, 1, 12)), true); // 元日
assert.equal(Core.isJapaneseHoliday(new Date(2026, 0, 12, 12)), true); // 成人の日 (1/12)
assert.equal(Core.isJapaneseHoliday(new Date(2026, 1, 11, 12)), true); // 建国記念の日
assert.equal(Core.isJapaneseHoliday(new Date(2026, 1, 23, 12)), true); // 天皇誕生日
assert.equal(Core.isJapaneseHoliday(new Date(2026, 2, 20, 12)), true); // 春分の日 (2026/3/20)
assert.equal(Core.isJapaneseHoliday(new Date(2026, 4, 3, 12)), true); // 憲法記念日
assert.equal(Core.isJapaneseHoliday(new Date(2026, 4, 6, 12)), true); // 振替休日
assert.equal(Core.isJapaneseHoliday(new Date(2026, 4, 7, 12)), false); // 平日
assert.equal(Core.isJapaneseHoliday(new Date(2026, 7, 11, 12)), true); // 山の日
assert.equal(Core.isJapaneseHoliday(new Date(2026, 8, 21, 12)), true); // 敬老の日
assert.equal(Core.isJapaneseHoliday(new Date(2026, 8, 22, 12)), true); // 国民の休日
assert.equal(Core.isJapaneseHoliday(new Date(2026, 8, 23, 12)), true); // 秋分の日

// 給料日サイクルのテスト (25日スタート)
const range25 = Core.getCycleRange("2026-09", 25);
assert.equal(range25.startDate, "2026-09-25");
assert.equal(range25.endDate, "2026-10-24");

const range1 = Core.getCycleRange("2026-09", 1);
assert.equal(range1.startDate, "2026-09-01");
assert.equal(range1.endDate, "2026-09-30");

assert.equal(Core.getDateCycleMonthKey("2026-09-25", 25), "2026-09");
assert.equal(Core.getDateCycleMonthKey("2026-10-24", 25), "2026-09");
assert.equal(Core.getDateCycleMonthKey("2026-09-24", 25), "2026-08");

// 給料日サイクルでの月間集計テスト
const payCycleExpenses = [
  expense({ id: "e1", date: "2026-09-20", amount: 1000 }), // 8月度(8/25-9/24)
  expense({ id: "e2", date: "2026-09-25", amount: 2000 }), // 9月度(9/25-10/24)
  expense({ id: "e3", date: "2026-10-10", amount: 3000 }), // 9月度(9/25-10/24)
  expense({ id: "e4", date: "2026-10-25", amount: 4000 }), // 10月度(10/25-11/24)
];
const augSummary25 = Core.summarizeMonth("2026-08", payCycleExpenses, [], [], 25);
assert.equal(augSummary25.usage, 1000);
const sepSummary25 = Core.summarizeMonth("2026-09", payCycleExpenses, [], [], 25);
assert.equal(sepSummary25.usage, 5000); // 2000 + 3000

// 個別の手動支払日を優先する。
assert.equal(Core.getExpensePaymentDate(expense({ paymentMethod: Core.CREDIT_PAYMENT, cardId: monthEndCard.id, paymentDateOverride: "2026-09-25" }), [monthEndCard]), "2026-09-25");

// 登録時に保存した自動計算日を優先する。
assert.equal(Core.getExpensePaymentDate(expense({ paymentMethod: Core.CREDIT_PAYMENT, cardId: monthEndCard.id, calculatedPaymentDate: "2026-09-26" }), [monthEndCard]), "2026-09-26");

// 8. 編集・削除に相当する配列変更後、合計が再計算される。
let items = [expense({ amount: 1000 }), expense({ id: "two", amount: 500 })];
assert.equal(Core.summarizeMonth("2026-08", items, [], []).usage, 1500);
items[0].amount = 2000;
assert.equal(Core.summarizeMonth("2026-08", items, [], []).usage, 2500);
items = items.filter((item) => item.id !== "two");
assert.equal(Core.summarizeMonth("2026-08", items, [], []).usage, 2000);

// 10. 書き出したJSON相当のデータを再解析・検証できる。
const state = { expenses: [], cards: [], manualPayments: [], settings: {} };
const restored = JSON.parse(JSON.stringify({ data: state })).data;
assert.equal(Core.isValidStateShape(restored), true);

console.log("Core tests: all assertions passed successfully.");
