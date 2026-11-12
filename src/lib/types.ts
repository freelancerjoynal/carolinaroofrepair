export type IconName =
  | "phone"
  | "mail"
  | "mapPin"
  | "clock"
  | "arrowRight"
  | "arrowUpRight"
  | "arrowUp"
  | "chevronDown"
  | "chevronLeft"
  | "chevronRight"
  | "check"
  | "checkCircle"
  | "shield"
  | "shieldCheck"
  | "home"
  | "hammer"
  | "droplets"
  | "search"
  | "layers"
  | "alert"
  | "rain"
  | "award"
  | "sparkles"
  | "star"
  | "menu"
  | "close"
  | "facebook"
  | "calendar"
  | "dollar"
  | "wrench"
  | "recycle"
  | "bolt"
  | "sun"
  | "trash"
  | "building"
  | "ruler"
  | "calculator"
  | "quote"
  | "truck"
  | "users"
  | "send"
  | "camera"
  | "leaf"
  | "wind"
  | "cloudHail"
  | "thermometer"
  | "play"
  | "fileText"
  | "route";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  icon: IconName;
  image?: string;
  imageAlt?: string;
  accent: "copper" | "moss" | "sky" | "gold";
};

export type Faq = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: IconName;
};

export type Benefit = {
  title: string;
  description: string;
  icon: IconName;
};

export type ComparisonRow = {
  label: string;
  euroshield: string;
  traditional: string;
};
