import "leaflet-fullscreen";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";

import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import L from "leaflet";
import NextLink from "next/link";
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

import type { definitions } from "../type/supabase";
import { CarbonLabel, PriceLabel } from "./ActivityCard";
import type { Locale } from "./NavbarComponent";
import { type Season, isSeason, SEASON_COLORS, SEASONS } from "./seasons";

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

const UrlSync = () => {
  const router = useRouter();
  const map = useMapEvents({
    moveend: () => sync(),
    zoomend: () => sync(),
  });

  const sync = () => {
    const center = map.getCenter();
    const zoom = map.getZoom();
    router.replace(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          lat: center.lat.toFixed(5),
          lng: center.lng.toFixed(5),
          zoom,
        },
      },
      undefined,
      { shallow: true },
    );
  };

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

const markerIcon = (season: Season) =>
  L.divIcon({
    className: "acti-marker",
    html: `<span style="background:${SEASON_COLORS[season].bg}"></span>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -14],
  });

const MARKER_ICONS = SEASONS.reduce(
  (icons, season) => ({ ...icons, [season]: markerIcon(season) }),
  {} as Record<Season, L.DivIcon>,
);

// Colour each pin with the season being filtered, or the activity's first season.
const markerSeason = (
  activity: definitions["activity"],
  preferred?: Season,
): Season => {
  if (preferred && activity.seasons?.includes(preferred)) return preferred;
  return activity.seasons?.find(isSeason) ?? "winter";
};

const Markers = ({ activities, locale, season }: MapProps & { season?: Season }) => {
  const { t } = useTranslation("common");
  return (
    <>
      {activities.map((activity: definitions["activity"]) => (
        <Marker
          key={`marker-${activity.id ?? activity.slug}`}
          position={(activity.location as any) || MONTREAL_LOCATION}
          icon={MARKER_ICONS[markerSeason(activity, season)]}
          title={activity.name?.[locale]}
        >
          <Popup>
            <Flex direction="column" gap={2} minW="220px" maxW="260px" color="ink">
              <Box
                fontFamily="heading"
                fontWeight={800}
                fontSize="19px"
                lineHeight={1.15}
                letterSpacing="-0.02em"
              >
                {activity.name?.[locale]}
              </Box>
              <Box fontSize="13px" color="muted">
                {[activity.compagny, activity.city].filter(Boolean).join(" · ")}
              </Box>
              <Flex wrap="wrap" gap="6px 14px" fontSize="13px" fontWeight={600}>
                <PriceLabel price={activity.price} />
                <CarbonLabel carbon={activity.carbon_footprint} />
              </Flex>
              <ChakraLink
                as={NextLink}
                href={`/activities/${activity.slug}`}
                alignSelf="flex-start"
                mt={1}
                fontWeight={700}
                fontSize="14px"
                color="ink"
                textDecoration="underline"
                textUnderlineOffset="3px"
              >
                {t("activityPage.seeDetails")}
              </ChakraLink>
            </Flex>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

const FullscreenControl = () => {
  const map = useMap();
  useEffect(() => {
    (L.control as any).fullscreen({ position: "topleft" }).addTo(map);
    return () => {
      const container = map.getContainer();
      const btn = container.querySelector(".leaflet-control-fullscreen");
      if (btn) btn.remove();
    };
  }, [map]);
  return null;
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

  const syncable = isMapPage || isSplitView;

  // Wait for router.query to be populated before mounting the map (query is empty on first render)
  if (syncable && !router.isReady) return null;

  const urlLat =
    syncable && router.query.lat
      ? parseFloat(router.query.lat as string)
      : null;
  const urlLng =
    syncable && router.query.lng
      ? parseFloat(router.query.lng as string)
      : null;
  const urlZoom =
    syncable && router.query.zoom
      ? parseInt(router.query.zoom as string)
      : null;

  const centerLocation =
    urlLat != null && urlLng != null
      ? { lat: urlLat, lng: urlLng }
      : !isMapPage && !isSplitView && props.activities.length > 0
        ? props.activities[0].location || MONTREAL_LOCATION
        : MONTREAL_LOCATION;

  const resolvedClassName =
    props.className || (!isMapPage ? "detail-map" : "map");
  const zoom = urlZoom ?? (!isMapPage && !isSplitView ? 10 : 7);

  return (
    <MapContainer
      className={resolvedClassName}
      center={centerLocation as unknown as [number, number]}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FullscreenControl />
      <Markers
        activities={props.activities}
        locale={router.locale as Locale}
        season={isSeason(router.query.season) ? router.query.season : undefined}
      />
      {props.onBoundsChange && (
        <MapEventsHandler onBoundsChange={props.onBoundsChange} />
      )}
      {isSplitView && !urlLat && <FitBounds activities={props.activities} />}
      {syncable && <UrlSync />}
    </MapContainer>
  );
};

export default MapComponent;
