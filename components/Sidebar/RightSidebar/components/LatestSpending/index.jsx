import Image from 'next/image';
import FeatherIcon from 'feather-icons-react';

// Components
import Card from '../../../../Card';

// Styles
import styles from './styles.module.scss';

const LatestSpending = ({
  dataLastSpending
}) => {
  return (
    <div className={styles.latest_spending_wrapper}>
      <Card>
        <div className={styles.header}>
          <p>Latest Spending</p>

          <FeatherIcon icon="more-vertical" />
        </div>

        <div className={styles.content}>
          {dataLastSpending.map((item, index) => {
            const { image, title, date } = item || {};

            return (
              <div key={index} className={styles.spending}>
                <Image
                  src={image}
                  alt="img-spending"
                  width="90"
                  height="75"
                />
                
                <div className={styles.text}>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.date}>{date}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className={styles.button_view_all}>
          <p>View All</p>
          <FeatherIcon icon="arrow-right" />
        </div>
      </Card>
    </div>
  )
};

export default LatestSpending;