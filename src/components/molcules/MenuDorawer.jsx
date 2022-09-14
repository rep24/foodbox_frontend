import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react'
import { memo } from 'react'

export const MenuDrawer = memo(props => {
    const { onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting } = props
    return (
        <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button w="100%" onClick={onClickHome}>
                            TOP
                        </Button>
                        <Button w="100%" onClick={onClickUserManagement}>
                            ユーザー一覧
                        </Button>
                        <Button w="100%" onClick={onClickSetting}>
                            設定
                        </Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
})
