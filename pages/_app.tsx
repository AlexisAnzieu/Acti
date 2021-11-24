import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import Navbar from "../component/NavbarComponent";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Navbar />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default appWithTranslation(MyApp);
