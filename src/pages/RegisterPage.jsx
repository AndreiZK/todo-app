import { Link } from "react-router-dom"
import Signup from "../components/Signup"

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>

            <Signup />

            <p>
                Already have an account? <Link to='/login'>Sign in</Link>
            </p>
        </div>
    )
}

export default RegisterPage