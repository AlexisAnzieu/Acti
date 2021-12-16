import { Box, Icon } from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { BsGrid } from "react-icons/bs";

import { Locale } from "../component/NavbarComponent";
import { definitions } from "../type/supabase";
import { GetServerSideProps, searchApi } from ".";

export default function Map(props: GetServerSideProps["props"]) {
    const { t } = useTranslation("common");
    const router = useRouter();
    const MapWithNoSSR = dynamic(() => import("../component/MapComponent"), {
        ssr: false,
    });

    return (
        <>
            <Head>
                <title>{t("documentTitle.map")}</title>
            </Head>

            <Box width="100%">
                <MapWithNoSSR id="big-map" activities={props.activities} />
            </Box>

            <Box className="floating-button">
                <Link
                    href={{
                        pathname: "/",
                        query: router.query,
                    }}
                >
                    <Icon h="1.8em" as={BsGrid} />
                </Link>
            </Box>
        </>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    const res: any = await fetch(searchApi({}, locale as Locale));
    const filteredActivities = (await res.json()).filter(
        (activity: definitions["activity"]) => activity.location
    );
    return {
        props: {
            ...(await serverSideTranslations(locale as Locale, ["common"])),
            activities: filteredActivities,
        },
    };
}
