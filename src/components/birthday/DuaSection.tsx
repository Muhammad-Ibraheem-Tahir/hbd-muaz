import { useEffect, useRef, useState } from "react";

const DUAS = [
  { emoji: "🌙", title: "May Allah bless you", text: "with a long, happy, healthy life full of laughter and love." },
  { emoji: "🛡️", title: "May Allah protect you", text: "from every harm and keep you safe wherever you go." },
  { emoji: "📚", title: "May Allah make you smart", text: "and help you learn cool new things every single day." },
  { emoji: "💖", title: "May Allah make you kind", text: "with a big heart that loves your family and friends." },
  { emoji: "🌟", title: "May Allah make you brave", text: "and give you courage to chase all your big dreams." },
  { emoji: "🎁", title: "May Allah give you joy", text: "on every birthday, every day, and forever after." },
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
      id="dua"
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

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {DUAS.map((d, i) => (
            <div
              key={i}
              className={`${i % 2 === 0 ? "reveal-left" : "reveal-right"} group rounded-3xl bg-card p-7 shadow-card border-4 border-foreground/10 hover:-translate-y-2 hover:border-primary/40 transition-all duration-300`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-5xl mb-3 inline-block group-hover:animate-wiggle">
                {d.emoji}
              </div>
              <h3 className="font-display text-xl text-primary mb-2">
                {d.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed">{d.text}</p>
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
