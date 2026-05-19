import React from 'react';

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="section-inner">
        <span className="section-label">Platform</span>
        <h2 className="section-title">Seamless integration. Automated escalation. No babysitting required.</h2>
        <p className="section-sub">
          Zero Net Thirty plugs into your property management software and runs autonomously. 
          We pull delinquent accounts, work them through our escalation process, and sync updates back to your system in real time.
        </p>
        <div className="how-grid">
          <div className="how-card">
            <div className="how-icon">⚙️</div>
            <div className="how-card-title">Integration</div>
            <div className="how-card-text">
              We connect to your management platform (Vantaca, CINC, or others). 
              Delinquent accounts meeting your criteria are pulled automatically. No manual data entry.
            </div>
          </div>
          <div className="how-card">
            <div className="how-icon">📬</div>
            <div className="how-card-title">Demand letter</div>
            <div className="how-card-text">
              The owner receives a formal demand letter outlining the balance, consequences, and resolution options. 
              This is the first billable step.
            </div>
          </div>
          <div className="how-card">
            <div className="how-icon">⚖️</div>
            <div className="how-card-title">JP Court filing</div>
            <div className="how-card-text">
              If the account remains unresolved, we file in Justice of the Peace Court and represent the association directly. 
              No attorney needed at this stage.
            </div>
          </div>
          <div className="how-card">
            <div className="how-icon">🏛️</div>
            <div className="how-card-title">Judgment & enforcement</div>
            <div className="how-card-text">
              We obtain a judgment, file an abstract to attach it to the property, and pursue post-judgment enforcement when necessary. 
              The association's claim is preserved.
            </div>
          </div>
        </div>
        <div className="how-callout">
          <div className="how-callout-title">Every step is billable. Every cost is justified.</div>
          <div className="how-callout-text">
            Owners only pay for the steps we actually perform. If they resolve after the demand letter, 
            they don't pay for court filings that never happened. This creates natural pressure to settle early.
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
