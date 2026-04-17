import { useEffect, useRef, useState } from "react";

const MESSAGE =
  "Muaaz, you're the fastest, kindest, and bravest little racer we know. May your year be filled with zooming adventures, giant cakes, endless giggles, and dreams that go vroom! 🏎️💨🎂";

const MessageSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState("");
  const [started, setStarted] = useState(false);

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
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(MESSAGE.slice(0, i));
      if (i >= MESSAGE.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [started]);

  return (
    <section ref={ref} className="relative py-24 bg-gradient-fire overflow-hidden">
      <div className="container relative max-w-3xl text-center">
        <span className="inline-block rounded-full bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground reveal">
          💌 A Message For You
        </span>
        <h2 className="mt-4 display text-4xl sm:text-6xl text-card text-stroke-light reveal">
          To Our Champion
        </h2>

        <div className="mt-10 rounded-3xl bg-card p-8 sm:p-12 shadow-card text-left reveal">
          <p className="font-body text-xl sm:text-2xl leading-relaxed text-foreground min-h-[200px]">
            {shown}
            <span className="inline-block w-1 h-6 ml-1 bg-primary align-middle animate-pulse" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
