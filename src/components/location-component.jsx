import text from "../assets/text/text.json"

const LocationComponent = () => {
    return <div className="bg-black text-white grid grid-cols-1 px-8 py-4  md:grid-cols-2 ">
            <p className="text-m font-bold">{text.locationText}</p>
            <div className="text-small font-serif font-thin py-4">
                <p className="text-orange font-sans font-bold text-s pb-2">{text.address}</p>
                <p className="">{text.city}</p>
                <p>{text.postelCode}</p>
                <p>{text.country}</p>
                <p className="pt-6">{text.locationInfo}</p>
            </div>

    </div>

}

export default LocationComponent