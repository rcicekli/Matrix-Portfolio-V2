import React, { useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`[MESSAGE_RECEIVED]\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  return (
    <section className="matrix-section">
      <h2 className="section-title">[CONTACT_MATRIX]</h2>
      <div className="contact-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="[IDENTITY]"
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="[SIGNAL_CHANNEL]"
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="[ENCRYPTED_MESSAGE]"
              className="form-input"
              rows="5"
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            <FaTelegramPlane style={{ marginRight: '8px' }} />
            [TRANSMIT]
          </button>
        </form>
      </div>
    </section>
  );
}
