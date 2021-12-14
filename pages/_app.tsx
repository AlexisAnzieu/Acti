import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Script from "next/script";
import { appWithTranslation } from "next-i18next";

import Navbar from "../component/NavbarComponent";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                id="google_analytics_script"
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload" id="google_analytics_script_config">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
            </Script>

            <ChakraProvider>
                <Navbar />
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default appWithTranslation(MyApp);
