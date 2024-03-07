'use client'
import Image from 'next/image';
import { Dropdown } from 'antd';
import FeatherIcon from 'feather-icons-react';

// Chart
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

// Components
import Card from '../Card';

// Images
import imgBalance from '../../public/balance.jpg'

// Styles
import styles from './styles.module.scss';

const items = [
  {
    key: '1',
    label: 'Newest',
  },
  {
    key: '2',
    label: 'Oldest',
  },
];

const Balance = ({
  data
}) => {
  const { amount, growth, graphData } = data || {};

  return (
    <div className={styles.balance_wrapper}>
      <Card variant="full">
        <div className={styles.header}>
          <p>Balance statisctics</p>

          <Dropdown
            menu={{
              items,
            }}
          >
            <div className={styles.dropdown_title}>
              Filter

              <FeatherIcon icon="chevron-down" size="16px"/>
            </div>
          </Dropdown>
        </div>

        <div className={styles.content}>
          <div className={styles.total_balance}>
            <p className={styles.amount}>{`$${amount}`}</p>

            <div className={styles.description}> 
              <Image src={imgBalance} alt="img-balance" width={50} height={50} />

              <div className={styles.text}>
                <p>Your total</p>
                <p>Balance</p>
              </div>
            </div>

            <div>
              <div className={styles.growth}>
                <FeatherIcon icon="arrow-up" size="14px" />
                <p>{growth}</p>
              </div>
              <p className={styles.notes}>Always see your earning updates</p>
            </div>
          </div>

          <div className={styles.chart_wrapper}>
            <Bar
              data={graphData}
              height={180}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false
                    }
                  },
                  y: {
                    grid: {
                      display: false
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  )
};

export default Balance;