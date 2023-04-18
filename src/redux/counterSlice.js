import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

export const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        increase: (state, action) => {
            state.counter += 1
        },
        decrease: (state, action) => {
            state.counter -= 1
        },
        setCounter: (state, action) => {
            state.counter = action.payload
        }
    }
})



export const { increase, decrease, setCounter } = counterSlice.actions

export default counterSlice.reducer