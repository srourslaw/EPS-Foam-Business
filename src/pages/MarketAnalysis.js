import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import MetricCard from '../components/MetricCard';
import { TrendingUp, Globe, MapPin, Building } from 'lucide-react';
import { marketSize } from '../data/businessData';

const MarketAnalysis = () => {
  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>
            Market Analysis
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            EPS foam market sizing, growth drivers, and demand segmentation
          </p>
        </div>

        {/* Market Size Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <MetricCard
            label="Global EPS Market 2024"
            value={marketSize.global.current.display}
            icon={Globe}
            trend="up"
            subtitle={`Growing to ${marketSize.global.projected.display} by 2030`}
            color="blue"
          />
          <MetricCard
            label="Sydney Market (Annual)"
            value={marketSize.sydney.annual.display}
            icon={MapPin}
            trend="up"
            subtitle={`Local 20km: ${marketSize.sydney.local20km.display}`}
            color="purple"
          />
          <MetricCard
            label="Market CAGR"
            value={marketSize.global.cagr.display}
            icon={TrendingUp}
            trend="up"
            subtitle="2024-2030 Projection"
            color="green"
          />
          <MetricCard
            label="Construction Share"
            value="45%"
            icon={Building}
            trend="neutral"
            subtitle="Largest segment by application"
            color="orange"
          />
        </div>

        {/* Market Segments */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Market Segmentation by Application</h3>
              <p className="card-subtitle">EPS foam demand breakdown</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={marketSize.segments}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {marketSize.segments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Market Growth Drivers</h3>
            </div>
            <div style={{ padding: '16px 0' }}>
              {[
                { title: 'Construction Boom', value: '+30.4%', desc: 'NSW building approvals YoY' },
                { title: 'Infrastructure Spend', value: '$17.1B', desc: 'Federal 2025-26 transport budget' },
                { title: 'E-commerce Growth', value: '7.58%', desc: 'Logistics CAGR to 2033' },
                { title: 'Energy Mandates', value: 'NCC 2025', desc: 'Enhanced insulation requirements' }
              ].map((driver, idx) => (
                <div key={idx} style={{
                  padding: '16px',
                  marginBottom: '12px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--primary-blue)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>
                      {driver.title}
                    </h4>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary-blue)' }}>
                      {driver.value}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>
                    {driver.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Strategic Market Insights</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', background: '#f0f9ff', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1e40af', marginBottom: '8px' }}>
                🎯 Target Market
              </h4>
              <p style={{ fontSize: '14px', color: '#1e3a8a', margin: 0 }}>
                20km radius from Hurstville/Padstow captures $16M annual market with 12,000-15,000 construction businesses
              </p>
            </div>
            <div style={{ padding: '16px', background: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#15803d', marginBottom: '8px' }}>
                📈 Growth Trajectory
              </h4>
              <p style={{ fontSize: '14px', color: '#14532d', margin: 0 }}>
                Construction segment growing at 5-8% CAGR, driven by housing shortage (need 240k units/yr, currently ~170k approved)
              </p>
            </div>
            <div style={{ padding: '16px', background: '#fef3c7', borderRadius: '12px', border: '1px solid #fde68a' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#92400e', marginBottom: '8px' }}>
                🌏 Regional Advantage
              </h4>
              <p style={{ fontSize: '14px', color: '#78350f', margin: 0 }}>
                Canterbury-Bankstown has 22.5% construction business density vs 17.1% NSW average (+31% higher concentration)
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MarketAnalysis;
