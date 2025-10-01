import { create } from "zustand";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  currency: string;
  categoryId: string;
  date: string;
  paymentMethod: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface ExpenseState {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  updateExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
  clearExpenses: () => void;
}

export const useExpenseStore = create<ExpenseState>((set) => ({
  expenses: [],
  addExpense: (expense) =>
    set((state) => ({ expenses: [...state.expenses, expense] })),
  updateExpense: (expense) =>
    set((state) => ({
      expenses: state.expenses.map((e) => (e.id === expense.id ? expense : e)),
    })),
  deleteExpense: (id) =>
    set((state) => ({ expenses: state.expenses.filter((e) => e.id !== id) })),
  clearExpenses: () => set({ expenses: [] }),
}));
