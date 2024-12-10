import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import styles from './ContactInfo.module.css';

export const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Contact Information</h3>
      
      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <MapPin className={styles.icon} />
          <h4 className={styles.cardTitle}>Location</h4>
          <p className={styles.cardText}>Fuller Theological Seminary<br />135 N Oakland Ave<br />Pasadena, CA 91182</p>
        </div>

        <div className={styles.infoCard}>
          <Mail className={styles.icon} />
          <h4 className={styles.cardTitle}>Email</h4>
          <a href="mailto:wilmer@fuller.edu" className={styles.cardLink}>
            wilmer@fuller.edu
          </a>
        </div>

        <div className={styles.infoCard}>
          <Phone className={styles.icon} />
          <h4 className={styles.cardTitle}>Phone</h4>
          <a href="tel:+1-626-584-5200" className={styles.cardLink}>
            (626) 584-5200
          </a>
        </div>

        <div className={styles.infoCard}>
          <Clock className={styles.icon} />
          <h4 className={styles.cardTitle}>Office Hours</h4>
          <p className={styles.cardText}>
            Monday - Friday<br />
            9:00 AM - 5:00 PM PST
          </p>
        </div>
      </div>
    </div>
  );
};