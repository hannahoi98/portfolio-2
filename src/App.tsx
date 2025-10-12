import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark">
      <div className="mx-auto w-full">
        <Header />
        <main className="mt-8 md:mt-12 lg:mt-16">
          <h2>Home</h2>
        </main>
      </div>
    </div>
  );
}
