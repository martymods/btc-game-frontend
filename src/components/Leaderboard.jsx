import React from 'react';

export default function Leaderboard() {
  const players = [{name: 'Player1', wins: 5}, {name: 'Player2', wins: 3}];

  return (
    <div>
      <h3>Leaderboard</h3>
      {players.map((p, i) => <div key={i}>{p.name}: {p.wins} wins</div>)}
    </div>
  );
}
