import React from 'react';

function Results() {
  return (
    <section className="results-section" id="results">
      <div className="section-inner">
        <span className="section-label">Impact</span>
        <h2 className="section-title">Fewer delinquencies. Faster resolutions. Predictable timelines.</h2>
        <p className="section-sub">
          Per-step pricing creates urgency. Integration removes manual overhead. 
          The result: accounts resolve faster, boards see consistent progress, and management teams spend less time managing collections.
        </p>
        <div className="result-grid">
          <div className="result-card">
            <div className="result-big">Faster</div>
            <div className="result-label">Time to resolution</div>
            <div className="result-context">
              Owners settle sooner because incremental fees incentivize early resolution. 
              Most accounts close within 60–90 days, not six months.
            </div>
          </div>
          <div className="result-card">
            <div className="result-big">↑ Higher</div>
            <div className="result-label">Board confidence</div>
            <div className="result-context">
              Transparent pricing and automated reporting mean boards always know where accounts stand. 
              No surprises. No excuses.
            </div>
          </div>
          <div className="result-card">
            <div className="result-big">↓ Habitual</div>
            <div className="result-label">Repeat delinquency reduced</div>
            <div className="result-context">
              Structured consequences retrain payment behavior. 
              The same owners stop cycling back into collections over time.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
