import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const expenseDataSaveHandler = function (expenseDataRecieved) {
    const expenseData = {
      ...expenseDataRecieved,
      id: "e" + Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setIsEditing(false);
  };

  const setIsEditingHandler = function () {
    setIsEditing(true);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={setIsEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={expenseDataSaveHandler}
          isEditing={isEditing}
        />
      )}
    </div>
  );
}

export default NewExpense;
