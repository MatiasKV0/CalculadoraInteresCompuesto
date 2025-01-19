const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-AR',{
        style:'currency',
        currency:'ARS'
    });
    return formatter.format(valor)
}

const calcularTotal = (presupuesto, TNA, dias) => {
    const tasaDiaria = TNA / 365 / 100;

    const presupuestoInicial = presupuesto;

    for(let i = 0; i < dias; i++){
        presupuesto += presupuesto * tasaDiaria;
    }

    return {
        total: presupuesto.toFixed(2),
        promedio: ((presupuesto - presupuestoInicial)/dias).toFixed(2)
    };
};

export {
    formatearDinero,
    calcularTotal
}