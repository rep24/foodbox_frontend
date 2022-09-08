import { useCallback, useState } from 'react'

import axios from '@/lib/axios'

const useBox = () => {
    const [box, setBox] = useState()
    const [firstCategoryId, setFirstCategoryId] = useState('')
    const [firstParentId, setFirstParentId] = useState('')
    const [loading, setLoading] = useState(false)

    const getBox = useCallback(id => {
        const url = `/api/box/${id}`
        setLoading(true)
        axios
            .get(url)
            .then(res => {
                setBox(res.data)
                setFirstCategoryId(String(res.data[0].category_id))
                setFirstParentId(String(res.data[0].parent_id))
            })
            .catch(err => {
                console.log(err)
            })
        setLoading(false)
    }, [])
    return { getBox, box, loading, firstCategoryId, firstParentId }
}

export default useBox
