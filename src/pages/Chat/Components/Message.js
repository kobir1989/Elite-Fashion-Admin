import React from 'react'
import styles from '../styles/Message.module.scss';
import Typography from '../../../components/common/Typography/Typography';

const Message = ({ isAdmin }) => {
  return (
    <div className={isAdmin ? `${styles.message_align_right}` : `${styles.message_align_left}`}>
      <div className={isAdmin ? `${styles.message_blue_bg}` : `${styles.message_gray_bg}`}>
        <Typography variant='small' color={isAdmin ? 'white' : 'black'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae nostrum veniam officiis odit fugiat est praesentium ut quibusdam sunt.
        </Typography>
      </div>
      <span className={isAdmin ? `${styles.time_right}` : `${styles.time_left}`}>
        3:00 PM
      </span>
    </div>
  )
}

export default Message;