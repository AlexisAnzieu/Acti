const isLetter = (char: string) => char.toLowerCase() !== char.toUpperCase();

// "NINJA WARRIOR & PARKOUR" is shouting, "EZCAPAZ" (a 7-letter brand) too, but "VR" or "Spa" are not.
export const isAllCaps = (value: string) => {
  const letters = value.split("").filter(isLetter);
  return letters.length > 3 && value === value.toUpperCase();
};

// "DESCENTE NOCTURNE GUIDÉE EN KAYAK" -> "Descente nocturne guidée en kayak"
export const toSentenceCase = (value: string) => {
  const lower = value.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

// "MONT-TREMBLANT" -> "Mont-Tremblant", "SAINT JEAN" -> "Saint Jean"
export const toPlaceCase = (value: string) =>
  value
    .toLowerCase()
    .replace(/(^|[\s\-'’])(\S)/g, (_, separator, char) => separator + char.toUpperCase());

export const fixActivityName = (value: string) => {
  const trimmed = value.trim();
  return isAllCaps(trimmed) ? toSentenceCase(trimmed) : trimmed;
};

export const fixPlaceName = (value: string) => {
  const trimmed = value.trim();
  return isAllCaps(trimmed) ? toPlaceCase(trimmed) : trimmed;
};
