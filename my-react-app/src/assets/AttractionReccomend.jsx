import "./AttractionReccomend.css"
import React, { useState } from "react";
function AttractionReccomend({destinationValue}){
    const [attractions, setAttractions] = useState([]);
    const [cityName, setCityName] = useState();
    const [coordinates, setCoordinates] = useState();


    async function getCityCoordinates(cityName){
        try{
            const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${cityName}&format=json`)
            const result = await response.json();
            console.log(result)
            setCoordinates({
                lat: result[0].lat,
                lon: result[0].lon,
            })
            

        }
        catch(error){}


    }
    async function getAttractions(){
        getCityCoordinates(destinationValue[0]);
        try{
            const response = await fetch (`https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=circle:${coordinates.lon},${coordinates.lat},20000&limit=20&apiKey=0e0f80a82b4149bc8ac7c96e7cf02aa5`)
            const result =await response.json();
            console.log(result)
            setAttractions(result.features);

        }
        catch(error){}


    }
    return(
        <div className="ReccomendationContainer">
            <h1>Sugerowane atrakcje w {destinationValue[0]}</h1>
            <button id="checkButton"onClick={()=>getAttractions()}>Sprawdź</button>
            {attractions.map((element, index)=>
                <a href={element.properties.website}><h3 key={index}>{element.properties.name} - {element.properties.street}</h3></a>
            )}


        </div>

    )

}
export default AttractionReccomend