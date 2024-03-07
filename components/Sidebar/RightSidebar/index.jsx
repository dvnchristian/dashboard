
// Components
import ExpensesAndIncome from './components/ExpensesAndIncome';
import LatestSpending from './components/LatestSpending';
import GoPremium from './components/GoPremium';

// Images
import imgCinema from '../../../public/cinema.png'
import imgMedical from '../../../public/medical.png';
import imgOnlineShopping from '../../../public/online-shopping.png';

// Styles
import styles from './styles.module.scss';

const RightSidebar = () => {
  // Expenses and Income props
  const expense = 7469;
  const income = 2510;

  // Latest spending props
  const dataLastSpending = [
    {
      id: 1,
      title: 'Online Store',
      date: 'May 30, 2023 at 08:00 pm',
      type: 'shopping',
      image: imgOnlineShopping
    },
    {
      id: 2,
      title: 'Pay the hospital',
      date: 'May 28, 2023 at 10:00 pm',
      type: 'healthcare',
      image: imgMedical
    },
    {
      id: 3,
      title: 'Tickets',
      date: 'May 10, 2023 at 12:00 pm',
      type: 'entertainment',
      image: imgCinema
    }
  ];

  return (
    <div className={styles.right_sidebar_wrapper}>
      <ExpensesAndIncome expense={expense} income={income} />
      <LatestSpending dataLastSpending={dataLastSpending} />
      <GoPremium />
    </div>
  )
};

export default RightSidebar