import {
  Box,
  Container,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FaArrowRight } from "react-icons/fa";

import { Locale } from "../../component/NavbarComponent";

const TripCard = ({ title, description, imageSrc, href }: {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}) => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Link href={href}>
      <Box
        position="relative"
        overflow="hidden"
        bg={bg}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="xl"
        shadow="lg"
        transition="all 0.5s ease"
        cursor="pointer"
        _hover={{
          transform: "translateY(-8px) scale(1.01)",
          shadow: "2xl",
          borderColor: "teal.500",
          "& > .card-image": {
            transform: "scale(1.05)",
          },
          "& .arrow-icon": {
            transform: "translateX(4px)",
          }
        }}
        height="100%"
      >
        <Box position="relative" height="240px" className="image-container">
          <Box
            className="card-image"
            transition="transform 0.7s ease"
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
          >
            <Image
              src={imageSrc}
              alt={title}
              width="100%"
              height="100%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)"
            />
          </Box>
        </Box>
        
        <Box p={6}>
          <Heading 
            size="lg" 
            mb={3}
            bgGradient="linear(to-r, teal.500, teal.300)"
            bgClip="text"
          >
            {title}
          </Heading>
          <Text 
            fontSize="md" 
            color={textColor} 
            mb={4}
            noOfLines={3}
          >
            {description}
          </Text>
          <Box
            display="flex"
            alignItems="center"
            color="teal.500"
            fontWeight="bold"
          >
            <Text mr={2}>Explore</Text>
            <Icon 
              as={FaArrowRight} 
              className="arrow-icon" 
              transition="transform 0.3s ease"
            />
          </Box>
        </Box>
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
            imageSrc="https://acti.anzieu.com/assets/0921f88e-0492-426c-ad79-563566b10dc9.jpg"
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
