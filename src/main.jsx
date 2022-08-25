import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { Form, Modal, Bissecao } from "./component";
import { AppProvider } from './context'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ChakraProvider>
        <Flex w="100%" flexDir='column'>
          <Form />
          <Bissecao />
          <Modal />
        </Flex>
      </ChakraProvider>
    </AppProvider>
  </React.StrictMode>
)
