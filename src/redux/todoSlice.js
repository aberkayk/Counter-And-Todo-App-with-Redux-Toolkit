import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    todos: [
        {
            id: "1",
            title: "Header component",
            owner: " John",
            is_done: false,
            assigned_at: "01/01/2023 12:00 AM",
            target_hour: 2
        },
        {
            id: "2",
            title: "Footer component",
            owner: "Jane",
            is_done: false,
            assigned_at: "03/02/2023 09:00 AM",
            target_hour: 2
        },
        {
            id: "3",
            title: "Button component",
            owner: "Joenna",
            is_done: true,
            assigned_at: "03/01/2023 07:00 PM",
            target_hour: 3
        },
        {
            id: "4",
            title: "Main page",
            owner: "Josh",
            is_done: false,
            assigned_at: "05/01/2023 08:30 AM",
            target_hour: 8
        },
        {
            id: "5",
            title: "Modal component",
            owner: "Kenny",
            is_done: true,
            assigned_at: "07/02/2023 11:30 AM",
            target_hour: 4
        }
    ]
}

export const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addEditTodo: (state, action) => {
            if (action.payload.id) {
                const foundIndex = state.todos.findIndex((item) => parseInt(item.id) === parseInt(action.payload.id))
                state.todos[foundIndex] = action.payload
            } else {
                let maxId = state.todos.length + 1
                action.payload.id = maxId
                state.todos.push(action.payload)
            }
        },
        removeTodo: (state, action) => {
            console.log(state.todos);
            const foundIndex = state.todos.findIndex((item) => parseInt(item.id) === parseInt(action.payload))
            state.todos.splice(foundIndex, 1)
            console.log(state.todos)
        },
        clearTodo: (state, action) => {
            state.todos = []
        }
    }
})

export const { addEditTodo, removeTodo, clearTodo } = todoSlice.actions

export default todoSlice.reducer