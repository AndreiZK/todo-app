import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import { collection, addDoc, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';

const docRef = collection(db, 'todos')

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (uid) => {
    const todosSnapshot = await getDocs(query(docRef, where('userId', '==', uid)))
    const todos = todosSnapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })
    console.log(todos)
    return todos
})

export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
    const newTodoSnapshot = await addDoc(docRef, todo)
    const docId = newTodoSnapshot.id
    return {
        ...todo,
        id: docId
    }
})

export const removeTodo = createAsyncThunk('todos/removeTodo', async (id) => {
    console.log(`id: ${id}`)
    await deleteDoc(doc(docRef, id))
    return id
})

const initialState = {
    todos: [],
    status: 'idle',
    error: null
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.todos = action.payload
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addTodo.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.todos = [...state.todos, action.payload]
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(removeTodo.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.todos = state.todos.filter(todo => todo.id !== action.payload)
            })
            .addCase(removeTodo.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default todoSlice.reducer