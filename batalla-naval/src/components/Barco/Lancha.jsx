import { Box } from "@mui/material"
import Barco from "./Barco"
import "./barco.css"

function Lancha({rotation}) {
    return(
        <Box sx={{transform: rotation}}>
            <Barco style="lancha" ></Barco>
        </Box>
    )
}

export default Lancha