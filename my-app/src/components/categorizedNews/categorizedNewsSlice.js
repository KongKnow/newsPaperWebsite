import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {useHttps} from '../../hooks/http.hook'


export const categorizedNewsThunk = createAsyncThunk(
    'categorizedNews/asyncCategorizedNews',
    async (category) => {
        const {request} = useHttps()
        return await request(`https://api.worldnewsapi.com/search-news?api-key=86a5e9b2d6b147bca5d4b7b81cb9cf2e&offset=4&number=4&text=${category}`)
    }
)

const initialState = {
    categorizedNews: [],
    categorizedNewsProcess: 'idle',
    category: 'financial'
}

const categorizedNewsSlice = createSlice({
    name: 'categorizedNewsSlice',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.category = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(categorizedNewsThunk.pending, state => {state.categorizedNewsProcess = 'loading'})
            .addCase(categorizedNewsThunk.fulfilled, (state, action) => {
                state.categorizedNewsProcess = 'success'
                state.categorizedNews = action.payload.news
            })
            .addCase(categorizedNewsThunk.rejected, state => {state.categorizedNewsProcess = 'error'})
    }
})

const {actions, reducer} = categorizedNewsSlice;

export default reducer
export const {changeCategory} = actions
