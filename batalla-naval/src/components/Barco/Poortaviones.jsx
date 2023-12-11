import "./barco.css"
import { Box, Container } from "@mui/material"
import Barco from "./Barco"

function Poortaviones({rotation}) {
    return(
        <Box sx={{transform: rotation}}>
            <Barco style="portaviones"></Barco>
        </Box>
    )
}

export default Poortaviones