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
    <header className="px-3 py-6 md:py-8 lg:py-10">
      <div className="mx-auto px-4 md:px-7 lg:px-7">
        <div className="border-b border-current pb-4">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="flex items-center gap-2 font-display text-2xl sm:text-3xl lg:text-4xl">
              Hey! I'm Hanna
              <HandWavingIcon className="h-8 w-8 text-teal dark:text-butter sm:h-10 sm:w-10" />
            </h1>
            <button
              type="button"
              onClick={toggleTheme}
              className={`btn ${isLight ? "btn-teal" : "btn-butter"} self-start px-3 py-1.5 text-base md:self-auto md:text-xl`}
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
