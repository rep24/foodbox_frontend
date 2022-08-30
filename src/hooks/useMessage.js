import { useCallback } from 'react'

import { useToast } from '@chakra-ui/react'

const useMessage = () => {
    const toast = useToast()

    const showMessage = useCallback(
        props => {
            const { title, status } = props
            toast({
                title,
                status,
                position: 'top',
                duration: 2000,
            })
        },
        [toast],
    )
    return { showMessage }
}

export default useMessage
