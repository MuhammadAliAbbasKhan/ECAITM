import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ServicesPage({ onOpenAuth, onOpenDemo, onNavigatePricing }) {
  const [activeTab, setActiveTab] = useState(2); // "Always" tab is active by default
  const [currentUser, setCurrentUser] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(null);

  const [serviceForm, setServiceForm] = useState({
    service_type: 'Direct-to-Chip 2-Phase Installation & Integration',
    facility_location: 'Austin Data Hub Node 4, TX',
    rack_count: '16 Racks (80kW/rack)',
    urgency: 'Immediate (24-48 Hours)',
    details: 'Urgent thermal assessment required for high-density NVIDIA Blackwell GB200 deployment.'
  });

  useEffect(() => {
    const checkUser = async () => {
      const storedUser = localStorage.getItem('ecaitm_user');
      const storedSub = localStorage.getItem('ecaitm_active_subscription');
      
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setCurrentUser(parsedUser);

          // Check if subscription exists in localStorage or query Django backend
          if (parsedUser.is_paid || storedSub) {
            setIsPaid(true);
          }

          // Fetch latest user status from Django REST API backend
          if (parsedUser.email) {
            const res = await axios.get(`/api/v1/auth/user/?email=${encodeURIComponent(parsedUser.email)}`).catch(() => null);
            if (res && res.data && res.data.success) {
              setCurrentUser(res.data.user);
              if (res.data.user.is_paid) {
                setIsPaid(true);
              }
            }
          }
        } catch (e) {
          console.error("User parse error", e);
        }
      }
    };
    checkUser();
  }, []);

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      if (onOpenAuth) onOpenAuth();
      return;
    }
    if (!isPaid) {
      if (onNavigatePricing) onNavigatePricing();
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        user_email: currentUser.email,
        user_name: currentUser.username || currentUser.email.split('@')[0],
        company: currentUser.company || 'Enterprise Data Center',
        ...serviceForm
      };

      const res = await axios.post('/api/v1/services/request/', payload);
      if (res.data && res.data.success) {
        setRequestSubmitted({
          id: res.data.request_id,
          status: res.data.status,
          message: res.data.message
        });
      } else {
        alert(res.data.message || 'Service request submitted successfully!');
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Error submitting service request.';
      alert(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="services-page" style={{ 
      fontFamily: "Lato, sans-serif", 
      fontWeight: "400", 
      color: "#1d1c4e",
      lineHeight: "1.5",
      backgroundColor: "#ffffff"
    }}>
      
      {/* ===== HERO SECTION ===== */}
      <section 
        className="hero-section" 
        style={{
          paddingTop: "120px",
          paddingRight: "20px",
          paddingBottom: "120px",
          paddingLeft: "20px",
          backgroundImage: "url('https://accelsius.com/wp-content/uploads/Data_Center_Services.jpg')",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%"
        }}
      >
        <div className="container" style={{ 
          width: "100%", 
          maxWidth: "1360px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h1 style={{
            color: "#ffffff",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "60px",
            lineHeight: "1.5",
            fontWeight: "700",
            marginBottom: "0.25rem",
            textAlign: "center"
          }}>Services</h1>
          <h2 style={{
            marginTop: "0",
            marginBottom: "0",
            color: "#ffffff",
            fontSize: "54px",
            textAlign: "center",
            fontWeight: "300",
            lineHeight: "1.2",
            fontFamily: "Montserrat, sans-serif"
          }}>
            Enterprise-Grade Services Support<br />Your Journey to Liquid Cooling<br />
          </h2>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section style={{ 
        padding: "0",
        width: "100%"
      }}>
        <div className="container" style={{ 
          width: "100%", 
          maxWidth: "1360px", 
          margin: "0 auto",
          padding: "0 20px"
        }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "48px",
            lineHeight: "60px",
            fontFamily: "Montserrat, sans-serif",
            color: "#1d1c4e",
            paddingTop: "75px",
            paddingBottom: "0",
            fontWeight: "700",
            marginBottom: "0"
          }}>End-To-End NeuCool® Empowerment</h2>
          <h5 style={{
            fontWeight: "400",
            fontSize: "22px",
            lineHeight: "33px",
            fontFamily: "Lato, sans-serif",
            color: "#404040",
            marginTop: "0",
            marginBottom: "0",
            textAlign: "center",
            paddingBottom: "75px",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto"
          }}>Our all-inclusive support model is designed to enable NeuCool's peak cooling performance: from tailor-made designs and white-glove deployment to global onsite servicing and full lifecycle management.</h5>
        </div>
      </section>

      {/* ===== BLUE SECTION HEADER ===== */}
      <section style={{
        paddingTop: "75px",
        paddingRight: "15px",
        paddingBottom: "100px",
        paddingLeft: "15px",
        backgroundImage: "linear-gradient(91.57deg, #016590, #1d1f5d)",
        width: "100%"
      }}>
        <div className="container" style={{ 
          width: "100%", 
          maxWidth: "1360px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h3 style={{
            fontSize: "48px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "700",
            lineHeight: "58px",
            color: "#ffffff",
            textAlign: "center",
            margin: "0"
          }}>We've Got You Covered</h3>
        </div>
      </section>

      {/* ===== TABS SECTION ===== */}
      <section style={{
        paddingTop: "0",
        paddingRight: "20px",
        paddingLeft: "20px",
        width: "100%",
        backgroundColor: "#ffffff"
      }}>
        <div className="container" style={{ 
          width: "100%", 
          maxWidth: "1360px", 
          margin: "0 auto"
        }}>
          
          {/* TAB MENU */}
          <div className="tab-menu" style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "-51px",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "20px",
            flexWrap: "wrap",
            position: "relative",
            zIndex: "10",
            marginBottom: "50px"
          }}>
            {/* Tab 1: Today */}
            <div 
              className={`tab-item ${activeTab === 0 ? 'active' : ''}`}
              onClick={() => setActiveTab(0)}
              style={{
                paddingTop: "39px",
                paddingRight: "32px",
                paddingBottom: "39px",
                paddingLeft: "32px",
                backgroundColor: "#ffffff",
                fontSize: "20px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                lineHeight: "26px",
                border: activeTab === 0 ? "2px solid #2e3192" : "2px solid rgba(0, 0, 0, 0.12)",
                borderRadius: "6px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                minWidth: "150px",
                color: "#1d1c4e"
              }}
            >
              Today
            </div>

            {/* Tab 2: Tomorrow */}
            <div 
              className={`tab-item ${activeTab === 1 ? 'active' : ''}`}
              onClick={() => setActiveTab(1)}
              style={{
                paddingTop: "39px",
                paddingRight: "32px",
                paddingBottom: "39px",
                paddingLeft: "32px",
                backgroundColor: "#ffffff",
                fontSize: "20px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                lineHeight: "26px",
                border: activeTab === 1 ? "2px solid #2e3192" : "2px solid rgba(0, 0, 0, 0.12)",
                borderRadius: "6px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                minWidth: "150px",
                color: "#1d1c4e"
              }}
            >
              Tomorrow
            </div>

            {/* Tab 3: Always */}
            <div 
              className={`tab-item ${activeTab === 2 ? 'active' : ''}`}
              onClick={() => setActiveTab(2)}
              style={{
                paddingTop: "39px",
                paddingRight: "32px",
                paddingBottom: "39px",
                paddingLeft: "32px",
                backgroundColor: "#ffffff",
                fontSize: "20px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                lineHeight: "26px",
                border: activeTab === 2 ? "2px solid #2e3192" : "2px solid rgba(0, 0, 0, 0.12)",
                borderRadius: "6px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                minWidth: "150px",
                color: "#1d1c4e"
              }}
            >
              Always
            </div>
          </div>

          {/* TAB CONTENT */}
          <div className="tab-content" style={{
            backgroundColor: "#ffffff",
            borderRadius: "6px",
            padding: "20px 0 40px 0"
          }}>
            
            {/* PANEL 1: Today */}
            {activeTab === 0 && (
              <div className="tab-panel" style={{
                animation: "fadeIn 0.3s ease"
              }}>
                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "50px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}>
                  <div style={{
                    width: "32%",
                    flex: "0 0 32%"
                  }}>
                    <img 
                      width="430" 
                      height="380" 
                      src="https://accelsius.com/wp-content/uploads/Today_Image.jpg"
                      alt="Today Services"
                      style={{
                        borderRadius: "0",
                        width: "100%",
                        height: "auto",
                        display: "block"
                      }}
                    />
                  </div>
                  <div style={{
                    width: "60%",
                    flex: "0 0 60%"
                  }}>
                    <div style={{
                      fontSize: "22px",
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "400",
                      lineHeight: "40px"
                    }}>
                      <ul style={{
                        listStyle: "disc",
                        paddingLeft: "20px",
                        margin: "0"
                      }}>
                        <li style={{ paddingBottom: "0.75rem", lineHeight: "1.5" }}>
                          <span style={{ fontWeight: "400" }}>Pre-production site assessment and solution design modeling for </span>
                          <b>seamless integration</b>
                        </li>
                        <li style={{ paddingBottom: "0.75rem", lineHeight: "1.5" }}>
                          <span style={{ fontWeight: "400" }}>All products manufactured and </span>
                          <b>assembled in the U.S.A</b>
                          <span style={{ fontWeight: "400" }}>.</span>
                        </li>
                        <li style={{ paddingBottom: "0.75rem", lineHeight: "1.5" }}>
                          <span style={{ fontWeight: "400" }}>90% of our Tier 1 vendors are </span>
                          <b>based in North America</b>
                        </li>
                        <li style={{ paddingBottom: "0.75rem", lineHeight: "1.5" }}>
                          <span style={{ fontWeight: "400" }}>Contract manufacturing through service partners for </span>
                          <b>hyperscaler deployments</b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PANEL 2: Tomorrow */}
            {activeTab === 1 && (
              <div className="tab-panel" style={{
                animation: "fadeIn 0.3s ease"
              }}>
                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "50px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}>
                  <div style={{
                    width: "32%",
                    flex: "0 0 32%"
                  }}>
                    <img 
                      width="430" 
                      height="380" 
                      src="https://accelsius.com/wp-content/uploads/Tomorrow-Image.jpg"
                      alt="Tomorrow Services"
                      style={{
                        borderRadius: "0",
                        width: "100%",
                        height: "auto",
                        display: "block"
                      }}
                    />
                  </div>
                  <div style={{
                    width: "60%",
                    flex: "0 0 60%"
                  }}>
                    <div style={{
                      fontSize: "22px",
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "400",
                      lineHeight: "40px",
                      marginTop: "0"
                    }}>
                      <ul style={{
                        listStyle: "disc",
                        paddingLeft: "20px",
                        margin: "0"
                      }}>
                        <li style={{ paddingBottom: "0.75rem", lineHeight: "1.5" }}>
                          <span style={{ fontWeight: "400" }}>Step-by-step project validation by thermal experts for </span>
                          <b>stress-free assembly and handover</b>
                        </li>
                        <li style={{ paddingBottom: "0.75rem", lineHeight: "1.5" }}>
                          <span style={{ fontWeight: "400" }}>NeuGuard™ </span>
                          <b>2, 3, &amp; 5-year limited warranty</b>
                          <span style={{ fontWeight: "400" }}> backed by CNA</span>
                        </li>
                        <li style={{ paddingBottom: "0.75rem", lineHeight: "1.5" }}>
                          <span style={{ fontWeight: "400" }}>Additional server &amp; integration warranties provided by our partners: </span>
                          <b>Unicom</b>
                          <span style={{ fontWeight: "400" }}> and </span>
                          <b>Park Place</b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PANEL 3: Always */}
            {activeTab === 2 && (
              <div className="tab-panel" style={{
                animation: "fadeIn 0.3s ease"
              }}>
                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "50px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}>
                  <div style={{
                    width: "32%",
                    flex: "0 0 32%"
                  }}>
                    <img 
                      width="430" 
                      height="380" 
                      src="https://accelsius.com/wp-content/uploads/Always-Image.jpg"
                      alt="Always Services"
                      style={{
                        borderRadius: "0",
                        width: "100%",
                        height: "auto",
                        display: "block"
                      }}
                    />
                  </div>
                  <div style={{
                    width: "60%",
                    flex: "0 0 60%"
                  }}>
                    <div style={{
                      fontSize: "22px",
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "400",
                      lineHeight: "40px",
                      marginTop: "0"
                    }}>
                      <ul style={{
                        listStyle: "disc",
                        paddingLeft: "20px",
                        margin: "0"
                      }}>
                        <li style={{ paddingBottom: "0.75rem", lineHeight: "1.5" }}>
                          <b>Preventative and corrective maintenance </b>
                          <span style={{ fontWeight: "400" }}>for optimized performance</span>
                        </li>
                        <li style={{ paddingBottom: "0.75rem", lineHeight: "1.5" }}>
                          <span style={{ fontWeight: "400" }}>Tailored SLAs for </span>
                          <strong>full lifecycle management</strong>
                        </li>
                        <li style={{ paddingBottom: "0.75rem", lineHeight: "1.5" }}>
                          <span style={{ fontWeight: "400" }}>Remote and on-site troubleshooting&nbsp;</span>
                        </li>
                        <li style={{ paddingBottom: "0.75rem", lineHeight: "1.5" }}>
                          <span style={{ fontWeight: "400" }}>Technician dispatches for </span>
                          <strong>routine site inspections, training, and asset support</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== GLOBAL SERVICES PARTNER ===== */}
      <section style={{
        paddingTop: "75px",
        paddingRight: "15px",
        paddingBottom: "100px",
        paddingLeft: "15px",
        backgroundImage: "linear-gradient(91.57deg, #016590, #1d1f5d)",
        width: "100%"
      }}>
        <div className="container" style={{ 
          width: "100%", 
          maxWidth: "1360px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h3 style={{
            fontSize: "48px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "700",
            lineHeight: "58px",
            color: "#ffffff",
            textAlign: "center",
            margin: "0"
          }}>Global Services Partner</h3>
        </div>
      </section>

      {/* ===== PARTNER LOGOS ===== */}
      <section style={{
        padding: "40px 20px",
        width: "100%",
        backgroundColor: "#ffffff"
      }}>
        <div className="container" style={{ 
          width: "100%", 
          maxWidth: "1360px", 
          margin: "0 auto"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            flexWrap: "wrap",
            padding: "20px 0"
          }}>
            <img 
              src="https://accelsius.com/wp-content/uploads/Park_Place.png"
              alt="Park Place"
              style={{
                maxHeight: "80px",
                width: "auto",
                objectFit: "contain"
              }}
            />
            <img 
              src="https://accelsius.com/wp-content/uploads/Silverback.png"
              alt="Silverback"
              style={{
                maxHeight: "80px",
                width: "auto",
                objectFit: "contain"
              }}
            />
            <img 
              src="https://accelsius.com/wp-content/uploads/Unicom.png"
              alt="Unicom"
              style={{
                maxHeight: "80px",
                width: "auto",
                objectFit: "contain"
              }}
            />
          </div>
        </div>
      </section>

      {/* ===== CUSTOMER SUPPORT (hidden) ===== */}
      <section style={{
        display: "none",
        paddingTop: "75px",
        paddingRight: "15px",
        paddingBottom: "100px",
        paddingLeft: "15px",
        backgroundImage: "linear-gradient(91.57deg, #016590, #1d1f5d)",
        width: "100%"
      }}>
        <div className="container" style={{ 
          width: "100%", 
          maxWidth: "1360px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h3 style={{
            fontSize: "48px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "700",
            lineHeight: "58px",
            color: "#ffffff",
            textAlign: "center",
            margin: "0"
          }}>Customer Support</h3>
        </div>
      </section>

      {/* ===== AUTHENTICATED & PAID SERVICE REQUEST PORTAL ===== */}
      <section style={{
        padding: "80px 20px",
        backgroundColor: "#0B0E14",
        color: "#F8FAFC",
        borderTop: "1px solid #1E293B",
        borderBottom: "1px solid #1E293B",
        width: "100%"
      }}>
        <div className="container" style={{ width: "100%", maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{
              backgroundColor: "rgba(0, 196, 238, 0.15)",
              color: "#00C4EE",
              border: "1px solid rgba(0, 196, 238, 0.4)",
              padding: "6px 16px",
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}>
              EXECUTIVE SERVICE DISPATCH PORTAL
            </span>
            <h2 style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "2.4rem",
              fontWeight: "700",
              color: "#FFFFFF",
              marginTop: "16px",
              marginBottom: "12px"
            }}>
              Request Onsite Liquid Cooling Engineering
            </h2>
            <p style={{ color: "#94A3B8", fontSize: "1.1rem", maxWidth: "720px", margin: "0 auto" }}>
              Submit custom installation, site assessment, and thermal optimization dispatch requests directly to our senior engineering field teams.
            </p>
          </div>

          {/* PORTAL CONTAINER WITH 3 UI STATES */}
          <div style={{
            backgroundColor: "#0F172A",
            border: "1px solid #1E293B",
            borderRadius: "16px",
            padding: "40px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
          }}>
            
            {/* STATE 1: NOT LOGGED IN */}
            {!currentUser && (
              <div style={{ textAlign: "center", padding: "30px 20px" }}>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(239, 68, 68, 0.15)",
                  color: "#EF4444",
                  marginBottom: "20px"
                }}>
                  🔒
                </div>
                <h3 style={{ fontSize: "1.6rem", color: "#FFFFFF", marginBottom: "12px", fontFamily: "Montserrat" }}>
                  Sign Up or Log In Required
                </h3>
                <p style={{ color: "#94A3B8", fontSize: "1rem", maxWidth: "580px", margin: "0 auto 28px auto", lineHeight: "1.6" }}>
                  To maintain enterprise security and track active facility dispatches, service request forms are restricted to registered operator accounts.
                </p>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button
                    onClick={onOpenAuth}
                    style={{
                      backgroundColor: "#00C4EE",
                      color: "#090C13",
                      fontWeight: "700",
                      fontSize: "1rem",
                      padding: "14px 32px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    Sign Up / Log In Now
                  </button>
                  <button
                    onClick={onOpenDemo}
                    style={{
                      backgroundColor: "transparent",
                      color: "#FFFFFF",
                      fontWeight: "600",
                      fontSize: "1rem",
                      padding: "14px 32px",
                      borderRadius: "8px",
                      border: "1px solid #475569",
                      cursor: "pointer"
                    }}
                  >
                    Book Virtual Demo
                  </button>
                </div>
              </div>
            )}

            {/* STATE 2: LOGGED IN BUT NOT PAID */}
            {currentUser && !isPaid && (
              <div style={{ textAlign: "center", padding: "30px 20px" }}>
                <div style={{
                  display: "inline-block",
                  padding: "4px 14px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(234, 179, 8, 0.15)",
                  color: "#EAB308",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  marginBottom: "16px"
                }}>
                  FREE TIER ACCOUNT (UNPAID)
                </div>
                <h3 style={{ fontSize: "1.6rem", color: "#FFFFFF", marginBottom: "12px", fontFamily: "Montserrat" }}>
                  Active Plan Required for Service Requests
                </h3>
                <p style={{ color: "#94A3B8", fontSize: "1rem", maxWidth: "620px", margin: "0 auto 20px auto", lineHeight: "1.6" }}>
                  Logged in as <strong style={{ color: "#00C4EE" }}>{currentUser.username}</strong> ({currentUser.email}). Service dispatches and site integration request forms are reserved for active paid subscribers.
                </p>
                <div style={{
                  backgroundColor: "#1E293B",
                  borderRadius: "10px",
                  padding: "20px",
                  maxWidth: "500px",
                  margin: "0 auto 28px auto",
                  border: "1px solid #334155"
                }}>
                  <span style={{ color: "#E2E8F0", fontSize: "0.95rem" }}>
                    Select an ECAITM AI Liquid Cooling Plan starting at <strong>$80/mo</strong> to unlock unlimited technician dispatches.
                  </span>
                </div>
                <button
                  onClick={onNavigatePricing}
                  style={{
                    backgroundColor: "#FFD100",
                    color: "#090C13",
                    fontWeight: "800",
                    fontSize: "1.05rem",
                    padding: "14px 36px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  View Plans & Subscribe to Unlock
                </button>
              </div>
            )}

            {/* STATE 3: LOGGED IN AND PAID SUBSCRIBER */}
            {currentUser && isPaid && (
              <div>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: "24px",
                  marginBottom: "24px",
                  borderBottom: "1px solid #1E293B",
                  flexWrap: "wrap",
                  gap: "12px"
                }}>
                  <div>
                    <span style={{ color: "#10B981", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase" }}>
                      ✓ PAID SUBSCRIBER UNLOCKED
                    </span>
                    <h3 style={{ fontSize: "1.3rem", color: "#FFFFFF", marginTop: "4px" }}>
                      Welcome, {currentUser.username || currentUser.email.split('@')[0]}
                    </h3>
                  </div>
                  <div style={{
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                    color: "#10B981",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "700"
                  }}>
                    Plan: {currentUser.active_plan || 'Enterprise AI Package'}
                  </div>
                </div>

                {requestSubmitted ? (
                  <div style={{
                    textAlign: "center",
                    padding: "36px",
                    backgroundColor: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    borderRadius: "12px"
                  }}>
                    <div style={{ fontSize: "3rem", marginBottom: "12px" }}>✅</div>
                    <h3 style={{ color: "#FFFFFF", fontSize: "1.5rem", marginBottom: "8px", fontFamily: "Montserrat" }}>
                      Service Request #{requestSubmitted.id} Submitted!
                    </h3>
                    <p style={{ color: "#94A3B8", fontSize: "1rem", maxWidth: "600px", margin: "0 auto 16px auto" }}>
                      {requestSubmitted.message}
                    </p>
                    <div style={{ color: "#00C4EE", fontWeight: "700", fontSize: "0.9rem", marginBottom: "20px" }}>
                      Status: {requestSubmitted.status} (Sync Committed to Django DB & MongoDB Atlas)
                    </div>
                    <button
                      onClick={() => setRequestSubmitted(null)}
                      style={{
                        backgroundColor: "#00C4EE",
                        color: "#090C13",
                        fontWeight: "700",
                        padding: "10px 24px",
                        borderRadius: "6px",
                        border: "none",
                        cursor: "pointer"
                      }}
                    >
                      Submit Another Service Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleServiceSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                          Select Service Category *
                        </label>
                        <select
                          value={serviceForm.service_type}
                          onChange={(e) => setServiceForm({ ...serviceForm, service_type: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            borderRadius: "8px",
                            backgroundColor: "#1E293B",
                            border: "1px solid #334155",
                            color: "#FFFFFF",
                            outline: "none"
                          }}
                        >
                          <option value="Direct-to-Chip 2-Phase Installation & Integration">Direct-to-Chip 2-Phase Installation & Integration</option>
                          <option value="NeuCool™ IVU-500 In-Rack CDU Setup">NeuCool™ IVU-500 In-Rack CDU Setup</option>
                          <option value="EV-VPP Smart Grid Energy Arbitrage Setup">EV-VPP Smart Grid Energy Arbitrage Setup</option>
                          <option value="Custom AI High-Density Thermal Engineering">Custom AI High-Density Thermal Engineering</option>
                          <option value="Preventative Maintenance & Dielectric Fluid Audit">Preventative Maintenance & Dielectric Fluid Audit</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                          Facility Location / Address *
                        </label>
                        <input
                          type="text"
                          required
                          value={serviceForm.facility_location}
                          onChange={(e) => setServiceForm({ ...serviceForm, facility_location: e.target.value })}
                          placeholder="e.g. Austin Data Hub Node 4, TX"
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            borderRadius: "8px",
                            backgroundColor: "#1E293B",
                            border: "1px solid #334155",
                            color: "#FFFFFF",
                            outline: "none"
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                          Rack Count & Target TDP Density *
                        </label>
                        <input
                          type="text"
                          required
                          value={serviceForm.rack_count}
                          onChange={(e) => setServiceForm({ ...serviceForm, rack_count: e.target.value })}
                          placeholder="e.g. 16 Racks @ 80kW/rack"
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            borderRadius: "8px",
                            backgroundColor: "#1E293B",
                            border: "1px solid #334155",
                            color: "#FFFFFF",
                            outline: "none"
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                          Dispatch Urgency *
                        </label>
                        <select
                          value={serviceForm.urgency}
                          onChange={(e) => setServiceForm({ ...serviceForm, urgency: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            borderRadius: "8px",
                            backgroundColor: "#1E293B",
                            border: "1px solid #334155",
                            color: "#FFFFFF",
                            outline: "none"
                          }}
                        >
                          <option value="Immediate (24-48 Hours)">Immediate (24-48 Hours Emergency)</option>
                          <option value="Standard (7 Days)">Standard (7 Days)</option>
                          <option value="Scheduled Project (30 Days)">Scheduled Project (30 Days)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                        Project Notes & Technical Infrastructure Specs
                      </label>
                      <textarea
                        rows="3"
                        value={serviceForm.details}
                        onChange={(e) => setServiceForm({ ...serviceForm, details: e.target.value })}
                        placeholder="Provide details about GPU cluster types (NVIDIA H100/H200/GB200, AMD MI300X), primary CDU connections, or power feed availability..."
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "8px",
                          backgroundColor: "#1E293B",
                          border: "1px solid #334155",
                          color: "#FFFFFF",
                          outline: "none",
                          fontFamily: "inherit"
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        backgroundColor: "#00C4EE",
                        color: "#090C13",
                        fontWeight: "800",
                        fontSize: "1rem",
                        padding: "14px 28px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        marginTop: "8px",
                        alignSelf: "flex-start"
                      }}
                    >
                      {submitting ? 'Submitting to Engineers...' : 'Submit Service Request (Priority Field Dispatch)'}
                    </button>

                  </form>
                )}

              </div>
            )}

          </div>

        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-item:hover {
          border-color: #2e3192 !important;
        }

        .tab-item.active {
          border-color: #2e3192 !important;
        }

        @media (max-width: 991px) {
          .hero-section h1 {
            font-size: 30px !important;
            line-height: 38px !important;
          }
          .hero-section h2 {
            font-size: 28px !important;
            line-height: 38px !important;
          }
          .tab-menu {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          .tab-item {
            min-width: 120px !important;
            padding: 25px 20px !important;
          }
          [style*="width: 32%"] {
            width: 45% !important;
            flex: 0 0 45% !important;
          }
          [style*="width: 60%"] {
            width: 100% !important;
            flex: 0 0 100% !important;
          }
        }

        @media (max-width: 767px) {
          .hero-section {
            padding: 80px 15px !important;
          }
          .hero-section h1 {
            font-size: 28px !important;
            line-height: 32px !important;
          }
          .hero-section h2 {
            font-size: 22px !important;
            line-height: 26px !important;
          }
          .tab-menu {
            flex-direction: column !important;
            align-items: center !important;
            gap: 15px !important;
            margin-top: -30px !important;
          }
          .tab-item {
            width: 96% !important;
            min-width: unset !important;
            padding: 25px 20px !important;
          }
          [style*="width: 32%"] {
            width: 100% !important;
            flex: 0 0 100% !important;
          }
          [style*="width: 60%"] {
            width: 100% !important;
            flex: 0 0 100% !important;
          }
          .tab-content [style*="display: flex"] {
            flex-direction: column !important;
            align-items: center !important;
          }
          [style*="gap: 50px"] {
            gap: 30px !important;
          }
          .partner-logos {
            gap: 30px !important;
          }
        }

        @media (max-width: 478px) {
          .hero-section h1 {
            font-size: 27px !important;
            line-height: 1.5 !important;
          }
          .hero-section h2 {
            font-size: 20px !important;
            line-height: 1.5 !important;
          }
          .tab-item {
            padding: 20px 15px !important;
            font-size: 18px !important;
          }
          [style*="font-size: 22px"] {
            font-size: 16px !important;
          }
          [style*="line-height: 40px"] {
            line-height: 26px !important;
          }
          [style*="padding-top: 75px"] {
            padding-top: 40px !important;
          }
          [style*="padding-bottom: 100px"] {
            padding-bottom: 60px !important;
          }
        }
      `}</style>
    </div>
  );
}

export { ServicesPage };