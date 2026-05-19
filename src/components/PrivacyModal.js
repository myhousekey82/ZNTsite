import React, { useEffect } from 'react';

function PrivacyModal({ show, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (show) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div 
      style={{
        display: 'flex',
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(9,26,58,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: '#fff',
          borderRadius: '14px',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{
          background: '#1942B8',
          color: '#fff',
          padding: '1.5rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0
        }}>
          <div>
            <div style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '1.5rem',
              marginBottom: '0.2rem'
            }}>
              Privacy Policy
            </div>
            <div style={{ fontSize: '12px', opacity: 0.7 }}>
              Effective January 1, 2026 &nbsp;|&nbsp; Last updated May 1, 2026
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              color: '#fff',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            ×
          </button>
        </div>
        <div style={{ overflowY: 'auto', padding: '2rem', flex: 1 }}>
          <p>Zero Net Thirty ("we," "our," or "us") is committed to protecting the privacy of the individuals and organizations we work with. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or engage our services.</p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Contact information</strong> — name, email address, phone number, and company name submitted through our contact form or direct correspondence.</li>
            <li><strong>Account and portfolio data</strong> — information about homeowner associations and delinquent accounts provided by management company clients in the course of our collections services.</li>
            <li><strong>Usage data</strong> — standard web server logs including IP address, browser type, pages visited, and time of visit, collected automatically when you use our website.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to inquiries and provide our collections services</li>
            <li>Communicate with clients and management teams about active accounts</li>
            <li>Maintain accurate records of collection activity and escalation steps</li>
            <li>Improve our website and service offerings</li>
            <li>Comply with applicable Texas law and court requirements</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or rent personal information to third parties. We may share information in the following limited circumstances:</p>
          <ul>
            <li><strong>Service providers</strong> — third-party tools we use to operate our business (e.g., management software integrations), bound by confidentiality obligations.</li>
            <li><strong>Legal proceedings</strong> — when required by Texas small claims court processes, district court actions, or other legal obligations.</li>
            <li><strong>Client associations</strong> — account-specific information is shared with the homeowner association and its management company as part of the collections process.</li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>We retain client and account data for as long as necessary to fulfill our services and comply with applicable legal and recordkeeping requirements. Contact form submissions are retained for a reasonable period to facilitate follow-up communications.</p>

          <h2>5. Security</h2>
          <p>We implement reasonable administrative, technical, and physical safeguards to protect the information in our care. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

          <h2>6. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites, including management software platforms. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies directly.</p>

          <h2>7. Children's Privacy</h2>
          <p>Our services are directed at businesses and are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically.</p>

          <h2>9. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy or how we handle your information, please contact us:</p>
          <div className="contact-block">
            <p><strong>Zero Net Thirty</strong><br />
            Austin, TX<br />
            Phone: <a href="tel:2549133272">(254) 913-3272</a><br />
            Email: <a href="mailto:wally.michalski16@gmail.com">wally.michalski16@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyModal;
