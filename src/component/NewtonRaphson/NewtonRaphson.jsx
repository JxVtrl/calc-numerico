import React, { useEffect, useState } from 'react'
import { Flex, PinInput, Text, PinInputField } from '@chakra-ui/react'
import { useApp } from "../../context";


export const NewtonRaphson = () => {
  const [element, setElement] = useState(<></>)
  const { inputValues } = useApp();

  useEffect(() => {
    console.log(inputValues)
  },[inputValues])
  

  function f(x) {
    return 2 * x - Math.sin(x) - 4;
    //   Ax³+Bx²-Cx+D => A B C D
  }
  
  function handleChangeValues(e) {
    const digits = e.split('')
    console.log(digits)
  }

  function createNewton() {
    var element = <></>
    
    do {
      x0 = xn;
      Fxn = (a*( x0 * x0 * x0 )) + (b*(x0*x0) - (c*x0) + d); //Calcula a função f(x)
      Fdxn = ((3*a)*x0*x0)+((2*b)*x0)-c; //Calcula a derivada f'(x)
      xn = x0 - ( Fxn / Fdxn );
      iT += 1;
      printf( "\n Iteracao = %d", k ); //exibe a iteração atual
      //    printf( "\nx0 = %f\nxn = %f", x0, xn); //exibe os valores de x0 e xn

    } while (Abs(xn-x0)>=E||Abs(Fxn)>=E)
  }

  var a, b, c, d, x0, xn, Fxn, Fdxn, eT, iT;

  return (
    <Flex align="center" flexDir="column" mt="10px">
      <Text>
        Considerando que a função seja:{" "}
        <b>
          Ax<sup>3</sup> + Bx<sup>2</sup> - Cx + D
        </b>
      </Text>
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

      {/* {createNewton()} */}



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