'use client'
import React, { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Checkbox, Dropdown } from 'antd';

// Styles
import styles from './styles.module.scss';

const ItemList = ({
  data
}) => {
  const { startDate, endDate, startTime, endTime, shoppingList } = data || {};
  const [list, setList] = useState(shoppingList || []);

  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const initialCheckedItems = list.map(item => item.isCheck);
    setCheckedItems(initialCheckedItems);
  }, [list]);

  const onChange = (index, e) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = e.target.checked;
    setCheckedItems(updatedCheckedItems);
  };

  const handleSelectItem = (index) => {
    setSelectedItem(index);
  };

  const handleAddItem = () => {
    const value = prompt('Please state the new item:');

    if (value) {
      const updatedList = [...list];
      updatedList.push({
        name: value,
        isCheck: false
      });

      setList(updatedList);
    }
  };

  const handleEditContent = () => {
    const edit = prompt('Edit Content');

    if (edit) {
      const updatedList = [...list];
      updatedList[selectedItem].name = edit;
      setList(updatedList);
    }
  };

  const handleDeleteItem = () => {
    const updatedList = [...list];
    updatedList.splice(selectedItem, 1);

    setList(updatedList);
  };

  const items = [
    {
      label: <div onClick={handleEditContent}>Edit</div>,
      key: 'edit',
    },
    {
      label: <div onClick={handleDeleteItem}>Delete</div>,
      key: 'delete',
    },
  ];

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
          <p><span>{``}</span> Shopping List</p>

          <div className={styles.add_item_wrapper} onClick={handleAddItem}>
            <FeatherIcon icon="plus" size="14px" />
            <p>Add an item</p>
          </div>
        </div>

        <div className={styles.checkbox_wrapper}>
          {list.map((item, index) => {
            const { name } = item || {};

            return (
              <div key={index} className={styles.checkbox}>
                <Checkbox 
                  onChange={(e) => onChange(index, e)}
                  checked={checkedItems[index]}
                />

                <div className={styles.checkbox_content}>
                  <p>{name}</p>
                  
                  <Dropdown
                    menu={{
                      items
                    }}
                    trigger={['click']}
                  >
                    <FeatherIcon 
                      icon="more-vertical" 
                      size="12px" 
                      className={styles.icon_more} 
                      onClick={() => handleSelectItem(index)} 
                    />
                  </Dropdown>
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