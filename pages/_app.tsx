import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Bricolage_Grotesque, Schibsted_Grotesk } from "next/font/google";
import Script from "next/script";
import { appWithTranslation } from "next-i18next";

import FooterComponent from "../component/FooterComponent";
import Navbar from "../component/NavbarComponent";
import theme from "../theme";

const display = Bricolage_Grotesque({
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

const body = Schibsted_Grotesk({
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                :root {
                    --font-display: ${display.style.fontFamily};
                    --font-body: ${body.style.fontFamily};
                }
            `}</style>
            <Script
                id="google_analytics_script"
                strategy="lazyOnload"
                src={"https://www.googletagmanager.com/gtag/js?id=G-0VZWYKDVK7"}
            />

            <Script strategy="lazyOnload" id="google_analytics_script_config">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-0VZWYKDVK7');
        `}
            </Script>

            <ChakraProvider theme={theme}>
                <Navbar />
                <Component {...pageProps} />
                <FooterComponent />
                <Analytics />
            </ChakraProvider>
        </>
    );
}

export default appWithTranslation(MyApp);
