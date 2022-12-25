import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {login} from "../features/user"

const Login = () => {
    const user = useSelector((state)=>state.user.value)
    
    console.log(user)
    const handleClick=()=>{
      const  user = useSelector((state)=>state.user.value);
        <div> 
             <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
        </div>
    }
    return (
        <div>
             <p>Namelo : {user.name}</p>
            <p>Emaillo : {user.email}</p>
            <a href="/">check</a>
        </div>
    );
};

export default Login;