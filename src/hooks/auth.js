import { useEffect } from 'react'
import { useRouter } from 'next/router'

import useSWR from 'swr'
import axios from '@/lib/axios'

import useMessage from './useMessage'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const { showMessage } = useMessage()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const regist = async ({ ...props }) => {
        await csrf()

        axios
            .post('/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error
                showMessage({
                    title: Object.values(error.response.data.errors).flat(),
                })
            })
    }

    const login = async ({ setStatus, ...props }) => {
        await csrf()

        setStatus(null)

        axios
            .post('/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error
                showMessage({
                    title: 'ユーザー情報が存在しません。',
                })
            })
    }
    const forgotPassword = async ({ setError, setStatus, ...props }) => {
        await csrf()
        console.log(props)
        setError([])
        setStatus('お待ちください...')

        axios
            .post('/forgot-password', props)
            .then(() => {
                setStatus('メールを送信しました！')
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setError(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: router.query.token, ...props })
            .then(response => router.push('/login?reset=' + btoa(response.data.status)))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios.post('/email/verification-notification').then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/logout').then(() => mutate())
        }

        window.location.pathname = '/'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
        if (window.location.pathname === '/verify-email' && user?.email_verified_at)
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        regist,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
