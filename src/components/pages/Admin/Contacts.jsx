import { useEffect, useState } from 'react'

import { Box, Flex, Grid, Spinner, Text } from '@chakra-ui/react'

import useContact from '@/hooks/useContact'

const Contacts = () => {
    const { getContacts, contacts, deleteContact } = useContact()
    const [deleted, setdeleted] = useState(false)

    useEffect(() => {
        setdeleted(false)
        getContacts()
        console.log(contacts)
    }, [deleted])

    return (
        <>
            <Grid overflow="auto" h="600px" w="100%" mb={3}>
                {contacts ? (
                    contacts.map(contact => (
                        <Box w="100%" mb={3} key={contact.id}>
                            <Flex color="white" textAlign="center" alignItems="end">
                                <Text fontSize={'2xl'} mr={6}>
                                    ユーザーID: {contact.user_id}
                                </Text>
                                <Text fontSize={'sm'}>{contact.created_at}</Text>
                            </Flex>
                            <Flex
                                justify="space-between"
                                textAlign="center"
                                alignItems="center"
                                borderBottom="1px solid #11B7DA">
                                <Text color="white" fontSize={'lg'}>
                                    {contact.body}
                                </Text>
                                <Text
                                    color="#FF3975"
                                    fontWeight="bold"
                                    cursor="pointer"
                                    onClick={() => {
                                        deleteContact(contact.id)
                                        setdeleted(true)
                                    }}>
                                    完了
                                </Text>
                            </Flex>
                        </Box>
                    ))
                ) : (
                    <Spinner thickness="3px" size="xl" color="#FF3975" />
                )}
            </Grid>
        </>
    )
}

export default Contacts
