import React from 'react';
import socket from '../socket';

function JoinBlock() {
  return (
    <div>
      <div className="join-block">
        <input type="text" placeholder="Room ID" />
        <input type="text" placeholder="Ваше имя" />
        <button type="button" className="btn btn-success">ВОЙТИ</button>
      </div>
    </div>
  );
}

export default JoinBlock;
