import { site } from "@/lib/content";
import { FacebookIcon, InstagramIcon } from "./Icons";

export default function Contact() {
  const { email, phone, whatsapp, address } = site.contact;
  const waDigits = whatsapp.replace(/\D/g, "");

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
      <h2 className="font-serif text-3xl font-semibold text-forest sm:text-4xl">Get in touch</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-2xl bg-white p-8 ring-1 ring-forest/10">
          {email && (
            <p>
              <span className="block text-sm text-ink/60">Email</span>
              <a href={`mailto:${email}`} className="font-medium text-forest hover:underline">{email}</a>
            </p>
          )}
          {phone && (
            <p>
              <span className="block text-sm text-ink/60">Phone</span>
              <a href={`tel:${phone}`} className="font-medium text-forest hover:underline">{phone}</a>
            </p>
          )}
          {waDigits && (
            <p>
              <span className="block text-sm text-ink/60">WhatsApp</span>
              <a href={`https://wa.me/${waDigits}`} target="_blank" rel="noopener noreferrer" className="font-medium text-forest hover:underline">{whatsapp}</a>
            </p>
          )}
          {address && (
            <p>
              <span className="block text-sm text-ink/60">Address</span>
              <span className="font-medium text-forest">{address}</span>
            </p>
          )}
          {!email && !phone && !waDigits && !address && (
            <p className="text-ink/75">The quickest way to reach us is to send a message on our social pages.</p>
          )}
        </div>

        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-forest p-8 text-sand">
          <h3 className="font-serif text-2xl font-semibold">Message us on social media</h3>
          <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-sand/30 px-5 py-3 transition hover:bg-sand/10">
            <InstagramIcon className="h-6 w-6" /> @binte_ghulam_nabi_trust
          </a>
          <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-sand/30 px-5 py-3 transition hover:bg-sand/10">
            <FacebookIcon className="h-6 w-6" /> Facebook page
          </a>
        </div>
      </div>
    </section>
  );
}
