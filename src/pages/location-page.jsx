import MapComponent from "../components/map-component";
import Footer from "../components/footer-component";
import LocationComponent from "../components/location-component";


const LocationPage = () => {
    const bgColor = "#D5966C"
    const black = "#000000"


    return <div className="flex flex-col min-vh-100 justify-between">
        <MapComponent/>
        <LocationComponent/>
        <Footer bgColor={bgColor} textColor={black} iconColor={black} bgColorFooter={bgColor}/>
    </div>
  }
  
  export default LocationPage;