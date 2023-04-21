import React from 'react'
import styles from '../styles/ChatHead.module.scss';
import Typography from '../../../components/common/Typography/Typography';

const ChatHead = () => {
  return (
    <div className={styles.chat_head_wrapper}>
      <div className={styles.avater}>
        <img src="/assets/user.png" alt="user" />
      </div>
      <div className={styles.last_message_details}>
        <Typography variant='smBold700' color="primary">User Name</Typography>
        <Typography variant='small' color="primary">Message will be here </Typography>
        <span className={styles.message_time}>
          just now
        </span>
      </div>
    </div >
  )
}

export default ChatHead;