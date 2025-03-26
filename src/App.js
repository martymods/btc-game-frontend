import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';

const socket = io('https://btc-game-backend.onrender.com');

function App() {
  const [btcPrice, setBtcPrice] = useState(null);

  useEffect(() => {
    socket.on('btc-price', price => setBtcPrice(price));
  }, []);

  return (
    <div>
      <h1>BTC Trading Battle</h1>
      <Game socket={socket} btcPrice={btcPrice} />
      <Leaderboard />
    </div>
  );
}

export default App;
