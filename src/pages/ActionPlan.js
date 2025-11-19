import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Calendar, Target, TrendingUp, AlertCircle } from 'lucide-react';
import { actionPlan } from '../data/businessData';

const ActionPlan = () => {
  const phaseColors = {
    0: { bg: '#dbeafe', border: '#3b82f6', text: '#1e40af', icon: '#3b82f6' },
    1: { bg: '#e0e7ff', border: '#6366f1', text: '#4338ca', icon: '#6366f1' },
    2: { bg: '#f3e8ff', border: '#a855f7', text: '#7e22ce', icon: '#a855f7' },
    3: { bg: '#fef3c7', border: '#f59e0b', text: '#92400e', icon: '#f59e0b' },
    4: { bg: '#dcfce7', border: '#10b981', text: '#065f46', icon: '#10b981' }
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
            Action Plan
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Step-by-step implementation roadmap from pre-launch through first 6 months
          </p>
        </div>

        {/* Plan Overview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            borderRadius: '12px',
            border: '2px solid #bfdbfe'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <Calendar size={24} color="#3b82f6" />
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e40af', margin: 0 }}>
                Timeline
              </h3>
            </div>
            <p style={{ fontSize: '28px', fontWeight: '800', color: '#1e40af', margin: '8px 0 4px 0' }}>
              9 Months
            </p>
            <p style={{ fontSize: '13px', color: '#1e3a8a', margin: 0 }}>
              Month -3 through Month 6
            </p>
          </div>

          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
            borderRadius: '12px',
            border: '2px solid #86efac'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <Target size={24} color="#10b981" />
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#15803d', margin: 0 }}>
                Total Phases
              </h3>
            </div>
            <p style={{ fontSize: '28px', fontWeight: '800', color: '#15803d', margin: '8px 0 4px 0' }}>
              {actionPlan.length}
            </p>
            <p style={{ fontSize: '13px', color: '#166534', margin: 0 }}>
              Strategic implementation stages
            </p>
          </div>

          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            borderRadius: '12px',
            border: '2px solid #fbbf24'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <TrendingUp size={24} color="#f59e0b" />
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#92400e', margin: 0 }}>
                Month 6 Target
              </h3>
            </div>
            <p style={{ fontSize: '28px', fontWeight: '800', color: '#92400e', margin: '8px 0 4px 0' }}>
              40+ orders
            </p>
            <p style={{ fontSize: '13px', color: '#78350f', margin: 0 }}>
              30-50 active customers
            </p>
          </div>

          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
            borderRadius: '12px',
            border: '2px solid #fca5a5'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <AlertCircle size={24} color="#ef4444" />
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#991b1b', margin: 0 }}>
                Critical Success
              </h3>
            </div>
            <p style={{ fontSize: '20px', fontWeight: '800', color: '#991b1b', margin: '8px 0 4px 0', lineHeight: '1.2' }}>
              Customer Validation
            </p>
            <p style={{ fontSize: '13px', color: '#7f1d1d', margin: 0 }}>
              5-10 commitments pre-launch
            </p>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div style={{ position: 'relative', marginBottom: '24px' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '24px',
            top: '40px',
            bottom: '40px',
            width: '4px',
            background: 'linear-gradient(180deg, #3b82f6 0%, #10b981 100%)',
            borderRadius: '4px'
          }} />

          {/* Phase Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {actionPlan.map((phase, idx) => {
              const colors = phaseColors[idx] || phaseColors[0];
              const isCompleted = phase.status === 'completed';
              const isInProgress = phase.status === 'in-progress';

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  style={{ position: 'relative', paddingLeft: '64px' }}
                >
                  {/* Timeline node */}
                  <div style={{
                    position: 'absolute',
                    left: '8px',
                    top: '24px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'white',
                    border: `4px solid ${colors.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1
                  }}>
                    {isCompleted ? (
                      <CheckCircle size={20} color={colors.icon} fill={colors.icon} />
                    ) : (
                      <Circle size={16} color={colors.icon} />
                    )}
                  </div>

                  {/* Phase card */}
                  <div
                    className="card"
                    style={{
                      background: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.bg}dd 100%)`,
                      border: `2px solid ${colors.border}`,
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div>
                        <h3 style={{ fontSize: '24px', fontWeight: '800', color: colors.text, margin: '0 0 4px 0' }}>
                          {phase.phase}
                        </h3>
                        <h4 style={{ fontSize: '18px', fontWeight: '600', color: colors.text, margin: 0 }}>
                          {phase.title}
                        </h4>
                      </div>
                      {isInProgress && (
                        <span style={{
                          padding: '6px 14px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '700',
                          background: '#fbbf24',
                          color: 'white'
                        }}>
                          IN PROGRESS
                        </span>
                      )}
                      {isCompleted && (
                        <span style={{
                          padding: '6px 14px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '700',
                          background: '#10b981',
                          color: 'white'
                        }}>
                          COMPLETED
                        </span>
                      )}
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '12px'
                    }}>
                      {phase.tasks.map((task, taskIdx) => (
                        <div
                          key={taskIdx}
                          style={{
                            padding: '12px 16px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            borderRadius: '8px',
                            border: `1px solid ${colors.border}`,
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateX(4px)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateX(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          {isCompleted ? (
                            <CheckCircle size={20} color={colors.icon} style={{ flexShrink: 0, marginTop: '2px' }} />
                          ) : (
                            <Circle size={20} color={colors.icon} style={{ flexShrink: 0, marginTop: '2px' }} />
                          )}
                          <span style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                            {task}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Critical Path & Success Criteria */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <div className="card" style={{ background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)', border: '2px solid #fca5a5' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#991b1b', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertCircle size={24} color="#ef4444" />
              Critical Path Items
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { item: 'Customer validation (5-10 commitments)', timing: 'Month -3' },
                { item: 'Equipment order placed', timing: 'Month -1' },
                { item: 'First 10-20 orders processed', timing: 'Month 1-3' },
                { item: '40+ orders/month achieved', timing: 'Month 6' }
              ].map((critical, idx) => (
                <div key={idx} style={{
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '8px',
                  border: '1px solid #fca5a5'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#991b1b' }}>
                      {critical.item}
                    </span>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#ef4444',
                      padding: '4px 8px',
                      background: '#fee2e2',
                      borderRadius: '6px'
                    }}>
                      {critical.timing}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', border: '2px solid #86efac' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#15803d', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Target size={24} color="#10b981" />
              Success Milestones
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { milestone: '8-12 new customers/month', metric: 'Customer Acquisition' },
                { milestone: '$25k monthly revenue', metric: 'Month 6 Revenue' },
                { milestone: '85%+ on-time delivery', metric: 'Service Quality' },
                { milestone: '60%+ equipment utilization', metric: 'Operational Efficiency' }
              ].map((success, idx) => (
                <div key={idx} style={{
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '8px',
                  border: '1px solid #86efac'
                }}>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#15803d' }}>
                      {success.milestone}
                    </span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#166534' }}>
                    {success.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Go/No-Go Decision Framework */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', border: '2px solid #bfdbfe' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e40af', marginBottom: '16px' }}>
            🚦 Go/No-Go Decision Points
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.95)', borderRadius: '8px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1e40af', marginBottom: '8px' }}>
                ✓ Proceed to Launch If:
              </h4>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#1e3a8a', lineHeight: '1.6' }}>
                <li>5-10 customer commitments secured</li>
                <li>Equipment delivered and commissioned</li>
                <li>Owner can commit 50-60 hrs/week</li>
                <li>$20k+ working capital buffer available</li>
              </ul>
            </div>

            <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.95)', borderRadius: '8px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#92400e', marginBottom: '8px' }}>
                ⚠️ Delay 3-6 Months If:
              </h4>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#78350f', lineHeight: '1.6' }}>
                <li>Fewer than 5 customer commitments</li>
                <li>Working capital below $15k</li>
                <li>Economic recession indicators strengthen</li>
                <li>Owner time availability uncertain</li>
              </ul>
            </div>

            <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.95)', borderRadius: '8px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#991b1b', marginBottom: '8px' }}>
                ❌ Do Not Proceed If:
              </h4>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#7f1d1d', lineHeight: '1.6' }}>
                <li>Zero customer interest after 20+ contacts</li>
                <li>Facility unsuitable (requires &gt;$50k improvements)</li>
                <li>Owner cannot commit required time</li>
                <li>Total funding unavailable (&lt;$180k)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Immediate Steps */}
        <div style={{
          marginTop: '24px',
          padding: '24px',
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
          borderRadius: '16px',
          border: '2px solid #fbbf24'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#92400e', marginBottom: '16px' }}>
            🎯 Next Immediate Steps (This Week)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
            {[
              'Review financial model, confirm funding availability',
              'Schedule 5-10 builder interviews for validation',
              'Tour Wintech facility or speak with existing customers',
              'Assess Hurstville/Padstow facility suitability',
              'Decision: Proceed to Month -3 phase or pause'
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '8px',
                  border: '2px solid #fbbf24',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#fbbf24',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '700',
                  flexShrink: 0
                }}>
                  {idx + 1}
                </div>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#92400e', lineHeight: '1.5' }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ActionPlan;
