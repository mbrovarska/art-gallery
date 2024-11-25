import image1 from "../assets/mobile/image-grid-1@2x.jpg"
import image2 from "../assets/mobile/image-grid-2@2x.jpg"
import image3 from "../assets/mobile/image-grid-3@2x.jpg"
import text from "../assets/text/text.json"

const Gallery = () => {
    return <div className="flex flex-col items-center mt-20 mx-2 md:grid md:grid-cols-6 md:relative">
        <div className="w-[90%] md:col-start-3 md:col-end-7 md:order-2 md:w-[95%]">
            <img src={image1} alt="exibition of abstract paintings"/>
        </div>
        <div className="w-[90%] my-3 md:col-start-1 md:col-end-3 md:order-1">
            <h2 className="text-s font-bold">{text.subtitleContentOne}</h2>
            <p className="text-small font-serif font-thin">{text.contentTextOne}</p>
        </div>
        <div className="w-[90%] my-3 md:col-start-1 md:col-end-4 md:w-full md:order-3">
            <img src={image2} alt="exibition of abstract paintings"/>
        </div>
        <div className="w-[90%] my-3 md:col-start-4 md:col-end-7 md:w-[95%] md:ml-2 md:mr-2 md:order-4 md:place-self-start">
            <img src={image3} alt="exibition of abstract paintings"/>   
        </div>
        <div className="w-[90%] bg-black p-2 md:w-[95%] md:col-start-4 md:col-end-7 md:ml-2 md:mr-2 md:order-4 md:absolute md:top-[68%] md:h-[30.8%]">
            <h2 className="text-s text-white font-bold">{text.subtitleContentTwo}</h2>
            <p className="text-small text-white font-serif font-thin">{text.contentTextTwo}</p>
        </div>
    </div>

}

export default Gallery;