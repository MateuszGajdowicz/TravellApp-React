import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './assets/MainPage.jsx'
import WorldMap from './assets/WorldMap.jsx'
import NewTravelInput from './assets/NewTravelInput.jsx'
function App() {
  const [travelData,setTravelData] = useState();
  const [isFormDisplayed, setIsFormDisplayed] = useState(false)



  return (
    <>
    <MainPage  setIsFormDisplayed = {setIsFormDisplayed} travelData={travelData}/>
    {isFormDisplayed && 
    <NewTravelInput setIsFormDisplayed={setIsFormDisplayed} setTravelData={setTravelData}/>}

    </>
  )
}

export default App
