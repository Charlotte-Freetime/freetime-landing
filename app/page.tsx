"use client";

import { LanguageProvider } from "@/lib/language";
import { WaitlistProvider } from "@/lib/waitlist-context";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import HowItWorks from "@/components/HowItWorks";
import SocialFeatures from "@/components/SocialFeatures";
import Hosts from "@/components/Hosts";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import FloatingWaitlist from "@/components/FloatingWaitlist";

export default function Home() {
  return (
    <LanguageProvider>
      <WaitlistProvider>
        <Navbar />
        <main>
          <Hero />
          <Hobbies />
          <HowItWorks />
          <SocialFeatures />
          <Hosts />
          <SocialProof />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <WaitlistModal />
        <FloatingWaitlist />
      </WaitlistProvider>
    </LanguageProvider>
  );
}
