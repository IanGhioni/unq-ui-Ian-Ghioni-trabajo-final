function noSonValidas(casillasOcupadas, size, indice, horizontal) {
    let casillasQueOcuparia = new Set()
    for(let x=0; x<size; x++) {
        if (horizontal) {
            casillasQueOcuparia.add(Number(indice) + x)
        } else {
            casillasQueOcuparia.add(Number(indice) + x * 10)
        }
    }

    const hayCasillasRepetidas = casillasOcupadas.some(casilla => {return casillasQueOcuparia.has(casilla)});
    let sobrepasaElBordeDerecho = false
    if(horizontal) {
        for(let x=0; x<size; x++) {
            if ((indice + x)%10 == 0) {
                sobrepasaElBordeDerecho = true
            }
        }
    }

    let returnValue = casillasOcupadas.length != 0  && hayCasillasRepetidas || sobrepasaElBordeDerecho
    console.log(sobrepasaElBordeDerecho); console.log(size); console.log(returnValue)
    return(returnValue)
}
export default noSonValidas