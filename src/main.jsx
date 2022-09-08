import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, Flex, Image } from '@chakra-ui/react'
import { Form, Modal } from "./component";
import { Header,  Footer } from "./sections";

import { AppProvider } from './context'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ChakraProvider>
        <Flex w="100%" flexDir='column' pos='relative'>
          <Header/>
          <Form />
          <Modal />
          <Flex pos='absolute' zIndex='-1' placeSelf='center' mt='25vh'  opacity='0.1'>
            <Image
              w="100%"
              src={`https://upload.wikimedia.org/wikipedia/pt/e/e2/Logo_uerj_cor.gif`}
            />
          </Flex>
        </Flex>
        <Footer/>
      </ChakraProvider>
    </AppProvider>
  </React.StrictMode>
)
