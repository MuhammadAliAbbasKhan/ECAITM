import React, { useState } from 'react';
import { Search, Download, FileText, Video, BookOpen, Cpu, Shield, ArrowRight, CheckCircle2, Filter, Sparkles } from 'lucide-react';

export default function ResourcesPage({ onOpenDemo }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [downloadModal, setDownloadModal] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = ['All', 'Whitepapers', 'Case Studies', 'Data Sheets', 'Webinars', 'EV-VPP Reports'];

  const resources = [
    {
      id: 1,
      title: 'Direct-to-Chip Two-Phase Liquid Cooling Benchmark Report 2026',
      category: 'Whitepapers',
      type: 'PDF Document (24 Pages)',
      readTime: '12 min read',
      date: 'Q3 2026 Edition',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      summary: 'Comparative thermal analysis of 2-Phase Vaporization vs 1-Phase Liquid Immersion and traditional Air HVAC across 100kW+ GPU server racks.',
      highlights: ['PUE reduction down to 1.04', 'Zero water consumption protocol', 'CapEx & OpEx 5-year TCO breakdown']
    },
    {
      id: 2,
      title: '15MW Texas AI Supercomputing Hub Thermal Retrofit Case Study',
      category: 'Case Studies',
      type: 'Case Study (8 Pages)',
      readTime: '8 min read',
      date: 'August 2026',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      summary: 'How a tier-4 data center eliminated HVAC fan noise, recovered 40% floor space, and boosted H100 cluster throughput by 22% without thermal throttling.',
      highlights: ['0% Thermal Throttling at peak ambient temps', '88% lower cooling electricity overhead', 'Payback period achieved in 14 months']
    },
    {
      id: 3,
      title: 'NeuCool™ In-Rack Vaporization Unit (IVU-500) Data Sheet',
      category: 'Data Sheets',
      type: 'Specification Sheet',
      readTime: '5 min read',
      date: 'July 2026',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
      summary: 'Full engineering specifications for ECAITM’s IVU-500 system including fluid flow rates, pressure tolerances, dielectric fluid specs, and N+1 redundancy.',
      highlights: ['Dual closed-loop architecture', '500kW dissipation capacity per rack', 'Hot-swappable pump module specs']
    },
    {
      id: 4,
      title: 'EV Virtual Power Plant (EV-VPP) Thermal Load Balancing Architecture',
      category: 'EV-VPP Reports',
      type: 'Technical Brief',
      readTime: '10 min read',
      date: 'June 2026',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      summary: 'Integrating high-density EV battery fleet charging with data center liquid cooling thermal mass for automated grid demand-response arbitrage.',
      highlights: ['Smart thermal battery buffering', 'ISO-NE & ERCOT frequency response compliance', 'Up to $4.2M annual grid rebate generation']
    },
    {
      id: 5,
      title: 'Scaling AI Infrastructure to 1,500W TDP per Socket: On-Demand Webinar',
      category: 'Webinars',
      type: 'Video Recording (45 Mins)',
      readTime: '45 min watch',
      date: 'May 2026',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      summary: 'Watch ECAITM thermal physicists demonstrate real-time 1,500W TDP dissipation live on NVIDIA Blackwell GB200 test beds with zero liquid leaks.',
      highlights: ['Live thermal imaging demo', 'Q&A with Lead Thermal Engineers', 'Installation walkthrough']
    },
    {
      id: 6,
      title: 'Die-Level Heat Sink (DLHS) Micro-Channel Vaporization Guide',
      category: 'Data Sheets',
      type: 'Engineering Guide',
      readTime: '7 min read',
      date: 'April 2026',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      summary: 'Deep-dive into 3D micro-etched copper cold plate design, phase-change dielectric liquid physics, and mounting torque parameters.',
      highlights: ['Sub-0.05°C/W thermal impedance', 'Zero water / zero risk dielectric fluid', 'Universal socket compatibility']
    }
  ];

  const filteredResources = resources.filter(res => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesQuery = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         res.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setDownloadModal(null);
    }, 2500);
  };

  return (
    <div className="resources-page" style={{ backgroundColor: '#0B0E14', color: '#F8FAFC', minHeight: '100vh', fontFamily: 'Lato, sans-serif' }}>
      
      {/* HERO SECTION */}
      <section style={{
        paddingTop: '90px',
        paddingBottom: '80px',
        backgroundImage: 'linear-gradient(180deg, #090C13 0%, #0F172A 100%)',
        borderBottom: '1px solid rgba(30, 41, 59, 0.8)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 196, 238, 0.12) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '50px',
            backgroundColor: 'rgba(0, 196, 238, 0.1)',
            border: '1px solid rgba(0, 196, 238, 0.3)',
            color: '#00C4EE',
            fontSize: '0.85rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '20px'
          }}>
            <Sparkles size={14} /> Knowledge & Engineering Hub
          </span>

          <h1 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'calc(32px + 1.8vw)',
            fontWeight: 800,
            lineHeight: '1.2',
            color: '#FFFFFF',
            marginBottom: '20px'
          }}>
            ECAITM Technical Resources & Reports
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: '#94A3B8',
            maxWidth: '820px',
            margin: '0 auto 40px auto',
            lineHeight: '1.6'
          }}>
            Explore peer-reviewed whitepapers, real-world data center case studies, engineering data sheets, and EV-VPP thermal optimization frameworks.
          </p>

          {/* Search & Filter Bar */}
          <div style={{
            maxWidth: '750px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{
              position: 'relative',
              width: '100%'
            }}>
              <Search style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#64748B',
                width: '20px',
                height: '20px'
              }} />
              <input 
                type="text"
                placeholder="Search whitepapers, case studies, TDP specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 20px 16px 54px',
                  borderRadius: '12px',
                  backgroundColor: '#1E293B',
                  border: '1px solid rgba(51, 65, 85, 0.8)',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  outline: 'none',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.2s ease'
                }}
              />
            </div>

            {/* Filter Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px'
            }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '30px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: selectedCategory === cat ? '1px solid #00C4EE' : '1px solid rgba(51, 65, 85, 0.6)',
                    backgroundColor: selectedCategory === cat ? 'rgba(0, 196, 238, 0.15)' : '#1E293B',
                    color: selectedCategory === cat ? '#00C4EE' : '#94A3B8'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED RESOURCE CARD */}
      <section style={{ padding: '60px 20px 20px 20px' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#1E293B',
            borderRadius: '16px',
            border: '1px solid rgba(0, 196, 238, 0.3)',
            padding: '36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}>
            <div>
              <span style={{
                backgroundColor: '#00C4EE',
                color: '#090C13',
                fontSize: '0.75rem',
                fontWeight: '900',
                padding: '4px 12px',
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                FEATURED WHITEPAPER
              </span>
              <h2 style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: '16px 0 12px 0',
                lineHeight: '1.3'
              }}>
                Direct-to-Chip 2-Phase Cooling Benchmark: Achieving 100kW+ Per Rack
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                Comprehensive analysis on liquid vaporization cooling vs traditional air and single-phase immersion methods for next-gen AI clusters.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setDownloadModal(resources[0])}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    backgroundColor: '#00C4EE',
                    color: '#090C13',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Download size={18} /> Download Free PDF
                </button>
                {onOpenDemo && (
                  <button
                    onClick={onOpenDemo}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      backgroundColor: 'transparent',
                      color: '#FFFFFF',
                      fontWeight: '600',
                      border: '1px solid #475569',
                      cursor: 'pointer'
                    }}
                  >
                    Request Demo Access <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                alt="Whitepaper Preview" 
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCE CARDS GRID */}
      <section style={{ padding: '60px 20px 100px 20px' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px'
          }}>
            <h3 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#FFFFFF'
            }}>
              {selectedCategory === 'All' ? 'All Technical Resources' : `${selectedCategory}`} ({filteredResources.length})
            </h3>
          </div>

          {filteredResources.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#1E293B',
              borderRadius: '12px',
              color: '#94A3B8'
            }}>
              <BookOpen size={48} style={{ margin: '0 auto 16px auto', color: '#64748B' }} />
              <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '8px' }}>No matching resources found</h4>
              <p>Try searching for terms like "whitepaper", "TDP", "IVU-500", or reset filters.</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '28px'
            }}>
              {filteredResources.map(item => (
                <div 
                  key={item.id}
                  style={{
                    backgroundColor: '#1E293B',
                    borderRadius: '12px',
                    border: '1px solid rgba(51, 65, 85, 0.8)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => setDownloadModal(item)}
                >
                  <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(15, 23, 42, 0.85)',
                      color: '#00C4EE',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(0, 196, 238, 0.3)'
                    }}>
                      {item.category}
                    </span>
                  </div>

                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748B', marginBottom: '10px' }}>
                      <span>{item.type}</span>
                      <span>{item.date}</span>
                    </div>

                    <h4 style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1.15rem',
                      fontWeight: '700',
                      color: '#FFFFFF',
                      lineHeight: '1.4',
                      marginBottom: '12px'
                    }}>
                      {item.title}
                    </h4>

                    <p style={{
                      fontSize: '0.9rem',
                      color: '#94A3B8',
                      lineHeight: '1.5',
                      marginBottom: '16px',
                      flex: 1
                    }}>
                      {item.summary}
                    </p>

                    <div style={{ marginBottom: '20px' }}>
                      {item.highlights.map((hl, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '6px' }}>
                          <CheckCircle2 size={14} style={{ color: '#00C4EE', flexShrink: 0 }} />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDownloadModal(item);
                      }}
                      style={{
                        width: '100%',
                        padding: '10px 16px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(0, 196, 238, 0.1)',
                        border: '1px solid rgba(0, 196, 238, 0.4)',
                        color: '#00C4EE',
                        fontWeight: '700',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Download size={16} /> Access Document
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DOWNLOAD / ACCESS MODAL */}
      {downloadModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(9, 12, 19, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#0F172A',
            borderRadius: '16px',
            border: '1px solid #1E293B',
            maxWidth: '520px',
            width: '100%',
            padding: '32px',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
          }}>
            <button
              onClick={() => setDownloadModal(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                color: '#94A3B8',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <CheckCircle2 size={64} style={{ color: '#10B981', margin: '0 auto 16px auto' }} />
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '8px' }}>
                  Document Requested!
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>
                  The PDF specification package for <strong>{downloadModal.title}</strong> has been sent to your business email.
                </p>
              </div>
            ) : (
              <div>
                <span style={{
                  color: '#00C4EE',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  DOWNLOAD TECHNICAL SPECIFICATION
                </span>
                <h3 style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: '8px 0 16px 0',
                  lineHeight: '1.3'
                }}>
                  {downloadModal.title}
                </h3>

                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#94A3B8', marginBottom: '4px' }}>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John Doe"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        backgroundColor: '#1E293B',
                        border: '1px solid #334155',
                        color: '#FFFFFF',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#94A3B8', marginBottom: '4px' }}>Enterprise Email *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@datacenter.com"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        backgroundColor: '#1E293B',
                        border: '1px solid #334155',
                        color: '#FFFFFF',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#94A3B8', marginBottom: '4px' }}>Organization / Data Center</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Hyperscale Infra LLC"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        backgroundColor: '#1E293B',
                        border: '1px solid #334155',
                        color: '#FFFFFF',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      marginTop: '10px',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      backgroundColor: '#00C4EE',
                      color: '#090C13',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.95rem'
                    }}
                  >
                    Download Technical Package (PDF)
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export { ResourcesPage };
