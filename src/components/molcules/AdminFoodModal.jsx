import { useState, useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { FormControl, FormErrorMessage, FormLabel, Input, ModalBody, ModalFooter, Stack } from '@chakra-ui/react'

import useFoods from '../../hooks/useFoods'
import PrimaryButton from '../atoms/PrimaryButton'
import PrimaryModal from '../atoms/PrimaryModal'

const AdminFoodModal = props => {
    const { isOpen, onClose, food, Close } = props

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [deadline, setDeadline] = useState('')
    const [memo, setMemo] = useState('')

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    useEffect(() => {
        reset()
        setId(food?.id ?? '')
        setName(food?.name ?? '')
        setDeadline(food?.deadline ?? '')
        setMemo(food?.memo ?? '')
        setImageUrl(food?.image ?? '')
    }, [food, id])

    const { addFood, deleteFood } = useFoods()

    const onChangeDeadline = e => {
        setDeadline(e.target.value)
    }
    const onChangeMemo = e => {
        setMemo(e.target.value)
    }

    //更新ボタンを押したときの処理
    const onSubmit = data => {
        addFood({ id: id, deadline: data.deadline, memo: data.memo })
        onClose()
        Close(true)
    }

    return (
        <PrimaryModal isOpen={isOpen} onClose={onClose} title={name}>
            {/* <Image boxSize="80%" m="auto" borderRadius="5px" src={imageUrl} /> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={id}>
                    <Input type="hidden" id="id" value={id} {...register('id')} />
                </FormControl>
                <ModalBody>
                    <Stack spacing={4}>
                        <FormControl isInvalid={errors.deadline}>
                            <FormLabel>食材名</FormLabel>
                            <Input
                                id="food"
                                value={deadline}
                                {...register('deadline', {
                                    required: '食材名は必須です。',
                                })}
                                onChange={onChangeDeadline}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.deadline && errors.deadline.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={'xxx'}>
                            <FormLabel>カテゴリーid</FormLabel>
                            <Input
                                id="xxx"
                                value={'xxx'}
                                {...register('xxx', {
                                    required: 'xxx',
                                })}
                                onChange={'xxx'}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{/* {errors.memo && errors.memo.message} */}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.memo}>
                            <FormLabel>画像URL</FormLabel>
                            <Input
                                id="memo"
                                value={memo}
                                {...register('memo', {
                                    required: '画像URLは必須です。',
                                })}
                                onChange={onChangeMemo}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.memo && errors.memo.message}</FormErrorMessage>
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

export default AdminFoodModal
