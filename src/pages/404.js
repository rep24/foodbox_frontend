import PrimaryModal from '@/components/atoms/PrimaryModal'
import useFoods from '@/hooks/useFoods'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Image,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

const NotFoundPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { createFood, foodIndex, foods } = useFoods()
    const btnRef = useRef()

    useEffect(() => {
        foodIndex()
        console.log(foods)
    }, [foodIndex])

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
                                    {foods ? (
                                        foods.map(item => (
                                            <>
                                                <option key={item.id} value={item.id}>
                                                    {item.name}
                                                </option>
                                                <Image src={item.image} w="5rem" />
                                            </>
                                        ))
                                    ) : (
                                        <option></option>
                                    )}
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
            <PrimaryModal />
        </>
    )
}

export default NotFoundPage
