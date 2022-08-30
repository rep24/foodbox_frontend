import { useCallback } from 'react'

import axios from '@/lib/axios'

import useMessage from './useMessage'

const useAdmin = () => {
    const { showMessage } = useMessage()

    const deleteFood = useCallback(
        async id => {
            axios
                .delete(`/api/foods/${id}`)
                .then(() => {
                    showMessage({ title: '削除しました!!', status: 'info' })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        [showMessage],
    )
    return { deleteFood }
}

export default useAdmin
