import './App.css'
import { Typography, Box } from '@mui/material'
import Tablero from './components/Tablero/Tablero'
import "./components/Barco/barco.css"
import BarcoContainer from './components/Barco/BarcoContainer'
function App() {

  return (
      <Box>
        <Typography 
          className='titulo'
          variant='h4'>
            Batalla Naval
        </Typography>
        <Tablero/>
        <BarcoContainer/>
          </Typography>
          <Tablero/>
      </Box>
  )
}

export default App
