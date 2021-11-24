import { EmailIcon, ExternalLinkIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import CarbonIcon from "../component/CarbonIconComponent";
import PriceIcon from "../component/PriceIconComponent";
import { definitions } from "../type/supabase";
import { Locale } from "./NavbarComponent";
import SocialMedia from "./SocialMediaComponent";

const MONTREAL_LOCATION = { lat: 45.524184, lng: -73.581435 };

const Markers = (props: any) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    return props.activities.map((activity: definitions["activity"]) => (
        <Marker
            key={`marker-${activity.name.en}`}
            position={activity.location as any}
        >
            <Popup>
                <Box textAlign="center" lineHeight="normal" fontSize="20px">
                    {activity.name[router.locale as Locale]}
                    <Box fontSize="15px">
                        {t("by")}{" "}
                        <ChakraLink
                            href={activity.website}
                            isExternal
                            color="teal"
                        >
                            {activity.compagny} <ExternalLinkIcon mx="2px" />
                        </ChakraLink>
                    </Box>
                </Box>
                <Box mt="10px" fontSize="sm">
                    {activity.description[router.locale as Locale]}
                    <Flex mt="20px">
                        <Box textAlign="center" w="50%">
                            <PriceIcon price={activity.price} fontSize="20px" />
                        </Box>

                        <Box textAlign="center" w="50%">
                            <CarbonIcon
                                carbon_footprint={activity.carbon_footprint}
                                fontSize="20px"
                            />
                        </Box>
                    </Flex>
                </Box>
                <Box
                    fontSize="15px"
                    w="100%"
                    textAlign="center"
                    lineHeight="normal"
                    pt="15px"
                >
                    {activity.email && (
                        <Box>
                            <ChakraLink
                                href={"mailto:" + activity.email}
                                isExternal
                                color="teal"
                            >
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
                    <SocialMedia
                        social_media={activity.social_media}
                        boxSize={7}
                    ></SocialMedia>
                </Box>
            </Popup>
        </Marker>
    ));
};

const Map = (props: any) => {
    const isDetailPage = props.activities.length === 1;
    const centerLocation = isDetailPage
        ? props.activities[0].location
        : MONTREAL_LOCATION;

    const className = isDetailPage ? "detail-map" : "map";
    return (
        <MapContainer
            className={className}
            center={centerLocation}
            zoom={6}
            scrollWheelZoom={true}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Markers activities={props.activities} />
        </MapContainer>
    );
};

export default Map;
