import { EmailIcon, ExternalLinkIcon, PhoneIcon } from "@chakra-ui/icons";
import {
    Badge,
    Box,
    Center,
    Flex,
    Icon,
    Link as ChakraLink,
} from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BsArrowLeftSquare } from "react-icons/bs";

import CarbonIconComponent from "../../component/CarbonIconComponent";
import { Locale } from "../../component/NavbarComponent";
import PriceIconComponent from "../../component/PriceIconComponent";
import SocialMediaComponent from "../../component/SocialMediaComponent";
import { definitions } from "../../type/supabase";
import("dayjs/locale/fr");
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type StaticProps = {
    props: {
        activity: definitions["activity"];
    };
};

export default function Activity({ activity }: StaticProps["props"]) {
    dayjs.extend(relativeTime);
    const router = useRouter();
    const locale = router.locale as Locale;
    const { t } = useTranslation("common");
    const MapWithNoSSR = dynamic(() => import("../../component/MapComponent"), {
        ssr: false,
    });

    return (
        <Box>
            <Head>
                <title>Acti - {activity.compagny}</title>
                <meta
                    property="og:title"
                    content={`${activity.name?.[locale]} ${activity.compagny}`}
                    key="ogtitle"
                />
                <meta
                    property="og:description"
                    content={activity.description?.[locale]}
                    key="ogdesc"
                />
                <meta
                    property="og:image"
                    content={activity.picture_url}
                    key="ogpic"
                />
            </Head>
            <Flex className="activity-flex">
                <Box className="activity-description"  p="30px">
                    <Flex>
                        <Box w="9%">
                            <ChakraLink href="/activities">
                                <Icon
                                    cursor="pointer"
                                    fontSize="40px"
                                    as={BsArrowLeftSquare}
                                />
                            </ChakraLink>
                        </Box>
                        <Box
                            pt="7px"
                            w="85%"
                            h="100"
                            textAlign="center"
                            lineHeight="normal"
                            fontSize="30px"
                        >
                            {activity.name?.[locale]}
                            <Box fontSize="20px">
                                {t("by")}{" "}
                                <ChakraLink
                                    href={activity.website}
                                    isExternal
                                    color="teal"
                                >
                                    {activity.compagny}{" "}
                                    <ExternalLinkIcon mx="2px" />
                                </ChakraLink>
                            </Box>
                        </Box>
                    </Flex>

                    <Flex mb="20px">
                        <Center w="100%">
                            {activity.seasons?.map((season: string) => (
                                <Badge
                                    m="1"
                                    variant="solid"
                                    key={season}
                                    borderRadius="full"
                                    px="2"
                                    fontSize="15px"
                                    colorScheme="teal"
                                >
                                    {t(`season.${season}`)}
                                </Badge>
                            ))}
                        </Center>
                    </Flex>

                    <Box
                        pt="7px"
                        w="100%"
                        textAlign="center"
                        lineHeight="normal"
                        fontSize="20px"
                    >
                        {activity.description?.[locale]}
                    </Box>

                    {activity.review?.[locale] && (
                        <Box mt="8">
                            <Center>
                                <Badge variant="solid" colorScheme="teal">
                                    Notre expérience rédigée{" "}
                                    {dayjs(activity.created_at)
                                        .locale(locale)
                                        .fromNow()}
                                </Badge>
                            </Center>
                            {activity.review[locale]}
                        </Box>
                    )}
                    <Flex m="30px">
                        <Center w="50%">
                            <PriceIconComponent price={activity.price} />
                        </Center>

                        <Center w="50%">
                            <CarbonIconComponent
                                carbon_footprint={activity.carbon_footprint}
                            />
                        </Center>
                    </Flex>

                    <Box
                        fontSize="20px"
                        w="100%"
                        textAlign="center"
                        lineHeight="normal"
                        pt="20px"
                    >
                        {activity.email && (
                            <Box>
                                <ChakraLink
                                    href={"mailto:" + activity.email}
                                    isExternal
                                    color="teal"
                                >
                                    <EmailIcon mr="4px" />
                                    <br />
                                    {activity.email}
                                </ChakraLink>
                                <br />
                                <br />
                            </Box>
                        )}

                        {activity.phone && (
                            <Box>
                                <ChakraLink
                                    href={"tel:" + activity.phone}
                                    color="teal"
                                >
                                    <PhoneIcon mr="4px" />
                                    <br />
                                    {activity.phone}
                                </ChakraLink>
                                <br />
                                <br />
                            </Box>
                        )}
                        {activity.address}
                        <br />
                        {activity.postal_code}
                        <br />
                        {activity.city}
                    </Box>

                    <Box w="100%" textAlign="center">
                        <SocialMediaComponent
                            social_media={activity.social_media}
                        ></SocialMediaComponent>
                    </Box>
                </Box>
                <Box width="100%">
                    <MapWithNoSSR activities={[activity]} />
                </Box>
            </Flex>
        </Box>
    );
}

export async function getStaticPaths() {
    const res: any = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/activities?fields=slug&carbon_footprint=0`
    );
    const activities = await res.json();
    const paths = ["en", "fr"].flatMap((locale: string) =>
        activities.map((activity: definitions["activity"]) => ({
            params: { id: activity.slug },
            locale,
        }))
    );

    return { paths, fallback: false };
}

export async function getStaticProps({
    params,
    locale,
}: GetStaticPropsContext) {
    const res: any = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/activities?slug=${params?.id}`
    );
    return {
        props: {
            ...(await serverSideTranslations(locale as Locale, ["common"])),
            activity: await res.json(),
        },
        revalidate: 10,
    };
}
