import { memo } from 'react'

import { FaSun, FaMoon } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/react'

const ModeToggleButton = memo(props => {
    const { onClick, colorMode } = props
    return (
        <IconButton
            aria-label="DarkMode Switch"
            variant="unstyled"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={onClick}
        />
    )
})

export default ModeToggleButton
