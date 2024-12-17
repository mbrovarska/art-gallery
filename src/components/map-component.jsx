import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet"
import icon from "../assets/icon-location.svg"
import BackButton from "./back-button-component";

const position = [41.48145, -71.31035]

var myIcon = new Icon ({
    iconUrl: icon,
    iconSize: [40, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-25, -40]

}); 

const MapComponent = () => {     
  return (
    <MapContainer center={position} zoom={17} scrollWheelZoom={false} className="w-full h-screen">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/backdrop/{z}/{x}/{y}.png?key=qiFEFeS3iV8I2PSH2IdU"
      />
      <Marker position={position} icon={myIcon}>
                    <Popup>
                    99 King Street, Newport, USA
                   </Popup>
                </Marker>
      <BackButton />
    </MapContainer>
  );
}

export default MapComponent