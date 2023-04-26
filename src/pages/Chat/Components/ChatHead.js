import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/ChatHead.module.scss';
import Typography from '../../../components/common/Typography/Typography';
import { NavLink } from 'react-router-dom';
import { socket } from '../../../socket'
import { Context } from '../../../store/Context';

const ChatHead = ({ sender, avater, roomId, isOnline, senderId }) => {
  const [newMessage, setNewMessage] = useState(null)
  const { state } = useContext(Context);
  const { darkMood } = state;

  // listen for incoming messages
  useEffect(() => {
    socket.on("getMessage", (message) => {
      setNewMessage(message)
    });
    // clean up event listener
    return () => socket.off("getMessage");
  }, [])

  return (
    <NavLink to={`/chat/details/${roomId}`} className={({ isActive }) => isActive && darkMood ? `${styles.active_dark_mood} ${styles.dark_mood_bg}` : darkMood && !isActive ? `${styles.unactive} ${styles.dark_mood_bg}` : !darkMood && isActive ? `${styles.active} ${styles.light_mood_bg}` : `${styles.unactive} ${styles.light_mood_bg}`}>
      <div className={styles.chat_head_wrapper}>
        {senderId === newMessage?.sender &&
          <span className={styles.new_text}>
            1
          </span>}
        <div className={isOnline ? `${styles.online_dot} ${styles.avater}` : `${styles.avater}`}>
          <img src={avater || "/assets/user.png"} alt="user" />
        </div>
        <div className={styles.last_message_details}>
          <Typography variant='smBold700' color={darkMood ? "paragraph" : "primary"}>{sender}</Typography>
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