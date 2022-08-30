import { memo } from 'react'
import { MdOutlineFastfood } from 'react-icons/md'
import { FiUsers, FiMail } from 'react-icons/fi'
import { Flex, IconButton } from '@chakra-ui/react'

const AdminMenu = memo(props => {
    const { setTitle } = props
    return (
        <Flex direction="column" position={'fixed'} bottom={1} right={1}>
            <IconButton
                pl="31%"
                mb={2}
                boxSize="5rem"
                bg="#11DA92"
                icon={<FiMail size={30} color={'fff'} />}
                aria-label="お問い合わせ一覧"
                variant="unstyled"
                onClick={() => setTitle('お問い合わせ一覧')}
            />
            <IconButton
                pl="31%"
                mb={2}
                boxSize="5rem"
                bg="#FF3975"
                icon={<MdOutlineFastfood size={30} color={'fff'} />}
                aria-label="食材一覧"
                variant="unstyled"
                onClick={() => setTitle('食材一覧')}
            />
            <IconButton
                pl="31%"
                boxSize="5rem"
                bg="#DDE047"
                icon={<FiUsers size={30} color={'fff'} />}
                aria-label="ユーザー一覧"
                variant="unstyled"
                onClick={() => setTitle('ユーザー一覧')}
            />
        </Flex>
    )
})

export default AdminMenu
