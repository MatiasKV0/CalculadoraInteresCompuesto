import { formatearDinero, calcularTotal } from "../helpers/funciones"


const Resultados = ({presupuesto, tna, days}) => {
    const {total, promedio} = calcularTotal(presupuesto, tna, days);
  return (
    <div className="border rounded text-center p-5 m-5 mb-0">
        <h1 className="font-bold text-xl pb-2">Interes Generados</h1>
        <p>Presupuesto <span className="font-bold">total</span> en {days} dias: <span className="font-bold">{formatearDinero(total)}</span> </p>
        <p>Promedio de interes diario: {formatearDinero(promedio)}</p>
    </div>
  )
}

export default Resultados