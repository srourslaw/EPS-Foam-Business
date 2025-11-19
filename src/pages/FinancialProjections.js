import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ComposedChart } from 'recharts';
import { TrendingUp, DollarSign, Percent, Calendar, PiggyBank, AlertCircle, TrendingDown, CheckCircle } from 'lucide-react';
import MetricCard from '../components/MetricCard';

const FinancialProjections = () => {
  const [viewMode, setViewMode] = useState('overview'); // 'overview', 'cashflow', 'breakeven', 'investment'

  // Initial Investment Breakdown
  const initialInvestment = [
    { category: 'CNC Equipment & Installation', amount: 160000, color: '#3b82f6' },
    { category: 'Facility Improvements', amount: 20000, color: '#8b5cf6' },
    { category: 'Supporting Equipment (Forklift, Tools)', amount: 22000, color: '#ec4899' },
    { category: 'Initial Inventory', amount: 12000, color: '#f59e0b' },
    { category: 'Working Capital Buffer', amount: 20000, color: '#10b981' },
    { category: 'Technology & Software', amount: 3000, color: '#06b6d4' },
    { category: 'Marketing Launch', amount: 4000, color: '#8b5cf6' },
    { category: 'Legal & Professional', amount: 2500, color: '#f59e0b' },
    { category: 'Contingency (10%)', amount: 23500, color: '#64748b' }
  ];

  const totalInvestment = initialInvestment.reduce((sum, item) => sum + item.amount, 0);

  // Fixed Monthly Costs
  const fixedCosts = [
    { item: 'Equipment Lease/Depreciation', monthly: 3500, annual: 42000 },
    { item: 'Facility (Opportunity Cost)', monthly: 3000, annual: 36000 },
    { item: 'Utilities', monthly: 1000, annual: 12000 },
    { item: 'Insurance (All Types)', monthly: 900, annual: 10800 },
    { item: 'Marketing & Advertising', monthly: 1250, annual: 15000 },
    { item: 'Software & Technology', monthly: 250, annual: 3000 },
    { item: 'Professional Services', monthly: 300, annual: 3600 }
  ];

  const totalFixedMonthly = fixedCosts.reduce((sum, item) => sum + item.monthly, 0);
  const totalFixedAnnual = fixedCosts.reduce((sum, item) => sum + item.annual, 0);

  // 3-Year Revenue & Profitability Projections (Realistic Scenario)
  const annualProjections = [
    {
      year: 'Year 1',
      revenue: 325000,
      cogs: 195000, // 60% of revenue (materials + direct labor)
      grossProfit: 130000,
      grossMargin: 40,
      operatingExpenses: 122400, // Fixed costs
      ebitda: 7600,
      netProfit: 2600,
      netMargin: 0.8,
      ordersPerMonth: 55,
      avgOrderValue: 492
    },
    {
      year: 'Year 2',
      revenue: 540000,
      cogs: 297000, // 55% of revenue (improving efficiency)
      grossProfit: 243000,
      grossMargin: 45,
      operatingExpenses: 165000, // Increased with 1 hire
      ebitda: 78000,
      netProfit: 54000,
      netMargin: 10,
      ordersPerMonth: 90,
      avgOrderValue: 500
    },
    {
      year: 'Year 3',
      revenue: 750000,
      cogs: 375000, // 50% of revenue (mature operations)
      grossProfit: 375000,
      grossMargin: 50,
      operatingExpenses: 210000, // 2-3 FTE team
      ebitda: 165000,
      netProfit: 135000,
      netMargin: 18,
      ordersPerMonth: 125,
      avgOrderValue: 500
    }
  ];

  // Monthly Cash Flow Year 1 (First 18 months to show break-even)
  const monthlyCashFlow = [
    { month: 'M1', revenue: 12, costs: 25, netCashFlow: -13, cumulative: -13 },
    { month: 'M2', revenue: 15, costs: 24, netCashFlow: -9, cumulative: -22 },
    { month: 'M3', revenue: 18, costs: 24, netCashFlow: -6, cumulative: -28 },
    { month: 'M4', revenue: 22, costs: 23, netCashFlow: -1, cumulative: -29 },
    { month: 'M5', revenue: 25, costs: 23, netCashFlow: 2, cumulative: -27 },
    { month: 'M6', revenue: 28, costs: 23, netCashFlow: 5, cumulative: -22 },
    { month: 'M7', revenue: 30, costs: 22, netCashFlow: 8, cumulative: -14 },
    { month: 'M8', revenue: 32, costs: 22, netCashFlow: 10, cumulative: -4 },
    { month: 'M9', revenue: 33, costs: 22, netCashFlow: 11, cumulative: 7 },
    { month: 'M10', revenue: 35, costs: 24, netCashFlow: 11, cumulative: 18 },
    { month: 'M11', revenue: 36, costs: 24, netCashFlow: 12, cumulative: 30 },
    { month: 'M12', revenue: 38, costs: 24, netCashFlow: 14, cumulative: 44 },
    { month: 'M13', revenue: 40, costs: 25, netCashFlow: 15, cumulative: 59 },
    { month: 'M14', revenue: 42, costs: 25, netCashFlow: 17, cumulative: 76 },
    { month: 'M15', revenue: 44, costs: 25, netCashFlow: 19, cumulative: 95 },
    { month: 'M16', revenue: 45, costs: 26, netCashFlow: 19, cumulative: 114 },
    { month: 'M17', revenue: 46, costs: 26, netCashFlow: 20, cumulative: 134 },
    { month: 'M18', revenue: 48, costs: 26, netCashFlow: 22, cumulative: 156 }
  ];

  // Break-Even Analysis Data
  const breakEvenData = [
    { month: 1, revenue: 12, breakEvenRevenue: 33.3, gap: -21.3 },
    { month: 2, revenue: 15, breakEvenRevenue: 33.3, gap: -18.3 },
    { month: 3, revenue: 18, breakEvenRevenue: 33.3, gap: -15.3 },
    { month: 4, revenue: 22, breakEvenRevenue: 33.3, gap: -11.3 },
    { month: 5, revenue: 25, breakEvenRevenue: 33.3, gap: -8.3 },
    { month: 6, revenue: 28, breakEvenRevenue: 33.3, gap: -5.3 },
    { month: 7, revenue: 30, breakEvenRevenue: 33.3, gap: -3.3 },
    { month: 8, revenue: 32, breakEvenRevenue: 33.3, gap: -1.3 },
    { month: 9, revenue: 33, breakEvenRevenue: 33.3, gap: -0.3 },
    { month: 10, revenue: 35, breakEvenRevenue: 33.3, gap: 1.7 },
    { month: 11, revenue: 36, breakEvenRevenue: 33.3, gap: 2.7 },
    { month: 12, revenue: 38, breakEvenRevenue: 33.3, gap: 4.7 }
  ];

  // ROI & Payback Analysis
  const roiData = [
    { year: 1, cumulativeCash: 44, investment: 267, roi: -83.5, paybackProgress: 16.5 },
    { year: 2, cumulativeCash: 98, investment: 267, roi: -63.3, paybackProgress: 36.7 },
    { year: 3, cumulativeCash: 233, investment: 267, roi: -12.7, paybackProgress: 87.3 },
    { year: 4, cumulativeCash: 368, investment: 267, roi: 37.8, paybackProgress: 100 }
  ];

  // Scenario Comparison
  const scenarios = [
    {
      scenario: 'Conservative',
      year1: 250,
      year2: 420,
      year3: 600,
      breakEven: '24 mo',
      roi3yr: -15,
      description: 'Slow customer acquisition, 30% margins'
    },
    {
      scenario: 'Realistic',
      year1: 325,
      year2: 540,
      year3: 750,
      breakEven: '18 mo',
      roi3yr: -12.7,
      description: 'Moderate growth, 40-50% margins'
    },
    {
      scenario: 'Optimistic',
      year1: 400,
      year2: 660,
      year3: 900,
      breakEven: '12 mo',
      roi3yr: 15,
      description: 'Strong demand, premium pricing, 50%+ margins'
    }
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4', '#64748b'];

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>
            Financial Model & Projections
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Comprehensive 3-year financial analysis including investment requirements, cash flow, and ROI projections
          </p>
        </div>

        {/* View Toggle */}
        <div style={{ marginBottom: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setViewMode('overview')}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              background: viewMode === 'overview' ? 'var(--primary-blue)' : 'var(--bg-secondary)',
              color: viewMode === 'overview' ? 'white' : 'var(--text-secondary)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Overview
          </button>
          <button
            onClick={() => setViewMode('investment')}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              background: viewMode === 'investment' ? 'var(--primary-blue)' : 'var(--bg-secondary)',
              color: viewMode === 'investment' ? 'white' : 'var(--text-secondary)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Initial Investment
          </button>
          <button
            onClick={() => setViewMode('cashflow')}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              background: viewMode === 'cashflow' ? 'var(--primary-blue)' : 'var(--bg-secondary)',
              color: viewMode === 'cashflow' ? 'white' : 'var(--text-secondary)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Cash Flow Analysis
          </button>
          <button
            onClick={() => setViewMode('breakeven')}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              background: viewMode === 'breakeven' ? 'var(--primary-blue)' : 'var(--bg-secondary)',
              color: viewMode === 'breakeven' ? 'white' : 'var(--text-secondary)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Break-Even & ROI
          </button>
        </div>

        {/* OVERVIEW MODE */}
        {viewMode === 'overview' && (
          <>
            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              <MetricCard
                label="Total Initial Investment"
                value={`$${Math.round(totalInvestment / 1000)}k`}
                icon={DollarSign}
                trend="neutral"
                subtitle="Equipment, setup, working capital"
                color="blue"
              />
              <MetricCard
                label="Year 3 Revenue (Realistic)"
                value="$750k"
                icon={TrendingUp}
                trend="up"
                subtitle="130% growth from Year 1"
                color="green"
              />
              <MetricCard
                label="Break-Even Timeline"
                value="18 months"
                icon={Calendar}
                trend="neutral"
                subtitle="Cumulative cash flow positive"
                color="orange"
              />
              <MetricCard
                label="Year 3 Net Margin"
                value="18%"
                icon={Percent}
                trend="up"
                subtitle="From 0.8% in Year 1"
                color="purple"
              />
            </div>

            {/* 3-Year Revenue Growth */}
            <div className="card" style={{ marginBottom: '24px' }}>
              <div className="card-header">
                <h3 className="card-title">3-Year Revenue & Profitability Projection (Realistic Scenario)</h3>
                <p className="card-subtitle">Annual revenue and profit growth trajectory</p>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={annualProjections}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" stroke="#64748b" />
                  <YAxis stroke="#64748b" tickFormatter={(value) => `$${value / 1000}k`} />
                  <Tooltip
                    contentStyle={{
                      background: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '12px'
                    }}
                    formatter={(value, name) => {
                      if (name === 'grossMargin' || name === 'netMargin') return [`${value}%`, name];
                      return [`$${(value / 1000).toFixed(0)}k`, name];
                    }}
                  />
                  <Legend />
                  <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="grossProfit" fill="#10b981" name="Gross Profit" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="netProfit" fill="#8b5cf6" name="Net Profit" radius={[8, 8, 0, 0]} />
                  <Line type="monotone" dataKey="grossMargin" stroke="#f59e0b" strokeWidth={3} name="Gross Margin %" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Detailed P&L Table */}
            <div className="card" style={{ marginBottom: '24px' }}>
              <div className="card-header">
                <h3 className="card-title">Profit & Loss Statement (3-Year Projection)</h3>
                <p className="card-subtitle">Detailed income statement showing revenue, costs, and profitability</p>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--border-medium)' }}>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '700', color: 'var(--text-primary)' }}>Line Item</th>
                      <th style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: 'var(--text-primary)' }}>Year 1</th>
                      <th style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: 'var(--text-primary)' }}>Year 2</th>
                      <th style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: 'var(--text-primary)' }}>Year 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-light)', background: '#f0f9ff' }}>
                      <td style={{ padding: '16px', fontWeight: '700' }}>Revenue</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>$325,000</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>$540,000</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>$750,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', paddingLeft: '32px' }}>Monthly Orders</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>55</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>90</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>125</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', paddingLeft: '32px' }}>Average Order Value</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>$492</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>$500</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>$500</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)', background: '#fef2f2' }}>
                      <td style={{ padding: '16px', fontWeight: '700' }}>Cost of Goods Sold (COGS)</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>($195,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>($297,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>($375,000)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', paddingLeft: '32px' }}>Materials (EPS foam)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($146,250)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($243,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($337,500)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', paddingLeft: '32px' }}>Direct Labor</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($48,750)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($54,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($37,500)</td>
                    </tr>
                    <tr style={{ borderBottom: '2px solid var(--border-medium)', background: '#ecfdf5' }}>
                      <td style={{ padding: '16px', fontWeight: '700' }}>Gross Profit</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: '#10b981' }}>$130,000 (40%)</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: '#10b981' }}>$243,000 (45%)</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: '#10b981' }}>$375,000 (50%)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)', background: '#fef2f2' }}>
                      <td style={{ padding: '16px', fontWeight: '700' }}>Operating Expenses</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>($122,400)</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>($165,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>($210,000)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', paddingLeft: '32px' }}>Facility Costs</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($36,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($36,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($36,000)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', paddingLeft: '32px' }}>Equipment Depreciation</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($42,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($42,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($42,000)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', paddingLeft: '32px' }}>Marketing & Sales</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($15,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($18,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($24,000)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', paddingLeft: '32px' }}>Insurance & Compliance</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($10,800)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($12,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($15,000)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', paddingLeft: '32px' }}>Utilities & Services</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($12,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($15,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($18,000)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', paddingLeft: '32px' }}>Professional Services</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($3,600)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($4,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($5,000)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', paddingLeft: '32px' }}>Additional Staff Costs</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>$0</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($38,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($70,000)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', paddingLeft: '32px' }}>Other Operating Costs</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($3,000)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($0)</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>($0)</td>
                    </tr>
                    <tr style={{ borderBottom: '2px solid var(--border-medium)', background: '#dbeafe' }}>
                      <td style={{ padding: '16px', fontWeight: '700' }}>EBITDA</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: '#3b82f6' }}>$7,600 (2.3%)</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: '#3b82f6' }}>$78,000 (14.4%)</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: '#3b82f6' }}>$165,000 (22%)</td>
                    </tr>
                    <tr style={{ borderBottom: '2px solid var(--border-medium)', background: '#f0fdf4' }}>
                      <td style={{ padding: '16px', fontWeight: '700' }}>Net Profit (After Tax 30%)</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: '#10b981' }}>$2,600 (0.8%)</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: '#10b981' }}>$54,000 (10%)</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: '#10b981' }}>$135,000 (18%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Scenario Comparison */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Scenario Analysis Comparison</h3>
                <p className="card-subtitle">Conservative, Realistic, and Optimistic revenue projections</p>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--border-medium)' }}>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '700' }}>Scenario</th>
                      <th style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>Year 1</th>
                      <th style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>Year 2</th>
                      <th style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>Year 3</th>
                      <th style={{ padding: '16px', textAlign: 'center', fontWeight: '700' }}>Break-Even</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '700' }}>Key Assumptions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarios.map((s, idx) => (
                      <tr key={idx} style={{
                        borderBottom: '1px solid var(--border-light)',
                        background: s.scenario === 'Realistic' ? '#f0f9ff' : 'white'
                      }}>
                        <td style={{ padding: '16px', fontWeight: '700', color: s.scenario === 'Conservative' ? '#ef4444' : s.scenario === 'Realistic' ? '#3b82f6' : '#10b981' }}>
                          {s.scenario}
                        </td>
                        <td style={{ padding: '16px', textAlign: 'right' }}>${s.year1.toLocaleString()}</td>
                        <td style={{ padding: '16px', textAlign: 'right' }}>${s.year2.toLocaleString()}</td>
                        <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600' }}>${s.year3.toLocaleString()}</td>
                        <td style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>{s.breakEven}</td>
                        <td style={{ padding: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>{s.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* INVESTMENT MODE */}
        {viewMode === 'investment' && (
          <>
            {/* Investment Summary Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              <MetricCard
                label="Total Initial Investment"
                value={`$${Math.round(totalInvestment / 1000)}k`}
                icon={PiggyBank}
                trend="neutral"
                subtitle="One-time setup capital required"
                color="blue"
              />
              <MetricCard
                label="Equipment Investment"
                value="$160k"
                icon={DollarSign}
                trend="neutral"
                subtitle="60% of total investment"
                color="purple"
              />
              <MetricCard
                label="Working Capital Buffer"
                value="$20k"
                icon={TrendingUp}
                trend="neutral"
                subtitle="For initial cash flow needs"
                color="green"
              />
              <MetricCard
                label="Monthly Fixed Costs"
                value={`$${Math.round(totalFixedMonthly / 100) / 10}k`}
                icon={Calendar}
                trend="neutral"
                subtitle="Ongoing operational expenses"
                color="orange"
              />
            </div>

            {/* Investment Breakdown Pie Chart */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Initial Investment Breakdown</h3>
                  <p className="card-subtitle">Distribution of $267k total investment</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={initialInvestment}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ category, percent }) => `${category}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="amount"
                    >
                      {initialInvestment.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => `$${value.toLocaleString()}`}
                      contentStyle={{
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Investment Details</h3>
                  <p className="card-subtitle">Itemized breakdown of startup costs</p>
                </div>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
                      <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--border-medium)' }}>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Category</th>
                        <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600' }}>Amount</th>
                        <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600' }}>% of Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {initialInvestment.map((item, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                          <td style={{ padding: '12px' }}>{item.category}</td>
                          <td style={{ padding: '12px', textAlign: 'right', fontWeight: '600' }}>
                            ${item.amount.toLocaleString()}
                          </td>
                          <td style={{ padding: '12px', textAlign: 'right' }}>
                            {((item.amount / totalInvestment) * 100).toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                      <tr style={{ background: '#f0f9ff', borderTop: '2px solid var(--border-medium)' }}>
                        <td style={{ padding: '12px', fontWeight: '700' }}>Total Investment</td>
                        <td style={{ padding: '12px', textAlign: 'right', fontWeight: '700', color: 'var(--primary-blue)' }}>
                          ${totalInvestment.toLocaleString()}
                        </td>
                        <td style={{ padding: '12px', textAlign: 'right', fontWeight: '700' }}>100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Fixed Costs Breakdown */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Ongoing Fixed Operating Costs</h3>
                <p className="card-subtitle">Monthly and annual fixed expense structure</p>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--border-medium)' }}>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '700' }}>Cost Item</th>
                      <th style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>Monthly</th>
                      <th style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>Annual</th>
                      <th style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>% of Fixed Costs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fixedCosts.map((cost, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                        <td style={{ padding: '16px' }}>{cost.item}</td>
                        <td style={{ padding: '16px', textAlign: 'right' }}>${cost.monthly.toLocaleString()}</td>
                        <td style={{ padding: '16px', textAlign: 'right' }}>${cost.annual.toLocaleString()}</td>
                        <td style={{ padding: '16px', textAlign: 'right' }}>
                          {((cost.annual / totalFixedAnnual) * 100).toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                    <tr style={{ background: '#fef2f2', borderTop: '2px solid var(--border-medium)' }}>
                      <td style={{ padding: '16px', fontWeight: '700' }}>Total Fixed Costs</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: '#ef4444' }}>
                        ${totalFixedMonthly.toLocaleString()}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700', color: '#ef4444' }}>
                        ${totalFixedAnnual.toLocaleString()}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '24px', padding: '16px', background: '#fffbeb', borderRadius: '8px', border: '1px solid #fbbf24' }}>
                <p style={{ fontSize: '14px', color: '#92400e', margin: 0 }}>
                  <strong>Note:</strong> Fixed costs represent break-even revenue requirement of approximately $33,300/month
                  (assuming 30% contribution margin after variable costs). Variable costs (materials, labor) scale with revenue
                  and average 55-60% of sales in Year 1, improving to 50% by Year 3.
                </p>
              </div>
            </div>
          </>
        )}

        {/* CASH FLOW MODE */}
        {viewMode === 'cashflow' && (
          <>
            {/* Cash Flow Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              <MetricCard
                label="Peak Cash Burn"
                value="-$29k"
                icon={TrendingDown}
                trend="down"
                subtitle="Cumulative low point at Month 4"
                color="red"
              />
              <MetricCard
                label="Monthly Cash Positive"
                value="Month 5"
                icon={CheckCircle}
                trend="up"
                subtitle="Monthly inflows exceed outflows"
                color="green"
              />
              <MetricCard
                label="Cumulative Break-Even"
                value="Month 9"
                icon={TrendingUp}
                trend="up"
                subtitle="Total cash flow turns positive"
                color="blue"
              />
              <MetricCard
                label="End of Year 1 Cash"
                value="+$44k"
                icon={DollarSign}
                trend="up"
                subtitle="Strong position for Year 2"
                color="purple"
              />
            </div>

            {/* Monthly Cash Flow Chart */}
            <div className="card" style={{ marginBottom: '24px' }}>
              <div className="card-header">
                <h3 className="card-title">18-Month Cash Flow Projection</h3>
                <p className="card-subtitle">Monthly revenue, costs, and cumulative cash position</p>
              </div>
              <ResponsiveContainer width="100%" height={450}>
                <ComposedChart data={monthlyCashFlow}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" tickFormatter={(value) => `$${value}k`} />
                  <Tooltip
                    contentStyle={{
                      background: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '12px'
                    }}
                    formatter={(value) => [`$${value}k`, '']}
                  />
                  <Legend />
                  <Bar dataKey="revenue" fill="#10b981" name="Monthly Revenue" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="costs" fill="#ef4444" name="Monthly Costs" radius={[8, 8, 0, 0]} />
                  <Line type="monotone" dataKey="cumulative" stroke="#3b82f6" strokeWidth={3} name="Cumulative Cash Flow" dot={{ fill: '#3b82f6', r: 4 }} />
                  <Line type="monotone" dataKey="netCashFlow" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" name="Monthly Net Cash Flow" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Cash Flow Insights */}
            <div style={{ display: 'grid', gap: '24px', marginBottom: '24px' }}>
              <div className="card" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', border: '2px solid #fbbf24' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#92400e', marginBottom: '12px' }}>
                  ⚠️ Critical Cash Flow Period: Months 1-4
                </h4>
                <div style={{ fontSize: '14px', color: '#78350f', lineHeight: '1.7' }}>
                  <p style={{ margin: '0 0 12px 0' }}>
                    <strong>Challenge:</strong> Initial months show negative cash flow as revenue ramps up slower than fixed costs.
                    Cumulative cash reaches low point of -$29k in Month 4.
                  </p>
                  <p style={{ margin: '0 0 12px 0' }}>
                    <strong>Requirement:</strong> Working capital buffer of $30-35k essential to bridge this period without cash crisis.
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Mitigation:</strong> Aggressive customer acquisition in Months 1-3, potentially offer launch discounts
                    to accelerate revenue, delay non-critical expenses.
                  </p>
                </div>
              </div>

              <div className="card" style={{ background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)', border: '2px solid #10b981' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#065f46', marginBottom: '12px' }}>
                  ✅ Turning Point: Months 5-9
                </h4>
                <div style={{ fontSize: '14px', color: '#047857', lineHeight: '1.7' }}>
                  <p style={{ margin: '0 0 12px 0' }}>
                    <strong>Month 5:</strong> Monthly cash flow turns positive ($2k net positive). Business begins generating more
                    cash than it consumes on a monthly basis.
                  </p>
                  <p style={{ margin: '0 0 12px 0' }}>
                    <strong>Month 9:</strong> Cumulative cash flow becomes positive ($7k cumulative). Total cash generated since
                    launch exceeds total cash consumed.
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Implication:</strong> After Month 9, business is self-sustaining and generating cash reserves for growth,
                    hiring, and reinvestment.
                  </p>
                </div>
              </div>

              <div className="card" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', border: '2px solid #3b82f6' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1e40af', marginBottom: '12px' }}>
                  📊 Year 1 Cash Position: $44k Cumulative
                </h4>
                <div style={{ fontSize: '14px', color: '#1e3a8a', lineHeight: '1.7' }}>
                  <p style={{ margin: '0 0 12px 0' }}>
                    By end of Month 12, cumulative cash flow reaches $44k positive. This provides strong foundation for Year 2:
                  </p>
                  <ul style={{ margin: '0 0 12px 0', paddingLeft: '20px' }}>
                    <li>Can fund first hire (Month 10-12) without external capital</li>
                    <li>Buffer for equipment upgrades or capacity expansion</li>
                    <li>Cushion for unexpected expenses or seasonal fluctuations</li>
                    <li>Demonstrates business viability to lenders/investors if needed</li>
                  </ul>
                  <p style={{ margin: 0 }}>
                    <strong>Year 2 Projection:</strong> Cumulative cash grows to $98k by end of Year 2, accelerating to $233k by end of Year 3.
                  </p>
                </div>
              </div>
            </div>

            {/* Monthly Cash Flow Table */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Detailed Monthly Cash Flow (First 18 Months)</h3>
                <p className="card-subtitle">Revenue, costs, net cash flow, and cumulative position</p>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--border-medium)' }}>
                      <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700' }}>Month</th>
                      <th style={{ padding: '12px', textAlign: 'right', fontWeight: '700' }}>Revenue</th>
                      <th style={{ padding: '12px', textAlign: 'right', fontWeight: '700' }}>Costs</th>
                      <th style={{ padding: '12px', textAlign: 'right', fontWeight: '700' }}>Net Cash Flow</th>
                      <th style={{ padding: '12px', textAlign: 'right', fontWeight: '700' }}>Cumulative</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyCashFlow.map((row, idx) => (
                      <tr key={idx} style={{
                        borderBottom: '1px solid var(--border-light)',
                        background: row.cumulative >= 0 ? '#f0fdf4' : (row.cumulative < -20 ? '#fef2f2' : 'white')
                      }}>
                        <td style={{ padding: '12px', fontWeight: '600' }}>{row.month}</td>
                        <td style={{ padding: '12px', textAlign: 'right' }}>${row.revenue}k</td>
                        <td style={{ padding: '12px', textAlign: 'right' }}>${row.costs}k</td>
                        <td style={{
                          padding: '12px',
                          textAlign: 'right',
                          fontWeight: '600',
                          color: row.netCashFlow >= 0 ? '#10b981' : '#ef4444'
                        }}>
                          {row.netCashFlow >= 0 ? '+' : ''}${row.netCashFlow}k
                        </td>
                        <td style={{
                          padding: '12px',
                          textAlign: 'right',
                          fontWeight: '700',
                          color: row.cumulative >= 0 ? '#10b981' : '#ef4444'
                        }}>
                          {row.cumulative >= 0 ? '+' : ''}${row.cumulative}k
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* BREAK-EVEN & ROI MODE */}
        {viewMode === 'breakeven' && (
          <>
            {/* ROI Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              <MetricCard
                label="Monthly Break-Even Revenue"
                value="$33.3k"
                icon={DollarSign}
                trend="neutral"
                subtitle="Required to cover fixed costs"
                color="orange"
              />
              <MetricCard
                label="Break-Even Timeline"
                value="Month 9"
                icon={Calendar}
                trend="neutral"
                subtitle="Cumulative cash flow positive"
                color="blue"
              />
              <MetricCard
                label="Full Payback Period"
                value="3.6 years"
                icon={TrendingUp}
                trend="neutral"
                subtitle="Conservative scenario"
                color="purple"
              />
              <MetricCard
                label="Year 3 ROI"
                value="-12.7%"
                icon={Percent}
                trend="neutral"
                subtitle="Full payback by Year 4"
                color="green"
              />
            </div>

            {/* Break-Even Analysis Chart */}
            <div className="card" style={{ marginBottom: '24px' }}>
              <div className="card-header">
                <h3 className="card-title">Year 1 Break-Even Analysis</h3>
                <p className="card-subtitle">Monthly revenue vs. break-even requirement ($33.3k/month)</p>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={breakEvenData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="month"
                    stroke="#64748b"
                    label={{ value: 'Month', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis stroke="#64748b" tickFormatter={(value) => `$${value}k`} />
                  <Tooltip
                    contentStyle={{
                      background: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '12px'
                    }}
                    formatter={(value, name) => {
                      if (name === 'gap') return [`$${value}k`, 'Gap to Break-Even'];
                      return [`$${value}k`, name];
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="breakEvenRevenue"
                    fill="#fef3c7"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    name="Break-Even Revenue Required"
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    strokeWidth={3}
                    name="Actual Revenue"
                    dot={{ fill: '#10b981', r: 5 }}
                  />
                  <Bar
                    dataKey="gap"
                    fill="#ef4444"
                    name="Revenue Gap"
                    radius={[8, 8, 0, 0]}
                  />
                </ComposedChart>
              </ResponsiveContainer>

              <div style={{ marginTop: '20px', padding: '16px', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #10b981' }}>
                <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#065f46', margin: '0 0 8px 0' }}>
                  ✅ Break-Even Achievement
                </h5>
                <p style={{ fontSize: '14px', color: '#047857', margin: 0, lineHeight: '1.6' }}>
                  Revenue surpasses break-even threshold in <strong>Month 10</strong> ($35k vs. $33.3k required).
                  By Month 12, revenue reaches $38k/month, providing $4.7k monthly cushion above break-even.
                  This margin allows for unexpected expenses and begins building cash reserves.
                </p>
              </div>
            </div>

            {/* ROI Progression Chart */}
            <div className="card" style={{ marginBottom: '24px' }}>
              <div className="card-header">
                <h3 className="card-title">Return on Investment (ROI) Progression</h3>
                <p className="card-subtitle">Cumulative cash generation vs. $267k initial investment</p>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="year"
                    stroke="#64748b"
                  />
                  <YAxis stroke="#64748b" tickFormatter={(value) => `${value}%`} />
                  <Tooltip
                    contentStyle={{
                      background: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '12px'
                    }}
                    formatter={(value, name) => {
                      if (name === 'roi') return [`${value}%`, 'ROI'];
                      if (name === 'paybackProgress') return [`${value}%`, 'Payback Progress'];
                      return [`$${value}k`, name];
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="paybackProgress"
                    fill="#10b981"
                    name="Payback Progress %"
                    radius={[8, 8, 0, 0]}
                  />
                  <Line
                    type="monotone"
                    dataKey="roi"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    name="ROI %"
                    dot={{ fill: '#3b82f6', r: 6 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Break-Even & ROI Calculations */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Break-Even Calculation</h3>
                  <p className="card-subtitle">How we determine the $33.3k monthly threshold</p>
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', marginBottom: '12px' }}>
                    <p style={{ fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>Formula:</p>
                    <p style={{ margin: '0 0 4px 0' }}>Break-Even Revenue = Fixed Costs ÷ Contribution Margin %</p>
                  </div>

                  <div style={{ padding: '12px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '12px' }}>
                    <p style={{ fontWeight: '600', margin: '0 0 8px 0' }}>Fixed Costs (Monthly):</p>
                    <ul style={{ margin: '0', paddingLeft: '20px' }}>
                      <li>Equipment depreciation: $3,500</li>
                      <li>Facility: $3,000</li>
                      <li>Insurance: $900</li>
                      <li>Marketing: $1,250</li>
                      <li>Utilities & other: $1,550</li>
                      <li><strong>Total Fixed: $10,200/month</strong></li>
                    </ul>
                  </div>

                  <div style={{ padding: '12px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '12px' }}>
                    <p style={{ fontWeight: '600', margin: '0 0 8px 0' }}>Variable Costs:</p>
                    <ul style={{ margin: '0', paddingLeft: '20px' }}>
                      <li>Materials (EPS): 45% of revenue</li>
                      <li>Direct labor: 15% of revenue</li>
                      <li>Delivery & consumables: 5% of revenue</li>
                      <li><strong>Total Variable: 65% of revenue</strong></li>
                    </ul>
                  </div>

                  <div style={{ padding: '16px', background: '#dbeafe', borderRadius: '8px', border: '2px solid #3b82f6' }}>
                    <p style={{ fontWeight: '700', color: '#1e40af', margin: '0 0 8px 0' }}>Calculation:</p>
                    <p style={{ margin: '0 0 4px 0', color: '#1e3a8a' }}>Contribution Margin = 100% - 65% = <strong>35%</strong></p>
                    <p style={{ margin: '0 0 8px 0', color: '#1e3a8a' }}>Break-Even = $10,200 ÷ 0.35 = <strong>$29,143/month</strong></p>
                    <p style={{ margin: '0 0 4px 0', color: '#1e3a8a', fontSize: '13px' }}>
                      Note: We use $33,300/month (conservative) to account for one-time costs and safety margin.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">ROI & Payback Analysis</h3>
                  <p className="card-subtitle">Investment return timeline</p>
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', marginBottom: '12px' }}>
                    <p style={{ fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
                      Initial Investment: $267,000
                    </p>
                    <p style={{ margin: 0, fontSize: '13px' }}>
                      Total capital required for equipment, setup, inventory, and working capital buffer.
                    </p>
                  </div>

                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                      <thead>
                        <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--border-medium)' }}>
                          <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600' }}>Year</th>
                          <th style={{ padding: '8px', textAlign: 'right', fontWeight: '600' }}>Cum. Cash</th>
                          <th style={{ padding: '8px', textAlign: 'right', fontWeight: '600' }}>ROI</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                          <td style={{ padding: '8px' }}>Year 1</td>
                          <td style={{ padding: '8px', textAlign: 'right' }}>$44k</td>
                          <td style={{ padding: '8px', textAlign: 'right', color: '#ef4444' }}>-83.5%</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                          <td style={{ padding: '8px' }}>Year 2</td>
                          <td style={{ padding: '8px', textAlign: 'right' }}>$98k</td>
                          <td style={{ padding: '8px', textAlign: 'right', color: '#ef4444' }}>-63.3%</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                          <td style={{ padding: '8px' }}>Year 3</td>
                          <td style={{ padding: '8px', textAlign: 'right' }}>$233k</td>
                          <td style={{ padding: '8px', textAlign: 'right', color: '#ef4444' }}>-12.7%</td>
                        </tr>
                        <tr style={{ background: '#f0fdf4' }}>
                          <td style={{ padding: '8px', fontWeight: '700' }}>Year 4</td>
                          <td style={{ padding: '8px', textAlign: 'right', fontWeight: '700' }}>$368k</td>
                          <td style={{ padding: '8px', textAlign: 'right', fontWeight: '700', color: '#10b981' }}>+37.8%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div style={{ padding: '16px', background: '#f0fdf4', borderRadius: '8px', border: '2px solid #10b981', marginTop: '12px' }}>
                    <p style={{ fontWeight: '700', color: '#065f46', margin: '0 0 8px 0' }}>
                      ✅ Full Payback: Year 4 (Month 43)
                    </p>
                    <p style={{ margin: 0, color: '#047857', fontSize: '13px' }}>
                      Cumulative cash generated equals initial investment by middle of Year 4. After this point,
                      all profits represent pure return on investment. By end of Year 5, expect cumulative ROI of 80-100%+
                      as business matures with established customer base and optimized operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenario Comparison for ROI */}
            <div className="card" style={{ marginTop: '24px' }}>
              <div className="card-header">
                <h3 className="card-title">Break-Even Timeline Across Scenarios</h3>
                <p className="card-subtitle">Impact of different growth assumptions</p>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--border-medium)' }}>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '700' }}>Scenario</th>
                      <th style={{ padding: '16px', textAlign: 'center', fontWeight: '700' }}>Monthly Break-Even</th>
                      <th style={{ padding: '16px', textAlign: 'center', fontWeight: '700' }}>Cumulative Break-Even</th>
                      <th style={{ padding: '16px', textAlign: 'center', fontWeight: '700' }}>Full Payback</th>
                      <th style={{ padding: '16px', textAlign: 'right', fontWeight: '700' }}>Year 3 ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', fontWeight: '600', color: '#ef4444' }}>Conservative</td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>Month 12</td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>Month 14</td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>4.2 years</td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>-15%</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)', background: '#f0f9ff' }}>
                      <td style={{ padding: '16px', fontWeight: '700', color: '#3b82f6' }}>Realistic ⭐</td>
                      <td style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Month 10</td>
                      <td style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Month 9</td>
                      <td style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>3.6 years</td>
                      <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600' }}>-12.7%</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '16px', fontWeight: '600', color: '#10b981' }}>Optimistic</td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>Month 8</td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>Month 6</td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>2.8 years</td>
                      <td style={{ padding: '16px', textAlign: 'right', color: '#10b981' }}>+15%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '20px', padding: '16px', background: '#fffbeb', borderRadius: '8px', border: '1px solid #fbbf24' }}>
                <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#92400e', margin: '0 0 8px 0' }}>
                  📊 Key Insight: Patient Capital Required
                </h5>
                <p style={{ fontSize: '14px', color: '#78350f', margin: 0, lineHeight: '1.6' }}>
                  This is a <strong>capital-intensive business with 3-4 year payback period</strong>. Not suitable for
                  investors seeking quick returns. However, after payback, business generates strong cash flow ($135k+
                  net profit in Year 3) with potential to scale further. Best suited for owner-operator willing to
                  reinvest profits and build long-term asset value.
                </p>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default FinancialProjections;
