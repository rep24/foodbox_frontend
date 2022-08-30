import { memo } from 'react'
import { useRouter } from 'next/router'

import { Box, Flex, Heading, Image, Text, useDisclosure } from '@chakra-ui/react'

import { useAuth } from '@/hooks/auth'
import HomeButton from '../atoms/HeaderMenuButton/HomeButton'
import LogoutButton from '../atoms/HeaderMenuButton/LogoutButton'
import ContactModal from '../molcules/ContactModal'
import Wrap from '../template/Wrap'

const AdminHeader = memo(() => {
    const { isOpen, onClose } = useDisclosure()
    const { logout } = useAuth({ middleware: 'guest' })
    const router = useRouter()
    return (
        <Box w="100%" bg="#1D2739" boxShadow="0px 1px 5px #11B7DA" mb={5}>
            <Wrap>
                <Flex
                    as="nav"
                    color="gray.50"
                    align="center"
                    justify="space-between"
                    pt={{ base: 3, md: 4 }}
                    pb={{ base: 3, md: 4 }}>
                    <Flex align="center" mr={8} cursor="default">
                        <Image src="/images/spoon.png" boxSize={{ base: 5, md: 7 }} marginRight="1" />
                        <Heading
                            as="h1"
                            fontSize={{ base: 'xl', md: '3xl' }}
                            fontFamily="Gill Sans, sans-serif"
                            letterSpacing="4px">
                            FoodBox
                        </Heading>
                        <Text pt={1} ml={5} fontWeight="bold" color="#FF3975">
                            - Administorator Tools{' '}
                        </Text>
                    </Flex>
                    <Flex align="center" fontSize="md" display={{ base: 'none', md: 'flex' }} paddingTop="1">
                        <Box pr={2}>
                            <HomeButton onClick={() => router.push('/home')} />
                        </Box>
                        <Box>
                            <LogoutButton onClick={logout} />
                        </Box>
                    </Flex>
                </Flex>
                <ContactModal isOpen={isOpen} onClose={onClose} />
            </Wrap>
        </Box>
    )
})

export default AdminHeader
