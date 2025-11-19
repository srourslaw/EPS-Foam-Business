import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import ExecutiveSummary from './pages/ExecutiveSummary';
import MarketAnalysis from './pages/MarketAnalysis';
import CompetitiveLandscape from './pages/CompetitiveLandscape';
import FinancialProjections from './pages/FinancialProjections';
import CustomerSegments from './pages/CustomerSegments';
import Pricing from './pages/Pricing';
import Equipment from './pages/Equipment';
import HiringRoadmap from './pages/HiringRoadmap';
import SWOTAnalysis from './pages/SWOTAnalysis';
import RiskAnalysis from './pages/RiskAnalysis';
import ActionPlan from './pages/ActionPlan';

// Protected Route Component
const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved authentication on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('epsUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('epsUser');
      }
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('epsUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('epsUser');
  };

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{ color: 'white', fontSize: '20px', fontWeight: '600' }}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}>
        {user && <Navigation user={user} onLogout={handleLogout} />}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="main-content"
        >
          <Routes>
            <Route path="/login" element={
              user ? <Navigate to="/executive-summary" replace /> : <Login onLogin={handleLogin} />
            } />

            <Route path="/" element={
              <ProtectedRoute isAuthenticated={!!user}>
                <Navigate to="/executive-summary" replace />
              </ProtectedRoute>
            } />

            <Route path="/executive-summary" element={
              <ProtectedRoute isAuthenticated={!!user}>
                <ExecutiveSummary />
              </ProtectedRoute>
            } />

            <Route path="/market-analysis" element={
              <ProtectedRoute isAuthenticated={!!user}>
                <MarketAnalysis />
              </ProtectedRoute>
            } />

            <Route path="/competitive-landscape" element={
              <ProtectedRoute isAuthenticated={!!user}>
                <CompetitiveLandscape />
              </ProtectedRoute>
            } />

            <Route path="/financial-projections" element={
              <ProtectedRoute isAuthenticated={!!user}>
                <FinancialProjections />
              </ProtectedRoute>
            } />

            <Route path="/customer-segments" element={
              <ProtectedRoute isAuthenticated={!!user}>
                <CustomerSegments />
              </ProtectedRoute>
            } />

            <Route path="/pricing" element={
              <ProtectedRoute isAuthenticated={!!user}>
                <Pricing />
              </ProtectedRoute>
            } />

            <Route path="/equipment" element={
              <ProtectedRoute isAuthenticated={!!user}>
                <Equipment />
              </ProtectedRoute>
            } />

            <Route path="/hiring-roadmap" element={
              <ProtectedRoute isAuthenticated={!!user}>
                <HiringRoadmap />
              </ProtectedRoute>
            } />

            <Route path="/swot-analysis" element={
              <ProtectedRoute isAuthenticated={!!user}>
                <SWOTAnalysis />
              </ProtectedRoute>
            } />

            <Route path="/risk-analysis" element={
              <ProtectedRoute isAuthenticated={!!user}>
                <RiskAnalysis />
              </ProtectedRoute>
            } />

            <Route path="/action-plan" element={
              <ProtectedRoute isAuthenticated={!!user}>
                <ActionPlan />
              </ProtectedRoute>
            } />
          </Routes>
        </motion.main>

        <style>{`
          /* Desktop layout - sidebar navigation */
          @media (min-width: 1024px) {
            .main-content {
              margin-left: 280px;
              padding: 40px;
              transition: margin-left 0.3s ease;
            }
          }

          /* Mobile layout - top bar navigation */
          @media (max-width: 1023px) {
            .main-content {
              margin-left: 0;
              padding: 100px 20px 40px 20px;
            }
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
