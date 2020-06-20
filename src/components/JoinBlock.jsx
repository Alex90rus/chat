import React, { useState } from 'react';
import axios from 'axios';
import socket from '../socket';

function JoinBlock({ onLogin }) {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return console.log('Введите верные данные');
    }
    const obj = {
      roomId,
      userName,
    };
    setIsLoading(true);
    await axios.post('/rooms', obj);
    return onLogin(obj);
  };

  return (
    <div>
      <div className="join-block">
        <input
          type="text"
          placeholder="Room ID"
          value={roomId}
          onChange={(event) => setRoomId(event.target.value)}
        />
        <input
          type="text"
          placeholder="Ваше имя"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button disabled={isLoading} onClick={onEnter} type="button" className="btn btn-success">
          {isLoading ? 'ВХОД...' : 'ВОЙТИ'}
        </button>
      </div>
    </div>
  );
}

export default JoinBlock;
