"use strict";
const expType = document.getElementById("expense-type");
const expDesc = document.getElementById("desc");
const expAmount = document.getElementById("amount");
const addExpBtn = document.querySelector(".add-expense-btn");
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
addExpBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let type = expType.value === 'credit' ? 'credit' : 'debit';
    const exp = new Expense(type, expDesc.value, Number(expAmount.value));
    console.log(exp.amount);
    console.log(exp);
});
