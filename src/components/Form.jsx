import { useState } from "react";
import { Container, Button, TextField } from "@mui/material";

const Form = ({title, handleClick}) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <Container
            maxWidth='xs'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                gap: '1rem'
            }}
        >
            <TextField 
                fullWidth
                sx={{display: 'block'}}
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="email"/>
                
            <TextField
                fullWidth 
                sx={{display: 'block'}}
                type="password" 
                value={pass} 
                onChange={(e) => setPass(e.target.value)} 
                placeholder="password"/>
            <Button 
                sx={{
                    minWidth: '210px'
                }}
                onClick={() => handleClick(email, pass)}
                variant="contained"
                >{title}
            </Button>
        </Container>
    )
}

export default Form