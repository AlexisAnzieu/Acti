import { definitions } from "../type/supabase";
import { Icon, Box, Link as ChakraLink } from "@chakra-ui/react";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import Link from "next/link";

const buildMediaButton = (media: string) => {
    const icons = {
        facebook: {
            icon: BsFacebook,
            color: "blue.500",
        },
        youtube: {
            icon: BsYoutube,
            color: "red.500",
        },
        instagram: {
            icon: BsInstagram,
            color: "#8a3ab9",
        },
    };
    const selectedIcon = (icons as any)[media];
    return (
        <Icon
            m={4}
            cursor="pointer"
            boxSize={10}
            as={selectedIcon.icon}
            color={selectedIcon.color}
        />
    );
};

const SocialMedia = ({
    social_media,
}: Pick<definitions["activity"], "social_media">) => {
    return (
        <Box>
            {Object.entries(social_media)
                .filter(([_, url]) => url)
                .map(([media, url]) => (
                    <ChakraLink
                        key={`${media}-socialLink`}
                        as={Link}
                        href={url}
                    >
                        {buildMediaButton(media)}
                    </ChakraLink>
                ))}
        </Box>
    );
};

export default SocialMedia;
