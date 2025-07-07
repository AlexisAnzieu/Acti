/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Heading, keyframes } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { Locale } from "../../../component/NavbarComponent";
import LazyTooltipImage from "../../../components/LazyTooltipImage";
import { getTransCanadianContent } from "../../../content/trip/transcanadian/";

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DayCard = ({ title, content, imageUrl, index }: any) => (
  <Box
    className="day-card"
    minHeight="100vh"
    backgroundColor={`hsl(${index * 45}, 85%, 97%)`}
    position="relative"
    padding="2rem"
    paddingBottom="100px"
  >
    <Box
      maxWidth="800px"
      margin="0 auto"
      paddingTop="2rem"
      animation={`${fadeInAnimation} 0.5s ease-out`}
    >
      <Heading mb={6} size="xl" textAlign="center">
        {title}
      </Heading>
      <Box>{content}</Box>
      {imageUrl && (
        <Box
          maxWidth="600px"
          margin="0 auto"
          boxShadow="xl"
          borderRadius="lg"
          overflow="hidden"
          mt={6}
        >
          <Box as="img" src={imageUrl} alt={title} width="100%" height="auto" />
        </Box>
      )}
    </Box>
  </Box>
);

interface TransCanadianProps {
  lang: Locale;
}

export default function TransCanadian({ lang }: TransCanadianProps) {
  const { t } = useTranslation("common");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentContent = getTransCanadianContent(lang, t);

  return (
    <Box>
      <Head>
        <title>{currentContent.title}</title>
        <meta name="description" content={currentContent.subtitle} />
      </Head>
      {/* Back to trips button */}
      <Box maxWidth="800px" margin="2rem auto 0" textAlign="left">
        <Link href="/trip" passHref legacyBehavior>
          <Button
            as="a"
            colorScheme="teal"
            variant="outline"
            mb={6}
            leftIcon={<FaArrowLeft />}
          >
            {t("trips.transcanadian.backToTrips")}
          </Button>
        </Link>
      </Box>

      {isClient && (
        <Tooltip
          place="left"
          opacity={1}
          noArrow={true}
          float={true}
          id="my-tooltip"
          style={{
            maxWidth: "600px",
            width: "40%",
            borderRadius: "5%",
            zIndex: 999,
            padding: 0,
          }}
          render={({ activeAnchor }) => {
            if (
              typeof window === "undefined" ||
              typeof document === "undefined"
            ) {
              return null;
            }

            const href = activeAnchor?.getAttribute("href") ?? "";

            return (
              <LazyTooltipImage
                src={href}
                alt=""
                width={600}
                height={400}
                quality={30}
                sizes="(max-width: 600px) 100vw, 600px"
                style={{
                  borderRadius: "5%",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            );
          }}
        />
      )}

      {/* Stack day cards as normal page content */}
      {currentContent.days.map((day, index) => (
        <DayCard key={index} {...day} index={index} />
      ))}
    </Box>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      lang: locale,
      ...(await serverSideTranslations(locale as Locale, ["common"])),
    },
  };
}
