import type { ComparisonRow, Service } from "./types";

export const services: Service[] = [
  {
    slug: "roof-repairs",
    title: "Roof Repairs",
    short: "Fast, code-compliant fixes for leaks, storm damage and worn roofing.",
    description:
      "We provide roof repair services throughout the Carolinas for all residential and commercial roofing systems. Whether the issue is minor or your roof has suffered extensive damage, our workmanship surpasses current building codes.",
    features: [
      "Shingle, metal, tile and flat roof repairs",
      "Urgent leak response and storm damage",
      "Code-compliant materials and flashing",
      "Preventative maintenance plans",
    ],
    icon: "wrench",
    image: "/images/roof-repairing-update.jpg",
    imageAlt: "Roof repair specialist working on a Carolina home",
    accent: "copper",
  },
  {
    slug: "roof-replacements",
    title: "Roof Replacements",
    short: "A full-system replacement planned around your home, budget and style.",
    description:
      "From dozens of shingle varieties to standing seam metal and Euroshield rubber, we prepare a proposal with options that fit every budget. Your free inspection starts the conversation with facts, not pressure.",
    features: [
      "Full tear-off and decking inspection",
      "Architectural shingle, metal, tile and rubber systems",
      "Synthetic underlayment and ice-and-water shield",
      "Manufacturer warranties and clean job sites",
    ],
    icon: "home",
    image: "/images/roof-repair-update.jpg",
    imageAlt: "Newly installed roof on a residential home",
    accent: "moss",
  },
  {
    slug: "specialty-roofing",
    title: "Specialty Roofing",
    short: "Tile, metal, slate-look and low-slope systems installed by specialists.",
    description:
      "Asphalt composition shingles are popular, but Carolina Roof Repair professionally installs a wide variety of residential and commercial roofing products. Our trained tile experts install clay and concrete tile, and we install standing seam and R-panel metal systems alongside hail-proof Euroshield shingles.",
    features: [
      "Clay and concrete tile roofing",
      "Standing seam and R-panel metal",
      "Euroshield slate, shake and tile profiles",
      "Commercial and low-slope systems",
    ],
    icon: "layers",
    image: "/images/uroshield-1.jpg",
    imageAlt: "Specialty roofing detail on a Carolina property",
    accent: "gold",
  },
  {
    slug: "roof-inspections",
    title: "Roof Inspections",
    short: "Free on-site and remote inspections with a clear photo report.",
    description:
      "We provide several types of roof inspections: free on-site inspections, detailed photo reports for buyers, sellers, agents, property managers and home inspectors, plus no-contact digital remote inspections when an appointment is not practical.",
    features: [
      "Free on-site roof inspections",
      "Detailed photo reports for real estate transactions",
      "No-contact, no-appointment remote inspections",
      "Honest repair-versus-replace guidance",
    ],
    icon: "search",
    image: "/images/Free-Roof-Inspections.jpg",
    imageAlt: "Roof inspector documenting shingle condition",
    accent: "sky",
  },
  {
    slug: "leak-diagnosis",
    title: "Leak Diagnosis",
    short: "Find the real source of the leak before it becomes mold or rot.",
    description:
      "Roof leaks can jeopardize living conditions and structural integrity, leading to mold growth, large ceiling stains and irreparable water damage. We begin with a thorough inspection to diagnose the root cause, then follow promptly with an effective repair.",
    features: [
      "Interior and exterior leak investigation",
      "Flashing, valley and penetration checks",
      "Moisture and attic ventilation review",
      "Documented repair recommendation",
    ],
    icon: "droplets",
    image: "/images/Comprehensive-Repairs.jpg",
    imageAlt: "Technician diagnosing a roof leak",
    accent: "sky",
  },
  {
    slug: "emergency-tarping",
    title: "Emergency Tarping",
    short: "Protect your property immediately after storms, fire or damage.",
    description:
      "Roof tarping is a crucial temporary measure for protecting a building from further damage after the roof has been compromised by storms, fires or other disasters. Since the roof may be unstable, leave tarping to experienced, certified and insured specialists.",
    features: [
      "Same-day emergency response when available",
      "Secure, weather-rated tarp installation",
      "Damage documentation for insurance",
      "Permanent repair planning included",
    ],
    icon: "alert",
    image: "/images/Emergency-Tarping.jpg",
    imageAlt: "Emergency roof tarping after storm damage",
    accent: "copper",
  },
  {
    slug: "gutters",
    title: "Gutter Repair & Replacement",
    short: "Move water away from the roof and foundation with a healthier system.",
    description:
      "Well-maintained gutters move water off the roof and away from your home's foundation. Carolina Roof Repair offers new gutter installations, gutter repairs, gutter cleanings and ongoing maintenance.",
    features: [
      "Seamless gutter installation",
      "Repairs, re-hanging and downspout work",
      "Gutter cleaning and maintenance",
      "Leaf protection options",
    ],
    icon: "rain",
    image: "/images/Gutter-Install.jpg",
    imageAlt: "New gutter installation on a Carolina home",
    accent: "moss",
  },
  {
    slug: "bulletproofing-warranty",
    title: "Bulletproofing & Extended Warranty",
    short: "Protect the roof you have and keep your manufacturer warranty intact.",
    description:
      "Traditional contractor labor warranties run about 5–10 years on a 30-year-life-span shingle. Ask us about complete roof system maintenance and additional labor warranty periods while still retaining your original manufacturer's product warranty.",
    features: [
      "Complete roof system maintenance",
      "Extended labor warranty options",
      "Manufacturer product warranty protection",
      "Priority service for maintenance clients",
    ],
    icon: "shieldCheck",
    image: "/images/Battle-Tested.jpg",
    imageAlt: "Durable impact-resistant roofing detail",
    accent: "gold",
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    label: "Hail impact rating",
    euroshield: "Exceeds Class 4 UL 2218",
    traditional: "Typically Class 3 or lower",
  },
  {
    label: "Expected service life",
    euroshield: "Up to 50 years in severe weather",
    traditional: "12–15 years on average",
  },
  {
    label: "Recycled content",
    euroshield: "Approximately 95% recycled materials",
    traditional: "Limited recycled content",
  },
  {
    label: "Wind performance",
    euroshield: "Sophisticated interlocking system",
    traditional: "Varies by shingle and install",
  },
  {
    label: "Maintenance",
    euroshield: "Virtually maintenance free",
    traditional: "Periodic repair and replacement",
  },
  {
    label: "Insurance",
    euroshield: "Eligible for maximum impact discounts",
    traditional: "Standard coverage options",
  },
];

export const maintenanceTips = [
  {
    title: "Clear the gutters twice a year",
    description:
      "Pine straw, leaves and shingle granules clog downspouts and push water under the roof edge. Clean in late spring and late fall.",
    icon: "rain" as const,
  },
  {
    title: "Look for granules in the yard",
    description:
      "Granule loss is one of the earliest signs of an aging asphalt roof. A few granules are normal; bare shingle patches are not.",
    icon: "search" as const,
  },
  {
    title: "Check the attic after heavy rain",
    description:
      "Water stains, damp decking or daylight between boards can reveal a leak long before it reaches your ceiling.",
    icon: "droplets" as const,
  },
  {
    title: "Trim overhanging branches",
    description:
      "Branches abrade shingles and give squirrels and moisture a path to the roof. Keep at least three feet of clearance.",
    icon: "sun" as const,
  },
  {
    title: "Document storm damage quickly",
    description:
      "Photograph dents, missing shingles and interior stains before repairs. Clear documentation makes insurance claims smoother.",
    icon: "camera" as const,
  },
  {
    title: "Schedule a professional inspection",
    description:
      "Once a year — and after any major hail or wind event — a professional inspection catches small issues while they are still small.",
    icon: "calendar" as const,
  },
];

export const serviceOptions = [
  { value: "roof-repair", label: "Roof repair" },
  { value: "roof-replacement", label: "Roof replacement" },
  { value: "euroshield", label: "Euroshield hail-proof roof" },
  { value: "inspection", label: "Roof inspection" },
  { value: "leak", label: "Leak diagnosis" },
  { value: "tarping", label: "Emergency tarping" },
  { value: "gutters", label: "Gutters" },
  { value: "not-sure", label: "Not sure yet" },
] as const;
