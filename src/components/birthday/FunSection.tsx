const moments = [
  { emoji: "🎂", title: "Birthday Superstar", text: "Today the whole world spins a little brighter — because it's Muaaz's day!" },
  { emoji: "🚗", title: "Full Speed Ahead", text: "May this new year zoom by with adventure, laughter, and zero red lights." },
  { emoji: "⭐", title: "Shine Bright", text: "You light up every room you enter, Muaaz — never stop sparkling." },
  { emoji: "🏆", title: "Champion Heart", text: "Kind, brave, and full of joy — that's a winning combo right there." },
  { emoji: "🎁", title: "Gift to Everyone", text: "Having you in our lives is the greatest present we could ever ask for." },
  { emoji: "🌈", title: "Dream Big", text: "Wishing you a year full of dreams coming true and wishes flying high." },
];

const FunSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container relative">
        <div className="text-center reveal">
          <span className="inline-block rounded-full bg-orange px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-foreground">
            🎉 Birthday Wishes
          </span>
          <h2 className="mt-4 display text-4xl sm:text-6xl text-accent text-stroke-light">
            Just For Muaaz
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
