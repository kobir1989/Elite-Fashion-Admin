import React, { useEffect, useState } from 'react'
import styles from '../styles/ChatHead.module.scss';
import Typography from '../../../components/common/Typography/Typography';
import { NavLink } from 'react-router-dom';
import { socket } from '../../../socket'

const ChatHead = ({ sender, avater, roomId, isOnline, senderId }) => {
  const [newMessage, setNewMessage] = useState(null)

  // listen for incoming messages
  useEffect(() => {
    socket.on("getMessage", (message) => {
      setNewMessage(message)
    });
    // clean up event listener
    return () => socket.off("getMessage");
  }, [])

  return (
    <NavLink to={`/chat/details/${roomId}`} className={({ isActive }) => isActive ? `${styles.active}` : `${styles.unactive}`}>
      <div className={styles.chat_head_wrapper}>
        {senderId === newMessage?.sender &&
          <span className={styles.new_text}>
            1
          </span>}
        <div className={isOnline ? `${styles.online_dot} ${styles.avater}` : `${styles.avater}`}>
          <img src={avater || "/assets/user.png"} alt="user" />
        </div>
        <div className={styles.last_message_details}>
          <Typography variant='smBold700' color="primary">{sender}</Typography>
          <Typography variant='body' color="primary">
            {senderId === newMessage?.sender ? newMessage?.message : null}
          </Typography>
          <span className={styles.message_time}>
            {isOnline ? 'Active now' : 'Offline'}
          </span>
        </div>
      </div >
    </NavLink >

  )
}

export default ChatHead;