import { memo } from 'react'
import { useRouter } from 'next/router'

import { Box, Flex, Heading, Image, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'

import { useAuth } from '@/hooks/auth'
import ContactButton from '../atoms/HeaderMenuButton/ContactButton'
import HomeButton from '../atoms/HeaderMenuButton/HomeButton'
import RecipeButton from '../atoms/HeaderMenuButton/RecipeButton'
import LogoutButton from '../atoms/HeaderMenuButton/LogoutButton'
import LoginButton from '../atoms/HeaderMenuButton/LoginButton'
import ContactModal from '../molcules/ContactModal'
import Wrap from '../template/Wrap'
import ModeToggleButton from '../atoms/HeaderMenuButton/ModeToggleButton'
import AdminButton from '../atoms/HeaderMenuButton/AdminButton'

const Header = memo(props => {
    const { setPage } = props

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user, logout } = useAuth({ middleware: 'guest' })
    const router = useRouter()

    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box w="100%" boxShadow="base" bg={useColorModeValue('orange.400', 'purple.900')}>
            <Wrap>
                <Flex
                    as="nav"
                    color={'gray.50'}
                    align="center"
                    justify="space-between"
                    pt={{ base: 2, md: 4 }}
                    pb={{ base: 2, md: 4 }}>
                    <Flex align="center" mr={8} cursor="default">
                        <Image src="/images/spoon.png" boxSize={{ base: 5, md: 7 }} marginRight="1" />
                        <Heading
                            as="h1"
                            fontSize={{ base: 'xl', md: '3xl' }}
                            fontFamily="Gill Sans, sans-serif"
                            letterSpacing="4px">
                            FoodBox
                        </Heading>
                    </Flex>
                    <Flex align="center" fontSize="md" display={{ base: 'none', md: 'flex' }} paddingTop="1">
                        {user ? (
                            <>
                                <Box pr={4}>
                                    <HomeButton onClick={() => setPage('box')} />
                                </Box>
                                <Box pr={2} pt={1}>
                                    <RecipeButton onClick={() => setPage('recipe')} />
                                </Box>
                                <Box pr={5}>
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
                        <Box pr={1}>
                            {user ? user.id === 0 && <AdminButton onClick={() => router.push('/admin')} /> : <></>}
                        </Box>
                        <Box>
                            <ModeToggleButton onClick={toggleColorMode} colorMode={colorMode} />
                        </Box>
                    </Flex>
                </Flex>
                <ContactModal isOpen={isOpen} onClose={onClose} />
            </Wrap>
        </Box>
    )
})

export default Header
