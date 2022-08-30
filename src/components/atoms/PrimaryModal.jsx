import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'

const PrimaryModal = props => {
    const { isOpen, onClose, title, children } = props
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay>
                <ModalContent bg="rgba(255,255,255,0.95)" color="gray.800">
                    <ModalHeader fontSize="2xl">{title}</ModalHeader>
                    <ModalCloseButton />
                    {children}
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}

export default PrimaryModal
