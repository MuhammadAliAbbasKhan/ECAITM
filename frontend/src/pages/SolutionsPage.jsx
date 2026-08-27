// src/pages/SolutionsPage.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const videoRef = useRef(null);

  // Tab data for components
  const tabs = [
    {
      id: 'icdu',
      title: 'iCDU',
      image: 'https://accelsius.com/wp-content/uploads/iCDU.png',
      heading: 'NeuCool iCDU',
      content: (
        <>
          <p>The Intelligent Coolant Distribution Unit is the <strong>heart and brains</strong> of the NeuCool System.</p>
          <ul>
            <li>Contains <strong>core logic</strong>, <strong>industrial condenser</strong>, <strong>N+1 pumps</strong>, <strong>system sensors</strong>, and <strong>touch screen control system</strong></li>
            <li><strong>Redundant, hot-swappable components</strong>, including power supplies, pumps, sensors, and core logic board</li>
            <li><strong>Integrated condenser</strong> enables transfer of heat from NeuCool loop to a variety of heat rejection options</li>
            <li><strong>Intelligent, load-balancing pump system</strong> extends life cycle and provides robust fault tolerance to maximize uptime</li>
          </ul>
        </>
      )
    },
    {
      id: 'vaporator',
      title: 'Vaporator',
      image: 'https://accelsius.com/wp-content/uploads/NeuCool-Vaporator.png',
      heading: 'NeuCool Vaporator',
      content: (
        <>
          <ul>
            <li><strong>Optimized</strong> 2P D2C system</li>
            <li><strong>Highly-engineered</strong> to promote nucleation (boiling) and efficiently remove heat from CPUs and GPUs</li>
            <li><strong>Capable of cooling 4500W</strong> per socket</li>
          </ul>
        </>
      ),
      hasCta: true,
      ctaText: 'Supported CPUs / GPUs  >'
    },
    {
      id: 'manifolds',
      title: 'Manifolds',
      image: 'https://accelsius.com/wp-content/uploads/Manifolds.png',
      heading: 'NeuCool Manifolds',
      content: (
        <>
          <p>Aluminum manifolds direct refrigerant between servers and the NeuCool iCDU.</p>
          <ul>
            <li><strong>Split design</strong> for installation flexibility, optimized vapor and liquid flow, and heat isolation</li>
            <li>Low-profile design for <strong>rear aisle serviceability</strong> with no PDU interference</li>
            <li>Designed and tested for <strong>3x normal operating pressure</strong></li>
            <li><strong>Stainless steel</strong>, <strong>dripless quick disconnects</strong> feature one-handed operation with audible connect</li>
          </ul>
        </>
      )
    },
    {
      id: 'reservoir',
      title: 'Reservoir',
      image: 'https://accelsius.com/wp-content/uploads/Reservoir-1.png',
      heading: 'NeuCool Reservoir',
      content: (
        <>
          <p>The NeuCool Reservoir <strong>provides refrigerant expansion volume</strong> to respond to fluctuations in compute power.</p>
          <ul>
            <li>Creates head pressure that <strong>extends pump life</strong> and <strong>prevents instabilities in fluid flow</strong></li>
            <li>Contains <strong>redundant level sensors</strong> that enable the leak detection system</li>
          </ul>
        </>
      )
    },
    {
      id: 'software',
      title: 'Software Management System',
      image: 'https://accelsius.com/wp-content/uploads/Software-Management-System.png',
      heading: 'NeuView: NeuCool Software Management System',
      content: (
        <>
          <ul>
            <li>Integrated software platform <strong>monitors and controls all important parameters and functions</strong> of the NeuCool System</li>
            <li>System interfaces include a <strong>local touchscreen LCD on iCDU</strong> or <strong>remotely, via a dedicated Web interface and/or DCIM</strong></li>
            <li>Integrates with data center <strong>Network Operations Center (NOC)</strong> and <strong>server system management systems</strong> through SNMP, IPMI, Redfish, DCIM, etc.</li>
          </ul>
        </>
      )
    }
  ];

  // Products data
  const products = [
    {
      id: 'mr250',
      title: 'MR250',
      image: 'https://accelsius.com/wp-content/uploads/Image_03.png',
      description: 'An in-row solution enabling 250kW across up to four racks',
      link: 'https://accelsius.com/single-product-mr250/'
    },
    {
      id: 'multi-gpu',
      title: 'Multi-GPU',
      image: 'https://accelsius.com/wp-content/uploads/image-4.png',
      description: 'Designed to cool the most advanced GPU and CPU configurations',
      link: 'https://accelsius.com/single-product-multi-gpu/'
    },
    {
      id: 'tsr',
      title: 'TSR',
      image: 'https://accelsius.com/wp-content/uploads/Image_01.png',
      description: 'A "thermal bank" to showcase NeuCool\'s capabilities in your own environment',
      link: 'https://accelsius.com/single-product-tsr-and-lss/'
    },
    {
      id: 'ir150',
      title: 'IR150',
      image: 'https://accelsius.com/wp-content/uploads/IR150-Web-Version.png',
      description: 'Reimagined for the mission critical liquid cooling era',
      link: 'https://accelsius.com/ir150/'
    }
  ];

  return (
    <main style={{ background: 'white', fontFamily: 'Inter, sans-serif' }}>
      
      {/* ===== HERO SECTION ===== */}
      <section style={{
        backgroundImage: 'url("https://accelsius.com/wp-content/uploads/Solutions_-Page-Hero-Image-2.jpg")',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '200px 15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '400px'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          <h1 style={{
            fontSize: '60px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '70px',
            color: '#ffffff',
            alignSelf: 'center',
            marginBottom: '10px'
          }}>
            Solutions
          </h1>
          <h4 style={{
            fontSize: '30px',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 700,
            lineHeight: '34px',
            color: '#ffffff',
            alignSelf: 'center',
            marginBottom: '20px'
          }}>
            Designed for the Mission Critical
          </h4>
          <a
            href="https://go.accelsius.com/discover-our-neucool-products-1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '15px 25px',
              background: '#213b88',
              color: '#ffffff',
              borderRadius: '15px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              textDecoration: 'none',
              transition: 'background 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#000000'}
            onMouseLeave={(e) => e.target.style.background = '#213b88'}
          >
            Download Our Product Brochure
          </a>
        </div>
      </section>

      {/* ===== TAILORED COOLING SECTION ===== */}
      <section style={{
        padding: '77px 15px 135px 15px',
        display: 'none'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '45px'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '58px',
            alignSelf: 'center',
            color: '#0B0F33'
          }}>
            Tailored Cooling for the Mission Critical
          </h2>
          <div style={{
            fontSize: '22px',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 400,
            lineHeight: '32px',
            color: '#404040',
            textAlign: 'center',
            maxWidth: '800px'
          }}>
            <p>Accelsius delivers precision cooling solutions for mission-critical environments, designing reliable and efficient solutions for data centers.</p>
          </div>
        </div>
      </section>

      {/* ===== NEUCOOL OVERVIEW ===== */}
      <section style={{
        padding: '75px 15px',
        background: 'linear-gradient(91.57deg, #016590, #1d1f5d)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <h3 style={{
            fontSize: '48px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '58px',
            color: '#ffffff',
            textAlign: 'center',
            alignSelf: 'center'
          }}>
            NeuCool Overview
          </h3>
        </div>
      </section>

      {/* ===== NEUCOOL DETAILS ===== */}
      <section style={{
        padding: '90px 15px 115px 15px',
        background: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '50px'
        }}>
          {/* Left - Text Content */}
          <div style={{ width: '42%' }}>
            <div style={{
              fontSize: '22px',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              lineHeight: '32px',
              color: '#1c1c1c'
            }}>
              <p><strong>NeuCool® is a complete liquid cooling solution</strong>, using a <strong>highly-efficient two-phase process</strong> with a <strong>dielectric refrigerant</strong> that is entirely safe for electronics. It's engineered as a <strong><a href="/direct-to-chip-liquid-cooling/" style={{ color: '#1d1f5d', textDecoration: 'none' }}>direct-to-chip liquid cooling</a></strong> system purpose-built for <strong><a href="https://accelsius.com/data-center-liquid-cooling/" style={{ color: '#1d1f5d', textDecoration: 'none' }}>data center liquid cooling</a></strong> at scale, delivering <strong><a href="/precision-liquid-cooling/" style={{ color: '#1d1f5d', textDecoration: 'none' }}>precision liquid cooling</a></strong> performance where it's needed most.</p>
              <p>The NeuCool System <strong>supports 4500w+ per socket</strong> and rack-level densities up to 250kW, easily cooling current and future generations of high performance CPUs and GPUs. To learn more about the engineering behind the system, explore our <strong><a href="/technology/" style={{ color: '#1d1f5d', textDecoration: 'none' }}>technology</a></strong> page.</p>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '30px',
              marginTop: '34px',
              flexWrap: 'wrap'
            }}>
              <a
                href="#our-products"
                style={{
                  display: 'inline-block',
                  padding: '25px 20px',
                  background: '#2d308f',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontSize: '24px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  lineHeight: '30px',
                  textDecoration: 'none',
                  width: '308px',
                  height: '80px',
                  textAlign: 'center',
                  transition: 'background 0.5s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#000000'}
                onMouseLeave={(e) => e.target.style.background = '#2d308f'}
              >
                Our Products
              </a>
              <a
                href="#our-components"
                style={{
                  display: 'inline-block',
                  padding: '25px 20px',
                  background: '#2d308f',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontSize: '24px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  lineHeight: '30px',
                  textDecoration: 'none',
                  width: '308px',
                  height: '80px',
                  textAlign: 'center',
                  transition: 'background 0.5s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#000000'}
                onMouseLeave={(e) => e.target.style.background = '#2d308f'}
              >
                Our Components
              </a>
            </div>
          </div>

          {/* Right - Video */}
          <div style={{ width: '51%' }}>
            <div style={{
              position: 'relative',
              border: '12px solid #f7f7f7',
              borderRadius: '0',
              overflow: 'hidden',
              height: '444px',
              width: '100%',
              background: '#000'
            }}>
              <video
                ref={videoRef}
                src="https://accelsius.com/wp-content/uploads/home_page_neucool_demo_video-1080p.mp4"
                controls
                muted
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                poster="https://accelsius.com/wp-content/uploads/Video_Img.jpg"
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
              style={{ 
                width: '100%', 
                maxWidth: '699px', 
                height: 'auto', 
                marginTop: '10px',
                position: 'relative',
                bottom: '-54px'
              }}
              id="our-products"
            />
          </div>
        </div>
      </section>

      {/* ===== OUR PRODUCTS ===== */}
      <section style={{
        padding: '75px 15px',
        background: 'linear-gradient(91.57deg, #016590, #1d1f5d)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <h3 style={{
            fontSize: '48px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '58px',
            color: '#ffffff',
            textAlign: 'center',
            alignSelf: 'center'
          }}>
            Our Products
          </h3>
        </div>
      </section>

      {/* ===== PRODUCTS GRID ===== */}
      <section style={{
        padding: '80px 15px 115px 15px',
        backgroundImage: 'url("https://accelsius.com/wp-content/uploads/Background_Texture.jpg")',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '45px'
        }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                width: '323px',
                alignSelf: 'center',
                alignItems: 'center',
                padding: '15px 20px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '100%', maxWidth: '323px', height: 'auto' }}
              />
              <h3 style={{
                fontSize: '36px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                lineHeight: '34px',
                color: '#1d1c4e',
                marginTop: '35px'
              }}>
                {product.title}
              </h3>
              <p style={{
                fontSize: '22px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                lineHeight: '32px',
                color: '#1d1c4e',
                marginTop: '15px',
                marginBottom: '50px',
                alignSelf: 'center',
                textAlign: 'center'
              }}>
                {product.description}
              </p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 35px 10px 10px',
                  background: '#2e3192',
                  color: '#ffffff',
                  borderRadius: '10px',
                  fontSize: '18px',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  lineHeight: '32px',
                  textDecoration: 'none',
                  width: '179px',
                  height: '53px',
                  textAlign: 'center',
                  transition: 'background 0.5s',
                  backgroundImage: 'url("https://accelsius.com/wp-content/uploads/chevron-right-solid-1.svg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '85% 50%',
                  backgroundSize: '15px'
                }}
                onMouseEnter={(e) => e.target.style.background = '#000000'}
                onMouseLeave={(e) => e.target.style.background = '#2e3192'}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== OUR COMPONENTS ===== */}
      <section style={{
        padding: '75px 15px 135px 15px',
        background: 'linear-gradient(91.57deg, #016590, #1d1f5d)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <h3 style={{
            fontSize: '48px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '58px',
            color: '#ffffff',
            textAlign: 'center',
            alignSelf: 'center'
          }}>
            Our Components
          </h3>
        </div>
      </section>

      {/* ===== COMPONENTS TABS ===== */}
      <section style={{
        padding: '0 15px 110px 15px',
        background: '#f8f8f8',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '15px',
            marginTop: '-55px',
            flexWrap: 'wrap'
          }}>
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(index)}
                style={{
                  padding: '25px 14px',
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
                  minWidth: '140px',
                  color: index === activeTab ? '#1d1c4e' : '#1d1c4e'
                }}
              >
                {tab.title}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ marginTop: '110px', border: 'none' }}>
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
                  alignSelf: 'center',
                  gap: '50px'
                }}>
                  {/* Image - Left */}
                  <div style={{ width: '50%', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={tab.image}
                      alt={tab.heading}
                      style={{ 
                        width: '100%', 
                        maxWidth: '485px', 
                        height: 'auto',
                        borderRadius: '0'
                      }}
                    />
                  </div>

                  {/* Content - Right */}
                  <div style={{ width: '48%' }}>
                    <h4 style={{
                      fontSize: '40px',
                      fontFamily: 'Montserrat, sans-serif',
                      lineHeight: '46px',
                      color: '#1d1c4e'
                    }}>
                      {tab.heading}
                    </h4>
                    <div style={{
                      marginTop: '35px',
                      color: '#404040',
                      fontSize: '22px',
                      fontFamily: 'Lato, sans-serif',
                      lineHeight: '32px'
                    }}>
                      {tab.content}
                    </div>
                    {tab.hasCta && (
                      <button
                        style={{
                          display: 'inline-block',
                          marginTop: '35px',
                          padding: '0.75rem 1.5rem',
                          background: '#2e3192',
                          color: '#ffffff',
                          borderRadius: '10px',
                          fontSize: '18px',
                          fontFamily: 'Lato, sans-serif',
                          fontWeight: 700,
                          lineHeight: '32px',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'background 0.5s'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#000000'}
                        onMouseLeave={(e) => e.target.style.background = '#2e3192'}
                        onClick={() => {
                          // Trigger popup - you can implement this with a modal
                          alert('Supported CPUs/GPUs: Intel Sapphire Rapids, Intel Emerald Rapids, AMD EPYC Genoa, AMD EPYC Turin, NVIDIA Grace, NVIDIA H100, NVIDIA H200, AMD MI325X, AMD MI355X, NVIDIA B200');
                        }}
                      >
                        {tab.ctaText}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
        @media (max-width: 991px) {
          #brxe-hdxxst {
            flex-direction: column;
          }
          #brxe-obtbcx {
            width: 100%;
          }
          #brxe-vbnmbg {
            width: 90%;
          }
        }
        @media (max-width: 767px) {
          #brxe-hdxxst {
            row-gap: 30px;
          }
          #brxe-zaarft {
            flex-direction: row;
            flex-wrap: wrap;
            column-gap: 25px;
            row-gap: 45px;
            justify-content: center;
          }
          #brxe-kqnwxr {
            flex-direction: column;
          }
          #brxe-fhzvry, #brxe-qnjvmx, #brxe-qcmbqa, #brxe-nyqyuh, #brxe-tybdxy {
            width: 100%;
          }
          #brxe-rkruii, #brxe-dswocg, #brxe-lgkcri, #brxe-ummhcr, #brxe-kbgnxm {
            width: 100%;
          }
          #brxe-nmipwn, #brxe-ruzsnh, #brxe-yumndo, #brxe-jczjpw, #brxe-pqzxwb {
            flex-direction: column;
          }
        }
        @media (max-width: 478px) {
          .tab-menu .tab-title {
            padding: 15px 14px !important;
            font-size: 16px !important;
          }
          #brxe-tpbwwp {
            height: 244px;
          }
          #brxe-ufugyo, #brxe-bgwhaj, #brxe-rsryzz, #brxe-dfgssm {
            width: 80%;
          }
        }
      `}</style>
    </main>
  );
}

export { SolutionsPage };