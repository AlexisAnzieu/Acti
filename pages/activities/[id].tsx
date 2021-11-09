import { GetServerSidePropsContext } from "next";
import { definitions } from "../../type/supabase";
import { Box, Icon } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { BsArrowLeftSquare } from "react-icons/bs";
import { useRouter } from "next/router";

type GetServerSideProps = {
    props: {
        activity: definitions["activity"];
    };
};

export default function Activity(props: GetServerSideProps["props"]) {
    const router = useRouter();

    const MapWithNoSSR = dynamic(() => import("../../component/Map"), {
        ssr: false,
    });

    return (
        <Box>
            <MapWithNoSSR location={props.activity.location} />
            <Box p="2% 20% 0 5%">
                {" "}
                <Icon
                    onClick={() => router.back()}
                    fontSize="40px"
                    as={BsArrowLeftSquare}
                />
                <Box textAlign="center">
                    {" "}
                    <Box fontSize="30px">{props.activity.name}</Box>{" "}
                </Box>
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
