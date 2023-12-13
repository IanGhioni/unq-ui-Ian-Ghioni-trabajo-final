import { Box } from '@mui/material'
import './casilla.css'

function Casilla({taken}) {
    const cssName = taken ? 'casillaOcupada' : 'casilla'
    return(
        <div className={cssName}></div>
        
    )
}

export default Casilla