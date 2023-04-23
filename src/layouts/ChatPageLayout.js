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


  const rooms = chatRooms.flatMap(room => room.messages.map(message => message));

  return (
    <PageLayout>
      <section className={styles.chat_page_wrapper}>
        <PageTitle title='Messages' showBtn={false} />
        <div className={styles.messages_container_main}>
          <div className={styles.conversation_list}>
            {!loading && !error && rooms?.length > 0 ? rooms.map((room) => (
              <ChatHead
                key={room?.chatRoom}
                sender={room?.sender?.name}
                lastMessage={room?.message}
                time={room?.createdAt}
                avater={room?.sender?.image}
                roomId={room?.chatRoom}
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