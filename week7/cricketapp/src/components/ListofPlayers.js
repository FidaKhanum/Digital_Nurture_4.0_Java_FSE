import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Sachin Tendulkar', score: 120 },
    { name: 'Virat Kohli', score: 95 },
    { name: 'MS Dhoni', score: 50 },
    { name: 'Rohit Sharma', score: 150 },
    { name: 'Yuvraj Singh', score: 65 },
    { name: 'Suresh Raina', score: 100 },
    { name: 'Gautam Gambhir', score: 80 },
    { name: 'Virender Sehwag', score: 110 },
    { name: 'Anil Kumble', score: 40 },
    { name: 'Jasprit Bumrah', score: 130 },
    { name: 'Ravindra Jadeja', score: 70 },
  ];

  const highScorers = players.filter(player => player.score >= 100);

  return (
    <div>
      <h1>List of All Players</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            <b>Name:</b> {player.name}, <b>Score:</b> {player.score}
          </li>
        ))}
      </ul>
      
      <hr />

      <h1>List of Players with Score 100 or More</h1>
      <ul>
        {highScorers.map((player, index) => (
          <li key={index}>
            <b>Name:</b> {player.name}, <b>Score:</b> {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;