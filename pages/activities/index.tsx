import {
    Input,
    Image,
    Box,
    Badge,
    Link as ChakraLink,
    Icon,
} from "@chakra-ui/react";
import "atropos/css";
import { definitions } from "../../type/supabase";
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

type GetServerSideProps = {
    props: {
        activities: definitions["activity"][] | null;
        query?: string;
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
        <ChakraLink as={Link} href={`/activities/${activity.id}`}>
            <Box
                key={activity.id}
                margin="5px"
                display="inline-block"
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                textAlign="left"
            >
                <Image
                    height="200px"
                    width="300px"
                    src={activity.picture_url}
                    alt={activity.picture_url}
                />

                <Box p="5">
                    <Box display="flex" alignItems="baseline">
                        {(activity.seasons as string[]).map((s: string) => (
                            <Badge
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
    const [query, setQuery] = useState(props?.query);
    const [activities, setActivities] = useState(props.activities);
    const router = useRouter();

    function handler(event: any): void {
        const searchQuery = event.target.value;
        setQuery(searchQuery);
        router.push(
            searchQuery ? `/activities?query=${searchQuery}` : "/activities",
            undefined,
            {
                shallow: true,
            }
        );
        fetch(searchApi(searchQuery))
            .then((res: Response) => res.json())
            .then((result) => {
                setActivities(result);
            });
    }

    return (
        <>
            <Input
                onChange={handler}
                defaultValue={query}
                margin="30px 5px 40px 5px"
                fontSize="50px"
                variant="md"
                placeholder="Entrez une activité"
            />

            <Box padding="10px 15px 10px 15px">
                {Object.entries(seasons).map(([index, { name, color }]) => (
                    <Badge
                        mr="2"
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
                <ActivityList activities={activities} />
            </Box>
        </>
    );
}

const searchApi = (query: string) =>
    query
        ? `http://localhost:3000/api/activities?query=${query}`
        : "http://localhost:3000/api/activities";

export async function getServerSideProps(
    context: GetServerSidePropsContext
): Promise<GetServerSideProps> {
    const query: string = context.query.query as string;
    return fetch(searchApi(query))
        .then((res: Response) => res.json())
        .then((activities) => {
            return {
                props: {
                    activities,
                    ...(query && { query }),
                },
            };
        });
}
