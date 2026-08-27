// src/pages/PartnersPage.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function PartnersPage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      content: 'We love partnering with Accelsius because of the innovation, amazing engineering, and the quality of craftsmanship that is so apparent when they shipped the rack for us ….. to our Miami HPC facility.',
      name: 'Tom Elowson',
      title: 'VP of Corporate Development at iM Data Centers'
    },
    {
      id: 2,
      content: 'As part of the ARPA-E [COOLERCHIPS] program, we have aggressive milestones to take it from a scientific experiment level to a scalability level on an actual rack and server. With the Accelsius CDU, we were able to move aggressively...better than any other solution we have here. Within a week, we were able to get the CDU, start it, commission, and get it running on the server behind us.',
      name: 'Dr. Dereje Agonafer & Sai Abhideep Pundla',
      title: 'University of Texas at Arlington'
    },
    {
      id: 3,
      content: 'Accelsius and The University of Texas at Arlington are advancing important work under the COOLERCHIPS program, and I\'m excited to see the impact this collaboration will have on US leadership in next-generation data center efficiency.',
      name: 'Peter de Bock',
      title: 'Program Director at ARPA-E'
    },
    {
      id: 4,
      content: 'Our partnership with Accelsius gives customers in the UK and across Europe the opportunity to see firsthand how liquid cooling can support their performance and sustainability objectives. This is part of our commitment to invest in our already world-leading integration center capability to ensure we continue to support the growing demands of AI and high-performance infrastructure.',
      name: 'Dan Thompson',
      title: 'Director of Data Center & Hybrid at Computacenter'
    },
    {
      id: 5,
      content: 'We\'re thrilled to enhance the Vista project with new innovations aimed at advancing AI and HPC technologies. Recognizing the need for novel cooling solutions to support our clients\' workloads, we\'re excited to work with Accelsius to address today\'s and future generations of high-wattage chips.',
      name: 'Dan Stanzione',
      title: 'Executive Director, Texas Advanced Computing Center'
    },
    {
      id: 6,
      content: 'By integrating Accelsius™️ liquid cooling systems into our offerings, we are extending our high-performance server cooling solution to address the critical energy saving and performance expectations our customers demand.',
      name: 'Jay Lawrence',
      title: 'CEO of Equus Compute Solutions'
    },
    {
      id: 7,
      content: 'One of the advantages of working with a partner like Accelsius is that from a technical perspective, they have a team of technical subject matter experts in different parts of the ecosystem. They know what they know, and they know who needs to be engaged to solve the customer problems, regardless of the vendor.',
      name: 'John Gross',
      title: 'CTO of Prometheus Hyperscale'
    },
    {
      id: 8,
      content: 'We\'re thrilled to collaborate with Accelsius to demonstrate our shared commitment to delivering the most advanced technologies. This project represents the first step in our vision to deliver data centers differently—with a step change in sustainability that our industry desperately needs.',
      name: 'Jean-Michel Picard',
      title: 'CEO of Nordik Data Centers'
    }
  ];

  // Duplicate testimonials for infinite loop effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Co-Innovation Labs data
  const coInnovationLabs = [
    {
      id: 'telehouse',
      image: 'https://accelsius.com/wp-content/uploads/Telehouse.jpg',
      link: 'https://www.telehouse.net/news/telehouse-launches-pioneering-liquid-cooling-lab/',
      alt: 'Telehouse'
    },
    {
      id: 'im-data',
      image: 'https://accelsius.com/wp-content/uploads/IM-Data-Centers.jpg',
      link: 'https://www.businesswire.com/news/home/20241119710269/en/Accelsius-and-iM-Data-Centers-Partner-to-Bring-Sustainable-High-Performance-Cooling-Solutions-to-Miami-Data-Center',
      alt: 'iM Data Centers'
    },
    {
      id: 'nordik',
      image: 'https://accelsius.com/wp-content/uploads/Nordik.jpg',
      link: 'https://www.businesswire.com/news/home/20250211507982/en/Accelsius-Partners-with-Nordik-Data-Centers-to-Build-Next-Generation-AI-Data-Center-and-Co-Innovation-Lab',
      alt: 'Nordik Data Centers'
    },
    {
      id: 'global-switch',
      image: 'https://accelsius.com/wp-content/uploads/Global-Switch-2.jpg',
      link: 'https://www.globenewswire.com/news-release/2025/06/05/3094226/0/en/Accelsius-Strengthens-Presence-in-European-Data-Centers-with-Global-Switch-Collaboration-and-London-Showcase.html',
      alt: 'Global Switch'
    },
    {
      id: 'equinix',
      image: 'https://accelsius.com/wp-content/uploads/Equinix-1.jpg',
      link: 'https://www.globenewswire.com/news-release/2025/07/15/3115442/0/en/Accelsius-Brings-NeuCool-to-Equinix-s-Co-Innovation-Facility-in-Ashburn.html',
      alt: 'Equinix'
    }
  ];

  // Strategic Partners
  const strategicPartners = [
    { name: 'Munters', logo: 'https://accelsius.com/wp-content/uploads/Munters-1.png', width: 183, height: 35 },
    { name: 'Johnson Controls', logo: 'https://accelsius.com/wp-content/uploads/Johnson-Controls-1.png', width: 137, height: 60 },
    { name: 'ECS', logo: 'https://accelsius.com/wp-content/uploads/ECS-logo.png', width: 117, height: 60 },
    { name: 'Silverback', logo: 'https://accelsius.com/wp-content/uploads/Silverback60-logo-1.png', width: 446, height: 60 },
    { name: 'Unicom', logo: 'https://accelsius.com/wp-content/uploads/Unicom-logo-60-1.png', width: 482, height: 60 },
    { name: 'Vertiv', logo: 'https://accelsius.com/wp-content/uploads/Vertiv-Logo.png', width: 243, height: 60 },
    { name: 'Celestica', logo: 'https://accelsius.com/wp-content/uploads/Celestica-Logo.png', width: 186, height: 60 },
    { name: 'Super Micro Computer', logo: 'https://accelsius.com/wp-content/uploads/Super_Micro_Computer_Logo-1.png', width: 113, height: 60 },
    { name: 'Computacenter', logo: 'https://accelsius.com/wp-content/uploads/Computacenter_60.png', width: 120, height: 60 },
    { name: 'Legrand', logo: 'https://accelsius.com/wp-content/uploads/Legrand-1.jpg', width: 400, height: 200 }
  ];

  // Selling Partners
  const sellingPartners = [
    { name: 'Valcom', logo: 'https://accelsius.com/wp-content/uploads/Valcom-1.png', width: 118, height: 60 },
    { name: 'Upstak', logo: 'https://accelsius.com/wp-content/uploads/Upstak-1.png', width: 155, height: 35 },
    { name: 'Triton Thermal Solutions', logo: 'https://accelsius.com/wp-content/uploads/Triton-Thermal-Solutions-1.png', width: 176, height: 60 },
    { name: 'Protective Power Systems', logo: 'https://accelsius.com/wp-content/uploads/Protective-Power-Systems-Controls-1.png', width: 110, height: 60 },
    { name: 'One Technology', logo: 'https://accelsius.com/wp-content/uploads/One-Technology-1.png', width: 105, height: 60 },
    { name: 'MKA Critical Power', logo: 'https://accelsius.com/wp-content/uploads/MKA-Critical-Power-1.png', width: 64, height: 60 },
    { name: 'Blackstar', logo: 'https://accelsius.com/wp-content/uploads/Blackstar-Diversified-Enterprises-1.png', width: 73, height: 60 },
    { name: 'WESCO', logo: 'https://accelsius.com/wp-content/uploads/WESCO_Logo.png', width: 98, height: 82 },
    { name: 'Tubbesing Partners', logo: 'https://accelsius.com/wp-content/uploads/Tubbesing_Partners.png', width: 111, height: 62 },
    { name: 'Sycomp', logo: 'https://accelsius.com/wp-content/uploads/Sycomp_Logo.png', width: 129, height: 36 },
    { name: 'Computacenter', logo: 'https://accelsius.com/wp-content/uploads/Computacenter.png', width: 150, height: 50 },
    { name: 'Aerico', logo: 'https://accelsius.com/wp-content/uploads/Aerico-Logo-1.png', width: 85, height: 48 },
    { name: 'Sphaera', logo: 'https://accelsius.com/wp-content/uploads/Sphaera_Colored-Logo_Vertical@2x-1.png', width: 117, height: 60 },
    { name: 'NETP', logo: 'https://accelsius.com/wp-content/uploads/NETP-Logo-1-1.png', width: 540, height: 108 },
    { name: 'ECS', logo: 'https://accelsius.com/wp-content/uploads/ECS_logo-1.png', width: 72, height: 37 },
    { name: 'Climb', logo: 'https://accelsius.com/wp-content/uploads/Climb-Logo-1.png', width: 116, height: 44 },
    { name: 'Ambient', logo: 'https://accelsius.com/wp-content/uploads/Ambient.png', width: 150, height: 50 }
  ];

  // Service Partners
  const servicePartners = [
    { name: 'Silverback', logo: 'https://accelsius.com/wp-content/uploads/Silverback60-logo_02.png', width: 169, height: 26 },
    { name: 'Unicom', logo: 'https://accelsius.com/wp-content/uploads/Unicom-logo-60_02.png', width: 180, height: 24 }
  ];

  // MEPs
  const meps = [
    { name: 'Jacobs', logo: 'https://accelsius.com/wp-content/uploads/Jacobs.png', width: 206, height: 48 },
    { name: 'TSS', logo: 'https://accelsius.com/wp-content/uploads/TSS_logo.png', width: 110, height: 33 },
    { name: 'Compu Dynamics', logo: 'https://accelsius.com/wp-content/uploads/Compu_Dynamics_Logo.png', width: 224, height: 56 }
  ];

  // Colos
  const colos = [
    { name: 'Equinix', logo: 'https://accelsius.com/wp-content/uploads/Equinix-Logo-Standard-1-2-1.jpg', width: 120, height: 58 },
    { name: 'DarkNX', logo: 'https://accelsius.com/wp-content/uploads/DarkNX-1-1.png', width: 203, height: 60 },
    { name: 'iM Data Centers', logo: 'https://accelsius.com/wp-content/uploads/iM-Data_Centers_logo.png', width: 131, height: 31 },
    { name: 'Telehouse', logo: 'https://accelsius.com/wp-content/uploads/Telehouse_Logo_Navy.png', width: 97, height: 23 },
    { name: 'Nordik', logo: 'https://accelsius.com/wp-content/uploads/logo-Nordik-data-center_1.png', width: 99, height: 35 },
    { name: 'Global Switch', logo: 'https://accelsius.com/wp-content/uploads/Global_Switch_Symbol_Green_RGB_55px.png', width: 55, height: 55 }
  ];

  // R&D Partners
  const rdPartners = [
    { name: 'UT Arlington', logo: 'https://accelsius.com/wp-content/uploads/University-of-Texas-at-Arlington-1-1.png', width: 133, height: 57 },
    { name: 'RISE', logo: 'https://accelsius.com/wp-content/uploads/RISE-1-1.png', width: 133, height: 57 },
    { name: 'Binghamton', logo: 'https://accelsius.com/wp-content/uploads/Binghamton-1-1.png', width: 133, height: 60 }
  ];

  // Duplicate partner arrays for infinite scroll
  const duplicatedStrategic = [...strategicPartners, ...strategicPartners, ...strategicPartners];
  const duplicatedSelling = [...sellingPartners, ...sellingPartners, ...sellingPartners];
  const duplicatedService = [...servicePartners, ...servicePartners, ...servicePartners];
  const duplicatedMeps = [...meps, ...meps, ...meps];
  const duplicatedColos = [...colos, ...colos, ...colos];
  const duplicatedRD = [...rdPartners, ...rdPartners, ...rdPartners];

  // Duplicated testimonials for loop
  const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <main style={{ background: 'white', fontFamily: 'Inter, sans-serif' }}>
      
      {/* ===== HERO SECTION ===== */}
      <section style={{
        backgroundImage: 'url("https://accelsius.com/wp-content/uploads/Banner-1-1.jpg")',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '295px 15px 214px 15px',
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
            lineHeight: '75px',
            color: '#ffffff',
            textAlign: 'center'
          }}>
            Our Partners
          </h1>
          <div style={{
            fontSize: '30px',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 700,
            lineHeight: '34px',
            color: '#ffffff',
            textAlign: 'center',
            marginTop: '0'
          }}>
            <p>Play a pivotal role in the future of liquid cooling</p>
          </div>
        </div>
      </section>

      {/* ===== CERTIFIED PARTNERS PROGRAM ===== */}
      <section style={{
        padding: '77px 15px 102px 15px'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '60px',
            color: '#1d1c4e',
            textAlign: 'center',
            textTransform: 'capitalize'
          }}>
            Certified Partners Program
          </h2>
          <div style={{
            fontSize: '22px',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 400,
            lineHeight: '32px',
            textAlign: 'center',
            marginTop: '5px',
            color: '#4B5563'
          }}>
            <p>Accelsius' Certified Partners Program brings together top vendors across the data center ecosystem to deliver seamless, end-to-end NeuCool<sup>®</sup> deployments—from site selection to powering your first AI application. Operators receive white-glove service at every step, while partners collaborate with the leading provider of two-phase liquid cooling to deliver unmatched value to shared customers.</p>
          </div>
          <div style={{
            fontSize: '22px',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 400,
            lineHeight: '32px',
            textAlign: 'center',
            marginTop: '5px',
            color: '#4B5563'
          }}>
            <p><span>Already a Partner? Login to your portal&nbsp;<a href="https://accelsius.com/deal-registration/" target="_blank" rel="noreferrer noopener" style={{ color: '#2d308f', fontWeight: 800, textDecoration: 'none' }}><strong>here</strong></a>.</span></p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '15px',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            <a
              href="#co-innovation-lab"
              style={{
                display: 'inline-block',
                padding: '26px 29px',
                background: '#2d308f',
                color: '#ffffff',
                borderRadius: '8px',
                fontSize: '24px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                lineHeight: '30px',
                textDecoration: 'none',
                textAlign: 'center',
                width: '308px',
                transition: 'background 0.5s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#000000'}
              onMouseLeave={(e) => e.target.style.background = '#2d308f'}
            >
              Co-Innovation Labs
            </a>
            <a
              href="#our-partner"
              style={{
                display: 'inline-block',
                padding: '26px 30px',
                background: '#2d308f',
                color: '#ffffff',
                borderRadius: '8px',
                fontSize: '24px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                lineHeight: '30px',
                textDecoration: 'none',
                textAlign: 'center',
                width: '308px',
                transition: 'background 0.5s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#000000'}
              onMouseLeave={(e) => e.target.style.background = '#2d308f'}
            >
              Our Partners
            </a>
            <a
              href="#become-a-partners"
              style={{
                display: 'inline-block',
                padding: '26px 30px',
                background: '#2d308f',
                color: '#ffffff',
                borderRadius: '8px',
                fontSize: '24px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                lineHeight: '30px',
                textDecoration: 'none',
                textAlign: 'center',
                width: '308px',
                transition: 'background 0.5s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#000000'}
              onMouseLeave={(e) => e.target.style.background = '#2d308f'}
            >
              Become A Partner
            </a>
          </div>
        </div>
      </section>

      {/* ===== CO-INNOVATION LABS ===== */}
      <section style={{
        padding: '72px 15px',
        background: 'linear-gradient(91.57deg, #016590 1.34%, #1D1F5D 100%)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '60px',
            color: '#ffffff',
            textAlign: 'center',
            textTransform: 'capitalize'
          }}>
            Co-Innovation Labs
          </h2>
        </div>
      </section>

      {/* ===== CO-INNOVATION LABS GRID ===== */}
      <section style={{
        padding: '65px 15px 105px 15px'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            fontSize: '22px',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 400,
            lineHeight: '32px',
            textAlign: 'center',
            padding: '0 70px'
          }}>
            <p>Co-Innovation Labs are global hubs designed to demonstrate NeuCool technology and highlight our strategic partnerships with key industry players.</p>
            <p style={{ marginTop: '1rem' }}>These facilities provide visitors with a comprehensive testing and benchmarking environment to witness credible, data-backed proof of our superior performance and sustainability.</p>
          </div>
        </div>

        <div style={{
          maxWidth: '1280px',
          margin: '45px auto 0',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {coInnovationLabs.map((lab) => (
            <a
              key={lab.id}
              href={lab.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '31%',
                borderRadius: '10px',
                overflow: 'hidden',
                transition: 'transform 0.5s',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.01)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img
                src={lab.image}
                alt={lab.alt}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
          ))}
        </div>
      </section>

      {/* ===== OUR PARTNERS ===== */}
      <section style={{
        padding: '72px 15px',
        background: 'linear-gradient(91.57deg, #016590 1.34%, #1D1F5D 100%)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '48px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '60px',
            color: '#ffffff',
            textAlign: 'center',
            textTransform: 'capitalize'
          }}>
            Our Partners
          </h3>
        </div>
      </section>

      {/* ===== ECOSYSTEM PARTNERS ===== */}
      <section style={{
        padding: '70px 15px 70px 15px'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '36px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '44px',
            color: '#1d1c4e'
          }}>
            Strategic Partners
          </h3>
          <div style={{
            fontSize: '22px',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 400,
            lineHeight: '32px',
            textAlign: 'center',
            color: '#1c1c1c',
            marginTop: '5px',
            padding: '0 50px'
          }}>
            <p>Accelsius collaborates with these partners to deliver tailored solutions—whether enabling scalable manufacturing or creating seamlessly integrated systems.</p>
          </div>
        </div>

        {/* Strategic Partners Slider */}
        <div style={{
          maxWidth: '1280px',
          margin: '40px auto 0',
          padding: '0 2rem',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            animation: 'scrollPartners 60s linear infinite',
            gap: '50px',
            alignItems: 'center'
          }}>
            {duplicatedStrategic.map((partner, index) => (
              <div
                key={index}
                style={{
                  flex: '0 0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100px',
                  minWidth: '100px'
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
      </section>

      {/* ===== SELLING PARTNERS ===== */}
      <section id="our-partner" style={{
        padding: '85px 15px 110px 15px',
        background: '#f8f8f8'
      }}>
        {/* Selling Partners */}
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
          <div style={{ width: '46%' }}>
            <div style={{
              position: 'relative',
              zIndex: 2,
              background: '#ffffff',
              border: '1px solid #000000',
              borderRadius: '10px',
              padding: '24px 19px',
              height: '344px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '32px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                lineHeight: '40px',
                color: '#1d1c4e',
                textTransform: 'capitalize'
              }}>
                Selling Partner
              </h4>
              <div style={{
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '32px',
                color: '#404040',
                marginTop: '16px',
                padding: '0 25px',
                minHeight: '148px'
              }}>
                <p>Responsive and reliable, these partners help you with the procurement of NeuCool products, ensuring smooth and efficient purchasing processes.</p>
              </div>

              {/* Selling Partners Slider */}
              <div style={{
                width: '100%',
                overflow: 'hidden',
                marginTop: '10px'
              }}>
                <div style={{
                  display: 'flex',
                  animation: 'scrollPartners 40s linear infinite',
                  gap: '20px',
                  alignItems: 'center'
                }}>
                  {duplicatedSelling.map((partner, index) => (
                    <div
                      key={index}
                      style={{
                        flex: '0 0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100px',
                        minWidth: '80px'
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
            <div style={{
              width: '95%',
              marginTop: '-325px',
              marginRight: '-12px',
              marginLeft: '0',
              alignSelf: 'flex-end',
              background: 'linear-gradient(260.44deg, #2E3091 4.1%, #1D1C4E 92.08%)',
              borderRadius: '20px',
              height: '340px',
              position: 'relative',
              zIndex: 0
            }}></div>
          </div>

          {/* Service Partners */}
          <div style={{ width: '46%' }}>
            <div style={{
              position: 'relative',
              zIndex: 2,
              background: '#ffffff',
              border: '1px solid #000000',
              borderRadius: '10px',
              padding: '24px 19px',
              height: '344px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '32px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                lineHeight: '40px',
                color: '#1d1c4e',
                textTransform: 'capitalize'
              }}>
                Service Partners
              </h4>
              <div style={{
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '32px',
                color: '#404040',
                marginTop: '16px',
                padding: '0 25px',
                minHeight: '148px'
              }}>
                <p>Authorized and highly trained, these partners offer full lifecycle services for NeuCool products—from deployment and integration to ongoing maintenance.</p>
              </div>

              {/* Service Partners Slider */}
              <div style={{
                width: '100%',
                overflow: 'hidden',
                marginTop: '10px'
              }}>
                <div style={{
                  display: 'flex',
                  animation: 'scrollPartners 20s linear infinite',
                  gap: '20px',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {duplicatedService.map((partner, index) => (
                    <div
                      key={index}
                      style={{
                        flex: '0 0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100px',
                        minWidth: '100px'
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
            <div style={{
              width: '95%',
              marginTop: '-325px',
              marginRight: '-12px',
              marginLeft: '0',
              alignSelf: 'flex-end',
              background: 'linear-gradient(260.44deg, #2E3091 4.1%, #1D1C4E 92.08%)',
              borderRadius: '20px',
              height: '340px',
              position: 'relative',
              zIndex: 0
            }}></div>
          </div>
        </div>

        {/* MEPs */}
        <div style={{
          maxWidth: '1280px',
          margin: '45px auto 0',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '45px'
        }}>
          <div style={{ width: '46%' }}>
            <div style={{
              position: 'relative',
              zIndex: 2,
              background: '#ffffff',
              border: '1px solid #000000',
              borderRadius: '10px',
              padding: '24px 19px',
              height: '344px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '32px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                lineHeight: '40px',
                color: '#1d1c4e',
                textTransform: 'capitalize'
              }}>
                MEPs
              </h4>
              <div style={{
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '32px',
                color: '#404040',
                marginTop: '16px',
                padding: '0 25px',
                minHeight: '148px'
              }}>
                <p>Industry leaders in integration, engineering, and design, these partners ensure your NeuCool deployment is expertly executed from start to finish.</p>
              </div>

              {/* MEPs Slider */}
              <div style={{
                width: '70%',
                overflow: 'hidden',
                marginTop: '10px'
              }}>
                <div style={{
                  display: 'flex',
                  animation: 'scrollPartners 20s linear infinite',
                  gap: '20px',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {duplicatedMeps.map((partner, index) => (
                    <div
                      key={index}
                      style={{
                        flex: '0 0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100px',
                        minWidth: '80px'
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
            <div style={{
              width: '95%',
              marginTop: '-325px',
              marginRight: '-12px',
              marginLeft: '0',
              alignSelf: 'flex-end',
              background: 'linear-gradient(260.44deg, #2E3091 4.1%, #1D1C4E 92.08%)',
              borderRadius: '20px',
              height: '340px',
              position: 'relative',
              zIndex: 0
            }}></div>
          </div>

          {/* Colos */}
          <div style={{ width: '46%' }}>
            <div style={{
              position: 'relative',
              zIndex: 2,
              background: '#ffffff',
              border: '1px solid #000000',
              borderRadius: '10px',
              padding: '24px 19px',
              height: '344px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '32px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                lineHeight: '40px',
                color: '#1d1c4e',
                textTransform: 'capitalize'
              }}>
                Colos
              </h4>
              <div style={{
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '32px',
                color: '#404040',
                marginTop: '16px',
                padding: '0 6px',
                minHeight: '148px'
              }}>
                <p>Trusted colocation providers that understand the operational advantages and minimized risks of a refrigerant-based, direct-to-chip solution. Partnering with them guarantees a seamless deployment.</p>
              </div>

              {/* Colos Slider */}
              <div style={{
                width: '100%',
                overflow: 'hidden',
                marginTop: '6px'
              }}>
                <div style={{
                  display: 'flex',
                  animation: 'scrollPartners 30s linear infinite',
                  gap: '20px',
                  alignItems: 'center'
                }}>
                  {duplicatedColos.map((partner, index) => (
                    <div
                      key={index}
                      style={{
                        flex: '0 0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100px',
                        minWidth: '60px'
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
            <div style={{
              width: '95%',
              marginTop: '-325px',
              marginRight: '-12px',
              marginLeft: '0',
              alignSelf: 'flex-end',
              background: 'linear-gradient(260.44deg, #2E3091 4.1%, #1D1C4E 92.08%)',
              borderRadius: '20px',
              height: '340px',
              position: 'relative',
              zIndex: 0
            }}></div>
          </div>
        </div>

        {/* R&D Partners */}
        <div style={{
          maxWidth: '1280px',
          margin: '45px auto 0',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '45px'
        }}>
          <div style={{ width: '46%' }}>
            <div style={{
              position: 'relative',
              zIndex: 2,
              background: '#ffffff',
              border: '1px solid #000000',
              borderRadius: '10px',
              padding: '24px 19px',
              height: '344px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '32px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                lineHeight: '40px',
                color: '#1d1c4e',
                textTransform: 'capitalize'
              }}>
                Research and Development
              </h4>
              <div style={{
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '32px',
                color: '#404040',
                marginTop: '16px',
                padding: '0 20px',
                minHeight: '125px'
              }}>
                <p>These world-renowned institutions independently validate NeuCool's performance as an industry standard for thermal management, empowering you to make a data-driven decision when adopting liquid cooling.</p>
              </div>

              {/* R&D Partners Slider */}
              <div style={{
                width: '100%',
                overflow: 'hidden',
                marginTop: '15px'
              }}>
                <div style={{
                  display: 'flex',
                  animation: 'scrollPartners 20s linear infinite',
                  gap: '20px',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {duplicatedRD.map((partner, index) => (
                    <div
                      key={index}
                      style={{
                        flex: '0 0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100px',
                        minWidth: '80px'
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
            <div style={{
              width: '95%',
              marginTop: '-325px',
              marginRight: '-12px',
              marginLeft: '0',
              alignSelf: 'flex-end',
              background: 'linear-gradient(260.44deg, #2E3091 4.1%, #1D1C4E 92.08%)',
              borderRadius: '20px',
              height: '340px',
              position: 'relative',
              zIndex: 0
            }}></div>
          </div>
        </div>
      </section>

      {/* ===== BECOME A PARTNER ===== */}
      <section id="become-a-partners" style={{
        padding: '70px 15px 50px 15px',
        background: 'linear-gradient(91.57deg, #016590 1.34%, #1D1F5D 100%)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <h3 style={{
            fontSize: '48px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '60px',
            color: '#ffffff',
            textAlign: 'center',
            textTransform: 'capitalize'
          }}>
            Become A Partner
          </h3>
        </div>

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          {/* Benefit 1 */}
          <div style={{
            flex: 1,
            minWidth: '280px',
            borderRight: '1px solid #FFFFFF29',
            padding: '0 20px',
            minHeight: '320px'
          }}>
            <h5 style={{
              fontSize: '28px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              lineHeight: '34px',
              color: '#ffffff',
              textAlign: 'center',
              marginTop: '44px',
              marginBottom: '28px'
            }}>
              Competitive Advantage
            </h5>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                padding: '0 0 22px 25px',
                position: 'relative',
                color: '#ffffff',
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '26px'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  left: 0,
                  height: '8px',
                  width: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff'
                }}></span>
                Enhance brand loyalty with your customers
              </li>
              <li style={{
                padding: '0 0 22px 25px',
                position: 'relative',
                color: '#ffffff',
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '26px'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  left: 0,
                  height: '8px',
                  width: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff'
                }}></span>
                Strengthen your strategic value as a thought leader
              </li>
              <li style={{
                padding: '0 0 22px 25px',
                position: 'relative',
                color: '#ffffff',
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '26px'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  left: 0,
                  height: '8px',
                  width: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff'
                }}></span>
                Empower companies to achieve high-priority efficiency goals
              </li>
            </ul>
          </div>

          {/* Benefit 2 */}
          <div style={{
            flex: 1,
            minWidth: '280px',
            borderRight: '1px solid #FFFFFF29',
            padding: '0 20px',
            minHeight: '320px'
          }}>
            <h5 style={{
              fontSize: '28px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              lineHeight: '34px',
              color: '#ffffff',
              textAlign: 'center',
              marginTop: '44px',
              marginBottom: '28px'
            }}>
              Commercial Benefits
            </h5>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                padding: '0 0 22px 25px',
                position: 'relative',
                color: '#ffffff',
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '26px'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  left: 0,
                  height: '8px',
                  width: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff'
                }}></span>
                Highly profitable hardware and services model
              </li>
              <li style={{
                padding: '0 0 22px 25px',
                position: 'relative',
                color: '#ffffff',
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '26px'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  left: 0,
                  height: '8px',
                  width: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff'
                }}></span>
                Rapidly growing market segment (&gt;40% CAGR)
              </li>
              <li style={{
                padding: '0 0 22px 25px',
                position: 'relative',
                color: '#ffffff',
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '26px'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  left: 0,
                  height: '8px',
                  width: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff'
                }}></span>
                Expand your data center business with incremental revenue
              </li>
            </ul>
          </div>

          {/* Benefit 3 */}
          <div style={{
            flex: 1,
            minWidth: '280px',
            padding: '0 20px',
            minHeight: '320px'
          }}>
            <h5 style={{
              fontSize: '28px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              lineHeight: '34px',
              color: '#ffffff',
              textAlign: 'center',
              marginTop: '44px',
              marginBottom: '28px'
            }}>
              Comprehensive Partnership
            </h5>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                padding: '0 0 22px 25px',
                position: 'relative',
                color: '#ffffff',
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '26px'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  left: 0,
                  height: '8px',
                  width: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff'
                }}></span>
                100% Channel Philosophy
              </li>
              <li style={{
                padding: '0 0 22px 25px',
                position: 'relative',
                color: '#ffffff',
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '26px'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  left: 0,
                  height: '8px',
                  width: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff'
                }}></span>
                Enterprise-grade product &amp; support teams
              </li>
              <li style={{
                padding: '0 0 22px 25px',
                position: 'relative',
                color: '#ffffff',
                fontSize: '20px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                lineHeight: '26px'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  left: 0,
                  height: '8px',
                  width: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff'
                }}></span>
                Extensive training, GTM and sales enablement
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{
        padding: '70px 15px 70px 15px',
        background: '#f8f8f8'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '48px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            lineHeight: '60px',
            color: '#1d1c4e'
          }}>
            Testimonials
          </h3>
        </div>

        {/* Testimonials Slider */}
        <div style={{
          maxWidth: '1280px',
          margin: '45px auto 0',
          padding: '0 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            transition: 'transform 1000ms ease',
            transform: `translateX(-${testimonialIndex * 100}%)`
          }}>
            {loopedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                style={{
                  flex: '0 0 100%',
                  padding: '0 2rem',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '30px',
                  color: '#404040',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  lineHeight: '46px',
                  position: 'relative',
                  padding: '0 70px'
                }}>
                  <div style={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '30px',
                    height: '28px',
                    width: '38px',
                    background: 'url("https://accelsius.com/wp-content/uploads/Quote.svg") no-repeat center / 100%'
                  }}></div>
                  {testimonial.content}
                  <div style={{
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    right: '30px',
                    height: '28px',
                    width: '38px',
                    background: 'url("https://accelsius.com/wp-content/uploads/Quote_02.svg") no-repeat center / 100%'
                  }}></div>
                </div>
                <div style={{ marginTop: '26px' }}>
                  <div style={{
                    fontSize: '30px',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 700,
                    lineHeight: '46px',
                    color: '#03628e'
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    color: '#404040',
                    fontSize: '22px',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 400,
                    lineHeight: '32px'
                  }}>
                    {testimonial.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            style={{
              position: 'absolute',
              left: '0',
              top: '55%',
              transform: 'translateY(-50%)',
              background: '#0074a8',
              color: '#fff',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              zIndex: 11,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            ‹
          </button>
          <button
            onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
            style={{
              position: 'absolute',
              right: '0',
              top: '55%',
              transform: 'translateY(-50%)',
              background: '#0074a8',
              color: '#fff',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              zIndex: 11,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            ›
          </button>
        </div>
      </section>

      {/* ===== JOIN OUR CERTIFIED PARTNERS ===== */}
      <section style={{
        padding: '111px 15px 92px 15px',
        backgroundImage: 'url("https://accelsius.com/wp-content/uploads/Background_Texture.jpg")',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{
              fontSize: '48px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              lineHeight: '60px',
              color: '#1d1c4e',
              paddingRight: '45px'
            }}>
              Join Our Certified Partners
            </h3>
            <div style={{
              marginTop: '20px',
              fontSize: '22px',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              lineHeight: '32px',
              color: '#404040',
              paddingRight: '165px'
            }}>
              <p>Interested in joining our network of certified partners? Fill out this brief contact form and we'll get in touch with you shortly, etc.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #0000001A',
            borderRadius: '10px',
            padding: '26px 29px 37px',
            boxShadow: '0px 4px 40px 0px #0000000D',
            width: '100%',
            maxWidth: '500px'
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '16px',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 400,
                    lineHeight: '32px',
                    color: '#404040'
                  }}>
                    First Name <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #0000001A',
                      borderRadius: '4px',
                      fontSize: '18px',
                      fontFamily: 'Lato, sans-serif',
                      lineHeight: '32px',
                      background: '#F9F9F9',
                      height: '52px',
                      outline: 'none'
                    }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '16px',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 400,
                    lineHeight: '32px',
                    color: '#404040'
                  }}>
                    Company Name <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #0000001A',
                      borderRadius: '4px',
                      fontSize: '18px',
                      fontFamily: 'Lato, sans-serif',
                      lineHeight: '32px',
                      background: '#F9F9F9',
                      height: '52px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '16px',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 400,
                    lineHeight: '32px',
                    color: '#404040'
                  }}>
                    Last Name <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #0000001A',
                      borderRadius: '4px',
                      fontSize: '18px',
                      fontFamily: 'Lato, sans-serif',
                      lineHeight: '32px',
                      background: '#F9F9F9',
                      height: '52px',
                      outline: 'none'
                    }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '16px',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 400,
                    lineHeight: '32px',
                    color: '#404040'
                  }}>
                    Partner Category <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #0000001A',
                      borderRadius: '4px',
                      fontSize: '18px',
                      fontFamily: 'Lato, sans-serif',
                      lineHeight: '32px',
                      background: '#F9F9F9',
                      height: '52px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  lineHeight: '32px',
                  color: '#404040'
                }}>
                  Email <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #0000001A',
                    borderRadius: '4px',
                    fontSize: '18px',
                    fontFamily: 'Lato, sans-serif',
                    lineHeight: '32px',
                    background: '#F9F9F9',
                    height: '52px',
                    outline: 'none'
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  display: 'block',
                  width: '148px',
                  margin: '34px auto 0',
                  padding: '11px 55px 11px 34px',
                  background: '#1D215F url("https://accelsius.com/wp-content/uploads/chevron-right-solid.svg") no-repeat 74% 50% / 14px',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '18px',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  lineHeight: '32px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'background 0.5s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#000000 url("https://accelsius.com/wp-content/uploads/chevron-right-solid.svg") no-repeat 74% 50% / 14px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#1D215F url("https://accelsius.com/wp-content/uploads/chevron-right-solid.svg") no-repeat 74% 50% / 14px';
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes scrollPartners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @media (max-width: 991px) {
          #co-innovation-lab, #brxe-pppdxp, #brxe-qdsfox {
            font-size: 18px;
            line-height: 24px;
          }
        }
        @media (max-width: 767px) {
          #co-innovation-lab, #brxe-pppdxp, #brxe-qdsfox {
            margin-right: 0;
          }
          #brxe-wtqkqs {
            flex-direction: column;
            row-gap: 25px;
          }
          #brxe-dgrunc {
            flex-direction: column;
            align-items: center;
            row-gap: 25px;
          }
          #brxe-cnfaof {
            align-items: center;
            justify-content: center;
          }
          #brxe-buwnbd, #brxe-kwodac, #brxe-btapdr {
            flex-direction: column;
          }
          #brxe-whkbbw, #brxe-jojiid, #brxe-kjlsph, #brxe-lizamj, #brxe-sxekvw {
            width: 100%;
          }
          #brxe-zqdiog {
            flex-direction: column;
          }
        }
        @media (max-width: 478px) {
          #brxe-rfhxtr {
            font-size: 48px;
            line-height: 56px;
          }
          #brxe-brpuxs p {
            font-size: 22px;
          }
          .testimonial-content {
            font-size: 24px;
            line-height: 36px;
          }
        }
      `}</style>
    </main>
  );
}

export { PartnersPage };