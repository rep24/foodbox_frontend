import { useCallback, useState } from 'react'

import axios from 'axios'

const useRecipe = () => {
    const [rankerRecipe, setRankerRecipe] = useState()
    const [suggestRecipe, setSuggestRecipe] = useState()

    const getRankerRecipe = useCallback(() => {
        axios
            .get(process.env.NEXT_PUBLIC_API_KEY1)
            .then(res => {
                setRankerRecipe(res.data.result)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const getSuggestRecipe = useCallback(async (parentId, categoryId) => {
        await axios
            .get(`${process.env.NEXT_PUBLIC_API_KEY2}${parentId}-${categoryId}`)
            .then(res => {
                setSuggestRecipe(res.data.result)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return { getRankerRecipe, rankerRecipe, getSuggestRecipe, suggestRecipe }
}

export default useRecipe
