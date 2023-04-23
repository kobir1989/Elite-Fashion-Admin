import React from 'react'
import styles from '../styles/ChatHead.module.scss';
import Typography from '../../../components/common/Typography/Typography';
import { NavLink } from 'react-router-dom'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ChatHead = ({ sender, lastMessage, time, avater, roomId }) => {
  const messageTimeFromNow = dayjs(time).fromNow();
  return (
    <NavLink to={`/chat/details/${roomId}`} className={({ isActive }) => isActive ? `${styles.active}` : `${styles.unactive}`}>
      <div className={styles.chat_head_wrapper}>
        <div className={styles.avater}>
          <img src={avater || "/assets/user.png"} alt="user" />
        </div>
        <div className={styles.last_message_details}>
          <Typography variant='smBold700' color="primary">{sender}</Typography>
          <Typography variant='small' color="primary">
            {lastMessage}
          </Typography>
          <span className={styles.message_time}>
            {messageTimeFromNow}
          </span>
        </div>
      </div >
    </NavLink >

  )
}

export default ChatHead;