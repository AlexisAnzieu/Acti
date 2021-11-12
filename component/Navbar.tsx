import { Box, Flex, Button } from "@chakra-ui/react";
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
            }
        );
    };

    return (
        <Flex margin="1%" w="100%">
            <Box w="50%">ACTI</Box>
            <Box w="37%" pr="15px" textAlign="right">
                Qui somme nous?
            </Box>
            <Box textAlign="right" cursor="pointer" width="10%">
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
