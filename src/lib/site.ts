import type { Benefit, Faq, ProcessStep } from "./types";

export const site = {
  name: "Carolina Roof Repair",
  legalName: "Carolina Roof Repair",
  tagline: "Shelter Solutions · Carolina's Finest Roof Repair",
  description:
    "Hail-proof Euroshield roofing, roof repair, replacement, inspections, gutters and emergency tarping for homes and businesses across the Carolinas.",
  url: "https://carolinaroofrepair.com",
  phoneDisplay: "704-464-6118",
  phoneHref: "tel:+17044646118",
  phoneAltDisplay: "704-890-8026",
  phoneAltHref: "tel:+17048908026",
  email: "info@carolinaroofrepair.com",
  emailHref: "mailto:info@carolinaroofrepair.com",
  address: {
    line1: "P.O. Box 16",
    city: "Norwood",
    state: "NC",
    zip: "28128",
    full: "P.O. Box 16, Norwood, NC 28128",
  },
  hours: [
    { day: "Monday", time: "10:00 am – 5:00 pm" },
    { day: "Tuesday – Thursday", time: "9:00 am – 6:00 pm" },
    { day: "Email support", time: "Available 24/7" },
  ],
  paymentUrl: "https://app.autobooks.co/pay/axiom-contracting",
  facebook: "https://www.facebook.com/profile.php?id=61551900336399",
  financing: "EnerBank USA",
  launched: 2015,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Euroshield", href: "/euroshield" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const serviceAreas = [
  "Norwood",
  "Albemarle",
  "Charlotte",
  "Concord",
  "Kannapolis",
  "Monroe",
  "Salisbury",
  "Wadesboro",
  "Rockingham",
  "Pinehurst",
  "Southern Pines",
  "Asheboro",
  "Gastonia",
  "Huntersville",
  "Mooresville",
  "Waxhaw",
] as const;

export const stats = [
  { value: "Class 4", label: "UL 2218 impact rating", icon: "shieldCheck" as const },
  { value: "50 yrs", label: "Potential roof lifespan", icon: "award" as const },
  { value: "5,000+", label: "Major U.S. hail storms yearly", icon: "cloudHail" as const },
  { value: "24/7", label: "Email support & storm response", icon: "clock" as const },
] as const;

export const trustPoints = [
  "Free on-site roof inspections",
  "Certified & insured crews",
  "Class 4 hail protection",
  "Photo documentation",
  "Financing available",
  "Serving both Carolinas",
] as const;

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Free inspection",
    description:
      "We inspect the roof, attic and drainage, then document what we find with clear photos — no pressure and no guesswork.",
    icon: "search",
  },
  {
    number: "02",
    title: "Options & proposal",
    description:
      "You receive a written proposal with repair and replacement options, material samples and honest budget guidance.",
    icon: "fileText",
  },
  {
    number: "03",
    title: "Clean installation",
    description:
      "Our certified, insured crews protect your landscaping, install to code and leave the property cleaner than we found it.",
    icon: "hammer",
  },
  {
    number: "04",
    title: "Warranty & follow-up",
    description:
      "We close out with a final walkthrough, manufacturer paperwork and an extended labor warranty conversation.",
    icon: "shieldCheck",
  },
];

export const benefits: Benefit[] = [
  {
    title: "Local Carolinas team",
    description:
      "Based in Norwood, NC, we know how Carolina heat, humidity and hail treat a roof — and we build for it.",
    icon: "mapPin",
  },
  {
    title: "Honest photo reports",
    description:
      "Every inspection includes detailed photos so you can see the condition of your roof before you spend a dollar.",
    icon: "camera",
  },
  {
    title: "Certified & insured",
    description:
      "Fully insured crews, code-compliant workmanship and manufacturer-backed systems on every project.",
    icon: "shieldCheck",
  },
  {
    title: "Hail-proof systems",
    description:
      "As a Euroshield installer, we offer the first rubber roofing system to exceed the Class 4 impact rating.",
    icon: "cloudHail",
  },
  {
    title: "Financing that fits",
    description:
      "Home improvement financing through EnerBank USA helps you start now without draining savings.",
    icon: "dollar",
  },
  {
    title: "24/7 storm response",
    description:
      "Leaks and storm damage do not keep office hours. Reach us by email any time and we will respond quickly.",
    icon: "clock",
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "How do I know whether my roof needs repair or replacement?",
    answer:
      "If the damage is isolated to a small area and the decking is sound, a targeted repair is usually the right call. Widespread granule loss, recurring leaks, multiple failing areas or a roof near the end of its service life point toward replacement. Our free inspection includes photos and a written recommendation for both paths so you can decide with confidence.",
  },
  {
    question: "Can a hail-proof roof lower my insurance costs?",
    answer:
      "Many carriers offer discounts for impact-resistant roofing that meets the Class 4 UL 2218 standard. Euroshield exceeds that rating. We recommend confirming details with your insurance agent, and we are happy to provide product documentation for your policy.",
  },
  {
    question: "Do you offer free roof inspections?",
    answer:
      "Yes. We provide free on-site roof inspections across the Carolinas, including detailed photo reports for homeowners, buyers, sellers, real estate agents, property managers and home inspectors. Digital remote inspections are also available when an on-site visit is not necessary.",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements take one to three days once materials are on site, depending on the size and pitch of the roof, the number of penetrations, weather and whether a full tear-off is required. We give you a realistic schedule before work begins.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes. Carolina Roof Repair offers home improvement financing through EnerBank USA. Call the office at 704-464-6118 or email info@carolinaroofrepair.com and we will walk you through the options and provide a free estimate.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve homeowners and businesses throughout the Carolinas, including Norwood, Albemarle, Charlotte, Concord, Kannapolis, Monroe, Salisbury, Wadesboro, Rockingham, Pinehurst, Southern Pines, Asheboro, Gastonia, Huntersville, Mooresville and Waxhaw. If you are nearby and not sure, give us a call.",
  },
];

export const euroshieldFaqs: Faq[] = [
  {
    question: "What is a Euroshield roof made of?",
    answer:
      "Euroshield shingles are engineered from recycled tire rubber combined with other recycled materials. The result looks like slate, shake or tile while delivering rubber's remarkable resistance to impact, weather and time.",
  },
  {
    question: "Is Euroshield really hail proof?",
    answer:
      "Euroshield was the first roofing system to offer a hail-proof rubber roof and exceeds the Class 4 UL 2218 impact rating — the highest impact classification. That means it is tested against steel balls dropped from height to simulate severe hail.",
  },
  {
    question: "How long will a Euroshield roof last?",
    answer:
      "While traditional roofs often last 12–15 years, Euroshield shake and slate profiles can last up to 50 years in some of the worst weather conditions. The system also carries an unbeatable manufacturer warranty.",
  },
  {
    question: "Does Euroshield look like real slate or wood shake?",
    answer:
      "Yes. Euroshield provides the design and look of tile, shake and slate roofing without the high cost or the fragility of natural materials. It is available in a wide variety of styles and colors.",
  },
  {
    question: "Is it heavy? Will my home need structural work?",
    answer:
      "Euroshield is lightweight, making it suitable for residential and commercial projects regardless of the deck or substrate layers the property has. Our inspection confirms what your specific roof can support.",
  },
  {
    question: "How does the warranty work?",
    answer:
      "Euroshield roofs come with an unbeatable manufacturer warranty, and we discuss extended labor warranty options with every client. Ask about complete roof system maintenance so you keep your original manufacturer product warranty intact.",
  },
];

export const financingFaqs: Faq[] = [
  {
    question: "Who is EnerBank USA?",
    answer:
      "EnerBank USA is a home improvement lender that partners with contractors to offer project financing. Carolina Roof Repair is proud to offer financing through EnerBank USA so you can move forward without pulling money from savings or using a high-interest short-term loan.",
  },
  {
    question: "Will checking my options affect my credit?",
    answer:
      "EnerBank can review available offers quickly. Any credit inquiry and its impact are explained during the application process. We are happy to connect you with the lender's team so you get accurate answers for your situation.",
  },
  {
    question: "Can I finance both repairs and a full replacement?",
    answer:
      "Yes. Financing can be used for repairs, replacements, gutters and roofing upgrades. Call 704-464-6118 or email info@carolinaroofrepair.com and we will help you match the project to a plan.",
  },
];
