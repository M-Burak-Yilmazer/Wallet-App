const formGelir = document.querySelector(".income-form");
const incomeValue = document.querySelector("#income");
const totalIncome = document.querySelector(".incomes--prices");
const formGider = document.querySelector(".expense-form");
const date = document.querySelector(".date");
const expenseValue = document.querySelector("#expense");
const expenseArea = document.querySelector(".area");
const mainTable = document.querySelector(".expenseTable");

const totalExpenses = document.querySelector(".expenses--prices");
const totalBudgets = document.querySelector(".budgets--prices");

formGelir.addEventListener("submit", (e) => {
  e.preventDefault();

  totalIncome.innerHTML = (+totalIncome.innerHTML + +incomeValue.value).toFixed(
    2
  );
  calculateExpense();

  incomeValue.value = "";
});

formGider.addEventListener("submit", (e) => {
  e.preventDefault();
  if (expenseArea.value && expenseValue.value) {
    const newRow = document.createElement("tr");
    const expenseDate = document.createElement("td");
    const expenseAlani = document.createElement("td");
    const expenseCount = document.createElement("td");
    const expenseProcess = document.createElement("td");

    expenseDate.textContent =
      date.value || `${new Date().toISOString().slice(0, 10)}`;
    expenseAlani.textContent = expenseArea.value;
    expenseCount.textContent = expenseValue.value;
    expenseProcess.textContent = "🗑️";
    expenseProcess.classList.add = "erase";

    mainTable.lastElementChild.appendChild(newRow);
    newRow.appendChild(expenseDate);
    newRow.appendChild(expenseAlani);
    newRow.appendChild(expenseCount);
    newRow.appendChild(expenseProcess);

    calculateExpense();

    date.value = "";
    expenseArea.value = "";
    expenseValue.value = "";
  } else {
    alert("Lütfen verilen alanları doldurunuz!");
  }
});

const calculateExpense = () => {
  totalExpenses.textContent = (
    Number(totalExpenses.textContent) + Number(expenseValue.value)
  ).toFixed(2);
  kalan = Number(totalIncome.textContent) - Number(totalExpenses.textContent);
  totalBudgets.textContent = kalan.toFixed(2);
};

document.querySelector(".clear").addEventListener("click", (e) => {
  console.log(e.target);
  e.target.parentNode.querySelector(
    ".expenseTable"
  ).lastElementChild.innerHTML = "";

  totalBudgets.textContent = "0.00";
  totalExpenses.textContent = "0.00";
  totalIncome.innerHTML = "0.00";
});

mainTable.addEventListener("click", (e) => {
  if (e.target.classList.contains("erase")) {
    e.target.parentNode.remove();
  }
});
