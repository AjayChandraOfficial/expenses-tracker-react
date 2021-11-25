import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [defaultYear, filteredYear] = useState("2020");
  const expensesYearChangeHandler = function (selectedExpenseYear) {
    filteredYear(selectedExpenseYear);
  };
  const showFilteredYear = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === defaultYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={expensesYearChangeHandler}
          year={defaultYear}
        />
        <ExpensesChart expenses={showFilteredYear} />
        <ExpensesList data={showFilteredYear} />
      </Card>
    </div>
  );
}

export default Expenses;
