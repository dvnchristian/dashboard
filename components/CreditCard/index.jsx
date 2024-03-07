import Image from 'next/image';

// Styles
import styles from './styles.module.scss';

// Images
import imgCard from '../../public/card.png'
import imgVisa from '../../public/visa.png'

const Card = ({
  data
}) => {
  const { type, cardNumber, cardHolder, expiredDate } = data || {};

  const getImg = () => {
    if (type === 'visa') {
      return imgVisa
    };
  };

  return (
    <div className={styles.credit_card_wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.company}>S.</p>
          <Image
            src={getImg()}
            width={80}
            height={28}
            alt="img-cc"
          />
        </div>

        <div className={styles.image_wrapper}>
          <Image src={imgCard} alt="img-money" width={120} height={100} />
        </div>

        <div className={styles.footer}>
          <div className={styles.card_detail}>
            <p>{cardNumber}</p>
            <p>{cardHolder}</p>
          </div>
          <p>{expiredDate}</p>
        </div>
      </div>
    </div>
  )
};

export default Card;