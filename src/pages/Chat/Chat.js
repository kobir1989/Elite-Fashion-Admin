import React from 'react'
import PageLayout from '../../layouts/PageLayout';
import PageTitle from '../../components/common/PageTitle/PageTitle';
import styles from './styles/Chat.module.scss';
import ChatHead from './Components/ChatHead';
import Typography from '../../components/common/Typography/Typography';
import Message from './Components/Message';
import Button from '../../components/common/Button/Button';
import Icons from '../../components/common/Icons/Icons';
const Chat = () => {
  return (
    <PageLayout>
      <section className={styles.chat_page_wrapper}>
        <PageTitle title='Messages' showBtn={false} />
        <div className={styles.messages_container_main}>
          <div className={styles.conversation_list}>
            <ChatHead />
          </div>
          <div className={styles.conversation_details}>
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
              <Message isAdmin={true} />
              <Message isAdmin={false} />
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
        </div>
      </section>
    </PageLayout>
  )
}

export default Chat;