import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useMediaQuery } from "react-responsive";

const Map = (props: any) => {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

    return (
        <MapContainer
            center={props.location}
            zoom={8}
            scrollWheelZoom={!isTabletOrMobile}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={props.location}></Marker>
        </MapContainer>
    );
};

export default Map;
