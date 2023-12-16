import {configureStore} from '@reduxjs/toolkit'
import {useReducerCard} from './Reducer/TrendingStor'

const store = configureStore({
    reducer : {
        useCard : useReducerCard
    }
})

export  {store}