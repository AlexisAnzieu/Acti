import { Box,Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MapContainer, Marker, Popup,TileLayer } from "react-leaflet";

import CarbonIcon from "../component/CarbonIconComponent";
import PriceIcon from "../component/PriceIconComponent";
import { definitions } from "../type/supabase";
import { Locale } from "./NavbarComponent";

const MONTREAL_LOCATION = { lat: 45.524184, lng: -73.581435 };

const Markers = (props: any) => {
    const router = useRouter();
    return props.activities.map((activity: definitions["activity"]) => (
        <Marker
            key={`marker-${activity.name.en}`}
            position={activity.location as any}
        >
            <Popup>
                <Heading size="lg">
                    {activity.name[router.locale as Locale]}
                </Heading>
                <Text fontSize="sm">
                    {activity.description[router.locale as Locale]}
                    <Flex mt="20px">
                        <Box textAlign="center" w="50%">
                            <PriceIcon price={activity.price} />
                        </Box>

                        <Box textAlign="center" w="50%">
                            <CarbonIcon
                                carbon_footprint={activity.carbon_footprint}
                            />
                        </Box>
                    </Flex>
                </Text>
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
