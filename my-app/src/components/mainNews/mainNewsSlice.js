import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {useHttps} from '../../hooks/http.hook'

export const mainNewsThunk = createAsyncThunk(
    'mainNews/asyncMainNews',
    async () => {
        const {request} = useHttps()
        return await request('https://newsdata.io/api/1/news?apikey=pub_1828289c774c1fecbb02f45e91cf5f6762909&language=en')
    }
)

const initialState = {
    mainNews: [],
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
                state.mainNews = action.payload
                console.log(action.payload)
            })
            .addCase(mainNewsThunk.rejected, state => {state.mainNewsProcess = 'error'})
    }
})

const {actions, reducer} = mainNewsSlice;

export default reducer
