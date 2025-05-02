import React from "react";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import About from "@/components/home/about";
import HowItWorks from "@/components/home/how-it-works";
import MarketsPreview from "@/components/home/markets-preview";
import Cta from "@/components/home/cta";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <About />
      <HowItWorks />
      <MarketsPreview />
      <Cta />
      <Footer />
    </div>
  );
}
