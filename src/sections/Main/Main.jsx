import React from "react";
import { Flex, Input } from "@chakra-ui/react";
import { Form } from '../../component'
import { Lagrange, NewtonRaphson, Bissecao } from "../../models";
import { useApp } from "../../context";


export function Main() {
    const {
        funcObj,
        inputValues,
        setInputValues,
        funcType
    } = useApp();

    const handleValue = (e, item) => {
        if (funcType == 'bissecao') {
        switch (item.id) {
            case 0:
            inputValues[0].value = e.target.value;
            setInputValues([inputValues[0], inputValues[1], inputValues[2]]);
            break;
            case 1:
            inputValues[1].value = e.target.value;
            setInputValues([inputValues[0], inputValues[1], inputValues[2]]);
            break;
            case 2:
            inputValues[2].value = e.target.value;
            setInputValues([inputValues[0], inputValues[1], inputValues[2]]);
            break;
            case 3:
            inputValues[3].value = e.target.value;
            setInputValues([inputValues[0], inputValues[1], inputValues[2]]);
            break;
            default:
            break;
        }
        } else {
        switch (item.id) {
            case 0:
            inputValues[0].value = e.target.value;
            setInputValues([inputValues[0], inputValues[1], inputValues[2], inputValues[3]]);
            break;
            case 1:
            inputValues[1].value = e.target.value;
            setInputValues([inputValues[0], inputValues[1], inputValues[2], inputValues[3]]);
            break;
            case 2:
            inputValues[2].value = e.target.value;
            setInputValues([inputValues[0], inputValues[1], inputValues[2], inputValues[3]]);
            break;
            case 3:
            inputValues[3].value = e.target.value;
            setInputValues([inputValues[0], inputValues[1], inputValues[2], inputValues[3]]);
            break;
            default:
            break;
        }
        }
    };

    return (
        <Flex
            gap="15px"
            flexDir="column"
            m="0 auto"
            p="20px 0"
            maxWidth='900px'
        >
        <Form />
        <Flex flexDir="column" gap="10px" overflow='auto'>
            {funcType == 'bissecao' && funcObj.input && (
            <>
                <Input
                    placeholder={funcObj.input[0]?.name || ''}
                    onChange={(e) => handleValue(e, funcObj.input[0])}
                    type={funcObj.input[0].type}
                    value={inputValues[0]?.value}
                />
                <Flex gap='15px'>
                <Input
                    placeholder={funcObj.input[1]?.name || ''}
                    onChange={(e) => handleValue(e, funcObj.input[1])}
                    type={funcObj.input[1].type}
                    value={inputValues[1]?.value}
                    maxLength='6'
                />
                <Input
                    placeholder={funcObj.input[2]?.name || ''}
                    onChange={(e) => handleValue(e, funcObj.input[2])}
                    type={funcObj.input[2].type}
                    value={inputValues[2]?.value}
                    maxLength='6'
                />
                </Flex>
            <Bissecao />
            </>
            )}
            {funcType == 'newton' && funcObj.input && (
            <>
                <Input
                    placeholder={funcObj.input[0]?.name || ''}
                    onChange={(e) => handleValue(e, funcObj.input[0])}
                    type={funcObj.input[0].type}
                    value={inputValues[0]?.value}
                />
                <Flex gap='15px'>
                <Input
                    placeholder={funcObj.input[1]?.name || ''}
                    onChange={(e) => handleValue(e, funcObj.input[1])}
                    type={funcObj.input[1].type}
                    value={inputValues[1]?.value}
                    maxLength='6'
                />
                <Input
                    placeholder={funcObj.input[2]?.name || ''}
                    onChange={(e) => handleValue(e, funcObj.input[2])}
                    type={funcObj.input[2].type}
                    value={inputValues[2]?.value}
                    maxLength='6'
                />
                <Input
                    placeholder={funcObj.input[3]?.name || ''}
                    onChange={(e) => handleValue(e, funcObj.input[3])}
                    type={funcObj.input[3].type}
                    value={inputValues[3]?.value}
                    maxLength='6'
                />
                </Flex>
                <NewtonRaphson />
            </>
            )}
            {funcType == 'lagrange' && <Lagrange />}
        </Flex>
        </Flex>
    )
}
