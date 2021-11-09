import {
    Input,
    Image,
    Box,
    Badge,
    Link as ChakraLink,
    Icon,
    CircularProgress,
} from "@chakra-ui/react";
import "atropos/css";
import { definitions } from "../type/supabase";
import { GetServerSidePropsContext } from "next";
import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { BsCurrencyDollar } from "react-icons/bs";

type Seasons = {
    [key: string]: {
        name: string;
        color: string;
    };
};

const seasons: Seasons = {
    summer: {
        name: "été",
        color: "orange",
    },
    spring: {
        name: "printemps",
        color: "green",
    },
    winter: {
        name: "hiver",
        color: "teal",
    },
    autumn: {
        name: "automne",
        color: "red",
    },
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

function Activity(activity: definitions["activity"]) {
    const property = {
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
    };

    return (
        <ChakraLink
            as={Link}
            key={activity.id}
            href={`/activities/${activity.id}`}
        >
            <Box
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
                                key={s}
                                borderRadius="full"
                                px="2"
                                colorScheme={seasons[s].color}
                            >
                                {seasons[s].name}
                            </Badge>
                        ))}
                    </Box>

                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {activity.name}
                    </Box>

                    <Box>
                        {property.formattedPrice}
                        <Box as="span" color="gray.600" fontSize="sm">
                            / wk
                        </Box>
                    </Box>

                    <Box display="flex" mt="2" alignItems="center">
                        {Array(5)
                            .fill("")
                            .map((_, i) => (
                                <Icon
                                    as={BsCurrencyDollar}
                                    key={i}
                                    color={
                                        i < property.rating
                                            ? "teal.500"
                                            : "gray.300"
                                    }
                                />
                            ))}
                    </Box>
                </Box>
            </Box>
        </ChakraLink>
    );
}

const ActivityList = (activities: {
    activities: GetServerSideProps["props"]["activities"];
}) => {
    if (!activities.activities?.length) {
        return <h1>Aucune activité ne correspond à ces critères</h1>;
    }
    return <>{activities?.activities.map((activity) => Activity(activity))} </>;
};

export default function Activities(props: GetServerSideProps["props"]) {
    const [queryParam, setQueryParam] = useState(props?.queryParam);
    const [activities, setActivities] = useState(props.activities);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

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

        fetch(searchApi(routerQuery))
            .then((res: Response) => res.json())
            .then((result) => {
                setActivities(result);
                setIsLoading(false);
            });
    }

    return (
        <>
            <Input
                onChange={(e) => paramHandler("query", e.target.value)}
                defaultValue={queryParam.query}
                margin="30px 5px 40px 5px"
                fontSize="50px"
                variant="md"
                placeholder="Rechercher une activité"
            />

            <Box padding="10px 15px 10px 15px">
                {Object.entries(seasons).map(([index, { name, color }]) => (
                    <Badge
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
                        fontSize="2em"
                        borderRadius="full"
                        px="6"
                        colorScheme={color}
                    >
                        {name}
                    </Badge>
                ))}
            </Box>
            <Box padding="15px">
                {isLoading ? (
                    <Box textAlign="center">
                        <CircularProgress isIndeterminate color="green.300" />
                    </Box>
                ) : (
                    <ActivityList activities={activities} />
                )}
            </Box>
        </>
    );
}

function searchApi(queryParam: QueryParam): string {
    const host = process.env.NEXT_PUBLIC_BASE_URL;
    const apiUrl = new URL(`${host}/api/activities`);
    Object.entries(queryParam).forEach(([key, value]) =>
        apiUrl.searchParams.append(key, value)
    );
    return apiUrl.href;
}

export async function getServerSideProps(
    context: GetServerSidePropsContext
): Promise<GetServerSideProps> {
    return fetch(searchApi(context.query))
        .then((res: Response) => res.json())
        .then((activities) => {
            return {
                props: {
                    activities,
                    queryParam: context.query,
                },
            };
        });
}
