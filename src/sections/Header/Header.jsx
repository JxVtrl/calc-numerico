import React from 'react'
import { joao_img, marcelo_img } from '../../../public'
import { Flex, Text, AvatarGroup, Avatar, Image } from '@chakra-ui/react'
import { useDevice } from '../../hooks'

export function Header() {
  const { device: { isMobile }} = useDevice()
  return (
    <Flex
      align="center"
      h="15vh"
      justify="space-between"
      flexDir="row"
      bgColor="#EEE"
      w="100%"
      px="30px"
      textAlign='center'
    >
      <Flex flexDir="column" fontSize="20px" w='215px'>
        <Text fontWeight="bold">CÁLCULO NUMÉRICO</Text>
        <Text>
          <i>Professor: Hermes</i>
        </Text>
      </Flex>
      
      {isMobile || (
        <Flex
          p="10px"
          borderRadius="10px"
          gap={isMobile ? "10px" : "30px"}
          fontSize={isMobile ? "12px" : "18px"}
          fontWeight="bold"
          flexDir={isMobile ? "column" : "row"}
          w="fit-content"
          textAlign="center"
        >
          <Text>
            João Vinícius Vitral
            <br />
            202010358111
          </Text>
          <Text>
            Marcelo Bracet
            <br />
            202010357611
          </Text>
        </Flex>
      )}
      
      <Flex justify='right' w='215px'>
        <AvatarGroup
          w='fit-content'
          size="lg"
        >
          <Avatar
            name="João Vinicius Vitral"
            src={joao_img}
          />
          <Avatar
            name="Marcelo Bracet"
            src={marcelo_img}
          />
        </AvatarGroup>
      </Flex>
    </Flex>
  );
}
