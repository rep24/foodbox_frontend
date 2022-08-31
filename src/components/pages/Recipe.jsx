import { useEffect, memo } from 'react'

import { Box, Center, Grid, Spinner, Text, useColorModeValue } from '@chakra-ui/react'

import RecipeCard from '../atoms/RecipeCard'
import Wrap from '../template/Wrap'
import useRecipe from '../../hooks/useRecipe'

export async function getStaticProps() {}

const Recipe = memo(() => {
    const { getRankerRecipe, rankerRecipe, getSuggestRecipe, suggestRecipe } = useRecipe()

    useEffect(() => {
        getRankerRecipe()
        getSuggestRecipe()
    }, [])

    return (
        <Wrap>
            <Box margin="auto">
                <Text color={useColorModeValue('gray.600', 'purple.50')} fontWeight="bold" fontSize="3xl" mb="2">
                    人気のレシピ(外部サイト)
                </Text>
                <Grid
                    templateColumns={{
                        base: 'repeat(4,1fr)',
                        md: 'repeat(4,1fr)',
                    }}
                    gap={{ base: 3, md: 5 }}
                    maxW="1080px"
                    h={{ base: '400px', md: '500px' }}
                    m="auto"
                    overflow="auto">
                    {rankerRecipe ? (
                        rankerRecipe.map(data => (
                            <RecipeCard
                                key={data.rank}
                                rank={data.rank}
                                title={data.recipeTitle}
                                image={data.foodImageUrl}
                                url={data.recipeUrl}
                                text={data.recipeDescription}
                            />
                        ))
                    ) : (
                        <Center h="30vh" w="100vh">
                            <Spinner color="orange.500" size="xl" />
                        </Center>
                    )}
                </Grid>
                <Text color={useColorModeValue('gray.600', 'purple.50')} fontWeight="bold" fontSize="3xl" mb="2" mt="4">
                    あなたにおすすめのレシピ(とりあえず今は牛肉)
                </Text>
                <Grid
                    templateColumns={{
                        base: 'repeat(4,1fr)',
                        md: 'repeat(4,1fr)',
                    }}
                    gap={{ base: 3, md: 6 }}
                    maxW="1080px"
                    h={{ base: '600px', md: '400px' }}
                    m="auto"
                    overflow="auto">
                    {suggestRecipe ? (
                        suggestRecipe.map(data => (
                            <RecipeCard
                                key={data.rank}
                                rank={data.rank}
                                title={data.recipeTitle}
                                image={data.foodImageUrl}
                                url={data.recipeUrl}
                                text={data.recipeDescription}
                            />
                        ))
                    ) : (
                        <Center h="30vh" w="100vh">
                            <Spinner color="orange.500" size="xl" />
                        </Center>
                    )}
                </Grid>
            </Box>
        </Wrap>
    )
})

export default Recipe
