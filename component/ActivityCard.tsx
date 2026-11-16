import { Box, Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";

import type { definitions } from "../type/supabase";
import { buildTooltipDescription as carbonDescription } from "./CarbonIconComponent";
import type { Locale } from "./NavbarComponent";
import { buildTooltipDescription as priceDescription } from "./PriceIconComponent";
import { type SeasonColor,isSeason, SEASON_COLORS } from "./seasons";

export type ActivityPreview = Pick<
  definitions["activity"],
  | "slug"
  | "name"
  | "city"
  | "picture_url"
  | "price"
  | "carbon_footprint"
  | "seasons"
  | "children_accessible"
>;

type Props = {
  activity: ActivityPreview;
  locale: Locale;
  accent?: SeasonColor;
  compact?: boolean;
  // Number of the activity's pin on the map, shown as a badge on the picture.
  pinNumber?: number;
  pinColor?: SeasonColor;
};

export const PriceLabel = ({ price }: { price: number }) => {
  const { t } = useTranslation("common");
  if (price === 0) {
    return <Text as="span">{t("budget.free")}</Text>;
  }
  return (
    <Text
      as="span"
      title={priceDescription(price, t)}
      letterSpacing="0.04em"
      sx={{ fontVariantNumeric: "tabular-nums" }}
    >
      {"$".repeat(price)}
      <Text as="span" color="lineStrong">
        {"$".repeat(3 - price)}
      </Text>
    </Text>
  );
};

// carbon_footprint goes from 0 (heavy impact) to 3 (no impact): the bars show the impact.
export const CarbonLabel = ({ carbon }: { carbon: number }) => {
  const { t } = useTranslation("common");
  const impact = 3 - carbon;
  return (
    <Flex
      as="span"
      align="center"
      gap="6px"
      title={carbonDescription(carbon, t)}
    >
      <Flex as="span" aria-hidden="true" gap="2px">
        {[0, 1, 2].map((i) => (
          <Box
            as="span"
            key={i}
            w="8px"
            h="12px"
            borderRadius="2px"
            bg={i < impact ? "ink" : "#C9D3D1"}
          />
        ))}
      </Flex>
      {t(`carbonLabel.${carbon}`)}
    </Flex>
  );
};

const ActivityCard = ({ activity, locale, accent, compact, pinNumber, pinColor }: Props) => {
  const { t } = useTranslation("common");
  const firstSeason = activity.seasons?.find(isSeason);
  const fallback = accent ?? (firstSeason ? SEASON_COLORS[firstSeason] : SEASON_COLORS.winter);
  const name = activity.name?.[locale];

  return (
    <ChakraLink
      as={NextLink}
      href={`/activities/${activity.slug}`}
      role="group"
      display="flex"
      flexDirection="column"
      gap={compact ? 3 : 4}
      color="ink"
      _hover={{ textDecoration: "none" }}
    >
      <Box
        position="relative"
        aspectRatio={4 / 3}
        maxW="100%"
        overflow="hidden"
        borderRadius="14px"
        bg={fallback.bg}
      >
        {activity.picture_url ? (
          <Box
            position="absolute"
            inset={0}
            transition="transform .5s ease"
            _groupHover={{ transform: "scale(1.04)" }}
            sx={{ "@media (prefers-reduced-motion: reduce)": { transition: "none" } }}
          >
            <NextImage
              src={activity.picture_url}
              alt={name ? `${name}, ${activity.city?.trim() ?? ""}` : ""}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        ) : (
          <Flex
            position="absolute"
            inset={0}
            p={5}
            align="flex-end"
            color={fallback.ink}
            fontFamily="heading"
            fontWeight={800}
            fontSize="34px"
            lineHeight={0.95}
            letterSpacing="-0.03em"
          >
            {name}
          </Flex>
        )}
        {pinNumber !== undefined && (
          <Flex
            aria-hidden="true"
            position="absolute"
            top="10px"
            left="10px"
            w="30px"
            h="30px"
            align="center"
            justify="center"
            borderRadius="full"
            border="2px solid"
            borderColor="ink"
            bg={pinColor?.bg ?? "white"}
            color={pinColor?.ink ?? "ink"}
            fontSize="13px"
            fontWeight={800}
            lineHeight={1}
            boxShadow="0 2px 0 rgba(15, 46, 45, 0.3)"
            sx={{ fontVariantNumeric: "tabular-nums" }}
          >
            {pinNumber}
          </Flex>
        )}
      </Box>

      <Box>
        <Heading
          as="h3"
          fontWeight={700}
          fontSize={compact ? "19px" : "21px"}
          lineHeight={1.15}
          noOfLines={2}
        >
          {name}
        </Heading>
        <Text fontSize="sm" color="muted" noOfLines={1}>
          {activity.city?.trim()}
        </Text>
      </Box>

      <Flex wrap="wrap" align="center" gap="8px 16px" fontSize="13px" fontWeight={600}>
        <PriceLabel price={activity.price} />
        <CarbonLabel carbon={activity.carbon_footprint} />
        {activity.children_accessible && (
          <Text as="span" color="muted">
            {t("kidsWelcome")}
          </Text>
        )}
      </Flex>
    </ChakraLink>
  );
};

export default ActivityCard;
