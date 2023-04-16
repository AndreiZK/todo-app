import { useState } from "react";
import { addTodo } from "../store/slices/TodosSlice";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";

import { Button, TextField, Container } from "@mui/material";

const TodoInput = () => {

    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const {id} = useAuth()

    const handleChange = (e) => {
        if(e.target.value !== ('' || ' ')) {
            setText(e.target.value)
        }
    }

    return (
        <Container sx={{
            display: 'flex',
            gap: '1rem'
        }}>
            <TextField
                fullWidth={true} 
                type="text" 
                placeholder="Create a new todo" 
                value={text}
                onChange={handleChange}
            />
            <Button
                variant="contained" 
                onClick={() => {
                    
                dispatch(addTodo({
                    todo: text,
                    userId: id,
                    completed: false}))
                setText('')
                    }}>Create Todo</Button>
        </Container>
    )
}

export default TodoInput