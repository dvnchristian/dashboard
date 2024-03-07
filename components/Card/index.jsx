// Styles
import styles from './styles.module.scss';

const Card = ({
  children,
  variant
}) => {
  const constructClassName = () => {
    let className = styles.card;

    if (variant === 'full') {
      className += ` ${styles.full}`;
    }
    
    return className;
  }

  return (
    <div className={constructClassName()}>
      {children}
    </div>
  )
};

export default Card;