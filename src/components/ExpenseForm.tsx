import React, { useState } from "react";
import type { Expense } from "../store/useExpenseStore";
import { useExpenseStore } from "../store/useExpenseStore";

interface Props {
  onClose: () => void;
}

export const ExpenseForm: React.FC<Props> = ({ onClose }) => {
  const addExpense = useExpenseStore((s) => s.addExpense);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState("USD");
  const [category, setCategory] = useState("general");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addExpense({
      id: Date.now().toString(),
      title,
      amount,
      currency,
      categoryId: category,
      date: new Date().toISOString(),
      paymentMethod: "cash",
      notes: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as Expense);

    setTitle("");
    setAmount(0);
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded shadow-md flex flex-col space-y-3 w-full max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        required
      />

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="general">General</option>
        <option value="food">Food</option>
        <option value="shopping">Shopping</option>
        <option value="travel">Travel</option>
      </select>

      <div className="flex space-x-2 justify-center">
        <button
          type="submit"
          className="bg-green-500 dark:bg-green-700 text-white px-4 py-2 rounded flex-1"
        >
          Add Expense
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-400 dark:bg-gray-600 text-white px-4 py-2 rounded flex-1"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
