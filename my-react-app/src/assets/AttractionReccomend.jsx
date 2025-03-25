import "./AttractionReccomend.css"
import React, { useState } from "react";
function AttractionReccomend({destinationValue}){
    const [attractions, setAttractions] = useState([]);
    const [cityName, setCityName] = useState();
    const [coordinates, setCoordinates] = useState();
    const [loadingMessage, setLoadingMessage] = useState("");
    const [placeValue, setPlaceValue] = useState();


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
        
        setLoadingMessage("Loading...");
        await getCityCoordinates(placeValue);
        try{
            const response = await fetch (`https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=circle:${coordinates.lon},${coordinates.lat},20000&limit=20&apiKey=0e0f80a82b4149bc8ac7c96e7cf02aa5`)
            const result =await response.json();
            console.log(result)
            if(result.features ===0){
                setLoadingMessage("Nie znaleziono atrakcji dla tego miejsca")

            }
            else if(result.features!==0){
                setLoadingMessage("")
            }
            setAttractions(result.features);

        }
        catch(error){}


    }
    return(
        <div className="ReccomendationContainer">
            <h1>Sugerowane atrakcje w {placeValue}</h1>
            <input type="text" placeholder="Wprowadź miejsce" onChange={(e)=>setPlaceValue(e.target.value)}/>
            <button id="checkButton"onClick={()=>getAttractions()}>Sprawdź</button>
            <p>{loadingMessage}</p>
            {attractions.map((element, index)=>
                <a href={element.properties.website}><h3 key={index}>{element.properties.name} - {element.properties.street}</h3></a>
            )}


        </div>

    )

}
export default AttractionReccomend