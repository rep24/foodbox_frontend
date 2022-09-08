import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { FormControl, FormErrorMessage, FormLabel, Image, Input, ModalBody, ModalFooter, Stack } from '@chakra-ui/react'

import PrimaryButton from '../atoms/PrimaryButton'
import PrimaryModal from '../atoms/PrimaryModal'
import useAdmin from '@/hooks/useAdmin'

const AdminUserModal = props => {
    const { isOpen, onClose, Close, selectedTarget } = props

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    const { editUser } = useAdmin()

    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        reset()
        setEmail(selectedTarget?.email ?? '')
        setId(selectedTarget?.id ?? '')
        setName(selectedTarget?.name ?? '')
    }, [selectedTarget, Close, id])

    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const onSubmit = data => {
        editUser({
            id: data.id,
            email: data.email,
        })
        onClose()
        Close(true)
    }

    return (
        <PrimaryModal isOpen={isOpen} onClose={onClose} title={`ID${id} ${name}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.id}>
                    <Input type="hidden" id="id" value={id} {...register('id')} />
                </FormControl>
                <ModalBody>
                    <Stack spacing={4}>
                        <FormControl isInvalid={errors.email}>
                            <FormLabel>email</FormLabel>
                            <Input
                                id="email"
                                value={email}
                                {...register('email', {
                                    required: 'メールアドレスは必須です。',
                                })}
                                onChange={onChangeEmail}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                        </FormControl>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <PrimaryButton isLoading={isSubmitting} type="submit" bg="teal.400" mr="1rem">
                        更新
                    </PrimaryButton>
                </ModalFooter>
            </form>
        </PrimaryModal>
    )
}

export default AdminUserModal
