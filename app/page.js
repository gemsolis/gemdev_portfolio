import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Tech from "./components/Tech";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main id="home" className="w-full">
      <Hero />
      <About />
      <Tech />
      <Works />
      <Contact />
    </main>
  );
}
