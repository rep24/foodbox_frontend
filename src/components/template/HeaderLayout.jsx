import { memo } from 'react'
import Footer from '../organisms/Footer'

import Header from '../organisms/Header'

const HeaderLayout = memo(props => {
    const { children, setPage } = props
    return (
        <>
            <Header setPage={setPage} />
            {children}
            <Footer setPage={setPage} />
        </>
    )
})

export default HeaderLayout
