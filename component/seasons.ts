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

// Colour of an activity's map pin. With a season filter, every pin takes that
// season's colour. Otherwise an activity open all year gets a neutral pin
// (null), and a seasonal one the colour of its first season in the logo's order.
export const pinSeason = (
  activitySeasons: readonly string[] | null | undefined,
  filter?: Season | null,
): Season | null => {
  const seasons = SEASONS.filter((season) => activitySeasons?.includes(season));
  if (filter && seasons.includes(filter)) return filter;
  if (seasons.length === 0 || seasons.length === SEASONS.length) return null;
  return seasons[0];
};

// Neutral pin for activities open all year.
export const ALL_YEAR_PIN: SeasonColor = { bg: "#F4F6F5", ink: "#0F2E2D" };
