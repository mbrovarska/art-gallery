import  headerImage from "../assets/desktop/image-hero.jpg"
import text from "../assets/text/text.json"
import { Button } from "@material-tailwind/react"
import arrowRight from "../assets/icon-arrow-right.svg"

const Header = () => {
    return <div className="grid grid-cols-2 lg:grid-cols-3 md:relative">
        <div className="bg-black hidden lg:block lg:text-white">
            <p className="">{text.title}</p>
        </div>
        <div className="col-span-3 md:col-span-1 bg-bg">
            <img className="max-w-48 md:max-w-full block m-auto" src={headerImage} alt="man and woman look at a portrait of the old woman"/>
        </div>
        <div className="col-span-3 md:col-span-1 md:absolute  md:top-24  lg:inset-y-1/2 md:left-[40%] lg:left-[60%] md:w-72 lg:w-80 px-3">
            <p className="lg:hidden text-m font-bold md:font-medium">{text.title}</p> 
            <p className="text-black text-small font-serif font-thin md:font-bold mb-4">{text.subtitle}</p>
            <Button size="lg"
                    color="black"
                    className="group relative flex items-center gap-3  hover:bg-orange overflow-hidden pr-[72px] rounded-none" type="button">
                    {text.headerBtn}
                <span className="absolute right-0 grid h-full w-12 place-items-center bg-orange transition-colors group-hover:bg-black">
                    <img src={arrowRight}/>
                </span>
            </Button>
        </div>
    </div>
  }
  
  export default Header;