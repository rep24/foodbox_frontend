import { useCallback, useState } from 'react'

import axios from '@/lib/axios'

import useMessage from './useMessage'

const useContact = () => {
    const { showMessage } = useMessage()
    const [contacts, setContacts] = useState()

    const contact = useCallback(
        async props => {
            const { user_id, body } = props
            axios
                .post('/api/contact', {
                    user_id: user_id,
                    body: body,
                })
                .then(() => {
                    showMessage({ title: '送信しました!!', status: 'info' })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        [showMessage],
    )
    const getContacts = useCallback(async () => {
        axios
            .get('/api/contact')
            .then(res => {
                setContacts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    const deleteContact = useCallback(
        async id => {
            axios
                .delete(`/api/contact/${id}`)
                .then(() => {
                    showMessage({ title: '削除しました!!', status: 'info' })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        [showMessage],
    )
    return { contact, getContacts, contacts, deleteContact }
}

export default useContact
