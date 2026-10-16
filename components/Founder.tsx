import { leaderMessage, leaders } from "@/lib/content";

export default function Founder() {
  return (
    <section id="founder" className="bg-sand-deep/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Leadership</p>
        <h2 className="font-serif text-3xl font-semibold text-forest sm:text-4xl">A message from our founder</h2>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-[minmax(0,340px)_1fr]">
          <div className="grid gap-6">
            {leaders.map((p) => (
              <figure key={p.role + p.name} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-forest/10">
                {p.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.photo} alt={p.name || p.role} className="aspect-[4/5] w-full object-cover object-top" />
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center bg-forest/10 text-forest/40">
                    <svg viewBox="0 0 24 24" className="h-24 w-24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                    </svg>
                  </div>
                )}
                <figcaption className="px-5 py-4">
                  {p.name && <p className="font-serif text-xl font-semibold text-forest">{p.name}</p>}
                  <p className="text-sm font-medium text-gold">{p.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <blockquote className="relative">
            <span aria-hidden="true" className="absolute -top-8 left-0 font-serif text-8xl leading-none text-gold/40">“</span>
            <p className="relative pt-6 font-serif text-3xl font-semibold leading-snug text-forest sm:text-4xl">
              {leaderMessage}
            </p>
            <div className="mt-6 h-1 w-20 rounded-full bg-gold" />
          </blockquote>
        </div>
      </div>
    </section>
  );
}
