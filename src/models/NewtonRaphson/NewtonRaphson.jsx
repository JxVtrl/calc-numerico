import React, { useEffect, useState } from 'react'
import { Flex, PinInput, Text, PinInputField } from '@chakra-ui/react'
import { useApp } from "../../context";


export const NewtonRaphson = () => {
  const { inputValues, setNewtonValues, newtonValues } = useApp();

  function f(x) {
    return 2 * x - Math.sin(x) - 4;
    //   Ax³+Bx²-Cx+D => A B C D
  }
  
  function handleChangeValues(e) {
    const digits = e.split('')
    setNewtonValues(digits)
    console.log(`A = ${digits[0]} | B = ${digits[1]} | C = ${digits[2]} | D = ${digits[3]}`)
  }
  
  function createNewton() {
    var a, b, c, d, x0, xn, Fxn, Fdxn, eT, iT = 0;
    // var element = <></>
    
    do {
      x0 = xn;
      // Calculando o f(x):
      Fxn = a * Math.pow(x0, 3) + (b * Math.pow(x0, 2) - c * x0 + d);
      
      //Calcula a derivada f'(x)
      Fdxn = 3 * a * Math.pow(x0, 2) + 2 * b * x0 - c;
      xn = x0 - (Fxn / Fdxn);
      iT += 1;
      //    printf( "\nx0 = %f\nxn = %f", x0, xn); //exibe os valores de x0 e xn
    } while (Math.abs(xn-x0)>=eT||Math.abs(Fxn)>=eT)

    console.log(`Iterações = ${iT} | x0 = ${x0} | Xn = ${xn}`); //exibe a iteração atual
  }
  


  return (
    <Flex align="center" gap='10px' flexDir="column" mt="10px">
      <Flex align="center" justify="center" gap="10px" m="10px auto">
        <PinInput onChange={handleChangeValues}>
          <PinInputField />
          <Text>x³ +</Text>
          <PinInputField />
          <Text>x² -</Text>
          <PinInputField />
          <Text>x +</Text>
          <PinInputField />
        </PinInput>
      </Flex>
      <Text>
        Considerando que a função seja:{" "}
        {newtonValues[0]}x<sup>3</sup> + {newtonValues[1]}x<sup>2</sup> - {newtonValues[2]}x + {newtonValues[3]}
      </Text>


       {createNewton()}



    </Flex>
  );
}

// do
//     {
//         x0 = xn;
//         Fxn = (a*( x0 * x0 * x0 )) + (b*(x0*x0) - (c*x0) + d); //Calcula a função f(x)
//         Fdxn = ((3*a)*x0*x0)+((2*b)*x0)-c; //Calcula a derivada f'(x)
//         xn = x0 - ( Fxn / Fdxn );
//         k += 1;
//         printf( "\n Iteracao = %d", k ); //exibe a iteração atual
//         printf( "\nx0 = %f\nxn = %f", x0, xn); //exibe os valores de x0 e xn

//     } while(Abs(xn-x0)>=E||Abs(Fxn)>=E);

// printf("\n\n xn - x0 = %f\n",xn-x0);
// printf("O resultado final é: %f\n",xn); // x do zero real
// return 0;