import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { FormControl, FormErrorMessage, FormLabel, Image, Input, ModalBody, ModalFooter, Stack } from '@chakra-ui/react'

import PrimaryButton from '../atoms/PrimaryButton'
import PrimaryModal from '../atoms/PrimaryModal'
import useAdmin from '@/hooks/useAdmin'

const AdminFoodModal = props => {
    const { isOpen, onClose, Close, selectedTarget } = props

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    const { editFood } = useAdmin()

    const [id, setId] = useState('')
    const [food, setFood] = useState('')
    const [image, setImage] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [parentId, setParentId] = useState('')

    useEffect(() => {
        reset()
        setId(selectedTarget?.id ?? '')
        setFood(selectedTarget?.name ?? '')
        setImage(selectedTarget?.image ?? '')
        setCategoryId(selectedTarget?.category_id ?? '')
        setParentId(selectedTarget?.parent_id ?? '')
    }, [selectedTarget, id])

    const onChangeFood = e => {
        setFood(e.target.value)
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
        editFood({
            id: data.id,
            name: data.name,
            image: data.image,
            categoryId: data.categoryId,
            parentId: data.parentId,
        })
        onClose()
        Close(true)
    }

    return (
        <PrimaryModal isOpen={isOpen} onClose={onClose} title={food}>
            <Image boxSize="80%" m="auto" borderRadius="5px" src={image} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.id}>
                    <Input type="hidden" id="id" value={id} {...register('id')} />
                </FormControl>
                <ModalBody>
                    <Stack spacing={4}>
                        <FormControl isInvalid={errors.name}>
                            <FormLabel>?????????</FormLabel>
                            <Input
                                id="food"
                                value={food}
                                {...register('name', {
                                    required: '???????????????????????????',
                                })}
                                onChange={onChangeFood}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.food && errors.food.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.image}>
                            <FormLabel>??????URL</FormLabel>
                            <Input
                                id="image"
                                value={image}
                                {...register('image', {
                                    required: '??????URL??????????????????',
                                })}
                                onChange={onChangeImage}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.image && errors.image.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.categoryId}>
                            <FormLabel>???????????????id</FormLabel>
                            <Input
                                id="categoryId"
                                value={categoryId}
                                {...register('categoryId', {
                                    required: 'categoryId??????????????????',
                                })}
                                onChange={onChangeCategoryId}
                                bg="green.100"
                                border="none"
                            />
                            <FormErrorMessage>{errors.categoryId && errors.categoryId.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.parentId}>
                            <FormLabel>??????????????????id</FormLabel>
                            <Input
                                id="parentId"
                                value={parentId}
                                {...register('parentId', {
                                    required: 'parentId??????????????????',
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
                    <PrimaryButton isLoading={isSubmitting} type="submit" bg="teal.400" mr="1rem">
                        ??????
                    </PrimaryButton>
                </ModalFooter>
            </form>
        </PrimaryModal>
    )
}

export default AdminFoodModal
