import { Box, Container } from "@mui/material"
import "./tablero.css"
import Casilla from "../Casilla/Casilla"

function Tablero() {
    const array = Array.from(Array(100).keys())

    return(
            <Box className="tableroContainer">
                {array.map((i) => (
                    <Casilla key={i}/>
                ))}
            </Box>
    )
}
export default Tablero