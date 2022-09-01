import React, { useEffect, useState } from 'react'

import { Box, Flex, Grid, Spinner, Text, useDisclosure } from '@chakra-ui/react'

import useContact from '@/hooks/useContact'
import DeleteDialog from '@/components/molcules/DeleteDialog'

const Contacts = () => {
    const { getContacts, contacts, deleteContact } = useContact()
    const [deleted, setDeleted] = useState(false)
    const [deleteId, setDeleteId] = useState()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const onClickDelete = id => {
        setDeleteId(id)
        onOpen()
    }

    useEffect(() => {
        setDeleteId()
        setDeleted(false)
        getContacts()
    }, [deleted])

    return (
        <>
            <Grid overflow="auto" h="600px" w="100%" mb={3}>
                {contacts ? (
                    contacts.map(contact => (
                        <Box w="100%" mb={3} key={contact.id}>
                            <Flex color="white" textAlign="center" alignItems="end">
                                <Text fontSize={'2xl'} mr={6}>
                                    お問い合わせID: {contact.id}
                                </Text>
                                <Text fontSize={'sm'} mr="1rem">
                                    ユーザーID:{contact.user_id}
                                </Text>
                                <Text fontSize={'sm'}>{contact.created_at}</Text>
                            </Flex>
                            <Flex
                                justify="space-between"
                                textAlign="left"
                                alignItems="center"
                                borderBottom="1px solid #11B7DA">
                                <Text color="white" width="92%" fontSize={'lg'}>
                                    {contact.body}
                                </Text>
                                <Text
                                    color="#FF3975"
                                    fontWeight="bold"
                                    cursor="pointer"
                                    mr="1rem"
                                    onClick={() => onClickDelete(contact.id)}>
                                    完了
                                </Text>
                            </Flex>
                        </Box>
                    ))
                ) : (
                    <Spinner thickness="3px" size="xl" color="#FF3975" />
                )}
            </Grid>
            <DeleteDialog
                isOpen={isOpen}
                onClose={onClose}
                deleteMethod={deleteContact}
                deleteId={deleteId}
                setDeleted={setDeleted}
                message={`お問い合わせID:${deleteId}を削除しようとしています。`}
            />
        </>
    )
}

export default Contacts
