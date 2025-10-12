export default function Header() {
  return (
    <header className="px-6 py-6 md:py-8 lg:py-10">
      <div className="border-line-light dark:border-line-dark border-b pb-4">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl">Hey! I'm Hanna</h1>
          <button
            type="button"
            className="border-line-light dark:border-line-dark border px-4 py-2"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </header>
  );
}
