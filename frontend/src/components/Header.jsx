import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, User, Zap, Shield, PhoneCall, BookOpen, Star, LogOut } from 'lucide-react';

export const Header = ({ currentPage, setCurrentPage, onOpenAuth, onOpenDemo }) => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkUserStatus = () => {
      const storedUser = localStorage.getItem('ecaitm_user');
      const storedSub = localStorage.getItem('ecaitm_active_subscription');
      
      if (storedUser) {
        try {
          const parsed = JSON.parse(storedUser);
          setUser(parsed);
          setIsPaid(parsed.is_paid || !!storedSub);
        } catch (e) {
          setUser(null);
          setIsPaid(false);
        }
      } else {
        setUser(null);
        setIsPaid(false);
      }
    };

    checkUserStatus();
    const interval = setInterval(checkUserStatus, 1500);
    return () => clearInterval(interval);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    setResourcesOpen(false);
    setCompanyOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = () => {
    localStorage.removeItem('ecaitm_user');
    localStorage.removeItem('ecaitm_token');
    localStorage.removeItem('ecaitm_active_subscription');
    setUser(null);
    setIsPaid(false);
    navigate('home');
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: scrolled
            ? 'linear-gradient(180deg, rgba(9, 12, 19, 0.98) 0%, rgba(15, 21, 32, 0.96) 100%)'
            : 'linear-gradient(180deg, rgba(11, 14, 20, 0.92) 0%, rgba(18, 24, 38, 0.88) 100%)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(30, 41, 59, 0.8)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container-xl" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo Section */}
          <div
            onClick={() => navigate('home')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="6" r="2.5" fill="#00C4EE" />
              <circle cx="14" cy="14" r="2.5" fill="#00C4EE" />
              <circle cx="26" cy="14" r="2.5" fill="#00C4EE" />
              <circle cx="8" cy="22" r="2.5" fill="#00C4EE" />
              <circle cx="20" cy="22" r="2.5" fill="#FFD100" />
              <circle cx="32" cy="22" r="2.5" fill="#00C4EE" />
              <circle cx="4" cy="30" r="2.5" fill="#00C4EE" />
              <circle cx="12" cy="30" r="2.5" fill="#00C4EE" />
              <circle cx="20" cy="30" r="2.5" fill="#00C4EE" />
              <circle cx="28" cy="30" r="2.5" fill="#00C4EE" />
              <circle cx="36" cy="30" r="2.5" fill="#00C4EE" />
            </svg>

            <span
              style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                fontFamily: "'Outfit', sans-serif",
                display: 'flex',
                alignItems: 'center',
              }}
            >
              ECAITM
              <span style={{ color: '#FFD100', fontSize: '1rem', verticalAlign: 'super', marginLeft: '2px' }}>®</span>
            </span>
          </div>

          {/* Nav Links - Desktop */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="hidden-mobile">
            
            {/* Solutions */}
            <button
              onClick={() => navigate('solutions')}
              style={{
                background: 'none',
                color: currentPage === 'solutions' ? '#00C4EE' : '#E2E8F0',
                fontSize: '0.95rem',
                fontWeight: currentPage === 'solutions' ? '700' : '500',
                borderBottom: currentPage === 'solutions' ? '2px solid #00C4EE' : '2px solid transparent',
                padding: '6px 0',
                transition: 'all 0.2s ease',
              }}
            >
              Solutions
            </button>

            {/* Partners */}
            <button
              onClick={() => navigate('partners')}
              style={{
                background: 'none',
                color: currentPage === 'partners' ? '#00C4EE' : '#E2E8F0',
                fontSize: '0.95rem',
                fontWeight: currentPage === 'partners' ? '700' : '500',
                borderBottom: currentPage === 'partners' ? '2px solid #00C4EE' : '2px solid transparent',
                padding: '6px 0',
                transition: 'all 0.2s ease',
              }}
            >
              Partners
            </button>

            {/* Services */}
            <button
              onClick={() => navigate('services')}
              style={{
                background: 'none',
                color: currentPage === 'services' ? '#00C4EE' : '#E2E8F0',
                fontSize: '0.95rem',
                fontWeight: currentPage === 'services' ? '700' : '500',
                borderBottom: currentPage === 'services' ? '2px solid #00C4EE' : '2px solid transparent',
                padding: '6px 0',
                transition: 'all 0.2s ease',
              }}
            >
              Services
            </button>

            {/* DYNAMIC PAID SERVICES TAB (SHOWN WHEN USER HAS PAID FOR THE MONTH) */}
            {user && isPaid && (
              <button
                onClick={() => navigate('paid-services')}
                style={{
                  background: 'rgba(16, 185, 129, 0.18)',
                  color: '#10B981',
                  border: '1px solid rgba(16, 185, 129, 0.5)',
                  borderRadius: '20px',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  padding: '5px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 0 12px rgba(16, 185, 129, 0.3)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Star style={{ width: '14px', height: '14px', fill: '#10B981' }} /> Paid Services
              </button>
            )}

            {/* Resources Dropdown */}
            <div style={{ position: 'relative' }} onMouseLeave={() => setResourcesOpen(false)}>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                onMouseEnter={() => setResourcesOpen(true)}
                style={{
                  background: 'none',
                  color: ['evvpp', 'blog', 'resources', 'pricing'].includes(currentPage) ? '#00C4EE' : '#E2E8F0',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 0',
                }}
              >
                Resources <ChevronDown style={{ width: '15px', height: '15px', transform: resourcesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {resourcesOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '210px',
                    background: '#0F172A',
                    border: '1px solid #1E293B',
                    borderRadius: '8px',
                    padding: '8px 0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    zIndex: 1000,
                  }}
                >
                  <button
                    onClick={() => navigate('resources')}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 16px',
                      color: currentPage === 'resources' ? '#00C4EE' : '#CBD5E1',
                      background: 'none',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    className="hover:bg-slate-800"
                  >
                    <BookOpen className="w-4 h-4 text-cyan-400" /> Technical Resources
                  </button>
                  <button
                    onClick={() => navigate('evvpp')}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 16px',
                      color: currentPage === 'evvpp' ? '#00C4EE' : '#CBD5E1',
                      background: 'none',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    className="hover:bg-slate-800"
                  >
                    <Zap className="w-4 h-4 text-cyan-400" /> EV VPP Platform
                  </button>
                  <button
                    onClick={() => navigate('blog')}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 16px',
                      color: currentPage === 'blog' ? '#00C4EE' : '#CBD5E1',
                      background: 'none',
                      fontSize: '0.9rem',
                    }}
                    className="hover:bg-slate-800"
                  >
                    News & Blog
                  </button>
                  <button
                    onClick={() => navigate('pricing')}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 16px',
                      color: currentPage === 'pricing' ? '#00C4EE' : '#CBD5E1',
                      background: 'none',
                      fontSize: '0.9rem',
                    }}
                    className="hover:bg-slate-800"
                  >
                    Pricing & Plans
                  </button>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div style={{ position: 'relative' }} onMouseLeave={() => setCompanyOpen(false)}>
              <button
                onClick={() => setCompanyOpen(!companyOpen)}
                onMouseEnter={() => setCompanyOpen(true)}
                style={{
                  background: 'none',
                  color: ['ourmission', 'thermal', 'admin'].includes(currentPage) ? '#00C4EE' : '#E2E8F0',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 0',
                }}
              >
                Company <ChevronDown style={{ width: '15px', height: '15px', transform: companyOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {companyOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '210px',
                    background: '#0F172A',
                    border: '1px solid #1E293B',
                    borderRadius: '8px',
                    padding: '8px 0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    zIndex: 1000,
                  }}
                >
                  <button
                    onClick={() => navigate('ourmission')}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 16px',
                      color: currentPage === 'ourmission' ? '#00C4EE' : '#CBD5E1',
                      background: 'none',
                      fontSize: '0.9rem',
                    }}
                  >
                    Our Mission
                  </button>
                  <button
                    onClick={() => navigate('thermal')}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 16px',
                      color: currentPage === 'thermal' ? '#00C4EE' : '#CBD5E1',
                      background: 'none',
                      fontSize: '0.9rem',
                    }}
                  >
                    Thermal Technology
                  </button>
                  <button
                    onClick={() => navigate('admin')}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 16px',
                      color: currentPage === 'admin' ? '#00C4EE' : '#CBD5E1',
                      background: 'none',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Shield className="w-4 h-4 text-cyan-400" /> Executive Admin Portal
                  </button>
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => navigate('contact')}
              style={{
                background: 'none',
                color: currentPage === 'contact' ? '#00C4EE' : '#E2E8F0',
                fontSize: '0.95rem',
                fontWeight: currentPage === 'contact' ? '700' : '500',
                borderBottom: currentPage === 'contact' ? '2px solid #00C4EE' : '2px solid transparent',
                padding: '6px 0',
                transition: 'all 0.2s ease',
              }}
            >
              Contact
            </button>
          </nav>

          {/* Header Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {isPaid ? (
                  <button
                    onClick={() => navigate('paid-services')}
                    style={{
                      backgroundColor: '#10B981',
                      color: '#090C13',
                      fontWeight: '800',
                      padding: '7px 16px',
                      borderRadius: '6px',
                      fontSize: '0.88rem',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    ★ Paid Services
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('pricing')}
                    style={{
                      backgroundColor: '#FFD100',
                      color: '#090C13',
                      fontWeight: '800',
                      padding: '7px 16px',
                      borderRadius: '6px',
                      fontSize: '0.88rem',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Upgrade Plan
                  </button>
                )}

                <button
                  onClick={handleSignOut}
                  style={{
                    background: 'transparent',
                    color: '#94A3B8',
                    border: '1px solid #334155',
                    borderRadius: '6px',
                    padding: '7px 14px',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer'
                  }}
                  title="Sign Out"
                >
                  <LogOut size={14} /> Sign Out ({user.username || user.email.split('@')[0]})
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={onOpenAuth}
                  style={{
                    background: 'transparent',
                    color: '#E2E8F0',
                    border: '1px solid #334155',
                    borderRadius: '6px',
                    padding: '7px 16px',
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer'
                  }}
                >
                  <User style={{ width: '15px', height: '15px' }} /> Sign In
                </button>

                <button
                  onClick={onOpenAuth}
                  className="btn-primary"
                  style={{
                    padding: '7px 18px',
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: '#1E293B',
                color: '#FFFFFF',
                padding: '8px',
                borderRadius: '6px',
                display: 'none',
              }}
              className="show-mobile-btn"
            >
              {mobileMenuOpen ? <X style={{ width: '20px', height: '20px' }} /> : <Menu style={{ width: '20px', height: '20px' }} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: '#0D111A',
              borderBottom: '1px solid #1E293B',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <button onClick={() => navigate('solutions')} style={{ color: '#FFFFFF', textAlign: 'left', background: 'none', fontSize: '1rem', fontWeight: '600' }}>Solutions</button>
            <button onClick={() => navigate('partners')} style={{ color: '#FFFFFF', textAlign: 'left', background: 'none', fontSize: '1rem', fontWeight: '600' }}>Partners</button>
            <button onClick={() => navigate('services')} style={{ color: '#FFFFFF', textAlign: 'left', background: 'none', fontSize: '1rem', fontWeight: '600' }}>Services</button>
            {user && isPaid && (
              <button onClick={() => navigate('paid-services')} style={{ color: '#10B981', textAlign: 'left', background: 'none', fontSize: '1rem', fontWeight: '700' }}>★ Paid Services Portal</button>
            )}
            <button onClick={() => navigate('pricing')} style={{ color: '#FFD100', textAlign: 'left', background: 'none', fontSize: '1rem', fontWeight: '600' }}>Pricing & Plans</button>
            {!user ? (
              <button onClick={onOpenAuth} style={{ color: '#00C4EE', textAlign: 'left', background: 'none', fontSize: '1rem', fontWeight: '700' }}>Sign Up / Sign In</button>
            ) : (
              <button onClick={handleSignOut} style={{ color: '#EF4444', textAlign: 'left', background: 'none', fontSize: '1rem', fontWeight: '600' }}>Sign Out ({user.username})</button>
            )}
          </div>
        )}
      </header>
    </>
  );
};
