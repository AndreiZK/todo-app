import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../store/slices/TodosSlice";
import { removeTodo } from "../store/slices/TodosSlice";


import {List, ListItemButton, ListItemText, Container, Typography} from '@mui/material';
import TodoCheckIcon from "./TodoCheckIcon";


const TodoList = () => {

    const dispatch = useDispatch()
    const uid = useSelector(state => state.user.id)

    const todos = useSelector(state => state.todos.todos)

    const handleComplete = async (id) => {
        dispatch(removeTodo(id))
    }

    useEffect(() => {
        console.log('useEffect')
        dispatch(fetchTodos(uid))
    }, [dispatch])

    return (
        <Container maxWidth='md'>
            {todos.length > 0 ? 
            (<List sx={{margin: 'auto', minWidth: '50%'}}>{todos.map((todo, i) => {
                return (
                    <ListItemButton key={i}>
                        <ListItemText primary={todo.todo}/>
                    <TodoCheckIcon handleClick={handleComplete} todoId={todo.id}/>
                    </ListItemButton>
                )
            })}</List>) : 
            <Typography sx={{marginTop: '2rem'}} variant="h3">You have no todos</Typography>}
        </Container>
    )
}

export default TodoList