import { formatearDinero, calcularTotal } from "../helpers/funciones";

const Resultados = ({ presupuesto, tna, periodo, tipoPeriodo }) => {
  const { total, promedio } = calcularTotal(presupuesto, tna, periodo, tipoPeriodo);
  
  let Ptotal = "";
  let Intereses = "";
  let Promedio = "";

  if (total > 9999999999999) {
    Ptotal = "∞";
    Intereses = "∞";
    Promedio = "∞";
  } else {
    Ptotal = formatearDinero(total);
    Intereses = formatearDinero(total - presupuesto);
    Promedio = formatearDinero(promedio);
  }

  return (
    <div className="mt-8 p-6 bg-indigo-50 border border-indigo-200 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-indigo-800 mb-4 text-center border-b border-indigo-200 pb-3">
        Resumen de la Inversión
      </h3>

      <div className="text-center mb-6">
        <p className="text-lg text-gray-600 font-medium">Presupuesto + Intereses Totales:</p>
        <p className="font-extrabold md:text-4xl text-2xl text-indigo-600 mt-1">{Ptotal}</p>
      </div>

      <div className="space-y-3 text-gray-700">
        <div className="flex justify-between items-center border-t pt-3">
          <p className="font-medium">Interés total ganado:</p>
          <p className="text-lg font-semibold text-green-700">{Intereses}</p>
        </div>
        
        <div className="flex justify-between items-center border-t pt-3">
          <p className="font-medium">Ganancia promedio diaria:</p>
          <p className="text-lg font-semibold text-green-600">{Promedio}</p>
        </div>
      </div>
    </div>
  );
};

export default Resultados;