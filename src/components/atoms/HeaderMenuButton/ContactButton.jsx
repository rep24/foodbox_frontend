import { memo } from 'react'

import { ChatIcon } from '@chakra-ui/icons'
import { IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react'

const ContactButton = memo(props => {
    const { onOpen } = props
    return (
        <Tooltip
            label="要望・お問い合わせ"
            hasArrow
            fontSize="0.75rem"
            fontWeight="bold"
            bg={useColorModeValue('#79bd9a', 'cyan.300')}
            color={useColorModeValue('white', 'gray.800')}
            mt="0.9rem"
            p="0.5rem"
            display={{ base: 'none', md: 'block' }}>
            <IconButton
                bg={{ base: useColorModeValue('orange.400', 'purple.900'), md: 'none' }}
                borderRadius={{ base: '100%', md: 'none' }}
                onClick={onOpen}
                icon={<ChatIcon fontSize="xl" />}
                aria-label="お問い合わせ"
                variant="unstyled"
                _hover={{ top: '-1' }}
            />
        </Tooltip>
    )
})

export default ContactButton
