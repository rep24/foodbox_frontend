import { useEffect } from 'react'

import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    ModalBody,
    ModalFooter,
    Select,
    Stack,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import PrimaryButton from '../atoms/PrimaryButton'
import PrimaryModal from '../atoms/PrimaryModal'

import { useAuth } from '@/hooks/auth'
import useFoods from '../../hooks/useFoods'

const FoodCreateModal = props => {
    const { isOpen, onClose, Close } = props

    const { createFood, foodIndex, foods } = useFoods()
    const { user } = useAuth()

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    useEffect(() => {
        reset()
        foodIndex()
    }, [reset, foodIndex, props])

    //登録ボタンを押したときの処理
    const onSubmitNew = data => {
        createFood({
            user_id: user.id,
            food_id: data.food,
            deadline: data.deadline,
            memo: data.memo,
        })
        reset()
        onClose()
        Close(true)
    }

    return (
        <PrimaryModal isOpen={isOpen} onClose={onClose} title={'編集'}>
            <form onSubmit={handleSubmit(onSubmitNew)}>
                <ModalBody>
                    <Stack spacing={4}>
                        <FormControl isInvalid={errors.food}>
                            <FormLabel>食材を選択(必須)</FormLabel>
                            <Select
                                id="food"
                                placeholder="食材を選択してください。"
                                {...register('food')}
                                bg="green.100"
                                border="none">
                                {foods ? (
                                    foods.map(item => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))
                                ) : (
                                    <option></option>
                                )}
                            </Select>
                            <FormErrorMessage>{errors.deadline && errors.deadline.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.deadline}>
                            <FormLabel>賞味期限を入力(必須)</FormLabel>
                            <Input
                                id="deadline"
                                placeholder="2022-01-01"
                                {...register('deadline', {
                                    required: '賞味期限は必須です。',
                                })}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.deadline && errors.deadline.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.memo}>
                            <FormLabel>メモ</FormLabel>
                            <Input
                                id="memo"
                                {...register('memo', {
                                    maxLength: {
                                        value: 200,
                                        message: 'メモが長すぎます！',
                                    },
                                })}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.memo && errors.memo.message}</FormErrorMessage>
                        </FormControl>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <PrimaryButton isLoading={isSubmitting} type="submit" bg="teal.400">
                        登録
                    </PrimaryButton>
                </ModalFooter>
            </form>
        </PrimaryModal>
    )
}

export default FoodCreateModal
