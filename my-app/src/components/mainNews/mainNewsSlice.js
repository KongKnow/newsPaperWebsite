import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {useHttps} from '../../hooks/http.hook'

export const mainNewsThunk = createAsyncThunk(
    'mainNews/asyncMainNews',
    async () => {
        const {request} = useHttps()
        return await request('https://api.worldnewsapi.com/search-news?api-key=835b9c377c684eb08486823ad146f94f&offset=4&number=8')
    }
)

const initialState = {
    mainNews: [],
    country: 'world',
    mainNewsProcess: 'idle'
}

const mainNewsSlice = createSlice({
    name: 'mainNewsSlice',
    initialState,
    reducer: {},
    extraReducers: builder => {
        builder
            .addCase(mainNewsThunk.pending, state => {state.mainNewsProcess = 'loading'})
            .addCase(mainNewsThunk.fulfilled, (state, action) => {
                state.mainNewsProcess = 'success'
                state.mainNews = action.payload.news
            })
            .addCase(mainNewsThunk.rejected, state => {state.mainNewsProcess = 'error'})
    }
})

const {actions, reducer} = mainNewsSlice;

export default reducer
