'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/lib/hooks/useTheme';

import styles from '@/components/Navigation/Navigation.module.css';

export default function Navigation() {
  // `next-themes` requires a check to ensure it's mounted on the client
  // before you can use the theme value to prevent hydration mismatches.
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder or null to prevent hydration mismatch
    return null;
  }

  const handleToggleTheme = () => {
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

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
        onClick={handleToggleTheme}
        className={styles['theme-toggle']}
        aria-label="Toggle theme"
      >
        {resolvedTheme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}
