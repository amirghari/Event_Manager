import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import App from './App' // Adjust if your App component is a TypeScript file (.tsx)

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

// Define custom breakpoints
const breakpoints = {
  xsm: '320px',
  sm: '576px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
  '3xl': '1920px', // Custom breakpoint
  '4xl': '2560px', // Custom breakpoint
}

const theme = extendTheme({
  colors,
  breakpoints,
  config: {
    initialColorMode: 'light',
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
