import React from 'react';

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="section-inner">
        <span className="section-label">Pricing</span>
        <h2 className="section-title">Pay for progress, not promises</h2>
        <p className="section-sub">
          Every fee is tied to a completed action. Owners are billed incrementally as the account escalates. 
          No upfront retainers. No paying for work that never happens.
        </p>
        <div className="pricing-table-wrap">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Step</th>
                <th>What happens</th>
                <th>Cost to owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Demand letter</td>
                <td>Formal notice mailed with balance breakdown and resolution deadline</td>
                <td>$295</td>
              </tr>
              <tr>
                <td>JP Court filing</td>
                <td>Petition filed in Justice of the Peace Court; court date set</td>
                <td>$595</td>
              </tr>
              <tr>
                <td>Court representation</td>
                <td>Zero Net Thirty represents the association at the JP Court hearing</td>
                <td>$395</td>
              </tr>
              <tr>
                <td>Abstract of judgment</td>
                <td>Judgment recorded and attached to the property title</td>
                <td>$195</td>
              </tr>
              <tr>
                <td>Post-judgment enforcement</td>
                <td>Enforcement actions pursued (varies by case complexity)</td>
                <td>Variable</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pricing-callout">
          <div className="pricing-callout-title">All fees are added to the owner's balance</div>
          <div className="pricing-callout-text">
            The association does not pay collection costs. Owners pay for the steps required to resolve their account. 
            If they settle after the demand letter, they avoid court fees. If they go to judgment, they pay the full escalation cost.
          </div>
        </div>
        <div className="pricing-note">
          Platform fees may apply depending on integration complexity and account volume. We'll walk through your specific structure during onboarding.
        </div>
      </div>
    </section>
  );
}

export default Pricing;
