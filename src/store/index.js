import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import todosReducer from './slices/TodosSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        todos: todosReducer
    } 
})