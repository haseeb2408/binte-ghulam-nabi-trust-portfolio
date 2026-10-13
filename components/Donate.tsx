import { site } from "@/lib/content";

const labels: Record<string, string> = {
  accountTitle: "Account title",
  bankName: "Bank",
  accountNumber: "Account number",
  iban: "IBAN",
  easypaisaJazzcash: "Easypaisa / JazzCash",
};

export default function Donate() {
  const rows = Object.entries(site.donation).filter(([, v]) => v);

  return (
    <section id="donate" className="bg-sand-deep/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Donate</p>
        <h2 className="font-serif text-3xl font-semibold text-forest sm:text-4xl">Give with confidence</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink/75">
          Your support helps us reach more families. Reach out to us to learn how your donation is used.
        </p>

        {rows.length > 0 ? (
          <dl className="mx-auto mt-10 max-w-md divide-y divide-forest/10 rounded-2xl bg-white text-left shadow-sm ring-1 ring-forest/10">
            {rows.map(([key, value]) => (
              <div key={key} className="flex justify-between gap-6 px-6 py-4">
                <dt className="text-sm text-ink/60">{labels[key] ?? key}</dt>
                <dd className="break-all text-right font-medium text-forest">{value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <a href="#contact" className="mt-10 inline-block rounded-full bg-forest px-8 py-3 font-semibold text-sand transition hover:bg-forest-dark">
            Contact us to donate
          </a>
        )}
      </div>
    </section>
  );
}
