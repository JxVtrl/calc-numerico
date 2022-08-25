import React, { useState, useEffect } from 'react';
import { Table } from '../Table'
import { Flex } from "@chakra-ui/react";
import { useApp } from '../../context'

export const Lagrange = () => {
    const [element, setElement] = useState(<></>)
    const { funcObj } = useApp()
    const [ln, setLn] = useState([])
    const [values, setValues] = useState(funcObj.input)

    const createLn = () => {
        for (let i = 0; i < values.length; i++){

            // numerador
            let numerador
            for (let j = 0; j < values.length; j++){
                if (j == 0) {
                    numerador = (values[i].x - values[j+1].x)
                } else {
                    numerador *= (values[i].x - values[j+1].x)
                }
            }
            
            // denominador
            let denominador
            for (let j = 0; j < values.length; j++){
                if (j == 0) {
                    denominador = (values[i].x - values[j+1].x)
                } else {
                    denominador *= (values[i].x - values[j+1].x)
                }
            }
            



        }
        
    }

    useEffect(() => {
        createLn()
    }, [values])

    return(
        <Flex flexDir='column' w='100%'>
            <Table values={values} setValues={setValues}/>
        </Flex>
    )
}