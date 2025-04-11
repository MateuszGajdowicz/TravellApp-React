import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './assets/MainPage.jsx'
import WorldMap from './assets/WorldMap.jsx'
import NewTravelInput from './assets/NewTravelInput.jsx'
import MyTravels from './assets/MyTravels.jsx'
import AttractionReccomend from './assets/AttractionReccomend.jsx'
import Kantor from './assets/Kantor.jsx'
function App() {
  const [travelData,setTravelData] = useState([]);
  const [isFormDisplayed, setIsFormDisplayed] = useState(false)
  const [isMyTravelsDisplayed, setIsMytravelsDisplayed] = useState(false);
  const [isKantorDisplayed, setIsKantorDisplayed] = useState(false)



  return (
    <>
    <MainPage setIsKantorDisplayed = {setIsKantorDisplayed} setIsMytravelsDisplayed={setIsMytravelsDisplayed} setIsFormDisplayed = {setIsFormDisplayed} travelData={travelData}/>
    {isFormDisplayed && 
    <NewTravelInput setIsFormDisplayed={setIsFormDisplayed} setTravelData={setTravelData}/>}
    {isMyTravelsDisplayed &&
    <MyTravels travelData={travelData} setIsMytravelsDisplayed={setIsMytravelsDisplayed}/>}
    {isKantorDisplayed&&
        <Kantor/>

    }
    </>
  )
}

export default App
