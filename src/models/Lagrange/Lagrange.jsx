import React, { useState, useEffect } from 'react';
import { Table } from '../../component/Table'
import { Flex, Text } from "@chakra-ui/react";
import { useApp } from '../../context'
import { funcTypes } from '../../data';

export const Lagrange = () => {
    const [calculos, setCalculos] = useState([])
    const [values, setValues] = useState(funcTypes.types[2].input)

    const createLn = () => {
        let array = []
        if(values)
            for (let i = 0; i < values.length; i++) {
                let calculoN = ''
                let calculoD = ''

                for (let j = 0; j < values.length; j++){
                    if (j == 0) {
                        if (i !== j) {
                            calculoN = `(x-${values[j].x})`                        
                        }
                    } else {
                        if (i !== j){
                            calculoN += `(x-${values[j].x})`                        
                        }
                    }
                }
                
                for (let j = 0; j < values.length; j++){
                    if (j == 0) {
                        if(i !== j) {
                            calculoD = `(${values[i].x}-${values[j].x})`                        
                        }
                    } else {
                        if (i !== j) {
                            if (j == 1 && i == 0 ) {
                                calculoD += `(${values[i].x}-${values[j].x})`
                            } else {
                                calculoD += `*(${values[i].x}-${values[j].x})`

                            }
                        }
                    }
                }

                array.push([calculoN, calculoD])
            }
        setCalculos(array)
    }

    useEffect(() => {
        createLn()
    }, [values])

    return(
        <Flex flexDir='column' w='100%' align='center'>
            <Table values={values} setValues={setValues} />
            {values && (
                <Flex mt='10px'>
                    <Text fontWeight='bold'>O passo seguinte, e o que realmente acaba se tornando a dificuldade da interpolação de Lagrange, é o calculo dos valores de L(n). Esse cálculo será feito da seguinte forma:</Text>
                </Flex>
            )}
            <Flex mt='10px' align='center' flexDir='column'>
                {calculos?.map((item, idx) => {
                    return (
                        <Flex key={idx}>
                            <Text>
                                L<sub>{idx}</sub> = {item[0] + '/' + item[1]}
                            </Text>
                        </Flex>
                    )
                })}
            </Flex>
            <Flex>
                <Text mt='30px'>
                    Substituindo os valores dentro da fórmula =&gt; P<sub>n</sub>(x) = L<sub>n</sub> * f(x<sub>n</sub>)
                </Text>
            </Flex>
            <Flex>
                <Text mt='30px' align='center'>
                    P<sub>{calculos.length}</sub>(x) = {calculos.map((item, idx) => {
                        return (
                            <Flex key={idx}>
                                <br />{values[idx].y} {''}*({item[0] + '/' + eval(item[1]).toFixed(5)}){'  +'}
                            </Flex>
                        )
                    })}
                </Text>
            </Flex>
        </Flex>
    )
}