import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './context'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AppProvider>
  </React.StrictMode>
)
