import './NewTravelDisplay.css'
import NewTravelInput from './NewTravelInput.jsx';
function NewTravelDisplay({destinationValue}){
    return(
        <div className='TravelDisplayContainer'>
            <h1>Twój cel podróży</h1>
            <ul>
            {destinationValue.map((element)=>
                <li>{element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()}</li>
            )}

            </ul>


        </div>
    );



}
export default NewTravelDisplay