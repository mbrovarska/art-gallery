import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
// import "leaflet-defaulticon-compatibility";

const MapComponent = () => {
    const position = [51.505, -0.09]

return <div className="">
<MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full, h-screen bg-orange">
<TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={position}>
  <Popup>
    A pretty CSS3 popup. <br /> Easily customizable.
  </Popup>
</Marker>
</MapContainer>
</div>
}

export default MapComponent;