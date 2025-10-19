import { HandWavingIcon, MoonIcon, SunDimIcon } from "@phosphor-icons/react";
import { useTheme } from "../theme/useTheme";

/**
 * Header with a theme toggle.
 * - Shows a waving hand next to the greeting
 * - Theme button switches icon + color
 */
export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <header className="px-6 py-6 md:py-8 lg:py-10">
      <div className="max-w4xl mx-auto px-4 md:px-7 lg:px-7">
        <div className="border-b border-current pb-4">
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-2 font-display text-2xl md:text-3xl lg:text-4xl">
              Hey! I'm Hanna
              <HandWavingIcon className="h-11 w-11 text-teal dark:text-butter" />
            </h1>
            <button
              type="button"
              onClick={toggleTheme}
              className={`btn ${isLight ? "btn-teal" : "btn-butter"}`}
              aria-label={isLight ? "Activate dark theme" : "Activate light theme"}
            >
              {isLight ? <MoonIcon size={18} /> : <SunDimIcon size={18} />}
              {isLight ? "Dark Theme" : "Light Theme"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
