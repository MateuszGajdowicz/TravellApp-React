import {useState} from 'react';
import './NewTravelDisplay.css'
import NewTravelInput from './NewTravelInput.jsx';
function NewTravelDisplay({SendTravelData,setIsFormDisplayed, destinationValue, travelPeriod, accomodation, budget, attractions}){
    const API_KEY = "65742fc4055098afe646d0f550e67fa7";
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    
    const [data, setData] = useState([]);
    async function GetWeather(){
        try{
            const weatherResults=[];
            for(let i =0; i<destinationValue.length; i++){
                const response = await fetch(`${API_URL}?q=${destinationValue[i]}&appid=${API_KEY}&units=metric&lang=pl`);
                const result = await response.json();
                weatherResults.push(result)


            }

            setData(weatherResults);


        }
        catch(error){

        }

    }
    return(
        <div className='TravelDisplayContainer'>
            <button  onClick={()=>{setIsFormDisplayed(false);SendTravelData()}} className='AddTravelButton'>Dodaj podróż</button>
            <h2>Twój cel podróży</h2>
            <ul>
            {destinationValue.map((element, index)=>
                <li key={index}>{element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()}</li>
            )}

            </ul>
            <h2>Termin podróży</h2>
            <h3>{travelPeriod}</h3>
            <h2>Zameldowanie</h2>
            <h3>{accomodation}</h3>
            <h2>Na podróż planujesz przeznaczyć</h2>
            <h3>{budget}</h3>
            <h2>Musisz odwiedzić</h2>
            <ul>
                {attractions.map((element,index)=>
                
                    <li key={index}>{element}</li>
                )}
            </ul>
            <button className=" SomeButton"onClick={()=>GetWeather()}>Sprawdź pogodę</button>
            <div className='WeatherContainer'>
                {data.map((element)=>
                    <div className='Weather'>
                        <h2>{element.name}</h2>
                        <h3>Temperatura : {element.main.temp}°C</h3>
                        <h3>{element.weather[0].description}</h3>


                    </div>)
            }
            </div>




        </div>
    );



}
export default NewTravelDisplay