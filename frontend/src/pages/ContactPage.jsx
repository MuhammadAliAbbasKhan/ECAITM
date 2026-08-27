// src/pages/ContactPage.jsx
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    iAmA: "",
    interestedIn: "",
    heardAbout: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation would go here
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="contact-page" style={{
      fontFamily: "Lato, sans-serif",
      fontWeight: "400",
      color: "#1d1c4e",
      lineHeight: "1.5",
      backgroundColor: "#ffffff"
    }}>

      {/* ===== HERO SECTION ===== */}
      <section id="brxe-shtuoc" className="brxe-section mc-page-header contact-hero-bg" style={{
        backgroundImage: "url('https://accelsius.com/wp-content/uploads/Austin-night-skyline2-1920x700-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        alignItems: "center",
        justifyContent: "center",
        height: "700px",
        position: "relative",
        paddingRight: "0",
        paddingLeft: "0",
        width: "100%"
      }}>
        <div style={{
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          background: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))",
          pointerEvents: "none",
          zIndex: "1"
        }}></div>
        <div className="brxe-container mc-page-header__container" style={{
          width: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: "2",
          padding: "20px"
        }}>
          <h1 id="brxe-bvrndv" className="brxe-heading mc-page-header__heading" style={{
            color: "#ffffff",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "60px",
            lineHeight: "1.5",
            fontWeight: "600",
            textAlign: "center"
          }}>Contact Us Today</h1>
          <h2 id="brxe-uksgtt" className="brxe-heading mc-less-h1-h2-gap mc-page-header__subhead" style={{
            color: "#ffffff",
            fontSize: "54px",
            textAlign: "center",
            fontWeight: "300",
            lineHeight: "1.2",
            fontFamily: "Montserrat, sans-serif",
            marginTop: "-0.4rem",
            marginBottom: "0.25rem"
          }}>We're always ready to help</h2>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="brxe-section contact-form-section" style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
        width: "100%",
        backgroundColor: "#ffffff"
      }}>
        <div className="brxe-container" style={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          {formSubmitted ? (
            <div style={{
              textAlign: "center",
              padding: "40px",
              backgroundColor: "#f0f8ff",
              borderRadius: "10px",
              border: "2px solid #2e3192"
            }}>
              <h2 style={{ color: "#2e3192" }}>Thank You!</h2>
              <p style={{ fontSize: "18px" }}>Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px"
              }}>
                <div>
                  <label htmlFor="name" style={{
                    display: "block",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "5px",
                    color: "#1d1c4e"
                  }}>Name <span style={{ color: "red" }}>*</span></label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      outline: "none"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="company" style={{
                    display: "block",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "5px",
                    color: "#1d1c4e"
                  }}>Company <span style={{ color: "red" }}>*</span></label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      outline: "none"
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" style={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "5px",
                  color: "#1d1c4e"
                }}>Email <span style={{ color: "red" }}>*</span></label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label htmlFor="iAmA" style={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "5px",
                  color: "#1d1c4e"
                }}>I am a: <span style={{ color: "red" }}>*</span></label>
                <select
                  id="iAmA"
                  value={formData.iAmA}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                    backgroundColor: "#fff"
                  }}
                >
                  <option value="">Select...</option>
                  <option value="Potential user of the technology">Potential user of the technology</option>
                  <option value="Potential partner in product delivery to end-users">Potential partner in product delivery to end-users</option>
                  <option value="Academic">Academic</option>
                  <option value="Analyst">Analyst</option>
                  <option value="Media Professional">Media Professional</option>
                </select>
              </div>

              <div>
                <label htmlFor="interestedIn" style={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "5px",
                  color: "#1d1c4e"
                }}>I am interested in: <span style={{ color: "red" }}>*</span></label>
                <select
                  id="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                    backgroundColor: "#fff"
                  }}
                >
                  <option value="">Select...</option>
                  <option value="Getting more information">Getting more information</option>
                  <option value="Speaking with an Accelsius expert">Speaking with an Accelsius expert</option>
                  <option value="Scheduling an onsite or virtual demo">Scheduling an onsite or virtual demo</option>
                  <option value="Applying for the NeuCool Field Trial Program">Applying for the NeuCool Field Trial Program</option>
                  <option value="A project that could involve Accelsius">A project that could involve Accelsius</option>
                </select>
              </div>

              <div>
                <label htmlFor="heardAbout" style={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "5px",
                  color: "#1d1c4e"
                }}>I heard about Accelsius from: <span style={{ color: "red" }}>*</span></label>
                <select
                  id="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                    backgroundColor: "#fff"
                  }}
                >
                  <option value="">Select...</option>
                  <option value="Event">Event</option>
                  <option value="Webinar">Webinar</option>
                  <option value="Partner">Partner</option>
                  <option value="News">News</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Web Search">Web Search</option>
                  <option value="Word of Mouth">Word of Mouth</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" style={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "5px",
                  color: "#1d1c4e"
                }}>Message <span style={{ color: "red" }}>*</span></label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit"
                  }}
                ></textarea>
                <div style={{
                  fontSize: "12px",
                  color: "#666",
                  marginTop: "5px"
                }}>
                  {formData.message.length} characters / 0 words
                </div>
              </div>

              <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px"
              }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    padding: "14px 40px",
                    fontSize: "18px",
                    fontWeight: "700",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    fontFamily: "Lato, sans-serif"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#1d1f5d"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#000000"}
                >
                  Yes, tell me more
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 991px) {
          #brxe-bvrndv {
            font-size: 40px !important;
            line-height: 46px !important;
          }
          #brxe-uksgtt {
            font-size: 28px !important;
          }
          .contact-form-section {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
        }

        @media (max-width: 767px) {
          #brxe-bvrndv {
            font-size: 36px !important;
          }
          #brxe-shtuoc {
            height: 450px !important;
          }
          #brxe-uksgtt {
            font-size: 22px !important;
          }
          .contact-form-section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 478px) {
          #brxe-bvrndv {
            font-size: 30px !important;
          }
          #brxe-shtuoc {
            height: 350px !important;
          }
          #brxe-uksgtt {
            font-size: 20px !important;
          }
          .contact-form-section {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
          button[type="submit"] {
            font-size: 16px !important;
            padding: 12px 30px !important;
          }
        }

        /* Focus styles */
        input:focus, select:focus, textarea:focus {
          border-color: #2e3192 !important;
          box-shadow: 0 0 0 3px rgba(46, 49, 146, 0.1) !important;
        }
      `}</style>
    </div>
  );
}

export { ContactPage };