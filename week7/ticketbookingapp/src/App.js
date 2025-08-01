import React, { useState } from 'react';
import './App.css';
import UserGreeting from './components/UserGreeting';
import GuestGreeting from './components/GuestGreeting';

function App() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Event handlers to update the login state
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  // Dummy flight data
  const flights = [
    { id: 1, from: 'Bengaluru', to: 'New Delhi', time: '10:00 AM' },
    { id: 2, from: 'Mumbai', to: 'Chennai', time: '12:30 PM' },
    { id: 3, from: 'Kolkata', to: 'Goa', time: '03:00 PM' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Ticket Booking</h1>
      </header>
      
      <main>
        {/* Conditional Rendering: Use a ternary operator */}
        {/* If isLoggedIn is true, render UserGreeting. Otherwise, render GuestGreeting. */}
        {isLoggedIn 
          ? <UserGreeting onLogoutClick={handleLogoutClick} /> 
          : <GuestGreeting onLoginClick={handleLoginClick} />
        }

        <div className="flight-list">
          <h2>Available Flights</h2>
          <ul>
            {flights.map(flight => (
              <li key={flight.id}>
                <span>{flight.from} to {flight.to}</span>
                <span>at {flight.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
