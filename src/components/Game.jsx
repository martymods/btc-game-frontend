import React from 'react';

export default function Game({ socket, btcPrice }) {
  const sendPrediction = prediction => {
    socket.emit('prediction', { prediction, playerId: socket.id });
  };

  return (
    <div>
      <h2>BTC: ${btcPrice}</h2>
      <button onClick={() => sendPrediction('UP')}>UP ⬆️</button>
      <button onClick={() => sendPrediction('DOWN')}>DOWN ⬇️</button>
    </div>
  );
}
