import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import './InsuranceDetailsPage.css';

function InsuranceDetailsPage() {
  const { selectedInsurances, userInfo } = useAppContext();
  const [successMessage, setSuccessMessage] = useState(false);

  console.log("User Info:", userInfo);
  console.log("Selected Insurances:", selectedInsurances); // Check if this has values

  const renderFieldsForInsurance = (type) => {
    console.log("Rendering fields for:", type); // Debug log

    switch (type) {
      case 'Auto':
        return (
          <div key="auto">
            <h3>Auto Insurance Details</h3>
            <label>
              Vehicle Make:
              <input type="text" />
            </label>
            <label>
              Vehicle Model:
              <input type="text" />
            </label>
          </div>
        );
      case 'Home':
        return (
          <div key="home">
            <h3>Home Insurance Details</h3>
            <label>
              Home Value:
              <input type="number" />
            </label>
            <label>
              Year Built:
              <input type="number" />
            </label>
          </div>
        );
      case 'Condo':
        return (
          <div key="condo">
            <h3>Condo Insurance Details</h3>
            <label>
              Condo Value:
              <input type="number" />
            </label>
            <label>
              Floor Level:
              <input type="number" />
            </label>
          </div>
        );
      case 'Renters':
        return (
          <div key="renters">
            <h3>Renters Insurance Details</h3>
            <label>
              Monthly Rent:
              <input type="number" />
            </label>
            <label>
              Number of Bedrooms:
              <input type="number" />
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
  };

  return (
    <section className="insurance-details-page">
      <h2>Provide More Details</h2>
      <p>
        Thank you, {userInfo.firstName} {userInfo.lastName}! Your information has been submitted successfully.
      </p>

      {successMessage ? (
        <p className="success-message"></p>
      ) : (
        <form onSubmit={handleSubmit}>
          {selectedInsurances.map((type) => renderFieldsForInsurance(type))}
          <button type="submit">Complete</button>
        </form>
      )}
    </section>
  );
}

export default InsuranceDetailsPage;
