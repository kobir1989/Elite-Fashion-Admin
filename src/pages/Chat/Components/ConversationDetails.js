import React, { useContext, useEffect, useState } from 'react'
import Button from '../../../components/common/Button/Button';
import Typography from '../../../components/common/Typography/Typography';
import Message from './Message';
import Icons from '../../../components/common/Icons/Icons';
import styles from '../styles/ConversationDetails.module.scss';
import { Context } from '../../../store/Context';
import { useHttpHook } from '../../../hooks/useHttpHook';

const ConversationDetails = ({ messages = [], loading, error, roomId }) => {
  console.log(messages)
  const [text, setText] = useState('')
  const [isEror, setIsError] = useState(null)
  const { state } = useContext(Context);
  const { authToken } = state;
  const { userPayload } = authToken;
  const findSender = messages.find(msg => msg?.chatRoom === roomId);

  //onChage Handler 
  const handleTextChange = (e) => {
    setText(e.target.value)
    if (e.target.value !== '') {
      setIsError(null)
    }
  }
  //this function will hold the response sent from server.
  const getResponseData = (data) => {
    if (data) {
      messages.push(data?.newMessage)
    }
  }
  //custom hook to send request to server 
  const { sendRequest, loading: textSubmitLoading } = useHttpHook()

  //onSubmit handler 
  const handleTextMessage = (e) => {
    e.preventDefault()
    if (!roomId) {
      return setIsError('Please choose a person to engage in conversation!')
    }
    const data = {
      message: text,
      sender: userPayload?._id,
      receiver: findSender?.sender?._id,
    }
    sendRequest({
      url: `/new/message/${roomId}`,
      method: 'POST',
      postData: data
    }, getResponseData)
    setText('')
  }

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
        {!loading && !error && messages?.length > 0 ? messages.map((message) => (
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
      <div className={styles.message_from_wrapper}>
        <form onSubmit={handleTextMessage}>
          <input
            type="text"
            placeholder='Message'
            required name='message'
            autoComplete='off'
            value={text}
            onChange={handleTextChange}
            className={isEror ? styles.input_error_styles : ''}
          />
          <Button
            disabled={textSubmitLoading}
            type='submit'
            variant='variant-icon-btn-normal'
          >
            <Icons name='send' color='#9fa7b6' />
          </Button>
          {isEror && <div className={styles.error_message_wrapper}>  <Typography variant='small' color='red'>{isEror}</Typography></div>}
        </form>
      </div>
    </div>
  )
}

export default ConversationDetails;