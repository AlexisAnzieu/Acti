import {
    Input,
    Image,
    Box,
    Badge,
    Link as ChakraLink,
    Icon,
    CircularProgress,
    Divider,
    Flex,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import "atropos/css";
import { definitions } from "../type/supabase";
import { GetServerSidePropsContext } from "next";
import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { BsViewList, BsMap } from "react-icons/bs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Locale } from "../component/NavbarComponent";
import Head from "next/head";
import dynamic from "next/dynamic";

type SeasonsColor = {
    [key: string]: string;
};

export const seasonsColor: SeasonsColor = {
    summer: "orange",
    spring: "green",
    winter: "blue",
    autumn: "red",
};

type QueryParam = {
    query?: string;
    season?: string;
};

type GetServerSideProps = {
    props: {
        activities: definitions["activity"][] | null;
        queryParam: QueryParam;
    };
};

export default function Map(props: GetServerSideProps["props"]) {
    const { t } = useTranslation("common");
    const MapWithNoSSR = dynamic(() => import("../component/MapComponent"), {
        ssr: false,
    });

    return (
        <>
            <Head>
                <title>{t("documentTitle.index")}</title>
            </Head>

            <Box width="100%">
                <MapWithNoSSR id="big-map" activities={props.activities} />
            </Box>

            <Box className="floating-button">
                <ChakraLink as={Link} href="/">
                    <Icon as={BsViewList} />
                </ChakraLink>
            </Box>
        </>
    );
}

export function searchApi(queryParam: QueryParam, locale: Locale): string {
    const host = process.env.NEXT_PUBLIC_BASE_URL;
    const apiUrl = new URL(`${host}/api/activities`);
    const queryParamLocaleAdded = {
        ...queryParam,
        locale,
    };
    Object.entries(queryParamLocaleAdded).forEach(([key, value]) =>
        apiUrl.searchParams.append(key, value)
    );
    return apiUrl.href;
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
