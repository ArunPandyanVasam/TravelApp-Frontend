import React from 'react';
import styles from './BudgetTracker.module.css';  // Import styles as an object
import ExpenseList from '../ExpenseList/ExpenseList';

const BudgetTracker = ({ expenses, calculateRemainingBudget }) => {
  return (
    <div className={styles['budget-tracker']}>
      <h2 className={styles['header']}>Budget Tracker</h2>
      <div>
        <h3 className={styles['remaining-budget']}>Remaining Budget: ${calculateRemainingBudget()}</h3>
      </div>

      <ExpenseList expenses={expenses} /> {/* Passing expenses to ExpenseList */}
    </div>
  );
};

export default BudgetTracker;
