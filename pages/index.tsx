import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { BiTrip } from "react-icons/bi";
import { MdLocalActivity } from "react-icons/md";

import { Locale } from "../component/NavbarComponent";

const ChoiceCard = ({ title, description, icon, href }: {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}) => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Link href={href}>
      <Box
        p={8}
        bg={bg}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="lg"
        shadow="lg"
        transition="all 0.3s"
        cursor="pointer"
        _hover={{
          transform: "translateY(-5px)",
          shadow: "xl",
          borderColor: "teal.500",
        }}
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Icon as={icon} w={16} h={16} color="teal.500" mb={4} />
        <Heading size="lg" mb={2}>
          {title}
        </Heading>
        <Text fontSize="lg" color="gray.600">
          {description}
        </Text>
      </Box>
    </Link>
  );
};

export default function Home() {
  const { t } = useTranslation("common");

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
      <Container maxW="container.lg" py={20}>
        <Heading
          textAlign="center"
          size="2xl"
          mb={12}
          bgGradient="linear(to-r, teal.500, teal.300)"
          bgClip="text"
        >
          {t("chooseYourAdventure")}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={8}>
          <ChoiceCard
            title={t("activities.title")}
            description={t("activities.description")}
            icon={MdLocalActivity}
            href="/activities"
          />
          <ChoiceCard
            title={t("trips.title")}
            description={t("trips.description")}
            icon={BiTrip}
            href="/trip"
          />
        </SimpleGrid>
      </Container>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as Locale, ["common"])),
    },
    revalidate: 10,
  };
}
