import { AppBar, Toolbar, Container, Typography, Button } from "@mui/material"
import ChecklistIcon from '@mui/icons-material/Checklist';

import { removeUser } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'

const Header = () => {

    const dispatch = useDispatch()

    return (
        <AppBar>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Container sx={{marginRight: 'auto', marginLeft: '0', display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <ChecklistIcon />
                    <Typography variant="h6">Todo app</Typography>
                </Container>
                <Button variant="contained" sx={{fontSize: '1em', paddingBottom: 0, minWidth: '110px'}} onClick={() => dispatch(removeUser())}>Log out</Button>
            </Toolbar>
        </AppBar>
    )   
}

export default Header