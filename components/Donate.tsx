import { site } from "@/lib/content";
import CopyButton from "./CopyButton";

type Row = { label: string; value: string; copy?: boolean };

function Card({ title, rows }: { title: string; rows: Row[] }) {
  if (rows.length === 0) return null;
  return (
    <div className="rounded-2xl bg-white text-left shadow-sm ring-1 ring-forest/10">
      <h3 className="border-b border-forest/10 px-6 py-4 font-serif text-xl font-semibold text-forest">{title}</h3>
      <dl className="divide-y divide-forest/10">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-4 px-6 py-4">
            <div className="min-w-0">
              <dt className="text-sm text-ink/60">{r.label}</dt>
              <dd className="break-all font-medium text-forest">{r.value}</dd>
            </div>
            {r.copy && <CopyButton value={r.value.replace(/\s/g, "")} />}
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Donate() {
  const d = site.donation;

  const wallet: Row[] = [
    d.easypaisaJazzcash && { label: "JazzCash / Easypaisa", value: d.easypaisaJazzcash, copy: true },
  ].filter(Boolean) as Row[];

  const bank: Row[] = [
    d.accountTitle && { label: "Account title", value: d.accountTitle },
    d.bankName && { label: "Bank", value: d.bankName },
    d.branch && { label: "Branch", value: d.branch },
    d.accountNumber && { label: "Account number", value: d.accountNumber, copy: true },
    d.iban && { label: "IBAN", value: d.iban, copy: true },
  ].filter(Boolean) as Row[];

  const hasDetails = wallet.length > 0 || bank.length > 0;

  return (
    <section id="donate" className="bg-sand-deep/60 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Donate</p>
        <h2 className="font-serif text-3xl font-semibold text-forest sm:text-4xl">Give with confidence</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink/75">
          Your support helps us reach more families. Reach out to us to learn how your donation is used.
        </p>

        {hasDetails ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-start">
            <Card title="Mobile wallet" rows={wallet} />
            <Card title="Bank transfer" rows={bank} />
          </div>
        ) : (
          <a href="#contact" className="mt-10 inline-block rounded-full bg-forest px-8 py-3 font-semibold text-sand transition hover:bg-forest-dark">
            Contact us to donate
          </a>
        )}

        <p className="mt-8 text-sm text-ink/60">
          After donating, you can send us a message on WhatsApp or social media so we can confirm receipt.
        </p>
      </div>
    </section>
  );
}
