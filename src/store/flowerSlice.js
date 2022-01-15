import { createSlice } from "@reduxjs/toolkit"

import flowers from "../assets/flowers/flowers"

const initState = {

    filterBy: '',

    flowers: [
        {   
            id: Math.random(),
            title: 'Летний букет с подсолнухами ',
            price: 9700,
            stars: 4.5,
            url: flowers[0],
            date: 'Mar 12 2019'

        },
        {
            id: Math.random(),
            title: 'Микс из шести цветов ',
            price: 6500,
            stars: 4.5,
            url: flowers[1],
            date: 'Mar 15 2021'

        },
        {
            id: Math.random(),
            title: 'Летний букет с подсолнухами  ',
            price: 3000,
            stars: 5,
            url: flowers[2],
            date: 'Sep 7 2021'

        },
    
        {
            id: Math.random(),
            title: 'Летний букет с подсолнухами ',
            price: 7000,
            stars: 4.5,
            url: flowers[3],
            date: 'Jun 15 2022'

        },
    
        {
            id: Math.random(),
            title: 'Микс из шести цветов ',
            price: 1600,
            stars: 4.5,
            url: flowers[4],
            date: 'Oct 20 2020'

        },
    
        {
            id: Math.random(),
            title: 'Летний букет с подсолнухами  ',
            price: 5000,
            stars: 5,
            url: flowers[5],
            date: 'May 14 2017'

        },
        {
            id: Math.random(),
            title: 'Микс из шести цветов ',
            price: 8900,
            stars: 4.5,
            url: flowers[4],
            date: 'Mar 2 2017'

        },
    
        {
            id: Math.random(),
            title: 'Летний букет с подсолнухами  ',
            price: 4000,
            stars: 5,
            url: flowers[5],
            date: 'Jul 1 2018'

        },
        {
            id: Math.random(),
            title: 'Микс из шести цветов ',
            price: 2300,
            stars: 4.5,
            url: flowers[4],
            date: 'Sep 9 2019'

        },
    
    ],
}


const flowerSlice = createSlice({
    name: 'flowerSlice',
    initialState: initState,
    reducers: {
        filterBy(state, action) {
            if(action.payload === 'cheapFirst') state.flowers.sort( (a, b) => a.price - b.price)
            if(action.payload === 'expensiveFirst') state.flowers.sort( (a, b) => b.price - a.price)
            if(action.payload === 'newFirst') state.flowers.sort( (a, b) => new Date(b.date) - new Date(a.date) )
        },


    }
})

export const { filterBy } = flowerSlice.actions



export default flowerSlice.reducer