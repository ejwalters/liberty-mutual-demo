import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GetQuotePage from './components/GetQuotePage';
import InsuranceDetailsPage from './components/InsuranceDetailsPage';
import { AppProvider } from './context/AppContext';
import './App.css';

// analytics.js/ts
import { AnalyticsBrowser } from '@segment/analytics-next'
import { SignalsPlugin } from '@segment/analytics-signals'

let analytics;
async function setupAnalytics() {
  analytics = new AnalyticsBrowser();
  const signalsPlugin = new SignalsPlugin();
  analytics.register(signalsPlugin);
  
  await analytics.load({
    writeKey: 'srr5VjfaYsc1FBHSniRwCXY3lmguQe03'
  });
  
  analytics.page();

}

setupAnalytics();

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/get-quote" element={<GetQuotePage />} />
          <Route path="/insurance-details" element={<InsuranceDetailsPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
