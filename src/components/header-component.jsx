import  headerImage from "../assets/desktop/image-hero.jpg"
import text from "../assets/text/text.json"

const Header = () => {
    return <div className="grid grid-cols-2 lg:grid-cols-3">
        <div className="bg-black hidden lg:block">
            <p className="">{text.title}</p>
        </div>
        <div className="col-span-3 md:col-span-1 bg-bg">
            <img className="max-w-48 md:max-w-full block m-auto" src={headerImage} alt="man and woman look at a portrait of the old woman"/>
        </div>
        <div className="col-span-3 md:col-span-1 px-3">
            <p className="lg:hidden text-m font-bold">{text.title}</p>
            <p className="text-black text-small font-serif font-thin">{text.subtitle}</p>
            <button>{text.headerBtn}</button>
        </div>
    </div>
  }
  
  export default Header;