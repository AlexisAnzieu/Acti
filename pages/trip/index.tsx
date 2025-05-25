import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Locale } from "../../component/NavbarComponent";

const TripCard = ({ title, description, imageSrc, href }: {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}) => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Link href={href}>
      <Box
        p={6}
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
      >
        <Image
          src={imageSrc}
          alt={title}
          borderRadius="md"
          mb={4}
          width="100%"
          height="200px"
          objectFit="cover"
        />
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

export default function Trips() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("trips.title")} - Acti</title>
        <meta
          property="og:title"
          content={`${t("trips.title")} - Acti`}
          key="ogtitle"
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
          {t("trips.title")}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <TripCard
            title={t("trips.transcanadian.title")}
            description={t("trips.transcanadian.description")}
            imageSrc="/images/transcanadian-cover.jpg"
            href="/trip/transcanadian"
          />
          <TripCard
            title={t("trips.bostontrip.title")}
            description={t("trips.bostontrip.description")}
            imageSrc="/images/bostontrip/cover4.JPG"
            href="/trip/montreal-to-boston"
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
