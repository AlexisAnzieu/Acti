import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import Navbar from "../component/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Navbar />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default appWithTranslation(MyApp);
