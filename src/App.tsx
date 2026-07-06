import React from 'react';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import Skills from './components/Skills';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageTop from './components/PageTop';
import SEOHead from './components/SEOHead';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import { usePWA } from './hooks/usePWA';

const App: React.FC = () => {
  usePerformanceOptimization();
  usePWA();
  
  return (
    <>
      <SEOHead />
      <div className="wrapper">
        <Header />
        <main className="content">
          <MainVisual />
          <Skills />
          <Works />
          <About />
          <Contact />
          <PageTop />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;