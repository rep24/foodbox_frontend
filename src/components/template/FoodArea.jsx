import { memo, useLayoutEffect, useState, useCallback } from 'react'

import { Box, Center, Grid, Spinner, useDisclosure } from '@chakra-ui/react'

import AddCard from '../atoms/AddCard'
import FoodCard from '../atoms/FoodCard'
import FoodEditModal from '../molcules/FoodEditModal'
import FoodCreateModal from '../molcules/FoodCreateModal'

import useBox from '../../hooks/useBox'
import useFoods from '../../hooks/useFoods'
import { useAuth } from '@/hooks/auth'

const FoodArea = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user } = useAuth()

    const { getBox, box, loading } = useBox()
    const { selectedFood, onSelectFood } = useFoods()

    const [Open, Close] = useState(false)

    useLayoutEffect(() => {
        Close(false)
        user ? getBox(user.id) : loading
    }, [Open])

    const onClickFood = useCallback(
        id => {
            onSelectFood({ id, onOpen, box })
        },
        [box, onOpen, onSelectFood],
    )

    return (
        <>
            {loading ? (
                <Center h="80vh" w="100vh">
                    <Spinner color="orange.500" size="xl" />
                </Center>
            ) : (
                <Box h="100%" mt={10} overflow="auto">
                    <Center h="100%">
                        <Grid
                            templateColumns={{
                                base: 'repeat(3,1fr)',
                                md: 'repeat(4,1fr)',
                            }}
                            gap={{ base: 3, md: 5 }}
                            maxW="1080px"
                            m="auto">
                            {box ? (
                                box.map(food => (
                                    <FoodCard
                                        id={food.id}
                                        key={food.id}
                                        title={food.name}
                                        text={`賞味期限:${food.deadline}`}
                                        image={food.image}
                                        onClick={onClickFood}
                                    />
                                ))
                            ) : (
                                <Center
                                    textAlign="center"
                                    w={{ base: '150px', md: '250px' }}
                                    bg="gray.300"
                                    borderRadius="xl">
                                    <Spinner color="teal.500" size="xl" />
                                </Center>
                            )}
                            <AddCard onClick={onClickFood} />
                        </Grid>
                        {selectedFood ? (
                            <FoodEditModal food={selectedFood} isOpen={isOpen} onClose={onClose} Close={Close} />
                        ) : (
                            <FoodCreateModal isOpen={isOpen} onClose={onClose} Close={Close} />
                        )}
                    </Center>
                </Box>
            )}
        </>
    )
})

export default FoodArea
