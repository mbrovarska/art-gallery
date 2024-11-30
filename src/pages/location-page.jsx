import MapComponent from "../components/map-component";
import Footer from "../components/footer-component";

const LocationPage = () => {
    return <div className="flex flex-col min-vh-100 justify-between">
    < MapComponent/>
     <Footer/>
    </div>
  }
  
  export default LocationPage;