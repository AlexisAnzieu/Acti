import "atropos/css";

import { Box, Icon } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { BsViewList } from "react-icons/bs";

import { Locale } from "../component/NavbarComponent";
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
                    <Icon h="1.8em" as={BsViewList} />
                </Link>
            </Box>
        </>
    );
}

export async function getServerSideProps(
    context: GetServerSidePropsContext
): Promise<GetServerSideProps> {
    return fetch(searchApi(context.query, context.locale as Locale))
        .then((res: Response) => res.json())
        .then(async (activities) => {
            return {
                props: {
                    ...(await serverSideTranslations(context.locale as Locale, [
                        "common",
                    ])),
                    activities,
                    queryParam: context.query,
                },
            };
        });
}
