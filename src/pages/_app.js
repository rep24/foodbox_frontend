import { useAuth } from '@/hooks/auth'
import { Center, ChakraProvider, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }) => {
    const { user } = useAuth()
    const router = useRouter()
    useEffect(() => {
        if (!user && router.pathname !== '/') {
            router.push('/')
        }
    }, [])

    return (
        <ChakraProvider>
            {!user && router.pathname !== '/' && router.pathname !== '/register' && router.pathname !== '/forget' ? (
                <Center h="100vh" w="100vw">
                    <Spinner color="orange.500" size="xl" />
                </Center>
            ) : (
                <Component {...pageProps} />
            )}
        </ChakraProvider>
    )
}

export default App
