import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import L from "leaflet";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

import CarbonIconComponent from "../component/CarbonIconComponent";
import PriceIconComponent from "../component/PriceIconComponent";
import type { definitions } from "../type/supabase";
import type { Locale } from "./NavbarComponent";
import SocialMediaComponent from "./SocialMediaComponent";

const MONTREAL_LOCATION = { lat: 45.524184, lng: -73.581435 };

export type MapBounds = {
  north: number;
  south: number;
  east: number;
  west: number;
};

type MapProps = {
  activities: definitions["activity"][];
  locale: Locale;
};

type MapEventsHandlerProps = {
  onBoundsChange?: (bounds: MapBounds) => void;
};

const MapEventsHandler = ({ onBoundsChange }: MapEventsHandlerProps) => {
  const map = useMapEvents({
    moveend: () => {
      if (onBoundsChange) {
        const bounds = map.getBounds();
        onBoundsChange({
          north: bounds.getNorth(),
          south: bounds.getSouth(),
          east: bounds.getEast(),
          west: bounds.getWest(),
        });
      }
    },
    zoomend: () => {
      if (onBoundsChange) {
        const bounds = map.getBounds();
        onBoundsChange({
          north: bounds.getNorth(),
          south: bounds.getSouth(),
          east: bounds.getEast(),
          west: bounds.getWest(),
        });
      }
    },
  });
  return null;
};

const FitBounds = ({
  activities,
}: {
  activities: definitions["activity"][];
}) => {
  const map = useMap();

  useEffect(() => {
    const validLocations = activities
      .filter((a) => a.location)
      .map((a) => a.location as unknown as { lat: number; lng: number });

    if (validLocations.length > 1) {
      const bounds = L.latLngBounds(
        validLocations.map((loc) => [loc.lat, loc.lng]),
      );
      map.fitBounds(bounds, { padding: [40, 40] });
    } else if (validLocations.length === 1) {
      map.setView([validLocations[0].lat, validLocations[0].lng], 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activities]);

  return null;
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
            <Box textAlign="center" lineHeight="normal" fontSize="20px">
              {activity.name?.[locale]}
              <Box fontSize="15px">
                {t("by")}{" "}
                <ChakraLink href={activity.website} isExternal color="teal">
                  {activity.compagny} <ExternalLinkIcon mx="2px" />
                </ChakraLink>
              </Box>
            </Box>
            <Box mt="10px" fontSize="sm">
              {activity.description?.[locale]}
              <Flex mt="20px">
                <Box textAlign="center" w="50%">
                  <PriceIconComponent price={activity.price} fontSize="20px" />
                </Box>
                <Box textAlign="center" w="50%">
                  <CarbonIconComponent
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
                  <ChakraLink href={"tel:" + activity.phone} color="teal">
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
              />
            </Box>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

type MapComponentProps = {
  activities: definitions["activity"][];
  onBoundsChange?: (bounds: MapBounds) => void;
  className?: string;
  id?: string;
};

const MapComponent = (props: MapComponentProps) => {
  const router = useRouter();
  const isMapPage = router.pathname === "/map";
  const isSplitView = props.className === "split-map";
  const centerLocation =
    !isMapPage && !isSplitView && props.activities.length > 0
      ? props.activities[0].location || MONTREAL_LOCATION
      : MONTREAL_LOCATION;

  const resolvedClassName =
    props.className || (!isMapPage ? "detail-map" : "map");
  const zoom = !isMapPage && !isSplitView ? 10 : 7;

  return (
    <MapContainer
      className={resolvedClassName}
      center={centerLocation as [number, number]}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Markers activities={props.activities} locale={router.locale as Locale} />
      {props.onBoundsChange && (
        <MapEventsHandler onBoundsChange={props.onBoundsChange} />
      )}
      {isSplitView && <FitBounds activities={props.activities} />}
    </MapContainer>
  );
};

export default MapComponent;
