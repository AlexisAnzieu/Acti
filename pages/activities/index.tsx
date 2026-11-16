import {
  Box,
  CircularProgress,
  Flex,
  Grid,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import type { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useMemo, useState } from "react";
import { BsMap, BsSearch, BsX } from "react-icons/bs";

import ActivityCard from "../../component/ActivityCard";
import type { MapBounds } from "../../component/MapComponent";
import type { Locale } from "../../component/NavbarComponent";
import NewsletterComponent from "../../component/NewsletterComponent";
import { buildTooltipDescription as priceDescription } from "../../component/PriceIconComponent";
import {
  type Season,
  type SeasonColor,
  ALL_YEAR_PIN,
  isSeason,
  pinSeason,
  SEASON_COLORS,
  SEASONS,
} from "../../component/seasons";
import type { definitions } from "../../type/supabase";

const MapWithNoSSR = dynamic(() => import("../../component/MapComponent"), {
  ssr: false,
});

// Header height on large screens (72px + 1px border), used by the split map layout.
const HEADER_HEIGHT = "73px";

export type QueryParam = {
  query?: string;
  season?: string;
  carbon_footprint?: string;
  price?: string;
  children_accessible?: boolean;
};

export type GetServerSideProps = {
  props: {
    activities?: definitions["activity"][] | null;
    queryParam: QueryParam;
  };
};

const legendStyle = {
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  mb: "6px",
};

const chipStyle = (isActive: boolean, activeColor?: SeasonColor) => ({
  minH: "44px",
  px: "14px",
  borderRadius: "10px",
  border: "1.5px solid",
  borderColor: isActive ? "ink" : "lineStrong",
  bg: isActive ? activeColor?.bg ?? "ink" : "white",
  color: isActive ? activeColor?.ink ?? "paper" : "ink",
  fontWeight: 600,
  fontSize: "15px",
  whiteSpace: "nowrap" as const,
});

const NewsletterActivity = ({ accent }: { accent?: SeasonColor }) => {
  const { t } = useTranslation("common");

  return (
    <Flex
      direction="column"
      justify="center"
      p={6}
      borderRadius="14px"
      bg={accent?.bg ?? "#DCEBEA"}
      color={accent?.ink ?? "ink"}
      minH="300px"
    >
      <NewsletterComponent label={t("noActivityMatching")} size="md" id="list-email" />
    </Flex>
  );
};

const ActivityList = (props: {
  activities: definitions["activity"][];
  locale: Locale;
  isMapVisible: boolean;
  accent?: SeasonColor;
  season?: Season | null;
}) => {
  const { t } = useTranslation("common");
  if (!props.activities.length) {
    return (
      <Flex direction="column" align="flex-start" gap={6} py={10} maxW="480px">
        <Text fontSize="xl" fontWeight={600}>
          {t("noActivityFound")}
        </Text>
        <Box w="100%">
          <NewsletterComponent size="md" id="empty-email" />
        </Box>
      </Flex>
    );
  }
  return (
    <Grid
      templateColumns={
        props.isMapVisible
          ? "repeat(auto-fill, minmax(min(100%, 240px), 1fr))"
          : "repeat(auto-fill, minmax(min(100%, 260px), 1fr))"
      }
      gap={props.isMapVisible ? "32px 20px" : "40px 24px"}
    >
      {props.activities.map((activity, index) => {
        const pinSeasonValue = pinSeason(activity.seasons, props.season);
        return (
          <ActivityCard
            key={activity.slug}
            activity={activity}
            locale={props.locale}
            accent={props.accent}
            compact={props.isMapVisible}
            pinNumber={props.isMapVisible ? index + 1 : undefined}
            pinColor={pinSeasonValue ? SEASON_COLORS[pinSeasonValue] : ALL_YEAR_PIN}
          />
        );
      })}
      <NewsletterActivity accent={props.accent} />
    </Grid>
  );
};

export default function Activities() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const locale = (router.locale as Locale) ?? "fr";
  const { t } = useTranslation("common");
  const [showMap, setShowMap] = useState(true);
  const [allActivities, setAllActivities] = useState<definitions["activity"][]>(
    [],
  );
  const [filteredActivities, setFilteredActivities] = useState<
    definitions["activity"][]
  >([]);
  const [mapBounds, setMapBounds] = useState<MapBounds | null>(null);

  const selectedSeason = isSeason(router.query.season) ? router.query.season : null;
  const accent = selectedSeason ? SEASON_COLORS[selectedSeason] : undefined;
  const [minPrice, maxPrice] = ((router.query.price as string) ?? "")
    .split(",")
    .map((v) => (v === "" ? null : +v));
  const selectedMaxPrice = minPrice === 0 && maxPrice !== null ? maxPrice : null;
  const carbonQuery = (router.query.carbon_footprint as string) ?? "";
  const selectedCarbon = carbonQuery === "0" ? "" : carbonQuery;

  useEffect(() => {
    if (!router.isReady) return;
    fetch(searchApi(router.query, locale))
      .then((res: Response) => res.json())
      .then((result) => {
        setAllActivities(result);
        setFilteredActivities(result);
        setIsLoading(false);
      });
  }, [router.isReady, router.query, locale]);

  // Filter activities by map bounds when map is visible
  useEffect(() => {
    if (!showMap || !mapBounds) {
      setFilteredActivities(allActivities);
      return;
    }

    const visible = allActivities.filter((activity) => {
      const loc = activity.location as unknown as {
        lat: number;
        lng: number;
      } | null;
      if (!loc) return false;
      return (
        loc.lat >= mapBounds.south &&
        loc.lat <= mapBounds.north &&
        loc.lng >= mapBounds.west &&
        loc.lng <= mapBounds.east
      );
    });
    setFilteredActivities(visible);
  }, [mapBounds, allActivities, showMap]);

  const handleBoundsChange = (bounds: MapBounds) => {
    setMapBounds(bounds);
  };

  function paramHandler(param: string, value: any): void {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    if (param === "season") {
      value = value !== router.query.season ? value : null;
    }

    if (param === "price" && Array.isArray(value)) {
      value = value.join(",");
    }

    const hasNoValue = value === null || value === undefined || value === "";

    if (hasNoValue) {
      delete router.query[param];
    }

    const routerQuery = {
      ...router.query,
      ...(!hasNoValue && { [param]: value }),
    };

    router.push(
      {
        pathname: router.pathname,
        query: routerQuery,
      },
      undefined,
      {
        shallow: true,
      },
    );
  }

  const toggleMap = () => {
    setShowMap((prev) => {
      if (prev) {
        // When closing map, reset to show all activities
        setMapBounds(null);
        setFilteredActivities(allActivities);
      }
      return !prev;
    });
  };

  // Each pin shows the position of its activity in the list on the left.
  const markerNumbers = useMemo(
    () =>
      Object.fromEntries(
        filteredActivities.map((activity, index) => [activity.slug, index + 1]),
      ),
    [filteredActivities],
  );

  const count = filteredActivities.length;
  const countLabel = showMap
    ? `${count} ${count === 1 ? t("activityFound") : t("activitiesFound")}`
    : t("activitiesCount", { count });

  return (
    <>
      <Head>
        <title>{t("documentTitle.index")}</title>
        <meta
          property="og:title"
          content={t("documentTitle.index")}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={t("ogDescription")}
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://xyzfqjxmadywqhwvcqxh.supabase.in/storage/v1/object/public/activities/ogFB.png"
          key="ogpic"
        />
      </Head>

      <Flex
        direction="column"
        h={showMap ? { base: "auto", lg: `calc(100vh - ${HEADER_HEIGHT})` } : undefined}
      >
        <Box
          as="section"
          aria-label={t("filters")}
          flex="none"
          bg="paper"
          borderBottom="1px solid"
          borderColor="line"
          position={showMap ? "relative" : "sticky"}
          top={0}
          zIndex={60}
        >
          <Flex
            as="form"
            onSubmit={(e) => e.preventDefault()}
            maxW={showMap ? "none" : "1280px"}
            mx="auto"
            px={{ base: 4, md: showMap ? 6 : 12 }}
            py={4}
            wrap="wrap"
            align="flex-end"
            gap="16px 24px"
          >
            <Box flex="1 1 240px" minW={0}>
              <Text as="label" htmlFor="activity-search" display="block" {...legendStyle}>
                {t("searchActivity")}
              </Text>
              <Flex
                align="center"
                gap="10px"
                bg="white"
                border="1.5px solid"
                borderColor="lineStrong"
                borderRadius="10px"
                px="14px"
                minH="44px"
                _focusWithin={{ borderColor: "ink" }}
              >
                <Box as={BsSearch} aria-hidden="true" color="muted" flex="none" />
                <Input
                  id="activity-search"
                  type="search"
                  variant="unstyled"
                  defaultValue={router.query.query}
                  onChange={(e) => paramHandler("query", e.target.value)}
                  placeholder={t("home.searchPlaceholder")}
                  fontSize="16px"
                />
              </Flex>
            </Box>

            <Box as="fieldset">
              <Text as="legend" {...legendStyle}>
                {t("seasons")}
              </Text>
              <Flex gap="6px" wrap="wrap">
                <Box
                  as="button"
                  type="button"
                  aria-pressed={!selectedSeason}
                  onClick={() => selectedSeason && paramHandler("season", selectedSeason)}
                  {...chipStyle(!selectedSeason)}
                >
                  {t("allSeasons")}
                </Box>
                {SEASONS.map((season) => {
                  const isActive = selectedSeason === season;
                  return (
                    <Flex
                      as="button"
                      type="button"
                      key={season}
                      aria-pressed={isActive}
                      onClick={() => paramHandler("season", season)}
                      align="center"
                      gap="8px"
                      textTransform="capitalize"
                      {...chipStyle(isActive, SEASON_COLORS[season])}
                    >
                      <Box
                        aria-hidden="true"
                        w="10px"
                        h="10px"
                        borderRadius="full"
                        bg={SEASON_COLORS[season].bg}
                        boxShadow={isActive ? "0 0 0 1.5px currentColor" : "none"}
                      />
                      {t(`season.${season}`)}
                    </Flex>
                  );
                })}
              </Flex>
            </Box>

            <Box as="fieldset">
              <Text as="legend" {...legendStyle}>
                {t("budget.label")}
              </Text>
              <Flex gap="6px">
                {[0, 1, 2, 3].map((price) => {
                  const isActive = selectedMaxPrice === price;
                  return (
                    <Box
                      as="button"
                      type="button"
                      key={price}
                      aria-pressed={isActive}
                      title={priceDescription(price, t)}
                      onClick={() => paramHandler("price", isActive ? null : [0, price])}
                      {...chipStyle(isActive)}
                    >
                      {price === 0 ? t("budget.free") : "$".repeat(price)}
                    </Box>
                  );
                })}
              </Flex>
            </Box>

            <Box>
              <Text as="label" htmlFor="carbon-filter" display="block" {...legendStyle}>
                {t("carbonFootprint")}
              </Text>
              <Select
                id="carbon-filter"
                value={selectedCarbon}
                onChange={(e) => paramHandler("carbon_footprint", e.target.value)}
                h="44px"
                bg="white"
                border="1.5px solid"
                borderColor="lineStrong"
                borderRadius="10px"
                fontWeight={600}
                fontSize="15px"
              >
                <option value="">{t("carbonSelect.all")}</option>
                <option value="2">{t("carbonSelect.low")}</option>
                <option value="3">{t("carbonSelect.none")}</option>
              </Select>
            </Box>

            <Flex as="label" htmlFor="kids-filter" align="center" gap="10px" minH="44px" fontWeight={600} cursor="pointer">
              <input
                id="kids-filter"
                type="checkbox"
                checked={!!router.query.children_accessible}
                onChange={(e) =>
                  paramHandler("children_accessible", e.target.checked ? "true" : null)
                }
                style={{ width: 20, height: 20, accentColor: "#0F2E2D" }}
              />
              {t("withKids")}
            </Flex>

            <Flex
              as="button"
              type="button"
              onClick={toggleMap}
              aria-pressed={showMap}
              align="center"
              gap={2}
              minH="44px"
              px={5}
              ml={{ md: "auto" }}
              borderRadius="10px"
              bg={showMap ? "white" : "ink"}
              color={showMap ? "ink" : "paper"}
              border="1.5px solid"
              borderColor="ink"
              fontWeight={700}
            >
              <Box as={showMap ? BsX : BsMap} aria-hidden="true" />
              {showMap ? t("hideMap") : t("showMap")}
            </Flex>
          </Flex>
        </Box>

        <Flex className={showMap ? "split-layout" : ""} flex="1" minH={0} w="100%">
          <Box className={showMap ? "split-list-panel" : ""} w="100%">
            <Box
              maxW={showMap ? "none" : "1280px"}
              mx="auto"
              px={{ base: 4, md: showMap ? 6 : 12 }}
              pt={6}
              pb={16}
            >
              {isLoading ? (
                <Flex justify="center" py={20}>
                  <CircularProgress isIndeterminate color="ink" />
                </Flex>
              ) : (
                <Flex direction="column" gap={6}>
                  <Heading as="h1" fontWeight={700} fontSize={{ base: "24px", md: "28px" }}>
                    {countLabel}
                  </Heading>
                  <ActivityList
                    activities={filteredActivities}
                    locale={locale}
                    isMapVisible={showMap}
                    accent={accent}
                    season={selectedSeason}
                  />
                </Flex>
              )}
            </Box>
          </Box>

          {showMap && (
            <Box className="split-map-panel">
              <MapWithNoSSR
                activities={allActivities}
                onBoundsChange={handleBoundsChange}
                markerNumbers={markerNumbers}
                className="split-map"
              />
            </Box>
          )}
        </Flex>
      </Flex>
    </>
  );
}

export function searchApi(
  queryParam: QueryParam = {},
  locale: Locale = "en",
): string {
  const host = process.env.NEXT_PUBLIC_BASE_URL;
  const apiUrl = new URL(`${host}/api/activities`);
  const queryParamLocaleAdded = {
    ...queryParam,
    locale,
  };
  Object.entries(queryParamLocaleAdded).forEach(([key, value]) =>
    apiUrl.searchParams.append(key, `${value}`),
  );
  return apiUrl.href;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as Locale, ["common"])),
    },
    revalidate: 10,
  };
}
