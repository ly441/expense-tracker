
import React from "react";

const ExpenseTable = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses found.</p>;
  }

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th className="table-header">Description</th>
          <th className="table-header">Amount</th>
          <th className="table-header">Category</th>
          <th className="table-header">Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td className="table-cell">{expense.description}</td>
            <td className="table-cell">${expense.amount}</td>
            <td className="table-cell">{expense.category}</td>
            <td className="table-cell">
              <button
                onClick={() => onDelete(expense.id)}
                className="delete-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;


