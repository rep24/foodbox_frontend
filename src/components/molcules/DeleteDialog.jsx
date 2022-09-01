import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react'
import React, { memo } from 'react'

const DeleteDialog = memo(props => {
    const { isOpen, onClose, setDeleted, deleteId, deleteMethod, message } = props

    const cancelRef = React.useRef()
    return (
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <AlertDialogOverlay>
                s
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        選択したデータを一覧から削除しますか？
                    </AlertDialogHeader>
                    {message ? <AlertDialogBody fontSize={'sm'}>{message}</AlertDialogBody> : <></>}
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={() => {
                                onClose()
                                deleteMethod(deleteId)
                                setDeleted(true)
                            }}
                            ml={3}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
})

export default DeleteDialog
