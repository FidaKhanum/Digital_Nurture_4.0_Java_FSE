import React from 'react';

function GuestGreeting(props) {
  return (
    <div className="greeting-card">
      <h2>Welcome, Guest!</h2>
      <p>Please log in to book your flight tickets.</p>
      <button onClick={props.onLoginClick} className="login-btn">Login</button>
    </div>
  );
}

export default GuestGreeting;
