import React from "react";
import styles from "./ExpenseList.module.css";

const ExpenseList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p className={styles.noExpenses}>No expenses added yet.</p>;
  }

  // Grouping expenses by category
  const groupedExpenses = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = [];
    }
    acc[expense.category].push(expense);
    return acc;
  }, {});

  return (
    <div className={styles.expenseListContainer}>
      {Object.keys(groupedExpenses).map((category) => (
        <div key={category} className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>{category}</h3>
          <ul className={styles.expenseItems}>
            {groupedExpenses[category].map((expense, index) => (
              <li key={index} className={styles.expenseItem}>
                <div className={styles.expenseDetails}>
                  <span className={styles.expenseTitle}>{expense.title}</span>
                  <span className={styles.expenseAmount}>
                    ₹{expense.amount.toFixed(2)}
                  </span>
                </div>
                <div className={styles.expenseDate}>
                  {new Date(expense.date).toLocaleDateString()}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
