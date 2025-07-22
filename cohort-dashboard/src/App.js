import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <h1>My Academy Dashboard</h1>
      <CohortDetails
        name="React Bootcamp"
        startDate="2024-07-01"
        endDate="2024-08-15"
        status="ongoing"
      />
      <CohortDetails
        name="Java Basics"
        startDate="2024-05-01"
        endDate="2024-06-10"
        status="completed"
      />
    </div>
  );
}

export default App;
