import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xovqqkoj"); // Formspree form ID
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    serviceArea: '',
    communities: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Reset form after successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          serviceArea: '',
          communities: '',
          message: ''
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section className="contact-section" id="contact">
      <div className="section-inner">
        <span className="section-label">Get started</span>
        <h2 className="section-title">Let's talk about your collections situation</h2>
        <p className="section-sub">
          We'll walk through your current process, integration requirements, and account volume. 
          If we're a fit, onboarding typically starts within a week.
        </p>
        <div className="contact-content">
          <div className="contact-info-card">
            <div className="contact-info-title">Reach us directly</div>
            <div className="contact-info-row">
              <div className="contact-info-label">Phone</div>
              <div><a href="tel:2549133272">(254) 913-3272</a></div>
            </div>
            <div className="contact-info-row">
              <div className="contact-info-label">Email</div>
              <div><a href="mailto:wally.michalski16@gmail.com">wally.michalski16@gmail.com</a></div>
            </div>
            <div className="contact-info-row">
              <div className="contact-info-label">Location</div>
              <div>Austin, TX</div>
            </div>
          </div>
          
          <div className="contact-form-card">
            <div className="contact-form-title">Send us a message</div>
            {state.succeeded && (
              <div style={{ 
                padding: '1rem', 
                background: 'var(--green-faint)', 
                color: 'var(--text-dark)', 
                borderRadius: '8px', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Thank you! Your message has been sent. We'll respond within one business day.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    className="form-input" 
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={state.submitting}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Last name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    className="form-input" 
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={state.submitting}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Company name</label>
                <input 
                  type="text" 
                  name="company"
                  className="form-input" 
                  placeholder="Acme HOA Management"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  disabled={state.submitting}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email address</label>
                <input 
                  type="email" 
                  name="email"
                  className="form-input" 
                  placeholder="jane@yourcompany.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={state.submitting}
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone number</label>
                <input 
                  type="tel" 
                  name="phone"
                  className="form-input" 
                  placeholder="(214) 555-0100"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={state.submitting}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Service area</label>
                <input 
                  type="text" 
                  name="serviceArea"
                  className="form-input" 
                  placeholder="e.g. Austin, TX or Travis County"
                  value={formData.serviceArea}
                  onChange={handleChange}
                  disabled={state.submitting}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Number of communities managed</label>
                <select 
                  name="communities"
                  className="form-select form-input"
                  value={formData.communities}
                  onChange={handleChange}
                  disabled={state.submitting}
                >
                  <option value="">Select range...</option>
                  <option>1–5 communities</option>
                  <option>6–20 communities</option>
                  <option>21–50 communities</option>
                  <option>51–100 communities</option>
                  <option>100+ communities</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Message (optional)</label>
                <textarea 
                  name="message"
                  className="form-textarea" 
                  placeholder="Tell us a bit about your current collections situation..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={state.submitting}
                />
              </div>
              <button 
                type="submit" 
                className="form-submit"
                disabled={state.submitting}
              >
                {state.submitting ? 'Sending...' : 'Request a conversation →'}
              </button>
              <div className="form-note">
                We'll reach out within one business day. Your information is never shared or sold.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
