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

// 自動計算済みの支払日は、カード設定を読み直せない場合でも保持される。
daily = Core.buildDailyTotals([
  expense({
    paymentMethod: Core.CREDIT_PAYMENT,
    cardId: "missing-card",
    calculatedPaymentDate: "2026-09-27",
  }),
], [], []);
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

// 土日調整。
const weekendCard = { closingDay: "end", paymentDay: 27, paymentMonth: 1, weekendAdjustment: "next" };
assert.equal(Core.calculatePaymentDate("2026-08-01", weekendCard), "2026-09-28");

// 個別の手動支払日を優先する。
assert.equal(Core.getExpensePaymentDate(expense({ paymentMethod: Core.CREDIT_PAYMENT, cardId: monthEndCard.id, paymentDateOverride: "2026-09-25" }), [monthEndCard]), "2026-09-25");

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

console.log("Core tests: 18 assertions passed.");
