import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const MetricCard = ({ label, value, icon: Icon, trend, subtitle, color = 'blue' }) => {
  const colorMap = {
    blue: { bg: '#eff6ff', text: '#1e40af', border: '#bfdbfe' },
    green: { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0' },
    purple: { bg: '#faf5ff', text: '#7e22ce', border: '#e9d5ff' },
    orange: { bg: '#fff7ed', text: '#c2410c', border: '#fed7aa' },
    red: { bg: '#fef2f2', text: '#b91c1c', border: '#fecaca' }
  };

  const colors = colorMap[color];

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      border: `1px solid ${colors.border}`,
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    className="metric-card"
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div style={{
          width: '48px',
          height: '48px',
          background: colors.bg,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: colors.text
        }}>
          {Icon && <Icon size={24} />}
        </div>
        {trend && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: '600',
            background: trend === 'up' ? '#dcfce7' : trend === 'down' ? '#fee2e2' : '#f1f5f9',
            color: trend === 'up' ? '#15803d' : trend === 'down' ? '#b91c1c' : '#64748b'
          }}>
            {trend === 'up' ? <TrendingUp size={14} /> : trend === 'down' ? <TrendingDown size={14} /> : <Minus size={14} />}
            {trend === 'up' ? 'Up' : trend === 'down' ? 'Down' : 'Neutral'}
          </div>
        )}
      </div>

      <div>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: '500' }}>
          {label}
        </p>
        <h3 style={{ fontSize: '32px', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
          {value}
        </h3>
        {subtitle && (
          <p style={{ fontSize: '13px', color: 'var(--text-tertiary)', margin: 0 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
