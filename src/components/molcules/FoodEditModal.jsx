import { useState, useEffect } from 'react'

import { FormControl, FormErrorMessage, FormLabel, Image, Input, ModalBody, ModalFooter, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import useFoods from '../../hooks/useFoods'
import PrimaryButton from '../atoms/PrimaryButton'
import PrimaryModal from '../atoms/PrimaryModal'

const FoodEditModal = props => {
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

    //削除ボタンを押したときの処理
    const onClickDelete = () => {
        deleteFood(id)
        onClose()
        Close(true)
    }

    return (
        <PrimaryModal isOpen={isOpen} onClose={onClose} title={name}>
            <Image boxSize="80%" m="auto" borderRadius="5px" src={imageUrl} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={id}>
                    <Input type="hidden" id="id" value={id} {...register('id')} />
                </FormControl>
                <ModalBody>
                    <Stack spacing={4}>
                        <FormControl isInvalid={errors.deadline}>
                            <FormLabel>賞味期限</FormLabel>
                            <Input
                                id="deadline"
                                value={deadline}
                                {...register('deadline', {
                                    required: '賞味期限は必須です。',
                                })}
                                onChange={onChangeDeadline}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.deadline && errors.deadline.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.memo}>
                            <FormLabel>メモ</FormLabel>
                            <Input
                                id="memo"
                                value={memo}
                                {...register('memo', {
                                    maxLength: {
                                        value: 200,
                                        message: 'メモが長すぎます！',
                                    },
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
                    <PrimaryButton onClick={onClickDelete} bg="orange.400">
                        削除
                    </PrimaryButton>
                </ModalFooter>
            </form>
        </PrimaryModal>
    )
}

export default FoodEditModal
