import { useAuth } from '@/hooks/auth'
import { Box, Flex, useColorMode, useDisclosure } from '@chakra-ui/react'

import ContactButton from '../atoms/HeaderMenuButton/ContactButton'
import HomeButton from '../atoms/HeaderMenuButton/HomeButton'
import RecipeButton from '../atoms/HeaderMenuButton/RecipeButton'
import LogoutButton from '../atoms/HeaderMenuButton/LogoutButton'
import LoginButton from '../atoms/HeaderMenuButton/LoginButton'

import ModeToggleButton from '../atoms/HeaderMenuButton/ModeToggleButton'
import AdminButton from '../atoms/HeaderMenuButton/AdminButton'
import { useRouter } from 'next/router'
import React from 'react'
import ContactModal from '../molcules/ContactModal'

const Footer = props => {
    const { setPage } = props

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user, logout } = useAuth({ middleware: 'guest' })
    const router = useRouter()

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Box position="fixed" bottom="0" display={{ base: 'block', md: 'none' }}>
                <Flex as="nav" color="gray.50" align="center" pt={{ base: 1, md: 4 }} pb={{ base: 1, md: 4 }}>
                    <Flex align="center" fontSize="md" display={{ base: 'flex', md: 'flex' }} paddingTop="1">
                        {user ? (
                            <>
                                <Box pl={3} pr={3}>
                                    <HomeButton onClick={() => setPage('box')} />
                                </Box>
                                <Box pr={3} pt={1}>
                                    <RecipeButton onClick={() => setPage('recipe')} />
                                </Box>
                                <Box pr={3}>
                                    <ContactButton onOpen={onOpen} />
                                </Box>
                            </>
                        ) : (
                            <></>
                        )}

                        <Box pr={3}>
                            {user ? (
                                <LogoutButton onClick={logout} />
                            ) : (
                                <>
                                    <LoginButton onClick={() => router.push('/')} />
                                </>
                            )}
                        </Box>

                        <Box pr={3}>
                            <ModeToggleButton onClick={toggleColorMode} colorMode={colorMode} />
                        </Box>

                        <Box pr={3}>
                            {user ? user.id === 0 && <AdminButton onClick={() => router.push('/admin')} /> : <></>}
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <ContactModal isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default Footer
