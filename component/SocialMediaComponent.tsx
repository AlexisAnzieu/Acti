import { Box, Icon, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

import { definitions } from "../type/supabase";

const buildMediaButton = (media: string, boxSize?: number) => {
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
            boxSize={boxSize ?? 10}
            as={selectedIcon.icon}
            color={selectedIcon.color}
        />
    );
};

const SocialMediaComponent = ({
    social_media,
    boxSize,
}: Pick<definitions["activity"], "social_media"> & { boxSize?: number }) => {
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
                        {buildMediaButton(media, boxSize)}
                    </ChakraLink>
                ))}
        </Box>
    );
};

export default SocialMediaComponent;
