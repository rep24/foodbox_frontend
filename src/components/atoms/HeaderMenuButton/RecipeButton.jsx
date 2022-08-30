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
            mr="0.7rem">
            <IconButton
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
