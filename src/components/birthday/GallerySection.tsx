import { useState } from "react";
import { Upload, ImageIcon, X } from "lucide-react";

type Photo = { id: string; url: string; name: string };

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-3"];
const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-orange", "bg-primary", "bg-accent"];

const GallerySection = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const next: Photo[] = [];
    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      next.push({
        id: `${file.name}-${Date.now()}-${Math.random()}`,
        url: URL.createObjectURL(file),
        name: file.name,
      });
    });
    setPhotos((p) => [...p, ...next]);
  };

  const remove = (id: string) =>
    setPhotos((p) => {
      const target = p.find((x) => x.id === id);
      if (target) URL.revokeObjectURL(target.url);
      return p.filter((x) => x.id !== id);
    });

  const slots = Math.max(6 - photos.length, 0);

  return (
    <section id="gallery" className="relative py-24 bg-background overflow-hidden">
      {/* decorative dots */}
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-secondary/40 blur-2xl" />
      <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-accent/40 blur-2xl" />

      <div className="container relative">
        <div className="text-center reveal">
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            📸 Photo Pit Stop
          </span>
          <h2 className="mt-4 display text-4xl sm:text-6xl text-primary text-stroke-light">
            Muaz's Gallery
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Upload your favorite photos of Muaz and watch them zoom into the gallery!
          </p>
        </div>

        <label className="mt-10 mx-auto flex max-w-2xl cursor-pointer flex-col items-center justify-center rounded-3xl border-4 border-dashed border-primary/40 bg-card p-10 text-center shadow-card transition hover:border-primary hover:-translate-y-1 reveal">
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-pop animate-bounce-soft">
            <Upload className="h-7 w-7" />
          </div>
          <p className="mt-4 text-xl font-bold">Click to upload Muaz's photos</p>
          <p className="text-sm text-muted-foreground">PNG, JPG — pick as many as you like ✨</p>
        </label>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6">
          {photos.map((p, i) => (
            <div
              key={p.id}
              className={`group relative aspect-square overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-500 hover:scale-105 hover:rotate-0 ${tilts[i % tilts.length]}`}
            >
              <img
                src={p.url}
                alt={`Muaz ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <button
                onClick={() => remove(p.id)}
                aria-label="Remove photo"
                className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity shadow-card"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-3 left-3 rounded-full bg-secondary px-3 py-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                #{i + 1} 🏁
              </div>
            </div>
          ))}

          {Array.from({ length: slots }).map((_, i) => (
            <div
              key={`slot-${i}`}
              className={`relative aspect-square rounded-3xl ${colors[(photos.length + i) % colors.length]}/15 border-4 border-dashed border-current text-foreground/30 flex flex-col items-center justify-center ${tilts[(photos.length + i) % tilts.length]} transition-transform hover:rotate-0`}
            >
              <ImageIcon className="h-10 w-10" />
              <span className="mt-2 text-xs font-bold uppercase">Photo slot</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
