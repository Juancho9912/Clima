import {useState} from "react";
import ClimaForm from "./climaForm";

export default function ClimaApp(){
    const [clima, setClima] = useState(null);


    async function loadInfo(city='london'){
        try{
            
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
                );

            const json = await request.json();
            setClima(json);
            console.log(json);
        }catch(e){
        
        }
    }

    function handleChangeCity(ciudad){
        setClima(null);
        loadInfo(ciudad);
    }

    return (
      <div>
        <ClimaForm onChangeCity={handleChangeCity}/>
        <div>{clima?.current.temp_c}</div>
      </div>
    );
}