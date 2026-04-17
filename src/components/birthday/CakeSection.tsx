import { useState } from "react";
import confetti from "canvas-confetti";

const CakeSection = () => {
  const [clicks, setClicks] = useState(0);
  const [blown, setBlown] = useState(false);

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#ef4444", "#facc15", "#3b82f6", "#f97316", "#a855f7"],
    });

    if (next >= 3) {
      setBlown(true);
      confetti({
        particleCount: 250,
        spread: 160,
        origin: { y: 0.5 },
      });
    }
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container relative max-w-3xl text-center">
        <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground reveal">
          🎂 Tap The Cake
        </span>
        <h2 className="mt-4 display text-4xl sm:text-6xl text-primary text-stroke-light reveal">
          Make A Wish, Muaaz!
        </h2>
        <p className="mt-3 text-lg text-muted-foreground reveal">
          {blown ? "🎉 You did it! Wish granted! 🎉" : `Tap the cake ${3 - clicks} more time${3 - clicks === 1 ? "" : "s"} to blow out the candles!`}
        </p>

        <button
          onClick={handleClick}
          aria-label="Birthday cake"
          className="mt-12 mx-auto block reveal-zoom group relative"
        >
          <div className={`relative transition-transform duration-200 ${clicks > 0 ? "animate-shake" : "hover:scale-105"} group-active:scale-95`}>
            {/* candles */}
            <div className="flex justify-center gap-3 mb-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  {!blown && (
                    <div
                      className="h-5 w-3 rounded-full bg-orange animate-pulse-glow"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  )}
                  {blown && <div className="h-5 w-3 rounded-full bg-foreground/30" />}
                  <div className="h-8 w-1.5 bg-card border-2 border-foreground rounded-sm" />
                </div>
              ))}
            </div>

            {/* top tier */}
            <div className="mx-auto h-12 w-40 rounded-t-2xl bg-primary border-4 border-foreground relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-card" style={{ clipPath: "polygon(0 100%, 10% 0, 20% 100%, 30% 0, 40% 100%, 50% 0, 60% 100%, 70% 0, 80% 100%, 90% 0, 100% 100%)" }} />
            </div>
            {/* middle tier */}
            <div className="mx-auto h-14 w-56 bg-secondary border-4 border-t-0 border-foreground relative">
              <div className="absolute top-2 inset-x-3 flex justify-around">
                {["🍓", "🍫", "🍓", "🍫", "🍓"].map((s, i) => (
                  <span key={i} className="text-lg">{s}</span>
                ))}
              </div>
            </div>
            {/* bottom tier */}
            <div className="mx-auto h-16 w-72 rounded-b-2xl bg-accent border-4 border-t-0 border-foreground relative">
              <div className="absolute bottom-3 left-0 right-0 text-center font-display text-card text-xl tracking-wider">
                MUAAZ
              </div>
            </div>
          </div>

          {clicks > 0 && !blown && (
            <div className="mt-6 text-2xl font-display text-primary animate-bounce-soft">
              Keep tapping! 💨
            </div>
          )}
        </button>
      </div>
    </section>
  );
};

export default CakeSection;
