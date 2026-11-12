export type MaterialId = "asphalt" | "metal" | "tile" | "euroshield" | "cedar";
export type PitchId = "low" | "medium" | "steep" | "very-steep";

export type MaterialOption = {
  id: MaterialId;
  label: string;
  short: string;
  lowPerSqFt: number;
  highPerSqFt: number;
  lifespan: string;
  icon: "layers" | "shieldCheck" | "home" | "recycle" | "award";
};

export const materials: MaterialOption[] = [
  {
    id: "asphalt",
    label: "Architectural asphalt shingles",
    short: "Asphalt",
    lowPerSqFt: 4.25,
    highPerSqFt: 6.75,
    lifespan: "20–30 years",
    icon: "home",
  },
  {
    id: "metal",
    label: "Standing seam metal",
    short: "Metal",
    lowPerSqFt: 9,
    highPerSqFt: 15,
    lifespan: "40–70 years",
    icon: "layers",
  },
  {
    id: "tile",
    label: "Clay or concrete tile",
    short: "Tile",
    lowPerSqFt: 11,
    highPerSqFt: 20,
    lifespan: "50+ years",
    icon: "award",
  },
  {
    id: "euroshield",
    label: "Euroshield rubber slate / shake",
    short: "Euroshield",
    lowPerSqFt: 10,
    highPerSqFt: 16,
    lifespan: "Up to 50 years",
    icon: "shieldCheck",
  },
  {
    id: "cedar",
    label: "Cedar shake",
    short: "Cedar",
    lowPerSqFt: 9.5,
    highPerSqFt: 15,
    lifespan: "30–40 years",
    icon: "recycle",
  },
];

export const pitches: { id: PitchId; label: string; note: string; factor: number }[] = [
  { id: "low", label: "Low", note: "Walkable, under 4:12", factor: 1 },
  { id: "medium", label: "Medium", note: "4:12 – 6:12", factor: 1.08 },
  { id: "steep", label: "Steep", note: "7:12 – 9:12", factor: 1.18 },
  { id: "very-steep", label: "Very steep", note: "10:12 and up", factor: 1.32 },
];

export type EstimateInput = {
  area: number;
  material: MaterialId;
  pitch: PitchId;
  stories: 1 | 2 | 3;
  tearOff: boolean;
  gutters: boolean;
};

export type EstimateResult = {
  low: number;
  high: number;
  perSqFtLow: number;
  perSqFtHigh: number;
  material: MaterialOption;
  pitchFactor: number;
  storyFactor: number;
  squares: number;
  lineItems: { label: string; low: number; high: number }[];
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const roundToHundred = (value: number) => Math.round(value / 100) * 100;

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const material = materials.find((m) => m.id === input.material) ?? materials[0];
  const pitch = pitches.find((p) => p.id === input.pitch) ?? pitches[1];
  const area = clamp(input.area, 400, 12000);
  const storyFactor = input.stories === 1 ? 1 : input.stories === 2 ? 1.06 : 1.12;

  const baseLow = area * material.lowPerSqFt * pitch.factor * storyFactor;
  const baseHigh = area * material.highPerSqFt * pitch.factor * storyFactor;

  const tearOffLow = input.tearOff ? area * 1.4 : 0;
  const tearOffHigh = input.tearOff ? area * 2.25 : 0;

  const gutterLow = input.gutters ? 1800 : 0;
  const gutterHigh = input.gutters ? 3400 : 0;

  const low = roundToHundred((baseLow + tearOffLow + gutterLow) * 1.04);
  const high = roundToHundred((baseHigh + tearOffHigh + gutterHigh) * 1.06);

  return {
    low,
    high,
    perSqFtLow: low / area,
    perSqFtHigh: high / area,
    material,
    pitchFactor: pitch.factor,
    storyFactor,
    squares: Math.round((area / 100) * 10) / 10,
    lineItems: [
      { label: "Roofing system & installation", low: roundToHundred(baseLow), high: roundToHundred(baseHigh) },
      { label: "Tear-off & disposal", low: roundToHundred(tearOffLow), high: roundToHundred(tearOffHigh) },
      { label: "Gutter package", low: gutterLow, high: gutterHigh },
    ],
  };
}

export const formatUSD = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
