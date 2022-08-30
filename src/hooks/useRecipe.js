import { useCallback, useState } from 'react'

import axios from 'axios'

const useRecipe = () => {
    const [rankerRecipe, setRankerRecipe] = useState()
    const [suggestRecipe, setSuggestRecipe] = useState()

    const getRankerRecipe = useCallback(() => {
        setTimeout(() => {
            axios
                .get(process.env.NEXT_PUBLIC_API_KEY1)
                .then(res => {
                    setRankerRecipe(res.data.result)
                })
                .catch(err => {
                    console.log(err)
                })
        }, 1000)
    }, [])

    const getSuggestRecipe = useCallback(() => {
        setTimeout(() => {
            axios
                .get(process.env.NEXT_PUBLIC_API_KEY2)
                .then(res => {
                    setSuggestRecipe(res.data.result)
                })
                .catch(err => {
                    console.log(err)
                })
        }, 3000)
    }, [])

    return { getRankerRecipe, rankerRecipe, getSuggestRecipe, suggestRecipe }
}

export default useRecipe
