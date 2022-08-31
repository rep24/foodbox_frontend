import { useAuth } from '@/hooks/auth'
import { Box, Flex, Grid, Spinner, Text } from '@chakra-ui/react'

const Users = () => {
    const { users } = useAuth()

    return (
        <Grid overflow="auto" h="600px" w="100%" mb={3}>
            {users ? (
                users.map(user => (
                    <Flex borderBottom="1px solid #11B7DA" pb={2} key={user.id}>
                        <Box w="100%">
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
                                    <Text color="#11B7DA" fontWeight="bold" mr={3}>
                                        編集
                                    </Text>
                                    <Text color="#FF3975" fontWeight="bold">
                                        削除
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
    )
}

export default Users
