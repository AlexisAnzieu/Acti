import { Box, Flex, Button, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export type Locale = "en" | "fr";

function Navbar() {
    const router = useRouter();
    const [locale, setLocale] = useState(router.locale as Locale);

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
        >
            <Box w="50%" m="1%" fontSize="25px">
                <ChakraLink as={Link} href="/">
                    ACTÏ
                </ChakraLink>
            </Box>
            <Box w="37%" pr="15px" m="1%" textAlign="right">
                Qui somme nous?
            </Box>
            <Box textAlign="right" cursor="pointer" width="10%" m="1%">
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
            </Box>
        </Flex>
    );
}

export default Navbar;
