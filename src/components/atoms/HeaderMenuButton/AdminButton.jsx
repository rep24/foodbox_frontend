import { memo } from 'react'

import { RiKey2Fill } from 'react-icons/ri'
import { IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react'

const AdminButton = memo(props => {
    const { onClick } = props
    return (
        <Tooltip
            label="Hello Administrator!"
            hasArrow
            fontSize="0.75rem"
            fontWeight="bold"
            bg={useColorModeValue('red', 'cyan.300')}
            color={useColorModeValue('white', 'gray.800')}
            p="0.5rem"
            mt="0.79rem"
            mr="0.7rem">
            <IconButton
                icon={<RiKey2Fill size={20} color={'#ff0000'} />}
                aria-label="レシピ"
                variant="unstyled"
                _hover={{ top: '-1' }}
                onClick={onClick}
            />
        </Tooltip>
    )
})

export default AdminButton
