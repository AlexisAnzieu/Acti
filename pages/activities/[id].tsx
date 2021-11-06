import { GetServerSidePropsContext } from "next";
import { definitions } from "../../type/supabase";

export default function Activity(props: any) {
    return <h1>coucou {props.activity?.name}</h1>;
}

type GetServerSideProps = {
    props: {
        activity: definitions["activity"] | null;
    };
};

export async function getServerSideProps(
    context: GetServerSidePropsContext
): Promise<GetServerSideProps> {
    const id: string = context.query.id as string;
    return fetch(`http://localhost:3000/api/activities?id=${id}`)
        .then((res: Response) => res.json())
        .then((activity) => {
            return {
                props: {
                    activity,
                },
            };
        });
}
