import { useState } from 'react';
import './MyTravels.css'
function MyTravels({travelData,setIsMytravelsDisplayed}){
    const TodayDate = new Date();
    const FilteredTravelData = travelData.filter((element)=>new Date(element.EndDate)<TodayDate);
    console.log(FilteredTravelData)
    console.log(TodayDate)

    const [SelectedItem, setSelectedItem] = useState(null);

    const [imageListt, setImageListt] = useState([]);
    
    function handleImageAdd(event){
        const File = event.target.files[0];
        if(File){
            setImageListt(prev=>[...prev, URL.createObjectURL(File)]);

        }

    }

    return(
        <div className='MyTravelsPage'>
            <h1 onClick={()=>setIsMytravelsDisplayed(false)} className='XClose'>X</h1>
            <div className='MyTravelsBigContainer'>
                <h1>Twoje podróże</h1>
                <div className='MyTravelsSmallContainer'>
                    {FilteredTravelData.map((element)=>(
                    <div onClick={()=>setSelectedItem(element)} className='Travels'>
                        <h3>{element.Destination.join(", ")}</h3>
                        <h4>{`${element.StartDate}- ${element.EndDate}`}</h4>
                                            
                    </div>
                        
                    ))}

                </div>

            </div>
            <div className='CurrentTravelContainer'>
                <h1>Podsumowanie twojej podróży do {SelectedItem?.Destination.join(", ")}</h1>
                <h3>Zwiedziłeś {SelectedItem?.Attractions}</h3>
                <h3>
                Podróż zajęła ci{" "}
                {SelectedItem?.EndDate && SelectedItem?.StartDate
                ? Math.ceil(
                (new Date(SelectedItem.EndDate) - new Date(SelectedItem.StartDate)) /
                (1000 * 60 * 60 * 24)
                ) + " dni"
                    : "Nieznana długość"}
                </h3>
                <h3>Na podróż wydałeś {SelectedItem?.Budget}</h3>
                <h4>Co chcesz dodać?...</h4>
                <textarea id = "ThoughtsInput" type="text" placeholder='Dodaj swoje przemyślenia' ></textarea>
                <h3>Zdjęcia z podróży...</h3>
                <input type="file" onChange={handleImageAdd} />
                <div className='ImageContainerTravel'>
                    {imageListt.map((element)=>(
                        <div className='ImagesTravel' style={{backgroundImage:`url(${element}`}}>
                        </div>
                    )
                    
                    )}
                </div>
            </div>

        </div>
    );


}
export default MyTravels