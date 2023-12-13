import './App.css'
import { Typography, Box, Container } from '@mui/material'
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
        <Box sx={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Container sx={{display:'flex', flexDirection: 'row'}}>
          <Tablero isMachine={false}/>
          <Tablero isMachine={true}/>
          </Container>
        </Box>
        <BarcoContainer/>
      </Box>
  )
}

export default App
