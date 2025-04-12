
import React, { useState } from "react";
import ExpenseForm from "./Components/ExpenseForm.jsx";
import ExpenseTable from "./Components/ExpenseTable.jsx";
import SearchBar from "./Components/SearchBar.jsx";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses
    .filter((expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortBy) return 0;
      return a[sortBy].localeCompare(b[sortBy]);
    });

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <ExpenseForm onAddExpense={addExpense} />
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border"
        >
          <option value="">None</option>
          <option value="description">Description</option>
          <option value="category">Category</option>
        </select>
      </div>
      <ExpenseTable expenses={filteredExpenses} onDelete={deleteExpense} />
    </div>
  );
};

export default App;
