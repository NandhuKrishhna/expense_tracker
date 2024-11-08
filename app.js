"use strict";
const expType = document.getElementById("expense-type");
const expDesc = document.getElementById("desc");
const expAmount = document.getElementById("amount");
const addExpBtn = document.querySelector(".add-expense-btn");
const debitDiv = document.querySelector('.expense-debit-item-container');
const creditDiv = document.querySelector('.expense-credit-item-container');
let expenseItems = [];
class Expense {
    constructor(type, desc, amount) {
        this.id = 0;
        this.type = 'debit';
        this.description = '';
        this.amount = 0;
        this.type = type;
        this.description = desc;
        this.amount = amount;
        this.id = ++Expense.currentId;
    }
}
Expense.currentId = 0;
function DisplayExpenseItems() {
    debitDiv.innerHTML = '';
    creditDiv.innerHTML = '';
    for (let i = 0; i < expenseItems.length; i++) {
        let expItem = expenseItems[i];
        let containerDiv = expItem.type === 'credit' ? creditDiv : debitDiv;
        let cssClass = expItem.type === 'credit' ? 'credit-item' : 'debit-item';
        let template = `
        <div class="${cssClass}">
            <div class="exp-desc">${expItem.description}</div>
            <div class="exp-amt">${expItem.amount}</div>
            <div class="exp-delete">
                <button class="delete-expense" onclick="deleteExpense(${expItem.id})">X</button>
            </div>
        </div>
        `;
        containerDiv === null || containerDiv === void 0 ? void 0 : containerDiv.insertAdjacentHTML('beforeend', template);
    }
}
addExpBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let type = expType.value === 'credit' ? 'credit' : 'debit';
    const exp = new Expense(type, expDesc.value, Number(expAmount.value));
    expenseItems.push(exp);
    console.log(expenseItems);
    // console.log(exp.amount);
    // console.log(exp);
    DisplayExpenseItems();
});
