import { Box, Flex, Text } from '@chakra-ui/react'
import { FiMail, FiUsers } from 'react-icons/fi'
import { MdOutlineFastfood } from 'react-icons/md'

import AdminMenu from '../molcules/AdminMenu'
import AdminHeader from '../organisms/AdminHeader'
import Wrap from './Wrap'

const AdminLayout = props => {
    const { setTitle, title, children } = props

    return (
        <Box bg="#1D2739" h="100%" minH="100vh">
            <AdminHeader />
            <Wrap>
                <Flex textAlign="center" alignItems="center" mb={5}>
                    {title === 'お問い合わせ一覧' && <FiMail size={40} color={'fff'} />}
                    {title === '食材一覧' && <MdOutlineFastfood size={40} color={'fff'} />}
                    {title === 'ユーザー一覧' && <FiUsers size={40} color={'fff'} />}

                    <Text color="white" fontWeight="bold" fontSize="3xl" pl={3}>
                        {title}
                    </Text>
                </Flex>
                <AdminMenu setTitle={setTitle} />
                {children}
            </Wrap>
        </Box>
    )
}

export default AdminLayout
