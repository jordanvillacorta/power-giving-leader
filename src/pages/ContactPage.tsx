import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import styles from './ContactPage.module.css';

export const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className={styles.title}>
            Let's <span className="text-[#F7EF40]">Connect!</span>
          </h2>
          <p className={styles.subtitle}>
            Have questions about my courses, publications, or speaking engagements? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};