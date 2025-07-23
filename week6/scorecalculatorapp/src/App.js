import React from 'react';
import CalculateScore from './components/CalculateScore.js';

function App() {
  return (
    <div>
      <h1>Student Score Calculator</h1>
      <CalculateScore name="Fida" school="DSATM" total={450} goal={5} />
    </div>
  );
}

export default App;
