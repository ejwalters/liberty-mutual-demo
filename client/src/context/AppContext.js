import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedInsurances, setSelectedInsurances] = useState([]);
  const [userInfo, setUserInfo] = useState({ firstName: '', lastName: '', email: '' });

  return (
    <AppContext.Provider value={{ selectedInsurances, setSelectedInsurances, userInfo, setUserInfo }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
