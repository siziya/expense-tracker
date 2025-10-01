import React, { useEffect, useState } from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
// import { DarkModeToggle } from "./components/DarkModeToggle";
import { CSVManager } from "./components/CSVManager";
import { Charts } from "./components/Charts";
import { useExpenseStore } from "./store/useExpenseStore";
import { sampleExpenses } from "./utils/sampleExpenses";

const LOCAL_STORAGE_KEY = "expense-tracker-data";

function App() {
  const addExpense = useExpenseStore((s) => s.addExpense);
  const clearExpenses = useExpenseStore((s) => s.clearExpenses);
  const expenses = useExpenseStore((s) => s.expenses);

  const [showForm, setShowForm] = useState(false);

  // Load from localStorage or sample data
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      JSON.parse(stored).forEach((e) => addExpense(e));
    } else {
      sampleExpenses.forEach((e) => addExpense(e));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <header className="flex justify-between items-center w-full max-w-5xl mb-6">
        <h1 className="text-3xl font-bold text-center flex-1">Expense Tracker</h1>
        {/* <DarkModeToggle /> */}
      </header>

      {/* Main Controls */}
      <div className="flex flex-col items-center space-y-4 w-full max-w-5xl">
        <div className="flex space-x-2 justify-center">
          <button
            className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "Add Expense"}
          </button>

          <button
            className="bg-red-500 dark:bg-red-700 text-white px-4 py-2 rounded"
            onClick={clearExpenses}
          >
            Clear All
          </button>

          <CSVManager />
        </div>

        {/* Expense Form */}
        {showForm && (
          <div className="w-full">
            <ExpenseForm onClose={() => setShowForm(false)} />
          </div>
        )}

        {/* Expense List */}
        <div className="w-full">
          <ExpenseList />
        </div>

        {/* Charts */}
        <div className="w-full">
          <Charts />
        </div>
      </div>
    </div>
  );
}

export default App;