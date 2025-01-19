const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-AR',{
        style:'currency',
        currency:'ARS'
    });
    return formatter.format(valor)
}

const calcularTotal = (presupuesto, TNA, periodo, tipo) => {
    const tasaDiaria = TNA / 365 / 100;

    const dias = tipo === 1 ? periodo : tipo === 2 ? periodo * 30 : periodo * 365;

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