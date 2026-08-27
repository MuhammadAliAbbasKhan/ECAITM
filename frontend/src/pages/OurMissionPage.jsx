// src/pages/CompanyPage.jsx
import React, { useState } from "react";

export default function CompanyPage() {
  // Popup states
  const [popupOpen, setPopupOpen] = useState(null);

  // Leadership data from HTML
  const leadershipData = [
    {
      id: "john-hewitt",
      name: "John Hewitt",
      title: "Chief Executive Officer",
      image: "https://accelsius.com/wp-content/uploads/John-Hewitt-Headshot.png",
      popupId: "7768",
      bio: "John Hewitt has cultivated three decades of leadership in the industrial, technology, and data center infrastructure sectors. Prior to becoming Chief Executive Officer at Accelsius, Hewitt served as CEO at Robertshaw Controls. His career also includes senior positions at TE Connectivity, Motorola, Baker Hughes, and Vertiv, where he oversaw the multi-billion-dollar buildout of AI-driven data centers as President of the Americas. Hewitt holds several board positions and previously served on the Accelsius board as a founding member, providing him with an extensive knowledge of this company, its customers, and the key differentiators of our mission critical cooling solution."
    },
    {
      id: "josh-claman",
      name: "josh claman",
      title: "Executive Chairman",
      image: "https://accelsius.com/wp-content/uploads/Josh-Claman.png",
      popupId: "1462",
      bio: "Josh Claman is an expert global executive with over 30 years of experience in data center technology. He's driven growth and innovation at NCR, AT&T, and, as a Dell Executive, he managed significant business units across Europe and the Americas, including as General Manager of Dell UK. Post-Dell, he has led ventures in 3D printing and digital health, championing transformative tech. He holds degrees with honors from the University of Illinois and advanced business qualifications from the University of South Carolina and Oxford University."
    },
    {
      id: "matt-cruce",
      name: "Matt Cruce",
      title: "Chief Operating Officer",
      image: "https://accelsius.com/wp-content/uploads/Matt-Cruce.png",
      popupId: "1478",
      bio: "Matt Cruce is an expert in high-tech supply chain management, including procurement and strategy. He has 12 years of experience at Dell Technologies, where he led Supply Chain Planning for servers. He also has engineering experience with NASA's Orion Program at Lockheed Martin. Matt earned a B.S. in Aerospace Engineering from the University of Illinois at Urbana-Champaign."
    },
    {
      id: "dr-richard-bonner",
      name: "Dr. Richard Bonner",
      title: "Chief Technology Officer",
      image: "https://accelsius.com/wp-content/uploads/Dr.-Richard-Bonner.png",
      popupId: "1484",
      bio: "Dr. Bonner is a distinguished heat transfer researcher with 18 years in thermal product development, specializing in two-phase cooling. He has authored over fifty papers and holds five U.S. patents, having designed cooling products for 125+ clients in various sectors. He is a former AIChE Transport and Energy Processes Division Director and holds a B.S., M.S., and Ph.D. in Chemical Engineering from Lehigh University."
    },
    {
      id: "liz-cruz",
      name: "Liz Cruz",
      title: "Chief Business Development Officer",
      image: "https://accelsius.com/wp-content/uploads/Liz-Cruz.png",
      popupId: "4942",
      bio: "Liz Cruz is the Chief Business Development Officer at Accelsius, bringing extensive expertise in the data center industry. Her background as an analyst has enabled her to understand emerging technologies and drive growth through strategic positioning and market differentiation. Previously, Liz led Omdia's Data Center Research Practice, advising industry leaders on the adoption and application of data center technologies. She also served as Director of Content for Data Center Events & Media Programs at Informa Tech, where she honed her skills in driving engagement and building brand awareness."
    },
    {
      id: "robert-wehmeyer",
      name: "Robert Wehmeyer",
      title: "Chief Financial Officer",
      image: "https://accelsius.com/wp-content/uploads/Robert-Wehmeyer.png",
      popupId: "1493",
      bio: "Robert Wehmeyer has over 25 years of experience in managing financial operations for ultra-high growth companies, including Arthur Andersen & Co, Westinghouse, Dell, and National Instruments. He has led finance teams in manufacturing, R&D, operations, services, sales, and marketing."
    },
    {
      id: "jeff-taus",
      name: "Jeff Taus",
      title: "Senior VP of Strategic Engineering",
      image: "https://accelsius.com/wp-content/uploads/Jeff-Taus.png",
      popupId: "1496",
      bio: "Jeff Taus is a technical leader with over 25 years of experience in electronics, specializing in enterprise computing and leading projects from automotive controllers to global server deployments. With 13 years at Dell's OEM group, he tailored solutions across markets. He holds a BS in Electrical Engineering from Oakland University."
    },
    {
      id: "jackie-oster",
      name: "Jackie Oster",
      title: "Senior Director, People Operations",
      image: "https://accelsius.com/wp-content/uploads/Jackie-Oster-Website-Photo.png",
      popupId: "2827",
      bio: "Jackie brings over 15 years of experience in HR and education, leading strategic initiatives that improve talent acquisition, employee engagement, and performance management. At Accelsius, she has created and optimized HR processes from the ground up and led recruitment while fostering an inclusive, data-driven culture. Prior to Accelsius, Jackie held roles in business development and human resources, where she developed comprehensive training programs and successfully managed employee relations."
    }
  ];

  // Close popup function
  const closePopup = () => setPopupOpen(null);

  return (
    <div className="company-page" style={{
      fontFamily: "Lato, sans-serif",
      fontWeight: "400",
      color: "#1d1c4e",
      lineHeight: "1.5",
      backgroundColor: "#ffffff"
    }}>

      {/* ===== HERO SECTION ===== */}
      <section id="brxe-unxwtq" className="brxe-section mc-page-header company-hero" style={{
        backgroundImage: "url('https://accelsius.com/wp-content/uploads/Austin-hero-1.jpg')",
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
          background: "linear-gradient(rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.59))",
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
          <h1 id="brxe-ecdurg" className="brxe-heading mc-page-header__heading" style={{
            color: "#ffffff",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "60px",
            lineHeight: "1.5",
            fontWeight: "600",
            textAlign: "center"
          }}>Company</h1>
        </div>
      </section>

      {/* ===== OUR FOUNDING SECTION ===== */}
      <section className="brxe-section services company" style={{
        paddingTop: "var(--space-xl)",
        paddingBottom: "calc(var(--section-space-l) * .9)",
        width: "100%"
      }}>
        <h2 id="brxe-sbgpfk" className="brxe-heading services__heading company__heading" style={{
          color: "#1d1c4e",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "48px",
          textAlign: "center",
          paddingBottom: "20px"
        }}>Our Founding</h2>
        <div className="brxe-container company__intro grid--auto-2" style={{
          width: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          alignItems: "center",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          padding: "0 20px"
        }}>
          <div className="brxe-block company__block" style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
            <div className="brxe-text services__text company__text" style={{
              fontSize: "22px",
              lineHeight: "1.5"
            }}>
              <p style={{ marginBottom: "20px" }}>
                Accelsius was formed in 2022 to develop and commercialize a cooling solution system based on years of scientific thermal research. Founded by Innventure, our experts have created a new liquid cooling system that is serviceable, scalable and resilient: NeuCool<sup>®</sup>.
              </p>
              <p>
                Thermal science experts have written that "<a href="https://accelsius.com/wp-content/uploads/The-Art-of-Two-Phase-Data-Center-Cooling.pdf" target="_blank" rel="noopener" style={{ color: "#1d1c4e" }}>2-Phase is an Art</a>." At Accelsius, we have turned art into practical reality: the revolutionary NeuCool Platform is a real-life solution for AI, ML, and other mission-critical applications. We stand behind our technology, and we are fiercely proud to bring it to our customers and partners.
              </p>
            </div>
            <a id="brxe-spthon" className="brxe-button btn--action intro__button bricks-button bricks-background-primary" href="https://accelsius.com/wp-content/uploads/Accelsius-Evaluation-Infographic.pdf" target="_blank" style={{
              fontSize: "18px",
              fontFamily: "Lato, sans-serif",
              fontWeight: "700",
              lineHeight: "32px",
              color: "#ffffff",
              textTransform: "none",
              backgroundColor: "#2e3192",
              borderRadius: "10px",
              padding: "13px 30px",
              display: "inline-block",
              textAlign: "center",
              textDecoration: "none",
              alignSelf: "center",
              transition: "0.5s"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#000000"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#2e3192"}
            >
              Accelsius at a Glance &gt;
            </a>
          </div>
          <div className="brxe-block company__block">
            <figure className="brxe-image company__image tag" style={{
              borderRadius: "var(--radius-l)",
              overflow: "hidden"
            }}>
              <img
                width="660"
                height="440"
                src="https://accelsius.com/wp-content/uploads/Bonner-.jpg"
                className="css-filter size-full"
                alt="Dr. Richard Bonner"
                decoding="async"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ===== AWARD-WINNING TEAM SECTION ===== */}
      <section className="brxe-section team" style={{
        backgroundColor: "var(--base-ultra-light)",
        paddingBottom: "var(--space-m)",
        paddingTop: "var(--space-xl)",
        width: "100%"
      }}>
        <h2 id="brxe-hhsxrh" className="brxe-heading services__heading company__heading team__heading" style={{
          color: "#1d1c4e",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "48px",
          textAlign: "center",
          paddingBottom: "20px"
        }}>Our Award-Winning Team</h2>
        <div id="brxe-kncads" className="brxe-container company__intro team__intro team__team team" style={{
          width: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 20px"
        }}>
          <div id="brxe-kiizzh" className="brxe-block team__block" style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: "25px",
            alignItems: "center",
            gap: "30px"
          }}>
            <div id="brxe-jbuxnt" className="brxe-text team__text" style={{
              width: "52%",
              fontSize: "22px",
              lineHeight: "1.5"
            }}>
              <p style={{ marginBottom: "15px" }}>
                Our leadership team brings Accelsius decades of server and IT industry experience. Together, they expertly steer our mission to deliver enterprise-grade technologies. United by a shared vision, we are driven to create a cooling solution that is powerful, scalable and effective.
              </p>
              <p style={{ marginBottom: "15px" }}>
                Our expert teams in R&amp;D, supply chain, engineering, and services have developed a liquid cooling solution that sets a new standard. It is not only revolutionary but dependable for large-scale deployment with complete confidence.
              </p>
              <p>
                As a company, we stand for balanced technological superiority, operational innovation, and enterprise-grade engineering. At Accelsius, we're establishing the future of cooling technology that is fully capable and ready to meet the challenging demands of tomorrow's computing needs.
              </p>
            </div>
            <figure id="brxe-mkztxx" className="brxe-image team__abj-badge tag" style={{
              width: "45%",
              paddingTop: "var(--space-m)"
            }}>
              <img
                width="492"
                height="476"
                src="https://accelsius.com/wp-content/uploads/ABJ-Badge.png"
                className="css-filter size-full"
                alt=""
                decoding="async"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </figure>
          </div>
          <figure className="brxe-image team__image tag" style={{
            borderRadius: "var(--radius-l)",
            overflow: "hidden"
          }}>
            <img
              width="1093"
              height="651"
              src="https://accelsius.com/wp-content/uploads/Our_Expert_Team__collage.png"
              className="css-filter size-full"
              alt=""
              decoding="async"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </figure>
        </div>
      </section>

      {/* ===== EXECUTIVE LEADERSHIP SECTION ===== */}
      <section id="brxe-ypyidu" className="brxe-section exec-leadership" style={{
        paddingTop: "var(--space-xl)",
        paddingBottom: "var(--space-xl)",
        width: "100%"
      }}>
        <h2 id="brxe-scjdis" className="brxe-heading services__heading executive-leadership__heading" style={{
          color: "#1d1c4e",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "48px",
          textAlign: "center",
          paddingBottom: "20px"
        }}>Executive Leadership</h2>
        <div id="brxe-ubgjrp" className="brxe-container exec-leadership__container grid--auto-4" style={{
          width: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "30px",
          padding: "0 20px",
          justifyItems: "center"
        }}>
          {leadershipData.map((leader, index) => (
            <div
              key={leader.id}
              id={index === 0 ? "brxe-ajrquh" : index === 1 ? "brxe-gltvtl" : ""}
              className="brxe-block executive-leadership__block exec-claman exec-leadership__block"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: "var(--fr--list-pad-y)",
                width: "100%",
                maxWidth: "250px",
                textAlign: "center"
              }}
            >
              <figure
                className="brxe-image executive-leadership__image exec-leadership__image tag"
                onClick={() => setPopupOpen(leader.popupId)}
                style={{
                  width: "100%",
                  maxWidth: "205px",
                  cursor: "pointer",
                  borderRadius: "50%",
                  overflow: "hidden"
                }}
              >
                <img
                  width="205"
                  height="206"
                  src={leader.image}
                  className="css-filter size-full"
                  alt={leader.name}
                  decoding="async"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </figure>
              <h4
                id={index === 0 ? "brxe-tualsc" : index === 1 ? "brxe-xptygc" : index === 2 ? "brxe-ivfoja" : index === 3 ? "brxe-fbyqlu" : index === 4 ? "brxe-xpyngx" : index === 5 ? "brxe-zixlju" : index === 6 ? "brxe-ruwruu" : "brxe-hngxyt"}
                className="brxe-heading executive-leadership__name exec-leadership__name"
                style={{
                  textTransform: "uppercase",
                  fontSize: "var(--text-m)",
                  color: "#045782",
                  letterSpacing: "0.125px",
                  fontFamily: "Montserrat, sans-serif",
                  margin: "10px 0 5px 0"
                }}
              >
                {leader.name}
              </h4>
              <div
                id={index === 6 ? "brxe-puhemo" : index === 7 ? "brxe-xoujzv" : ""}
                className="brxe-text executive-leadership__text executive-leadership__title exec-leadership__title"
                style={{
                  fontSize: "var(--text-m)",
                  lineHeight: "1.5",
                  textAlign: "center"
                }}
              >
                <p style={{ margin: "0", fontSize: "16px" }}>{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== AWARDS & MEMBERSHIPS SECTION ===== */}
      <section id="brxe-nshtir" className="brxe-section services partner-ecosystem memberships" style={{
        backgroundColor: "var(--base-ultra-light)",
        paddingTop: "var(--space-xl)",
        paddingRight: "var(--space-xl)",
        paddingBottom: "75px",
        paddingLeft: "var(--space-xl)",
        width: "100%"
      }}>
        <div className="brxe-container services__intro partner-ecosystem__intro memberships__intro" style={{
          width: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px"
        }}>
          <h2 id="brxe-fizmhw" className="brxe-heading partner-ecosystem__heading memberships__heading" style={{
            color: "#1d1c4e",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "48px",
            textAlign: "center"
          }}>Awards &amp; Memberships</h2>
        </div>
        <div id="brxe-ysluiw" className="brxe-container partner-ecosystem__partner-eco-logos memberships__partner-eco-logos" style={{
          width: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          paddingTop: "var(--space-l)",
          paddingBottom: "var(--space-l)",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px"
        }}>
          <div id="brxe-fmywgh" className="brxe-block partner-ecosystem__block memberships__block" style={{
            flex: "1 1 200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <figure className="brxe-image partner-ecosystem__the-green-grid memberships__the-green-grid tag">
              <img
                width="393"
                height="110"
                src="https://accelsius.com/wp-content/uploads/The-Green-Grid-logo.png"
                className="css-filter size-full"
                alt=""
                decoding="async"
                style={{ width: "100%", maxWidth: "393px", height: "auto" }}
              />
            </figure>
          </div>
          <div id="brxe-waxaoz" className="brxe-block partner-ecosystem__block memberships__block" style={{
            flex: "1 1 200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <figure id="brxe-tvbqct" className="brxe-image partner-ecosystem__open-community memberships__open-community tag" style={{
              width: "300px"
            }}>
              <img
                width="836"
                height="335"
                src="https://accelsius.com/wp-content/uploads/Open-Community-logo.png"
                className="css-filter size-full"
                alt=""
                decoding="async"
                style={{ width: "100%", height: "auto" }}
              />
            </figure>
          </div>
          <div id="brxe-pzhrdq" className="brxe-block partner-ecosystem__block memberships__block" style={{
            flex: "1 1 200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <figure className="brxe-image partner-ecosystem__climate-accord memberships__climate-accord tag">
              <img
                width="324"
                height="62"
                src="https://accelsius.com/wp-content/uploads/Climate-Accord-hor.png"
                className="css-filter size-full"
                alt=""
                decoding="async"
                style={{ width: "100%", maxWidth: "324px", height: "auto" }}
              />
            </figure>
          </div>
          <div id="brxe-sfnbmo" className="brxe-block partner-ecosystem__block memberships__block" style={{
            flex: "1 1 200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <figure className="brxe-image partner-ecosystem__climate-accord memberships__climate-accord tag">
              <img
                width="393"
                height="82"
                src="https://accelsius.com/wp-content/uploads/2025_CRN_DataCenter50_Horizontal_393X82.png"
                className="css-filter size-full"
                alt=""
                decoding="async"
                style={{ width: "100%", maxWidth: "393px", height: "auto" }}
              />
            </figure>
          </div>
        </div>
        <div id="brxe-uwmqbc" className="brxe-block partner-ecosystem__block memberships__block" style={{
          width: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 0"
        }}>
          <figure id="brxe-xjznjj" className="brxe-image partner-ecosystem__climate-accord memberships__climate-accord tag" style={{
            width: "25%"
          }}>
            <img
              src="https://accelsius.com/wp-content/uploads/nvidia-inception-program-badge-rgb-for-screen-111.svg"
              className="css-filter size-full"
              alt=""
              decoding="async"
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
          <div id="brxe-zcuvbg" className="brxe-text" style={{
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "24px",
            textAlign: "center"
          }}>
            <p>© 2025 NVIDIA and the NVIDIA logo are trademarks and/or registered trademarks of NVIDIA Corporation in the U.S. and other countries.</p>
          </div>
        </div>
      </section>

      {/* ===== EVENTS SECTION ===== */}
      <section className="brxe-section events" style={{
        rowGap: "var(--grid-gap)",
        width: "100%",
        maxWidth: "1360px",
        margin: "0 auto",
        paddingTop: "var(--space-xl)",
        paddingBottom: "var(--space-xl)",
        paddingLeft: "20px",
        paddingRight: "20px"
      }}>
        <div id="brxe-pwgmae" className="brxe-container services__intro events__intro" style={{
          width: "100%",
          paddingBottom: "var(--space-m)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}>
          <h2 id="brxe-ciepor" className="brxe-heading partner-ecosystem__heading events__heading" style={{
            color: "#1d1c4e",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "48px",
            paddingBottom: "calc(var(--space-) * .25)"
          }}>Events</h2>
          <button
            id="brxe-kcduuf"
            className="brxe-button btn--action intro__button bricks-button bricks-background-primary"
            style={{
              fontSize: "18px",
              fontFamily: "Lato, sans-serif",
              fontWeight: "700",
              lineHeight: "32px",
              color: "#ffffff",
              textTransform: "none",
              backgroundColor: "#2e3192",
              borderRadius: "10px",
              padding: "13px 30px",
              display: "inline-block",
              textAlign: "center",
              border: "none",
              cursor: "pointer",
              transition: "0.5s"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#000000"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#2e3192"}
            onClick={() => window.open("https://accelsius.com/company/#", "_blank")}
          >
            Preview Our Booth &gt;
          </button>
        </div>

        {/* Event 1: Datacloud USA */}
        <div id="brxe-dueahn" className="brxe-container events__container grid--auto-1-2" style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "40px",
          alignItems: "center",
          padding: "20px 0"
        }}>
          <div className="brxe-block events__sponsor">
            <figure id="brxe-keobcg" className="brxe-image events__image tag" style={{
              width: "100%",
              maxWidth: "300px"
            }}>
              <img
                width="1920"
                height="960"
                src="https://accelsius.com/wp-content/uploads/Datacloud-USA-Website-1920x960.png"
                className="css-filter size-large"
                alt=""
                decoding="async"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </figure>
          </div>
          <div className="brxe-block events__details">
            <h3 className="brxe-heading events__heading" style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#1d1c4e",
              fontSize: "36px",
              marginBottom: "10px"
            }}>Datacloud USA</h3>
            <div className="brxe-text events__text" style={{
              marginTop: "0",
              fontSize: "22px",
              lineHeight: "1.5"
            }}>
              <p style={{ marginBottom: "10px" }}>
                <b>September 2-3 // Austin, TX</b>
              </p>
              <p style={{ marginBottom: "10px" }}>
                Datacloud USA is a deal-making event that brings together decision makers across data centers, hyperscalers, fiber, neoclouds, energy, finance &amp; public sectors.
              </p>
              <p>
                Alongside a panel featuring Executive Chairman Josh Claman, we'll be hosting dedicated meetings throughout this conference. If you'd like to book time with a member of our leadership team, feel free to submit a "Contact Us" form below.
              </p>
            </div>
          </div>
        </div>

        <div className="brxe-divider mc-divider horizontal" style={{
          paddingTop: "var(--space-s)",
          paddingBottom: "var(--space-s)",
          width: "100%"
        }}>
          <div className="line" style={{
            borderTop: "1px solid #045782",
            borderTopStyle: "groove",
            width: "100%"
          }}></div>
        </div>

        {/* Event 2: OCP Global Summit */}
        <div id="brxe-cxqvtf" className="brxe-container events__container grid--auto-1-2" style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "40px",
          alignItems: "center",
          padding: "20px 0"
        }}>
          <div className="brxe-block events__sponsor">
            <figure id="brxe-tdwnwp" className="brxe-image events__image tag" style={{
              width: "100%",
              maxWidth: "300px"
            }}>
              <img
                width="1920"
                height="960"
                src="https://accelsius.com/wp-content/uploads/OCP-Global-Summit-Website-1920x960.jpg"
                className="css-filter size-large"
                alt=""
                decoding="async"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </figure>
          </div>
          <div className="brxe-block events__details">
            <h3 className="brxe-heading events__heading" style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#1d1c4e",
              fontSize: "36px",
              marginBottom: "10px"
            }}>OCP Global Summit</h3>
            <div className="brxe-text events__text" style={{
              marginTop: "0",
              fontSize: "22px",
              lineHeight: "1.5"
            }}>
              <p style={{ marginBottom: "10px" }}>
                <strong>October 12-15 // San Jose, CA</strong>
              </p>
              <p style={{ marginBottom: "10px" }}>
                The OCP Summit is the premier event uniting the most forward-thinking minds in open IT Ecosystem development.
              </p>
              <p>
                As a Ruby Sponsor, Accelsius will feature its latest solutions in Booth D7. Feel free to book time with our leadership by using the "Contact Us" form below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPUP MODAL ===== */}
      {popupOpen && (
        <div className="popup-overlay" style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0, 0, 0, 0.63)",
          zIndex: "99999",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px"
        }} onClick={closePopup}>
          <div className="popup-content" style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            maxWidth: "500px",
            width: "100%",
            padding: "40px",
            position: "relative",
            maxHeight: "90vh",
            overflowY: "auto"
          }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closePopup}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "25px",
                fontWeight: "900",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#045782"
              }}
            >
              ×
            </button>
            {leadershipData.find(l => l.popupId === popupOpen) && (
              <>
                <h3 style={{
                  color: "#045782",
                  fontWeight: "500",
                  fontSize: "24px",
                  textAlign: "center",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  fontFamily: "Montserrat, sans-serif",
                  marginBottom: "5px"
                }}>
                  {leadershipData.find(l => l.popupId === popupOpen).name}
                </h3>
                <h5 style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  textAlign: "center",
                  marginTop: "-0.4em",
                  fontFamily: "Montserrat, sans-serif",
                  marginBottom: "20px"
                }}>
                  {leadershipData.find(l => l.popupId === popupOpen).title}
                </h5>
                <div style={{
                  color: "#555",
                  fontSize: "16px",
                  lineHeight: "1.6"
                }}>
                  <p>{leadershipData.find(l => l.popupId === popupOpen).bio}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 991px) {
          #brxe-ecdurg {
            font-size: 40px !important;
            line-height: 46px !important;
          }
          #brxe-sbgpfk, #brxe-hhsxrh, #brxe-scjdis, #brxe-fizmhw, #brxe-ciepor {
            font-size: 36px !important;
          }
          #brxe-ysluiw {
            flex-wrap: wrap !important;
            justify-content: space-between !important;
          }
          #brxe-ysluiw > div {
            width: 45% !important;
            flex: 1 1 45% !important;
          }
          #brxe-ubgjrp {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #brxe-dueahn, #brxe-cxqvtf {
            grid-template-columns: 1fr !important;
          }
          #brxe-keobcg, #brxe-tdwnwp {
            max-width: 300px !important;
            margin: 0 auto !important;
          }
          #brxe-jbuxnt {
            width: 60% !important;
          }
          #brxe-mkztxx {
            width: 44% !important;
          }
          .company__intro {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 767px) {
          #brxe-ecdurg {
            font-size: 36px !important;
          }
          #brxe-unxwtq {
            height: 450px !important;
          }
          #brxe-sbgpfk, #brxe-hhsxrh, #brxe-scjdis, #brxe-fizmhw, #brxe-ciepor {
            font-size: 30px !important;
          }
          #brxe-ubgjrp {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #brxe-ysluiw > div {
            width: 100% !important;
            flex: 1 1 100% !important;
          }
          #brxe-kiizzh {
            flex-direction: column !important;
            align-items: center !important;
          }
          #brxe-jbuxnt {
            width: 100% !important;
          }
          #brxe-mkztxx {
            width: 44% !important;
          }
          .popup-content {
            padding: 30px 20px !important;
            margin: 10px !important;
          }
        }

        @media (max-width: 478px) {
          #brxe-ecdurg {
            font-size: 30px !important;
          }
          #brxe-unxwtq {
            height: 350px !important;
          }
          #brxe-sbgpfk, #brxe-hhsxrh, #brxe-scjdis, #brxe-fizmhw, #brxe-ciepor {
            font-size: 28px !important;
          }
          #brxe-ubgjrp {
            grid-template-columns: 1fr 1fr !important;
          }
          .executive-leadership__block {
            max-width: 160px !important;
          }
          .executive-leadership__name {
            font-size: 14px !important;
          }
          .executive-leadership__title p {
            font-size: 12px !important;
          }
          #brxe-spthon, #brxe-kcduuf {
            font-size: 16px !important;
            line-height: 28px !important;
          }
          #brxe-mkztxx {
            width: 100% !important;
          }
          #brxe-xjznjj {
            width: 50% !important;
          }
          .company__text {
            font-size: 18px !important;
          }
          .events__text {
            font-size: 18px !important;
          }
        }

        @media (max-width: 400px) {
          #brxe-ubgjrp {
            grid-template-columns: 1fr 1fr !important;
            gap: 15px !important;
          }
          .executive-leadership__block {
            max-width: 140px !important;
          }
        }
      `}</style>
    </div>
  );
}

export { CompanyPage as OurMissionPage, CompanyPage };