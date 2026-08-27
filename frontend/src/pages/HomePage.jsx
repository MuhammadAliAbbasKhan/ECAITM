// src/pages/HomePage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef(null);
  const partnerVideoRef = useRef(null);

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      desktop: 'https://accelsius.com/wp-content/uploads/hero_video_home_page.mp4',
      title: 'Revolutionary Liquid Cooling<br>Is Here',
      mobileImage: 'https://accelsius.com/wp-content/uploads/hero_video_home_page.mp4'
    }
  ];

  // Tab data
  const tabs = [
    {
      id: 'tab1',
      title: 'Industry Standard for Chip-Level Cooling',
      image: 'https://accelsius.com/wp-content/uploads/Untitled-design-7.jpg',
      heading: 'Industry standard for chip-level cooling',
      content: (
        <>
          <p>Our two-phase direct-to-chip solution cools a <strong>record-setting 4500W+ per socket.</strong> It also features an <strong>industry-leading 0.020°C/W thermal resistance</strong> at a 700W+ TDP.</p>
          <p>Combined, these metrics prove that NeuCool is <strong>easily able to handle the TDPs of future GPUs and CPUs</strong>, extending the runway for AI infrastructure growth without forcing operators into costly facility redesigns.</p>
        </>
      ),
      cta: 'Explore More  >',
      ctaLink: 'https://accelsius.com/solutions/'
    },
    {
      id: 'tab2',
      title: 'Mission Critical Design',
      image: 'https://accelsius.com/wp-content/uploads/Mission-Critical-Design-Home-Page-Image.jpg',
      heading: 'Mission Critical Design',
      content: (
        <>
          <p>The NeuCool system is built to last — with the most robust and reliable materials and components — prioritizing maximum uptime, ease of deployment, and serviceability by onsite technicians — greatly reducing the need for special training.</p>
          <p>Resiliency is designed-in with redundant, hot-swappable power supplies, sensors, pumps and core logic board.</p>
          <p>We pride ourselves on leak avoidance. The engineered refrigerant we use will not cause damage to IT equipment. And our redundant leak detection sensors and mitigation protocols add even more protection.</p>
        </>
      ),
      cta: 'Explore More  >',
      ctaLink: 'https://accelsius.com/solutions/'
    },
    {
      id: 'tab3',
      title: 'Non-Conductive Refrigerant',
      image: 'https://accelsius.com/wp-content/uploads/Non-conductive-refrigerant.jpg',
      heading: 'Non-conductive refrigerant',
      content: (
        <>
          <p data-pm-slice="1 1 []">We use a commercially available dielectric refrigerant that <strong>causes zero damage to electronics</strong> in case of leaks, unlike single-phase alternatives.</p>
          <p>AI investments cost hundreds of millions of dollars. Data center insurance costs have increased for facilities with water-based cooling. With our non-conductive refrigerant, NeuCool becomes a <strong>powerful tool to reduce your premiums and exposure</strong>.</p>
        </>
      ),
      cta: 'Explore More  >',
      ctaLink: 'https://accelsius.com/solutions/'
    },
    {
      id: 'tab4',
      title: 'TCO Savings of 8-17%',
      image: 'https://accelsius.com/wp-content/uploads/Facility-3D-View.png',
      heading: 'TCO Savings of 8-17%',
      content: (
        <>
          <p>Jacobs Engineering has created reference designs for a 10MW data center cooled by single-phase vs. two-phase D2C. The designs highlighted NeuCool's streamlined design and superior thermal performance, reducing needless cost and complexity.</p>
          <p>Our NeuCool solution delivers substantial energy and financial savings throughout your data center's lifecycle. Or, put that power to use and deploy 5% more GPUs in the same power envelope.</p>
          <p>Overall, the results speak for themselves: compared to single-phase, our technology offers 35–44% savings in annual OpEx and 5-year TCO savings of 8-17%*. For a detailed review, please reach out to your Accelsius contact.</p>
        </>
      ),
      cta: 'View the Key Takeaways >',
      ctaLink: 'https://accelsius.com/wp-content/uploads/Jacobs-TCO-Infographic-V121725.pdf',
      footnote: '*TCO savings over five years and varies by region.'
    }
  ];

  // Partners data
  const partners = [
    { name: 'Valcom', logo: 'https://accelsius.com/wp-content/uploads/Valcom.png', width: 134, height: 68 },
    { name: 'Upstak', logo: 'https://accelsius.com/wp-content/uploads/Upstak.png', width: 301, height: 68 },
    { name: 'University of Texas at Arlington', logo: 'https://accelsius.com/wp-content/uploads/University-of-Texas-at-Arlington.png', width: 154, height: 68 },
    { name: 'Triton Thermal Solutions', logo: 'https://accelsius.com/wp-content/uploads/Triton-Thermal-Solutions.png', width: 200, height: 68 },
    { name: 'RISE', logo: 'https://accelsius.com/wp-content/uploads/RISE.png', width: 158, height: 68 },
    { name: 'Protective Power Systems Controls', logo: 'https://accelsius.com/wp-content/uploads/Protective-Power-Systems-Controls.png', width: 125, height: 68 },
    { name: 'One Technology', logo: 'https://accelsius.com/wp-content/uploads/One-Technology.png', width: 119, height: 68 },
    { name: 'Munters', logo: 'https://accelsius.com/wp-content/uploads/Munters.png', width: 355, height: 68 },
    { name: 'MKA Critical Power', logo: 'https://accelsius.com/wp-content/uploads/MKA-Critical-Power.png', width: 130, height: 121 },
    { name: 'Johnson Controls', logo: 'https://accelsius.com/wp-content/uploads/Johnson-Controls.png', width: 156, height: 68 },
    { name: 'DarkNX', logo: 'https://accelsius.com/wp-content/uploads/DarkNX-1.png', width: 230, height: 68 },
    { name: 'Blackstar Diversified Enterprises', logo: 'https://accelsius.com/wp-content/uploads/Blackstar-Diversified-Enterprises.png', width: 148, height: 121 },
    { name: 'Binghamton', logo: 'https://accelsius.com/wp-content/uploads/Binghamton.png', width: 151, height: 68 },
    { name: 'Equinix', logo: 'https://accelsius.com/wp-content/uploads/Equinix-Logo-Standard01.jpg', width: 318, height: 70 },
    { name: 'Ambient', logo: 'https://accelsius.com/wp-content/uploads/Ambient.png', width: 150, height: 50 },
    { name: 'Wyoming', logo: 'https://accelsius.com/wp-content/uploads/Wyoming.png', width: 250, height: 55 },
    { name: 'Computacenter', logo: 'https://accelsius.com/wp-content/uploads/Computacenter_100.png', width: 196, height: 100 },
    { name: 'WESCO', logo: 'https://accelsius.com/wp-content/uploads/WESCO_Logo_RGB.png', width: 160, height: 121 },
    { name: 'Tubbesing Partners', logo: 'https://accelsius.com/wp-content/uploads/Tubbesing-Partners-1.png', width: 216, height: 121 },
    { name: 'TSS', logo: 'https://accelsius.com/wp-content/uploads/TSS_logo-1.png', width: 117, height: 60 },
    { name: 'Telehouse', logo: 'https://accelsius.com/wp-content/uploads/Telehouse-Strap-Logo-Navy-1.png', width: 318, height: 68 },
    { name: 'Sphaera', logo: 'https://accelsius.com/wp-content/uploads/Sphaera-Colored-Logo_Vertical@2x-1.png', width: 137, height: 121 },
    { name: 'NETP', logo: 'https://accelsius.com/wp-content/uploads/NETP-Logo-1.png', width: 400, height: 80 },
    { name: 'iM Data Centers', logo: 'https://accelsius.com/wp-content/uploads/iM-Data-Centers-logo.png', width: 411, height: 80 },
    { name: 'BITS', logo: 'https://accelsius.com/wp-content/uploads/BITS-logo2-1-1-1.png', width: 188, height: 66 },
    { name: 'ECS', logo: 'https://accelsius.com/wp-content/uploads/ECS-logo.png', width: 117, height: 60 },
    { name: 'Compu Dynamics', logo: 'https://accelsius.com/wp-content/uploads/Compu-Dynamics-Logo-1.png', width: 398, height: 100 },
    { name: 'Nordik', logo: 'https://accelsius.com/wp-content/uploads/Nordik_Logo.png', width: 272, height: 98 },
    { name: 'Opticool', logo: 'https://accelsius.com/wp-content/uploads/Opticool-logo-1.png', width: 253, height: 52 },
    { name: 'Silverback', logo: 'https://accelsius.com/wp-content/uploads/Silverback60-logo.png', width: 382, height: 51 },
    { name: 'TACC', logo: 'https://accelsius.com/wp-content/uploads/TACC-logo.png', width: 197, height: 51 },
    { name: 'Unicom', logo: 'https://accelsius.com/wp-content/uploads/Unicom-logo-60.png', width: 411, height: 51 },
    { name: 'AVNET', logo: 'https://accelsius.com/wp-content/uploads/AVNET_Logo.png', width: 298, height: 61 },
    { name: 'Sycomp', logo: 'https://accelsius.com/wp-content/uploads/Sycomp-1.png', width: 240, height: 61 }
  ];

  // Featured partners (top row)
  const featuredPartners = [
    { name: 'Legrand', logo: 'https://accelsius.com/wp-content/uploads/Legrand-logo-1.svg', width: 699, height: 53 },
    { name: 'Johnson Controls', logo: 'https://accelsius.com/wp-content/uploads/Johnson_Controls.svg-1.svg', width: 699, height: 53 }
  ];

  // Chip partners
  const chipPartners = [
    { name: 'NVIDIA', logo: 'https://accelsius.com/wp-content/uploads/Nvidia_Logo.svg' },
    { name: 'AMD', logo: 'https://accelsius.com/wp-content/uploads/AMD_Logo.svg' },
    { name: 'Dell Technologies', logo: 'https://accelsius.com/wp-content/uploads/Dell_Technologies.svg' }
  ];

  // Auto-slide for hero (video is static, no auto-slide needed)

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [tabs.length]);

  // Partner slider - infinite scroll effect with duplicate items
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <main style={{ background: 'white', fontFamily: 'Inter, sans-serif' }}>
      
      {/* ===== HERO SECTION ===== */}
      <section style={{
        position: 'relative',
        background: '#00001e',
        backgroundImage: 'url("https://accelsius.com/wp-content/uploads/Bg-1.jpg")',
        backgroundSize: 'cover',
        padding: '35px 15px',
        width: '100%',
        maxWidth: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Hero Container */}
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* Heading */}
          <h1 style={{
            fontSize: '62px',
            lineHeight: '83px',
            fontWeight: 700,
            color: '#ffffff',
            fontFamily: 'Montserrat, sans-serif',
            textAlign: 'center',
            marginBottom: '10px'
          }}>
            Two-phase, direct-to-chip liquid cooling <br />
            <span style={{ color: '#97D700' }}>designed for the mission critical.</span>
          </h1>

          {/* Product Image */}
          <div style={{ width: '100%', maxWidth: '100%', textAlign: 'center', marginTop: '20px' }}>
            <img 
              src="https://accelsius.com/wp-content/uploads/HC-qR_uw-1-1.png"
              alt="NeuCool Product"
              style={{ 
                width: 'auto',
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '600px',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Stats Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            width: '100%',
            maxWidth: '100%',
            marginTop: '25px',
            padding: '0',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '25px'
          }}>
            {/* Stat 1 */}
            <div style={{
              textAlign: 'center',
              padding: '0 1rem'
            }}>
              <h3 style={{
                fontSize: '25px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: '30px',
                margin: 0
              }}>
                4500W+
              </h3>
              <p style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                color: '#ffffff',
                lineHeight: '32px',
                margin: 0
              }}>
                per socket cooled
              </p>
            </div>

            {/* Stat 2 */}
            <div style={{
              textAlign: 'center',
              padding: '0 1rem'
            }}>
              <h3 style={{
                fontSize: '25px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: '30px',
                margin: 0
              }}>
                ITE-safe and<br /> environmentally responsible
              </h3>
              <p style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                color: '#ffffff',
                lineHeight: '32px',
                margin: 0
              }}>
                commercially available refrigerant
              </p>
            </div>

            {/* Stat 3 */}
            <div style={{
              textAlign: 'center',
              padding: '0 1rem'
            }}>
              <h3 style={{
                fontSize: '25px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: '30px',
                margin: 0
              }}>
                35% lower annual OpEx
              </h3>
              <p style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                color: '#ffffff',
                lineHeight: '32px',
                margin: 0
              }}>
                vs. single-phase direct-to-chip
              </p>
            </div>

            {/* Stat 4 - Button */}
            <div style={{
              textAlign: 'center',
              padding: '0 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <a
                href="https://go.accelsius.com/discover-our-neucool-products"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 2rem',
                  background: 'rgba(255,255,255,0)',
                  color: '#ffffff',
                  border: '4px solid #ffffff',
                  borderRadius: '10px',
                  fontSize: '22px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#ffffff';
                  e.target.style.color = '#0066FF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0)';
                  e.target.style.color = '#ffffff';
                }}
              >
                Discover NeuCool®
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO SECTION ===== */}
      <section style={{
        padding: '70px 15px',
        background: '#ffffff',
        backgroundImage: 'url("https://accelsius.com/wp-content/uploads/Background_Texture.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: 'cover'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '50px'
        }}>
          {/* Left - Video */}
          <div style={{ width: '55%' }}>
            <div style={{
              border: '12px solid #f7f7f7',
              borderRadius: '0',
              overflow: 'hidden',
              position: 'relative',
              height: '444px',
              width: '100%',
              background: '#000'
            }}>
              <video
                ref={videoRef}
                src="https://accelsius.com/wp-content/uploads/Accelsius_250_150_2026-1.mp4"
                controls
                muted
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                poster="https://accelsius.com/wp-content/uploads/Thumbnail.jpg"
              />
              {/* Play button overlay (will show when video isn't playing) */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.play();
                  }
                }}
              >
                <div style={{
                  width: '100px',
                  height: '100px',
                  border: '2px solid #fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'ripple-animation 2.5s infinite',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    border: '2px solid #fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    animation: 'ripple-animation 2.5s infinite'
                  }}>
                    <svg width="40" height="40" viewBox="0 0 128 128" fill="none">
                      <circle cx="64" cy="64" r="39" fill="white" />
                      <path d="M74.295 63.2453C74.7763 63.6384 74.7863 64.3706 74.316 64.7767L60.5327 76.6774C59.8896 77.2327 58.8909 76.7838 58.8793 75.9342L58.5584 52.5149C58.5467 51.6653 59.5328 51.1892 60.1908 51.7267L74.295 63.2453Z" fill="#1D215F" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <img 
              src="https://accelsius.com/wp-content/uploads/Frame.png" 
              alt="Accelsius"
              style={{ width: '100%', maxWidth: '699px', height: 'auto', marginTop: '10px' }}
            />
          </div>

          {/* Right - Content */}
          <div style={{ width: '40%', alignSelf: 'center' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              lineHeight: '60px',
              color: '#1d1c4e'
            }}>
              Meet NeuCool<sup></sup>
            </h2>
            <p style={{
              fontSize: '22px',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              lineHeight: '32px',
              color: '#404040',
              paddingRight: '80px',
              margin: 0
            }}>
              Check out the technology behind our revolutionary NeuCool<sup>&nbsp;</sup>system, powered by Accelsius.
            </p>
            <a
              href="https://accelsius.com/solutions/"
              style={{
                display: 'inline-block',
                marginTop: '30px',
                padding: '0.75rem 1.5rem',
                background: '#2e3192',
                color: '#ffffff',
                borderRadius: '10px',
                fontSize: '18px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                lineHeight: '32px',
                textDecoration: 'none',
                transition: 'background 0.5s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#000000'}
              onMouseLeave={(e) => e.target.style.background = '#2e3192'}
            >
              Ready to Learn More &gt;
            </a>
          </div>
        </div>
      </section>

      {/* ===== ACCELSIUS DIFFERENCE SECTION ===== */}
      <section style={{
        padding: '74px 15px 128px 15px',
        background: 'linear-gradient(90deg, #026490, #1d215f)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <h3 style={{
            fontSize: '44px',
            color: '#ffffff',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '60px',
            textAlign: 'center'
          }}>
            Experience the Accelsius Difference
          </h3>
        </div>
      </section>

      {/* ===== TABS SECTION ===== */}
      <section style={{
        padding: '3rem 15px 128px 15px',
        background: '#f8f8f8'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '20px',
            marginTop: '-51px',
            flexWrap: 'wrap'
          }}>
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(index)}
                style={{
                  padding: '39px 32px',
                  background: index === activeTab ? '#ffffff' : '#ffffff',
                  fontSize: '20px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  lineHeight: '26px',
                  border: index === activeTab ? '2px solid #2e3192' : '2px solid rgba(0,0,0,0.12)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  flex: 1,
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  minWidth: '180px',
                  color: index === activeTab ? '#1d1c4e' : '#1d1c4e'
                }}
              >
                {tab.title}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ marginTop: '116px' }}>
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                style={{
                  display: index === activeTab ? 'block' : 'none'
                }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '50px'
                }}>
                  {/* Image */}
                  <div style={{ width: '50%' }}>
                    <img 
                      src={tab.image}
                      alt={tab.heading}
                      style={{ width: '100%', height: 'auto', borderRadius: '0' }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ width: '50%' }}>
                    <h4 style={{
                      fontSize: '40px',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      lineHeight: '50px',
                      color: '#1d1c4e'
                    }}>
                      {tab.heading}
                    </h4>
                    <div style={{
                      fontSize: '22px',
                      fontFamily: 'Lato, sans-serif',
                      fontWeight: 400,
                      lineHeight: '40px',
                      marginTop: '35px',
                      color: '#4B5563'
                    }}>
                      {tab.content}
                    </div>
                    {tab.footnote && (
                      <div style={{
                        fontSize: '22px',
                        fontFamily: 'Lato, sans-serif',
                        fontWeight: 400,
                        lineHeight: '40px',
                        marginTop: '35px',
                        color: '#4B5563'
                      }}>
                        {tab.footnote}
                      </div>
                    )}
                    <a
                      href={tab.ctaLink}
                      target={tab.ctaLink.includes('pdf') ? '_blank' : '_self'}
                      rel={tab.ctaLink.includes('pdf') ? 'noopener noreferrer' : ''}
                      style={{
                        display: 'inline-block',
                        marginTop: '40px',
                        padding: '0.75rem 1.5rem',
                        background: '#2e3192',
                        color: '#ffffff',
                        borderRadius: '10px',
                        fontSize: '18px',
                        fontFamily: 'Lato, sans-serif',
                        fontWeight: 700,
                        lineHeight: '32px',
                        textDecoration: 'none',
                        transition: 'background 0.5s'
                      }}
                      onMouseEnter={(e) => e.target.style.background = '#000000'}
                      onMouseLeave={(e) => e.target.style.background = '#2e3192'}
                    >
                      {tab.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERING FOR SCALE ===== */}
      <section style={{ padding: '100px 15px 0 15px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '48px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '60px',
            color: '#1d1c4e'
          }}>
            Partnering For Scale
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '200px',
            marginTop: '20px',
            flexWrap: 'wrap'
          }}>
            <a href="https://www.legrand.us/critical-power-and-infrastructure/data-center-cooling/two-phase-direct-to-chip" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://accelsius.com/wp-content/uploads/Legrand-logo-1.svg" 
                alt="Legrand"
                style={{ height: '53px', width: 'auto' }}
              />
            </a>
            <a href="https://www.johnsoncontrols.com/industries/data-centers" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://accelsius.com/wp-content/uploads/Johnson_Controls.svg-1.svg" 
                alt="Johnson Controls"
                style={{ height: '53px', width: 'auto' }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* ===== WE LOVE OUR PARTNERS ===== */}
      <section style={{
        padding: '70px 15px',
        background: '#ffffff',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: 'cover'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '50px'
        }}>
          {/* Left - Video */}
          <div style={{ width: '55%' }}>
            <div style={{
              border: '12px solid #f7f7f7',
              borderRadius: '0',
              overflow: 'hidden',
              position: 'relative',
              height: '390px',
              width: '100%',
              background: '#000'
            }}>
              <video
                ref={partnerVideoRef}
                src="https://accelsius.com/wp-content/uploads/captioned_final_full_interview_with_tom_elowson_im_data_centers_series2160p-1.mp4"
                controls
                muted
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                poster="https://accelsius.com/wp-content/uploads/We-Love-Our-Partners-02-1.jpg"
              />
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
                onClick={() => {
                  if (partnerVideoRef.current) {
                    partnerVideoRef.current.play();
                  }
                }}
              >
                <div style={{
                  width: '100px',
                  height: '100px',
                  border: '2px solid #fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'ripple-animation 2.5s infinite',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    border: '2px solid #fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    animation: 'ripple-animation 2.5s infinite'
                  }}>
                    <svg width="40" height="40" viewBox="0 0 128 128" fill="none">
                      <circle cx="64" cy="64" r="39" fill="white" />
                      <path d="M74.295 63.2453C74.7763 63.6384 74.7863 64.3706 74.316 64.7767L60.5327 76.6774C59.8896 77.2327 58.8909 76.7838 58.8793 75.9342L58.5584 52.5149C58.5467 51.6653 59.5328 51.1892 60.1908 51.7267L74.295 63.2453Z" fill="#1D215F" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <img 
              src="https://accelsius.com/wp-content/uploads/Frame.png" 
              alt="Accelsius"
              style={{ width: '100%', maxWidth: '699px', height: 'auto', marginTop: '10px' }}
            />
          </div>

          {/* Right - Content */}
          <div style={{ width: '40%', alignSelf: 'center' }}>
            <h4 style={{
              fontSize: '40px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              lineHeight: '50px',
              color: '#1d1c4e'
            }}>
              We Love Our Partners
            </h4>
            <p style={{
              fontSize: '22px',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              lineHeight: '32px',
              color: '#404040',
              paddingRight: '80px',
              margin: 0
            }}>
              Discover the competitive advantages you can unlock by partnering with us today.
            </p>
            <a
              href="https://accelsius.com/our-partners/"
              style={{
                display: 'inline-block',
                marginTop: '30px',
                padding: '0.75rem 1.5rem',
                background: '#2e3192',
                color: '#ffffff',
                borderRadius: '10px',
                fontSize: '18px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                lineHeight: '32px',
                textDecoration: 'none',
                transition: 'background 0.5s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#000000'}
              onMouseLeave={(e) => e.target.style.background = '#2e3192'}
            >
              Join Our Certified Partners  &gt;
            </a>
          </div>
        </div>
      </section>

      {/* ===== CHIP PARTNERS ===== */}
      <section style={{ padding: '0 15px 100px 15px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '100px',
            marginTop: '20px',
            flexWrap: 'wrap'
          }}>
            <a href="https://www.legrand.us/critical-power-and-infrastructure/data-center-cooling/two-phase-direct-to-chip" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://accelsius.com/wp-content/uploads/Nvidia_Logo.svg" 
                alt="NVIDIA"
                style={{ height: '68px', width: 'auto' }}
              />
            </a>
            <a href="https://www.legrand.us/critical-power-and-infrastructure/data-center-cooling/two-phase-direct-to-chip" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://accelsius.com/wp-content/uploads/AMD_Logo.svg" 
                alt="AMD"
                style={{ height: '68px', width: 'auto' }}
              />
            </a>
            <a href="https://www.johnsoncontrols.com/industries/data-centers" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://accelsius.com/wp-content/uploads/Dell_Technologies.svg" 
                alt="Dell Technologies"
                style={{ height: '68px', width: 'auto' }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS SLIDER ===== */}
      <section style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              animation: 'scrollPartners 60s linear infinite',
              gap: '50px',
              alignItems: 'center',
              padding: '20px 0'
            }}>
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '150px',
                    height: '150px'
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      opacity: 0.8
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CUTTING EDGE COOLING ===== */}
      <section style={{
        backgroundImage: 'url("https://accelsius.com/wp-content/uploads/Btg.png")',
        backgroundPosition: 'bottom left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        padding: '115px 15px 65px 15px',
        marginTop: '-30px'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '53px'
        }}>
          <h4 style={{
            fontSize: '28px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '34px',
            color: '#1d1c4e',
            textAlign: 'center',
            alignSelf: 'center'
          }}>
            Cutting-Edge Cooling Technology for Your Data Center
          </h4>
          <div style={{
            fontSize: '22px',
            lineHeight: '32px',
            fontWeight: 400,
            fontFamily: 'Lato, sans-serif',
            color: '#404040',
            textAlign: 'center',
            padding: '0 42px'
          }}>
            <p>At Accelsius, we offer state-of-the-art liquid cooling solutions for data centers. Our <a href="https://accelsius.com/direct-to-chip-liquid-cooling/" style={{ color: '#1d1c4e', textDecoration: 'none' }}>direct-to-chip liquid cooling</a> system delivers unmatched efficiency, performance, and reliability. We develop sustainable liquid cooling technology to reduce environmental impact while enhancing efficiency and longevity of your compute. Our <a href="/precision-liquid-cooling/" style={{ color: '#1d1c4e', textDecoration: 'none' }}>precision liquid cooling</a> systems ensure servers operate at optimal temperatures, maximizing performance and lifespan. We offer <strong><a href="https://accelsius.com/two-phase-cooling/" style={{ color: '#1d1c4e', textDecoration: 'none' }}>two-phase cooling</a></strong> for higher server density, lower costs, and improved energy efficiency, purpose-built for <strong><a href="https://accelsius.com/data-center-liquid-cooling/" style={{ color: '#1d1c4e', textDecoration: 'none' }}>data center liquid cooling</a></strong> at scale. Our mission-critical cooling solutions keep data centers cool under demanding conditions, ensuring smooth operations.</p>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes ripple-animation {
          0% { transform: translate(-50%, -50%) scale(0.7); }
          50% { transform: translate(-50%, -50%) scale(1.24); }
          100% { transform: translate(-50%, -50%) scale(0.7); }
        }
        @keyframes scrollPartners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @media (max-width: 768px) {
          #brxe-qovcph { flex-direction: column; }
          #brxe-vgeadk { order: -1; width: 100%; }
          #brxe-enlbiz { width: 100%; }
          .banner-video-text { font-size: 30px; line-height: 46px; }
          #brxe-2b268d { flex-direction: column; }
          #brxe-943a33 { flex-direction: column; }
          .tab-menu { flex-direction: column; }
        }
      `}</style>
    </main>
  );
}

export { HomePage };