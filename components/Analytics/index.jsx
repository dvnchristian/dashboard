'use client'
import FeatherIcon from 'feather-icons-react';

// Components
import Card from '../Card';

// Chart
import { Doughnut } from "react-chartjs-2";

// Styles
import styles from './styles.module.scss';

const Analytics = () => {
  const rawData = [
    {
      progress: 'done',
      label: 'Done',
      total: 110,
    },
    {
      progress: 'in-progress',
      label: 'In Progress',
      total: 110,
    },
    {
      progress: 'todo',
      label: 'Todo',
      total: 130,
    },
    {
      progress: 'backlog',
      label: '',
      total: 40,
    }
  ];
  const dataLabel = rawData.filter((data) => data.label !== '').map((data) => data.label);
  const dataValue = rawData.map((data) => data.total);

  const countFinishedTask = rawData.filter((data) => data.progress !== 'backlog').map((data) => data.total).reduce((a, b) => a + b, 0);
  const totalTask = dataValue.reduce((a, b) => a + b);
  const average = Math.ceil((countFinishedTask / totalTask) * 100);

  console.log(average, 'average');

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
              labels: dataLabel,
              datasets: [
                {
                  data: dataValue,
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
          {`${average}%`}
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