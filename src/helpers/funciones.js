export const formatearDinero = (cantidad) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    }).format(cantidad);
}

export const calcularTotal = (presupuesto, tna, periodo, tipoPeriodo) => {
    
    const TasaDiaria = tna / 100 / 365;

    let diasTotales = 0;
    if (tipoPeriodo === 1) { 
        diasTotales = periodo;
    } else if (tipoPeriodo === 2) { 
        diasTotales = periodo * 30; 
    } else if (tipoPeriodo === 3) { 
        diasTotales = periodo * 365;
    }

    const total = presupuesto * Math.pow(1 + TasaDiaria, diasTotales);
    const interesTotal = total - presupuesto;
    const promedio = interesTotal / diasTotales;

    return { total, promedio };
}