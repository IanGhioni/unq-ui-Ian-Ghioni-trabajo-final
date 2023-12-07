import { useState } from 'react'
import './App.css'
import { Container, Typography, Box } from '@mui/material'
import Tablero from './components/Tablero/Tablero'

function App() {

  return (
      <Box>
        <Typography 
          className='titulo'
          variant='h4'>
            Batalla Naval
          </Typography>
          <Tablero/>
          
      </Box>
  )
}

export default App
