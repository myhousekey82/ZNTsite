import React from 'react';

function Footer({ onPrivacyClick }) {
  return (
    <footer className="footer">
      <div className="footer-col">
        <div className="footer-logo">Zero Net Thirty</div>
        <div className="footer-tagline">HOA Collections. Simplified. Accelerated.</div>
      </div>
      <div className="footer-col">
        <div className="footer-col-label">Platform</div>
        <a href="#how-it-works">How it works</a>
        <a href="#approach">Our approach</a>
        <a href="#pricing">Pricing</a>
        <a href="#results">Results</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="footer-col">
        <div className="footer-col-label">Company</div>
        <a href="#team">About</a>
        <a href="#contact">Contact us</a>
      </div>
      <div className="footer-col">
        <div className="footer-col-label">Contact</div>
        <a href="tel:2549133272">(254) 913-3272</a>
        <a href="mailto:wally.michalski16@gmail.com">wally.michalski16@gmail.com</a>
        <button 
          onClick={(e) => {
            e.preventDefault();
            onPrivacyClick();
          }}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            fontSize: '11px',
            marginTop: '0.25rem',
            padding: 0,
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          Privacy Policy
        </button>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Zero Net Thirty. All rights reserved. Austin, TX.</span>
      </div>
    </footer>
  );
}

export default Footer;
