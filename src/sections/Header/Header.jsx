import React from 'react'
import { jv_img, jb_img } from '../../images'
import { Flex, Text, AvatarGroup, Avatar, Tooltip } from '@chakra-ui/react'
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
      textAlign="center"
      flexShrink="0"
    >
      <Flex flexDir="column" fontSize="20px" w="215px">
        <Text fontWeight="bold">CÁLCULO NUMÉRICO</Text>
        <Text>
          <i>Professor: Aline Lunkes</i>
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
          <Text>João Vinícius Vitral</Text>
          <Text>João Victor Bilé</Text>
        </Flex>
      )}

      <Flex justify="right" w="215px">
        <AvatarGroup w="fit-content" size="lg">
          <Avatar
            name="João Vinicius Vitral"
            src={jv_img}
            cursor="pointer"
            _hover={{
              transform: "scale(1.1)",
            }}
          />
          <Avatar
            name="João Victor Bilé"
            src={jb_img}
            cursor="pointer"
            _hover={{
              transform: "scale(1.1)",
            }}
          />
        </AvatarGroup>
      </Flex>
    </Flex>
  )
}
