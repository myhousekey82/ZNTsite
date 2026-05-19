import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do you handle court representation without being a law firm?",
      answer: "Zero Net Thirty is authorized to represent associations directly in Texas Justice of the Peace Court proceedings, without the cost or timeline delays of a traditional attorney engagement. Legal counsel is only engaged when an account requires district court action, where attorney representation is required."
    },
    {
      question: "What happens if an owner disputes the debt?",
      answer: "Disputed accounts are reviewed against the association's governing documents and account ledger. We work with the management team to ensure the balance is accurately documented before any escalation. Owners have a clear channel to raise questions and our process is designed to handle disputes professionally without stalling the overall timeline."
    },
    {
      question: "What if you can't collect on an account?",
      answer: "Every account is pursued through our full escalation process, including JP Court when necessary. When a judgment is obtained and the owner does not pay, we file an abstract of judgment, preserving the association's claim and attaching it to the owner's property. Hardship situations may extend the timeline, but they don't extinguish the association's right to collect. The association's interest is protected at every stage."
    },
    {
      question: "Do you work with self-managed HOAs?",
      answer: "Zero Net Thirty is built primarily for professional HOA management companies. Self-managed communities are welcome to reach out, but our integration-based workflow works best alongside a management software platform. For communities operating outside of that environment, we'd discuss what's possible on a case-by-case basis."
    },
    {
      question: "How long does onboarding take?",
      answer: "Integration setup typically takes 2–4 weeks depending on your management platform and data structure. We handle the technical work. You provide access credentials and confirm account eligibility criteria. Once live, the system runs autonomously."
    },
    {
      question: "What management platforms do you integrate with?",
      answer: "We currently integrate with Vantaca and CINC Systems, with additional platforms in development. If you use a different system, reach out. We evaluate new integrations based on client demand and technical feasibility."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-inner">
        <span className="section-label">FAQ</span>
        <h2 className="section-title">Common questions about how Zero Net Thirty works</h2>
        <p className="section-sub">
          If you don't see your question here, ask us directly. We respond fast.
        </p>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-q">{faq.question}</div>
              {openIndex === index && <div className="faq-a">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
