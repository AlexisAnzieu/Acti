export type Season = "winter" | "spring" | "summer" | "autumn";

// Same order as the four dots of the logo: top-left, top-right, bottom-left, bottom-right.
export const SEASONS: Season[] = ["winter", "spring", "summer", "autumn"];

export type SeasonColor = { bg: string; ink: string };

export const SEASON_COLORS: Record<Season, SeasonColor> = {
  winter: { bg: "#2C7A7B", ink: "#FFFFFF" },
  spring: { bg: "#DB93D4", ink: "#3B1238" },
  summer: { bg: "#E1F65A", ink: "#253000" },
  autumn: { bg: "#FFBC5C", ink: "#4A2500" },
};

export const isSeason = (value: unknown): value is Season =>
  SEASONS.includes(value as Season);

// Meteorological seasons, as they are felt in Québec.
export const seasonOfMonth = (month: number): Season => {
  if (month === 11 || month <= 1) return "winter";
  if (month <= 4) return "spring";
  if (month <= 7) return "summer";
  return "autumn";
};
