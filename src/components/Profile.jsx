import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import "../index.css"


const Profile=()=> {
    const user = useSelector((state)=>state.user.value)
    console.log(user)
    return (
        <div>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <input type="text" className='bg-pink-200' ></input>
            <Login></Login>
        </div>
    );
}

export default Profile;