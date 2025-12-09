import { useState } from "react";
import Alerta from "./components/Alerta";
import Resultados from "./components/Resultados";

function App() {
  const [tna, setTna] = useState(0);
  const [periodo, setPeriodo] = useState(0);
  const [tipoPeriodo, setTipoPeriodo] = useState(1); // 1: Días, 2: Meses, 3: Años
  const [msg, setMsg] = useState('');
  const [presupuesto, setPresupuesto] = useState(0);
  const [resultado, setResultado] = useState(false);

  const [selection, setSelection] = useState({
    days: true,
    meses: false,
    años: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setResultado(false);

    if (isNaN(tna) || isNaN(periodo) || isNaN(presupuesto)) {
      setMsg('Por favor, ingrese valores numéricos válidos.');
      return;
    }
    else if (tna <= 0 || periodo <= 0 || presupuesto <= 0) {
      setMsg('Todos los valores (Presupuesto, TNA y Periodo) deben ser mayores a 0.');
      return;
    }
    else {
      setMsg('');
      setResultado(true);
    }
  };

  const handlePeriodoClick = (id) => {
    const newSelection = { days: false, meses: false, años: false };
    let newTipoPeriodo = 1;

    switch (id) {
      case 1:
        newSelection.days = true;
        newTipoPeriodo = 1;
        break;
      case 2:
        newSelection.meses = true;
        newTipoPeriodo = 2;
        break;
      case 3:
        newSelection.años = true;
        newTipoPeriodo = 3;
        break;
      default:
        break;
    }

    setSelection(newSelection);
    setTipoPeriodo(newTipoPeriodo);
    setResultado(false);
  };

  const inputClasses = "border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg p-3 transition duration-150 ease-in-out shadow-sm placeholder-gray-400";
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-4">
      <div className="mt-10 md:mt-16 w-full max-w-lg bg-white p-8 rounded-xl shadow-2xl">
        <header className="mb-8">
          <h1 className="text-4xl text-center font-extrabold text-gray-900">
            Calcule su <span className="text-indigo-600">Interés</span>
          </h1>
          <p className="text-center text-gray-500 mt-2">Simulador de Interés Compuesto</p>
        </header>

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="presupuesto" className={labelClasses}>Monto a Invertir (Presupuesto):</label>
              <input
                id="presupuesto"
                type="number"
                min="0"
                step="0.01"
                className={inputClasses}
                placeholder="Ej: 20,000.00"
                onChange={(e) => { setPresupuesto(Number(e.target.value)); setResultado(false) }}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="tna" className={labelClasses}>Tasa Nominal Anual (TNA en %):</label>
              <input
                id="tna"
                type="number"
                min="0"
                step="0.1"
                className={inputClasses}
                placeholder="Ej: 35.7"
                onChange={(e) => { setTna(Number(e.target.value)); setResultado(false) }}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClasses}>Período de su Inversión:</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="number"
                  min="0"
                  className={inputClasses}
                  placeholder="Ej: 10, 30, 60, 90"
                  onChange={(e) => { setPeriodo(Number(e.target.value)); setResultado(false) }}
                />

                <div className="flex rounded-lg overflow-hidden border border-gray-300">
                  {[
                    { id: 1, label: 'Días', active: selection.days },
                    { id: 2, label: 'Meses', active: selection.meses },
                    { id: 3, label: 'Años', active: selection.años }
                  ].map(({ id, label, active }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => handlePeriodoClick(id)}
                      className={`flex-1 py-3 text-sm font-medium transition-colors duration-150 ${active
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                        } ${id === 2 ? 'border-l border-r border-gray-300' : ''}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {msg && <Alerta msg={msg} />}

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white mt-8 font-semibold py-3 px-4 rounded-lg w-full transition duration-150 ease-in-out shadow-lg transform hover:scale-[1.01]"
          >
            Calcular Interés Compuesto
          </button>
        </form>

        {resultado && <Resultados presupuesto={presupuesto} tna={tna} periodo={periodo} tipoPeriodo={tipoPeriodo} />}
      </div>
    </div>
  );
}

export default App;