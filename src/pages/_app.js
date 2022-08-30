import { useAuth } from '@/hooks/auth'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }) => {
    const { user } = useAuth()
    const router = useRouter()
    useEffect(() => {
        // if (!user && router.pathname !== '/') {
        //     // CSR用リダイレクト処理
        //     window.location.href = '/'
        // }
    }, [])

    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App
