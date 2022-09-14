import { memo } from 'react'

import { GoBook } from 'react-icons/go'
import { IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react'

const HomeButton = memo(props => {
    const { onClick } = props
    return (
        <Tooltip
            label="おすすめのレシピを見る"
            hasArrow
            fontSize="0.75rem"
            fontWeight="bold"
            bg={useColorModeValue('#79bd9a', 'cyan.300')}
            color={useColorModeValue('white', 'gray.800')}
            p="0.5rem"
            mt="0.79rem"
            mr="0.7rem"
            display={{ base: 'none', md: 'block' }}>
            <IconButton
                bg={{ base: useColorModeValue('orange.400', 'purple.900'), md: 'none' }}
                borderRadius={{ base: '100%', md: 'none' }}
                pl={{ base: '0.45rem', md: '0' }}
                icon={<GoBook size={24} />}
                aria-label="レシピ"
                variant="unstyled"
                _hover={{ top: '-1' }}
                onClick={onClick}
            />
        </Tooltip>
    )
})

export default HomeButton
