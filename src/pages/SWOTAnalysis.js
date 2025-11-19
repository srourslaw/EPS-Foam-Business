import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, TrendingUp, AlertTriangle } from 'lucide-react';
import { swotAnalysis } from '../data/businessData';

const SWOTAnalysis = () => {
  const impactColors = {
    high: { bg: '#fee2e2', text: '#991b1b', border: '#fca5a5' },
    medium: { bg: '#fef3c7', text: '#92400e', border: '#fcd34d' },
    low: { bg: '#dbeafe', text: '#1e40af', border: '#93c5fd' }
  };

  const SWOTCard = ({ title, items, icon: Icon, gradient, iconColor }) => (
    <div
      className="card"
      style={{
        background: gradient,
        border: '2px solid rgba(0,0,0,0.1)',
        minHeight: '400px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon size={28} color={iconColor} />
        </div>
        <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
          {title}
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '8px',
              border: `2px solid ${impactColors[item.impact].border}`,
              transition: 'transform 0.2s',
              cursor: 'default'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', margin: 0, flex: 1 }}>
                {item.title}
              </h4>
              <span style={{
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: '700',
                textTransform: 'uppercase',
                background: impactColors[item.impact].bg,
                color: impactColors[item.impact].text,
                marginLeft: '12px'
              }}>
                {item.impact} impact
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>
            SWOT Analysis
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Comprehensive strategic analysis of internal capabilities and external factors
          </p>
        </div>

        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
            borderRadius: '12px',
            border: '2px solid #6ee7b7'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <CheckCircle size={24} color="#059669" />
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#065f46', margin: 0 }}>
                Strengths
              </h3>
            </div>
            <p style={{ fontSize: '32px', fontWeight: '800', color: '#047857', marginBottom: '4px' }}>
              {swotAnalysis.strengths.length}
            </p>
            <p style={{ fontSize: '13px', color: '#065f46', margin: 0 }}>
              {swotAnalysis.strengths.filter(s => s.impact === 'high').length} high-impact advantages
            </p>
          </div>

          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
            borderRadius: '12px',
            border: '2px solid #fca5a5'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <XCircle size={24} color="#dc2626" />
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#991b1b', margin: 0 }}>
                Weaknesses
              </h3>
            </div>
            <p style={{ fontSize: '32px', fontWeight: '800', color: '#b91c1c', marginBottom: '4px' }}>
              {swotAnalysis.weaknesses.length}
            </p>
            <p style={{ fontSize: '13px', color: '#991b1b', margin: 0 }}>
              {swotAnalysis.weaknesses.filter(w => w.impact === 'high').length} critical areas to address
            </p>
          </div>

          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            borderRadius: '12px',
            border: '2px solid #93c5fd'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <TrendingUp size={24} color="#2563eb" />
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e40af', margin: 0 }}>
                Opportunities
              </h3>
            </div>
            <p style={{ fontSize: '32px', fontWeight: '800', color: '#1d4ed8', marginBottom: '4px' }}>
              {swotAnalysis.opportunities.length}
            </p>
            <p style={{ fontSize: '13px', color: '#1e40af', margin: 0 }}>
              {swotAnalysis.opportunities.filter(o => o.impact === 'high').length} high-potential growth paths
            </p>
          </div>

          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            borderRadius: '12px',
            border: '2px solid #fbbf24'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <AlertTriangle size={24} color="#d97706" />
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#92400e', margin: 0 }}>
                Threats
              </h3>
            </div>
            <p style={{ fontSize: '32px', fontWeight: '800', color: '#b45309', marginBottom: '4px' }}>
              {swotAnalysis.threats.length}
            </p>
            <p style={{ fontSize: '13px', color: '#92400e', margin: 0 }}>
              {swotAnalysis.threats.filter(t => t.impact === 'high').length} major risks to monitor
            </p>
          </div>
        </div>

        {/* SWOT Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '24px' }}>
          <SWOTCard
            title="Strengths"
            items={swotAnalysis.strengths}
            icon={CheckCircle}
            gradient="linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)"
            iconColor="#059669"
          />

          <SWOTCard
            title="Weaknesses"
            items={swotAnalysis.weaknesses}
            icon={XCircle}
            gradient="linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)"
            iconColor="#dc2626"
          />

          <SWOTCard
            title="Opportunities"
            items={swotAnalysis.opportunities}
            icon={TrendingUp}
            gradient="linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)"
            iconColor="#2563eb"
          />

          <SWOTCard
            title="Threats"
            items={swotAnalysis.threats}
            icon={AlertTriangle}
            gradient="linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)"
            iconColor="#d97706"
          />
        </div>

        {/* Strategic Insights */}
        <div className="card" style={{ marginTop: '32px' }}>
          <div className="card-header">
            <h3 className="card-title">Strategic Positioning Analysis</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #86efac' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#15803d', marginBottom: '8px' }}>
                ✓ Leverage Strengths
              </h4>
              <p style={{ fontSize: '13px', color: '#166534', lineHeight: '1.5', margin: 0 }}>
                Strategic location + owned premises + service differentiation create sustainable competitive moat.
                No minimums and same-day delivery are uniquely enabled by Hurstville/Padstow position.
              </p>
            </div>

            <div style={{ padding: '16px', background: '#fef2f2', borderRadius: '8px', border: '1px solid #fca5a5' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#991b1b', marginBottom: '8px' }}>
                ⚠️ Address Weaknesses
              </h4>
              <p style={{ fontSize: '13px', color: '#7f1d1d', lineHeight: '1.5', margin: 0 }}>
                New entrant status and scale disadvantage require aggressive customer acquisition in first 6-9 months.
                Founder must commit 60-70 hrs/week initially. Capital intensity demands disciplined cash management.
              </p>
            </div>

            <div style={{ padding: '16px', background: '#eff6ff', borderRadius: '8px', border: '1px solid #93c5fd' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1e40af', marginBottom: '8px' }}>
                🎯 Pursue Opportunities
              </h4>
              <p style={{ fontSize: '13px', color: '#1e3a8a', lineHeight: '1.5', margin: 0 }}>
                Construction growth ($17.1B federal infrastructure) + underserved small builders + Brisbane 2032 spillover
                create 3-5 year tailwind. Sustainability differentiation through recycling appeals to eco-conscious customers.
              </p>
            </div>

            <div style={{ padding: '16px', background: '#fefce8', borderRadius: '8px', border: '1px solid #fde047' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#92400e', marginBottom: '8px' }}>
                🛡️ Mitigate Threats
              </h4>
              <p style={{ fontSize: '13px', color: '#78350f', lineHeight: '1.5', margin: 0 }}>
                Established competition and economic cyclicality require service excellence and customer retention focus.
                Diversify customer segments to reduce concentration risk. Monitor material costs and maintain flexible pricing.
              </p>
            </div>
          </div>
        </div>

        {/* SWOT Matrix Summary */}
        <div style={{ marginTop: '32px', padding: '24px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '16px', border: '2px solid #bfdbfe' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e40af', marginBottom: '16px' }}>
            📊 Overall Assessment
          </h3>
          <div style={{ fontSize: '15px', color: '#1e3a8a', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '12px' }}>
              <strong>Net Position:</strong> The business exhibits <span style={{ color: '#059669', fontWeight: '700' }}>strong fundamentals</span> with
              6 high-impact strengths and opportunities against 4 high-impact weaknesses and threats.
            </p>
            <p style={{ marginBottom: '12px' }}>
              <strong>Key Strategic Insight:</strong> Location advantages (owned premises, construction density, delivery speed) create a
              defensible position that larger competitors cannot easily replicate. The primary challenge is surviving the ramp-up
              period (18-24 months) without established brand or customer base.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Recommendation:</strong> Proceed with strategy focused on differentiated service (no minimums, speed, local) to
              niche segments (small builders, rush orders) while managing cash carefully through break-even period. Strengths
              and opportunities outweigh weaknesses and threats, provided execution discipline is maintained.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SWOTAnalysis;
