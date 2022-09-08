import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useApp } from "../../context";

export function Bissecao() {
  const [element, setElement] = useState(undefined);
  const { inputValues } = useApp();

  function Log10(x) {
    return Math.log(x) / Math.log(10);
  }

  function f(x) {
    return Math.pow(x, 2) - 4;
  }

  const createSolution = (a0, b0, eT) => {
    let sizeInterval = b0 - a0,
      pm,
      it,
      temp = [a0, b0],
      bolzano = f(a0) * f(b0) < 0;

    if (!bolzano) {
      setElement(
        <Flex justify='center'>
          Intervalo não satisfaz as condições do teorema de bolzano, entre com
          outro intervalo!
        </Flex>
      );
      return
    } else {
      it = Log10(b0 - a0);
      it -= Log10(eT);
      it /= Math.log(2);

      if (f(a0) == 0 || f(b0) == 0) {
        return setElement(
          <Flex align='center' flexDir="column">
            <p>O valor, {f(a0) == 0 ? a0 : b0} é a raiz da função</p>
          </Flex>
        );
      }

      while (sizeInterval > eT) {
        sizeInterval = b0 - a0;
        pm = (a0 + b0) / 2;

        if (f(pm) == 0) {
          setElement(
            <Flex align='center' flexDir="column">
              {element}
              <p>A solucao exata encontrada é: {pm}</p> 
            </Flex>
          );
          return;
        }
        
        if (f(a0) * f(pm) < 0 ) {
            b0 = pm;
        }
        else {
            a0 = pm;
        }
      }
        
      setElement(
        <Flex align="center" flexDir='column'>
          <p>Serão necessárias {Math.ceil(it)} iterações!</p>
          <p>Intervalo Inicial: [{temp[0]}-{temp[1]}]</p>
          <p>Intervalo final: [{a0.toFixed(5)}-{b0.toFixed(5)}]</p>
          <p>Solução aproximada: {((a0+b0)/2).toFixed(5)}</p>
        </Flex>
      );     
    };
  }

  useEffect(() => {
    if (inputValues[0]?.value && inputValues[1]?.value && inputValues[2]?.value) {
      setElement(undefined);
      if(inputValues[1] && inputValues[2])
        createSolution(
          Number(inputValues[1].value),
          Number(inputValues[2].value),
          Number(inputValues[0].value)
        );
    }
  }, [inputValues]);

  return <>{element}</>;
}
