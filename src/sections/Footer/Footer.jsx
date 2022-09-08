import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { useDevice } from '../../hooks'

export const Footer = () => {
    const { device: { isMobile }} = useDevice()
    return (
        <>
        {isMobile && (
            <Flex
                // position='fixed'
                bottom='0'
                h='10vh'
                p="10px"
                borderRadius="10px"
                gap={isMobile ? "10px" : "30px"}
                fontSize={isMobile ? "12px" : "18px"}
                fontWeight="bold"
                flexDir={isMobile ? "column" : "row"}
                w="100%"
                textAlign="center"
            >
    
            <Text>
                João Vinícius Vitral: 202010358111
            </Text>
            <Text>
                Marcelo Bracet: 202010357611
            </Text>
        </Flex> 
        )}
    </>
  )
}
