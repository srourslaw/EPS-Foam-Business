import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, TrendingUp, Briefcase } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import { hiringRoadmap } from '../data/businessData';

const HiringRoadmap = () => {
  const phase3 = hiringRoadmap.find(p => p.phase === "Phase 3");

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>
            Hiring Roadmap
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Revenue-triggered staffing strategy with ROI analysis
          </p>
        </div>

        {/* Hiring Overview Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <MetricCard
            label="Year 1 Strategy"
            value="Owner Solo"
            icon={Users}
            trend="neutral"
            subtitle="Months 1-9, learning phase"
            color="blue"
          />
          <MetricCard
            label="First Hire Timing"
            value="Month 10-15"
            icon={Briefcase}
            trend="up"
            subtitle="At $40k monthly revenue"
            color="purple"
          />
          <MetricCard
            label="Year 3 Team Size"
            value={`${phase3.teamSize} FTE`}
            icon={TrendingUp}
            trend="up"
            subtitle="Including owner"
            color="green"
          />
          <MetricCard
            label="Avg Hire ROI"
            value="5.1:1"
            icon={DollarSign}
            trend="up"
            subtitle="Revenue per dollar of labor cost"
            color="orange"
          />
        </div>

        {/* Team Growth Timeline */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Team Size Growth</h3>
              <p className="card-subtitle">Headcount progression by phase</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={hiringRoadmap}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="phase" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="teamSize"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 6 }}
                  name="Team Size"
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: '#10b981', r: 5 }}
                  name="Monthly Revenue ($k)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Revenue Capacity Expansion</h3>
              <p className="card-subtitle">How team growth unlocks revenue potential</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={hiringRoadmap}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="phase" stroke="#64748b" />
                <YAxis stroke="#64748b" tickFormatter={(value) => `$${value}k`} />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => `$${value}k`}
                />
                <Legend />
                <Bar dataKey="revenue" fill="#8b5cf6" radius={[8, 8, 0, 0]} name="Current Revenue ($k/mo)" />
                <Bar dataKey="revenueCapacity" fill="#10b981" radius={[8, 8, 0, 0]} name="Revenue Capacity ($k/mo)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hiring Timeline Cards */}
        <div style={{ display: 'grid', gap: '24px', marginBottom: '24px' }}>
          {hiringRoadmap.map((phase, idx) => {
            const phaseColors = ['#dbeafe', '#c7d2fe', '#fae8ff', '#fef3c7'];
            const phaseBorders = ['#60a5fa', '#818cf8', '#c084fc', '#fbbf24'];
            const phaseTextColors = ['#1e40af', '#4338ca', '#7e22ce', '#92400e'];

            return (
              <div
                key={idx}
                className="card"
                style={{
                  background: `linear-gradient(135deg, ${phaseColors[idx]} 0%, ${phaseColors[idx]}dd 100%)`,
                  border: `2px solid ${phaseBorders[idx]}`
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
                  <div>
                    <h3 style={{ fontSize: '24px', fontWeight: '800', color: phaseTextColors[idx], marginBottom: '8px' }}>
                      {phase.phase}
                    </h3>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: phaseTextColors[idx], marginBottom: '16px' }}>
                      {phase.timing}
                    </p>

                    <div style={{ marginBottom: '12px' }}>
                      <p style={{ fontSize: '12px', color: phaseTextColors[idx], margin: '0 0 4px 0' }}>
                        Monthly Revenue
                      </p>
                      <p style={{ fontSize: '28px', fontWeight: '800', color: phaseTextColors[idx], margin: 0 }}>
                        ${phase.revenue}k
                      </p>
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                      <p style={{ fontSize: '12px', color: phaseTextColors[idx], margin: '0 0 4px 0' }}>
                        Team Size
                      </p>
                      <p style={{ fontSize: '28px', fontWeight: '800', color: phaseTextColors[idx], margin: 0 }}>
                        {phase.teamSize} {phase.teamSize === 1 ? 'person' : 'people'}
                      </p>
                    </div>

                    {phase.roi && (
                      <div>
                        <p style={{ fontSize: '12px', color: phaseTextColors[idx], margin: '0 0 4px 0' }}>
                          Hire ROI
                        </p>
                        <p style={{ fontSize: '28px', fontWeight: '800', color: phaseTextColors[idx], margin: 0 }}>
                          {phase.roi}:1
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <div style={{
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '8px',
                      marginBottom: '16px'
                    }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', color: phaseTextColors[idx], marginBottom: '8px' }}>
                        📋 Position: {phase.hire}
                      </h4>
                      {phase.cost > 0 && (
                        <p style={{ fontSize: '14px', color: phaseTextColors[idx], marginBottom: '12px' }}>
                          <strong>Annual Cost:</strong> ${phase.cost}k (salary + super + payroll tax)
                        </p>
                      )}
                    </div>

                    <div style={{
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '8px'
                    }}>
                      <h5 style={{ fontSize: '14px', fontWeight: '700', color: phaseTextColors[idx], marginBottom: '8px' }}>
                        Key Responsibilities
                      </h5>
                      {phase.phase === "Phase 0" && (
                        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: phaseTextColors[idx] }}>
                          <li>All sales, operations, delivery</li>
                          <li>Customer service and quoting</li>
                          <li>CNC operation and cutting</li>
                          <li>Supplier and customer relationships</li>
                        </ul>
                      )}
                      {phase.phase === "Phase 1" && (
                        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: phaseTextColors[idx] }}>
                          <li>Material handling, loading/unloading</li>
                          <li>CNC machine operation (basic cuts)</li>
                          <li>Deliveries within 20km radius</li>
                          <li>Warehouse organization, inventory</li>
                        </ul>
                      )}
                      {phase.phase === "Phase 2" && (
                        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: phaseTextColors[idx] }}>
                          <li>Full-time CNC operation</li>
                          <li>Complex cutting, pattern optimization</li>
                          <li>Quality control, waste minimization</li>
                          <li>Equipment maintenance coordination</li>
                        </ul>
                      )}
                      {phase.phase === "Phase 3" && (
                        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: phaseTextColors[idx] }}>
                          <li>Outbound sales, lead generation</li>
                          <li>Customer relationship management</li>
                          <li>Quote preparation, pricing</li>
                          <li>Market expansion, new segments</li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <div style={{
                  marginTop: '16px',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: phaseTextColors[idx] }}>
                      Revenue Capacity:
                    </span>
                    <span style={{ fontSize: '18px', fontWeight: '800', color: phaseTextColors[idx], marginLeft: '8px' }}>
                      ${phase.revenueCapacity}k/month
                    </span>
                  </div>
                  {phase.roi && (
                    <div style={{
                      padding: '8px 16px',
                      background: '#dcfce7',
                      borderRadius: '8px'
                    }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#15803d' }}>
                        ROI: ${phase.roi} revenue per $1 labor cost
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Hiring Strategy Insights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <div className="card" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', border: '2px solid #bfdbfe' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1e40af', marginBottom: '12px' }}>
              🎯 Revenue Triggers
            </h4>
            <p style={{ fontSize: '14px', color: '#1e3a8a', lineHeight: '1.6' }}>
              Each hire is triggered by sustained revenue levels, not arbitrary timelines. Only hire when revenue consistently
              exceeds 80% of capacity for 2-3 months, ensuring sustainable payroll.
            </p>
          </div>

          <div className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', border: '2px solid #86efac' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#15803d', marginBottom: '12px' }}>
              💰 ROI Focus
            </h4>
            <p style={{ fontSize: '14px', color: '#166534', lineHeight: '1.6' }}>
              All hires show strong ROI (4.4-6.6:1). Each additional team member unlocks $35-60k incremental monthly revenue
              capacity while costing $5-8k/month fully loaded.
            </p>
          </div>

          <div className="card" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', border: '2px solid #fbbf24' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>
              ⚠️ Hiring Risks
            </h4>
            <p style={{ fontSize: '14px', color: '#78350f', lineHeight: '1.6' }}>
              Premature hiring burns cash. Hiring too late limits growth. Monitor weekly: revenue/capacity ratio, customer
              backlog, owner hours/week. Hire when stretched beyond sustainable levels.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HiringRoadmap;
