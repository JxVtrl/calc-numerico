import React, { useEffect, useState } from "react";
import { Select, Flex, Input } from "@chakra-ui/react";
import { useApp } from "../../context";
import { Lagrange, NewtonRaphson, Bissecao } from "../../models";

export function Form() {
  const {
    setFuncType,
    setShowModal,
    funcObj,
    inputValues,
    setInputValues,
    funcType
  } = useApp();

  const handleSelect = (e) => {
    if (e.target.value) {
      setFuncType(e.target.value);
      setShowModal(true);
    } else {
      setFuncType(undefined);
      setShowModal(false);
    }
  };



  return (
    <Select
      placeholder="Selecione o método"
      cursor="pointer"
      onChange={handleSelect}
    >
      <option value="bissecao">Bisseção</option>
      <option value="lagrange">LaGrange</option>
      <option value="newton">Newton Raphson</option>
    </Select>
  );
}
