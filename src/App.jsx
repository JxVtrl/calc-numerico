import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { Modal } from "./component";
import { Header,  Footer, Main } from "./sections";

export default function App() {
  return (
      <Flex
        w="100%"
        flexDir='column'
        pos='relative'
      >
        <Header/>
        <Main />
        <Modal />
        <Footer/>
        <Logo />
    </Flex>
  )
}

const Logo = () => (
    <Flex
        pos='absolute'
        zIndex='-1'
        placeSelf='center'
        mt='25vh'
        opacity='0.1'
    >
        <Image
            w="100%"
            src={`https://upload.wikimedia.org/wikipedia/pt/e/e2/Logo_uerj_cor.gif`}
        />
    </Flex>
)
