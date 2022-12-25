import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import "../index.css"
import { useDispatch } from 'react-redux';
import {login} from "../features/user"




const Profile=()=> {
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user.value)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const handleChange = (event) => {
        setName(event.target.value);
    
        console.log('value is:', event.target.value);
      };
      const handleChange2 = (event) => {
        setEmail(event.target.value);
    
        console.log('value is:', event.target.value);
      };
    console.log(user)
    return (
        <div>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <input 
                type="text" 
                className='bg-pink-200'
                placeholder='Name'
                 onChange={handleChange}/>
            <br/>
            <input
                type = "text" 
                className='bg-purple-700'
                placeholder='Email' 
                onChange={handleChange2}/>

            <button onClick={()=>{dispatch(login({name:name,email:email}))}}>Log In</button>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <Login></Login>
            
        </div>
    );
}

export default Profile;