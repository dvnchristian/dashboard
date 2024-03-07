import Image from 'next/image';

// Components
import Card from '../../../../Card';
import Button from '../../../../Button';

// Image
import imgPremium from '../../../../../public/premium.png';

// Styles
import styles from './styles.module.scss';

const GoPremium = () => {
  return (
    <div className={styles.go_premium_wrapper}>
      <Card>
        <div className={styles.go_premium}>
          <p className={styles.title}>Go to Premium</p>

          <div className={styles.image_wrapper}>
            <Image 
              src={imgPremium} 
              alt="img-premium"
              width={180}
              height={100}
            />
          </div>

          <p className={styles.question}>Need more features?</p>
          <p className={styles.description}>
            Update your account to premium to get more features
          </p>
          <Button>
            Get now
          </Button>
        </div>
      </Card>
    </div>
  )
};

export default GoPremium;