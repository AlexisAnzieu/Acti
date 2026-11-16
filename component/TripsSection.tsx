import { Box, Flex, Grid, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";

import { SEASON_COLORS } from "./seasons";

const TRAIN_DAYS = [1, 2, 3, 4];

const TripsSection = ({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) => {
  const { t } = useTranslation("common");
  const cardHeadingLevel = headingLevel === "h1" ? "h2" : "h3";

  return (
    <Box as="section" aria-labelledby="trips-title" bg="ink" color="paper">
      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: 4, md: 12 }}
        py={{ base: 14, md: 20 }}
        direction="column"
        gap={10}
      >
        <Flex wrap="wrap" align="flex-end" justify="space-between" gap="16px 40px">
          <Heading
            as={headingLevel}
            id="trips-title"
            fontWeight={800}
            fontSize={{ base: "40px", md: "72px" }}
            lineHeight={0.95}
            letterSpacing="-0.035em"
          >
            {t("tripsSection.title")}
          </Heading>
          <Text maxW="28em" fontSize="lg" color="#C5D4D1">
            {t("tripsSection.intro")}
          </Text>
        </Flex>

        <Grid templateColumns="repeat(auto-fit, minmax(min(100%, 300px), 1fr))" gap={6}>
          <ChakraLink
            as={NextLink}
            href="/trip/montreal-to-boston"
            display="flex"
            flexDirection="column"
            bg={SEASON_COLORS.summer.bg}
            color="ink"
            borderRadius="20px"
            overflow="hidden"
            role="group"
            _hover={{ textDecoration: "none" }}
          >
            <Box position="relative" aspectRatio={16 / 9} overflow="hidden">
              <Box
                position="absolute"
                inset={0}
                transition="transform .5s ease"
                _groupHover={{ transform: "scale(1.03)" }}
              >
                <NextImage
                  src="/images/bostontrip/trail.jpeg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
            <Flex direction="column" gap={3} p={7}>
              <Text fontSize="xs" fontWeight={700} letterSpacing="0.08em" textTransform="uppercase">
                {t("tripsMeta.boston")}
              </Text>
              <Heading
                as={cardHeadingLevel}
                fontWeight={800}
                fontSize={{ base: "32px", md: "40px" }}
                lineHeight={1}
                letterSpacing="-0.03em"
              >
                {t("trips.bostontrip.title")}
              </Heading>
              <Text fontSize="15px" color="#2E3A10">
                {t("tripsMeta.bostonStops")}
              </Text>
            </Flex>
          </ChakraLink>

          <ChakraLink
            as={NextLink}
            href="/trip/transcanadian"
            display="flex"
            flexDirection="column"
            bg={SEASON_COLORS.spring.bg}
            color={SEASON_COLORS.spring.ink}
            borderRadius="20px"
            overflow="hidden"
            _hover={{ textDecoration: "none" }}
          >
            <Flex
              aspectRatio={{ md: 16 / 9 }}
              direction="column"
              justify="center"
              gap={5}
              p={7}
              bg="#E8B4E2"
            >
              <Box aria-hidden="true" position="relative" h="4px" mx={2} bg="currentColor" borderRadius="2px">
                {TRAIN_DAYS.map((day, i) => {
                  const isEnd = i === 0 || i === TRAIN_DAYS.length - 1;
                  return (
                    <Box
                      key={day}
                      position="absolute"
                      left={`${(i / (TRAIN_DAYS.length - 1)) * 100}%`}
                      top="-8px"
                      w="20px"
                      h="20px"
                      ml="-10px"
                      borderRadius="full"
                      bg={isEnd ? SEASON_COLORS.spring.ink : "#E8B4E2"}
                      border="4px solid"
                      borderColor={SEASON_COLORS.spring.ink}
                    />
                  );
                })}
              </Box>
              <Grid
                as="ol"
                listStyleType="none"
                templateColumns={{ base: "repeat(2, minmax(0, 1fr))", sm: "repeat(4, minmax(0, 1fr))" }}
                gap={2}
                fontSize="13px"
                fontWeight={600}
                lineHeight={1.3}
              >
                {TRAIN_DAYS.map((day) => (
                  <Box as="li" key={day}>
                    {t("tripsSection.day", { n: day })}
                    <br />
                    {t(`trips.transcanadian.days.day${day}.title`)}
                  </Box>
                ))}
              </Grid>
            </Flex>
            <Flex direction="column" gap={3} p={7}>
              <Text fontSize="xs" fontWeight={700} letterSpacing="0.08em" textTransform="uppercase">
                {t("tripsMeta.transcanadian")}
              </Text>
              <Heading
                as={cardHeadingLevel}
                fontWeight={800}
                fontSize={{ base: "32px", md: "40px" }}
                lineHeight={1}
                letterSpacing="-0.03em"
              >
                {t("trips.transcanadian.title")}
              </Heading>
              <Text fontSize="15px">{t("trips.transcanadian.description")}</Text>
            </Flex>
          </ChakraLink>
        </Grid>
      </Flex>
    </Box>
  );
};

export default TripsSection;
