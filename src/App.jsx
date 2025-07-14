import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MegaMenuHeader from './components/MegaMenuHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import SEOServices from './pages/SEOServices';
import AboutUs from './pages/AboutUs';
import TechnicalSEO from './pages/TechnicalSEO';
import ContentStrategy from './pages/ContentStrategy';
import DigitalPR from './pages/DigitalPR';
import FutureReady from './pages/FutureReady';
import GenerativeEngineOptimization from './pages/GenerativeEngineOptimization';
import EntityFootprintOptimization from './pages/EntityFootprintOptimization';
import EEATOptimization from './pages/EEATOptimization';
import AIEraMeasurement from './pages/AIEraMeasurement';
import AIEraSEOGuide from './pages/AIEraSEOGuide';
import SEOToolsTemplates from './pages/SEOToolsTemplates';
import './App.css';
import './styles/flip-cards.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <MegaMenuHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services/seo" element={<SEOServices />} />
            <Route path="/services/seo/technical-optimization" element={<TechnicalSEO />} />
            <Route path="/services/seo/content-strategy" element={<ContentStrategy />} />
            <Route path="/services/seo/digital-pr" element={<DigitalPR />} />
            <Route path="/services/seo/future-ready-optimization" element={<FutureReady />} />
            <Route path="/services/seo/generative-engine-optimization" element={<GenerativeEngineOptimization />} />
            <Route path="/services/seo/entity-footprint-optimization" element={<EntityFootprintOptimization />} />
            <Route path="/services/seo/eeat-optimization" element={<EEATOptimization />} />
            <Route path="/services/seo/ai-era-measurement" element={<AIEraMeasurement />} />
            <Route path="/resources/ai-era-seo-guide" element={<AIEraSEOGuide />} />
            <Route path="/resources/seo-tools-templates" element={<SEOToolsTemplates />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

