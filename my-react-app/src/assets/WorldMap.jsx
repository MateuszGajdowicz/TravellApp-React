import './WorldMap.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet';
import { useState } from 'react';
function WorldMap({getImage}){

    const greenIcon = new Icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Green_Dot.svg', // ikona czerwonego punktu
        iconSize: [10, 10],  // Rozmiar ikony
        iconAnchor: [0, 0]  // Punkt kotwiczenia ikony
    });

    const [cityCoordinatesList, setCityCoordinatesList] = useState([[40.7128, -74.0060], [41.3784, 2.1925],[52.2298, 21.0118]] );


    async function getCityCoordinates(city){
        const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`);
        const data = await response.json();
        if(data && data[0]){
            let CityCoordinates = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
            setCityCoordinatesList(prev=>[...prev, CityCoordinates]);

        }
        else{
            console.log("nie znaleziono miasta")
        }

    }
    function handleCityAdd(){
        let CityInput = document.getElementById("CityInput").value;
        getCityCoordinates(CityInput);
        document.getElementById("CityInput").value ="";
        getImage(CityInput)

    
    }

        return(
            <div  className='map-container'>
                <div style={{display:"flex", gap:"30px", alignItems:"center"}}>
                <h3>Byłeś już w...</h3>
                <input id = "CityInput"type="text" placeholder='Gdzie już byłeś?' />
                <button onClick={handleCityAdd}>Submit</button>
                </div>


        <MapContainer className='Map'
        center={[20, 0]} 
        zoom={2}
        >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            {cityCoordinatesList.map((element, index)=>
                <Marker position={element} key={index} icon={greenIcon}>
        
                </Marker>
            )};


        </MapContainer>
        </div>

    );

}
export default WorldMap