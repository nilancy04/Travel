import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import FlightResults from './Components/FlightResults/FlightResults';
import { useState } from 'react';

function App() {
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/flight-results" 
          element={
            <FlightResults 
              selectedFlight={selectedFlight}
              setSelectedFlight={setSelectedFlight}
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 