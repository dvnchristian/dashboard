'use client'

// Components
import Card from '../Card';

// Chart
import { Doughnut } from "react-chartjs-2";

// Styles
import styles from './styles.module.scss';
import FeatherIcon from 'feather-icons-react';

const Analytics = () => {
  return (
    <div className={styles.analytics_wrapper}>
      <Card variant="full">
        <div className={styles.header}>
          <p className={styles.title}>Analytics</p>
          <FeatherIcon icon="more-vertical" />
        </div>

        <div className={styles.graph_wrapper}>
          <Doughnut
            data={{
              labels: ['Done', 'In Progress', 'Todo'],
              datasets: [
                {
                  label: 'My First Dataset',
                  data: [110, 120, 130, 40],
                  backgroundColor: [
                    '#5459ef',
                    '#ffa500',
                    '#ff5544',
                    '#f1f1f1'
                  ],
                  borderColor: [
                    '#8b93e7',
                    '#ffdbaa',
                    '#f2b1a8',
                    '#f3f3f3'
                  ],
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              rotation: -90,
              circumference: 180,
              cutout: '90%',
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'bottom',
                },
              },
            }}
          />
        <p className={styles.percent}>
          90%
          <span className={styles.done}>
            Done
          </span>
        </p>
        </div>

      </Card>
    </div>
  )
};

export default Analytics;