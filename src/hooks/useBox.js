import { useCallback, useState } from 'react'

import axios from '@/lib/axios'

const useBox = () => {
    const [box, setBox] = useState()
    const [loading, setLoading] = useState(false)

    const getBox = useCallback(id => {
        //ログインしているユーザーのIDを仮置きしている。

        const url = `/api/box/${id}`
        setLoading(true)
        axios
            .get(url)
            .then(res => {
                setBox(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        setLoading(false)
    }, [])
    return { getBox, box, loading }
}

export default useBox
