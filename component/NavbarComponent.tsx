import { InfoIcon } from "@chakra-ui/icons";
import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spacer,
    useDisclosure,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export type Locale = "en" | "fr";

function Navbar() {
    const router = useRouter();
    const [locale, setLocale] = useState(router.locale as Locale);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { t } = useTranslation("common");

    const changeLocale = (value: Locale) => {
        setLocale(value);
        router.push(
            {
                pathname: router.pathname,
                query: { ...router.query },
            },
            undefined,
            {
                locale: value,
                scroll: false,
            }
        );
    };

    return (
        <Flex
            backgroundColor="white"
            position="sticky"
            boxShadow="md"
            w="100%"
            top="0"
            zIndex="100"
            h="60px"
        >
            <Center p="10px">
                <Box w="100%" h="100%">
                    <a href="/" aria-label="back to acti homepage">
                        <Box
                            width="125px"
                            height="100%"
                            position="relative"
                            cursor="pointer"
                        >
                            <NextImage
                                layout="fill"
                                alt="logo acti"
                                src="/logo.png"
                            />
                        </Box>
                    </a>
                </Box>
            </Center>
            <Spacer />
            <Center>
                <Button
                    className="help-button-desktop"
                    colorScheme="teal"
                    variant="ghost"
                    onClick={onOpen}
                >
                    {t("whoAreWe")}
                </Button>

                <IconButton
                    p="0px 15px 5px 0px"
                    className="help-button-mobile"
                    onClick={onOpen}
                    fontSize="30px"
                    variant="ghost"
                    colorScheme="teal"
                    aria-label="get info"
                    icon={<InfoIcon />}
                />

                <Modal size="lg" isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Heureux de vous accueillir!</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody whiteSpace="pre-line">
                            <Flex mb="20px">
                                <Center w="50%">
                                    <a
                                        href="https://www.linkedin.com/in/carla-fabregas/"
                                        title="linkedin carla fabregas"
                                    >
                                        <Avatar
                                            size="2xl"
                                            name="Carla Fabregas"
                                            src="https://upduuutuduczuuhixpdp.supabase.in/storage/v1/object/public/profile/carla.jpg"
                                        />
                                    </a>
                                </Center>
                                <Center w="50%">
                                    <a
                                        href="https://www.linkedin.com/in/alexis-anzieu/"
                                        title="linkedin alexis anzieu"
                                    >
                                        <Avatar
                                            size="2xl"
                                            name="Alexis Anzieu"
                                            src="https://upduuutuduczuuhixpdp.supabase.in/storage/v1/object/public/profile/alexis.jpeg"
                                        />
                                    </a>
                                </Center>
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
            </Center>
            <Center cursor="pointer" mr="10px">
                {(["en", "fr"] as Locale[]).map((language: Locale) => (
                    <Button
                        key={language}
                        ml="5px"
                        onClick={() => changeLocale(language)}
                        colorScheme="teal"
                        variant={locale === language ? "solid" : "outline"}
                    >
                        {language.toUpperCase()}
                    </Button>
                ))}
            </Center>
        </Flex>
    );
}

export default Navbar;
