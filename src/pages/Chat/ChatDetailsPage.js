import React, { useEffect, useState } from 'react'
import ChatPageLayout from '../../layouts/ChatPageLayout';
import ConversationDetails from './Components/ConversationDetails';
import { useParams } from 'react-router-dom';
import { useHttpHook } from '../../hooks/useHttpHook';

const ChatDetailsPage = () => {
  const [messages, setMessages] = useState([])
  const { roomId } = useParams();

  const getResponseData = (data) => {
    setMessages(data?.messages)
  }
  const { sendRequest, loading, hasError } = useHttpHook()

  useEffect(() => {
    sendRequest({ url: `/messages/${roomId}` }, getResponseData)
  }, [roomId])
  return (
    <ChatPageLayout>
      <ConversationDetails
        messages={messages}
        loading={loading}
        error={hasError}
        roomId={roomId}
        setMessages={setMessages}
      />
    </ChatPageLayout>
  )
}

export default ChatDetailsPage;