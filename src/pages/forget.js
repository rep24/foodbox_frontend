import {
    Box,
    Center,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
    Text,
    Tooltip,
    useColorModeValue,
} from '@chakra-ui/react'
import Wrap from '../components/template/Wrap'

import PrimaryButton from '../components/atoms/PrimaryButton'
import { useAuth } from '@/hooks/auth'
import { useForm } from 'react-hook-form'
import HeaderLayout from '@/components/template/HeaderLayout'
import { useState } from 'react'

const forget = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })

    const [error, setError] = useState([])
    const [status, setStatus] = useState('メールアドレスを入力して送信ボタンを押してください')

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = data => {
        forgotPassword({
            email: data.email,
            setError,
            setStatus,
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
                                パスワード変更
                            </Text>
                        </Center>

                        <Center mb="70px">
                            <Tooltip
                                mt={2}
                                p={5}
                                bg={useColorModeValue('orange.400', 'cyan.300')}
                                fontWeight="bold"
                                hasArrow
                                label={status}
                                placement="bottom"
                                isOpen>
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
                                            <Text>
                                                アカウント登録をしているメールアドレスを入力してください。
                                                メールアドレス宛にパスワードリセット用のメールが届きます。
                                            </Text>
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
                                                <FormErrorMessage>
                                                    {errors.email && errors.email.message}
                                                </FormErrorMessage>
                                                <small>{error.email}</small>
                                            </FormControl>
                                        </Stack>
                                        <Center flexDir="column">
                                            <PrimaryButton
                                                isLoading={isSubmitting}
                                                type="submit"
                                                bg="teal.400"
                                                width={'180px'}
                                                height={'50px'}>
                                                送信
                                            </PrimaryButton>
                                        </Center>
                                    </form>
                                </Box>
                            </Tooltip>
                        </Center>
                    </Wrap>
                </Box>
            </Box>
        </HeaderLayout>
    )
}

export default forget
