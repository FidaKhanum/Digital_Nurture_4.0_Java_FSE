import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  // State for the counter
  const [counter, setCounter] = useState(0);

  // ---- 1. Counter Logic ----
  
  // Method to increment the counter value
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  // Method to display a message
  const sayHello = () => {
    alert('Hello! The counter has been increased.');
  };

  // Handler that invokes multiple methods for the "Increment" button
  const handleIncrement = () => {
    increment();
    sayHello();
  };
  
  // Method to decrement the counter value
  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  // ---- 2. "Say Welcome" Button Logic ----
  
  // Function that accepts an argument
  const sayMessage = (message) => {
    alert(message);
  };

  // ---- 3. Synthetic Event Button Logic ----
  
  // The 'event' parameter here is a React SyntheticEvent
  const handlePress = (event) => {
    console.log(event); // You can inspect the SyntheticEvent in the console
    alert('I was clicked! (Check console for the SyntheticEvent object)');
  };

  return (
    <div className="App">
      <h1>React Event Handling Examples</h1>

      {/* Counter Section */}
      <div className="card">
        <h2>Counter</h2>
        <h3>Value: {counter}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      {/* Argument Passing Section */}
      <div className="card">
        <h2>Passing Arguments to Events</h2>
        {/* We use an arrow function to call sayMessage with an argument */}
        <button onClick={() => sayMessage('Welcome to our app!')}>
          Say Welcome
        </button>
      </div>

      {/* Synthetic Event Section */}
      <div className="card">
        <h2>Synthetic Event Example</h2>
        <button onClick={handlePress}>Click Me (onPress)</button>
      </div>
      
      {/* Currency Convertor Component */}
      <div className="card">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;
