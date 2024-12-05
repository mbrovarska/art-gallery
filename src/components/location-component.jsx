import text from "../assets/text/text.json"

const LocationComponent = () => {
    return <dev className="bg-black text-white grid grid-cols-1 md:grid-cols-2">
        <div>
            <p className="text-orange">{text.locationText}</p>
        </div>
        <div>
            <p>{text.address}</p>
            <p>{text.city}</p>
            <p>{text.postelCode}</p>
            <p>{text.country}</p>
            <p>{text.locationInfo}</p>
        </div>

    </dev>

}

export default LocationComponent