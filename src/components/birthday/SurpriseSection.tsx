import { useState } from "react";
import confetti from "canvas-confetti";
import { Gift, Sparkles } from "lucide-react";

const SurpriseSection = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    const end = Date.now() + 1500;
    const colors = ["#ef4444", "#facc15", "#3b82f6", "#fb923c", "#22c55e"];
    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 70, origin: { x: 0 }, colors });
      confetti({ particleCount: 5, angle: 120, spread: 70, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  return (
    <section className="relative py-24 bg-secondary/30 overflow-hidden">
      <div className="container relative max-w-2xl text-center">
        <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground reveal">
          🎁 Surprise Surprise
        </span>
        <h2 className="mt-4 display text-4xl sm:text-6xl text-primary text-stroke-light reveal">
          A Secret For Muaz
        </h2>

        <div className="mt-12 reveal">
          {!opened ? (
            <button
              onClick={handleOpen}
              className="group relative mx-auto flex h-48 w-48 sm:h-56 sm:w-56 items-center justify-center rounded-[2rem] bg-primary text-primary-foreground shadow-pop transition-transform hover:-translate-y-2 hover:rotate-3 active:translate-y-0 animate-pulse-glow"
            >
              <Gift className="h-24 w-24 group-hover:animate-wiggle" />
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground shadow-card animate-bounce-soft">
                Tap to open! 🎉
              </span>
            </button>
          ) : (
            <div className="rounded-3xl bg-gradient-fire p-1 shadow-pop animate-float-up">
              <div className="rounded-[1.4rem] bg-card p-8 sm:p-10">
                <Sparkles className="mx-auto h-12 w-12 text-orange animate-spin-slow" />
                <h3 className="mt-4 display text-2xl sm:text-3xl text-primary">
                  You're officially the COOLEST birthday boy on the planet 🌍✨
                </h3>
                <p className="mt-4 text-lg text-foreground/80">
                  Now go grab the biggest slice of cake — that's an order from us! 🎂🏁
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SurpriseSection;
