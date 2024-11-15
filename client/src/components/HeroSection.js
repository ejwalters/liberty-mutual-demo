import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext'; // Import the context
import './HeroSection.css';

function HeroSection() {
  // Use selectedInsurances and setSelectedInsurances from context
  const { selectedInsurances, setSelectedInsurances } = useAppContext();
  const [zipCode, setZipCode] = useState('');
  const [zipError, setZipError] = useState('');
  const navigate = useNavigate();

  const toggleInsuranceSelect = (type) => {
    setSelectedInsurances((prevSelected) => {
      if (prevSelected.includes(type)) {
        // If type is already selected, deselect it
        return prevSelected.filter((item) => item !== type);
      } else {
        // If type is not selected, add it to the array
        return [...prevSelected, type];
      }
    });
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
    setZipError(''); // Clear error when typing
  };

  const handleGetPrice = () => {
    // Simple ZIP code validation (5-digit format)
    if (/^\d{5}$/.test(zipCode)) {
      if (selectedInsurances.length === 0) {
        setZipError('Please select at least one insurance type');
      } else {
        navigate('/get-quote');
      }
    } else {
      setZipError('Please enter a valid 5-digit ZIP code');
    }
  };

  return (
    <section className="hero-section">
      <h1>Only pay for what you need</h1>
      <p>You could save over $950 when you bundle home and auto insurance!</p>

      <div className="insurance-options">
        {['Auto', 'Home', 'Condo', 'Renters'].map((type) => (
          <button
            key={type}
            className={selectedInsurances.includes(type) ? 'selected' : ''}
            onClick={() => toggleInsuranceSelect(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <p className="see-all">See all our insurance products &gt;</p>

      <div className="zip-code-input">
        <input
          type="text"
          placeholder="ZIP Code"
          value={zipCode}
          onChange={handleZipCodeChange}
        />
        <button onClick={handleGetPrice}>Get my price</button>
      </div>
      {zipError && <p className="zip-error">{zipError}</p>}

      <div className="additional-coverage">
        <p>Other coverages you may like:</p>
        {['Life', 'Pet', 'Flood'].map((type) => (
          <button
            key={type}
            className={selectedInsurances.includes(type) ? 'selected' : ''}
            onClick={() => toggleInsuranceSelect(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
