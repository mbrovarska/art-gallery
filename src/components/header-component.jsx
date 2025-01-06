import  headerImageL from "../assets/desktop/image-hero.jpg"
import  headerImageXL from "../assets/desktop/image-hero@2x.jpg"
import  headerImageS from "../assets/mobile/image-hero.jpg"
import  headerImageXS from "../assets/mobile/image-hero@2x.jpg"
import  headerImageM from "../assets/tablet/image-hero.jpg"
import  headerImageMM from "../assets/tablet/image-hero@2x.jpg"
import { useMediaQuery } from "react-responsive"
import text from "../assets/text/text.json"
import { Button } from "@material-tailwind/react"
import { useNavigate } from "react-router"
import arrowRight from "../assets/icon-arrow-right.svg"
import { styles } from "../styles/styles"

const Header = () => {
    const navigate = useNavigate();

    const locationPage = () => {
        navigate("/location")
    }

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 760px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return <div className={styles.headerContainer}>
        <div className={styles.headerColOne}>
            <p className={styles.titleText}>{text.title}</p>
        </div>
        <div className={styles.headerColTwo}>
            <img className={styles.headerImg} src={isBigScreen && headerImageXL || isTablet && headerImageMM || isDesktopOrLaptop && headerImageL || isMobile  && headerImageS} alt="man and woman look at a portrait of the old woman"/>
        </div>
        <div className={styles.headerColThree}>
            <p className={styles.secondTitleText}>{text.title}</p> 
            <p className={styles.subtitleText}>{text.subtitle}</p>
            <Button onClick={locationPage}
                    size="lg"
                    color="black"
                    className={[styles.headerBtn, "pr-[72px]"]} type="button">
                    {text.locationText}
                <span className={styles.spanBtn}>
                    <img src={arrowRight} alt="arrow right icon"/>
                </span>
            </Button>
        </div>
    </div>
  }
  
  export default Header;