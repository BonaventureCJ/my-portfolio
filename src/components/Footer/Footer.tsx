import React from 'react';
import styles from '@/components/Footer/Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <p className={styles['footer-text']}>
          &copy; {currentYear} My Professional Portfolio. All rights reserved.
        </p>
        <div className={styles['social-links']}>
          {/* Add social media links or other navigation here */}
          {/* Example: <a href="#" className={styles['social-link']}>LinkedIn</a> */}
        </div>
      </div>
    </footer>
  );
}
