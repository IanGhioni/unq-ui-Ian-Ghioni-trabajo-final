import "./barco.css"
import Barco from "./Barco"
import { Box } from "@mui/material"

function Crucero({rotation}) {
    return(
        <Box sx={{transform: rotation}}>
            <Barco style="crucero"></Barco>
        </Box>
    )
}

export default Crucero