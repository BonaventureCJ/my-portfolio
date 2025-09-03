import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/theme-provider';
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/*
          The ThemeProvider from `next-themes` should be a client component.
          The `attribute` prop sets the theme on the html element (e.g., `<html data-theme="dark">`).
          `enableSystem` allows it to use the user's OS preference.
        */}
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
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
