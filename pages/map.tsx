import { Box, Icon } from "@chakra-ui/react";
import "atropos/css";
import { GetServerSidePropsContext } from "next";
import React from "react";
import Link from "next/link";
import { BsViewList } from "react-icons/bs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Locale } from "../component/NavbarComponent";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GetServerSideProps, searchApi } from ".";
import { useRouter } from "next/router";

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
