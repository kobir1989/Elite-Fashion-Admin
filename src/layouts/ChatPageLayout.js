import React from 'react'
import PageLayout from './PageLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import styles from './styles/ChatPageLayout.module.scss';
import ChatHead from '../pages/Chat/Components/ChatHead';
const ChatPageLayout = ({ children }) => {
  return (
    <PageLayout>
      <section className={styles.chat_page_wrapper}>
        <PageTitle title='Messages' showBtn={false} />
        <div className={styles.messages_container_main}>
          <div className={styles.conversation_list}>
            <ChatHead />
          </div>
          {children}
        </div>
      </section>
    </PageLayout>
  )
}

export default ChatPageLayout;