import About from "./components/About";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <About />
    </main>
  );
}
