import { useCallback, useState } from 'react'

import axios from '@/lib/axios'

import useMessage from './useMessage'

const useFoods = () => {
    const [selectedFood, setSelectedFood] = useState(null)
    const [foods, setFoods] = useState()
    const [beef, setBeef] = useState()
    const [fish, setFish] = useState()
    const [vegetable, setVegetable] = useState()
    const [fruit, setFruit] = useState()
    const [bread, setBread] = useState()

    //選択された食材を特定してモーダル表示
    const onSelectFood = useCallback(props => {
        const { id, onOpen, box } = props
        const targetFood = box.find(food => {
            return food.id === id
        })
        setSelectedFood(targetFood ?? null)
        onOpen()
    }, [])

    const { showMessage } = useMessage()

    //ボックス内の食材の編集
    const addFood = useCallback(
        props => {
            const { id, deadline, memo } = props
            axios
                .put(`api/box/${id}`, {
                    deadline: deadline,
                    memo: memo,
                })
                .then(() => {
                    showMessage({ title: '更新しました!!', status: 'success' })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        [showMessage],
    )

    //食材をボックスから削除
    const deleteFood = useCallback(
        id => {
            axios
                .delete(`api/box/${id}`)
                .then(() => {
                    showMessage({ title: '削除しました!!', status: 'info' })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        [showMessage],
    )

    //Boxに食材を追加
    const createFood = useCallback(
        props => {
            const { user_id, food_id, deadline, memo } = props
            axios
                .post('api/box', {
                    user_id: user_id,
                    food_id: food_id,
                    deadline: deadline,
                    memo: memo,
                })
                .then(() => {
                    showMessage({ title: '登録しました!!', status: 'info' })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        [showMessage],
    )

    //DBから全食材取得
    const foodIndex = useCallback(() => {
        axios
            .get('api/foods')
            .then(res => {
                setFoods(res.data ?? null)
                setBeef(res.data.filter(food => food.parent_id === 10))
                setFish(res.data.filter(food => food.parent_id === 11))
                setVegetable(res.data.filter(food => food.parent_id === 12))
                setBread(res.data.filter(food => food.parent_id === 22))
                setFruit(res.data.filter(food => food.parent_id === 34))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return {
        onSelectFood,
        selectedFood,
        addFood,
        deleteFood,
        createFood,
        foodIndex,
        foods,
        beef,
        fish,
        vegetable,
        bread,
        fruit,
    }
}

export default useFoods
