import "./App.css";
import { useEffect } from "react";
import HeroSection from "./Hero";
import { ContactForm } from "./ContactForm";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <HeroSection />
      {/* <ContactForm /> */}
    </>
  );
}

export default App;
