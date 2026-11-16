import {
  Avatar,
  Box,
  Button,
  Flex,
  Link as ChakraLink,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { SEASON_COLORS, SEASONS } from "./seasons";

export type Locale = "en" | "fr";

const LOCALES: Locale[] = ["fr", "en"];

const NAV_LINKS = [
  { href: "/activities", label: "nav.activities" },
  { href: "/trip", label: "nav.trips" },
];

export const LogoMark = ({ size = 12 }: { size?: number }) => (
  <Box
    aria-hidden="true"
    display="grid"
    gridTemplateColumns={`repeat(2, ${size}px)`}
    gap="3px"
  >
    {SEASONS.map((season) => (
      <Box
        key={season}
        w={`${size}px`}
        h={`${size}px`}
        borderRadius="full"
        bg={SEASON_COLORS[season].bg}
      />
    ))}
  </Box>
);

const NavbarComponent = () => {
  const router = useRouter();
  const locale = (router.locale as Locale) ?? "fr";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation("common");

  const changeLocale = (value: Locale) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query },
      },
      undefined,
      {
        locale: value,
        scroll: false,
      },
    );
  };

  return (
    <Box as="header" borderBottom="1px solid" borderColor="line" bg="paper">
      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: 4, md: 12 }}
        py={{ base: 3, lg: 0 }}
        minH={{ lg: "72px" }}
        align="center"
        wrap="wrap"
        gap={{ base: "8px 24px", md: "8px 40px" }}
      >
        <ChakraLink
          as={NextLink}
          href="/"
          aria-label={t("nav.home")}
          display="flex"
          alignItems="center"
          gap={3}
          _hover={{ textDecoration: "none" }}
        >
          <LogoMark />
          <Box
            as="span"
            fontFamily="heading"
            fontWeight={800}
            fontSize="26px"
            letterSpacing="-0.02em"
            color="season.winter"
          >
            actï
          </Box>
        </ChakraLink>

        <Flex
          as="nav"
          aria-label={t("nav.main")}
          wrap="wrap"
          gap={{ base: "0 20px", md: "0 28px" }}
          fontWeight={600}
          fontSize="15px"
          flex="1 1 auto"
          order={{ base: 3, md: 0 }}
          w={{ base: "100%", md: "auto" }}
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isCurrent = router.pathname.startsWith(href);
            return (
              <ChakraLink
                as={NextLink}
                key={href}
                href={href}
                aria-current={isCurrent ? "page" : undefined}
                py="10px"
                textDecoration={isCurrent ? "underline" : "none"}
                textUnderlineOffset="6px"
                textDecorationThickness="2px"
              >
                {t(label)}
              </ChakraLink>
            );
          })}
          <ChakraLink
            as="button"
            type="button"
            onClick={onOpen}
            py="10px"
            fontWeight={600}
          >
            {t("whoAreWe")}
          </ChakraLink>
        </Flex>

        <Flex
          role="group"
          aria-label={t("nav.language")}
          ml={{ base: "auto", md: 0 }}
          border="1.5px solid"
          borderColor="ink"
          borderRadius="full"
          overflow="hidden"
          fontWeight={700}
          fontSize="13px"
        >
          {LOCALES.map((language) => {
            const isActive = locale === language;
            return (
              <Box
                as="button"
                type="button"
                key={language}
                aria-pressed={isActive}
                onClick={() => !isActive && changeLocale(language)}
                bg={isActive ? "ink" : "transparent"}
                color={isActive ? "paper" : "ink"}
                px={4}
                minH="40px"
              >
                {language.toUpperCase()}
              </Box>
            );
          })}
        </Flex>
      </Flex>

      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="paper" borderRadius="20px">
          <ModalHeader fontFamily="heading" fontWeight={800} fontSize="2xl">
            {t("whoAreWeModal.welcome")}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody whiteSpace="pre-line">
            <Flex mb="20px" justify="space-around">
              <a
                href="https://www.linkedin.com/in/carla-fabregas/"
                title="linkedin carla fabregas"
              >
                <Avatar
                  size="2xl"
                  name="Carla Fabregas"
                  src="https://acti.anzieu.com/assets/e4848cd3-25a6-47c0-9b87-38ba696358f8"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alexis-anzieu/"
                title="linkedin alexis anzieu"
              >
                <Avatar
                  size="2xl"
                  name="Alexis Anzieu"
                  src="https://acti.anzieu.com/assets/ebaed129-92c2-499f-bcaa-f1f6a1c18765"
                />
              </a>
            </Flex>
            <div
              dangerouslySetInnerHTML={{
                __html: t("whoAreWeModal.text"),
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} variant="ghost">
              {t("whoAreWeModal.endText")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default NavbarComponent;
