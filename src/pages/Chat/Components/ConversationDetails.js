import React from 'react'
import Button from '../../../components/common/Button/Button';
import Typography from '../../../components/common/Typography/Typography';
import Message from './Message';
import Icons from '../../../components/common/Icons/Icons';
import styles from '../styles/ConversationDetails.module.scss';

const ConversationDetails = () => {
  return (
    <div className={styles.conversation_details}>
      {/* userDetails */}
      <div className={styles.message_sender_details}>
        <img src="/assets/user.png" alt="user" />
        <div className={styles.sender_info}>
          <Typography variant='smBold700' color="primary">
            User name
          </Typography>
          <Typography variant='small' color="paragraph">
            test@test.com
          </Typography>
        </div>
      </div>

      {/* messages */}
      <div className={styles.message_list}>
        <Message isAdmin={true} message='Hello' />
        <Message isAdmin={false} message='hi' />
      </div>
      {/* form */}
      <div className={styles.message_from_wrapper}>
        <form>
          <input
            type="text"
            placeholder='Message'
            required name='message'
            autoComplete='off'
          />
          <Button variant='variant-icon-btn-normal'>
            <Icons name='send' color='#9fa7b6' />
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ConversationDetails;