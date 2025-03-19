import { use, useEffect, useState } from 'react';
import './NewTravelInput.css'
import NewTravelDisplay from './NewTravelDisplay.jsx';
import MainPage from './MainPage.jsx';
import Plane from './images/plane.png'
import AttractionReccomend from './AttractionReccomend.jsx';

function NewTravelInput({setTravelData, setIsFormDisplayed}){


    const [places, setPlaces] = useState([1])
    function handleAddPlace(){
        setPlaces(prev => [...prev, prev[prev.length - 1] + 1]);
    }

    const [atrakcje, setAtrakcje] = useState([1]);
    function handleAtrakcjeadd(){
        setAtrakcje(prev=>[...prev, prev[prev.length-1]+1]);
    }
    const [destinationValue, setDestinationvalue] =  useState([])
    const [startDateValue, setStartDateValue] = useState([]);
    const [endDateValue, setEndDatevalue] = useState();
    const [travelPeriod, setTravelPeriod] = useState();
    const [accomodationValue, setAccomodationValue] = useState();
    const [accomodation, setAccomodation] = useState();
    const [budgetValue, setBudgetValue] = useState()
    const [budget, setBudget] =useState()
    const [attractions, setAttractions] = useState([]);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [isReccomendationDisplayed, setIsReccomendationDisplayed]=useState(false);


    function getTravelInfo(){
        setDestinationvalue([]);
        places.forEach((element, index)=>
        {   
            let DestinationValue = document.getElementById(`destinationInput${index}`).value;
            if(DestinationValue!==""){
                
                setDestinationvalue(prev=>[...prev,DestinationValue]);

            }


        })

        setTravelPeriod(`${startDateValue} - ${endDateValue}`);

        if(accomodationValue!==""){
            setAccomodation(accomodationValue);

        }
        if(budgetValue!==""){
            setBudget(`${budgetValue} zł`)


        }

        setAttractions([])
        atrakcje.forEach((element, index)=>{
            let AttracionsValue = document.getElementById(`attracionInput${index}`).value;
            if(AttracionsValue!==""){
                setAttractions(prev=>[...prev, AttracionsValue]);
            }

        })
        setIsReccomendationDisplayed(false);
        setIsDisplayed(true);
        


    }
    function SendTravelData(){
        setTravelData(prev=>[...prev, {
            Destination: destinationValue,
            StartDate:startDateValue,
            EndDate:endDateValue,
            Budget: budget,
            Attractions: attractions,
        

        }]);
    }

    

    return(
        <div className='NewTravelContainer'>
        <h1 className='close' onClick={()=>setIsFormDisplayed(false)}>X</h1>
        <img id = "Plane1"src={Plane} alt="" />
            
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
                    <input id="StartDate"type="date" onChange={(e)=>setStartDateValue(e.target.value)}/>
                    <h4>Do</h4>
                    <input id="EndDate" type="date" onChange={(e)=>setEndDatevalue(e.target.value)} />
                </div>
                <h3>Zameldowanie</h3>
                <input type="text" onChange={(e)=>setAccomodationValue(e.target.value)} placeholder='Miejsce zameldowania  np. Hotel, Aparatament'/>
                <h3>Budżet</h3>
                <input type="number" onChange={(e)=> setBudgetValue(e.target.value)} placeholder='Ile przeznaczysz na wyjazd' step="100"/>
                <h3>Atrakcje</h3>
                {atrakcje.map((element,index)=>
                <div key={index} className='InputTrip'>
                    <h3>{element}</h3>
                    <input id = {`attracionInput${index}`}type="text" placeholder='Co chciałbyś zobaczyć?' />
                </div>
            
                

                )}
                <button type='button' onClick={handleAtrakcjeadd}>Dodaj atrakcję</button>
                <h3 onClick={()=>{setIsReccomendationDisplayed(true),setIsDisplayed(false)}} style={{cursor: "pointer"}}>Nie wiesz co zwiedzić? Kliknij tu</h3>
                <br />
                <button onClick={()=>{getTravelInfo()}} type='button' style={{marginBottom:"100px"}}>Potwierdź</button>
            </form>
            {isReccomendationDisplayed &&
            <AttractionReccomend  destinationValue={destinationValue}/>}
            {isDisplayed &&
        <NewTravelDisplay  SendTravelData={SendTravelData} setIsFormDisplayed={setIsFormDisplayed} attractions={attractions} budget = {budget} accomodation = {accomodation} destinationValue={destinationValue} travelPeriod = {travelPeriod}/>}\
        </div>
    );
}
export default NewTravelInput
