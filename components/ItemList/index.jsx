'use client'
import React, { useState, useEffect } from 'react';

// Styles
import FeatherIcon from 'feather-icons-react';
import styles from './styles.module.scss';
import { Checkbox } from 'antd';

const ItemList = ({
  data
}) => {
  const { startDate, endDate, startTime, endTime, shoppingList } = data || {};

  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    const initialCheckedItems = shoppingList.map(item => item.isCheck);
    setCheckedItems(initialCheckedItems);
  }, [shoppingList]);

  const onChange = (index, e) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = e.target.checked;
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div className={styles.item_list_wrapper}>
      <div className={styles.header}>
        <p>List of items to buy</p>
      </div>

      <div className={styles.date}>
        <div className={styles.start}>
          <p className={styles.time_text}>
            {startTime}
          </p>
          <p className={styles.date_text}>
            {startDate}
          </p>
        </div>

        <FeatherIcon icon="chevron-right" />

        <div className={styles.end}>
          <p className={styles.time_text}>
            {endTime}
          </p>
          <p className={styles.date_text}>
            {endDate}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          <p><span>0/3</span> Shopping List</p>

          <div className={styles.add_item_wrapper}>
            <FeatherIcon icon="plus" size="14px" />
            <p>Add an item</p>
          </div>
        </div>

        
        <div className={styles.checkbox_wrapper}>
          {shoppingList.map((item, index) => {
            const { name } = item || {};

            return (
              <div key={index} className={styles.checkbox}>
                <Checkbox 
                  onChange={(e) => onChange(index, e)}
                  checked={checkedItems[index]}
                />

                <div className={styles.checkbox_content}>
                  {name}
                  <FeatherIcon icon="more-vertical" size="12px" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default ItemList;