import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { FormControl, FormErrorMessage, FormLabel, Image, Input, ModalBody, ModalFooter, Stack } from '@chakra-ui/react'

import PrimaryButton from '../atoms/PrimaryButton'
import PrimaryModal from '../atoms/PrimaryModal'
import useAdmin from '@/hooks/useAdmin'

const AdminFoodCreateModal = props => {
    const { isOpen, onClose, Close } = props

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    const { createFood } = useAdmin()

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [parentId, setParentId] = useState('')

    useEffect(() => {
        reset()
    }, [])

    const onChangeName = e => {
        setName(e.target.value)
    }
    const onChangeImage = e => {
        setImage(e.target.value)
    }
    const onChangeCategoryId = e => {
        setCategoryId(e.target.value)
    }
    const onChangeParentId = e => {
        setParentId(e.target.value)
    }

    const onSubmit = data => {
        createFood({
            name: data.name,
            image: data.image,
            categoryId: data.categoryId,
            parentId: data.parentId,
        })
        onClose()
        Close(true)
    }

    return (
        <PrimaryModal isOpen={isOpen} onClose={onClose} title={'新規登録'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                    <Stack spacing={4}>
                        <FormControl isInvalid={errors.name}>
                            <FormLabel>食材名</FormLabel>
                            <Input
                                id="food"
                                value={name}
                                {...register('name', {
                                    required: '食材名は必須です。',
                                })}
                                onChange={onChangeName}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.food && errors.food.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.image}>
                            <FormLabel>画像URL</FormLabel>
                            <Input
                                id="image"
                                value={image}
                                {...register('image', {})}
                                onChange={onChangeImage}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.image && errors.image.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.categoryId}>
                            <FormLabel>カテゴリーid</FormLabel>
                            <Input
                                id="categoryId"
                                value={categoryId}
                                {...register('categoryId', {
                                    required: 'categoryIdは必須です。',
                                })}
                                onChange={onChangeCategoryId}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.categoryId && errors.categoryId.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.parentId}>
                            <FormLabel>親カテゴリーid</FormLabel>
                            <Input
                                id="parentId"
                                value={parentId}
                                {...register('parentId', {
                                    required: 'parentIdは必須です。',
                                })}
                                onChange={onChangeParentId}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.parentId && errors.parentId.message}</FormErrorMessage>
                        </FormControl>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <PrimaryButton isLoading={isSubmitting} type="submit" bg="#FF3975" mr="1rem">
                        登録
                    </PrimaryButton>
                </ModalFooter>
            </form>
        </PrimaryModal>
    )
}

export default AdminFoodCreateModal
