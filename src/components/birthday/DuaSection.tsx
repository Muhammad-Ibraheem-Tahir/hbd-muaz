import { useEffect, useRef, useState } from "react";

const DUAS = [
  {
    arabic: "بَارَكَ اللَّهُ لَكَ",
    translit: "Barakallahu laka",
    meaning: "May Allah bless you, Muaaz 💖",
  },
  {
    arabic: "اللَّهُمَّ احْفَظْهُ",
    translit: "Allahumma ihfazhu",
    meaning: "O Allah, protect him always 🤲",
  },
  {
    arabic: "اللَّهُمَّ زِدْهُ عِلْمًا",
    translit: "Allahumma zidhu 'ilma",
    meaning: "O Allah, increase him in knowledge 📚",
  },
  {
    arabic: "جَعَلَكَ اللَّهُ مِنَ الصَّالِحِينَ",
    translit: "Ja'alaka Allahu min as-salihin",
    meaning: "May Allah make you among the righteous 🌟",
  },
];

const DuaSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(45 100% 92%) 0%, hsl(48 100% 97%) 100%)",
      }}
    >
      {/* soft floating sparkles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute animate-twinkle"
            style={{
              top: `${(i * 13) % 90}%`,
              left: `${(i * 23) % 95}%`,
              fontSize: `${14 + (i % 4) * 6}px`,
              animationDelay: `${(i % 6) * 0.4}s`,
              opacity: 0.7,
            }}
          >
            ✨
          </span>
        ))}
      </div>

      <div className="container relative">
        <div className="text-center reveal-zoom">
          <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            🤲 Special Duas
          </span>
          <h2 className="mt-4 display text-4xl sm:text-6xl text-primary text-stroke-light">
            Duas For Muaaz
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Sweet little prayers from everyone who loves you 💕
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {DUAS.map((d, i) => (
            <div
              key={i}
              className={`${i % 2 === 0 ? "reveal-left" : "reveal-right"} group rounded-3xl bg-card p-7 shadow-card border-4 border-foreground/10 hover:-translate-y-2 hover:border-primary/40 transition-all duration-300`}
              style={{
                transitionDelay: `${i * 120}ms`,
                opacity: visible ? undefined : undefined,
              }}
            >
              <p
                dir="rtl"
                lang="ar"
                className="text-3xl sm:text-4xl text-primary leading-loose font-bold text-center"
                style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}
              >
                {d.arabic}
              </p>
              <p className="mt-3 text-center text-sm uppercase tracking-wider text-muted-foreground font-bold">
                {d.translit}
              </p>
              <p className="mt-2 text-center text-foreground/80 leading-relaxed">
                {d.meaning}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <p className="display text-2xl sm:text-3xl text-accent">
            آمين 🤲 Ameen
          </p>
        </div>
      </div>
    </section>
  );
};

export default DuaSection;
