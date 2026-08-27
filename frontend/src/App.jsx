import React, { useState } from 'react';
import { ToastProvider } from './context/ToastContext';
import { ToastNotification } from './components/ToastNotification';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { DemoModal } from './components/DemoModal';
import { CheckoutModal } from './components/CheckoutModal';

// Pages
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ThermalPage } from './pages/ThermalPage';
import { ServicesPage } from './pages/ServicesPage';
import { PartnersPage } from './pages/PartnersPage';
import { EvVppPage } from './pages/EvVppPage';
import { OurMissionPage } from './pages/OurMissionPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { PaidServicesPage } from './pages/PaidServicesPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [authOpen, setAuthOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isYearly, setIsYearly] = useState(true);

  const handleSelectPlan = (plan, yearly) => {
    setSelectedPlan(plan);
    setIsYearly(yearly);
    setCheckoutOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} onOpenDemo={() => setDemoOpen(true)} onOpenAuth={() => setAuthOpen(true)} />;
      case 'solutions':
      case 'aidc':
        return <SolutionsPage onOpenDemo={() => setDemoOpen(true)} />;
      case 'thermal':
        return <ThermalPage onOpenDemo={() => setDemoOpen(true)} />;
      case 'services':
        return <ServicesPage onOpenDemo={() => setDemoOpen(true)} onOpenAuth={() => setAuthOpen(true)} onNavigatePricing={() => setCurrentPage('pricing')} />;
      case 'paid-services':
        return <PaidServicesPage onOpenAuth={() => setAuthOpen(true)} onNavigatePricing={() => setCurrentPage('pricing')} />;
      case 'partners':
        return <PartnersPage onOpenDemo={() => setDemoOpen(true)} />;
      case 'evvpp':
        return <EvVppPage onOpenDemo={() => setDemoOpen(true)} />;
      case 'ourmission':
        return <OurMissionPage onOpenDemo={() => setDemoOpen(true)} />;
      case 'pricing':
        return <PricingPage onSelectPlan={handleSelectPlan} onNavigatePaidServices={() => setCurrentPage('paid-services')} />;
      case 'blog':
        return <BlogPage onOpenDemo={() => setDemoOpen(true)} />;
      case 'resources':
        return <ResourcesPage onOpenDemo={() => setDemoOpen(true)} />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} onOpenDemo={() => setDemoOpen(true)} onOpenAuth={() => setAuthOpen(true)} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Fixed Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenAuth={() => setAuthOpen(true)}
        onOpenDemo={() => setDemoOpen(true)}
      />

      {/* Header Spacer (70px height) to prevent content clipping under fixed header */}
      <div style={{ height: '70px' }} />

      {/* Main Page Render */}
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Modals */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <CheckoutModal 
        isOpen={checkoutOpen} 
        onClose={() => setCheckoutOpen(false)} 
        selectedPlan={selectedPlan} 
        isYearly={isYearly}
        onOpenAuth={() => setAuthOpen(true)}
        onNavigatePaidServices={() => setCurrentPage('paid-services')}
      />

      {/* Toast Popup Notification System */}
      <ToastNotification />

    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}
