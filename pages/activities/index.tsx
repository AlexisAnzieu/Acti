import {
  Badge,
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link as ChakraLink,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import type { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import NextImage from "next/legacy/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";
import {
  BsChevronDown,
  BsCurrencyDollar,
  BsFilter,
  BsMap,
  BsSearch,
  BsX,
} from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";

import CarbonIconComponent, {
  buildTooltipDescription,
} from "../../component/CarbonIconComponent";
import type { MapBounds } from "../../component/MapComponent";
import type { Locale } from "../../component/NavbarComponent";
import NewsletterComponent from "../../component/NewsletterComponent";
import PriceIconComponent from "../../component/PriceIconComponent";
import type { definitions } from "../../type/supabase";

const MapWithNoSSR = dynamic(() => import("../../component/MapComponent"), {
  ssr: false,
});

const MAX_DESCRIPTION_LENGTH = 250;

export const seasons: string[] = ["summer", "spring", "winter", "autumn"];

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

const NewsletterActivity = () => {
  const { t } = useTranslation("common");

  return (
    <Box
      borderRadius="xl"
      borderWidth="1px"
      boxShadow="lg"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "2xl",
      }}
      bg="white"
      p="6"
      height="400px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box mb="4" fontSize="lg" fontWeight="bold" color="gray.700">
        {t("noActivityMatching")}
      </Box>
      <NewsletterComponent />
    </Box>
  );
};

const ActivityCard = ({
  activity,
  locale,
  isCompact,
}: {
  activity: definitions["activity"];
  locale: Locale;
  isCompact: boolean;
}) => {
  const { t } = useTranslation("common");

  return (
    <ChakraLink as={Link} href={`${locale}/activities/${activity.slug}`}>
      <Box
        borderRadius="xl"
        borderWidth="1px"
        boxShadow="lg"
        cursor="pointer"
        overflow="hidden"
        role="group"
        textAlign="left"
        transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "2xl",
        }}
        bg="white"
        height={isCompact ? "340px" : "400px"}
        display="flex"
        flexDirection="column"
      >
        <Box
          position="relative"
          height={isCompact ? "160px" : "200px"}
          overflow="hidden"
        >
          <NextImage
            layout="fill"
            objectFit="cover"
            alt={activity.picture_url}
            src={activity.picture_url}
          />
          {activity.description?.[locale] && (
            <Box
              position="absolute"
              top="100%"
              left="0"
              right="0"
              bg="rgba(255, 255, 255, 0.95)"
              p="6"
              height={isCompact ? "160px" : "200px"}
              overflowY="auto"
              transition="all 0.3s ease"
              _groupHover={{ top: "0" }}
            >
              <Box color="gray.600" fontSize="sm">
                {activity.description[locale].length < MAX_DESCRIPTION_LENGTH
                  ? activity.description[locale]
                  : `${activity.description[locale].substring(
                      0,
                      MAX_DESCRIPTION_LENGTH,
                    )} [...]`}
              </Box>
            </Box>
          )}
        </Box>

        <Box
          p={isCompact ? "4" : "6"}
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex flexWrap="wrap" gap="2" mb="2">
            {(activity.seasons || []).map((s: string) => (
              <Badge
                borderRadius="full"
                colorScheme="teal"
                key={s}
                px="2"
                py="1"
                variant="solid"
                fontSize="xs"
              >
                {t(`season.${s}`)}
              </Badge>
            ))}
          </Flex>

          <Box mb="2">
            <Box
              as="h3"
              color="gray.700"
              fontWeight="bold"
              fontSize={isCompact ? "md" : "lg"}
              isTruncated
            >
              {activity.name?.[locale]}
            </Box>
            <Box
              color="gray.500"
              fontSize={isCompact ? "xs" : "sm"}
              isTruncated
            >
              {activity.compagny}
            </Box>
          </Box>

          <Flex gap="4">
            <Box display="flex" alignItems="center">
              <PriceIconComponent price={activity.price} fontSize="20px" />
            </Box>
            <Box display="flex" alignItems="center">
              <CarbonIconComponent
                carbon_footprint={activity.carbon_footprint}
                fontSize="20px"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </ChakraLink>
  );
};

const ActivityList = (props: {
  activities: GetServerSideProps["props"]["activities"];
  locale: Locale;
  isMapVisible: boolean;
}) => {
  const { t } = useTranslation("common");
  if (!props.activities?.length) {
    return (
      <>
        <Center fontSize="20px" py="10">
          {t("noActivityFound")}
        </Center>
        <Center>
          <Box width="300px" margin="3%">
            <NewsletterComponent />
          </Box>
        </Center>
      </>
    );
  }
  return (
    <Box
      className={
        props.isMapVisible
          ? "activity-grid activity-grid--split"
          : "activity-grid"
      }
    >
      {props.activities.map((activity) => (
        <ActivityCard
          key={activity.slug}
          activity={activity}
          locale={props.locale}
          isCompact={props.isMapVisible}
        />
      ))}
      <NewsletterActivity />
    </Box>
  );
};

export default function Activities() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [locale] = useState(router.locale as Locale);
  const { t } = useTranslation("common");
  const [showFilters, setShowFilters] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [allActivities, setAllActivities] = useState<definitions["activity"][]>(
    [],
  );
  const [filteredActivities, setFilteredActivities] = useState<
    definitions["activity"][]
  >([]);
  const [mapBounds, setMapBounds] = useState<MapBounds | null>(null);

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

    if (param === "price") {
      value = value.join(",");
    }

    const hasNoValue = value === null || value === undefined;

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

      {/* Sticky search bar */}
      <Box
        className="search-bar-container"
        position="sticky"
        top="0"
        zIndex={100}
        bg="white"
        px={{ base: "4", md: "6" }}
        py="2"
      >
        <Flex gap="3" alignItems="center" maxW="100%" mx="auto">
          <Flex
            className="filter-header"
            onClick={() => setShowFilters(!showFilters)}
            cursor="pointer"
            alignItems="center"
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            p="2"
            px="3"
            borderRadius="full"
            height="40px"
            _hover={{ bg: "gray.50", borderColor: "gray.300" }}
            flexShrink={0}
          >
            <Icon as={BsFilter} fontSize="16px" mr="2" color="gray.600" />
            <Box
              fontSize="sm"
              color="gray.600"
              mr="2"
              display={{ base: "none", md: "block" }}
            >
              {t("filters")}
            </Box>
            <Icon
              as={BsChevronDown}
              fontSize="12px"
              transform={showFilters ? "rotate(180deg)" : "none"}
              transition="transform 0.2s"
              color="gray.600"
            />
          </Flex>

          <InputGroup size="md" flex="1">
            <InputLeftElement
              pointerEvents="none"
              children={<Icon fontSize="16px" as={BsSearch} color="gray.600" />}
            />
            <Input
              defaultValue={router.query.query}
              onChange={(e) => paramHandler("query", e.target.value)}
              placeholder={t("searchActivity")}
              variant="outline"
              bg="white"
              borderColor="gray.200"
              _hover={{ borderColor: "gray.300" }}
              _focus={{ borderColor: "teal.400", boxShadow: "0 0 0 1px teal" }}
              fontSize="sm"
              borderRadius="full"
            />
          </InputGroup>

          <Button
            onClick={toggleMap}
            leftIcon={<Icon as={showMap ? BsX : BsMap} fontSize="16px" />}
            variant={showMap ? "solid" : "outline"}
            colorScheme={showMap ? "teal" : "gray"}
            borderRadius="full"
            size="md"
            height="40px"
            px="5"
            flexShrink={0}
            fontWeight="500"
            fontSize="sm"
            borderColor={showMap ? undefined : "gray.200"}
            _hover={{
              bg: showMap ? "teal.600" : "gray.50",
              borderColor: showMap ? undefined : "gray.300",
            }}
          >
            <Text display={{ base: "none", md: "block" }}>
              {showMap ? t("hideMap") || "Hide map" : t("showMap") || "Map"}
            </Text>
          </Button>
        </Flex>
      </Box>

      {/* Filter modal overlay */}
      {showFilters && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.500"
          zIndex={200}
          onClick={() => setShowFilters(false)}
        />
      )}
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg="white"
        borderRadius="2xl"
        boxShadow="2xl"
        p="8"
        zIndex={201}
        maxW="600px"
        w="90%"
        maxH="80vh"
        overflowY="auto"
        display={showFilters ? "block" : "none"}
      >
        <Flex justifyContent="space-between" alignItems="center" mb="6">
          <Box fontSize="lg" fontWeight="bold" color="gray.700">
            {t("filters")}
          </Box>
          <Icon
            as={BsX}
            fontSize="24px"
            cursor="pointer"
            color="gray.500"
            _hover={{ color: "gray.700" }}
            onClick={() => setShowFilters(false)}
          />
        </Flex>

        <Box className="filter-group" mb="6">
          <Box className="filter-label">{t("seasons")}</Box>
          {seasons.map((season) => (
            <Badge
              cursor="pointer"
              variant={router.query.season === season ? "solid" : "outline"}
              id={season}
              key={season}
              onClick={(e) =>
                paramHandler("season", (e.target as HTMLTextAreaElement).id)
              }
              mr="2"
              mb="2"
              fontSize="1em"
              borderRadius="full"
              px="4"
              py="2"
              colorScheme="teal"
              transition="all 0.2s"
              _hover={{
                transform: "translateY(-1px)",
                boxShadow: "sm",
              }}
              role="button"
              aria-pressed={router.query.season === season}
            >
              {t(`season.${season}`)}
            </Badge>
          ))}
        </Box>

        <Box className="filter-group" mb="6">
          <Box className="filter-label">{t("price")}</Box>
          <Box className="sliderFilter">
            <RangeSlider
              onChangeEnd={(value: number[]) => paramHandler("price", value)}
              defaultValue={
                router?.query?.price
                  ? (router?.query?.price as string).split(",").map((v) => +v)
                  : [0, 3]
              }
              min={0}
              max={3}
              step={1}
              aria-label={["Minimum price", "Maximum price"]}
              focusThumbOnChange={true}
            >
              <RangeSliderTrack bg="teal.100" h="3px">
                <RangeSliderFilledTrack bg="teal" />
              </RangeSliderTrack>
              <Tooltip
                placement="top"
                hasArrow
                label={t("priceFilterMin")}
                openDelay={500}
              >
                <RangeSliderThumb
                  boxSize={6}
                  index={0}
                  _focus={{
                    boxShadow: "0 0 0 3px rgba(0, 128, 128, 0.2)",
                  }}
                >
                  <Box color="teal" as={BsCurrencyDollar} />
                </RangeSliderThumb>
              </Tooltip>
              <Tooltip
                placement="top"
                hasArrow
                label={t("priceFilterMax")}
                openDelay={500}
              >
                <RangeSliderThumb
                  boxSize={6}
                  index={1}
                  _focus={{
                    boxShadow: "0 0 0 3px rgba(0, 128, 128, 0.2)",
                  }}
                >
                  <Box color="teal" as={BsCurrencyDollar} />
                </RangeSliderThumb>
              </Tooltip>
            </RangeSlider>
          </Box>
        </Box>

        <Box className="filter-group" mb="6">
          <Box className="filter-label">{t("carbonFootprint")}</Box>
          <Box className="sliderFilter" pb="10px" mr="30px">
            <Slider
              onChangeEnd={(value: number) =>
                paramHandler("carbon_footprint", value)
              }
              name="carbonFootprintDefaultValue"
              defaultValue={
                router?.query?.carbon_footprint
                  ? +(router?.query?.carbon_footprint as string)
                  : 0
              }
              min={0}
              max={3}
              step={1}
              aria-label="Carbon footprint"
              focusThumbOnChange={true}
            >
              <SliderTrack bg="teal.100" h="3px">
                <SliderFilledTrack bg="teal" />
              </SliderTrack>
              <Tooltip
                placement="top"
                hasArrow
                label={buildTooltipDescription(
                  +(router?.query?.carbon_footprint as string),
                  t,
                )}
                openDelay={500}
              >
                <SliderThumb
                  boxSize={6}
                  _focus={{
                    boxShadow: "0 0 0 3px rgba(0, 128, 128, 0.2)",
                  }}
                >
                  <Box color="teal" as={GiEarthAmerica} />
                </SliderThumb>
              </Tooltip>
            </Slider>
          </Box>
        </Box>

        <Box className="filter-group">
          <Box className="filter-label">{t("accessibility")}</Box>
          <Badge
            variant={router.query.children_accessible ? "solid" : "outline"}
            cursor="pointer"
            id="children_accessible"
            onClick={() =>
              paramHandler(
                "children_accessible",
                !router.query.children_accessible ? "true" : null,
              )
            }
            mr="2"
            fontSize="1em"
            borderRadius="full"
            px="4"
            py="2"
            colorScheme="teal"
            transition="all 0.2s"
            _hover={{
              transform: "translateY(-1px)",
              boxShadow: "sm",
            }}
            role="button"
            aria-pressed={!!router.query.children_accessible}
          >
            {t("childrenAccessible")}
          </Badge>
        </Box>
      </Box>

      {/* Main content area: split view or full list */}
      <Flex className={showMap ? "split-layout" : ""} w="100%">
        {/* Activities list panel */}
        <Box
          className={showMap ? "split-list-panel" : "activity-list"}
          overflowY={showMap ? "auto" : undefined}
          w="100%"
        >
          {showMap && filteredActivities.length > 0 && (
            <Text fontSize="sm" color="gray.500" px="6" pt="4" pb="2">
              {filteredActivities.length}{" "}
              {filteredActivities.length === 1
                ? t("activityFound") || "activity"
                : t("activitiesFound") || "activities"}
            </Text>
          )}
          <Box pt="0" px="15px" pb="15px">
            {isLoading ? (
              <Box textAlign="center" py="20">
                <CircularProgress isIndeterminate color="teal" />
              </Box>
            ) : (
              <ActivityList
                activities={filteredActivities}
                locale={locale as Locale}
                isMapVisible={showMap}
              />
            )}
          </Box>
        </Box>

        {/* Map panel */}
        {showMap && (
          <Box className="split-map-panel">
            <MapWithNoSSR
              activities={allActivities}
              onBoundsChange={handleBoundsChange}
              className="split-map"
            />
          </Box>
        )}
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
