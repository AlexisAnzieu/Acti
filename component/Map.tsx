import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = (props: any) => {
    return (
        <MapContainer center={props.location} zoom={8} scrollWheelZoom={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={props.location}></Marker>
        </MapContainer>
    );
};

export default Map;
