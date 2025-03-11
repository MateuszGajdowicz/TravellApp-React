import { useEffect, useState } from 'react';
import image from './landscape.jpg';
import './MainPage.css'
import { use } from 'react';
import WorldMap from './WorldMap.jsx';
function MainPage(){
    const API_Key = "BS9RzGusHHUDf9ccCSYWhUS-o6pUk1qBct0bczqdjEw";
    const [destinationList, setDestinationList] = useState(["Maroko", "Barcelona", "Moskwa"]);
    const [imageList, setImageList] = useState([]);
    const [beginingList, setBeginingList] = useState(["01.01.2029","02.02.2002", "03.03.2003"]);
    const [endingList, setEndingList] = useState(["01.01.2029","02.02.2002", "03.03.2003"]);



    const travelList = destinationList.map((element, index)=>(
    {
        destination:element,
        image:imageList[index],
        begining: beginingList[index],
        ending:endingList[index]
    }));
    let Description;

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
                <li>Moje podróże</li>
                <li>Dodaj nową podróż</li>
                <li>Profil</li>
            </ul>
        </nav>
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