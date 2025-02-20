import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExpenseList.module.css'; // Import styles as an object

const ExpenseList = ({ expenses }) => {
  return (
    <div className={styles['expense-list']}>
      <h3 className={styles['header']}>Expense List</h3>
      <ul>
        {expenses.length === 0 ? (
          <li>No expenses added yet.</li>
        ) : (
          expenses.map((expense, index) => (
            <li key={index}>
              <span className={styles['category']}>{expense.category}</span>:
              <span className={styles['amount']}>${expense.amount}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ExpenseList;
