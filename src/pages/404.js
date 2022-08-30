import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useDisclosure,
} from '@chakra-ui/react'
import { useRef } from 'react'

const NotFoundPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                食材選択
            </Button>
            <Drawer isOpen={isOpen} placement="top" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>食材を選択してください</DrawerHeader>

                    <DrawerBody>
                        <Tabs h="400px" isFitted variant="enclosed">
                            <TabList>
                                <Tab>肉</Tab>
                                <Tab>魚</Tab>
                                <Tab>野菜</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <p>one!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>two!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>three!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default NotFoundPage
