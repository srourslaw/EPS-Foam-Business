import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Zap, CheckCircle, XCircle, AlertCircle, DollarSign } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import { equipmentOptions } from '../data/businessData';

const Equipment = () => {
  const recommended = equipmentOptions.find(e => e.recommended);

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>
            Equipment Analysis
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            CNC foam cutting equipment comparison and investment recommendations
          </p>
        </div>

        {/* Equipment Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <MetricCard
            label="Recommended Investment"
            value={`$${recommended.cost}k`}
            icon={DollarSign}
            trend="neutral"
            subtitle="Wintech mid-range system"
            color="blue"
          />
          <MetricCard
            label="Precision Rating"
            value={recommended.precision}
            icon={Zap}
            trend="up"
            subtitle="Best-in-class accuracy"
            color="green"
          />
          <MetricCard
            label="Production Capacity"
            value={`${recommended.capacity} sheets/day`}
            icon={CheckCircle}
            trend="up"
            subtitle="Year 3 target utilization"
            color="purple"
          />
          <MetricCard
            label="Equipment Lifespan"
            value="10-15 yrs"
            icon={AlertCircle}
            trend="neutral"
            subtitle="With proper maintenance"
            color="orange"
          />
        </div>

        {/* Equipment Comparison Chart */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Cost vs Capacity Analysis</h3>
              <p className="card-subtitle">Investment comparison</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={equipmentOptions}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="tier" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="cost" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Cost ($k)" />
                <Bar dataKey="capacity" fill="#10b981" radius={[8, 8, 0, 0]} name="Capacity (sheets/day)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Recommended: Wintech Mid-Range</h3>
              <p className="card-subtitle">Optimal balance for startup</p>
            </div>
            <div style={{ padding: '16px 0' }}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Initial Cost</span>
                  <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-blue)' }}>
                    ${recommended.cost}k
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Daily Capacity</span>
                  <span style={{ fontSize: '20px', fontWeight: '700', color: '#10b981' }}>
                    {recommended.capacity} sheets
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Precision</span>
                  <span style={{ fontSize: '20px', fontWeight: '700', color: '#8b5cf6' }}>
                    {recommended.precision}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Support Quality</span>
                  <span style={{ fontSize: '20px', fontWeight: '700', color: '#f59e0b' }}>
                    {recommended.support}
                  </span>
                </div>
              </div>

              <div style={{
                padding: '16px',
                background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                borderRadius: '12px',
                border: '2px solid #6ee7b7'
              }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#065f46', marginBottom: '8px' }}>
                  ✓ Why Recommended
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#065f46', fontSize: '13px' }}>
                  <li>Australian-made with local support</li>
                  <li>Proven reliability in market</li>
                  <li>Scalable (upgrade to 40-wire capacity)</li>
                  <li>12-month warranty included</li>
                  <li>Operator training provided</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Equipment Comparison */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <div className="card-header">
            <h3 className="card-title">Equipment Tier Comparison</h3>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--border-medium)' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: 'var(--text-primary)' }}>Tier</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--text-primary)' }}>Cost</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--text-primary)' }}>Capacity</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600', color: 'var(--text-primary)' }}>Precision</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600', color: 'var(--text-primary)' }}>Support</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: 'var(--text-primary)' }}>Pros</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: 'var(--text-primary)' }}>Cons</th>
                </tr>
              </thead>
              <tbody>
                {equipmentOptions.map((equip, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--border-light)',
                      background: equip.recommended ? '#f0fdf4' : 'transparent'
                    }}
                  >
                    <td style={{ padding: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {equip.tier}
                      {equip.recommended && (
                        <div style={{
                          display: 'inline-block',
                          marginLeft: '8px',
                          padding: '2px 8px',
                          background: '#10b981',
                          color: 'white',
                          fontSize: '11px',
                          fontWeight: '700',
                          borderRadius: '8px'
                        }}>
                          RECOMMENDED
                        </div>
                      )}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--primary-blue)' }}>
                      ${equip.cost}k
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      {equip.capacity} sheets/day
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center', fontWeight: '600', color: '#8b5cf6' }}>
                      {equip.precision}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      {equip.support}
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {equip.pros.map((pro, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                            <CheckCircle size={14} color="#10b981" />
                            <span style={{ color: '#15803d' }}>{pro}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {equip.cons.map((con, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                            <XCircle size={14} color="#ef4444" />
                            <span style={{ color: '#991b1b' }}>{con}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Supporting Equipment & Total Investment */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Total Equipment Investment</h3>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                { item: 'CNC Foam Cutter (Wintech)', cost: '140-160k' },
                { item: 'Forklift (used)', cost: '15-25k' },
                { item: 'Work Tables & Fixtures', cost: '2-4k' },
                { item: 'Hand Tools & Safety', cost: '1.5-2.5k' },
                { item: 'Computer & Software', cost: '2-3k' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '12px 0',
                    borderBottom: idx < 4 ? '1px solid var(--border-light)' : 'none'
                  }}
                >
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{item.item}</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                    ${item.cost}
                  </span>
                </div>
              ))}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '16px 0',
                  marginTop: '12px',
                  borderTop: '2px solid var(--primary-blue)'
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Total Equipment
                </span>
                <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary-blue)' }}>
                  $160-195k
                </span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Ongoing Equipment Costs</h3>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                { item: 'Wire Replacement', cost: '1.2-2.4k/yr', frequency: 'Quarterly' },
                { item: 'Spare Parts', cost: '1-2k/yr', frequency: 'As needed' },
                { item: 'Professional Service', cost: '1.5-3k/yr', frequency: 'Quarterly' },
                { item: 'Electricity (3KW)', cost: '400-700/mo', frequency: 'Monthly' },
                { item: 'Software/Licenses', cost: '150-300/mo', frequency: 'Monthly' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px 0',
                    borderBottom: idx < 4 ? '1px solid var(--border-light)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {item.item}
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--primary-blue)' }}>
                      ${item.cost}
                    </span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                    {item.frequency}
                  </span>
                </div>
              ))}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '16px 0',
                  marginTop: '12px',
                  borderTop: '2px solid var(--primary-blue)'
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Annual Operating Cost
                </span>
                <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-blue)' }}>
                  $10-15k
                </span>
              </div>
            </div>
          </div>

          <div className="card" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', border: '2px solid #fbbf24' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>
              ⚙️ Equipment Strategy
            </h4>
            <div style={{ fontSize: '14px', color: '#78350f', lineHeight: '1.6' }}>
              <p style={{ marginBottom: '12px' }}>
                <strong>Phase 1 (Year 1-2):</strong> Wintech 20-wire system, maximize utilization to 60-80%
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>Phase 2 (Year 3):</strong> Evaluate upgrade to 40-wire capacity or 2nd machine based on demand
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Maintenance:</strong> Preventive schedule critical - weekly inspections, quarterly professional service
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Equipment;
