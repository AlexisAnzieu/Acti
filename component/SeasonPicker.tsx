import { Box, Grid, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { type Season, SEASON_COLORS, SEASONS } from "./seasons";

type Props = {
  value: Season;
  onChange: (season: Season) => void;
  counts: Record<Season, number>;
};

// The four dots of the logo, one per season.
const SeasonPicker = ({ value, onChange, counts }: Props) => {
  const { t } = useTranslation("common");

  return (
    <Grid
      role="group"
      aria-label={t("home.pickSeason")}
      templateColumns="repeat(2, minmax(0, 1fr))"
      gap="14px"
      w="min(100%, 360px)"
    >
      {SEASONS.map((season) => {
        const isActive = season === value;
        const { bg, ink } = SEASON_COLORS[season];
        return (
          <Box
            as="button"
            type="button"
            key={season}
            aria-pressed={isActive}
            onClick={() => onChange(season)}
            aspectRatio={1}
            maxW="100%"
            borderRadius="full"
            bg={bg}
            color={ink}
            boxShadow={isActive ? "0 0 0 5px #F4F6F5, 0 0 0 8px #0F2E2D" : "none"}
            transition="box-shadow .2s ease, transform .2s ease"
            _hover={{ transform: isActive ? undefined : "scale(1.03)" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="2px"
          >
            <Text
              as="span"
              fontFamily="heading"
              fontWeight={800}
              fontSize={{ base: "20px", md: "24px" }}
              letterSpacing="-0.02em"
              textTransform="capitalize"
            >
              {t(`season.${season}`)}
            </Text>
            <Text as="span" fontSize="13px" fontWeight={600} sx={{ fontVariantNumeric: "tabular-nums" }}>
              {t("activitiesCount", { count: counts[season] })}
            </Text>
          </Box>
        );
      })}
    </Grid>
  );
};

export default SeasonPicker;
