import {
    Button,
    Center,
    Flex,
    Link as ChakraLink,
    Spacer,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Avatar,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
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
            <Center fontSize="25px" pl="10px">
                <ChakraLink as={Link} href="/">
                    ACTÏ
                </ChakraLink>
            </Center>
            <Spacer />
            <Center w="170px">
                <Button onClick={onOpen} colorScheme="teal" variant="ghost">
                    {t("whoAreWe")}
                </Button>

                <Modal size="lg" isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Heureux de vous accueillir!</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Flex mb="20px">
                                <Center w="50%">
                                    <Avatar
                                        size="2xl"
                                        name="Carla Fabregas"
                                        src="https://upduuutuduczuuhixpdp.supabase.in/storage/v1/object/public/profile/carla.jpg"
                                    />
                                </Center>
                                <Center w="50%">
                                    <Avatar
                                        size="2xl"
                                        name="Alexis Anzieu"
                                        src="https://upduuutuduczuuhixpdp.supabase.in/storage/v1/object/public/profile/alexis.jpeg"
                                    />
                                </Center>
                            </Flex>
                            Nous sommes un jeune couple (Alexis & Carla),
                            arpentant le Québec à la recherche d'activités
                            originales. <br /> Nos amis nous demandant
                            regulièrement des retours d'expérience, l'idée nous
                            est venue de déveloper un site web afin d'y
                            capitaliser nos differentes trouvailles.
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose} variant="ghost">
                                Bonne visite!
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
