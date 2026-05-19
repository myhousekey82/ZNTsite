import React from 'react';

function Approach() {
  return (
    <section className="approach-section" id="approach">
      <div className="section-inner">
        <span className="section-label">Philosophy</span>
        <h2 className="section-title">Per-step pricing changes owner behavior</h2>
        <p className="section-sub">
          When owners know they'll pay more if they wait, they settle faster. 
          When management companies see faster resolutions without upfront attorney fees, they use collections as a tool, not a last resort.
        </p>
        <div className="approach-grid">
          <div className="approach-card">
            <div className="approach-card-title">Transparent costs at every stage</div>
            <div className="approach-card-text">
              Owners receive a breakdown of fees before each escalation step. 
              They know exactly what they're avoiding by resolving now instead of later.
            </div>
          </div>
          <div className="approach-card">
            <div className="approach-card-title">No flat-fee waste</div>
            <div className="approach-card-text">
              Traditional attorney collections charge $1,500–$2,500 upfront, whether the account resolves in two weeks or six months. 
              Zero Net Thirty only charges for work performed.
            </div>
          </div>
          <div className="approach-card">
            <div className="approach-card-title">Faster management decisions</div>
            <div className="approach-card-text">
              Without the psychological and financial burden of a $2,000 attorney retainer, 
              management teams send accounts to collections sooner, reducing bad debt accumulation.
            </div>
          </div>
          <div className="approach-card">
            <div className="approach-card-title">Built for volume</div>
            <div className="approach-card-text">
              Our integration-first architecture handles high account volumes without manual overhead. 
              You don't pay for case-by-case attorney time. You pay for systemized process execution.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Approach;
