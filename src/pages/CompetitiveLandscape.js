import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Target, TrendingUp, Clock, DollarSign } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import { competitors, locationAdvantages } from '../data/businessData';

const CompetitiveLandscape = () => {
  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#94a3b8'];

  const marketShareData = competitors.map(comp => ({
    name: comp.name,
    value: comp.marketShare.midpoint,
    marketShare: comp.marketShare.midpoint,
    display: comp.marketShare.display
  }));

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>
            Competitive Landscape
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Major competitors, market positioning, and strategic differentiation opportunities
          </p>
        </div>

        {/* Key Competitive Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <MetricCard
            label="Market Concentration"
            value="66%"
            icon={Target}
            trend="neutral"
            subtitle="Top 4 players control market"
            color="blue"
          />
          <MetricCard
            label="Fragmented Remainder"
            value="34%"
            icon={TrendingUp}
            trend="up"
            subtitle="Regional players & opportunity"
            color="purple"
          />
          <MetricCard
            label="Avg Competitor Lead Time"
            value="5 days"
            icon={Clock}
            trend="neutral"
            subtitle="Our target: Same-day/24hr"
            color="orange"
          />
          <MetricCard
            label="Min Order Requirement"
            value="$250-500"
            icon={DollarSign}
            trend="neutral"
            subtitle="Our advantage: $0 minimum"
            color="green"
          />
        </div>

        {/* Market Share Chart and Competitor Table */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Market Share Distribution</h3>
              <p className="card-subtitle">Sydney EPS cutting market</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={marketShareData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {marketShareData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Competitor Lead Times</h3>
              <p className="card-subtitle">Speed advantage opportunity</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={competitors.filter(c => c.leadTimeDays !== null)}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" angle={-20} textAnchor="end" height={80} />
                <YAxis stroke="#64748b" label={{ value: 'Days', angle: -90, position: 'insideLeft' }} />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                  formatter={(value, name) => [
                    `${value} days`,
                    'Lead Time'
                  ]}
                />
                <Bar dataKey="leadTimeDays" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Lead Time (Days)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Competitor Comparison Table */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <div className="card-header">
            <h3 className="card-title">Detailed Competitor Analysis</h3>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--border-medium)' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: 'var(--text-primary)' }}>Competitor</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600', color: 'var(--text-primary)' }}>Market Share</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600', color: 'var(--text-primary)' }}>Min Order</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600', color: 'var(--text-primary)' }}>Lead Time</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: 'var(--text-primary)' }}>Strengths</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: 'var(--text-primary)' }}>Weaknesses</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((comp, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {comp.name}
                      <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: '400' }}>
                        {comp.coverage}
                      </div>
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center', fontWeight: '600', color: 'var(--primary-blue)' }}>
                      {comp.marketShare.display}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      {comp.minOrder ? `$${comp.minOrder}` : '—'}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      {comp.leadTime}
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {comp.strengths.map((s, i) => (
                          <span key={i} style={{
                            fontSize: '12px',
                            padding: '4px 8px',
                            background: '#dcfce7',
                            color: '#15803d',
                            borderRadius: '4px'
                          }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {comp.weaknesses.map((w, i) => (
                          <span key={i} style={{
                            fontSize: '12px',
                            padding: '4px 8px',
                            background: '#fee2e2',
                            color: '#991b1b',
                            borderRadius: '4px'
                          }}>
                            {w}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Our Competitive Advantages</h3>
            <p className="card-subtitle">Strategic positioning vs incumbents</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {locationAdvantages.map((adv, idx) => (
              <div key={idx} style={{
                padding: '20px',
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                borderRadius: '12px',
                border: '2px solid #bfdbfe'
              }}>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1e40af', marginBottom: '8px' }}>
                  {adv.factor}
                </h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 4px 0' }}>Us</p>
                    <p style={{ fontSize: '20px', fontWeight: '700', color: '#1e40af', margin: 0 }}>
                      {adv.hurstvillePadstow}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 4px 0' }}>
                      {adv.competitors ? 'Competitors' : adv.nswAverage ? 'NSW Avg' : 'Market'}
                    </p>
                    <p style={{ fontSize: '20px', fontWeight: '700', color: '#64748b', margin: 0 }}>
                      {adv.competitors || adv.nswAverage || adv.market}
                    </p>
                  </div>
                </div>
                <div style={{
                  padding: '8px 12px',
                  background: '#dcfce7',
                  borderRadius: '8px',
                  marginBottom: '8px'
                }}>
                  <p style={{ fontSize: '14px', fontWeight: '700', color: '#15803d', margin: 0 }}>
                    ✓ {adv.advantage}
                  </p>
                </div>
                <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CompetitiveLandscape;
