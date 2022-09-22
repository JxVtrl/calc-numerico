import React, { useState, useEffect } from 'react';
import { Table } from '../../component/Table'
import { Flex, Text } from "@chakra-ui/react";
import { funcTypes } from '../../data';
import { useApp } from '../../context/AppContext';

export const Lagrange = () => {
    const { userX } = useApp()
    const [x, setX] = useState('')
    const [valorFinal, setValorFinal] = useState(0)
    const [calculos, setCalculos] = useState([])
    const [calculos2, setCalculos2] = useState([])
    const [values, setValues] = useState(funcTypes.types[2].input)

    const createLagrange = () => {
        let array = []
        if(values)
            for (let i = 0; i < values.length; i++) {
                let calculoN = ''
                let calculoD = ''

                for (let j = 0; j < values.length; j++){
                    if (j == 0) {
                        if (i !== j)
                            calculoN = `(x-${values[j].x})`                       
                    } else {
                        if (i !== j)
                            calculoN += `(x-${values[j].x})`                        
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
                                calculoD += `(${values[i].x}-${values[j].x})`

                            }
                        }
                    }
                }

                array.push([calculoN, calculoD])
            }

        setCalculos(array)
    }

    useEffect(() => {
        setX(userX)

        if (values && userX)
            createLagrange()
    }, [userX, values])
    
    useEffect(() => {

        const calcular = () => {
            if (userX !== '') {
                let soma = 0
                for (let i = 0; i < calculos.length; i++){
                    let temp = calculos[i][0].replaceAll(')(', ')*(')
                    let temp2 = calculos[i][1].replaceAll(')(', ')*(')
                    soma += eval(temp.replaceAll('x', userX) +'/'+ temp2)
                }
                setValorFinal(soma)    
            }
        }

        if(calculos.length > 0)
            calcular()
    },[calculos])

    return (
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
            {userX && (
                <>
                    <Flex>
                        <Text mt='30px'>
                            Substituindo os valores dentro da fórmula =&gt; P<sub>n</sub>(x) = L<sub>n</sub> * f(x<sub>n</sub>)
                        </Text>
                    </Flex>
                    <Flex>
                        <Text mt='30px' align='center'>
                            P<sub>{calculos.length}</sub>(x) = {
                                calculos.map((item, idx) => {
                                    return (
                                        <>
                                            {values[idx].y}*({
                                                eval(
                                                    `${eval(
                                                        item[0]
                                                            .replaceAll(')(', ')*(')
                                                            .replaceAll('x', `${userX}`)
                                                    )}/${item[1].replaceAll(')(', ')*(')}`
                                                     
                                                ).toFixed(5)
                                            }){idx !== calculos.length - 1 && '  + '}
                                        </>
                                    )
                                })
                            }
                        </Text>
                    </Flex>
                    <Flex>
                        <Text mt='30px' align='center'>
                            Aproximação da raiz: {valorFinal.toFixed(5)}
                        </Text>
                    </Flex>
                </>
            )}
        </Flex>
    )
}