import { useEffect, useMemo, useRef, useState } from "react";

const LINE_1 = "Made with ❤️ for Muaaz";
const LINE_2 = "From Nano, Tahir, Asma, Ibraheem, Huriza & Ismail 💖";

const FinaleSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");

  const stars = useMemo(
    () =>
      Array.from({ length: 80 }).map((_, i) => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
        key: i,
      })),
    []
  );

  const hearts = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 6,
        size: 16 + Math.random() * 22,
        emoji: ["❤️", "💖", "💕", "✨", "💗"][i % 5],
        key: i,
      })),
    []
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id1 = setInterval(() => {
      i++;
      setT1(LINE_1.slice(0, i));
      if (i >= LINE_1.length) {
        clearInterval(id1);
        let j = 0;
        const id2 = setInterval(() => {
          j++;
          setT2(LINE_2.slice(0, j));
          if (j >= LINE_2.length) clearInterval(id2);
        }, 45);
      }
    }, 70);
    return () => clearInterval(id1);
  }, [started]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-night text-card"
    >
      {/* Stars */}
      <div className="pointer-events-none absolute inset-0">
        {stars.map((s) => (
          <span
            key={s.key}
            className="absolute rounded-full bg-star animate-twinkle"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              boxShadow: "0 0 6px hsl(var(--star))",
            }}
          />
        ))}
      </div>

      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {hearts.map((h) => (
          <span
            key={h.key}
            className="absolute animate-float-heart"
            style={{
              left: `${h.left}%`,
              fontSize: `${h.size}px`,
              animationDelay: `${h.delay}s`,
              animationDuration: `${h.duration}s`,
              filter: "drop-shadow(0 0 8px hsl(354 85% 70% / 0.6))",
            }}
          >
            {h.emoji}
          </span>
        ))}
      </div>

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl" />

      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center text-center py-20">
        <div className="text-6xl mb-6 animate-bounce-soft">🌙</div>

        <h2 className="display text-4xl sm:text-6xl md:text-7xl leading-tight min-h-[60px]">
          <span className="bg-gradient-rainbow bg-clip-text text-transparent">
            {t1}
            {started && t1.length < LINE_1.length && (
              <span className="inline-block w-1.5 h-10 ml-1 bg-card align-middle animate-pulse" />
            )}
          </span>
        </h2>

        <p className="mt-8 text-lg sm:text-2xl font-medium text-card/90 max-w-2xl min-h-[60px]">
          {t2}
          {started && t1.length >= LINE_1.length && t2.length < LINE_2.length && (
            <span className="inline-block w-0.5 h-5 ml-1 bg-card align-middle animate-pulse" />
          )}
        </p>

        <div className="mt-16 flex items-center gap-3 text-card/60 text-sm">
          <span className="h-px w-12 bg-card/30" />
          <span className="uppercase tracking-[0.3em]">The End 🏁</span>
          <span className="h-px w-12 bg-card/30" />
        </div>
      </div>
    </section>
  );
};

export default FinaleSection;
