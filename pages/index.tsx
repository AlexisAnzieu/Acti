import {
  Box,
  Flex,
  Grid,
  Heading,
  Input,
  Link as ChakraLink,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import type { GetStaticPropsContext } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { type FormEvent, useState } from "react";
import { BsArrowRight, BsMap, BsSearch } from "react-icons/bs";

import ActivityCard, { type ActivityPreview } from "../component/ActivityCard";
import type { Locale } from "../component/NavbarComponent";
import NewsletterComponent from "../component/NewsletterComponent";
import SeasonPicker from "../component/SeasonPicker";
import { type Season, SEASON_COLORS, seasonOfMonth, SEASONS } from "../component/seasons";
import TripsSection from "../component/TripsSection";
import { fetchPublishedActivities } from "../helpers/activities";

const PREVIEW_SIZE = 8;

type Props = {
  total: number;
  counts: Record<Season, number>;
  previews: Record<Season, ActivityPreview[]>;
  initialSeason: Season;
};

const container = {
  maxW: "1280px",
  mx: "auto",
  px: { base: 4, md: 12 },
};

export default function Home({ total, counts, previews, initialSeason }: Props) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const locale = (router.locale as Locale) ?? "fr";
  const [season, setSeason] = useState<Season>(initialSeason);
  const [query, setQuery] = useState("");
  const color = SEASON_COLORS[season];
  const seasonWord = t(`season.${season}`);
  const det = t(`seasonDet.${season}`);

  const onSearch = (event: FormEvent) => {
    event.preventDefault();
    router.push({
      pathname: "/activities",
      query: { season, ...(query.trim() && { query: query.trim() }) },
    });
  };

  return (
    <>
      <Head>
        <title>{t("documentTitle.index")}</title>
        <meta property="og:title" content={t("documentTitle.index")} key="ogtitle" />
        <meta property="og:description" content={t("ogDescription")} key="ogdesc" />
        <meta
          property="og:image"
          content="https://xyzfqjxmadywqhwvcqxh.supabase.in/storage/v1/object/public/activities/ogFB.png"
          key="ogpic"
        />
      </Head>

      <Flex
        as="section"
        {...container}
        pt={{ base: 12, md: 20 }}
        pb={{ base: 10, md: 14 }}
        wrap="wrap"
        align="center"
        gap={{ base: "40px", md: "48px 64px" }}
      >
        <Flex direction="column" gap={7} flex="999 1 560px" minW={0}>
          <Text fontSize="sm" fontWeight={600} letterSpacing="0.08em" textTransform="uppercase" color="muted">
            {t("home.eyebrow", { count: total })}
          </Text>
          <Heading
            as="h1"
            fontWeight={800}
            fontSize={{ base: "48px", md: "clamp(56px, 7vw, 104px)" }}
            lineHeight={0.95}
            letterSpacing="-0.035em"
            sx={{ textWrap: "balance" }}
          >
            {t("home.titleBefore")} {det}{" "}
            <Box
              as="mark"
              bg={color.bg}
              color={color.ink}
              px="0.12em"
              borderRadius="0.18em"
              transition="background-color .25s ease, color .25s ease"
              sx={{ boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}
            >
              {seasonWord}
            </Box>
            {t("home.titleAfter")}
          </Heading>
          <Text maxW="34em" fontSize={{ base: "17px", md: "19px" }} color="#3B5553">
            {t("home.intro")}
          </Text>
        </Flex>

        <Flex direction="column" align="center" gap={4} flex="1 1 320px">
          <SeasonPicker value={season} onChange={setSeason} counts={counts} />
          <Text fontSize="13px" color="muted">
            {t("home.seasonCaption")}
          </Text>
        </Flex>
      </Flex>

      <Box {...container}>
        <Flex
          as="form"
          role="search"
          onSubmit={onSearch}
          wrap="wrap"
          align="center"
          gap="12px 16px"
          py={5}
          borderTop="2px solid"
          borderColor="ink"
          borderBottom="1px solid"
          borderBottomColor="line"
        >
          <Flex
            flex="1 1 280px"
            align="center"
            gap="10px"
            bg="white"
            border="1.5px solid"
            borderColor="lineStrong"
            borderRadius="10px"
            px="14px"
            minH="48px"
            _focusWithin={{ borderColor: "ink" }}
          >
            <Box as={BsSearch} aria-hidden="true" color="muted" flex="none" />
            <VisuallyHidden as="label" htmlFor="home-search">
              {t("searchActivity")}
            </VisuallyHidden>
            <Input
              id="home-search"
              type="search"
              variant="unstyled"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("home.searchPlaceholder")}
              fontSize="16px"
            />
          </Flex>
          <Box
            as="button"
            type="submit"
            minH="48px"
            px={5}
            borderRadius="10px"
            border="1.5px solid"
            borderColor="ink"
            fontWeight={700}
          >
            {t("home.searchSubmit")}
          </Box>
          <ChakraLink
            as={NextLink}
            href={`/activities?season=${season}`}
            display="inline-flex"
            alignItems="center"
            gap={2}
            minH="48px"
            px={5}
            borderRadius="10px"
            bg="ink"
            color="paper"
            fontWeight={700}
            ml={{ md: "auto" }}
            _hover={{ textDecoration: "none", bg: "#1E4A48" }}
          >
            <BsMap aria-hidden="true" />
            {t("home.seeMap")}
          </ChakraLink>
        </Flex>
      </Box>

      <Flex
        as="section"
        aria-labelledby="results-title"
        {...container}
        pt={8}
        pb={{ base: 16, md: 20 }}
        direction="column"
        gap={6}
      >
        <Flex wrap="wrap" align="baseline" justify="space-between" gap="8px 24px">
          <Heading as="h2" id="results-title" fontWeight={700} fontSize="28px">
            {t("home.seasonCount", { count: counts[season], det, season: seasonWord })}
          </Heading>
          <Text fontSize="sm" color="muted">
            {t("home.latest")}
          </Text>
        </Flex>

        <Grid templateColumns="repeat(auto-fill, minmax(min(100%, 260px), 1fr))" gap="40px 24px">
          {previews[season].map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} locale={locale} accent={color} />
          ))}
        </Grid>

        <ChakraLink
          as={NextLink}
          href={`/activities?season=${season}`}
          alignSelf="flex-start"
          display="inline-flex"
          alignItems="center"
          gap={3}
          minH="48px"
          px={6}
          borderRadius="full"
          border="2px solid"
          borderColor="ink"
          fontWeight={700}
          _hover={{ textDecoration: "none", bg: "ink", color: "paper" }}
        >
          {t("home.seeAll", { count: counts[season] })}
          <BsArrowRight aria-hidden="true" />
        </ChakraLink>
      </Flex>

      <TripsSection />

      <Flex as="section" {...container} py={{ base: 14, md: 20 }} wrap="wrap" gap="48px 80px">
        <Flex direction="column" gap={4} flex="1 1 380px" minW={0}>
          <Heading as="h2" fontWeight={800} fontSize="32px">
            {t("home.aboutTitle")}
          </Heading>
          <Text maxW="34em" fontSize="17px" color="#3B5553">
            {t("home.aboutText")}
          </Text>
          <ChakraLink
            href="https://github.com/AlexisAnzieu/Acti"
            isExternal
            alignSelf="flex-start"
            fontWeight={600}
            textDecoration="underline"
            textUnderlineOffset="4px"
          >
            {t("home.sourceCode")}
          </ChakraLink>
        </Flex>
        <Box
          flex="1 1 380px"
          minW={0}
          p={7}
          borderRadius="20px"
          bg={color.bg}
          color={color.ink}
          transition="background-color .25s ease, color .25s ease"
        >
          <NewsletterComponent label={t("home.newsletterTitle")} id="home-email" />
        </Box>
      </Flex>
    </>
  );
}

const toPreview = (activity: ActivityPreview): ActivityPreview => ({
  slug: activity.slug,
  name: activity.name,
  city: activity.city ?? "",
  picture_url: activity.picture_url,
  price: activity.price,
  carbon_footprint: activity.carbon_footprint,
  seasons: activity.seasons ?? [],
  children_accessible: activity.children_accessible ?? false,
});

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const activities = await fetchPublishedActivities();

  const counts = {} as Record<Season, number>;
  const previews = {} as Record<Season, ActivityPreview[]>;
  SEASONS.forEach((season) => {
    const inSeason = activities.filter((activity) => activity.seasons?.includes(season));
    counts[season] = inSeason.length;
    previews[season] = inSeason.slice(0, PREVIEW_SIZE).map(toPreview);
  });

  return {
    props: {
      ...(await serverSideTranslations(locale as Locale, ["common"])),
      total: activities.length,
      counts,
      previews,
      initialSeason: seasonOfMonth(new Date().getMonth()),
    },
    revalidate: 600,
  };
}
