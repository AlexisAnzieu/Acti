import { Box, Icon, Flex, Badge } from "@chakra-ui/react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { definitions } from "../../type/supabase";
import { GetServerSidePropsContext } from "next";
import { Locale } from "../../component/Navbar";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import { seasonsColor } from "..";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PriceIcon from "../../component/PriceIcon";
import CarbonIcon from "../../component/CarbonIcon";
import SocialMedia from "../../component/SocialMedia";

type GetServerSideProps = {
    props: {
        activity: definitions["activity"];
    };
};

export default function Activity({ activity }: GetServerSideProps["props"]) {
    const router = useRouter();
    const locale = router.locale as Locale;
    const { t } = useTranslation("common");

    const MapWithNoSSR = dynamic(() => import("../../component/Map"), {
        ssr: false,
    });

    return (
        <Box>
            <Head>
                <title>Acti - {activity.name[locale]}</title>
            </Head>
            <Flex>
                <Box width="50%" p="2%">
                    <Flex>
                        <Box w="10%">
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
                        </Box>
                    </Flex>

                    <Flex mb="20px">
                        <Box textAlign="center" w="30%">
                            {(activity.seasons as string[]).map((s: string) => (
                                <Badge
                                    mr="1"
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

                    <Box w="100%" textAlign="center">
                        <SocialMedia
                            social_media={activity.social_media}
                        ></SocialMedia>
                    </Box>
                </Box>
                <Box width="50%">
                    {" "}
                    <MapWithNoSSR location={activity.location} />
                </Box>
            </Flex>

            <Box p="2% 5% 0 5%"></Box>
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
