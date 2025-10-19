import { useEffect, useMemo, useState, ReactNode } from "react";
import { Theme, ThemeContext, ThemeContextValue } from "./ThemeContext";

/**
 * Figure out the starting theme for the app:
 * 1) Use what we saved in localStorage (if it exists)
 * 2) Otherwise, follow the OS setting (prefers-color-scheme)
 */
function getInitialTheme(): Theme {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

/**
 * Wraps the app and handles theme state.
 * - Adds/removes the "dark" class on <html> for Tailwind dark mode
 * - Saves the current theme to localStorage so it sticks on reload
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  /** Keep the DOM + localStorage in sync when theme changes */
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /** Value exposed to the rest of the app */
  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
