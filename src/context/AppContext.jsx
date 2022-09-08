import React, { createContext, useContext, useEffect, useState } from 'react'
import { funcTypes } from '../data'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [funcType, setFuncType] = useState(undefined)
    const [showModal, setShowModal] = useState(false)
    const [funcObj, setFuncObj] = useState({})
    const [inputValues, setInputValues] = useState([])
    const [newtonValues, setNewtonValues] = useState([])

    useEffect(() => {
        if(funcType)
            switch (funcType) {
                case 'bissecao':
                    setFuncObj(funcTypes.types[0])
                    break
                case 'newton':
                    setFuncObj(funcTypes.types[1])
                    break
                case 'lagrange':
                    setFuncObj(funcTypes.types[2])
                    break
            }
    }, [funcType])
    
    useEffect(() => {
        if (funcObj.name) {
            if (funcObj.name == 'bissecao') {
                setInputValues([
                    {
                        "id": 0,
                        "name": funcObj.input[0]?.name,
                        "value": undefined
                    },
                    {
                        "id": 1,
                        "name": funcObj.input[1]?.name,
                        "value": undefined
                    }
                ])
            } else {
                setInputValues([
                    {
                        "id": 0,
                        "name": funcObj.input[0]?.name,
                        "value": undefined
                    },
                    {
                        "id": 1,
                        "name": funcObj.input[1]?.name,
                        "value": undefined
                    },
                    {
                        "id": 2,
                        "name": funcObj.input[2]?.name,
                        "value": undefined
                    },
                    {
                        "id": 3,
                        "name": funcObj.input[3]?.name,
                        "value": undefined
                    }
                ])
            }
        }
    }, [funcObj])

    const resetValues = () => {
        setInputValues([])
        setNewtonValues([])
    }

    const value = {
        setFuncType,
        funcType,
        setShowModal,
        showModal,
        setFuncObj,
        funcObj,
        inputValues,
        setInputValues,
        setNewtonValues,
        newtonValues
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
