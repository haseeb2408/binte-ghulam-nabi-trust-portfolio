import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">About Us</p>
          <h2 className="font-serif text-3xl font-semibold text-forest sm:text-4xl">{about.heading}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <ul className="grid gap-4">
          {about.values.map((v) => (
            <li key={v.title} className="rounded-2xl border border-forest/10 bg-white/60 p-6">
              <h3 className="font-serif text-xl font-semibold text-forest">{v.title}</h3>
              <p className="mt-1 text-ink/75">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
