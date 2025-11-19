import React from 'react';
import { motion } from 'framer-motion';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, BarChart, Bar, Legend } from 'recharts';
import { AlertTriangle, Shield, TrendingDown, Activity } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import { risks } from '../data/businessData';

const RiskAnalysis = () => {
  const highRisks = risks.filter(r => r.status === 'high');
  const mediumRisks = risks.filter(r => r.status === 'medium');
  const lowRisks = risks.filter(r => r.status === 'low');

  // Transform risks for scatter plot (likelihood vs impact)
  const impactMap = { 'Critical': 100, 'High': 75, 'Medium': 50, 'Low': 25 };
  const scatterData = risks.map(r => ({
    name: r.risk,
    likelihood: r.likelihood,
    impact: impactMap[r.impact],
    status: r.status,
    impactLabel: r.impact
  }));

  const statusColors = {
    high: '#ef4444',
    medium: '#f59e0b',
    low: '#10b981'
  };

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>
            Risk Analysis
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Comprehensive risk assessment with likelihood, impact, and mitigation strategies
          </p>
        </div>

        {/* Risk Summary Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <MetricCard
            label="High Priority Risks"
            value={highRisks.length}
            icon={AlertTriangle}
            trend="neutral"
            subtitle="Require immediate mitigation"
            color="red"
          />
          <MetricCard
            label="Medium Priority Risks"
            value={mediumRisks.length}
            icon={Activity}
            trend="neutral"
            subtitle="Monitor and manage"
            color="orange"
          />
          <MetricCard
            label="Low Priority Risks"
            value={lowRisks.length}
            icon={Shield}
            trend="neutral"
            subtitle="Watch list only"
            color="green"
          />
          <MetricCard
            label="Avg Likelihood"
            value={`${Math.round(risks.reduce((sum, r) => sum + r.likelihood, 0) / risks.length)}%`}
            icon={TrendingDown}
            trend="neutral"
            subtitle="Across all identified risks"
            color="purple"
          />
        </div>

        {/* Risk Matrix Visualization */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Risk Matrix: Likelihood vs Impact</h3>
              <p className="card-subtitle">Bubble size indicates priority level</p>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  type="number"
                  dataKey="likelihood"
                  name="Likelihood"
                  unit="%"
                  stroke="#64748b"
                  label={{ value: 'Likelihood (%)', position: 'insideBottom', offset: -10 }}
                />
                <YAxis
                  type="number"
                  dataKey="impact"
                  name="Impact"
                  stroke="#64748b"
                  label={{ value: 'Impact Severity', angle: -90, position: 'insideLeft' }}
                  ticks={[25, 50, 75, 100]}
                  tickFormatter={(value) => {
                    if (value === 100) return 'Critical';
                    if (value === 75) return 'High';
                    if (value === 50) return 'Medium';
                    return 'Low';
                  }}
                />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div style={{
                          background: 'white',
                          padding: '12px',
                          border: `2px solid ${statusColors[data.status]}`,
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}>
                          <p style={{ fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
                            {data.name}
                          </p>
                          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '0 0 4px 0' }}>
                            Likelihood: {data.likelihood}%
                          </p>
                          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>
                            Impact: {data.impactLabel}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Scatter data={scatterData}>
                  {scatterData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={statusColors[entry.status]} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Risk Likelihood Distribution</h3>
              <p className="card-subtitle">Probability of occurrence</p>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={risks}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="risk"
                  stroke="#64748b"
                  tick={{ fontSize: 11 }}
                  angle={-20}
                  textAnchor="end"
                  height={100}
                />
                <YAxis
                  stroke="#64748b"
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => [`${value}%`, 'Likelihood']}
                />
                <Bar dataKey="likelihood" radius={[8, 8, 0, 0]}>
                  {risks.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={statusColors[entry.status]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Risk Cards */}
        <div style={{ display: 'grid', gap: '16px' }}>
          {risks.map((risk, idx) => {
            const priorityConfig = {
              high: { bg: '#fee2e2', border: '#ef4444', text: '#991b1b' },
              medium: { bg: '#fef3c7', border: '#f59e0b', text: '#92400e' },
              low: { bg: '#dcfce7', border: '#10b981', text: '#065f46' }
            };
            const config = priorityConfig[risk.status];

            return (
              <div
                key={idx}
                className="card"
                style={{
                  background: `linear-gradient(135deg, ${config.bg} 0%, ${config.bg}dd 100%)`,
                  border: `2px solid ${config.border}`
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <h3 style={{ fontSize: '20px', fontWeight: '700', color: config.text, margin: 0, flex: 1 }}>
                        {risk.risk}
                      </h3>
                      <span style={{
                        padding: '6px 14px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        background: config.border,
                        color: 'white',
                        marginLeft: '16px'
                      }}>
                        {risk.status} Priority
                      </span>
                    </div>

                    <div style={{
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '8px',
                      marginBottom: '12px'
                    }}>
                      <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>
                        🛡️ Mitigation Strategy
                      </h4>
                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
                        {risk.mitigation}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div style={{
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '8px',
                      marginBottom: '12px'
                    }}>
                      <h5 style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-tertiary)', margin: '0 0 4px 0' }}>
                        Likelihood
                      </h5>
                      <p style={{ fontSize: '32px', fontWeight: '800', color: config.text, margin: 0 }}>
                        {risk.likelihood}%
                      </p>
                      <div style={{
                        width: '100%',
                        height: '8px',
                        background: '#e2e8f0',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        marginTop: '8px'
                      }}>
                        <div style={{
                          width: `${risk.likelihood}%`,
                          height: '100%',
                          background: config.border,
                          borderRadius: '4px'
                        }} />
                      </div>
                    </div>

                    <div style={{
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '8px'
                    }}>
                      <h5 style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-tertiary)', margin: '0 0 4px 0' }}>
                        Impact Severity
                      </h5>
                      <p style={{ fontSize: '28px', fontWeight: '800', color: config.text, margin: 0 }}>
                        {risk.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Risk Management Strategy */}
        <div className="card" style={{ marginTop: '24px' }}>
          <div className="card-header">
            <h3 className="card-title">Risk Management Framework</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', background: '#fef2f2', borderRadius: '8px', border: '1px solid #fca5a5' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#991b1b', marginBottom: '8px' }}>
                🔴 High Priority (Immediate Action)
              </h4>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#7f1d1d', lineHeight: '1.6' }}>
                <li>Weekly review and monitoring</li>
                <li>Active mitigation strategies deployed</li>
                <li>Contingency plans ready to activate</li>
                <li>Owner directly responsible for management</li>
              </ul>
            </div>

            <div style={{ padding: '16px', background: '#fefce8', borderRadius: '8px', border: '1px solid #fde047' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#92400e', marginBottom: '8px' }}>
                🟡 Medium Priority (Regular Monitoring)
              </h4>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#78350f', lineHeight: '1.6' }}>
                <li>Monthly formal review</li>
                <li>Preventive measures in place</li>
                <li>Early warning indicators tracked</li>
                <li>Escalation thresholds defined</li>
              </ul>
            </div>

            <div style={{ padding: '16px', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #86efac' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#15803d', marginBottom: '8px' }}>
                🟢 Low Priority (Watch List)
              </h4>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#166534', lineHeight: '1.6' }}>
                <li>Quarterly review during business planning</li>
                <li>Basic monitoring in place</li>
                <li>Re-assess if circumstances change</li>
                <li>Low resource allocation required</li>
              </ul>
            </div>

            <div style={{ padding: '16px', background: '#eff6ff', borderRadius: '8px', border: '1px solid #93c5fd' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1e40af', marginBottom: '8px' }}>
                📊 Overall Risk Approach
              </h4>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#1e3a8a', lineHeight: '1.6' }}>
                <li>Proactive identification and assessment</li>
                <li>Layered mitigation strategies</li>
                <li>Regular risk register updates</li>
                <li>Link risks to financial scenarios</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div style={{
          marginTop: '24px',
          padding: '20px',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          borderRadius: '12px',
          border: '2px solid #bfdbfe'
        }}>
          <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1e40af', marginBottom: '12px' }}>
            🎯 Key Risk Insights
          </h4>
          <div style={{ fontSize: '14px', color: '#1e3a8a', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '8px' }}>
              <strong>Primary Risk:</strong> Insufficient customer acquisition (40% likelihood, critical impact). Mitigation through pre-launch pipeline,
              aggressive discounts, and founder-led sales essential to business viability.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Overall Risk Profile:</strong> Manageable with disciplined execution. All high-priority risks have clear mitigation strategies.
              Success depends on proactive risk management, not risk avoidance. Monthly risk reviews recommended for first 18 months.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RiskAnalysis;
