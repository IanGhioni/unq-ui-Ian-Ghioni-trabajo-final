import { Box, Button } from "@mui/material"
import Lancha from "./Lancha"
import Crucero from "./Crucero"
import Submarino from "./Submarino"
import Poortaviones from "./Poortaviones"
import "./barco.css"
import { useEffect, useState } from "react"

function BarcoContainer() {
    const [rotate, setRotate] = useState(false);
    const [height, setHeight] = useState(rotate ? '220px' : '80px')
    const [rotateDeg, setRotateDeg] = useState(rotate ? "rotate(90deg)" : "rotate(0deg)")

    const rotar = () => setRotate(!rotate);
    useEffect(() => {
        setHeight(rotate ? '220px' : '80px')
        setRotateDeg(rotate ? "rotate(90deg)" : "rotate(0deg)")
    }, [rotate])

    return(
        <Box sx={{display:'flex', flexDirection:'column' ,alignItems: 'center'}}>
            <Button onClick={rotar}> Rotar barcos</Button>
            <Box sx={{height:height}} className="barcoContainer">
                <Lancha rotation={rotateDeg}/>
                <Submarino rotation={rotateDeg}/>
                <Crucero rotation={rotateDeg}/>
                <Poortaviones rotation={rotateDeg}/>
            </Box>
        </Box>
    )
}
export default BarcoContainer