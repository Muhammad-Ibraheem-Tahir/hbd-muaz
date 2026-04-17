const moments = [
  { emoji: "🍕", title: "Pizza Disappear Speedrun", text: "World record: 4.2 seconds. Witnesses: traumatized." },
  { emoji: "🛏️", title: "Bedtime? Never Heard of Her", text: "Muaz has invented 47 unique reasons to stay up late." },
  { emoji: "🎮", title: "Pro Gamer Moment", text: "Won the game. Lost the controller. Found it in the fridge." },
  { emoji: "🦖", title: "Future Dinosaur Expert", text: "Knows more dino names than half his teachers. Fact." },
  { emoji: "🚗", title: "Car Collection: Infinite", text: "Has more cars than parking spots. Engineers are jealous." },
  { emoji: "🤣", title: "Comedy Central Muaz", text: "Tells the same joke 12 times. It gets funnier every time." },
];

const FunSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container relative">
        <div className="text-center reveal">
          <span className="inline-block rounded-full bg-orange px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-foreground">
            🤪 Bro Moments
          </span>
          <h2 className="mt-4 display text-4xl sm:text-6xl text-accent text-stroke-light">
            Iconic Muaz Vibes
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((m, i) => (
            <div
              key={i}
              className="reveal group relative rounded-3xl bg-card p-7 shadow-card border-4 border-foreground/5 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-pop"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-5xl mb-3 inline-block group-hover:animate-wiggle">{m.emoji}</div>
              <h3 className="font-display text-lg text-primary mb-2">{m.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{m.text}</p>
              <span className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-secondary flex items-center justify-center font-bold text-sm shadow-card">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunSection;
