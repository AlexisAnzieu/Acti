import {
    Badge,
    Box,
    CircularProgress,
    Divider,
    Flex,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Link as ChakraLink,
} from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import NextImage from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";
import { BsMap, BsSearch } from "react-icons/bs";

import CarbonIcon from "../component/CarbonIconComponent";
import { Locale } from "../component/NavbarComponent";
import PriceIcon from "../component/PriceIconComponent";
import { definitions } from "../type/supabase";

const MAX_DESCRIPTION_LENGTH = 250;

export const seasons: string[] = ["summer", "spring", "winter", "autumn"];

export type QueryParam = {
    query?: string;
    season?: string;
};

export type GetServerSideProps = {
    props: {
        activities?: definitions["activity"][] | null;
        queryParam: QueryParam;
    };
};

function Activity(activity: definitions["activity"], locale: Locale) {
    const { t } = useTranslation("common");

    return (
        <ChakraLink
            as={Link}
            key={activity.id}
            href={`${locale}/activities/${activity.id}`}
        >
            <Box
                borderRadius="lg"
                borderWidth="1px"
                boxShadow="lg"
                cursor="pointer"
                display="inline-block"
                margin="5px"
                maxW="300px"
                overflow="hidden"
                role="group"
                textAlign="left"
            >
                <Box
                    width="300px"
                    height="200px"
                    transitionDuration="400ms"
                    position="relative"
                    _groupHover={{ height: "0px" }}
                >
                    <NextImage
                        layout="fill"
                        alt={activity.picture_url}
                        src={
                            (activity.picture_url as string) ||
                            "https://picsum.photos/400/600"
                        }
                    />
                </Box>

                <Box
                    height="134px"
                    transitionDuration="400ms"
                    p="5"
                    _groupHover={{ height: "334px" }}
                >
                    {activity.seasons && (
                        <Box display="flex" alignItems="baseline">
                            {(activity.seasons as string[]).map((s: string) => (
                                <Badge
                                    borderRadius="full"
                                    colorScheme="teal"
                                    key={s}
                                    mr="1"
                                    px="1.5"
                                    variant="solid"
                                >
                                    {t(`season.${s}`)}
                                </Badge>
                            ))}
                        </Box>
                    )}

                    <Box
                        as="h4"
                        color="gray.600"
                        fontWeight="semibold"
                        isTruncated
                        lineHeight="tight"
                        mt="1"
                    >
                        {activity.name?.[locale]} {activity.compagny}
                    </Box>

                    <Box display="flex" alignItems="center">
                        <PriceIcon price={activity.price} fontSize="18px" />
                    </Box>
                    <Box display="flex" alignItems="center">
                        <CarbonIcon
                            carbon_footprint={activity.carbon_footprint}
                            fontSize="18px"
                        />
                    </Box>

                    {activity.description?.[locale] && (
                        <Box mt="15px">
                            {activity.description?.[locale].length <
                            MAX_DESCRIPTION_LENGTH
                                ? activity.description?.[locale]
                                : `${activity.description?.[locale].substring(
                                      0,
                                      MAX_DESCRIPTION_LENGTH
                                  )} [...]`}
                        </Box>
                    )}
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

export default function Activities() {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const [locale] = useState(router.locale as Locale);
    const { t } = useTranslation("common");

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        if (!router.isReady) return;
        fetch(searchApi(router.query, locale))
            .then((res: Response) => res.json())
            .then((result) => {
                setActivities(result);
                setIsLoading(false);
            });
    }, [router.isReady, router.query]);

    function paramHandler(param: string, value: string | null): void {
        if (isLoading) {
            return;
        }

        setIsLoading(true);

        if (param === "season") {
            value = value !== router.query.season ? value : null;
        }
        if (!value) {
            delete router.query[param];
        }
        const routerQuery = {
            ...router.query,
            ...(value && { [param]: value }),
        };

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
    }

    return (
        <>
            <Head>
                <title>{t("documentTitle.index")}</title>
                <meta
                    property="og:title"
                    content={t("documentTitle.index")}
                    key="ogtitle"
                />
                <meta
                    property="og:description"
                    content={t("ogDescription")}
                    key="ogdesc"
                />
                <meta
                    property="og:image"
                    content="https://upduuutuduczuuhixpdp.supabase.in/storage/v1/object/public/profile/actiseo.png"
                    key="ogpic"
                />
            </Head>
            <Flex margin="30px 0px 10px 10px">
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
                        className="search-bar"
                        defaultValue={router.query.query}
                        fontSize="30px"
                        onChange={(e) => paramHandler("query", e.target.value)}
                        placeholder={t("searchActivity")}
                        variant="md"
                    />
                </InputGroup>
            </Flex>

            <Divider className="search-bar" m="0% 2% 20px 2% " />

            <Box className="activity-list">
                <Box padding="10px 15px 10px 15px">
                    {seasons.map((season) => (
                        <Badge
                            cursor="pointer"
                            variant={
                                router.query.season === season
                                    ? "solid"
                                    : "outline"
                            }
                            id={season}
                            key={season}
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
                            colorScheme="teal"
                        >
                            {t(`season.${season}`)}
                        </Badge>
                    ))}
                </Box>
                <Box h="100vh" padding="15px">
                    {isLoading ? (
                        <Box textAlign="center">
                            <CircularProgress isIndeterminate color="teal" />
                        </Box>
                    ) : (
                        <ActivityList
                            activities={activities}
                            locale={locale as Locale}
                        />
                    )}
                </Box>
            </Box>
            <Box className="floating-button">
                <Link
                    href={{
                        pathname: "/map",
                        query: router.query,
                    }}
                >
                    <Icon h="1.8em" as={BsMap} />
                </Link>
            </Box>
        </>
    );
}

export function searchApi(
    queryParam: QueryParam = {},
    locale: Locale = "en"
): string {
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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            ...(await serverSideTranslations(locale as Locale, ["common"])),
        },
    };
}
