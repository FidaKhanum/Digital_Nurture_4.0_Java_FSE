import React from 'react';

function UserGreeting(props) {
  return (
    <div className="greeting-card">
      <h2>Welcome Back!</h2>
      <p>You can now book your tickets.</p>
      <button className="book-btn">Book Tickets</button>
      <button onClick={props.onLogoutClick} className="logout-btn">Logout</button>
    </div>
  );
}

export default UserGreeting;
