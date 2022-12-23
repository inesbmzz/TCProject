import React from 'react';
import { useDispatch } from 'react-redux';
import {login} from "../features/user"

const Login = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>{dispatch(login({name:"ines",email:"ki_boumazouza@esi.dz"}))}}>Log In</button>
        </div>
    );
};

export default Login;