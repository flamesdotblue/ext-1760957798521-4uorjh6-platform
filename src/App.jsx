import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Hero />
      <About />
      <Services />
      <Contact />
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Montefedele Company. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#about" className="hover:text-neutral-900 transition">About</a>
            <a href="#services" className="hover:text-neutral-900 transition">Our Offer</a>
            <a href="#contact" className="hover:text-neutral-900 transition">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
