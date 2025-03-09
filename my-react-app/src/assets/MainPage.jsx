import { useState } from 'react';
import './MainPage.css'
import { use } from 'react';
function MainPage(){
    const [destinationList, setDestinationList] = useState(["Maroko", "Barcelona", "Moskwa"]);
    const [imageList, setImageList] = useState(["image1", "image2", "image3"]);
    const [beginingList, setBeginingList] = useState(["01.01.2029","02.02.2002", "03.03.2003"]);
    const [endingList, setEndingList] = useState(["01.01.2029","02.02.2002", "03.03.2003"]);



    const travelList = destinationList.map((element, index)=>(
    {
        destination:element,
        image:imageList[index],
        begining: beginingList[index],
        ending:endingList[index]
    }));
    

    return(
        <>
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

        </>
    );
}
export default MainPage