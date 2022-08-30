import { GridItem, Image, Text, useColorModeValue } from '@chakra-ui/react'

const FoodCard = props => {
    const { title, text, id, onClick, image } = props

    return (
        <GridItem
            onClick={() => onClick(id)}
            textAlign="left"
            w={{ base: '150px', md: '220px' }}
            mb="1rem"
            cursor="pointer"
            _hover={{ opacity: '0.7' }}>
            <Image
                src={image}
                borderRadius="xl"
                objectFit="cover"
                w={{ base: '150px', md: '220px' }}
                h={{ base: '100px', md: '150px' }}
            />
            <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="bold"
                borderLeft={useColorModeValue('7px solid #66cc99', '7px solid #ffff99')}
                pl="1rem"
                mb="0.5rem"
                mt="0.5rem">
                {title}
            </Text>
            <Text fontSize={{ base: 'xs', md: 'md' }} fontFamily="fantasy">
                {text}
            </Text>
        </GridItem>
    )
}

export default FoodCard
