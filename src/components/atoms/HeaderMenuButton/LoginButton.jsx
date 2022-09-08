import { memo } from 'react'

import { FaDoorClosed } from 'react-icons/fa'
import { IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react'

const HomeButton = memo(props => {
    const { onClick } = props
    return (
        <Tooltip
            label="ログイン"
            hasArrow
            fontSize="0.75rem"
            fontWeight="bold"
            bg={useColorModeValue('#79bd9a', 'cyan.300')}
            color={useColorModeValue('white', 'gray.800')}
            p="0.5rem"
            mt="0.8rem"
            mr="0.7rem">
            <IconButton
                icon={<FaDoorClosed size={24} />}
                aria-label="ログイン"
                variant="unstyled"
                _hover={{ top: '-1' }}
                onClick={onClick}
            />
        </Tooltip>
    )
})

export default HomeButton
