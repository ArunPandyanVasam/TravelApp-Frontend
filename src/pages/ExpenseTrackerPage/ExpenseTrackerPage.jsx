// ExpenseTrackerPage.jsx
import React, { useState } from 'react';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import BudgetTracker from '../../components/BudgetTracker/BudgetTracker';

const ExpenseTrackerPage = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const calculateRemainingBudget = () => {
    const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const budget = 1000; // Example total budget, adjust as needed
    return budget - totalExpenses;
  };

  return (
    <div className="expense-tracker-page">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <BudgetTracker expenses={expenses} calculateRemainingBudget={calculateRemainingBudget} />
    </div>
  );
};

export default ExpenseTrackerPage;
