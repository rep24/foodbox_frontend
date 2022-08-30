import { Center, GridItem, Image, Link, Tooltip, useColorModeValue } from '@chakra-ui/react'

const AddCard = props => {
    const { onClick } = props
    return (
        <Tooltip label="食材を追加する!" hasArrow fontSize="1rem" fontWeight="bold" bg="orange.400" p="1rem">
            <GridItem
                textAlign="center"
                bg={useColorModeValue('gray.300', 'gray.600')}
                w={{ base: '150px', md: '220px' }}
                h={{ base: '100px', md: '150px' }}
                borderRadius="xl"
                onClick={() => onClick()}
                _hover={{ opacity: '0.7' }}>
                <Link>
                    <Center h="100%">
                        <Image
                            boxSize={{ base: 10, md: 20 }}
                            opacity={useColorModeValue('1', '0.7')}
                            m="auto"
                            src="/images/plus.png"
                        />
                    </Center>
                </Link>
            </GridItem>
        </Tooltip>
    )
}

export default AddCard
