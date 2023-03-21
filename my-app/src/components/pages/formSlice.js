import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    name: null
}

const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
            state.name = action.payload.name
        },
        removeUser: (state) => {
            state.email = null
            state.token = null
            state.id = null
            state.name = null
        }
    }
})

const {actions, reducer} = formSlice

export default reducer
export const {setUser, removeUser} = actions