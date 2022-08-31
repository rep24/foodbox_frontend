import { Box, Grid, GridItem, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'

const FoodTab = props => {
    const { clickItem, setClickItem, setValue, beef, fish, vegetable, fruit, bread } = props

    return (
        <Tabs h="200px" isFitted variant="enclosed">
            <TabList>
                <Tab>肉</Tab>
                <Tab>魚</Tab>
                <Tab>野菜</Tab>
                <Tab>果物</Tab>
                <Tab>パン</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Grid
                        overflow="auto"
                        h="200px"
                        w="100%"
                        templateColumns={{
                            base: 'repeat(4,1fr)',
                            md: 'repeat(4,1fr)',
                        }}>
                        {beef ? (
                            beef.map(item => (
                                <GridItem
                                    w="80px"
                                    mb="0.75rem"
                                    pr="0.2rem"
                                    key={item.id}
                                    cursor="pointer"
                                    onClick={() => {
                                        setClickItem(item.id)
                                        setValue('food', item.id)
                                    }}
                                    opacity={clickItem === item.id && 0.5}>
                                    <Text fontSize={'xs'}>{item.name}</Text>
                                    <Image src={item.image} h="3rem" objectFit={'contain'} />
                                </GridItem>
                            ))
                        ) : (
                            <></>
                        )}
                    </Grid>
                </TabPanel>
                <TabPanel>
                    <Grid
                        overflow="auto"
                        h="200px"
                        w="100%"
                        templateColumns={{
                            base: 'repeat(4,1fr)',
                            md: 'repeat(4,1fr)',
                        }}>
                        {fish ? (
                            fish.map(item => (
                                <GridItem
                                    w="80px"
                                    mb="0.75rem"
                                    pr="0.2rem"
                                    key={item.id}
                                    cursor="pointer"
                                    onClick={() => {
                                        setClickItem(item.id)
                                        setValue('food', item.id)
                                    }}
                                    opacity={clickItem === item.id && 0.5}>
                                    <Text fontSize={'xs'}>{item.name}</Text>
                                    <Image src={item.image} h="3rem" objectFit={'contain'} />
                                </GridItem>
                            ))
                        ) : (
                            <></>
                        )}
                    </Grid>
                </TabPanel>
                <TabPanel>
                    <Grid
                        overflow="auto"
                        h="200px"
                        w="100%"
                        templateColumns={{
                            base: 'repeat(4,1fr)',
                            md: 'repeat(4,1fr)',
                        }}>
                        {vegetable ? (
                            vegetable.map(item => (
                                <GridItem
                                    w="80px"
                                    mb="0.75rem"
                                    pr="0.2rem"
                                    key={item.id}
                                    cursor="pointer"
                                    onClick={() => {
                                        setClickItem(item.id)
                                        setValue('food', item.id)
                                    }}
                                    opacity={clickItem === item.id && 0.5}>
                                    <Text fontSize={'xs'}>{item.name}</Text>
                                    <Image src={item.image} h="3rem" objectFit={'contain'} />
                                </GridItem>
                            ))
                        ) : (
                            <></>
                        )}
                    </Grid>
                </TabPanel>
                <TabPanel>
                    <Grid
                        overflow="auto"
                        h="200px"
                        w="100%"
                        templateColumns={{
                            base: 'repeat(4,1fr)',
                            md: 'repeat(4,1fr)',
                        }}>
                        {fruit ? (
                            fruit.map(item => (
                                <GridItem
                                    w="80px"
                                    mb="0.75rem"
                                    pr="0.2rem"
                                    key={item.id}
                                    cursor="pointer"
                                    onClick={() => {
                                        setClickItem(item.id)
                                        setValue('food', item.id)
                                    }}
                                    opacity={clickItem === item.id && 0.5}>
                                    <Text fontSize={'xs'}>{item.name}</Text>
                                    <Image src={item.image} h="3rem" objectFit={'contain'} />
                                </GridItem>
                            ))
                        ) : (
                            <></>
                        )}
                    </Grid>
                </TabPanel>
                <TabPanel>
                    <Grid
                        overflow="auto"
                        h="200px"
                        w="100%"
                        templateColumns={{
                            base: 'repeat(4,1fr)',
                            md: 'repeat(4,1fr)',
                        }}>
                        {bread ? (
                            bread.map(item => (
                                <GridItem
                                    w="80px"
                                    mb="0.75rem"
                                    pr="0.2rem"
                                    key={item.id}
                                    cursor="pointer"
                                    onClick={() => {
                                        setClickItem(item.id)
                                        setValue('food', item.id)
                                    }}
                                    opacity={clickItem === item.id && 0.5}>
                                    <Text fontSize={'xs'}>{item.name}</Text>
                                    <Image src={item.image} h="3rem" objectFit={'contain'} />
                                </GridItem>
                            ))
                        ) : (
                            <></>
                        )}
                    </Grid>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default FoodTab
