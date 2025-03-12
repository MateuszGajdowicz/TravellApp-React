import { useState } from 'react';
import './NewTravelInput.css'
import NewTravelDisplay from './NewTravelDisplay.jsx';
function NewTravelInput(){

    const [places, setPlaces] = useState([1])
    function handleAddPlace(){
        setPlaces(prev => [...prev, prev[prev.length - 1] + 1]);
    }

    const [atrakcje, setAtrakcje] = useState([1]);
    function handleAtrakcjeadd(){
        setAtrakcje(prev=>[...prev, prev[prev.length-1]+1]);
    }
    const [destinationValue, setDestinationvalue] =  useState([])
    function getTravelInfo(){
        setDestinationvalue([]);
        places.forEach((element, index)=>
        {   
            let DestinationValue = document.getElementById(`destinationInput${index}`).value;
            if(DestinationValue!==""){
                setDestinationvalue(prev=>[...prev,DestinationValue]);
                document.getElementById(`destinationInput${index}`).value="";

            }


        })
        console.log(destinationValue);

    }

    return(
        <div className='NewTravelContainer'>
            <form action="">
            <h1>Gdzie chciałbyś pojechać?  </h1>
            <h3>Cel podróży</h3>

            {places.map((element, index)=>
                <div key={index} className='InputTrip' >
                    <h3 >{element}</h3>
                    <input id ={`destinationInput${index}`} type="text" placeholder='Miejsce, które chciałbyś odwiedzić' />
                
                </div>

                )}

                <button type='button' onClick={handleAddPlace}>Dodaj miejsce</button>
                <h3>Termin podróży</h3>
                <div className='dates'>
                    <h4>Od</h4>
                    <input type="date" />
                    <h4>Do</h4>
                    <input type="date" />
                </div>
                <h3>Zameldowanie</h3>
                <input type="text" placeholder='Miejsce zameldowania  np. Hotel, Aparatament'/>
                <h3>Budżet</h3>
                <input type="text" placeholder='Ile przeznaczysz na wyjazd' />
                <h3>Atrakcje</h3>
                {atrakcje.map((element,index)=>
                <div key={index} className='InputTrip'>
                    <h3>{element}</h3>
                    <input type="text" placeholder='Co chciałbyś zobaczyć?' />
                </div>
            
                

                )}
                <button type='button' onClick={handleAtrakcjeadd}>Dodaj atrakcję</button>
                <br />
                <button onClick={getTravelInfo} type='button' style={{marginBottom:"100px"}}>Potwierdź</button>
            </form>
        <NewTravelDisplay destinationValue={destinationValue}/>
        </div>
    );
}
export default NewTravelInput
