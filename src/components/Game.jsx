import React, { useEffect, useState } from 'react';

export default function Game({ socket, btcPrice }) {
  const [predictionResult, setPredictionResult] = useState(null);

  useEffect(() => {
    socket.on('prediction-result', (data) => {
      setPredictionResult(data);
    });
  }, [socket]);

  const sendPrediction = (prediction) => {
    setPredictionResult(null); // reset previous result clearly
    socket.emit('prediction', { prediction, playerId: socket.id });
  };

  return (
    <div>
      <h2>BTC: ${btcPrice}</h2>
      <button onClick={() => sendPrediction('UP')}>UP ⬆️</button>
      <button onClick={() => sendPrediction('DOWN')}>DOWN ⬇️</button>

      {predictionResult && (
        <div>
          <h3>You {predictionResult.result.toUpperCase()}!</h3>
          <p>Previous Price: ${predictionResult.previousPrice}</p>
          <p>New Price: ${predictionResult.newPrice}</p>
        </div>
      )}
    </div>
  );
}
