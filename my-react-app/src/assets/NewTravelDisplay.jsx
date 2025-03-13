import './NewTravelDisplay.css'
import NewTravelInput from './NewTravelInput.jsx';
function NewTravelDisplay({SendTravelData,setIsFormDisplayed, destinationValue, travelPeriod, accomodation, budget, attractions}){
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


        </div>
    );



}
export default NewTravelDisplay