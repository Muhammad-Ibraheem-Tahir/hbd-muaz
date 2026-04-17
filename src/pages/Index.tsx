import { useEffect } from "react";
import HeroSection from "@/components/birthday/HeroSection";
import GallerySection from "@/components/birthday/GallerySection";
import MessageSection from "@/components/birthday/MessageSection";
import FunSection from "@/components/birthday/FunSection";
import SurpriseSection from "@/components/birthday/SurpriseSection";
import FinaleSection from "@/components/birthday/FinaleSection";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Happy Birthday Muaz 🚗💨 | A Race-Day Surprise";
    const desc = "A bright, racing-themed birthday surprise for Muaz — photos, messages, and a magical finale from his family.";
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
      <GallerySection />
      <MessageSection />
      <FunSection />
      <SurpriseSection />
      <FinaleSection />
    </main>
  );
};

export default Index;
