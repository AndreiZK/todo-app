import { Link } from "react-router-dom"
import Login from "../components/Login"
import { Container } from "@mui/material"

const LoginPage = () => {
    return (
        <Container sx={{textAlign: 'center'}}>
            <h1>Log in</h1>

            <Login />

            <p>
                Or <Link to='/register'>register</Link>
            </p>

        </Container>
    )
}

export default LoginPage