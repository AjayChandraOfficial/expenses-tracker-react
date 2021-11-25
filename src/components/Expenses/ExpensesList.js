import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExepensesList(props) {
  if (props.data.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.data.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
      </ul>
    );
  }
}

export default ExepensesList;
