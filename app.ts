const expType = document.getElementById("expense-type")! as HTMLSelectElement;
const expDesc = document.getElementById("desc")! as HTMLInputElement;
const expAmount = document.getElementById("amount")! as HTMLInputElement;
const addExpBtn = document.querySelector(
  ".add-expense-btn"
)! as HTMLButtonElement;

class Expense {
    private static currentId: number = 0;
    readonly id: number = 0;
    type: 'credit' | 'debit' = 'debit';
    description: string = '';
    amount: number = 0;

    constructor(type: 'credit' | 'debit', desc: string, amount: number) {
        this.type = type;
        this.description = desc;
        this.amount = amount;
        this.id = ++Expense.currentId;
    }
}

addExpBtn.addEventListener('click', function(event) {
    event.preventDefault();

    let type: 'credit' | 'debit' = expType.value === 'credit' ? 'credit' : 'debit';
    const exp = new Expense(type, expDesc.value, Number(expAmount.value));
    console.log(exp.amount);
    console.log(exp);
});
