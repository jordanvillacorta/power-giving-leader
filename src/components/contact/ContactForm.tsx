import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';
import { emailConfig } from '../../config/emailjs';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    console.log('emailConfig:', emailConfig);

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          to_email: 'wvillacorta@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        emailConfig.publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
          disabled={status === 'sending'}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
          disabled={status === 'sending'}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="subject" className={styles.label}>Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={styles.input}
          disabled={status === 'sending'}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textarea}
          rows={5}
          disabled={status === 'sending'}
        />
      </div>

      {status === 'success' && (
        <div className="bg-green-600 text-white px-4 py-2 rounded-lg mb-4">
          Message sent successfully!
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-600 text-white px-4 py-2 rounded-lg mb-4">
          Failed to send message. Please try again.
        </div>
      )}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={status === 'sending'}
      >
        <Send className="w-5 h-5 mr-2" />
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};