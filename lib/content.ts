/**
 * All editable site content lives here.
 *
 * IMPORTANT: The trust's Instagram and Facebook pages could not be read
 * automatically, so everything below except the name and social links is
 * PLACEHOLDER text. Replace it with the trust's real mission, programs,
 * numbers, photos and contact details. Sections with empty data
 * (stats, gallery, contact, donation details) hide or simplify themselves.
 */

export const site = {
  name: "Binte Ghulam Nabi Trust",
  shortName: "BGN Trust",
  tagline: "Serving people with compassion, dignity and care.",
  description:
    "Binte Ghulam Nabi Trust is a charitable trust working to support families and communities in need.",
  socials: {
    instagram: "https://www.instagram.com/binte_ghulam_nabi_trust",
    facebook: "https://www.facebook.com/share/1VyMW9VdBE/?mibextid=wwXIfr",
  },
  // Leave a field as "" to hide it on the site.
  contact: {
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
  },
  // Add bank / mobile-wallet details to show them in the Donate section.
  donation: {
    accountTitle: "",
    bankName: "",
    accountNumber: "",
    iban: "",
    easypaisaJazzcash: "",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Impact", href: "#impact" },
  { label: "Gallery", href: "#gallery" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: "A trust built on care for others",
  paragraphs: [
    "Binte Ghulam Nabi Trust is a charitable initiative dedicated to standing beside people when they need it most.",
    "We believe every act of kindness, however small, can change a family's story. Our work is guided by honesty, transparency and respect for the dignity of every person we serve.",
  ],
  values: [
    { title: "Compassion", text: "We listen first and serve with empathy." },
    { title: "Transparency", text: "Every contribution is handled with accountability." },
    { title: "Dignity", text: "Help should uplift, never diminish." },
  ],
};

// Placeholder program areas — edit to match the trust's actual work.
export const programs = [
  {
    title: "Education Support",
    text: "Helping children and students stay in school with fees, books and supplies.",
    icon: "book",
  },
  {
    title: "Healthcare & Medical Aid",
    text: "Assisting families with medical expenses, medicines and treatment.",
    icon: "heart",
  },
  {
    title: "Food & Relief",
    text: "Providing ration, essentials and emergency relief to households in need.",
    icon: "bowl",
  },
  {
    title: "Community Welfare",
    text: "Supporting widows, orphans and vulnerable members of the community.",
    icon: "home",
  },
] as const;

// Add real figures like { value: "250+", label: "Families supported" }.
// An empty list hides the Impact numbers.
export const stats: { value: string; label: string }[] = [];

// Add photos to /public/gallery and list them like
// { src: "/gallery/ration-drive.jpg", alt: "Ration distribution drive" }.
export const gallery: { src: string; alt: string }[] = [];
