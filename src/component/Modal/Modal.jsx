import React from 'react'
import {
  Modal as ModalContainer,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { useApp } from '../../context'

export function Modal() {
    const { showModal, setShowModal, funcObj } = useApp()

    return (
        <ModalContainer
            isOpen={showModal}
            onOverlayClick={() => setShowModal(false)}
        >
            <ModalOverlay/>
            <ModalContent placeSelf='center' m={5} maxH='80vh' overflow='auto'>
                <ModalHeader>{funcObj?.name}</ModalHeader>
                <ModalCloseButton onClick={() => setShowModal(false)}/>
                <ModalBody>
                    {funcObj?.description}
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme='blue'
                        onClick={() => setShowModal(false)}
                    >
                        Fechar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </ModalContainer>
      
  )
}
