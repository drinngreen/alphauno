import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TemplateSection from './components/TemplateSection';
import PricingSection from './components/PricingSection';
import ContactForm from './components/ContactForm';
import TemplatesPage from './pages/TemplatesPage';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'templates'>('home');

  if (currentPage === 'templates') {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar onNavigate={(page: 'home' | 'templates') => setCurrentPage(page)} />
        <TemplatesPage />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onNavigate={(page: 'home' | 'templates') => setCurrentPage(page)} />
      <main>
        <Hero />
        <TemplateSection />
        <PricingSection />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;