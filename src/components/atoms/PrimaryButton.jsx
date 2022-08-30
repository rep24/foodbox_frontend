import { Button } from '@chakra-ui/react'

const PrimaryButton = props => {
    const { bg, type, children, onClick, mr, width, height } = props
    return (
        <Button
            bg={bg}
            mr={mr}
            w={width}
            h={height}
            color="white"
            _hover={{ opacity: 0.8 }}
            type={type}
            onClick={onClick}>
            {children}
        </Button>
    )
}

export default PrimaryButton
