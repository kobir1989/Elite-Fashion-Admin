import React, { useEffect, useState } from 'react'
import PageLayout from './PageLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import styles from './styles/ChatPageLayout.module.scss';
import ChatHead from '../pages/Chat/Components/ChatHead';
import { useHttpHook } from '../hooks/useHttpHook';

const ChatPageLayout = ({ children }) => {
  const [chatRooms, setChatRooms] = useState([])
  const getResposeData = (data) => {
    setChatRooms(data?.chatRooms)
  }
  const { sendRequest, loading, error } = useHttpHook()

  useEffect(() => {
    sendRequest({ url: '/chat-rooms/all' }, getResposeData)
  }, [])
  return (
    <PageLayout>
      <section className={styles.chat_page_wrapper}>
        <PageTitle title='Messages' showBtn={false} />
        <div className={styles.messages_container_main}>
          <div className={styles.conversation_list}>
            {!loading && !error && chatRooms?.length > 0 ? chatRooms.map((room) => (
              <ChatHead
                key={room?._id}
                sender={room?.user?.name}
                lastMessage={room?.message}
                time={room?.createdAt}
                avater={room?.user?.image}
                roomId={room?._id}
              />
            )) : null}
          </div>
          <div className={styles.messages_wrapper}>
            {children}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default ChatPageLayout;