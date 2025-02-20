import React from 'react';
import styles from './ExpenseForm.module.css';  // Import styles as an object

const ExpenseForm = ({ addExpense }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    const amount = parseFloat(e.target.amount.value);
    if (category && amount) {
      addExpense({ category, amount });
      e.target.reset(); // Reset form after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles['expense-form']}>
      <label htmlFor="category" className={styles['label']}>Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        required
        placeholder="Enter category (e.g., Food)"
        className={styles['input']}
      />
      <label htmlFor="amount" className={styles['label']}>Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        required
        placeholder="Enter amount"
        min="0.01"
        className={styles['input']}
      />
      <button type="submit" className={styles['button']}>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
