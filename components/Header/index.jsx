import FeatherIcon from 'feather-icons-react';

// Styles
import styles from './styles.module.scss';

const Header = ({
  name
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.name}>Hello, {name}</h1>
        <p className={styles.description}>View and control your finances here!</p>
      </div>

      <div className={styles.icon_wrapper}>
        <FeatherIcon icon="search" />
      </div>
    </div>
  )
};

export default Header;