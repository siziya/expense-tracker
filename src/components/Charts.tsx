import React from "react";
import { useExpenseStore } from "../store/useExpenseStore";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CFD"];

export const Charts = () => {
  const expenses = useExpenseStore((s) => s.expenses);

  // 1️⃣ Monthly spend trend
  const monthlyData = Array.from({ length: 12 }, (_, i) => {
    const month = (i + 1).toString().padStart(2, "0");
    const total = expenses
      .filter((e) => e.date.startsWith(`2025-${month}`))
      .reduce((sum, e) => sum + Number(e.amount), 0);
    return { month, total };
  });

  // 2️⃣ Category distribution
  const categoryMap: Record<string, number> = {};
  expenses.forEach((e) => {
    if (!categoryMap[e.categoryId]) categoryMap[e.categoryId] = 0;
    categoryMap[e.categoryId] += Number(e.amount);
  });
  const categoryData = Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
  }));

  // 3️⃣ Top 10 expenses
  const topExpenses = [...expenses]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 10)
    .map((e) => ({ name: e.title, amount: e.amount }));

  return (
    <div className="space-y-8 p-4">
      {/* Monthly Trend */}
      <div>
        <h3 className="text-lg font-bold mb-2">Monthly Spend Trend</h3>
        <LineChart width={600} height={200} data={monthlyData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
        </LineChart>
      </div>

      {/* Category Pie */}
      <div>
        <h3 className="text-lg font-bold mb-2">Category Distribution</h3>
        <PieChart width={400} height={200}>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>

      {/* Top 10 Expenses Bar */}
      <div>
        <h3 className="text-lg font-bold mb-2">Top 10 Expenses</h3>
        <BarChart width={600} height={200} data={topExpenses}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};
