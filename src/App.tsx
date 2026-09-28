import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesBento } from './components/ServicesBento';
import { Partners } from './components/Partners';
import { ProcessFlow } from './components/ProcessFlow';
import { Licenses } from './components/Licenses';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const [selectedServiceForLead, setSelectedServiceForLead] = useState<string>('');

  const handleSelectServiceForLead = (serviceName: string) => {
    setSelectedServiceForLead(serviceName);
  };

  return (
    <div className="min-h-screen bg-eco-bg text-eco-dark selection:bg-brand-leaf selection:text-white flex flex-col font-sans">
      {/* Floating Island Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Antigravity Continuous Levitation Trust Pills */}
        <Hero />

        {/* 5-Tile Bento Grid of Hazardous & Industrial Services */}
        <ServicesBento onSelectServiceForLead={handleSelectServiceForLead} />

        {/* Institutional Partners & High-Trust Client Portfolio */}
        <Partners />

        {/* 4-Step Process Flow: Audit -> Contract -> Transport -> Didox */}
        <ProcessFlow />

        {/* Trust & Licenses Lightbox with Anti-theft Watermark Protection */}
        <Licenses />

        {/* High-Converting Serverless Lead Form */}
        <LeadForm initialService={selectedServiceForLead} />
      </main>

      {/* Floating Contact Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
