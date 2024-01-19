import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import TopandSocial from "./ui/Navbar/TopandSocial";

export default function Home() {
  return (
    <main id="home" className="w-[100vw]">
      <Hero />
      <About />
      <Tech />
      <Works />
      <Contact />
      <TopandSocial />
    </main>
  );
}
