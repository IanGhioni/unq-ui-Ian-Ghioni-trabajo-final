import "./barco.css"
import { Box, Container } from "@mui/material"
import Barco from "./Barco"

function Submarino({rotation}) {
    return(
        <Box sx={{transform: rotation}}>
            <Barco style="submarino"></Barco>
        </Box>
    )
}

export default Submarino