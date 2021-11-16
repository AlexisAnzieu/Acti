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
import { BsSearch } from "react-icons/bs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Locale } from "../component/Navbar";
import Head from "next/head";
import PriceIcon from "../component/PriceIcon";
import CarbonIcon from "../component/CarbonIcon";

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

function Activity(activity: definitions["activity"], locale: Locale) {
    const { t } = useTranslation("common");

    return (
        <ChakraLink
            as={Link}
            key={activity.id}
            href={`/activities/${activity.id}`}
        >
            <Box
                cursor="pointer"
                boxShadow="lg"
                margin="5px"
                display="inline-block"
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                textAlign="left"
                role="group"
            >
                <Image
                    transitionDuration="400ms"
                    _groupHover={{ height: "0px" }}
                    height="200px"
                    width="300px"
                    src={activity.picture_url}
                    alt={activity.picture_url}
                />

                <Box
                    height="134px"
                    transitionDuration="400ms"
                    p="5"
                    _groupHover={{ height: "334px" }}
                >
                    <Box display="flex" alignItems="baseline">
                        {(activity.seasons as string[]).map((s: string) => (
                            <Badge
                                mr="1"
                                variant="solid"
                                key={s}
                                borderRadius="full"
                                px="2"
                                colorScheme={seasonsColor[s]}
                            >
                                {t(`season.${s}`)}
                            </Badge>
                        ))}
                    </Box>

                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                        color="gray.600"
                    >
                        {activity.name[locale]}
                    </Box>

                    <Box display="flex" mt="2" alignItems="center">
                        <PriceIcon price={activity.price} />
                    </Box>
                    <Box display="flex" mt="2" alignItems="center">
                        <CarbonIcon
                            carbon_footprint={activity.carbon_footprint}
                        />
                    </Box>
                </Box>
            </Box>
        </ChakraLink>
    );
}

const ActivityList = (props: {
    activities: GetServerSideProps["props"]["activities"];
    locale: Locale;
}) => {
    if (!props.activities?.length) {
        return <h1>Aucune activité ne correspond à ces critères</h1>;
    }
    return (
        <>
            {props?.activities.map((activity) =>
                Activity(activity, props.locale)
            )}{" "}
        </>
    );
};

export default function Activities(props: GetServerSideProps["props"]) {
    const [queryParam, setQueryParam] = useState(props?.queryParam);
    const [activities, setActivities] = useState(props.activities);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [locale] = useState(router.locale as Locale);
    const { t } = useTranslation("common");

    function paramHandler(param: string, value: string | null): void {
        setIsLoading(true);

        if (param === "season") {
            value = value !== queryParam.season ? value : null;
        }
        if (!value) {
            delete router.query[param];
        }
        const routerQuery = {
            ...router.query,
            ...(value && { [param]: value }),
        };
        setQueryParam(routerQuery);

        router.push(
            {
                pathname: router.pathname,
                query: routerQuery,
            },
            undefined,
            {
                shallow: true,
            }
        );

        fetch(searchApi(routerQuery, locale))
            .then((res: Response) => res.json())
            .then((result) => {
                setActivities(result);
                setIsLoading(false);
            });
    }

    return (
        <>
            <Head>
                <title>{t("documentTitle.index")}</title>
            </Head>
            <Flex margin="30px 5px 10px 10px" w="100%">
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={
                            <Icon
                                fontSize="20px"
                                as={BsSearch}
                                color="gray.700"
                            />
                        }
                    />
                    <Input
                        onChange={(e) => paramHandler("query", e.target.value)}
                        defaultValue={queryParam.query}
                        fontSize="30px"
                        variant="md"
                        placeholder={t("searchActivity")}
                        width="30%"
                    />
                </InputGroup>
            </Flex>

            <Divider width="30%" m="0% 2% 20px 2% " />
            <Box padding="10px 15px 10px 15px">
                {Object.entries(seasonsColor).map(([index, color]) => (
                    <Badge
                        cursor="pointer"
                        variant={
                            queryParam.season === index ? "solid" : "outline"
                        }
                        id={index}
                        key={index}
                        onClick={(e) =>
                            paramHandler(
                                "season",
                                (e.target as HTMLTextAreaElement).id
                            )
                        }
                        mr="2"
                        mb="1"
                        fontSize="1.5em"
                        borderRadius="full"
                        px="6"
                        colorScheme={color}
                    >
                        {t(`season.${index}`)}
                    </Badge>
                ))}
            </Box>
            <Box h="100vh" padding="15px">
                {isLoading ? (
                    <Box textAlign="center">
                        <CircularProgress isIndeterminate color="green.300" />
                    </Box>
                ) : (
                    <ActivityList
                        activities={activities}
                        locale={locale as Locale}
                    />
                )}
            </Box>
        </>
    );
}

function searchApi(queryParam: QueryParam, locale: Locale): string {
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
