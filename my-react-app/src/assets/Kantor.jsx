
import { useState } from 'react';
import './Kantor.css'
function Kantor(){
    const [currencies, setCurrencies]= useState([]);
    const [firstCurrency, setFirstCurrency] = useState({
                                                value:"",
                                                name:""
                                                     })
    const [secondCurrency, setSecondCurrency] = useState({
                                                value:"",
                                                name:""
                                                     });
    const [outcome, setOutcome] = useState();




    async function getCurrencies(){
        try{
            const response = await fetch("https://api.nbp.pl/api/exchangerates/tables/A/?format=json")
            const result = await response.json(0);
            const updatedCurrencies = [
                { currency: "polski złoty", code: "PLN", mid: 1.00 }, 
                ...result[0].rates
            ];
            setCurrencies(updatedCurrencies)

        }
        catch(error){}


        
        
    } 
    function handleFirstCurrencyValue(event){
        setFirstCurrency(prev=>({...prev,value:event.target.value}))

    }
    function handleFirstCurrencyName(event){
        setFirstCurrency(prev=>({...prev,name:event.target.value}))
    }

    function handleSecondCurrencyName(event){
        setSecondCurrency(prev=>({...prev, name:event.target.value}))
    }
    function CountCurrency(){
        const firstCurrencyRate = currencies.find(rate => rate.currency === firstCurrency.name)?.mid;
        const secondCurrencyRate = currencies.find(rate => rate.currency === secondCurrency.name)?.mid;
        console.log(firstCurrencyRate, secondCurrencyRate)
        let CountedValue = Number(firstCurrency.value)*(firstCurrencyRate/secondCurrencyRate);
        setOutcome(CountedValue);
    }


    
    return(
        <div className="KantorContainer">
            <div className='FirstValueContainer'>
                <h2>Jaką walutę chcesz przeliczyć?</h2>
                <button onClick={()=>getCurrencies()}>PObierz</button>
                <button onClick={()=>console.log(firstCurrency, secondCurrency)}>check</button>
                <div>
                    <input onChange={handleFirstCurrencyValue} type="number" />
                    <select onChange={handleFirstCurrencyName} name="" id="">
                        {currencies.map((element,index)=>(

                            <option key={index} value={element.currency}>{element.currency}</option>

                        )
                        )}

                    </select>
                    <h2>Na jaką walutę chcesz przeliczyć?</h2>
                    <div>
                        <select onChange={handleSecondCurrencyName} name="" id="">
                            {currencies.map((element)=>(
                                <option>{element.currency}</option>
                                
                            ))}
                        </select>
                    </div>
                </div>
                <button onClick={CountCurrency}>Przelicz</button>
                <h1>{outcome} {secondCurrency.name}</h1>
            </div>


        </div>
    )

}
export default Kantor