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
        <h2 className="font-bold text-xl pb-2 text-center underline mb-1">Interes Generados</h2>
        <p><span className="font-bold">Presupuesto total</span>: <span className="font-bold">{Ptotal}</span> </p>
        <p>- Intereses totales: {Intereses}</p>
        <p>- Promedio de interes diario: {Promedio}</p>
    </div>
  )
}

export default Resultados