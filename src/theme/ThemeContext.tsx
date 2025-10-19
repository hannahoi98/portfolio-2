import { createContext } from "react";

/**
 * The two themes we support.
 * "light" = default light look, "dark" = dark mode.
 */
export type Theme = "light" | "dark";

/**
 * What the theme context gives you:
 * - theme: current theme ("light" | "dark")
 * - toggleTheme(): flip between light and dark
 * - setTheme(t): force a specific theme
 */
export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

/**
 * React context for sharing theme state across the app.
 * Access it with the `useTheme()` hook.
 */
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
