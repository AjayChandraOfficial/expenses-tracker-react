import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const titleChangeHandler = function (e) {
    setTitle(e.target.value);
  };
  const amountChangeHandler = function (e) {
    setAmount(e.target.value);
  };
  const dateChangeHandler = function (e) {
    setDate(e.target.value);
  };
  const submitHandler = function (e) {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    // console.log(expenseData.date);
    props.onSaveExpenseData(expenseData);

    // console.log(expenseDate);/
    setTitle("");
    setDate("");
    setAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            type="number"
            min="1"
            step="1"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            type="Date"
            min="2019-01-01"
            max="2022-31-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      {props.isEditing && <button>Cancel</button>}
      <button className="new-expense__actions">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
