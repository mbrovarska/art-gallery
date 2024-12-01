import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css'
import icon from "../assets/icon-location.svg"

const MapComponent = () => {
    const position = [41.48145, -71.31035]

    var myIcon = new Icon ({
                iconUrl: icon,
                iconSize: [40, 50],
                iconAnchor: [22, 94],
                popupAnchor: [-25, -40]
            
            });     

return  <div className="">
            <MapContainer id="map" center={position} zoom={23} scrollWheelZoom={false} className="w-full h-screen ">
                <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position} icon={myIcon}>
                    <Popup>
                    99 King Street, Newport, USA
                    </Popup>
                </Marker>
            </MapContainer>
</div>
}

export default MapComponent;