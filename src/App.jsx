import { useState } from "react";
import Alerta from "./components/Alerta";
import Resultados from "./components/Resultados";

function App() {

  const [tna, setTna] = useState(0);
  const [days, setDays] = useState(0);
  const [msg, setMsg] = useState('');
  const [presupuesto, setPresupuesto] = useState(0);
  const [resultado, setResultado] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setResultado(false);
    
    if(isNaN(tna) || isNaN(days) || isNaN(presupuesto)){
      setMsg('Ingrese valores numericos');
      return;
    }  
    else if(tna <= 0 || days <= 0 || presupuesto <= 0){
      setMsg('Ingrese valores mayores a 0');
      return;
    }
    else{
      setMsg('');
      setResultado(true);
    }
  }

  return (
    <>
      <div className="mx-auto shadow bg-white w-full lg:w-2/5 lg:max-w-[700px] p-5 m-10">
        <h1 className="text-4xl text-center font-bold text-gray-800">
          Calcule su <span className="text-indigo-600">Interes</span>
        </h1>
        <form className="m-5" onSubmit={handleSubmit}>
        <div className="flex flex-col my-5">
            <label>Ingrese su Presupuesto:</label>
            <input 
              type="text"
              className="border rounded p-2"
              placeholder="Ej: 20,000.00"
              onChange={(e) => {setPresupuesto(Number(e.target.value)); setResultado(false)}}
            />
          </div>
          <div className="flex flex-col my-5">
            <label>Ingrese el valor porcentual de TNA:</label>
            <input 
              type="text"
              className="border rounded p-2"
              placeholder="Ej: 35.7"
              onChange={(e) => {setTna(Number(e.target.value)); setResultado(false)}}
            />
          </div>
          <div className="flex flex-col my-5">
            <label>Ingrese la cantidad de dias de su inversion:</label>
            <input 
              type="text"
              className="border rounded p-2"
              placeholder="Ej: 10, 30, 60, 90"
              onChange={(e) => {setDays(Number(e.target.value)); setResultado(false)}}
            />
          </div>
          {msg && <Alerta msg={msg}/>}
          <button type="submit"
            className="bg-indigo-600 text-white mt-2 font-bold py-2 px-4 rounded w-full"
          >Calcular Interes Compuesto</button>
        </form>
       {resultado && <Resultados presupuesto={presupuesto} tna={tna} days={days}/>}
      </div>
    </>
  )
}

export default App
