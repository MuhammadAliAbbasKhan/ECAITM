import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, Tag } from 'lucide-react';

export const BlogPage = ({ onOpenDemo }) => {
  const posts = [
    {
      id: 1,
      title: 'Solving the 100kW/Rack Thermal Barrier for NVIDIA GB200 Systems',
      date: 'August 24, 2026',
      author: 'Dr. Marcus Vance, Chief Thermal Architect',
      category: 'Thermal Physics',
      excerpt: 'Why single-phase liquid water fails at high TDP and how NeuCool two-phase evaporative cold plates eliminate thermal throttling completely.',
    },
    {
      id: 2,
      title: 'Zero Water Data Centers: Compliance and Environmental Mandates in 2026',
      date: 'August 15, 2026',
      author: 'Elena Rostova, VP of Sustainability',
      category: 'Sustainability',
      excerpt: 'Regulatory frameworks are penalizing water-intensive evaporative cooling towers. Here is how closed-loop dielectric technology passes zero-water audits.',
    },
    {
      id: 3,
      title: 'Integrating EV Battery Energy Storage with AI Workload Peak Shaving',
      date: 'July 29, 2026',
      author: 'Samir Patel, VP of Grid Systems',
      category: 'VPP & Grid',
      excerpt: 'How bidirectional V2G and stationary megawatt battery clusters reduce electricity tariffs for hyperscale colocation data centers.',
    },
  ];

  return (
    <div style={{ background: '#0B0E14', color: '#F8FAFC', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container-xl">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge-cyan">INDUSTRY RESEARCH & NEWS</span>
          <h1 style={{ fontSize: '3rem', marginTop: '16px', fontWeight: 900 }}>
            ECAITM® Insights & Technical Whitepapers
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {posts.map((post) => (
            <div key={post.id} className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', color: '#00C4EE', marginBottom: '12px' }}>
                  <Tag className="w-3.5 h-3.5" /> {post.category} • <Calendar className="w-3.5 h-3.5" /> {post.date}
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>{post.excerpt}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: '#64748B', display: 'block', marginBottom: '12px' }}>By {post.author}</span>
                <button onClick={onOpenDemo} style={{ background: 'none', color: '#00C4EE', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}>
                  Read Technical Paper <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
