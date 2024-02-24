import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.tsx'
import { extendTheme } from '@chakra-ui/react'
import { AuthProvider } from '../src/hooks/AuthContext';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.InitialColorMode} />
        <App />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AuthProvider } from '../src/hooks/AuthContext'; // Import the AuthProvider
// import App from './App'; // Your main App component

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
