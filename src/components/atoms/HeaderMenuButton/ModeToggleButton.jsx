import { memo } from 'react'

import { FaSun, FaMoon } from 'react-icons/fa'
import { IconButton, useColorModeValue } from '@chakra-ui/react'

const ModeToggleButton = memo(props => {
    const { onClick, colorMode } = props
    return (
        <IconButton
            bg={{ base: useColorModeValue('orange.400', 'purple.900'), md: 'none' }}
            borderRadius={{ base: '100%', md: 'none' }}
            pl={{ base: '0.8rem', md: '0' }}
            aria-label="DarkMode Switch"
            variant="unstyled"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={onClick}
        />
    )
})

export default ModeToggleButton
