import { MapContainer, TileLayer,Marker,Popup  } from 'react-leaflet'
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css'
import icon from "../assets/icon-location.svg"
import text from "../assets/text/text.json"
import { Button } from "@material-tailwind/react"
import { useNavigate } from "react-router"
import arrowRight from "../assets/icon-arrow-left.svg"
import { styles } from "../styles/styles"
import "@maptiler/leaflet-maptilersdk"

const MapComponent = () => {
    const position = [41.48145, -71.31035]

    var myIcon = new Icon ({
                iconUrl: icon,
                iconSize: [40, 50],
                iconAnchor: [22, 94],
                popupAnchor: [-25, -40]
            
            });   
            
            const navigate = useNavigate();

            const locationPage = () => {
                navigate("/")
            }

         const Control = () => {
            return (
                <Button onClick={locationPage}
                size="lg"
                color="black"
                className={styles.backBtn} type="button">
                <span className={styles.backSpanBtn}>
                    <img src={arrowRight}/>
                </span>
                {text.back}
            </Button>
  )
         }

return  <div>
         {/* <Button onClick={locationPage}
                    size="lg"
                    color="black"
                    className={[styles.backBtn, "pl-[72px] absolute"]} type="button">
                    <span className={styles.backSpanBtn}>
                        <img src={arrowRight}/>
                    </span>
                    {text.back}
            </Button> */}
            <MapContainer id="map" center={position} zoom={17} scrollWheelZoom={false} className="w-full h-screen">
                <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                url="https://api.maptiler.com/maps/backdrop/{z}/{x}/{y}.png?key=qiFEFeS3iV8I2PSH2IdU"
                />
                <Marker position={position} icon={myIcon}>
                    <Popup>
                    99 King Street, Newport, USA
                    </Popup>
                </Marker>
                <Control position="topright" />
            </MapContainer>
</div>
}

export default MapComponent;