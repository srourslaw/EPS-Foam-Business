import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
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

function App() {
  return (
    <Router>
      <div className="app" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}>
        <Navigation />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="main-content"
        >
          <Routes>
            <Route path="/" element={<Navigate to="/executive-summary" replace />} />
            <Route path="/executive-summary" element={<ExecutiveSummary />} />
            <Route path="/market-analysis" element={<MarketAnalysis />} />
            <Route path="/competitive-landscape" element={<CompetitiveLandscape />} />
            <Route path="/financial-projections" element={<FinancialProjections />} />
            <Route path="/customer-segments" element={<CustomerSegments />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/hiring-roadmap" element={<HiringRoadmap />} />
            <Route path="/swot-analysis" element={<SWOTAnalysis />} />
            <Route path="/risk-analysis" element={<RiskAnalysis />} />
            <Route path="/action-plan" element={<ActionPlan />} />
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
