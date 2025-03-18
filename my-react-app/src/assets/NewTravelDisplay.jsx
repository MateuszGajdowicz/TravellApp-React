import {useState} from 'react';
import './NewTravelDisplay.css'
import NewTravelInput from './NewTravelInput.jsx';
function NewTravelDisplay({InputValue,SendTravelData,setIsFormDisplayed, destinationValue, travelPeriod, accomodation, budget, attractions}){
    const API_KEY = "65742fc4055098afe646d0f550e67fa7";
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    
    const [data, setData] = useState();
    async function GetWeather(city){
        try{
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=pl`);
            const result = await response.json();
            setData(result);
            console.log(result);
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
            <button onClick={()=>GetWeather(InputValue)}>Sprawdź pogodę</button>
            {data &&
            <div className='WeatherContainer'>
                <div className="Weather">
                    <h3>{data.name}</h3>
                    <h3>Temperatura:{data.main.temp} C</h3>
                    <h3>{data.weather.description}</h3>

                </div>

                

            </div>}


        </div>
    );



}
export default NewTravelDisplay