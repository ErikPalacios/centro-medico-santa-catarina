/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Symptoms } from "./components/Symptoms";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { config } from "@/src/config";

export default function App() {
  const { features } = config;

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-white">
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        {features.stats        && <Stats />}
        {features.about        && <About />}
        {features.symptoms     && <Symptoms />}
        {features.testimonials && <Testimonials />}
        {features.cta          && <CTA />}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
