import noSonValidas from "./noSonValidas";
import generarIndiceValido from "./generarIndiceValido";

function casillasOcupadas(naves) {
    let horizontal = Math.random() < 0.5
    let startIndex = Math.floor(Math.random() * 10 * 10)

    let casillasDeNave = []

    naves.forEach(nave => {
            let indiceValido = generarIndiceValido(startIndex,horizontal,nave.size)

            do {
                startIndex = Math.floor(Math.random() * 10 * 10)
                indiceValido = generarIndiceValido(startIndex,horizontal,nave.size)
            }
            while(noSonValidas(casillasDeNave,nave.size, indiceValido, horizontal))
            

            for (let i=0; i < nave.size; i++) {
                if (horizontal) {
                    casillasDeNave.push(Number(indiceValido) + i)
                } else {
                    casillasDeNave.push(Number(indiceValido) + i * 10)
                }
            }
            startIndex = Math.floor(Math.random() * 10 * 10)
            horizontal = Math.random() < 0.5
    });
    return(casillasDeNave)
}
export default casillasOcupadas