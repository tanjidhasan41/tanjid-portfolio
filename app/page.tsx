import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import RevealObserver from "../components/RevealObserver";

export default function Home() {
  return (
    <>
      <Navbar />
      <RevealObserver />

      <main className="max-w-6xl mx-auto px-4 md:px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Extra space before footer */}
      <div className="h-32" />

      <Footer />
      <ScrollToTop />
    </>
  );
}