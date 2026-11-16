import {
  Box,
  Flex,
  Grid,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { ReactNode } from "react";
import { BsArrowLeft, BsBoxArrowUpRight } from "react-icons/bs";

import { CarbonLabel, PriceLabel } from "../../component/ActivityCard";
import type { Locale } from "../../component/NavbarComponent";
import { isSeason, SEASON_COLORS } from "../../component/seasons";
import SocialMediaComponent from "../../component/SocialMediaComponent";
import type { definitions } from "../../type/supabase";
import("dayjs/locale/fr");

dayjs.extend(relativeTime);

const MapWithNoSSR = dynamic(() => import("../../component/MapComponent"), {
  ssr: false,
});

type StaticProps = {
  props: {
    activity: definitions["activity"];
  };
};

const Fact = ({ label, children }: { label: string; children: ReactNode }) => (
  <>
    <Text as="dt" fontSize="12px" fontWeight={700} letterSpacing="0.08em" textTransform="uppercase" color="muted" pt="3px">
      {label}
    </Text>
    <Box as="dd" m={0} fontWeight={500}>
      {children}
    </Box>
  </>
);

export default function Activity({ activity }: StaticProps["props"]) {
  const router = useRouter();
  const locale = router.locale as Locale;
  const { t } = useTranslation("common");
  const name = activity.name?.[locale];
  const seasons = (activity.seasons ?? []).filter(isSeason);
  const address = [activity.address, activity.postal_code, activity.city?.trim()]
    .filter(Boolean)
    .join(", ");

  return (
    <Box>
      <Head>
        <title>{`Actï - ${name ?? activity.compagny}`}</title>
        <meta
          property="og:title"
          content={`${name} ${activity.compagny}`}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={activity.description?.[locale]}
          key="ogdesc"
        />
        <meta property="og:image" content={activity.picture_url} key="ogpic" />
      </Head>

      <Box maxW="1280px" mx="auto" px={{ base: 4, md: 12 }} pt={{ base: 6, md: 10 }} pb={{ base: 14, md: 20 }}>
        <ChakraLink
          as={NextLink}
          href="/activities"
          display="inline-flex"
          alignItems="center"
          gap={2}
          minH="44px"
          fontWeight={600}
        >
          <BsArrowLeft aria-hidden="true" />
          {t("backToActivities")}
        </ChakraLink>

        <Flex wrap="wrap" gap={{ base: 10, lg: 16 }} mt={4} align="flex-start">
          <Flex direction="column" gap={7} flex="999 1 560px" minW={0}>
            <Flex direction="column" gap={4}>
              {seasons.length > 0 && (
                <Flex as="ul" listStyleType="none" wrap="wrap" gap={2}>
                  {seasons.map((season) => (
                    <Box
                      as="li"
                      key={season}
                      px={3}
                      py={1}
                      borderRadius="full"
                      bg={SEASON_COLORS[season].bg}
                      color={SEASON_COLORS[season].ink}
                      fontSize="13px"
                      fontWeight={700}
                      textTransform="capitalize"
                    >
                      {t(`season.${season}`)}
                    </Box>
                  ))}
                </Flex>
              )}
              <Heading
                as="h1"
                fontWeight={800}
                fontSize={{ base: "40px", md: "64px" }}
                lineHeight={0.98}
                letterSpacing="-0.035em"
                sx={{ textWrap: "balance" }}
              >
                {name}
              </Heading>
              {activity.website ? (
                <ChakraLink
                  href={activity.website}
                  isExternal
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  alignSelf="flex-start"
                  fontSize="lg"
                  fontWeight={600}
                  textDecoration="underline"
                  textUnderlineOffset="4px"
                >
                  {t("by")} {activity.compagny}
                  <BsBoxArrowUpRight aria-hidden="true" size={14} />
                </ChakraLink>
              ) : (
                <Text fontSize="lg" fontWeight={600}>
                  {t("by")} {activity.compagny}
                </Text>
              )}
            </Flex>

            {activity.picture_url && (
              <Box position="relative" aspectRatio={16 / 10} maxW="100%" borderRadius="14px" overflow="hidden" bg="line">
                <NextImage
                  src={activity.picture_url}
                  alt={name ?? ""}
                  fill
                  priority
                  sizes="(max-width: 1000px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            )}

            {activity.description?.[locale] && (
              <Text fontSize={{ base: "17px", md: "19px" }} maxW="36em" color="#3B5553">
                {activity.description[locale]}
              </Text>
            )}

            {activity.review?.[locale] && (
              <Box as="section" aria-labelledby="review-title" p={{ base: 6, md: 8 }} borderRadius="20px" bg="white" border="1px solid" borderColor="line">
                <Heading as="h2" id="review-title" fontWeight={800} fontSize="26px" mb={1}>
                  {t("activityPage.experience")}
                </Heading>
                {activity.created_at && (
                  <Text fontSize="sm" color="muted" mb={4}>
                    {t("activityPage.writtenAgo", {
                      ago: dayjs(activity.created_at).locale(locale).fromNow(),
                    })}
                  </Text>
                )}
                <Text maxW="36em" whiteSpace="pre-line">
                  {activity.review[locale]}
                </Text>
              </Box>
            )}
          </Flex>

          <Flex
            direction="column"
            gap={6}
            flex="1 1 360px"
            minW={0}
            position={{ lg: "sticky" }}
            top={{ lg: 6 }}
          >
            <Grid
              as="dl"
              templateColumns="auto minmax(0, 1fr)"
              gap="14px 24px"
              py={6}
              borderTop="2px solid"
              borderColor="ink"
            >
              <Fact label={t("activityPage.budget")}>
                <PriceLabel price={activity.price} />
              </Fact>
              <Fact label={t("activityPage.carbon")}>
                <CarbonLabel carbon={activity.carbon_footprint} />
              </Fact>
              {activity.children_accessible !== undefined && activity.children_accessible !== null && (
                <Fact label={t("activityPage.kids")}>
                  {activity.children_accessible ? t("activityPage.kidsYes") : t("activityPage.kidsNo")}
                </Fact>
              )}
              {address && <Fact label={t("activityPage.address")}>{address}</Fact>}
              {(activity.email || activity.phone) && (
                <Fact label={t("activityPage.contact")}>
                  <Flex direction="column" gap={1}>
                    {activity.email && (
                      <ChakraLink href={`mailto:${activity.email}`} textDecoration="underline" sx={{ overflowWrap: "anywhere" }}>
                        {activity.email}
                      </ChakraLink>
                    )}
                    {activity.phone && (
                      <ChakraLink href={`tel:${activity.phone}`} textDecoration="underline">
                        {activity.phone}
                      </ChakraLink>
                    )}
                  </Flex>
                </Fact>
              )}
            </Grid>

            {activity.social_media && (
              <Box px={6}>
                <SocialMediaComponent social_media={activity.social_media} />
              </Box>
            )}

            <Box h={{ base: "320px", lg: "420px" }} borderRadius="14px" overflow="hidden" border="1px solid" borderColor="line">
              <MapWithNoSSR activities={[activity]} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export async function getStaticPaths() {
  const res: any = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/activities?fields=slug&carbon_footprint=0`
  );
  const activities = await res.json();
  const paths = ["en", "fr"].flatMap((locale: string) =>
    activities.map((activity: definitions["activity"]) => ({
      params: { id: activity.slug },
      locale,
    }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
  locale,
}: GetStaticPropsContext) {
  const res: any = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/activities?slug=${params?.id}`
  );
  return {
    props: {
      ...(await serverSideTranslations(locale as Locale, ["common"])),
      activity: await res.json(),
    },
    revalidate: 10,
  };
}
