import React from 'react';
import { useSelector } from 'react-redux';
import {login} from "../features/user"

const Login = () => {
    const user = useSelector((state)=>state.user.value)
    console.log(user)
    return (
        <div>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
        </div>
    );
};

export default Login;