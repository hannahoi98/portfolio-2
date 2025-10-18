import { HandWavingIcon } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="px-6 py-6 md:py-8 lg:py-10">
      <div className="max-w4xl mx-auto px-4 md:px-7 lg:px-7">
        <div className="border-b border-current pb-4">
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-2 font-display text-2xl md:text-3xl lg:text-4xl">
              Hey! I'm Hanna
              <HandWavingIcon className="h-11 w-11 text-teal" />
            </h1>
            <button type="button" className="btn btn-teal">
              Dark Theme
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
