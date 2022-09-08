import {
    Box,
    Center,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import Wrap from '../components/template/Wrap'
import React, { memo, useEffect, useState } from 'react'
import PrimaryButton from '../components/atoms/PrimaryButton'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'
import { useForm } from 'react-hook-form'
import HeaderLayout from '@/components/template/HeaderLayout'
import Link from 'next/link'
import { BiRun } from 'react-icons/bi'

const Login = memo(() => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/home',
    })

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const onSubmit = data => {
        login({
            email: data.email,
            password: data.password,
            setStatus,
        })
    }

    return (
        <HeaderLayout>
            <Box h="100vh" w="100%" objectFit="cover" bgRepeat="no-repeat" backgroundImage="/images/bg1.jpg">
                <Box
                    h="100%"
                    bgGradient={useColorModeValue(
                        'linear(to-r,rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))',
                        'linear(to-r,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
                    )}
                    alignItems="center"
                    textAlign="left"
                    p="5rem">
                    <Wrap>
                        <Center mb="70px" flexDirection={'column'}>
                            <Text
                                color={useColorModeValue('gray.600', 'purple.50')}
                                fontWeight="bold"
                                fontSize="3rem"
                                mb="2">
                                食材の管理を始めましょう！
                            </Text>
                            <Link href="/register">
                                <Flex
                                    mt="2rem"
                                    borderBottom={useColorModeValue('3px solid #595959', '3px solid white')}
                                    _hover={{ opacity: 0.7 }}>
                                    <BiRun size="27" />
                                    <Text
                                        fontWeight={'bold'}
                                        fontSize="1.25rem"
                                        color={useColorModeValue('gray.600', 'purple.50')}
                                        ml="1"
                                        cursor="pointer">
                                        今から始める<small>(新規登録)</small>
                                    </Text>
                                </Flex>
                            </Link>
                        </Center>

                        <Center flexDirection="column">
                            <Box
                                width="50%"
                                bg="rgba(255,255,255,0.9)"
                                color="gray.800"
                                borderRadius="10"
                                pr="2rem"
                                pl="2rem"
                                pt="3rem"
                                pb="3rem">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Stack spacing={4} mb="40px">
                                        <FormControl isInvalid={errors.email}>
                                            <FormLabel>email</FormLabel>
                                            <Input
                                                id="email"
                                                type="email"
                                                bg="white"
                                                onChange={event => setEmail(event.target.value)}
                                                {...register('email', {
                                                    required: 'emailは必須です。',
                                                })}
                                            />
                                            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                                        </FormControl>

                                        <FormControl isInvalid={errors.password}>
                                            <FormLabel>password</FormLabel>
                                            <Input
                                                id="password"
                                                type="password"
                                                bg="white"
                                                onChange={event => setPassword(event.target.value)}
                                                {...register('password', {
                                                    required: 'passwordは必須です。',
                                                })}
                                                autoComplete="current-password"
                                            />
                                            <FormErrorMessage>
                                                {errors.password && errors.password.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </Stack>
                                    <Center flexDir="column">
                                        <PrimaryButton
                                            isLoading={isSubmitting}
                                            type="submit"
                                            bg="teal.400"
                                            width={'180px'}
                                            height={'50px'}>
                                            ログイン
                                        </PrimaryButton>
                                        <Link href="/forget">
                                            <Text
                                                as="a"
                                                fontSize="sm"
                                                borderBottom="1px solid gray"
                                                cursor="pointer"
                                                mt="2rem">
                                                パスワードを忘れた方はこちら
                                            </Text>
                                        </Link>
                                    </Center>
                                </form>
                            </Box>
                        </Center>
                    </Wrap>
                </Box>
            </Box>
        </HeaderLayout>
    )
})

export default Login
