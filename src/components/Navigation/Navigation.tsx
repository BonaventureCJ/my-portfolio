'use client'
import Link from 'next/link';

import styles from '@/components/Navigation/Navigation.module.css'
import { useTheme } from '@/lib/hooks/useTheme'; // Import the useTheme hook

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  

  return (
    <nav className={styles['navigation']} aria-label="Main">
      <ul className={styles['navigation-list']}>
        <li className={styles['navigation-item']}>
          <Link 
            href="/" 
            className={styles['navigation-link']}
           
          >
            Home
          </Link>
        </li>
        <li className={styles['navigation-item']}>
          <Link 
            href="/skills" 
            className={styles['navigation-link']}
            
          >
            Skills
          </Link>
        </li>
        <li className={styles['navigation-item']}>
          <Link 
            href="/projects" 
            className={styles['navigation-link']}
            
          >
            Projects
          </Link>
        </li>
        <li className={styles['navigation-item']}>
          <Link 
            href="/about" 
            className={styles['navigation-link']}
           
          >
            About
          </Link>
        </li>
        <li className={styles['navigation-item']}>
          <Link 
            href="/contact" 
            className={styles['navigation-link']}
            
          >
            Contact
          </Link>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className={styles['theme-toggle']}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}