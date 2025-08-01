import React from 'react';

function IndianPlayers() {
  const indianTeam = ['Sachin', 'Virat', 'Dhoni', 'Rohit'];
  const [sachin, virat, dhoni, rohit] = indianTeam;

  const oddPlayers = [sachin, dhoni];
  const evenPlayers = [virat, rohit];

  const T20players = ['KL Rahul', 'Shikhar Dhawan', 'Hardik Pandya'];
  const RanjiTrophyplayers = ['Mayank Agarwal', 'Prithvi Shaw', 'Cheteshwar Pujara'];
  
  const mergedPlayers = [...T20players, ...RanjiTrophyplayers];

  return (
    <div>
      <h1>Indian Team</h1>
      <h3>Odd Team</h3>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Even Team</h3>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <hr />
      
      <h1>Merged Team</h1>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;