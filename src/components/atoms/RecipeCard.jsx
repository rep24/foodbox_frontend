import { GridItem, Image, Link, Text, Tooltip, useColorModeValue } from '@chakra-ui/react'

const RecipeCard = props => {
    const { onClick, image, text, title, rank, url } = props
    return (
        <GridItem
            textAlign="center"
            w={{ base: '150px', md: '220px' }}
            borderRadius="xl"
            onClick={() => onClick()}
            position="relative"
            _hover={{ opacity: '0.7' }}>
            <Text
                position="absolute"
                color="red.500"
                fontWeight="bold"
                top="2"
                left="2"
                p="1"
                bg="rgba(255,255,255,0.8)"
                borderRadius="50%">
                {rank}位!
            </Text>

            <Link href={url}>
                <Image
                    w={{ base: '150px', md: '220px' }}
                    h={{ base: '100px', md: '150px' }}
                    borderRadius="xl"
                    src={image}
                    objectFit="cover"
                />
                <Text
                    fontSize={{ base: 'lg', md: '2xl' }}
                    fontWeight="bold"
                    textAlign="left"
                    color={useColorModeValue('gray.600', 'purple.50')}>
                    {title}
                </Text>
                <Text
                    fontSize={{ base: 'xs', md: 'md' }}
                    textAlign="left"
                    color={useColorModeValue('gray.700', 'purple.50')}>
                    {text}
                </Text>
            </Link>
        </GridItem>
    )
}

export default RecipeCard
