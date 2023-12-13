import { Box } from '@mui/material'
import './casilla.css'
import { useState } from 'react'

function Casilla({taken}, {machine}) {
    const [cssName, setCssName] = useState('casilla')
    const [disabled, setDisabled] = useState(false)

    function handleClick() {
        if(cssName == 'casilla') {
            setCssName(taken ? 'casillaOcupada' : 'casillaVacia')
            setDisabled(true)
        }
    }

    return(
        <div style={disabled ? {pointerEvents: "none"} : {}}>
            <Box className={cssName} onClick={handleClick}></Box>
        </div>
    )
}

export default Casilla