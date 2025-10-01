import type { Expense } from "../store/useExpenseStore";

export const sampleExpenses: Expense[] = [
  {
    id: "1",
    title: "Groceries",
    amount: 50,
    currency: "USD",
    categoryId: "food",
    date: "2025-10-01",
    paymentMethod: "Cash",
    notes: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Netflix",
    amount: 15,
    currency: "USD",
    categoryId: "entertainment",
    date: "2025-10-02",
    paymentMethod: "Card",
    notes: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
