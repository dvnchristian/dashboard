'use client'
import { useState } from 'react';
import cx from 'classnames';
import FeatherIcon from "feather-icons-react";

// Styles
import styles from './styles.module.scss';

// Constants
const listMenu = [
  {
    destination: '/home',
    icon: 'home'
  },
  {
    destination: '/notifications',
    icon: 'bell'
  },
  {
    destination: '/schedule',
    icon: 'clock'
  },
  {
    destination: '/users',
    icon: 'users'
  },
  {
    destination: '/pocket',
    icon: 'pocket'
  },
  {
    destination: '/settings',
    icon: 'settings'
  }
];

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleSetActiveMenu = (index) => {
    setActiveMenu(index);
  };
  
  console.log(activeMenu, 'activeMenu');

  return (
    <div className={styles.menu_wrapper}>
      {listMenu.map((menu, index) => (
        <div key={index} className={cx(styles.menu, activeMenu === index && styles.active)} onClick={() => handleSetActiveMenu(index)}>
          <FeatherIcon icon={menu.icon} />
        </div>
      ))}
    </div>
  )
};

export default Menu;