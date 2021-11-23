import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { definitions } from "../type/supabase";

const MONTREAL_LOCATION = { lat: 45.524184, lng: -73.581435 };

const Markers = (props: any) => {
    return props.activities.map((activity: definitions["activity"]) => (
        <Marker
            key={`marker-${activity.name.en}`}
            position={activity.location as any}
        />
    ));
};

const Map = (props: any) => {
    const isDetailPage = props.activities.length === 1;
    const center = isDetailPage
        ? props.activities[0].location
        : MONTREAL_LOCATION;

    const className = isDetailPage ? "detail-map" : "map";
    return (
        <MapContainer
            className={className}
            center={center}
            zoom={6}
            scrollWheelZoom={true}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Markers activities={props.activities} />
        </MapContainer>
    );
};

export default Map;
