'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * Light/dark theme toggle.
 * Theme is applied by adding/removing the `light` class on <html> — the actual
 * styling lives in globals.css (CSS variables + scoped overrides). The initial
 * class is set by an inline no-FOUC script in the root layout, so this button
 * only needs to read/flip it and persist the choice.
 */
export default function ThemeToggle({ className = '' }) {
  const [light, setLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLight(document.documentElement.classList.contains('light'));
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle('light', next);
    try {
      localStorage.setItem('theme', next ? 'light' : 'dark');
    } catch (e) {
      /* localStorage unavailable — ignore */
    }
  };

  // Render the dark-mode icon (Sun) until mounted so server and first client
  // paint match, avoiding a hydration mismatch.
  const showMoon = mounted && light;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={showMoon ? 'Switch to dark mode' : 'Switch to light mode'}
      title={showMoon ? 'Dark mode' : 'Light mode'}
      className={`btn-ghost inline-flex h-11 w-11 items-center justify-center rounded-xl text-white ${className}`}
    >
      {showMoon ? (
        <Moon className="h-5 w-5 text-electric-500" />
      ) : (
        <Sun className="h-5 w-5 text-cyan-glow" />
      )}
    </button>
  );
}
