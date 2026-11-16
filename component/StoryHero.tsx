import { Box, Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import { BsArrowLeft } from "react-icons/bs";

import { SEASON_COLORS } from "./seasons";

export type StoryTone = "bike" | "train";

// Same colours as the trip cards on the home page.
export const STORY_COLORS = {
  bike: SEASON_COLORS.summer,
  train: SEASON_COLORS.spring,
};

type Props = {
  tone: StoryTone;
  eyebrow: string;
  title: string;
  subtitle: string;
};

const StoryHero = ({ tone, eyebrow, title, subtitle }: Props) => {
  const { t } = useTranslation("common");
  const { bg, ink } = STORY_COLORS[tone];

  return (
    <Box as="section" bg={bg} color={ink}>
      <Flex
        maxW="1000px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        pt={{ base: 6, md: 8 }}
        pb={{ base: 12, md: 16 }}
        direction="column"
        gap={{ base: 6, md: 10 }}
      >
        <ChakraLink
          as={NextLink}
          href="/trip"
          alignSelf="flex-start"
          display="inline-flex"
          alignItems="center"
          gap={2}
          minH="44px"
          fontWeight={600}
        >
          <BsArrowLeft aria-hidden="true" />
          {t("trips.transcanadian.backToTrips")}
        </ChakraLink>
        <Flex direction="column" gap={4}>
          <Text fontSize="sm" fontWeight={700} letterSpacing="0.08em" textTransform="uppercase">
            {eyebrow}
          </Text>
          <Heading
            as="h1"
            fontWeight={800}
            fontSize={{ base: "48px", md: "96px" }}
            lineHeight={0.95}
            letterSpacing="-0.035em"
            sx={{ textWrap: "balance" }}
          >
            {title}
          </Heading>
          <Text maxW="32em" fontSize={{ base: "18px", md: "21px" }} fontWeight={500}>
            {subtitle}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default StoryHero;
