import {
    Box,
    Center,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import Wrap from '../components/template/Wrap'
import React, { memo } from 'react'
import PrimaryButton from '../components/atoms/PrimaryButton'
import { useAuth } from '@/hooks/auth'
import { useForm } from 'react-hook-form'
import HeaderLayout from '@/components/template/HeaderLayout'

const Login = memo(() => {
    const { regist } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/home',
    })

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        getValues,
    } = useForm()

    const onSubmit = data => {
        regist({
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.passwordConfirmation,
        })
    }

    return (
        <HeaderLayout>
            <Box h="100vh" w="100vw" objectFit="cover" bgRepeat="no-repeat" backgroundImage="/images/bg1.jpg">
                <Box
                    h="100%"
                    bgGradient={useColorModeValue(
                        'linear(to-r,rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))',
                        'linear(to-r,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
                    )}
                    alignItems="center"
                    textAlign="left">
                    <Wrap>
                        <Center pt="70px" pb="70px">
                            <Text
                                color={useColorModeValue('gray.600', 'purple.50')}
                                fontWeight="bold"
                                fontSize="3rem"
                                mb="2">
                                ユーザー登録
                            </Text>
                        </Center>

                        <Center mb="70px">
                            <Box
                                width="50%"
                                color="gray.800"
                                bg="rgba(255,255,255,0.9)"
                                borderRadius="10"
                                pr="2rem"
                                pl="2rem"
                                pt="3rem"
                                pb="3rem">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Stack spacing={4} mb="40px">
                                        <FormControl isInvalid={errors.name}>
                                            <FormLabel>name</FormLabel>
                                            <Input
                                                id="name"
                                                type="text"
                                                bg="white"
                                                onChange={event => setEmail(event.target.value)}
                                                {...register('name', {
                                                    required: 'nameは必須です。',
                                                })}
                                            />
                                            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                                        </FormControl>

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
                                                    minLength: {
                                                        value: 8,
                                                        message: 'パスワードは8文字以上必要です。',
                                                    },
                                                })}
                                                autoComplete="current-password"
                                            />
                                            <FormErrorMessage>
                                                {errors.password && errors.password.message}
                                            </FormErrorMessage>
                                        </FormControl>

                                        <FormControl isInvalid={errors.passwordConfirmation}>
                                            <FormLabel>Confirm password</FormLabel>
                                            <Input
                                                id="passwordConfirmation"
                                                type="password"
                                                bg="white"
                                                onChange={event => setPassword(event.target.value)}
                                                {...register('passwordConfirmation', {
                                                    required: 'passwordConfirmationは必須です。',
                                                    validate: value => {
                                                        return (
                                                            value === getValues('password') ||
                                                            'パスワードが一致しません。'
                                                        )
                                                    },
                                                })}
                                            />
                                            <FormErrorMessage>
                                                {errors.passwordConfirmation && errors.passwordConfirmation.message}
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
                                            登録
                                        </PrimaryButton>
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
