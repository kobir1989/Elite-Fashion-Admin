import React, { useContext, useEffect } from 'react'
import Typography from '../../../components/common/Typography/Typography';
import Message from './Message';
import styles from '../styles/ConversationDetails.module.scss';
import { Context } from '../../../store/Context';
import { socket } from '../../../socket';
import MessageForm from './MessageForm';

const ConversationDetails = ({ messages = [], loading, error, roomId, setMessages }) => {
  const { state } = useContext(Context);
  const { authToken } = state;
  const { userPayload } = authToken;

  //Finding message sender from messages Array so it can be usefull when sent a new message, as message receiver.
  const findSender = messages.find(msg => msg?.chatRoom === roomId);

  //Socket real-time chat 
  useEffect(() => {
    socket.on('message', (message) => {
      console.log(message, "SOCKET MESSAGE")
      setMessages(prevMgs => [...prevMgs, message])
    })
    // Disconnect from the Socket-io server
    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, [])

  //Sorting the messages array to show the latest messages in UI
  const sortedMessages = messages.slice().sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))

  return (
    <div className={styles.conversation_details}>
      {/* userDetails */}
      {roomId && <div className={styles.message_sender_details}>
        <img src={findSender?.sender?.image || "/assets/user.png"} alt="user" />
        <div className={styles.sender_info}>
          <Typography variant='smBold700' color="primary">
            {findSender?.sender?.name}
          </Typography>
          <Typography variant='small' color="paragraph">
            {findSender?.sender?.email}
          </Typography>
        </div>
      </div>}
      {/* messages */}
      <div className={styles.message_list}>
        {sortedMessages?.length > 0 ? sortedMessages.map((message) => (
          <Message
            isAdmin={message?.sender?._id === userPayload?._id || message?.sender === userPayload?._id ? true : false}
            message={message?.message}
            key={message?._id}
            time={message?.createdAt}
          />
        )) :
          <div className={styles.not_found_message}>
            {!loading && !error && <Typography variant='body' color='red'>
              Please choose a person to engage in conversation.
            </Typography>}
          </div>
        }
      </div>
      {/* form */}
      <MessageForm
        messages={messages}
        roomId={roomId}
        receiver={findSender?.sender?._id}
        loggedInUserId={userPayload?._id}
      />
    </div>
  )
}

export default ConversationDetails;