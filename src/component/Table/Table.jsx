import React, { useEffect, useState } from 'react'
import {
  Table as Tbl,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  Flex
} from "@chakra-ui/react";
import { useApp } from '../../context/AppContext';

export function Table({ values, setValues }) {  
  const { userX, setUserX } = useApp()
  
  useEffect(() => {
    if(values)
      values.map((item, idx) => {
        if (item.id !== idx) {
          values.splice(idx, 1)
        }
      })
  },[values])

  const handleChange = (num, idx, type) => {
    if (num !== undefined) {
      if (type == 'x') {
        let value = values[idx]
        value.x = num
        setValues([...values, value])
      } else if (type == 'y') {
        let value = values[idx]
        value.y = num
        setValues([...values, value])
      }
    }
  }

  return (
    <TableContainer>
      <Tbl variant="simple">
        <TableCaption>Interpolação de Lagrange - Polinômio de Lagrange</TableCaption>
        <Thead>
          <Tr as={Flex} justifyContent='space-around'>
            <Th>X</Th>
            <Th>Y</Th>
          </Tr>
        </Thead>
        <Tbody as={Flex} flexDir='column'>
          <Flex flexDir='column' >
            {values?.map((item, idx) => {
              if (item.id === idx) {
                return (
                  <Tr key={idx}>
                    <Td>
                      <Input
                        textAlign='center'
                        placeholder={"x" + item.id}
                        value={values[item.id]?.x}
                        onChange={(e) => handleChange(e.target.value, item.id, "x")}
                      />
                    </Td>
                    <Td>
                      <Input
                        textAlign='center'
                        placeholder={"y" + item.id}
                        value={values[item.id]?.y}
                        onChange={(e) => handleChange(e.target.value, item.id, "y")}
                      />
                    </Td>
                  </Tr>
                )
              }
            })}
          </Flex>
          <Input maxW='200px' m='15px auto 0' placeholder='Valor de x' onChange={e => setUserX(e.target.value)} value={userX} />
        </Tbody>
      </Tbl>
    </TableContainer>
  );
}
