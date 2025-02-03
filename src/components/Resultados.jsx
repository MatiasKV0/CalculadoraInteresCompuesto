import { formatearDinero, calcularTotal } from "../helpers/funciones"


const Resultados = ({presupuesto, tna, periodo, tipoPeriodo}) => {
    const {total, promedio} = calcularTotal(presupuesto, tna, periodo, tipoPeriodo);
    let Ptotal = 0;
    let Intereses = 0;
    let Promedio = 0;
    if(total > 99999999999999){
      Ptotal =  "∞"
      Intereses = "∞"
      Promedio = "∞"
    }
    else{
      Ptotal = formatearDinero(total);
      Intereses = formatearDinero(total-presupuesto);
      Promedio = formatearDinero(promedio);
    }
  return (
    <div className="border rounded text-left p-5 m-5 mb-0">
        <p className=" text-center"><span className="font-medium">Presupuesto + Interes</span>: </p>
        <h2 className="font-bold text-3xl pb-2 text-center mb-1">{Ptotal}</h2>
        <p>- Interes total: {Intereses}</p>
        <p>- Promedio diario: {Promedio}</p>
    </div>
  )
}

export default Resultados