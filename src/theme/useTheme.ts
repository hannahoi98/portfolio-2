import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * Easy way to read/change the theme in any component.
 * Must be used inside <ThemeProvider />.
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
