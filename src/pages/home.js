import HeaderLayout from '@/components/template/HeaderLayout'
import Recipe from '@/components/pages/recipe'
import { useState } from 'react'

import FoodArea from '../components/template/FoodArea'

const Home = () => {
    const [page, setPage] = useState('box')
    return (
        <HeaderLayout setPage={setPage}>
            {page === 'box' && <FoodArea />}
            {page === 'recipe' && <Recipe />}
        </HeaderLayout>
    )
}

export default Home
