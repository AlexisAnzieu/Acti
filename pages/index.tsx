import {
    Badge,
    Box,
    Center,
    CircularProgress,
    Divider,
    Flex,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Link as ChakraLink,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Tooltip,
} from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import NextImage from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";
import { BsCurrencyDollar, BsMap, BsSearch } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";

import CarbonIconComponent, {
    buildTooltipDescription,
} from "../component/CarbonIconComponent";
import { Locale } from "../component/NavbarComponent";
import NewsletterComponent from "../component/NewsletterComponent";
import PriceIconComponent from "../component/PriceIconComponent";
import { definitions } from "../type/supabase";

const MAX_DESCRIPTION_LENGTH = 250;

export const seasons: string[] = ["summer", "spring", "winter", "autumn"];

export type QueryParam = {
    query?: string;
    season?: string;
    carbon_footprint?: string;
    price?: string;
    children_accessible?: boolean;
};

export type GetServerSideProps = {
    props: {
        activities?: definitions["activity"][] | null;
        queryParam: QueryParam;
    };
};

const BuildNewsletterActivity = () => {
    const { t } = useTranslation("common");

    return (
        <Box
            key="newsletterActivity"
            borderRadius="lg"
            boxShadow="md"
            display="inline-block"
            margin="5px"
            height="334px"
            width="300px"
            overflow="hidden"
            p="5"
            textAlign="left"
        >
            {t("noActivityMatching")}
            <br />
            <br />
            <NewsletterComponent />
        </Box>
    );
};

const BuildActivity = (activity: definitions["activity"], locale: Locale) => {
    const { t } = useTranslation("common");

    return (
        <ChakraLink
            as={Link}
            key={activity.slug}
            href={`${locale}/activities/${activity.slug}`}
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
                        src={activity.picture_url}
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
                            {activity.seasons.map((s: string) => (
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
                        <PriceIconComponent
                            price={activity.price}
                            fontSize="18px"
                        />
                    </Box>
                    <Box display="flex" alignItems="center">
                        <CarbonIconComponent
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
};

const ActivityList = (props: {
    activities: GetServerSideProps["props"]["activities"];
    locale: Locale;
}) => {
    const { t } = useTranslation("common");
    if (!props.activities?.length) {
        return (
            <>
                <Center fontSize="20px">{t("noActivityFound")}</Center>
                <Center>
                    <Box width="300px" margin="3%">
                        <NewsletterComponent />
                    </Box>
                </Center>
            </>
        );
    }
    return (
        <>
            {[
                ...props?.activities.map((activity) =>
                    BuildActivity(activity, props.locale)
                ),
                BuildNewsletterActivity(),
            ]}
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

    function paramHandler(param: string, value: any): void {
        if (isLoading) {
            return;
        }

        setIsLoading(true);

        if (param === "season") {
            value = value !== router.query.season ? value : null;
        }

        if (param === "price") {
            value = value.join(",");
        }

        const hasNoValue = value === null || value === undefined;

        if (hasNoValue) {
            delete router.query[param];
        }

        const routerQuery = {
            ...router.query,
            ...(!hasNoValue && { [param]: value }),
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
                    content="https://xyzfqjxmadywqhwvcqxh.supabase.in/storage/v1/object/public/activities/ogFB.png"
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
                <Box className="filters">
                    <Box mb="20px">
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
                                mr="1"
                                fontSize="1em"
                                borderRadius="full"
                                px="2"
                                colorScheme="teal"
                            >
                                {t(`season.${season}`)}
                            </Badge>
                        ))}
                    </Box>
                    <Box
                        className="sliderFilter"
                        key={router.query?.price as string}
                    >
                        <RangeSlider
                            onChangeEnd={(value: number[]) =>
                                paramHandler("price", value)
                            }
                            defaultValue={
                                router?.query?.price
                                    ? (router?.query?.price as string)
                                          .split(",")
                                          .map((v) => +v)
                                    : [0, 3]
                            }
                            min={0}
                            max={3}
                            step={1}
                        >
                            <RangeSliderTrack bg="teal.100">
                                <RangeSliderFilledTrack bg="teal" />
                            </RangeSliderTrack>
                            <Tooltip
                                placement="top"
                                hasArrow
                                label={t("priceFilterMin")}
                            >
                                <RangeSliderThumb boxSize={6} index={0}>
                                    <Box color="teal" as={BsCurrencyDollar} />
                                </RangeSliderThumb>
                            </Tooltip>
                            <Tooltip
                                placement="top"
                                hasArrow
                                label={t("priceFilterMax")}
                            >
                                <RangeSliderThumb boxSize={6} index={1}>
                                    <Box color="teal" as={BsCurrencyDollar} />
                                </RangeSliderThumb>
                            </Tooltip>
                        </RangeSlider>
                    </Box>

                    <Box
                        className="sliderFilter"
                        key={router.query?.carbon_footprint as string}
                        pb="10px"
                        mr="30px"
                    >
                        <Slider
                            onChangeEnd={(value: number) =>
                                paramHandler("carbon_footprint", value)
                            }
                            name="carbonFootprintDefaultValue"
                            defaultValue={
                                router?.query?.carbon_footprint
                                    ? +(router?.query
                                          ?.carbon_footprint as string)
                                    : 2
                            }
                            min={0}
                            max={3}
                            step={1}
                        >
                            <SliderTrack bg="teal.100">
                                <SliderFilledTrack bg="teal" />
                            </SliderTrack>
                            <Tooltip
                                placement="top"
                                hasArrow
                                label={buildTooltipDescription(
                                    +(router?.query
                                        ?.carbon_footprint as string),
                                    t
                                )}
                            >
                                <SliderThumb boxSize={6}>
                                    <Box color="teal" as={GiEarthAmerica} />
                                </SliderThumb>
                            </Tooltip>
                        </Slider>
                    </Box>
                    <Box>
                        <Badge
                            variant={
                                router.query.children_accessible
                                    ? "solid"
                                    : "outline"
                            }
                            cursor="pointer"
                            id="children_accessible"
                            onClick={() =>
                                paramHandler(
                                    "children_accessible",
                                    !router.query.children_accessible
                                        ? "true"
                                        : null
                                )
                            }
                            mr="1"
                            fontSize="1em"
                            borderRadius="full"
                            px="2"
                            colorScheme="teal"
                        >
                            {t("childrenAccessible")}
                        </Badge>
                    </Box>
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
            <Link
                href={{
                    pathname: "/map",
                    query: router.query,
                }}
            >
                <Box className="floating-button">
                    <Icon h="1.8em" as={BsMap} />
                </Box>
            </Link>
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
        apiUrl.searchParams.append(key, `${value}`)
    );
    return apiUrl.href;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            ...(await serverSideTranslations(locale as Locale, ["common"])),
        },
        revalidate: 10,
    };
}
