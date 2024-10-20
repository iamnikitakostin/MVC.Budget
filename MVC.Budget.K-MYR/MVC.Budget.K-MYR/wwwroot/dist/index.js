"use strict";
(self["webpackChunkthebudgeteer"] = self["webpackChunkthebudgeteer"] || []).push([["index"],{

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index-entry.js":
/*!*****************************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index-entry.js ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-validation */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation-unobtrusive */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js");
/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_bootstrap_imports_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/bootstrap-imports.scss */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/scss/bootstrap-imports.scss");
/* harmony import */ var country_select_js_build_css_countrySelect_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! country-select-js/build/css/countrySelect.min.css */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/country-select-js/build/css/countrySelect.min.css");
/* harmony import */ var _scss_site_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/site.scss */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/scss/site.scss");
/* harmony import */ var _site_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./site.js */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/site.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.js */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_js__WEBPACK_IMPORTED_MODULE_6__]);
_index_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
﻿









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../../../../../C #/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index.js ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/config.js");
/* harmony import */ var _asyncComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asyncComponents */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/asyncComponents.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/api.js");
/* harmony import */ var _messageBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messageBox */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/messageBox.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery/dist/jquery.js");
﻿




const cardsContainer = document.getElementById('cards-container');
formatDashboard();
window.addEventListener('countryChanged', () => {
    formatDashboard();
});

const modals = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_1__.importBootstrapModals)();
var modalsArray = await modals;
var addModal = modalsArray.find(m => m._element.id == 'addFiscalPlan-modal');
var updateModal = modalsArray.find(m => m._element.id == 'updateFiscalPlan-modal');
var updateModalLabel = document.getElementById('updateFiscalPlan-label');
var updateModalId = document.getElementById('updateFiscalPlan_id');
var updateModalName = document.getElementById('updateFiscalPlan_name');
var deleteModal = modalsArray.find(m => m._element.id == 'deleteFiscalPlan-modal');
var deleteModalLabel = document.getElementById('deleteFiscalPlan-label');
var deleteModalId = document.getElementById('deleteFiscalPlan_id');
setupModalHandlers(modals);

function formatDashboard() {
    var cards = $('.fiscalPlan-card');
    for (let i = 0; i < cards.length; i++) {
        let id = cards[i].dataset.id;
        let incomeText = document.getElementById(`fiscalPlan_income_${id}`);
        incomeText.textContent = `${window.userNumberFormat.format(incomeText.dataset.total)} / ${window.userNumberFormat.format(incomeText.dataset.budget)}`;
        let expensesText = document.getElementById(`fiscalPlan_expenses_${id}`);
        expensesText.textContent = `${window.userNumberFormat.format(expensesText.dataset.total)} / ${window.userNumberFormat.format(expensesText.dataset.budget)}`;
    }
}

function addFiscalPlan(fiscalPlan, beforeElement) {   
    var card = document.createElement('div');
    card.className = 'fiscalPlan-card';
    card.id = `fiscalPlan-card_${fiscalPlan.id}`;
    card.setAttribute('data-id', fiscalPlan.id);
    card.setAttribute('data-name', fiscalPlan.name);

    var headerContainer = document.createElement('div');
    headerContainer.className = 'd-flex justify-content-between gap-1';

    var editIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    editIcon.setAttribute('viewBox', '0 0 14 14');
    editIcon.setAttribute('height', '30');
    editIcon.setAttribute('width', '30');
    editIcon.setAttribute('class', 'fiscalPlan-icon');
    editIcon.setAttribute('fill', '#ffffff');
    editIcon.setAttribute('data-action', 'edit');
    var editUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    editUse.setAttribute('href', '#edit-icon');
    editIcon.appendChild(editUse);

    var heading = document.createElement('h1');
    heading.id = `fiscalPlan-header_${fiscalPlan.id}`;
    heading.class = 'fiscalPlan-heading';
    heading.textContent = fiscalPlan.name;

    var deleteIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    deleteIcon.setAttribute('viewBox', '0 0 14 14');
    deleteIcon.setAttribute('height', '30');
    deleteIcon.setAttribute('width', '30');
    deleteIcon.setAttribute('class', 'fiscalPlan-icon');
    deleteIcon.setAttribute('fill', '#ffffff');
    deleteIcon.setAttribute('data-action', 'delete');
    var deleteUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    deleteUse.setAttribute('href', '#trash-icon');
    deleteIcon.appendChild(deleteUse);

    headerContainer.appendChild(editIcon);
    headerContainer.appendChild(heading);
    headerContainer.appendChild(deleteIcon);

    var progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';

    var incomeSection = document.createElement('div');
    var incomeTitleContainer = document.createElement('div');
    incomeTitleContainer.className = 'd-flex justify-content-between';
    var incomeTitle = document.createElement('div');
    incomeTitle.textContent = 'Income';
    var incomeTotal = document.createElement('div');
    incomeTotal.id = `fiscalPlan_income_${fiscalPlan.id}`;
    incomeTotal.textContent = `${window.userNumberFormat.format(0)} /  ${window.userNumberFormat.format(0)}`;

    incomeTitleContainer.appendChild(incomeTitle);
    incomeTitleContainer.appendChild(incomeTotal);
    incomeSection.appendChild(incomeTitleContainer);

    var incomeProgressDiv = document.createElement('div');
    incomeProgressDiv.className = 'progress';
    var incomeProgressBar = document.createElement('div');
    incomeProgressBar.className = 'progress-bar bg-success';
    incomeProgressBar.setAttribute('role', 'progressbar');
    incomeProgressBar.style.width = '100%'; 
    incomeProgressBar.setAttribute('aria-valuenow', '100');
    incomeProgressBar.setAttribute('aria-valuemin', '0');
    incomeProgressBar.setAttribute('aria-valuemax', '100');
    incomeProgressBar.setAttribute('aria-labelledby', `fiscalPlan_balance_${fiscalPlan.id}`);

    incomeProgressDiv.appendChild(incomeProgressBar);
    incomeSection.appendChild(incomeProgressDiv);

    var expensesSection = document.createElement('div');
    var expensesTitleContainer = document.createElement('div');
    expensesTitleContainer.className = 'd-flex justify-content-between';
    var expensesTitle = document.createElement('div');
    expensesTitle.textContent = 'Expenses';
    var expensesTotal = document.createElement('div');
    expensesTotal.id = `fiscalPlan_expenses_${fiscalPlan.id}`;
    expensesTotal.textContent = `${window.userNumberFormat.format(0)} /  ${window.userNumberFormat.format(0)}`;
            
    expensesTitleContainer.appendChild(expensesTitle);
    expensesTitleContainer.appendChild(expensesTotal);
    expensesSection.appendChild(expensesTitleContainer);

    var expensesProgressDiv = document.createElement('div');
    expensesProgressDiv.className = 'progress';
    var expensesProgressBar = document.createElement('div');
    expensesProgressBar.className = 'progress-bar bg-danger';
    expensesProgressBar.setAttribute('role', 'progressbar');
    expensesProgressBar.style.width = '100%';
    expensesProgressBar.setAttribute('aria-valuenow', '100');
    expensesProgressBar.setAttribute('aria-valuemin', '0');
    expensesProgressBar.setAttribute('aria-valuemax', '100');
    expensesProgressBar.setAttribute('aria-labelledby', `fiscalPlan_balance_${fiscalPlan.id}`);

    expensesProgressDiv.appendChild(expensesProgressBar);
    expensesSection.appendChild(expensesProgressDiv);
    progressContainer.appendChild(incomeSection);
    progressContainer.appendChild(expensesSection);
    card.appendChild(headerContainer);
    card.appendChild(progressContainer);
    card.addEventListener('click', onFiscalPlanClick);

    cardsContainer.insertBefore(card, beforeElement);
}

function updateFiscalPlan(formData) {
    var id = formData.get('Id');
    var name = formData.get('Name');
    var header = document.getElementById(`fiscalPlan-header_${id}`);
    header.textContent = name;
    var card = document.getElementById(`fiscalPlan-card_${id}`);
    card.dataset.name = name;
}

function removeFiscalPlan(id) {
    var element = document.getElementById(`fiscalPlan-card_${id}`);
    if (element) {
        element.removeEventListener('click', onFiscalPlanClick);
        element.remove();
    }
}

async function setupModalHandlers() {   
    var addfiscalPlanCard = document.getElementById('addFiscalPlan-card');
    
    var addFiscalPlanForm = document.getElementById('addFiscalPlan-form');
    addFiscalPlanForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (addModal._isShown && $(this).valid()) {
            addModal.hide();
            var response = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.postFiscalPlan)(new FormData(this));
            if (response.isSuccess) {
                addFiscalPlan(response.data, addfiscalPlanCard);
            }
            _messageBox__WEBPACK_IMPORTED_MODULE_3__["default"].addMessage({ text: response.message, iconId: response.isSuccess ? '#check-icon' : '#cross-icon' });
            _messageBox__WEBPACK_IMPORTED_MODULE_3__["default"].show();
        }
    });
    addfiscalPlanCard.addEventListener('click', function () {
        addModal.show();
    });

    var updateFiscalPlanForm = document.getElementById('updateFiscalPlan-form');
    updateFiscalPlanForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (updateModal._isShown && $(this).valid()) {
            updateModal.hide();
            let formData = new FormData(this);
            let response = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.putFiscalPlan)(formData);
            if (response.isSuccess) {
                updateFiscalPlan(formData);
            }            
            _messageBox__WEBPACK_IMPORTED_MODULE_3__["default"].addMessage({ text: response.message, iconId: response.isSuccess ? '#check-icon' : '#cross-icon' });
            _messageBox__WEBPACK_IMPORTED_MODULE_3__["default"].show();
        }
    });

    var deleteFiscalPlanForm = document.getElementById('deleteFiscalPlan-form');
    deleteFiscalPlanForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (deleteModal._isShown) {
            deleteModal.hide();
            var formData = new FormData(this);
            var id = formData.get('Id');
            var token = formData.get('__RequestVerificationToken');
            var response = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.deleteFiscalPlan)(id, token);
            if (response.isSuccess) {
                removeFiscalPlan(id);
            }
            _messageBox__WEBPACK_IMPORTED_MODULE_3__["default"].addMessage({ text: response.message, iconId: response.isSuccess ? '#check-icon' : '#cross-icon' });
            _messageBox__WEBPACK_IMPORTED_MODULE_3__["default"].show();
        }
    });

    cardsContainer.querySelectorAll('.fiscalPlan-card')
                  .forEach(element => element.addEventListener("click", onFiscalPlanClick))   
}

function onFiscalPlanClick(event) {
    var fiscalPlanCard = event.currentTarget;
    var id = parseInt(fiscalPlanCard.dataset.id);

    if (event.target.matches('.fiscalPlan-icon')) {        
        switch (event.target.dataset.action) {
            case 'delete':              
                deleteModalLabel.textContent = `Delete '${fiscalPlanCard.dataset.name}'?`;
                deleteModalId.value = id;
                deleteModal.show();
                break;
            case 'edit':              
                updateModalLabel.textContent = `Edit '${fiscalPlanCard.dataset.name}'`;
                updateModalId.value = id;
                updateModalName.value = fiscalPlanCard.dataset.name;
                updateModal.show();
                break;
        }
    }
    else {        
        window.location.href = _config__WEBPACK_IMPORTED_MODULE_0__.PAGE_ROUTES.FISCAL_PLAN(id);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["styles-index~fiscalPlan~category","vendors-index~fiscalPlan~category"], () => (__webpack_exec__("../../../../../../C\u0000#/GithubRepositories/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/index-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map