import { useEffect, useState } from 'react'

import { Box, Flex, Grid, Image, Spinner, Text, Tooltip, useDisclosure } from '@chakra-ui/react'

import AdminFoodModal from '@/components/molcules/AdminFoodModal'
import useAdmin from '@/hooks/useAdmin'
import useFoods from '@/hooks/useFoods'

const Foods = () => {
    const { foodIndex, foods } = useFoods()
    const { deleteFood } = useAdmin()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [deleted, setdeleted] = useState(false)

    useEffect(() => {
        setdeleted(false)
        foodIndex()
    }, [deleted])

    return (
        <>
            <Grid overflow="auto" h="600px" w="100%" mb={3}>
                {foods ? (
                    foods.map(food => (
                        <Flex borderBottom="1px solid #11B7DA" pb={2} key={food.id} mb={3}>
                            <Image w="7rem" marginRight="1" pr={3} src={food.image} objectFit="cover" />

                            <Box w="100%">
                                <Flex color="white" textAlign="center" alignItems="end">
                                    <Text fontSize={'2xl'} fontWeight="bold" mr={6}>
                                        {food.name}
                                    </Text>
                                    <Text fontSize={'sm'}>{food.created_at}</Text>
                                </Flex>

                                <Flex justify="space-between" textAlign="center" alignItems="center">
                                    <Text color="white" fontSize={'lg'}>
                                        カテゴリーID: {food.category_id}
                                    </Text>
                                    <Flex>
                                        <Text color="#11B7DA" fontWeight="bold" mr={3}>
                                            編集
                                        </Text>
                                        <Text
                                            color="#FF3975"
                                            fontWeight="bold"
                                            cursor="pointer"
                                            onClick={() => {
                                                deleteFood(food.id)
                                                setdeleted(true)
                                            }}>
                                            削除
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                    ))
                ) : (
                    <Spinner thickness="3px" size="xl" color="#FF3975" />
                )}
            </Grid>
            <Tooltip
                label="食材を追加する"
                hasArrow
                fontSize="1rem"
                fontWeight="bold"
                bg="#11B7DA"
                color="white"
                p="0.5rem"
                mt="0.8rem">
                <Image src="/images/plus.png" h="3rem" />
            </Tooltip>

            <AdminFoodModal isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default Foods