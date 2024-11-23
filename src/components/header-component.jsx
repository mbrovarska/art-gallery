import  headerImage from "../assets/desktop/image-hero.jpg"
import text from "../assets/text/text.json"
import { Button } from "@material-tailwind/react"
import arrowRight from "../assets/icon-arrow-right.svg"
import { styles } from "../styles/styles"

const Header = () => {
    return <div className={styles.headerContainer}>
        <div className={styles.headerColOne}>
            <p className={styles.titleText}>{text.title}</p>
        </div>
        <div className={styles.headerColTwo}>
            <img className={styles.headerImg} src={headerImage} alt="man and woman look at a portrait of the old woman"/>
        </div>
        <div className={styles.headerColThree}>
            <p className={styles.secondTitleText}>{text.title}</p> 
            <p className={styles.subtitleText}>{text.subtitle}</p>
            <Button size="lg"
                    color="black"
                    className={styles.headerBtn} type="button">
                    {text.headerBtn}
                <span className={styles.spanBtn}>
                    <img src={arrowRight}/>
                </span>
            </Button>
        </div>
    </div>
  }
  
  export default Header;