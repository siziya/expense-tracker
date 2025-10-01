# Expense Tracker

A **responsive, offline-friendly Expense Tracker** built with **React, TypeScript, Vite, TailwindCSS, Zustand, and Recharts**.  
Track your expenses, categorize them, visualize trends, export/import CSVs, toggle dark mode, and manage multi-currency transactions.

Live Demo: [https://siziya.github.io/expense-tracker/](https://siziya.github.io/expense-tracker/)

---

## **Features**

### Core Features
- **CRUD**: Create, Read, Update, Delete expenses with validation.
- **Expense Fields**: `id`, `title`, `amount`, `currency`, `categoryId`, `date`, `paymentMethod`, `notes`, `createdAt`, `updatedAt`.
- **Filters & Sorting**: Sort by date, amount, category; search expenses.
- **Charts**:  
  - Monthly Spend Trend (Line Chart)  
  - Category Distribution (Pie Chart)  
  - Top 10 Expenses (Bar Chart)
- **Offline-Friendly**: Data cached in localStorage; changes persist across refresh.
- **Responsive UI**: Mobile-first design with accessibility features.

### Nice-to-Have Features
- **CSV Export/Import** with preview
- **Multi-Currency Support** (static exchange rates)

---

## **Tech Stack**

- **Frontend:** React + TypeScript, Vite, TailwindCSS  
- **State Management:** Zustand  
- **Charts:** Recharts  
- **CSV Handling:** PapaParse  
- **Deployment:** GitHub Pages  
- **Build Tools:** Vite  

---

## **Getting Started**

### **Prerequisites**
- Node.js v20+  
- npm v10+  

---

### **Install Dependencies**

```bash
git clone https://github.com/siziya/expense-tracker.git
cd expense-tracker
npm install

