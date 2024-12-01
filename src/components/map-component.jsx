import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from "../assets/icon-location.svg"

const MapComponent = () => {
    useEffect(() => {

    const position = [41.48145, -71.31035]

    var myIcon = L.icon({
        iconUrl: icon,
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: 'my-icon-shadow.png',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });
    
    var map = L.map('map', {
        center: position,
        zoom: 13
    });
    L.marker(position).addTo(map);
}, [])

return  <div className="">
<div id="map" className="">

{/* <MapContainer id="map" center={position} zoom={13} scrollWheelZoom={false} className="w-full, h-screen bg-orange">
<TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={position}>
  <Popup>
    A pretty CSS3 popup. <br /> Easily customizable.
  </Popup>
</Marker>
</MapContainer> */}
</div>
</div>
}

export default MapComponent;