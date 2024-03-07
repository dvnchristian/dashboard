// Components
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import RightSidebar from "../components/Sidebar/RightSidebar";

// Middle Components
import Header from "../components/Header";
import Balance from "../components/Balance";
import CreditCard from "../components/CreditCard";

import ItemList from "../components/ItemList";
import ChatBox from "../components/ChatBox";

import LastTransactions from "../components/LastTransactions";
import Analytics from "../components/Analytics";

// Styles
import styles from "./index.module.scss";

// Profile
import imgProfile1 from '../public/1.png';
import imgProfile2 from '../public/2.png';
import imgProfile3 from '../public/3.png';
import imgProfile4 from '../public/4.png';
import imgProfile5 from '../public/5.png';

export default function Home() {
  // Header Props
  const sessionData = {
    name: 'Jhon .D'
  };

  // Balance Props
  const balanceData = {
    amount: 564,
    growth: '6%',
    graphData: {
      labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
      datasets: [{
        label: 'Expense',
        data: [100, 80, 55, 40, 20],
        backgroundColor: "#525de4",
        borderWidth: 1
      }, {
        label: 'Income',
        data: [80, 90, 60, 30, 10],
        backgroundColor: "#c7cbff",
        borderWidth: 1
      }]
    }
  };

  // Card Props
  const creditCardData = {
    cardNumber: '**** **** **** 9838',
    cardHolder: 'Jhon Demon',
    expiredDate: '12/24',
    type: 'visa'
  };

  // ItemList props
  const itemListData =  {
    startDate: 'Sat August 12',
    startTime: '02:00',
    endDate: 'Fri March 20',
    endTime: '05:00',
    shoppingList: [
      {
        id: 1,
        name: 'Macbook',
        isCheck: true
      },
      {
        id: 2,
        name: 'Bicycle',
        isCheck: false
      },
      {
        id: 3,
        name: 'Motorcycle',
        isCheck: false
      },
      {
        id: 4,
        name: 'Iphone 14 pro max',
        isCheck: true
      }
    ]
  };

  // Props chat box
  const chatData = {
    receiver: 'Esther Howard',
    messages: [
      {
        text: 'Are you ready?',
        isSender: true,
        imgProfile: imgProfile1
      },
      {
        text: 'I have prepared everything',
        isSender: false,
        imgProfile: imgProfile2
      },
    ]
  };

  // Props last transactions
  const dataLastTransactions = {
    transactions: [
      {
        id: 1,
        date: '01/02/2024',
        amount: 1800,
        type: 'income',
        name: 'Bessie Cooper',
        imgProfile: imgProfile3
      },
      {
        id: 2,
        date: '23/01/2024',
        amount: 4500,
        type: 'expense',
        name: 'Guy Hawkins',
        imgProfile: imgProfile4
      },
      {
        id: 3,
        date: '01/12/2023',
        amount: 1200,
        type: 'income',
        name: 'Floyd Miles',
        imgProfile: imgProfile5
      },
      {
        id: 4,
        date: '01/12/2023',
        amount: 2000,
        type: 'expense',
        name: 'Esther Howard',
        imgProfile: imgProfile2
      },
      {
        id: 5,
        date: '21/11/2023',
        amount: 1000,
        type: 'income',
        name: 'Jhon Doe',
        imgProfile: imgProfile1
      }
    ]
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.left}>
          <LeftSidebar />
        </div>

        <div className={styles.middle}>
          <Header name={sessionData.name} />

          <div className={styles.balance_card_wrapper}>
            <Balance data={balanceData} />
            <CreditCard data={creditCardData} />
          </div>

          <div className={styles.todo_chat_wrapper}>
            <ItemList data={itemListData} />
            <div className={styles.vertical_divider} />
            <ChatBox data={chatData} />
          </div>

          <div className={styles.transactions_analytic_wrapper}>
            <LastTransactions data={dataLastTransactions} />
            <Analytics />
          </div>
        </div>

        <div className={styles.right}>
          <RightSidebar />
        </div>
      </div>
    </main>
  );
}
