import React, { useEffect, useState } from 'react'
import { Flex, PinInput, Text, PinInputField } from '@chakra-ui/react'
import { useApp } from "../../context";

export const NewtonRaphson = () => {
  const [element, setElement] = useState(<></>)
  const [newtonArray, setNewtonArray] = useState([])
  const { inputValues, setNewtonValues, newtonValues } = useApp();
  
  useEffect(() => {
    if(newtonArray[0] &&
      newtonArray[1] &&
      newtonArray[2] && 
      newtonArray[3]
    )
      if (
        inputValues[0]?.value &&
        inputValues[1]?.value &&
        inputValues[2]?.value &&
        inputValues[3]?.value
      )
        createNewton()
    
  },[inputValues, newtonArray])

  function handleChangeValues(e) {
    setNewtonValues(e)
    setNewtonArray(e.split(''))
  }
  
  function createNewton() {
    if(newtonArray[0] && newtonArray[1] && newtonArray[2] && newtonArray[3])
      if (newtonArray.length == 4) {
        var x0, Fxn, Fdxn, iT = 0,
            a = newtonArray[0],
            b = newtonArray[1],
            c = newtonArray[2],
            d = newtonArray[3],
            eT = inputValues[0]?.value,
            xn = inputValues[3]?.value
        
        do {
          x0 = xn;
          // Calculando o f(x):
          Fxn = a * Math.pow(+x0, 3) + (+b * Math.pow(+x0, 2) - +c * +x0 + +d);
          
          //Calcula a derivada f'(x)
          Fdxn = 3 * +a * Math.pow(x0, 2) + 2 * +b * +x0 - +c;
          xn = +x0 - (+Fxn / +Fdxn);
          iT += 1;
    
        } while (Math.abs(+xn - x0) >= +eT || Math.abs(+Fxn) >= +eT)
        
        setElement(
          <>
            <Text>
              x0 = {x0}
            </Text>
            <Text>
              Iterações = {iT}
            </Text>
            <Text>
              O resultado final é: {xn}
            </Text>
          </>
        )
      }
  }

  return (
    <Flex align="center" gap='10px' flexDir="column" mt="10px">
      <Flex align="center" justify="center" gap="10px" m="10px auto">
        <PinInput onChange={handleChangeValues}>
          <PinInputField />
          <Text>
            x³ +
          </Text>
          <PinInputField />
          <Text>
            x² -
          </Text>
          <PinInputField />
          <Text>
            x +
          </Text>
          <PinInputField />
        </PinInput>
      </Flex>
      <Text>
        Considerando que a função seja:{" "}
        {newtonValues[0]}x<sup>3</sup> + {newtonValues[1]}x<sup>2</sup> - {newtonValues[2]}x {newtonValues[3] && ' + ' +newtonValues[3] }
      </Text>

      {newtonArray[0] &&
      newtonArray[1] &&
      newtonArray[2] && 
      newtonArray[3] && (
        <Flex
          flexDir='column'
          justify='center'
          align='center'
          w='fit-content'
          p='15px'
          borderTop='1px solid black'
          borderBottom='1px solid black'
          mt='20px'
        >
          {element}
        </Flex>
      )}
    </Flex>
  );
}