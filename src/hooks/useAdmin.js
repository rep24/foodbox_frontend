import { useCallback, useState } from 'react'

import axios from '@/lib/axios'

import useMessage from './useMessage'

const useAdmin = () => {
    const { showMessage } = useMessage()

    const [selectedTarget, setSelectedTarget] = useState(null)
    const [users, setUsers] = useState()

    const onSelectTarget = useCallback((id, onOpen, AllData) => {
        const targetData = AllData.find(data => {
            return data.id === id
        })
        setSelectedTarget(targetData ?? null)
        onOpen()
    })

    const getUsers = useCallback(() =>
        axios
            .get('/api/users')
            .then(res => setUsers(res.data))
            .catch(error => {
                console.log(error)
            }),
    )

    const createFood = useCallback(
        async props => {
            const { name, image, categoryId, parentId } = props
            console.log(props)
            axios
                .post(`/api/foods`, { name: name, image: image, category_id: categoryId, parent_id: parentId })
                .then(() => {
                    showMessage({
                        title: '登録しました!!',
                        status: 'info',
                    })
                })
                .catch(err => console.log(err))
        },
        [showMessage],
    )

    const editFood = useCallback(
        async props => {
            const { id, name, image, categoryId, parentId } = props
            axios
                .put(`/api/foods/${id}`, { name: name, image: image, category_id: categoryId, parent_id: parentId })
                .then(() => {
                    showMessage({
                        title: '編集しました!!',
                        status: 'info',
                    })
                })
                .catch(err => console.log(err))
        },
        [showMessage],
    )

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

    const editUser = useCallback(async props => {
        const { id, email } = props

        axios
            .put(`/api/users/${id}`, { email: email })
            .then(() => {
                showMessage({
                    title: '編集しました!',
                    status: 'info',
                })
            })
            .catch(err => {
                console.log(err)
            })
    })

    return { deleteFood, createFood, editFood, onSelectTarget, selectedTarget, editUser, getUsers, users }
}

export default useAdmin
