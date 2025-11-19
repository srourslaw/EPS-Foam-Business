import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, TrendingUp, Users, DollarSign, Target, Tag,
  Settings, UserPlus, Shield, AlertTriangle, CheckSquare, Menu, X, ChevronLeft, ChevronRight
} from 'lucide-react';

const navItems = [
  { path: '/executive-summary', label: 'Executive Summary', icon: Home },
  { path: '/market-analysis', label: 'Market Analysis', icon: TrendingUp },
  { path: '/competitive-landscape', label: 'Competition', icon: Target },
  { path: '/financial-projections', label: 'Financials', icon: DollarSign },
  { path: '/customer-segments', label: 'Customers', icon: Users },
  { path: '/pricing', label: 'Pricing', icon: Tag },
  { path: '/equipment', label: 'Equipment', icon: Settings },
  { path: '/hiring-roadmap', label: 'Hiring', icon: UserPlus },
  { path: '/swot-analysis', label: 'SWOT', icon: Shield },
  { path: '/risk-analysis', label: 'Risks', icon: AlertTriangle },
  { path: '/action-plan', label: 'Action Plan', icon: CheckSquare }
];

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-light)',
        zIndex: 1000,
        boxShadow: 'var(--shadow-md)'
      }} className="mobile-top-bar">
        <div style={{ padding: '16px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '20px'
              }}>
                EPS
              </div>
              <div>
                <h1 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                  EPS Foam Business
                </h1>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', margin: 0 }}>
                  Hurstville & Padstow, Sydney
                </p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: 'var(--text-primary)'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {mobileMenuOpen && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px',
              marginTop: '16px',
              padding: '16px',
              background: 'var(--bg-secondary)',
              borderRadius: '12px'
            }}>
              {navItems.map(item => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '13px',
                      fontWeight: '600',
                      background: isActive ? 'var(--primary-blue)' : 'white',
                      color: isActive ? 'white' : 'var(--text-secondary)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <aside style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: sidebarCollapsed ? '80px' : '280px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        borderRight: '1px solid var(--border-light)',
        boxShadow: '2px 0 12px rgba(0, 0, 0, 0.05)',
        zIndex: 1000,
        transition: 'width 0.3s ease',
        overflowY: 'auto',
        overflowX: 'hidden'
      }} className="desktop-sidebar">
        {/* Sidebar Header */}
        <div style={{
          padding: sidebarCollapsed ? '24px 16px' : '24px',
          borderBottom: '1px solid var(--border-light)',
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: sidebarCollapsed ? '0' : '8px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '22px',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              EPS
            </div>
            {!sidebarCollapsed && (
              <div>
                <h1 style={{ fontSize: '18px', fontWeight: '700', color: 'white', margin: 0, lineHeight: '1.2' }}>
                  EPS Foam Business
                </h1>
                <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.85)', margin: '4px 0 0 0' }}>
                  Hurstville & Padstow, Sydney
                </p>
              </div>
            )}
          </div>

          {/* Collapse Toggle Button */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            style={{
              position: 'absolute',
              top: '50%',
              right: '-12px',
              transform: 'translateY(-50%)',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'white',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              color: 'var(--text-secondary)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-blue)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            {sidebarCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav style={{ padding: sidebarCollapsed ? '16px 8px' : '24px 16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  title={sidebarCollapsed ? item.label : ''}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: sidebarCollapsed ? '12px' : '12px 16px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                    background: isActive ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' : 'transparent',
                    color: isActive ? 'white' : 'var(--text-secondary)',
                    position: 'relative',
                    justifyContent: sidebarCollapsed ? 'center' : 'flex-start'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'var(--bg-tertiary)';
                      e.currentTarget.style.color = 'var(--primary-blue)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  <Icon size={20} style={{ flexShrink: 0 }} />
                  {!sidebarCollapsed && <span style={{ whiteSpace: 'nowrap' }}>{item.label}</span>}
                  {isActive && !sidebarCollapsed && (
                    <div style={{
                      position: 'absolute',
                      right: '16px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'white'
                    }} />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>

      <style>{`
        @media (max-width: 1023px) {
          .desktop-sidebar {
            display: none !important;
          }
          .mobile-top-bar {
            display: block !important;
          }
        }

        @media (min-width: 1024px) {
          .mobile-top-bar {
            display: none !important;
          }
          .desktop-sidebar {
            display: block !important;
          }
        }

        /* Custom scrollbar for sidebar */
        .desktop-sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .desktop-sidebar::-webkit-scrollbar-track {
          background: transparent;
        }

        .desktop-sidebar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }

        .desktop-sidebar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default Navigation;
