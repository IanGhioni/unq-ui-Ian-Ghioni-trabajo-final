import { Box, Container } from "@mui/material"
import "./tablero.css"
import Casilla from "../Casilla/Casilla"
import { useEffect } from "react"

function Tablero(user) {
    const arrayOfNumbers = Array.from(Array(100).keys())
    const casillas = arrayOfNumbers.map((i) => (<Casilla key={i}/>))

    
    return(
            <Box className="tableroContainer">
                {casillas}
            </Box>
    )
}
export default Tablero