function generarIndiceValido(indice, direccion, size) {
    return(
        direccion ?  
            indice <= 10 * 10 - size ? indice 
            : 10 * 10 - size 
        : indice <= 10 * 10 - 10 * size ? 
            indice 
            : indice - size * 10 + 10
    )
}
export default generarIndiceValido