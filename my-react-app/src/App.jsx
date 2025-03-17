import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './assets/MainPage.jsx'
import WorldMap from './assets/WorldMap.jsx'
import NewTravelInput from './assets/NewTravelInput.jsx'
import MyTravels from './assets/MyTravels.jsx'
function App() {
  const [travelData,setTravelData] = useState([]);
  const [isFormDisplayed, setIsFormDisplayed] = useState(false)
  const [isMyTravelsDisplayed, setIsMytravelsDisplayed] = useState(false);



  return (
    <>
    
    <MainPage setIsMytravelsDisplayed={setIsMytravelsDisplayed} setIsFormDisplayed = {setIsFormDisplayed} travelData={travelData}/>
    {isFormDisplayed && 
    <NewTravelInput setIsFormDisplayed={setIsFormDisplayed} setTravelData={setTravelData}/>}
    {isMyTravelsDisplayed &&
    <MyTravels travelData={travelData} setIsMytravelsDisplayed={setIsMytravelsDisplayed}/>}
    </>
  )
}

export default App
