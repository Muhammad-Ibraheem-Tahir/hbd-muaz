const pokemons = [
  { name: "Pikachu", emoji: "⚡", color: "bg-secondary", text: "Electric energy, just like Muaaz on his birthday!" },
  { name: "Charizard", emoji: "🔥", color: "bg-orange", text: "Fierce, fiery, and full of adventure." },
  { name: "Squirtle", emoji: "💧", color: "bg-accent", text: "Cool, calm, and ready to splash some fun." },
  { name: "Bulbasaur", emoji: "🌿", color: "bg-primary", text: "Growing stronger and braver every single day." },
];

const kidStuff = [
  { emoji: "🦖", label: "Dinosaurs" },
  { emoji: "🚀", label: "Rockets" },
  { emoji: "⚽", label: "Football" },
  { emoji: "🎮", label: "Games" },
  { emoji: "🧱", label: "Lego" },
  { emoji: "🦸", label: "Super Hero" },
];

const PokemonSection = () => {
  return (
    <section className="relative py-24 bg-gradient-sky overflow-hidden">
      {/* floating pokeballs */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-10 w-10 rounded-full pokeball animate-bounce-soft opacity-70"
            style={{
              top: `${10 + (i * 13) % 70}%`,
              left: `${(i * 17) % 90}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative">
        <div className="text-center reveal-zoom">
          <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            ⚡ Gotta Catch 'Em All
          </span>
          <h2 className="mt-4 display text-4xl sm:text-6xl text-card text-stroke-light">
            Muaaz's Pokémon Squad
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-xl mx-auto">
            A team of legendary buddies, just like the awesome friends around you!
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pokemons.map((p, i) => (
            <div
              key={p.name}
              className={`${i % 2 === 0 ? "reveal-left" : "reveal-right"} group relative rounded-3xl bg-card p-6 shadow-card border-4 border-foreground/10 hover:-translate-y-3 hover:rotate-2 transition-all duration-300`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`mx-auto h-20 w-20 rounded-full ${p.color} flex items-center justify-center text-5xl shadow-pop group-hover:animate-wiggle`}>
                {p.emoji}
              </div>
              <h3 className="mt-4 font-display text-xl text-center text-primary">{p.name}</h3>
              <p className="mt-2 text-center text-foreground/70 text-sm">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal">
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            🎈 Cool Kid Stuff
          </span>
          <h3 className="mt-4 display text-3xl sm:text-5xl text-primary text-stroke-light">
            Things Muaaz Loves
          </h3>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {kidStuff.map((k, i) => (
            <div
              key={k.label}
              className="reveal-zoom rounded-2xl bg-card px-5 py-4 shadow-card border-4 border-foreground/10 flex items-center gap-3 hover:-translate-y-1 hover:rotate-3 transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-3xl">{k.emoji}</span>
              <span className="font-bold">{k.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PokemonSection;
