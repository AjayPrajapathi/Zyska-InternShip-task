import { useState } from "react";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Introduction } from "./components/Introduction";

import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
import { Testimonial } from "./components/Testimonial";
import { FAQSection } from "./components/FAQSection";
import { Blog } from "./components/Blog";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
function App() {


  return (
    <div>
      <Navbar />
      <Introduction />

      <SocialProof />
      <Features />
      <Testimonial />
      <FAQSection />
      <Blog />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
