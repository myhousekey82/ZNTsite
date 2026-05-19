import React from 'react';

function Team() {
  return (
    <section className="team-section" id="team">
      <div className="section-inner">
        <span className="section-label">Leadership team</span>
        <h2 className="section-title">
          We managed HOA portfolios. Then built a collections process from the inside out.
        </h2>
        <p className="section-sub">
          Not consultants. We've walked in your shoes and built the solution we wished existed.
        </p>
        <p style={{ fontSize: '14px', color: '#3A4D70', fontStyle: 'italic', margin: '0.5rem 0 2rem' }}>
          Zero Net Thirty was born from a decade of working together inside one of Austin's largest community association 
          management companies, where Paul led the organization and Wally built the collections system that became the foundation of this business.
        </p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-name">Wally Michalski</div>
            <div className="team-role">Co-Founder</div>
            <div className="team-bio">
              Wally spent years building and running collections operations for a portfolio management company, 
              handling thousands of delinquent accounts and refining escalation processes that balance speed, compliance, and owner relations. 
              That experience became the foundation of Zero Net Thirty's systemized approach.
            </div>
          </div>
          <div className="team-card">
            <div className="team-name">Paul</div>
            <div className="team-role">Co-Founder</div>
            <div className="team-bio">
              Paul brings decades of experience in alternative legal pathways for delinquent account resolution, 
              including direct representation in Texas Justice of the Peace Court proceedings. 
              He built the strategic framework that allows Zero Net Thirty to operate without traditional attorney overhead.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
