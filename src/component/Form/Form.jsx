import React from "react";
import { Select } from "@chakra-ui/react";
import { useApp } from "../../context";

export function Form() {
  const {
    setFuncType,
    setShowModal,
    resetValues
  } = useApp();

  const handleSelect = (e) => {
    if (e.target.value) {
      setFuncType(e.target.value);
      setShowModal(true);
    } else {
      setFuncType(undefined);
      setShowModal(false);
    }
    resetValues()
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
