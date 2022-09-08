import { useEffect } from 'react'

import { FormControl, FormErrorMessage, FormLabel, ModalBody, ModalFooter, Stack, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import useContact from '../../hooks/useContact'
import PrimaryButton from '../atoms/PrimaryButton'
import PrimaryModal from '../atoms/PrimaryModal'
import { useAuth } from '@/hooks/auth'

const ContactModal = props => {
    const { isOpen, onClose } = props
    const { contact } = useContact()
    const { user } = useAuth()

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    useEffect(() => {
        reset()
    }, [props])

    const onSubmitContact = data => {
        contact({ user_id: user.id, body: data.body })
        onClose()
    }

    return (
        <PrimaryModal isOpen={isOpen} onClose={onClose} title={'食材の追加要望・お問い合わせ'}>
            <form onSubmit={handleSubmit(onSubmitContact)}>
                <ModalBody>
                    <Stack spacing={4}>
                        <FormControl isInvalid={errors.body}>
                            <FormLabel>お問い合わせ内容を入力してください。</FormLabel>

                            <Textarea
                                id="body"
                                {...register('body', {
                                    required: '内容は必須です。',
                                    maxLength: {
                                        value: 500,
                                        message: '500文字以内で入力してください。',
                                    },
                                })}
                                placeholder="食材に牛肉を追加してください。"
                                bg="green.100"
                                border="none"
                                height="10rem"
                            />

                            <FormErrorMessage>{errors.body && errors.body.message}</FormErrorMessage>
                        </FormControl>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <PrimaryButton isLoading={isSubmitting} type="submit" bg="red.400">
                        送信
                    </PrimaryButton>
                </ModalFooter>
            </form>
        </PrimaryModal>
    )
}

export default ContactModal
