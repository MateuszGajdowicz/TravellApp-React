import { useEffect, useState } from 'react';
import image from './images/landscape.jpg';
import NewYork from "./images/NewYork.png"
import Warsaw from './images/Warsaw.png'
import Barcelona from './images/Barcelona.png'
import Plane from './images/plane.png'
import './MainPage.css'
import { use } from 'react';
import WorldMap from './WorldMap.jsx';
function MainPage({travelData, setIsFormDisplayed}){
    const API_Key = "BS9RzGusHHUDf9ccCSYWhUS-o6pUk1qBct0bczqdjEw";
    const [destinationList, setDestinationList] = useState(["Maroko", "Barcelona", "Moskwa"]);
    const [imageList, setImageList] = useState([NewYork,Warsaw,Barcelona]);
    const [beginingList, setBeginingList] = useState(["01.01.2029","02.02.2002", "03.03.2003"]);
    const [endingList, setEndingList] = useState(["01.01.2029","02.02.2002", "03.03.2003"]);



    const travelList = destinationList.map((element, index)=>(
    {
        destination:element,
        image:imageList[index],
        begining: beginingList[index],
        ending:endingList[index]
    }));

    async function getImage(cityName){
        try{
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${cityName}&client_id=${API_Key}`);
            const data = await response.json();
            const imageUrl = data.results[0].urls.regular;
            setImageList(prev=>[...prev, imageUrl])
        }
        catch(error){

        }

    }

    return(
        <>
        <WorldMap getImage={getImage}/>
        <nav>
            <ul>
                <li id="logo">LOGO</li>
                <li>Strona Główna</li>
                <li onClick={()=>console.log(travelData)}>Moje podróże</li>
                <li onClick={()=>setIsFormDisplayed(true)}>Dodaj nową podróż</li>
                <li>Profil</li>
            </ul>
        </nav>
        <img id = "Plane"src={Plane} alt="" />

        <div className='CloseTravels'>
            <h2>Twoje najbliższe podróże</h2>
            <div className='CloseTravelContainer'> 
                {travelList.map((element, index)=>
                <div className='Travels' key={index}>
                    <h1>{element.destination}</h1>
                    <h2>{element.begining} - {element.ending}</h2>
                </div>
                )}
            </div>
        
        </div>
        <div className='ImageContainer'>
            {imageList.map((element, index) => 
            <div key={index} className='Landscape' style={{backgroundImage:`url(${element})`}}>

        </div>


            )}

        </div>

        </>
    );
}
export default MainPage