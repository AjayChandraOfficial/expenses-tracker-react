import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const DUMMY_EXPENSES = [];
function App() {
  const [expenses, addExpense] = useState(DUMMY_EXPENSES);

  const addNewExpense = function (expenseData) {
    addExpense((prevExpenses) => [expenseData, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onNewExpense={addNewExpense} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
