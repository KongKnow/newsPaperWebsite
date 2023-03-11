import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {useHttps} from '../../hooks/http.hook'


export const sliderNewsThunk = createAsyncThunk(
    'sliderNews/asyncSliderNews',
    async () => {
        const {request} = useHttps()
        return await request('https://api.worldnewsapi.com/search-news?api-key=86a5e9b2d6b147bca5d4b7b81cb9cf2e&offset=10&number=10')
    }
)

const initialState = {
    sliderNews: [],
    sliderNewsProcess: 'idle'
}

const sliderNewsSlice = createSlice({
    name: 'sliderNewsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(sliderNewsThunk.pending, state => {state.sliderNewsProcess = 'loading'})
            .addCase(sliderNewsThunk.fulfilled, (state, action) => {
                state.sliderNewsProcess = 'success'
                state.sliderNews = action.payload.news
            })
            .addCase(sliderNewsThunk.rejected, state => {state.sliderNewsProcess = 'error'})
    }
})

const {actions, reducer} = sliderNewsSlice;

export default reducer