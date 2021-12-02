import { Box, Icon } from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";
import { BsViewList } from "react-icons/bs";

import { Locale } from "../component/NavbarComponent";
import { searchApi } from ".";

export default function Map() {
    const { t } = useTranslation("common");
    const router = useRouter();
    const MapWithNoSSR = dynamic(() => import("../component/MapComponent"), {
        ssr: false,
    });
    const [locale] = useState(router.locale as Locale);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch(searchApi(router.query, locale))
            .then((res: Response) => res.json())
            .then((result) => {
                setActivities(result);
            });
    }, []);

    return (
        <>
            <Head>
                <title>{t("documentTitle.map")}</title>
            </Head>

            <Box width="100%">
                <MapWithNoSSR id="big-map" activities={activities} />
            </Box>

            <Box className="floating-button">
                <Link
                    href={{
                        pathname: "/",
                        query: router.query,
                    }}
                >
                    <Icon h="1.8em" as={BsViewList} />
                </Link>
            </Box>
        </>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            ...(await serverSideTranslations(locale as Locale, ["common"])),
        },
    };
}
