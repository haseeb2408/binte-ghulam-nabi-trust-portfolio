import { site, stats } from "@/lib/content";

export default function Impact() {
  return (
    <section id="impact" className="bg-forest py-20 text-sand sm:py-24">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Impact</p>
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold sm:text-4xl">
          Every contribution reaches a real family
        </h2>

        {stats.length > 0 ? (
          <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-serif text-5xl font-semibold text-gold">{s.value}</dd>
                <dt className="mt-2 text-sand/80">{s.label}</dt>
              </div>
            ))}
          </dl>
        ) : (
          <p className="mx-auto mt-6 max-w-xl text-sand/80">
            See our latest drives, distributions and stories as they happen on{" "}
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold underline-offset-4 hover:underline">
              Instagram
            </a>{" "}
            and{" "}
            <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold underline-offset-4 hover:underline">
              Facebook
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
