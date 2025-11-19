import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { DollarSign, Percent, TrendingUp, Package } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import { pricingTiers } from '../data/businessData';

const Pricing = () => {
  const avgMargin = Math.round(pricingTiers.reduce((sum, tier) => sum + tier.margin, 0) / pricingTiers.length);
  const totalProducts = pricingTiers.length;

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>
            Pricing Strategy
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Product pricing tiers, margin analysis, and competitive positioning
          </p>
        </div>

        {/* Pricing Overview Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <MetricCard
            label="Target Gross Margin"
            value={`${avgMargin}%`}
            icon={Percent}
            trend="up"
            subtitle="Average across all tiers"
            color="green"
          />
          <MetricCard
            label="Product SKUs"
            value={totalProducts}
            icon={Package}
            trend="neutral"
            subtitle="Core product offerings"
            color="blue"
          />
          <MetricCard
            label="Premium Pricing"
            value="+30-50%"
            icon={TrendingUp}
            trend="up"
            subtitle="Rush/same-day orders"
            color="orange"
          />
          <MetricCard
            label="Minimum Order"
            value="$0"
            icon={DollarSign}
            trend="neutral"
            subtitle="vs $250-500 competitors"
            color="purple"
          />
        </div>

        {/* Pricing Comparison Chart */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Wholesale vs Retail Pricing</h3>
              <p className="card-subtitle">Price positioning by product tier</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={pricingTiers}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="density"
                  stroke="#64748b"
                  angle={-20}
                  textAnchor="end"
                  height={80}
                  tick={{ fontSize: 12 }}
                />
                <YAxis stroke="#64748b" tickFormatter={(value) => `$${value}`} />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => `$${value}`}
                />
                <Legend />
                <Bar dataKey="wholesale" fill="#8b5cf6" radius={[8, 8, 0, 0]} name="Wholesale Price" />
                <Bar dataKey="retail" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Retail Price" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Gross Margin by Product</h3>
              <p className="card-subtitle">Profitability analysis</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={pricingTiers}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="density"
                  stroke="#64748b"
                  angle={-20}
                  textAnchor="end"
                  height={80}
                  tick={{ fontSize: 12 }}
                />
                <YAxis stroke="#64748b" tickFormatter={(value) => `${value}%`} domain={[30, 42]} />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => `${value}%`}
                />
                <Line
                  type="monotone"
                  dataKey="margin"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 6 }}
                  name="Gross Margin %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Pricing Table */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <div className="card-header">
            <h3 className="card-title">Product Pricing Matrix</h3>
            <p className="card-subtitle">Complete pricing schedule for standard EPS sheets (1200x2400mm)</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--border-medium)' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: 'var(--text-primary)' }}>Density</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: 'var(--text-primary)' }}>Thickness</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--text-primary)' }}>Wholesale</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--text-primary)' }}>Retail</th>
                  <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: 'var(--text-primary)' }}>Margin %</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: 'var(--text-primary)' }}>Primary Application</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {tier.density}
                    </td>
                    <td style={{ padding: '16px' }}>
                      {tier.thickness}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#8b5cf6' }}>
                      ${tier.wholesale}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#3b82f6' }}>
                      ${tier.retail}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#10b981' }}>
                      {tier.margin}%
                    </td>
                    <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                      {tier.application}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Strategy Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <div className="card" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', border: '2px solid #bfdbfe' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1e40af', marginBottom: '12px' }}>
              💰 Standard Pricing
            </h4>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#1e3a8a' }}>Small Orders (&lt;$500)</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#1e40af' }}>Premium +15-25%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#1e3a8a' }}>Standard ($500-$2k)</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#1e40af' }}>Competitive</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#1e3a8a' }}>Large Orders (&gt;$2k)</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#1e40af' }}>Volume Discount</span>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: '#1e3a8a', margin: 0 }}>
              Tiered pricing balances accessibility for small customers with competitiveness for large orders.
            </p>
          </div>

          <div className="card" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', border: '2px solid #fbbf24' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>
              ⚡ Rush Service Pricing
            </h4>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#78350f' }}>Same-Day Delivery</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#92400e' }}>+30-50%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#78350f' }}>Rush Cutting</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#92400e' }}>+20-35%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#78350f' }}>After-Hours</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#92400e' }}>+40%</span>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: '#78350f', margin: 0 }}>
              Premium pricing for urgency reflects value delivered. Target 15-20% of orders at premium rates.
            </p>
          </div>

          <div className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', border: '2px solid #86efac' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#15803d', marginBottom: '12px' }}>
              🎯 Custom Cutting Rates
            </h4>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#166534' }}>Simple 2D Cuts</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#15803d' }}>$80/hour</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#166534' }}>Complex 3D Shapes</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#15803d' }}>$120/hour</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#166534' }}>Setup Fee</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#15803d' }}>$30-75</span>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: '#166534', margin: 0 }}>
              Project-based pricing for custom work. Design consultation ($90/hr) credited toward orders &gt;$500.
            </p>
          </div>
        </div>

        {/* Competitive Pricing Insights */}
        <div className="card" style={{ marginTop: '24px' }}>
          <div className="card-header">
            <h3 className="card-title">Pricing Strategy Insights</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '8px' }}>
              <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                Volume Discount Structure
              </h5>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                5% discount at $25k annual spend, 10% at $50k. Incentivizes repeat business and larger commitments.
              </p>
            </div>
            <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '8px' }}>
              <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                Delivery Pricing
              </h5>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                Standard delivery $70 (20km), same-day $120-150. Free delivery threshold at $1,500 order value.
              </p>
            </div>
            <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '8px' }}>
              <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                Payment Terms
              </h5>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                Net 30 for approved accounts, COD/credit card for new customers. 2% early payment discount (10 days).
              </p>
            </div>
            <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '8px' }}>
              <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                Price Adjustments
              </h5>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                Quarterly reviews linked to supplier costs. Price protection clauses in large contracts (6-12 months).
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
