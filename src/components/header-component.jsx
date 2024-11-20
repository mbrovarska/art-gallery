import  headerImage from "../assets/desktop/image-hero.jpg"
import text from "../assets/text/text.json"

const Header = () => {
    return <div className="grid grid-cols-3 sm:grid-rows-2">
        <div className="bg-black sm:hidden lg:grid">
            <p className="">{text.title}</p>
        </div>
        <div>
            <img src={headerImage} alt="man and woman look at a portrait of the old woman"/>
        </div>
        <div>
            <p className="text-black sm:text-s">{text.subtitle}</p>
        </div>
    </div>
  }
  
  export default Header;