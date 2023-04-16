import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { setUser } from "../store/slices/UserSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth()
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate('/')
            })
            .catch(() => alert("Wasn't able to register user"))
    }


    return (
        <Form 
            title='sign up' 
            handleClick={handleRegister}    
        />
    )
}

export default Signup