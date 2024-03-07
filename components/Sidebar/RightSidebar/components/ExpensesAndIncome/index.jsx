'use client';

import cx from 'classnames';

// Components
import Card from '../../../../Card';

// Styles
import styles from './styles.module.scss';

const ExpensesAndIncome = ({
  expense,
  income
}) => {
  const total = expense + income;
  const expensePercentage = Math.ceil((expense / total) * 100);
  const incomePercentage = Math.floor((income / total) * 100);

  return (
    <div className={styles.expenses_income_wrapper}>
      <Card>
        <p className={styles.title_text}>Expenses and income</p>

        <div className={styles.content}>
          <div className={styles.expense}>
            <p className={styles.title}>Expense</p>
            <p className={styles.percentage}>{`${expensePercentage}%`}</p>
            <p className={styles.value}>{expense}</p>
          </div>

          <div className={styles.versus}>
            vs
          </div>

          <div className={styles.income}>
            <p className={styles.title}>Income</p>
            <p className={styles.percentage}>{`${incomePercentage}%`}</p>
            <p className={styles.value}>{income}</p>
          </div>
        </div>

        <div className={styles.bar_wrapper}>
          <div style={{width: `${expensePercentage}%`}} className={cx(styles.bar, styles.expense)} />
          <div style={{width: `${incomePercentage}%`}} className={cx(styles.bar, styles.income)} />
        </div>
      </Card>
    </div>
  )
};

export default ExpensesAndIncome;