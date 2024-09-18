import { Box, Typography } from '@mui/material'
import React from 'react'
import ResponsiveAppBar from './components/navbar'

const App = () => {
  return (
    <Box>
<ResponsiveAppBar></ResponsiveAppBar>
    <Typography className='text-center' variant='h2'>App</Typography>
    </Box>
  )
}

export default App