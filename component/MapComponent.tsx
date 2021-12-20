import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import CarbonIconComponent from "../component/CarbonIconComponent";
import PriceIconComponent from "../component/PriceIconComponent";
import { definitions } from "../type/supabase";
import { Locale } from "./NavbarComponent";
import SocialMediaComponent from "./SocialMediaComponent";

const MONTREAL_LOCATION = { lat: 45.524184, lng: -73.581435 };

type MapProps = {
    activities: definitions["activity"][];
    locale: Locale;
};

const Markers = ({ activities, locale }: MapProps) => {
    const { t } = useTranslation("common");
    return (
        <>
            {activities.map((activity: definitions["activity"]) => (
                <Marker
                    key={`marker-${activity.name?.en}`}
                    position={(activity.location as any) || MONTREAL_LOCATION}
                >
                    <Popup>
                        <Box
                            textAlign="center"
                            lineHeight="normal"
                            fontSize="20px"
                        >
                            {activity.name?.[locale]}
                            <Box fontSize="15px">
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
                        <Box mt="10px" fontSize="sm">
                            {activity.description?.[locale]}
                            <Flex mt="20px">
                                <Box textAlign="center" w="50%">
                                    <PriceIconComponent
                                        price={activity.price}
                                        fontSize="20px"
                                    />
                                </Box>

                                <Box textAlign="center" w="50%">
                                    <CarbonIconComponent
                                        carbon_footprint={
                                            activity.carbon_footprint
                                        }
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
                            <SocialMediaComponent
                                social_media={activity.social_media}
                                boxSize={7}
                            ></SocialMediaComponent>
                        </Box>
                    </Popup>
                </Marker>
            ))}
        </>
    );
};

const MapComponent = (props: any) => {
    const router = useRouter();
    const isMapPage = router.pathname === "/map";
    const centerLocation = !isMapPage
        ? props.activities[0].location || MONTREAL_LOCATION
        : MONTREAL_LOCATION;

    const className = !isMapPage ? "detail-map" : "map";
    return (
        <MapContainer
            className={className}
            center={centerLocation}
            zoom={!isMapPage ? 10 : 7}
            scrollWheelZoom={true}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Markers
                activities={props.activities}
                locale={router.locale as Locale}
            />
        </MapContainer>
    );
};

export default MapComponent;
