import {configureStore} from '@reduxjs/toolkit'
import mainNews from '../components/mainNews/mainNewsSlice'
import header from '../components/header/headerSlice'

const store = configureStore({
    reducer: {mainNews, header},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store