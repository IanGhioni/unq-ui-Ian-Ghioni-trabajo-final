import { Box, Container } from "@mui/material"
import "./tablero.css"
import Casilla from "../Casilla/Casilla"

function Tablero({isMachine}) {
    const arrayOfNumbers = Array.from(Array(100).keys())
    const casillas = arrayOfNumbers.map((i) => (<Casilla key={i}/>))
    
    if (isMachine) {
        const poortaviones = {name: 'poortaviones', size: 5}
        const crucero = {name: 'crucero', size: 4}
        const submarino = {name: 'submarino', size: 3}
        const lancha = {name: 'lancha', size: 2}
        const naves = [poortaviones, crucero, submarino, lancha]
    }

    return(
            <Box className="tableroContainer">
                {casillas}
            </Box>
    )
}
export default Tablero