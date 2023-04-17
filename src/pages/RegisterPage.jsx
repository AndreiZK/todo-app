import { Link } from "react-router-dom"
import Signup from "../components/Signup"
import { Container } from "@mui/material"

const RegisterPage = () => {
    return (
        <Container sx={{textAlign: 'center'}}>
            <h1>Register</h1>

            <Signup />

            <p>
                Already have an account? <Link to='/login'>Sign in</Link>
            </p>
        </Container>
    )
}

export default RegisterPage