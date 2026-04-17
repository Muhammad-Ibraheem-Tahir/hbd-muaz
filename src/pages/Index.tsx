import { useEffect } from "react";
import HeroSection from "@/components/birthday/HeroSection";
import MessageSection from "@/components/birthday/MessageSection";
import FunSection from "@/components/birthday/FunSection";
import PokemonSection from "@/components/birthday/PokemonSection";
import CakeSection from "@/components/birthday/CakeSection";
import SurpriseSection from "@/components/birthday/SurpriseSection";
import FinaleSection from "@/components/birthday/FinaleSection";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Happy Birthday Muaaz 🚗💨 | A Race-Day Surprise";
    const desc = "A bright, racing-themed birthday surprise for Muaaz — heartfelt messages and a magical finale from his family.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);
  }, []);

  return (
    <main>
      <HeroSection />
      <MessageSection />
      <PokemonSection />
      <CakeSection />
      <FunSection />
      <SurpriseSection />
      <FinaleSection />
    </main>
  );
};

export default Index;
