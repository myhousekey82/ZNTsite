import React from 'react';

function Header({ onPrivacyClick }) {
  return (
    <nav>
      <a href="#hero" className="nav-logo">
        <img 
          src="https://myhousekey82.github.io/ZNT-Votes/ZeroNetThirty-Voting.png" 
          alt="Zero Net Thirty" 
          className="nav-logo-img"
        />
      </a>
      <ul className="nav-links">
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#approach">Our approach</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#team">About</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact" className="nav-cta">Get started</a></li>
      </ul>
    </nav>
  );
}

export default Header;
