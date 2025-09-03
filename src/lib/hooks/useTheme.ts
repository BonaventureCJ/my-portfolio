'use client';

import { useTheme as useNextTheme } from 'next-themes';

// If you need to expose a more specific API or type check, you can create a wrapper.
// This is not necessary for basic usage but can be useful for complex apps.
export const useTheme = () => {
  const context = useNextTheme();
  
  // You can still add your custom error handling if you want to enforce usage within the provider.
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider from next-themes');
  }

  // The hook from next-themes returns an object with `theme`, `setTheme`, `resolvedTheme`, etc.
  return context;
};

