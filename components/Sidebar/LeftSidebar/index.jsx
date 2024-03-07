'use client'
import Image from 'next/image';
import FeatherIcon from 'feather-icons-react';

// Components
import Menu from './components/Menu';

// Styles
import styles from './styles.module.scss';

// Images
import ImgProfile from '../../../public/1.png';

const LeftSidebar = () => {
  return (
    <div className={styles.left_sidebar_wrapper}>
      <div className={styles.top}> 
        <div className={styles.title}>
          S.
        </div>

        <div className={styles.chat_box}>
          <FeatherIcon icon="message-square" />
        </div>
      </div>

      <div className={styles.middle}> 
        <Menu />
      </div>

      <div className={styles.bottom}>
        <Image src={ImgProfile} alt="img-profile" width={40} height={40} />
        <FeatherIcon icon="log-out" />
      </div>
    </div>
  )
};

export default LeftSidebar