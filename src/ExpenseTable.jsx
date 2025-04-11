// components/ExpenseTable.jsx


const ExpenseTable = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border p-2">Description</th>
          <th className="border p-2">Amount</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td className="border p-2">{expense.description}</td>
            <td className="border p-2">${expense.amount}</td>
            <td className="border p-2">{expense.category}</td>
            <td className="border p-2">
              <button
                onClick={() => onDelete(expense.id)}
                className="text-red-500 hover:underline"
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
