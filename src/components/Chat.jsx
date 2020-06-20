import React, { useEffect, useRef, useState } from 'react';
import socket from '../socket';

function Chat({ state, onAddMessage }) {
  const {
    users, messages, userName, roomId,
  } = state;
  const [messageValue, setMessageValue] = useState('');
  const messagesRef = useRef(null);
  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      roomId,
      userName,
      text: messageValue,
    });
    onAddMessage({
      userName,
      text: messageValue,
    });
    setMessageValue('');
  };

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat-users">
        Комната:
        {' '}
        <b>{ roomId}</b>
        <hr />
        <b>
          Онлайн (
          {users.length}
          ):
        </b>
        <ul>
          {users.map((name, index) => (<li key={index}>{name}</li>))}
        </ul>
      </div>
      <div className="chat-messages">
        <div ref={messagesRef} className="messages">
          {
            messages.map((message, index) => (
              <div key={index} className="message">
                <p>
                  {message.text}
                </p>
                <div>
                  <span>{message.userName}</span>
                </div>
              </div>
            ))
          }
        </div>
        <form>
          <textarea
            rows="3"
            value={messageValue}
            onChange={(event) => setMessageValue(event.target.value)}
            className="form-control"
          />
          <button
            onClick={onSendMessage}
            type="button"
            className="btn btn-primary"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
