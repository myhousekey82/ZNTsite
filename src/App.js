import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Approach from './components/Approach';
import Pricing from './components/Pricing';
import Results from './components/Results';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="App">
      <Header onPrivacyClick={() => setShowPrivacy(true)} />
      <Hero />
      <HowItWorks />
      <Approach />
      <Pricing />
      <Results />
      <Team />
      <FAQ />
      <Contact />
      <Footer onPrivacyClick={() => setShowPrivacy(true)} />
      <PrivacyModal show={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </div>
  );
}

export default App;
