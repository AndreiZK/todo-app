
import CheckIcon from '@mui/icons-material/Check';
import ListItemIcon from '@mui/material/ListItemIcon';

const TodoCheckIcon = ({handleClick, todoId}) => {
    return (
        <ListItemIcon onClick={() => handleClick(todoId)}>
            <CheckIcon sx={{
                '&:hover': {
                    color: 'blue'
                }
            }} />
        </ListItemIcon>
    )
}

export default TodoCheckIcon