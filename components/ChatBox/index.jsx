'use client'
import Image from 'next/image';
import cx from 'classnames';
import { Input } from 'antd';
const { TextArea } = Input;

// Components
import Button from '../Button';

// Styles
import styles from './styles.module.scss';

const ChatBox = ({
  data
}) => {
  const { receiver, messages } = data || {};

  return (
    <div className={styles.chat_box_wrapper}>
      <p className={styles.receiver}>{receiver}</p>

      <div className={styles.message_wrapper}>
        {messages.map((item, index) => {
          const { isSender, text, imgProfile } = item || {};

          return (
            <div key={index} className={cx(styles.message, isSender && styles.sender)}>
              {!isSender && <Image src={imgProfile} alt="img-profile" width={40} height={40} />}
              <p className={styles.text}>{text}</p>
              {isSender && <Image src={imgProfile} alt="img-profile" width={40} height={40} />}
            </div>
          )
        })}
      </div>

      <div className={styles.text_area_container}>
        <TextArea 
          rows={4} 
          autoSize={{
            minRows: 2,
            maxRows: 6,
          }}
        />

        <Button className={styles.button_send}>Send now</Button>
      </div>
    </div>
  )
};

export default ChatBox;