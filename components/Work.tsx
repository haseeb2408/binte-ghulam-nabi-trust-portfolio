import { programs } from "@/lib/content";
import { ProgramIcon } from "./Icons";

export default function Work() {
  return (
    <section id="work" className="bg-sand-deep/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Work</p>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-forest sm:text-4xl">
          How we serve our community
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <article key={p.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-forest/10 transition hover:-translate-y-1 hover:shadow-md">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
                <ProgramIcon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-forest">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
