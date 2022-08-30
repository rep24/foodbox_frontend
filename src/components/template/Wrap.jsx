import { Box } from '@chakra-ui/react'

const Wrap = props => {
    const { children } = props
    return (
        <Box maxW={{ base: '600px', md: '1024px' }} mr="auto" ml="auto">
            {children}
        </Box>
    )
}

export default Wrap
