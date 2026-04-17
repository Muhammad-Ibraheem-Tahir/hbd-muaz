import { useEffect } from "react";
import confetti from "canvas-confetti";
import carRed from "@/assets/car-red.png";
import carBlue from "@/assets/car-blue.png";
import carYellow from "@/assets/car-yellow.png";

const HeroSection = () => {
  useEffect(() => {
    const fire = () => {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#ef4444", "#facc15", "#3b82f6", "#fb923c", "#22c55e"],
      });
    };
    fire();
    const t = setTimeout(fire, 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-sky">
      {/* Floating clouds / shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-10 h-16 w-28 rounded-full bg-white/70 blur-sm animate-bounce-soft" />
        <div className="absolute top-32 right-16 h-12 w-24 rounded-full bg-white/60 blur-sm animate-bounce-soft [animation-delay:1s]" />
        <div className="absolute top-24 left-1/2 h-10 w-20 rounded-full bg-white/50 blur-sm animate-bounce-soft [animation-delay:2s]" />
      </div>

      {/* Confetti dots */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-3 w-3 rounded-sm animate-bounce-soft"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 80}%`,
              backgroundColor: ["#ef4444", "#facc15", "#3b82f6", "#fb923c", "#22c55e", "#a855f7"][i % 6],
              animationDelay: `${(i % 5) * 0.3}s`,
              transform: `rotate(${i * 20}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating Pokémon buddies */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { e: "⚡", t: "12%", l: "8%", d: "0s" },
          { e: "🔥", t: "20%", l: "85%", d: "0.5s" },
          { e: "💧", t: "55%", l: "5%", d: "1s" },
          { e: "🌿", t: "65%", l: "90%", d: "1.5s" },
          { e: "⭐", t: "8%", l: "55%", d: "0.8s" },
          { e: "🎈", t: "40%", l: "75%", d: "1.2s" },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute text-4xl sm:text-5xl animate-bounce-soft drop-shadow-lg"
            style={{ top: p.t, left: p.l, animationDelay: p.d }}
          >
            {p.e}
          </span>
        ))}
      </div>

      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center text-center pt-16 pb-40">
        <div className="inline-block rounded-full bg-secondary px-5 py-2 text-sm font-bold uppercase tracking-wider text-secondary-foreground shadow-card animate-wiggle">
          🏁 Start your engines 🏁
        </div>

        <h1 className="mt-6 display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] text-secondary text-stroke">
          <span className="inline-block animate-float-up">Happy</span>{" "}
          <span className="inline-block animate-float-up [animation-delay:0.15s]">Birthday</span>
          <br />
          <span className="inline-block bg-gradient-fire bg-clip-text text-transparent text-stroke-light animate-float-up [animation-delay:0.3s]">
            MUAAZ
          </span>
          <span className="inline-block animate-bounce-soft ml-3">🚗💨</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg sm:text-xl font-medium text-foreground/80 animate-float-up [animation-delay:0.5s]">
          Buckle up, little champ — today the whole track is yours! 🏆
        </p>

        <a
          href="#dua"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-pop transition-transform hover:-translate-y-1 active:translate-y-0 animate-float-up [animation-delay:0.7s]"
        >
          Let's Race! 🏎️
        </a>
      </div>

      {/* Race track at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative h-40 bg-foreground">
          {/* lane markings */}
          <div className="absolute left-0 right-0 top-1/2 h-1.5 race-track -translate-y-1/2" />
          {/* checker top */}
          <div className="absolute left-0 right-0 -top-6 h-6 checker" />

          {/* Cars driving */}
          <img
            src={carRed}
            alt="Red toy race car"
            className="absolute bottom-4 h-20 sm:h-24 animate-drive-across drop-shadow-[0_8px_10px_rgba(0,0,0,0.4)]"
            style={{ animationDuration: "7s" }}
          />
          <img
            src={carBlue}
            alt="Blue toy race car"
            className="absolute bottom-3 h-16 sm:h-20 animate-drive-across drop-shadow-[0_8px_10px_rgba(0,0,0,0.4)]"
            style={{ animationDuration: "10s", animationDelay: "2s" }}
          />
          <img
            src={carYellow}
            alt="Yellow toy race car"
            className="absolute bottom-5 h-14 sm:h-16 animate-drive-across drop-shadow-[0_8px_10px_rgba(0,0,0,0.4)]"
            style={{ animationDuration: "12s", animationDelay: "4s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
