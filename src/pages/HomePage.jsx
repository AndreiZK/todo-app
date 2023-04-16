import {Navigate} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'

import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import { Container, Typography } from '@mui/material'

import Header from '../components/Header'

const HomePage = () => {

    const {isAuth, email} = useAuth()

    return isAuth ? (
        <Container>
            <Header />
            <Container maxWidth='md' sx={{marginTop: '6em'}}>
                
                <TodoInput />
                <TodoList />
            </Container>
        </Container>
    ) : (
        <Navigate to='/login'/>
    )
}

export default HomePage