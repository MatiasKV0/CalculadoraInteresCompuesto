import { useState } from "react";
import Alerta from "./components/Alerta";
import Resultados from "./components/Resultados";

function App() {

  const [tna, setTna] = useState(0);
  const [periodo, setPeriodo] = useState(0);
  const [tipoPeriodo, setTipoPeriodo] = useState(1);
  const [days, setDays] = useState(true);
  const [meses, setMeses] = useState(false);
  const [años, setAños] = useState(false);
  const [msg, setMsg] = useState('');
  const [presupuesto, setPresupuesto] = useState(0);
  const [resultado, setResultado] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setResultado(false);
    
    if(isNaN(tna) || isNaN(periodo) || isNaN(presupuesto)){
      setMsg('Ingrese valores numericos');
      return;
    }  
    else if(tna <= 0 || periodo <= 0 || presupuesto <= 0){
      setMsg('Ingrese valores mayores a 0');
      return;
    }
    else{
      setMsg('');
      setResultado(true);
    }
  }

  const handleClick = (e) =>{
    e.preventDefault();
    
    switch(e.target.id){
      case "1":
        setDays(true);
        setMeses(false);
        setAños(false);
        setTipoPeriodo(1);
        break;
      case "2":
        setDays(false);
        setMeses(true);
        setAños(false);
        setTipoPeriodo(2);
        break;
      case "3":
        setDays(false);
        setMeses(false);
        setAños(true);
        setTipoPeriodo(3);
        break;
      default:
        break;
    }
  }

  return (
    <>
    <div className=" md:bg-gray-50 h-screen absolute top-0 left-0 w-full">
      <div className="mx-auto md:shadow bg-white w-full lg:w-2/5 lg:max-w-[700px] p-5 m-10">
        <h1 className="text-4xl text-center font-bold text-gray-800">
          Calcule su <span className="text-indigo-600">Interes</span>
        </h1>
        <form className="m-5" onSubmit={handleSubmit}>
        <div className="flex flex-col my-5">
            <label>Ingrese su Presupuesto:</label>
            <input 
              type="number"
              min="0"
              className="border rounded p-2"
              placeholder="Ej: 20,000.00"
              onChange={(e) => {setPresupuesto(Number(e.target.value)); setResultado(false)}}
            />
          </div>
          <div className="flex flex-col my-5">
            <label>Ingrese el valor porcentual de TNA:</label>
            <input 
              type="number"
              min="0"
              className="border rounded p-2"
              placeholder="Ej: 35.7"
              onChange={(e) => {setTna(Number(e.target.value)); setResultado(false)}}
            />
          </div>
          <div className="flex flex-col my-5">
            <label>Ingrese el periodo de su inversion:</label>
            <div className="flex gap-3 flex-col">
              <div className="w-full">
                  <input 
                    type="number"
                    min="0"
                    className="border rounded p-2 w-full"
                    placeholder="Ej: 10, 30, 60, 90"
                    onChange={(e) => {setPeriodo(Number(e.target.value)); setResultado(false)}}
                  />
              </div>
              <div className="w-full">
                <button onClick={handleClick} id="1" className={`rounded-l py-2 px-4 border w-1/3 ${days ? 'bg-gray-300' : 'bg-white'}`}>Dias</button>
                <button onClick={handleClick} id="2" className={`py-2 px-4 border w-1/3 ${meses ? 'bg-gray-300' : 'bg-white'}`}>Meses</button>
                <button onClick={handleClick} id="3" className={`rounded-r py-2 px-4 border w-1/3 ${años ? 'bg-gray-300' : 'bg-white'}`}>Años</button>
              </div>
            </div>
          </div>
          {msg && <Alerta msg={msg}/>}
          <button type="submit"
            className="bg-indigo-600 text-white mt-2 font-bold py-2 px-4 rounded w-full"
          >Calcular Interes Compuesto</button>
        </form>
       {resultado && <Resultados presupuesto={presupuesto} tna={tna} periodo={periodo} tipoPeriodo={tipoPeriodo}/>}
      </div>
    </div>
    </>
  )
}

export default App
