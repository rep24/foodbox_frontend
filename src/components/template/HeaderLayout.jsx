import { memo } from 'react'

import Header from '../organisms/Header'

const HeaderLayout = memo(props => {
    const { children, setPage } = props
    return (
        <>
            <Header setPage={setPage} />
            {children}
        </>
    )
})

export default HeaderLayout
