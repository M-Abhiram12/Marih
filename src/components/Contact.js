import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    feedbackType: 'General',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', message: '', feedbackType: 'General' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Feedback Type:
          <select name="feedbackType" value={formData.feedbackType} onChange={handleChange}>
            <option>General</option>
            <option>Bug Report</option>
            <option>Feature Request</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>

        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
};

export default ContactUs;