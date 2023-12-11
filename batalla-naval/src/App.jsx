import './App.css'
import { Typography, Box } from '@mui/material'
import Tablero from './components/Tablero/Tablero'
import "./components/Barco/barco.css"
import BarcoContainer from './components/Barco/BarcoContainer'
function App() {

  return (
      <Box className="appContainer">
        <Typography 
          className='titulo'
          variant='h3'>
            Batalla Naval
        </Typography>
        <Tablero/>
        <BarcoContainer/>
      </Box>
  )
}

export default App
