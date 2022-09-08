import HeaderLayout from '@/components/template/HeaderLayout'
import { Center, Image, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

const NotFoundPage = () => {
    return (
        <HeaderLayout>
            <Center mt="70px" flexDirection={'column'}>
                <Text color={useColorModeValue('gray.600', 'purple.50')} fontWeight="bold" fontSize="3.5rem" mb="2">
                    ４０４
                </Text>
                <Text ml="3px">お探しのページは見つかりませんでした...。</Text>
                <Image src="https://uploads-ssl.webflow.com/603c87adb15be3cb0b3ed9b5/6056eb9b4dfc7f31c781799c_46-p-500.png" />
                <Link href="/">
                    <Text as="a" fontSize="sl" borderBottom="1px solid gray" cursor="pointer">
                        トップへ戻る
                    </Text>
                </Link>
            </Center>
        </HeaderLayout>
    )
}

export default NotFoundPage
