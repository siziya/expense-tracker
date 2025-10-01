import React from "react";
import { useExpenseStore } from "../store/useExpenseStore";
import Papa from "papaparse";

export const CSVManager = () => {
  const expenses = useExpenseStore((s) => s.expenses);
  const addExpense = useExpenseStore((s) => s.addExpense);

  const handleExport = () => {
    const csv = Papa.unparse(expenses);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "expenses.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        results.data.forEach((row: any) => {
          addExpense({ ...row, id: row.id || Date.now().toString() });
        });
      },
    });
  };

  return (
    <div className="space-x-2">
      <button
        onClick={handleExport}
        className="bg-green-500 px-2 py-1 rounded text-white"
      >
        Export CSV
      </button>
      <input type="file" accept=".csv" onChange={handleImport} />
    </div>
  );
};
