import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/context/ThemeContext';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Professional Portfolio',
  description: 'A portfolio showcasing my front-end development skills.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <header>
            <Navigation />
          </header>
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}