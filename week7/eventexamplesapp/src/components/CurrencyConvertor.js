import React, { useState } from 'react';

function CurrencyConvertor() {
  // State to hold the input value (INR) and the result (EUR)
  const [inr, setInr] = useState(0);
  const [eur, setEur] = useState(0);

  // Event handler for the input field
  const handleInrChange = (event) => {
    const value = event.target.value;
    setInr(value);
  };

  // Event handler for the "Convert" button click
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault(); 
    
    // Conversion rate (example: 1 Euro = 90 INR)
    const conversionRate = 90; 
    const result = inr / conversionRate;
    setEur(result.toFixed(2)); // Set the result, rounded to 2 decimal places
  };

  return (
    <div className="converter-container">
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Indian Rupees (INR): </label>
          <input 
            type="number" 
            value={inr} 
            onChange={handleInrChange} 
            placeholder="Enter amount in INR"
          />
        </div>
        <button type="submit">Convert</button>
      </form>
      {eur > 0 && (
        <h3>Converted Amount: €{eur} (Euros)</h3>
      )}
    </div>
  );
}

export default CurrencyConvertor;
