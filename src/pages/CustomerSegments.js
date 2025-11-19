import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Users, DollarSign, Target, TrendingUp } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import { customerSegments } from '../data/businessData';

const CustomerSegments = () => {
  const primarySegments = customerSegments.filter(s => s.priority === "PRIMARY");
  const totalRevenue = customerSegments.reduce((sum, s) => sum + s.revenueShare, 0);

  const radarData = customerSegments.map(seg => ({
    segment: seg.segment,
    LTV: seg.ltv / 1000, // Scale down for visualization
    Retention: seg.retention,
    'Avg Order': seg.avgOrder / 100, // Scale down
    'Orders/Mo': seg.ordersPerMonth
  }));

  const priorityColors = {
    'PRIMARY': '#10b981',
    'SECONDARY': '#f59e0b',
    'OPPORTUNISTIC': '#8b5cf6'
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
            Customer Segments
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Target market segmentation, LTV/CAC analysis, and customer economics
          </p>
        </div>

        {/* Segment Overview Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <MetricCard
            label="Primary Target Segments"
            value="3"
            icon={Target}
            trend="neutral"
            subtitle="81% of projected revenue"
            color="blue"
          />
          <MetricCard
            label="Avg LTV/CAC Ratio"
            value="27:1"
            icon={TrendingUp}
            trend="up"
            subtitle="Excellent unit economics"
            color="green"
          />
          <MetricCard
            label="Target Customer Base"
            value="150-200"
            icon={Users}
            trend="up"
            subtitle="Active accounts by Year 3"
            color="purple"
          />
          <MetricCard
            label="Blended Avg Order"
            value="$650"
            icon={DollarSign}
            trend="neutral"
            subtitle="Weighted by segment mix"
            color="orange"
          />
        </div>

        {/* Revenue Share by Segment */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Revenue Share by Segment</h3>
              <p className="card-subtitle">Projected Year 3 revenue mix</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={customerSegments} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" stroke="#64748b" />
                <YAxis dataKey="segment" type="category" stroke="#64748b" width={140} />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => `${value}%`}
                />
                <Bar dataKey="revenueShare" fill="#3b82f6" radius={[0, 8, 8, 0]} name="Revenue Share %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">LTV/CAC Ratio Comparison</h3>
              <p className="card-subtitle">Customer acquisition efficiency</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={customerSegments}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="segment" stroke="#64748b" angle={-20} textAnchor="end" height={100} />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => `${value}:1`}
                />
                <Bar dataKey="ltvCacRatio" fill="#10b981" radius={[8, 8, 0, 0]} name="LTV/CAC Ratio" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Segment Characteristics Radar */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <div className="card-header">
            <h3 className="card-title">Segment Characteristics Overview</h3>
            <p className="card-subtitle">Multi-dimensional comparison (scaled)</p>
          </div>
          <ResponsiveContainer width="100%" height={450}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="segment" stroke="#64748b" />
              <PolarRadiusAxis stroke="#64748b" />
              <Radar name="LTV ($k)" dataKey="LTV" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Radar name="Retention %" dataKey="Retention" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              <Tooltip />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Detailed Segment Analysis */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Segment Economics Details</h3>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--border-medium)' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: 'var(--text-primary)' }}>Segment</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--text-primary)' }}>Revenue %</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--text-primary)' }}>Avg Order</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--text-primary)' }}>Orders/Mo</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--text-primary)' }}>CAC</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--text-primary)' }}>LTV</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--text-primary)' }}>LTV/CAC</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--text-primary)' }}>Retention</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600', color: 'var(--text-primary)' }}>Priority</th>
                </tr>
              </thead>
              <tbody>
                {customerSegments.map((seg, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {seg.segment}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--primary-blue)' }}>
                      {seg.revenueShare}%
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      ${seg.avgOrder.toLocaleString()}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      {seg.ordersPerMonth}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      ${seg.cac.toLocaleString()}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      ${seg.ltv.toLocaleString()}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#10b981' }}>
                      {seg.ltvCacRatio}:1
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      {seg.retention}%
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: `${priorityColors[seg.priority]}20`,
                        color: priorityColors[seg.priority]
                      }}>
                        {seg.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategic Insights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginTop: '24px' }}>
          <div className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', border: '2px solid #86efac' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#15803d', marginBottom: '8px' }}>
              🎯 Primary Target: Small Builders
            </h4>
            <p style={{ fontSize: '14px', color: '#166534', marginBottom: '8px' }}>
              37% of revenue, excellent 41:1 LTV/CAC ratio
            </p>
            <p style={{ fontSize: '13px', color: '#166534', margin: 0 }}>
              Strategy: No minimums, fast delivery, competitive pricing. Lowest CAC ($115) with strong retention (65%).
            </p>
          </div>

          <div className="card" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', border: '2px solid #93c5fd' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1e40af', marginBottom: '8px' }}>
              📦 High-Value: Packaging
            </h4>
            <p style={{ fontSize: '14px', color: '#1e3a8a', marginBottom: '8px' }}>
              22% of revenue, best retention at 88%
            </p>
            <p style={{ fontSize: '13px', color: '#1e3a8a', margin: 0 }}>
              Strategy: Consistent quality, reliable delivery, volume discounts. Highest LTV/CAC ratio (43:1) indicates strong unit economics.
            </p>
          </div>

          <div className="card" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', border: '2px solid #fbbf24' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#92400e', marginBottom: '8px' }}>
              ⚠️ Watch: Large Construction
            </h4>
            <p style={{ fontSize: '14px', color: '#78350f', marginBottom: '8px' }}>
              22% revenue but $1,000 CAC and lowest LTV/CAC (26:1)
            </p>
            <p style={{ fontSize: '13px', color: '#78350f', margin: 0 }}>
              Strategy: Selective targeting, focus on mid-tier builders. High acquisition cost requires strong retention and margin discipline.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomerSegments;
