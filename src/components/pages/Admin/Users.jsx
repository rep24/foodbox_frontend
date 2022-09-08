import AdminUserModal from '@/components/molcules/AdminUserModal'
import useAdmin from '@/hooks/useAdmin'
import { Box, Flex, Grid, Spinner, Text, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const Users = () => {
    const { onSelectTarget, selectedTarget, getUsers, users } = useAdmin()
    const [Open, Close] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        getUsers()
        Close(false)
    }, [Open])

    const onClickEdit = id => {
        onSelectTarget(id, onOpen, users)
        onOpen()
    }

    return (
        <>
            <Grid overflow="auto" h="600px" w="100%" mb={3}>
                {users ? (
                    users.map(user => (
                        <Flex pb={2} key={user.id}>
                            <Box w="100%" borderBottom="1px solid #11B7DA">
                                <Flex color="white" textAlign="center" alignItems="end">
                                    <Text fontSize={'2xl'} mr={6}>
                                        ID: {user.id}
                                    </Text>
                                    <Text fontSize={'2xl'} mr={6}>
                                        {user.name}
                                    </Text>
                                    <Text fontSize={'sm'}>created_at {user.created_at}</Text>
                                </Flex>

                                <Flex justify="space-between" textAlign="center" alignItems="center">
                                    <Text color="white" fontSize={'lg'}>
                                        {user.email}
                                    </Text>
                                    <Flex>
                                        <Text
                                            color="#11B7DA"
                                            fontWeight="bold"
                                            mr="1rem"
                                            onClick={() => {
                                                onClickEdit(user.id)
                                            }}>
                                            編集
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                    ))
                ) : (
                    <Spinner thickness="3px" size="xl" color="#FF3975" />
                )}
            </Grid>
            <AdminUserModal isOpen={isOpen} onClose={onClose} selectedTarget={selectedTarget} Close={Close} />
        </>
    )
}

export default Users
