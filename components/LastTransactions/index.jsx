'use client'
import { useEffect, useState } from 'react';
import { Dropdown } from 'antd';
import FeatherIcon from 'feather-icons-react';
import Image from 'next/image';
import cx from 'classnames';

// Components
import Card from '../Card';

// Styles
import styles from './styles.module.scss';

const LastTransactions = ({
  data
}) => {
  const { transactions } = data || {};

  // State
  const [activeFilter, setActiveFilter] = useState('newest');
  const [transactionsState, setTransactionsState] = useState(transactions);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  }

  const filterAndSortTransactions = (filter) => {
    let filteredTransactions = [...transactionsState];
  
    if (filter === 'newest') {
      filteredTransactions.sort((a, b) => {
        const dateA = new Date(parseDate(a.date));
        const dateB = new Date(parseDate(b.date));
        return dateB - dateA;
      });
    } else if (filter === 'oldest') {
      filteredTransactions.sort((a, b) => {
        const dateA = new Date(parseDate(a.date));
        const dateB = new Date(parseDate(b.date));
        return dateA - dateB;
      });
    }
  
    setTransactionsState(filteredTransactions);
  };
  
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
  };

  
  const handleSelectItem = (index) => {
    setSelectedItem(index)
  };
  
  const handleDeleteItem = () => {
    const updatedTransactions = [...transactionsState];
    updatedTransactions.splice(selectedItem, 1);
    
    setTransactionsState(updatedTransactions);
  };
  
  const items = [
    {
      label: <div onClick={handleDeleteItem}>Delete</div>,
      key: 'delete'
    }
  ];
  
  useEffect(() => {
    if (activeFilter) {
      filterAndSortTransactions(activeFilter);
    }
  }, [activeFilter]);

  return (
    <div className={styles.last_transactions_wrapper}>
      <Card variant="full">
        <div className={styles.header}>
          <p className={styles.title}>Last Transactions</p>

          <div className={styles.filter}>
            <p className={cx(styles.text, activeFilter === 'newest' && styles.active)} onClick={() => handleFilter('newest')}>Newest</p>
            <p className={cx(styles.text, activeFilter === 'oldest' && styles.active)} onClick={() => handleFilter('oldest')}>Oldest</p>
          </div>
        </div>

        <div className={styles.divider} />
        
        <div className={styles.transaction_wrapper}>
          {transactionsState.map((transaction, index) => {
            const { name, type, amount, date, imgProfile } = transaction || {};

            const isIncome = type === 'income';

            return (
              <div key={index} className={styles.transaction}>
                <div className={styles.left}>
                  <Image src={imgProfile} alt="img-profile" width={40} height={40} />

                  <div className={styles.user_details}>
                    <p>{name}</p>
                    <p className={styles.date}>{date}</p>
                  </div>
                </div>

                <div className={styles.right}>
                  <p>{isIncome ? `+$${amount}` : `-$${amount}`}</p>
                  <Dropdown
                    menu={{
                      items
                    }}
                    trigger={['click']}
                  >
                    <FeatherIcon 
                      icon="more-vertical" 
                      size="12px" 
                      className={styles.icon_more} 
                      onClick={() => handleSelectItem(index)} 
                    />
                  </Dropdown>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
};

export default LastTransactions;