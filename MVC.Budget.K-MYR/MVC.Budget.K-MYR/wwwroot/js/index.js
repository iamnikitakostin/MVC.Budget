﻿const categoriesAPI = "https://localhost:7246/api/Categories";
const transactionsAPI = "https://localhost:7246/api/Transactions";
const menu = document.getElementById('menu-container');
const sidebar = document.getElementById("sidebar");
const updateCategoryModal = $("#updateCategory-modal");
const categoryModalLabel = updateCategoryModal.find("#updateCategory-label");
const categoryModalId = updateCategoryModal.find("#updateCategory_id");
const categoryModalName = updateCategoryModal.find("#updateCategory_name");
const categoryModalBudget = updateCategoryModal.find("#updateCategory_budget");
const categoryModalGroupId = updateCategoryModal.find("#updateCategory_groupId");
const addCategoryModal = $("#add-category-modal");
const addTransactionModal = $("#add-transaction-modal");
const flipContainer = document.getElementById("flip-container-inner");
Chart.defaults.color = '#ffffff';

document.addEventListener("DOMContentLoaded", () => {
    $("#country").countrySelect({
        preferredCountries: []
    });

    var chart1 = document.getElementById('chart');
    var chart2 = document.getElementById('chart2');

    new Chart(chart1, {
        type: 'doughnut',
        data: {
            labels: [
                'Happy',
                'Unhappy'
            ],
            datasets: [{
                label: 'Total Amount',
                data: [chart1.dataset.happy, chart1.dataset.unhappy],
                backgroundColor: [
                    'rgb(25,135,84)',
                    'rgb(220,53,69)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    new Chart(chart2, {
        type: 'doughnut',
        data: {
            labels: [
                'Necessary',
                'Unnecessary'
            ],
            datasets: [{
                label: 'Total Amount',
                data: [chart2.dataset.necessary, chart2.dataset.unnecessary],
                backgroundColor: [
                    'rgb(25,135,84)',
                    'rgb(220,53,69)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    document.getElementById("sidebar-caret").addEventListener("click", () => {
        sidebar.classList.toggle('collapsed');
    });

    $(".accordion-head").on("click", function (event) {
        if (event.target.matches("img.add-icon.ms-auto")) {
            var id = $(this).closest('.accordion').data("id");
            addCategoryModal.modal('show');
            addCategoryModal.find("#GroupId").val(id);
        }
        else {
            $(this).next().collapse('toggle');
            var caret = $('.accordion-caret', this)[0];
            caret.classList.toggle("rotate");
        }
    });

    $('#add-category-form').on("submit", async function (event) {
        event.preventDefault();
        if ($(this).valid()) {
            addCategoryModal.modal('hide');
            await addCategory(new FormData(this));
        }
    });

    $('#add-transaction-form').on("submit", async function (event) {
        event.preventDefault();
        if ($(this).valid()) {
            addTransactionModal.modal('hide');
            await addTransaction(new FormData(this));
        }
    });

    $('#update-category-form').on("submit", async function (event) {
        event.preventDefault();
        if ($(this).valid()) {
            updateCategoryModal.modal('hide');
            await updateCategory(new FormData(this));
        }
    });

    $("#reevaluate-transaction-form").on("submit", async function (event) {
        event.preventDefault();
        if ($(this).valid()) {
             await patchTransaction(new FormData(this));
        }
    });

    $('.category').on("click", function (event) {
        if (menu.dataset.category != 0) {
            var borderBox = document.getElementById(`category_${menu.dataset.category}`).querySelector('.border-animation');
            borderBox.classList.remove('border-rotate');
        }

        menu.dataset.category = this.dataset.id;
        menu.style.left = `${this.style.left + event.pageX - 100}px`;
        menu.style.top = `${event.pageY - 100}px`;
        menu.classList.add('active');

        this.querySelector('.border-animation').classList.add('border-rotate');
    });

    document.getElementById('close-menu').onclick = function () {
        menu.classList.remove('active');
        var id = menu.dataset.category;
        var borderBox = document.getElementById(`category_${id}`).querySelector('.border-animation');
        borderBox.classList.remove('border-rotate');
        menu.dataset.category = 0;
        menu.dataset.groupId = 0;
    };

    document.getElementById('delete-menu').onclick = function () {
        var token = menu.querySelector('input').value;
        var id = menu.dataset.category;
        if (deleteCategory(id, token)) {
            menu.classList.remove('active');
            menu.dataset.category = 0;
            menu.dataset.groupId = 0;
        }
    };

    document.getElementById('add-menu').onclick = function () {
        var id = menu.dataset.category;
        addTransactionModal.find("#CategoryId").val(id);
        addTransactionModal.modal('show');
    };

    document.getElementById('edit-menu').onclick = function () {
        var category = document.getElementById(`category_${menu.dataset.category}`);

        categoryModalLabel.text(`Edit ${category.dataset.name}`);
        categoryModalId.val(category.dataset.id);
        categoryModalName.val(category.dataset.name);
        categoryModalBudget.val(category.dataset.budget);
        categoryModalGroupId.val(category.dataset.groupid);

        updateCategoryModal.modal('show');
    };

    document.getElementById('details-menu').onclick = function () {
        var id = menu.dataset.category;
        window.location.href = "Category/" + id;
    };

    $('#reevaluation-button').on("click", async function () {
        if (flipContainer.classList.contains("flip")) {
            flipContainer.classList.remove("flip");
        } else {
            flipContainer.classList.add("flip");
            var categories = await getFilteredCategories();
        }

    });
});

async function addTransaction(data) {
    try {
        var response = await fetch(`${transactionsAPI}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "RequestVerificationToken": data.get('__RequestVerificationToken')
            },
            body: JSON.stringify({
                Title: data.get("Title"),
                Amount: parseFloat(data.get("Amount")),
                DateTime: data.get("DateTime"),
                IsHappy: data.get("IsHappy") === "true" ? true : false,
                IsNecessary: data.get("IsNecessary") === "true" ? true : false,
                CategoryId: parseInt(data.get("CategoryId"))
            })
        });

        if (response.ok) {
        } else {
            console.error(`HTTP Post Error: ${response.status}`);
        }

    } catch (error) {
        console.error(error);
    };
}

async function patchTransaction(data) {
    try {
        var id = parseInt(data.get("PageModel.Transaction.Id"));
        var transaction = document.getElementById(`reeval_transaction_${id}`);   

        var patchDoc =
            [{
                op: "replace",
                path: "/IsHappy",
                value: data.get("PageModel.Transaction.IsHappy") === "true" ? true : false
            },
            {
                op: "replace",
                path: "/IsNecessary",
                value: data.get("PageModel.Transaction.IsNecessary") === "true" ? true : false
            }, {
                op: "replace",
                path: "/PreviousIsHappy",
                value: transaction.dataset.ishappy === "True" ? true : false
            },
            {
                op: "replace",
                path: "/PreviousIsNecessary",
                value: transaction.dataset.isnecessary === "True" ? true : false
            },
            {
                op: "replace",
                path: "/Evaluated",
                value: true
            }];

        var response = await fetch(`${transactionsAPI}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json-patch+json"
            },
            body: JSON.stringify(patchDoc)
        });

        if (response.ok) {
            document.getElementById(`reeval_transaction_${id}`).remove();
        } else {
            console.error(`HTTP Patch Error: ${response.status}`);
        }

    } catch (error) {
        console.error(error);
    };
}

async function getFilteredCategories() {
    try {
        var response = await fetch(`${categoriesAPI}/filteredByEvaluation`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (response.ok) {
            var categories = await response.json();
            return categories;
        } else {
            console.error(`HTTP Post Error: ${response.status}`);
        }

    } catch (error) {
        console.error(error);
    };
}

async function addCategory(data) {
    try {
        var response = await fetch(`${categoriesAPI}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "RequestVerificationToken": data.get('__RequestVerificationToken')
            },
            body: JSON.stringify({
                Name: data.get("Name"),
                Budget: parseFloat(data.get("Budget")),
                GroupId: parseInt(data.get("GroupId"))
            })
        });

        if (response.ok) {
            document.querySelector(`#group_${data.get("GroupId")} .accordion-body`).innerHTML += createCategoryElement(await response.json());
            return true;
        } else {
            console.error(`HTTP Post Error: ${response.status}`);
            return false;
        }

    } catch (error) {
        console.error(error);
        return false;
    }
}

async function updateCategory(data) {
    try {
        var id = parseInt(data.get("Id"));
        var response = await fetch(`${categoriesAPI}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "RequestVerificationToken": data.get('__RequestVerificationToken')
            },
            body: JSON.stringify({
                Name: data.get("Name"),
                Budget: parseFloat(data.get("Budget")),
                GroupId: parseInt(data.get("GroupId")),
                Id: id
            })
        });

        if (response.ok) {
            return true;
        } else {
            console.error(`HTTP Post Error: ${response.status}`);
            return false;
        }

    } catch (error) {
        console.error(error);
        return false;
    }
}

async function deleteCategory(id, token) {
    try {
        var response = await fetch(`${categoriesAPI}/${id}`, {
            method: "DELETE",
            headers: {
                "RequestVerificationToken": token
            }
        });

        if (response.ok) {
            document.getElementById(`category_${id}`).remove();
            return true;
        } else {
            console.error(`HTTP Delete Error: ${response.status}`);
            return false;
        }

    } catch (error) {
        console.error(error);
        return false;
    }
}

function createCategoryElement(category) {
    return `
    <div class="category border p-2">
        <div class="d-flex">
            <div>${category.name}</div>
            <div class="ms-auto">Balance: 700 / 700</div>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>`;
}