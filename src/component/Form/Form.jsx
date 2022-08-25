import React, { useState } from "react";
import { Select, Flex, Input } from "@chakra-ui/react";
import { useApp } from "../../context";
import { formatInterval } from "../../helpers/formatInterval";
import { Lagrange } from "../Lagrange/Lagrange";

export function Form() {
  const [selected, setSelected] = useState(false);
  const { setFuncType, setShowModal, funcObj, inputValues, setInputValues } =
    useApp();

  const handleSelect = (e) => {
    if (e.target.value) {
      setFuncType(e.target.value);
      setShowModal(true);
      setSelected(true);
    } else {
      setFuncType(undefined);
      setSelected(false);
      setShowModal(false);
    }
  };

  const handleValue = (e, item) => {
    switch (item.id) {
      case 0:
        inputValues[0].value = e.target.value;
        setInputValues([inputValues[0], inputValues[1]]);
        break;
      case 1:
        inputValues[1].value = formatInterval(e.target.value);
        setInputValues([inputValues[0], inputValues[1]]);
        break;
      default:
        break;
    }
  };

  return (
    <Flex gap="15px" flexDir="column" m="0 auto" p="20px 0">
      <Select
        placeholder="Selecione o método"
        cursor="pointer"
        onChange={handleSelect}
      >
        <option value="bissecao">Bisseção</option>
        <option value="newton">Newton Raphson</option>
        <option value="lagrange">LaGrange</option>
      </Select>
      <Flex flexDir="column" gap="10px">
        {selected && funcObj.name !== 'lagrange' ?
          funcObj.input?.map((item, index) => (
            <Input
              key={index}
              placeholder={item.name}
              onChange={(e) => handleValue(e, item)}
              type={item.type}
              value={inputValues[index]?.value}
            />
          )) : funcObj.name == 'lagrange' && <Lagrange />}
      </Flex>
    </Flex>
  );
}
