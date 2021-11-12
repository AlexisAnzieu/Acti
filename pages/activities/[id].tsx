import { Box, Icon, Flex } from "@chakra-ui/react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { definitions } from "../../type/supabase";
import { GetServerSidePropsContext } from "next";
import { Locale } from "../../component/Navbar";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";

type GetServerSideProps = {
    props: {
        activity: definitions["activity"];
    };
};

export default function Activity(props: GetServerSideProps["props"]) {
    const router = useRouter();
    const locale = router.locale as Locale;

    const MapWithNoSSR = dynamic(() => import("../../component/Map"), {
        ssr: false,
    });

    return (
        <Box>
            <Head>
                <title>Acti - {props.activity.name[locale]}</title>
            </Head>
            <MapWithNoSSR location={props.activity.location} />
            <Box p="2% 5% 0 5%">
                <Flex>
                    <Box w="15%">
                        {" "}
                        <Icon
                            cursor="pointer"
                            onClick={() => router.back()}
                            fontSize="40px"
                            as={BsArrowLeftSquare}
                        />
                    </Box>

                    <Box w="85%">
                        <Flex>
                            {" "}
                            <Box
                                pt="7px"
                                w="100%"
                                h="100"
                                textAlign="right"
                                lineHeight="normal"
                                fontSize="30px"
                            >
                                {props.activity.name[locale]}
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

export async function getServerSideProps(
    context: GetServerSidePropsContext
): Promise<GetServerSideProps> {
    const id: string = context.query.id as string;
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/activities?id=${id}`)
        .then((res: Response) => res.json())
        .then((activity) => {
            return {
                props: {
                    activity,
                },
            };
        });
}
