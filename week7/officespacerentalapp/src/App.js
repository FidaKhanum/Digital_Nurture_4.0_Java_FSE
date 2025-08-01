import './App.css';

function App() {
  // Create a list of office space objects
  const officeList = [
    { id: 1, name: "DBS", rent: 75000, address: "Chennai" },
    { id: 2, name: "Awfis", rent: 55000, address: "Mumbai" },
    { id: 3, name: "WeWork", rent: 80000, address: "Bengaluru" },
    { id: 4, name: "Regus", rent: 45000, address: "Delhi" }
  ];

  return (
    <div className="App">
      {/* 1. Create an element to display the heading */}
      <h1>Office Space Rental</h1>

      {/* 2. Attribute to display the image */}
      <img 
        src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Modern office space" 
        width="600"
      />

      <div className="office-container">
        {/* 3. Loop through the list of office objects to display data */}
        {officeList.map(office => (
          <div key={office.id} className="office-card">
            <h2>{office.name}</h2>
            <p>Address: {office.address}</p>
            
            {/* 4. Apply conditional inline CSS for the rent */}
            <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              Rent: ₹{office.rent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;