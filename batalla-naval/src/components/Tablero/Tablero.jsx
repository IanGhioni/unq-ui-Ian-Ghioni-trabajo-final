import { Box, Container } from "@mui/material"
import "./tablero.css"
import Casilla from "../Casilla/Casilla"
import casillasOcupadas from "./casillasOcupadas"

function Tablero({isMachine}) {
    const arrayOfNumbers = Array.from(Array(100).keys()).map(x => x+1)
    let casillas = []
    let posicionesDeCasillas = []
    
    if (isMachine) {
        const poortaviones = {name: 'poortaviones', size: 5}
        const crucero = {name: 'crucero', size: 4}
        const submarino = {name: 'submarino', size: 3}
        const lancha = {name: 'lancha', size: 2}
        const naves = [poortaviones, crucero, submarino, lancha]

        posicionesDeCasillas = (casillasOcupadas(naves))
        casillas = arrayOfNumbers.map((i) => (
            <Casilla key={i} taken={posicionesDeCasillas.includes(i)}/>
        ))

    } else {
        casillas = arrayOfNumbers.map((i) => (<Casilla key={i} taken={false}/>))
    }

    return(
            <Box className="tableroContainer">
                {casillas}
            </Box>
    )
}
export default Tablero