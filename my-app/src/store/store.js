import {configureStore} from '@reduxjs/toolkit'
import mainNews from '../components/mainNews/mainNewsSlice'

const store = configureStore({
    reducer: {mainNews},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store