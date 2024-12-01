import MapComponent from "../components/map-component";
import Footer from "../components/footer-component";

const LocationPage = () => {
    const bgColor = "#D5966C"
    const black = "#000000"
    return <div className="flex flex-col min-vh-100 justify-between">
    {/* < MapComponent/> */}
     <Footer bgColor={bgColor} textColor={black} iconColor={black}/>
    </div>
  }
  
  export default LocationPage;