import React from "react";
import { useExpenseStore } from "../store/useExpenseStore";

export const ExpenseList: React.FC = () => {
  const expenses = useExpenseStore((s) => s.expenses);
  const deleteExpense = useExpenseStore((s) => s.deleteExpense);

  if (expenses.length === 0)
    return (
      <p className="text-center mt-4 text-gray-700 dark:text-gray-300">
        No expenses added yet.
      </p>
    );

  return (
    <div className="w-full max-w-3xl mx-auto mt-4 overflow-x-auto">
      <table className="min-w-full border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
        <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Currency</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr
              key={e.id}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700"
            >
              <td className="px-4 py-2">{e.title}</td>
              <td className="px-4 py-2">{e.amount}</td>
              <td className="px-4 py-2">{e.currency}</td>
              <td className="px-4 py-2">{e.categoryId}</td>
              <td className="px-4 py-2 flex space-x-2 justify-center">
                <button
                  className="bg-red-500 dark:bg-red-700 text-white px-2 py-1 rounded"
                  onClick={() => deleteExpense(e.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
