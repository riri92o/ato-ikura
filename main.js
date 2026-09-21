"use strict";

/* Application initialization and DOM event registration. */

document.addEventListener("DOMContentLoaded", initialize);
function initialize() {
  initSplashScreen();
  document.title = APP.name;
  const titleEl = byId("app-title");
  if (titleEl) titleEl.textContent = APP.name;
  byId("app-version").textContent = `${APP.name} v${APP.version}`;
  populateStaticSelects();
  bindEvents();
  applyTheme();
  setupHomeWidgetsDragAndDrop();
  setupFloatingThemePreviewDrag();
  byId("history-month").value = currentMonth.slice(0, 7);
  renderAll();
  registerServiceWorker();
  checkFirstTimeOnboarding();
}
function initSplashScreen() {
  const splash = byId("app-splash-screen");
  if (!splash) return;
  const hideSplash = () => {
    splash.classList.add("is-hidden");
    setTimeout(() => {
      splash.style.display = "none";
    }, 450);
  };
  const splashDuration = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 450 : 1650;
  setTimeout(hideSplash, splashDuration);
  splash.addEventListener("click", hideSplash, { once: true });
}
function checkFirstTimeOnboarding() {
  const hasOnboarded = localStorage.getItem(APP.onboardedKey);
  const hasData = state.expenses.length > 0 || state.cards.length > 0 || Object.keys(state.budgets || {}).length > 0;
  if (!hasOnboarded && !hasData) {
    const onboardingDelay = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 550 : 2150;
    window.setTimeout(() => {
      const dialog = byId("onboarding-dialog");
      if (dialog) showDialog(dialog);
    }, onboardingDelay);
  }
}
function populateStaticSelects() {
  fillSelect(byId("expense-category"), CATEGORIES.map((value) => ({ value, label: value })));
  fillSelect(byId("expense-payment"), PAYMENT_METHODS.map((value) => ({ value, label: value })));
  fillSelect(byId("history-category"), [{ value: "", label: "すべて" }, ...CATEGORIES.map((value) => ({ value, label: value }))]);
  fillSelect(byId("history-payment"), [{ value: "", label: "すべて" }, ...PAYMENT_METHODS.map((value) => ({ value, label: value }))]);

  const closingOptions = [{ value: "end", label: "月末" }];
  const paymentOptions = [];
  for (let day = 1; day <= 28; day += 1) {
    closingOptions.push({ value: String(day), label: `${day}日` });
  }
  for (let day = 1; day <= 31; day += 1) {
    paymentOptions.push({ value: String(day), label: `${day}日` });
  }
  fillSelect(byId("card-closing-day"), closingOptions);
  fillSelect(byId("card-payment-day"), paymentOptions);
  byId("card-payment-day").value = "27";

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
  fillSelect(byId("setting-cycle-start-day"), cycleOptions);

  // 固定費・サブスク用セレクト
  const subDayOptions = [];
  for (let day = 1; day <= 31; day += 1) {
    subDayOptions.push({ value: String(day), label: `毎月${day}日` });
  }
  subDayOptions.push({ value: "end", label: "毎月末日" });
  const subDayEl = byId("sub-day-select");
  if (subDayEl) fillSelect(subDayEl, subDayOptions);

  const subCategoryEl = byId("sub-category-select");
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
  byId("prev-month").addEventListener("click", () => moveMonth(-1));
  byId("next-month").addEventListener("click", () => moveMonth(1));
  const todayBtn = byId("today-button");
  if (todayBtn) todayBtn.addEventListener("click", goToday);
  byId("month-picker-button").addEventListener("click", () => {
    const picker = byId("month-picker");
    picker.value = currentMonth.slice(0, 7);
    if (typeof picker.showPicker === "function") picker.showPicker();
    else picker.click();
  });
  byId("month-picker").addEventListener("change", (event) => {
    if (/^\d{4}-\d{2}$/.test(event.target.value)) {
      currentMonth = `${event.target.value}-01`;
      renderCalendarView();
    }
  });

  byId("report-prev-month").addEventListener("click", () => moveReportMonth(-1));
  byId("report-next-month").addEventListener("click", () => moveReportMonth(1));
  byId("report-month-picker-button").addEventListener("click", () => {
    const picker = byId("report-month-picker");
    picker.value = reportMonth.slice(0, 7);
    if (typeof picker.showPicker === "function") picker.showPicker();
    else picker.click();
  });
  byId("report-month-picker").addEventListener("change", (event) => {
    if (/^\d{4}-\d{2}$/.test(event.target.value)) {
      reportMonth = `${event.target.value}-01`;
      renderReport();
    }
  });

  const reportOutlookBtn = byId("report-tab-outlook-btn");
  const reportAnalysisBtn = byId("report-tab-analysis-btn");
  if (reportOutlookBtn) reportOutlookBtn.addEventListener("click", () => switchReportSubTab("outlook"));
  if (reportAnalysisBtn) reportAnalysisBtn.addEventListener("click", () => switchReportSubTab("analysis"));

  const smartAdvisor = byId("smart-advisor-banner");
  if (smartAdvisor) smartAdvisor.addEventListener("click", () => nextSmartAdvice("advisor"));
  const smartAdvisorUnset = byId("smart-advisor-banner-unset");
  if (smartAdvisorUnset) smartAdvisorUnset.addEventListener("click", () => nextSmartAdvice("advisor"));

  const reportAdvisor = byId("report-smart-advisor-banner");
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
  byId("quick-add-button").addEventListener("click", () => openExpenseDialog(Core.todayKey()));
  const addEmoneyFab = byId("add-emoney-fab");
  if (addEmoneyFab) addEmoneyFab.addEventListener("click", () => openEmoneyDialog());
  byId("add-card-button").addEventListener("click", () => openCardDialog());
  byId("open-balance-settings").addEventListener("click", () => {
    switchView("settings");
    switchSettingsSubView("balance");
  });

  // 支払い画面（カード / QR・電子マネー / 固定費・サブスク）切り替え
  const payTabCards = byId("payments-tab-cards");
  if (payTabCards) payTabCards.addEventListener("click", () => switchPaymentsSubview("cards"));
  const payTabEmoney = byId("payments-tab-emoney");
  if (payTabEmoney) payTabEmoney.addEventListener("click", () => switchPaymentsSubview("emoney"));
  const payTabSubs = byId("payments-tab-subscriptions");
  if (payTabSubs) payTabSubs.addEventListener("click", () => switchPaymentsSubview("subscriptions"));

  // QR・電子マネー 操作
  const addEmoneyBtn = byId("add-emoney-button");
  if (addEmoneyBtn) addEmoneyBtn.addEventListener("click", () => openEmoneyDialog());

  const emoneyDetailChargeBtn = byId("emoney-detail-charge-btn");
  if (emoneyDetailChargeBtn) emoneyDetailChargeBtn.addEventListener("click", () => openChargeDialog(selectedDetailEmoneyId));
  const emoneyDetailAdjustBtn = byId("emoney-detail-adjust-btn");
  if (emoneyDetailAdjustBtn) emoneyDetailAdjustBtn.addEventListener("click", () => openEmoneyAdjustDialog(selectedDetailEmoneyId));

  const emoneyForm = byId("emoney-form");
  if (emoneyForm) emoneyForm.addEventListener("submit", saveEmoneyFromForm);
  const deleteEmoneyBtn = byId("delete-emoney-btn");
  if (deleteEmoneyBtn) deleteEmoneyBtn.addEventListener("click", deleteCurrentEmoney);
  const emoneyInitialBal = byId("emoney-initial-balance");
  if (emoneyInitialBal) emoneyInitialBal.addEventListener("blur", formatMoneyInput);

  const chargeForm = byId("charge-form");
  if (chargeForm) chargeForm.addEventListener("submit", saveChargeFromForm);
  const deleteChargeBtn = byId("delete-charge-btn");
  if (deleteChargeBtn) deleteChargeBtn.addEventListener("click", deleteCurrentCharge);
  const chargeAmtInput = byId("charge-amount");
  if (chargeAmtInput) chargeAmtInput.addEventListener("blur", formatMoneyInput);

  const adjustForm = byId("emoney-adjust-form");
  if (adjustForm) adjustForm.addEventListener("submit", saveEmoneyAdjustFromForm);
  const adjustTargetInput = byId("adjust-target-balance");
  if (adjustTargetInput) {
    adjustTargetInput.addEventListener("blur", formatMoneyInput);
    adjustTargetInput.addEventListener("input", updateAdjustDiffPreview);
  }

  document.querySelectorAll("#emoney-color-presets .color-preset-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const color = chip.dataset.color;
      const input = byId("emoney-color");
      if (input) input.value = color;
      document.querySelectorAll("#emoney-color-presets .color-preset-chip").forEach((c) => {
        c.classList.toggle("is-active", c.dataset.color === color);
      });
    });
  });

  const homeEmoneyWidget = byId("home-emoney-widget-card");
  if (homeEmoneyWidget) {
    homeEmoneyWidget.addEventListener("click", () => {
      switchView("cards");
      switchPaymentsSubview("emoney");
    });
  }

  // 固定費・サブスク ツールバー＆フィルター
  const subPrev = byId("sub-prev-month");
  if (subPrev) subPrev.addEventListener("click", () => moveSubscriptionMonth(-1));
  const subNext = byId("sub-next-month");
  if (subNext) subNext.addEventListener("click", () => moveSubscriptionMonth(1));
  const subPickerBtn = byId("sub-month-picker-button");
  if (subPickerBtn) {
    subPickerBtn.addEventListener("click", () => {
      const picker = byId("sub-month-picker");
      picker.value = subscriptionMonth.slice(0, 7);
      if (typeof picker.showPicker === "function") picker.showPicker();
      else picker.click();
    });
  }
  const subPicker = byId("sub-month-picker");
  if (subPicker) {
    subPicker.addEventListener("change", (event) => {
      if (/^\d{4}-\d{2}$/.test(event.target.value)) {
        subscriptionMonth = `${event.target.value}-01`;
        renderSubscriptionsView();
      }
    });
  }

  const addSubBtn = byId("add-subscription-button");
  if (addSubBtn) addSubBtn.addEventListener("click", () => openSubscriptionDialog());
  const emptyAddSubBtn = byId("sub-empty-add-btn");
  if (emptyAddSubBtn) emptyAddSubBtn.addEventListener("click", () => openSubscriptionDialog());

  const scopeMonth = byId("sub-scope-month");
  if (scopeMonth) scopeMonth.addEventListener("click", () => switchSubscriptionScope("month"));
  const scopeAll = byId("sub-scope-all");
  if (scopeAll) scopeAll.addEventListener("click", () => switchSubscriptionScope("all"));

  document.querySelectorAll("[data-filter-pay]").forEach((btn) => {
    btn.addEventListener("click", () => setSubscriptionFilterPay(btn.dataset.filterPay));
  });
  document.querySelectorAll("[data-filter-type]").forEach((btn) => {
    btn.addEventListener("click", () => setSubscriptionFilterType(btn.dataset.filterType));
  });

  // 固定費・サブスク フォーム制御
  const subForm = byId("subscription-form");
  if (subForm) subForm.addEventListener("submit", saveSubscriptionFromForm);
  const deleteSubBtn = byId("delete-subscription-btn");
  if (deleteSubBtn) deleteSubBtn.addEventListener("click", deleteCurrentSubscription);
  const subAmtInput = byId("sub-amount-input");
  if (subAmtInput) subAmtInput.addEventListener("blur", formatMoneyInput);
  const subPayMethod = byId("sub-payment-method");
  if (subPayMethod) {
    subPayMethod.addEventListener("change", () => {
      if (subPayMethod.value === Core.CREDIT_PAYMENT) {
        onSubscriptionCardChange();
      }
      updateSubscriptionFormVisibility();
    });
  }
  const subCardSelect = byId("sub-card-select");
  if (subCardSelect) subCardSelect.addEventListener("change", onSubscriptionCardChange);
  const subInterval = byId("sub-interval-select");
  if (subInterval) subInterval.addEventListener("change", updateSubscriptionFormVisibility);
  const subIconPickerBtn = byId("sub-icon-picker-btn");
  if (subIconPickerBtn) subIconPickerBtn.addEventListener("click", openSubscriptionIconDialog);

  // 固定費・サブスク 詳細モーダル
  const subDetailToggleBtn = byId("sub-detail-toggle-active-btn");
  if (subDetailToggleBtn) subDetailToggleBtn.addEventListener("click", () => toggleSubscriptionActive(selectedDetailSubId));
  const subDetailEditBtn = byId("sub-detail-edit-btn");
  if (subDetailEditBtn) {
    subDetailEditBtn.addEventListener("click", () => {
      const id = selectedDetailSubId;
      closeDialog(byId("subscription-detail-dialog"));
      openSubscriptionDialog(id);
    });
  }
  const subDetailDelBtn = byId("sub-detail-delete-btn");
  if (subDetailDelBtn) subDetailDelBtn.addEventListener("click", () => deleteSubscription(selectedDetailSubId));

  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => closeDialog(byId(button.dataset.closeDialog)));
  });
  const closeExpenseBtn = byId("close-expense-dialog");
  if (closeExpenseBtn) closeExpenseBtn.addEventListener("click", () => closeDialog(byId("expense-dialog")));
  const closeCardBtn = byId("close-card-dialog");
  if (closeCardBtn) closeCardBtn.addEventListener("click", () => closeDialog(byId("card-dialog")));
  const closeManualBtn = byId("close-manual-dialog");
  if (closeManualBtn) closeManualBtn.addEventListener("click", () => closeDialog(byId("manual-payment-dialog")));
  const closeBudgetBtn = byId("close-budget-dialog");
  if (closeBudgetBtn) closeBudgetBtn.addEventListener("click", () => closeDialog(byId("budget-dialog")));
  const closeEmoneyBtn = byId("close-emoney-dialog");
  if (closeEmoneyBtn) closeEmoneyBtn.addEventListener("click", () => closeDialog(byId("emoney-dialog")));
  const closeChargeBtn = byId("close-charge-dialog");
  if (closeChargeBtn) closeChargeBtn.addEventListener("click", () => closeDialog(byId("charge-dialog")));
  const closeAdjustBtn = byId("close-emoney-adjust-dialog");
  if (closeAdjustBtn) closeAdjustBtn.addEventListener("click", () => closeDialog(byId("emoney-adjust-dialog")));

  document.querySelectorAll(".app-dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
    dialog.addEventListener("close", updateDialogLock);
  });

  byId("expense-amount").addEventListener("blur", formatMoneyInput);
  byId("open-expense-calculator").addEventListener("click", openExpenseCalculator);
  byId("expense-calculator-dialog").querySelectorAll("[data-calculator-key]").forEach((button) => {
    button.addEventListener("click", () => handleExpenseCalculatorKey(button.dataset.calculatorKey));
  });
  byId("apply-calculator-result").addEventListener("click", applyExpenseCalculatorResult);
  document.addEventListener("keydown", handleExpenseCalculatorKeyboard);
  byId("manual-payment-amount").addEventListener("blur", formatMoneyInput);
  byId("setting-balance").addEventListener("blur", formatMoneyInput);
  byId("setting-reserve").addEventListener("blur", formatMoneyInput);
  byId("expense-payment").addEventListener("change", () => {
    updateExpensePaymentFields();
  });
  byId("expense-card").addEventListener("change", updateCalculatedPaymentDate);
  byId("expense-date").addEventListener("change", () => {
    updateCalculatedPaymentDate();
    renderDayRecords(byId("expense-date").value);
  });
  byId("expense-form").addEventListener("submit", saveExpenseFromForm);
  byId("delete-expense-button").addEventListener("click", deleteCurrentExpense);

  byId("card-form").addEventListener("submit", saveCardFromForm);
  byId("delete-card-button").addEventListener("click", deleteCurrentCard);
  byId("manual-payment-form").addEventListener("submit", saveManualPaymentFromForm);
  const deleteManualBtn = byId("delete-manual-button") || byId("delete-manual-payment-button");
  if (deleteManualBtn) deleteManualBtn.addEventListener("click", deleteCurrentManualPayment);

  byId("history-month").addEventListener("change", renderHistory);
  byId("history-category").addEventListener("change", renderHistory);
  byId("history-payment").addEventListener("change", renderHistory);

  const historySearch = byId("history-search");
  const historySearchClear = byId("history-search-clear");
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

  const manageFavBtn = byId("manage-favorites-button");
  if (manageFavBtn) {
    manageFavBtn.addEventListener("click", toggleFavoritesDeleteMode);
  }
  const addFavBtn = byId("add-to-favorites-btn");
  if (addFavBtn) {
    addFavBtn.addEventListener("click", saveCurrentFormAsFavorite);
  }

  byId("mode-usage-btn").addEventListener("click", () => switchBudgetMode("usage"));
  byId("mode-outflow-btn").addEventListener("click", () => switchBudgetMode("outflow"));
  const modeHelpBtn = byId("mode-help-btn");
  if (modeHelpBtn) modeHelpBtn.addEventListener("click", () => showDialog(byId("mode-help-dialog")));

  byId("open-budget-button").addEventListener("click", openBudgetDialog);
  const openBudgetFromUnsetBtn = byId("open-budget-from-unset-button");
  if (openBudgetFromUnsetBtn) openBudgetFromUnsetBtn.addEventListener("click", openBudgetDialog);

  const toggleBreakdownBtn = byId("toggle-breakdown-btn");
  if (toggleBreakdownBtn) {
    toggleBreakdownBtn.addEventListener("click", () => {
      isSummaryBreakdownOpen = !isSummaryBreakdownOpen;
      const content = byId("summary-breakdown-content");
      const text = byId("toggle-breakdown-text");
      const arrow = byId("toggle-breakdown-arrow");
      if (content) content.classList.toggle("is-hidden", !isSummaryBreakdownOpen);
      if (text) text.textContent = isSummaryBreakdownOpen ? "内訳を閉じる" : "内訳を見る";
      if (arrow) arrow.textContent = isSummaryBreakdownOpen ? "⌃" : "⌄";
      toggleBreakdownBtn.setAttribute("aria-expanded", isSummaryBreakdownOpen ? "true" : "false");
    });
  }

  byId("budget-form").addEventListener("submit", saveBudgetFromForm);
  byId("clear-budget-button").addEventListener("click", clearMonthlyBudget);
  byId("budget-usage-input").addEventListener("blur", formatMoneyInput);
  byId("budget-outflow-input").addEventListener("blur", formatMoneyInput);

  // オンボーディングボタン
  const obStartBtn = byId("onboarding-start-btn");
  if (obStartBtn) {
    obStartBtn.addEventListener("click", () => {
      localStorage.setItem(APP.onboardedKey, "true");
      closeDialog(byId("onboarding-dialog"));
      showToast("「あといくら」へようこそ！");
    });
  }
  const obSampleBtn = byId("onboarding-sample-btn");
  if (obSampleBtn) {
    obSampleBtn.addEventListener("click", () => {
      localStorage.setItem(APP.onboardedKey, "true");
      closeDialog(byId("onboarding-dialog"));
      addSampleData();
    });
  }
  const obStepBudget = byId("onboarding-step-budget");
  if (obStepBudget) {
    obStepBudget.addEventListener("click", () => {
      localStorage.setItem(APP.onboardedKey, "true");
      closeDialog(byId("onboarding-dialog"));
      openBudgetDialog();
    });
  }
  const obStepCard = byId("onboarding-step-card");
  if (obStepCard) {
    obStepCard.addEventListener("click", () => {
      localStorage.setItem(APP.onboardedKey, "true");
      closeDialog(byId("onboarding-dialog"));
      openCardDialog();
    });
  }
  const obStepExp = byId("onboarding-step-expense");
  if (obStepExp) {
    obStepExp.addEventListener("click", () => {
      localStorage.setItem(APP.onboardedKey, "true");
      closeDialog(byId("onboarding-dialog"));
      openExpenseDialog(Core.todayKey());
    });
  }
  const reopenObBtn = byId("reopen-onboarding-btn");
  if (reopenObBtn) {
    reopenObBtn.addEventListener("click", () => {
      showDialog(byId("onboarding-dialog"));
    });
  }

  byId("save-cycle-settings").addEventListener("click", saveCycleSettings);
  byId("setting-cycle-start-day").addEventListener("change", updateCyclePreview);
  byId("save-balance-settings").addEventListener("click", saveBalanceSettings);
  byId("theme-select").addEventListener("change", saveTheme);
  byId("theme-color-1").addEventListener("input", (e) => {
    state.settings.themeColor1 = e.target.value;
    state.settings.themeColor2 = e.target.value;
    applyThemeColors();
  });
  byId("theme-color-1").addEventListener("change", () => {
    saveState();
    showToast("テーマカラーを保存しました。");
  });

  byId("setting-bg-color").addEventListener("input", (e) => {
    state.settings.bgColor = e.target.value;
    applyThemeColors();
  });
  byId("setting-bg-color").addEventListener("change", () => {
    saveState();
    showToast("背景色を保存しました。");
  });

  const settingCardBgEl = byId("setting-card-bg-color");
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

  byId("setting-border-color").addEventListener("input", (e) => {
    state.settings.borderColor = e.target.value;
    applyThemeColors();
  });
  byId("setting-border-color").addEventListener("change", () => {
    saveState();
    showToast("枠線色を保存しました。");
  });

  byId("setting-gauge-color").addEventListener("input", (e) => {
    state.settings.gaugeColor = e.target.value;
    applyThemeColors();
  });
  byId("setting-gauge-color").addEventListener("change", () => {
    saveState();
    showToast("ゲージ色を保存しました。");
  });

  const settingUsageColor = byId("setting-usage-color");
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
  const themeShareBtn = byId("theme-share-btn");
  if (themeShareBtn) {
    themeShareBtn.addEventListener("click", async () => {
      const code = getThemeCode();
      const codePanel = byId("theme-code-panel");
      const arrow = byId("theme-share-arrow");
      if (codePanel) {
        const isOpen = !codePanel.classList.contains("is-hidden");
        if (!isOpen) {
          codePanel.classList.remove("is-hidden");
          if (arrow) arrow.classList.add("is-open");
          themeShareBtn.setAttribute("aria-expanded", "true");
        }
      }
      const codeInput = byId("theme-code-input");
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
  const themeCodeCopyBtn = byId("theme-code-copy-btn");
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
    const input = byId("theme-code-input");
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

  const themeCodeApplyBtn = byId("theme-code-apply-btn");
  if (themeCodeApplyBtn) {
    themeCodeApplyBtn.addEventListener("click", applyThemeCodeFromField);
  }
  const themeCodeInput = byId("theme-code-input");
  if (themeCodeInput) {
    themeCodeInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        applyThemeCodeFromField();
      }
    });
  }

  // カラー／スキン装飾タブ切り替え
  const themeTabColor = byId("theme-tab-color");
  const themeTabSkin = byId("theme-tab-skin");
  const presetGrid = byId("preset-palette-grid");
  const skinGrid = byId("skin-palette-grid");
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

  const themeTopResetBtn = byId("theme-top-reset-btn");
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
      if (modeVal === "dark") {
        if (!state.settings.bgColor || getLuminance(state.settings.bgColor) >= 0.45) {
          state.settings.bgColor = "#111712";
          state.settings.cardBgColor = "#182019";
          state.settings.borderColor = "#344039";
        }
      } else if (modeVal === "light") {
        if (state.settings.bgColor && getLuminance(state.settings.bgColor) < 0.45) {
          state.settings.bgColor = "#ffffff";
          state.settings.cardBgColor = "#ffffff";
          state.settings.borderColor = "#e2e8f0";
        }
      } else if (modeVal === "auto") {
        const isSysDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (isSysDark && (!state.settings.bgColor || getLuminance(state.settings.bgColor) >= 0.45)) {
          state.settings.bgColor = "#111712";
          state.settings.cardBgColor = "#182019";
          state.settings.borderColor = "#344039";
        } else if (!isSysDark && state.settings.bgColor && getLuminance(state.settings.bgColor) < 0.45) {
          state.settings.bgColor = "#ffffff";
          state.settings.cardBgColor = "#ffffff";
          state.settings.borderColor = "#e2e8f0";
        }
      }
      saveState();
      applyTheme();
      renderCalendar();
      showToast(`表示モードを「${modeVal === "light" ? "ライト" : modeVal === "dark" ? "ダーク" : "端末に合わせる"}」に変更しました。`);
    });
  });

  if (typeof window !== "undefined" && window.matchMedia) {
    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleThemeChange = () => {
        if (state.settings.theme === "auto") {
          applyTheme();
          renderCalendar();
        }
      };
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleThemeChange);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleThemeChange);
      }
    } catch (_e) {}
  }

  byId("reset-colors-button").addEventListener("click", () => {
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

  byId("back-to-cards-btn").addEventListener("click", () => switchCardSubView("main"));

  document.querySelectorAll("[data-settings-nav]").forEach((btn) => {
    btn.addEventListener("click", () => switchSettingsSubView(btn.dataset.settingsNav));
  });

  document.querySelectorAll("[data-back-settings]").forEach((btn) => {
    btn.addEventListener("click", () => switchSettingsSubView("menu"));
  });

  const settingsDeleteBtn = byId("settings-menu-delete-btn");
  if (settingsDeleteBtn) settingsDeleteBtn.addEventListener("click", deleteAllData);

  const openHomeWidgetsBtn = byId("open-home-widgets-button");
  if (openHomeWidgetsBtn) {
    openHomeWidgetsBtn.addEventListener("click", () => {
      renderHomeWidgetsManageList("home-widgets-manage-list");
      const dialog = byId("home-widgets-dialog");
      if (dialog) showDialog(dialog);
    });
  }

  const homeResetWidgetsBtn = byId("home-reset-widgets-btn");
  if (homeResetWidgetsBtn) {
    homeResetWidgetsBtn.addEventListener("click", resetHomeWidgets);
  }

  const settingsResetWidgetsBtn = byId("settings-reset-widgets-btn");
  if (settingsResetWidgetsBtn) {
    settingsResetWidgetsBtn.addEventListener("click", resetHomeWidgets);
  }

  const widgetBalanceSettingsBtn = byId("widget-balance-settings-btn");
  if (widgetBalanceSettingsBtn) {
    widgetBalanceSettingsBtn.addEventListener("click", () => {
      switchView("settings");
      switchSettingsSubView("balance");
    });
  }

  byId("export-button").addEventListener("click", exportData);
  byId("import-button").addEventListener("click", () => byId("import-file").click());
  byId("import-file").addEventListener("change", importData);
  byId("add-sample-button").addEventListener("click", addSampleData);
  byId("remove-sample-button").addEventListener("click", removeSampleData);
  if (byId("delete-all-button")) byId("delete-all-button").addEventListener("click", deleteAllData);

  setupSuperReload();
}
