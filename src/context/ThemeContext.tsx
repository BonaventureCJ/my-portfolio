'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the Theme type
type Theme = 'light' | 'dark';

// Define the shape of the context value
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context with a default value that matches the type
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // 1. Initialize with a default value to avoid the hydration error on the server.
  const [theme, setTheme] = useState<Theme>('dark');

  // 2. Use this effect to set the initial theme after the component mounts on the client.
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme as Theme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  // 3. This effect handles all subsequent theme changes.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // The toggleTheme function updates the state, which triggers the useEffect
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


// Custom hook to access the theme context
//This has been moved to src/lib/hooks/useTheme

/* export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; */