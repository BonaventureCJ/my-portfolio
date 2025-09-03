'use client';
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes';

/**
 * A provider that wraps the `next-themes` library's `ThemeProvider`.
 *
 * This provider is used instead of a custom React Context solution to
 * avoid common issues in Next.js's server-side rendered (SSR) environment,
 * particularly the "hydration mismatch" that causes a theme flicker.
 *
 * The `next-themes` library provides the following key advantages:
 * 1.  **Pre-hydration script**: It automatically injects a small, blocking script
 *     into the `<head>` of the page. This script runs before the rest of the
 *     page loads and applies the correct theme from `localStorage` or cookies,
 *     preventing a flash of incorrect theme on initial page load.
 * 2.  **System theme support**: It correctly detects and applies the user's
 *     system preference (`prefers-color-scheme`) when `enableSystem` is true.
 * 3.  **Automatic storage handling**: It manages reading and writing the theme
 *     preference to `localStorage` or cookies internally, abstracting away
 *     the manual `useEffect` logic required in a custom solution.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
