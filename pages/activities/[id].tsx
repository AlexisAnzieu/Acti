import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex, Icon,Link as ChakraLink } from "@chakra-ui/react";
import _ from "lodash";
import { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BsArrowLeftSquare } from "react-icons/bs";

import CarbonIcon from "../../component/CarbonIconComponent";
import { Locale } from "../../component/NavbarComponent";
import PriceIcon from "../../component/PriceIconComponent";
import SocialMedia from "../../component/SocialMediaComponent";
import { definitions } from "../../type/supabase";
import { seasonsColor } from "..";

type GetServerSideProps = {
    props: {
        activity: definitions["activity"];
    };
};

export default function Activity({ activity }: GetServerSideProps["props"]) {
    const router = useRouter();
    const locale = router.locale as Locale;
    const { t } = useTranslation("common");
    const MapWithNoSSR = dynamic(() => import("../../component/MapComponent"), {
        ssr: false,
    });

    return (
        <Box>
            <Head>
                <title>Acti - {activity.name[locale]}</title>
            </Head>
            <Flex className="activity-flex">
                <Box width="100%" p="2%">
                    <Flex>
                        <Box w="9%">
                            {" "}
                            <Icon
                                cursor="pointer"
                                onClick={() => router.back()}
                                fontSize="40px"
                                as={BsArrowLeftSquare}
                            />
                        </Box>
                        <Box
                            pt="7px"
                            w="85%"
                            h="100"
                            textAlign="center"
                            lineHeight="normal"
                            fontSize="30px"
                        >
                            {activity.name[locale]}
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
                        <Box textAlign="center" w="30%">
                            {(activity.seasons as string[]).map((s: string) => (
                                <Badge
                                    m="1"
                                    variant="solid"
                                    key={s}
                                    borderRadius="full"
                                    px="2"
                                    fontSize="20px"
                                    colorScheme={seasonsColor[s]}
                                >
                                    {t(`season.${s}`)}
                                </Badge>
                            ))}
                        </Box>
                        <Box textAlign="center" w="30%">
                            <PriceIcon price={activity.price} />
                        </Box>

                        <Box textAlign="center" w="30%">
                            <CarbonIcon
                                carbon_footprint={activity.carbon_footprint}
                            />
                        </Box>
                    </Flex>

                    <Box
                        pt="7px"
                        w="100%"
                        textAlign="center"
                        lineHeight="normal"
                        fontSize="20px"
                    >
                        {activity.description[locale]}
                    </Box>

                    <Box
                        fontSize="20px"
                        w="100%"
                        textAlign="center"
                        lineHeight="normal"
                        pt="40px"
                    >
                        {activity.email && (
                            <Box>
                                <ChakraLink
                                    href={"mailto:" + activity.email}
                                    isExternal
                                    color="teal"
                                >
                                    {activity.email}
                                    <ExternalLinkIcon mx="2px" />
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
                        <SocialMedia
                            social_media={activity.social_media}
                        ></SocialMedia>
                    </Box>
                </Box>
                <Box width="100%">
                    <MapWithNoSSR activities={[activity]} />
                </Box>
            </Flex>
        </Box>
    );
}

export async function getServerSideProps(
    context: GetServerSidePropsContext
): Promise<GetServerSideProps> {
    const id: string = context.query.id as string;
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/activities?id=${id}`)
        .then((res: Response) => res.json())
        .then(async (activity) => {
            return {
                props: {
                    ...(await serverSideTranslations(context.locale as Locale, [
                        "common",
                    ])),
                    activity,
                },
            };
        });
}
