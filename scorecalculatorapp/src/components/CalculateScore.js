import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = total / goal;

  return (
    <div className="score-card">
      <h2>{name}</h2>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}</p>
    </div>
  );
}

export default CalculateScore;
