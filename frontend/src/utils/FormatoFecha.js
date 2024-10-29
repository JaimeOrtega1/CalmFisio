export const FormatoFecha =(date,config) => {
    const defaultOptions = {day:'numeric', month:'long', year:'numeric'};
    const options = config ? config : defaultOptions

    return new Date(date).toLocaleDateString('es-ES', options);
}