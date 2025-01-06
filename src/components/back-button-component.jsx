import "leaflet/dist/leaflet.css";
import { Button } from "@material-tailwind/react"
import { styles } from "../styles/styles"
import text from "../assets/text/text.json"
import arrowRight from "../assets/icon-arrow-left.svg"
import { useNavigate } from "react-router"
import Control from 'react-leaflet-custom-control'


const BackButton = () => {
    const navigate = useNavigate(); 

    const locationPage = () => {
        navigate("/")
    }

 return   <Control prepend position='topleft'>
        <Button 
            onClick={locationPage}
            size="lg"
            color="black"                                 
            className={styles.backBtn} type="button">
            <span className={styles.backSpanBtn}>
            <img src={arrowRight} alt="arrow right icon"/>
            </span>
                {text.back}
    </Button>
  </Control>
}

export default BackButton