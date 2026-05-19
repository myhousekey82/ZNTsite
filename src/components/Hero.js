import React from 'react';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          HOA Collections.<br />
          Simplified. Accelerated.
        </h1>
        <p className="hero-subtitle">
          The only collections service that charges owners per step taken, not a flat fee. 
          Owners who pay early stop paying. Associations collect faster without paying for work that never happens.
        </p>
        <div className="hero-cta-row">
          <a href="#contact" className="hero-cta-primary">Schedule a call</a>
          <a href="#how-it-works" className="hero-cta-secondary">See how it works</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-card">
          <div className="hero-card-top">
            <span className="hero-card-label">Traditional attorney</span>
            <span className="hero-card-number">$1,800</span>
          </div>
          <div className="hero-card-subtext">Flat fee charged upfront. Owner pays even if they settle in 2 weeks.</div>
        </div>
        <div className="hero-card hero-card-highlight">
          <div className="hero-card-top">
            <span className="hero-card-label">Zero Net Thirty</span>
            <span className="hero-card-number hero-card-green">$295</span>
          </div>
          <div className="hero-card-subtext">Owner resolves after demand letter. Only pays for what was needed.</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
