import image1 from "../assets/mobile/image-grid-1@2x.jpg"
import image2 from "../assets/mobile/image-grid-2@2x.jpg"
import image3 from "../assets/mobile/image-grid-3@2x.jpg"
import text from "../assets/text/text.json"

const Gallery = () => {
    return <div className="grid col-span-4 gap-4">
        <div className="">
            <img src={image1} alt="exibition of abstract paintings"/>
        </div>
        <div className="">
            <h2>{text.subtitleContentOne}</h2>
            <p className="text-black">{text.contentTextOne}</p>
        </div>
        <div className="col-span-2 ...">
            <img src={image2} alt="exibition of abstract paintings"/>
        </div>
        <div className="">
            <img src={image3} alt="exibition of abstract paintings"/>   
        </div>
        <div className="">
            <h2>{text.subtitleContentTwo}</h2>
            <p className="text-black">{text.contentTextTwo}</p>
        </div>
    </div>

}

export default Gallery;