import React, { useState } from 'react';
import '../index.css'
import axios from 'axios';
import { useEffect } from 'react';
const Input = () => {
    const[data,setData]=useState(null)
    const loginPayload={
        email:'baziziwardia@gmail.com',
        password:'wardia'
    }
useEffect(()=>{
                    
        axios.post("http://192.168.15.213:5000/login",loginPayload)
        .then(Response=>{setData(Response)})
        console.log(data)
        console.log("hello")
    })
    return (


        <div className='p-10 w-min w-9/12 flex flex-col items-center justify-center p-6'>
            <h1 className='text-3xl font-semibold'> Créez votre compte</h1>
            <br /><br />
            <form >
                <label class="relative block" >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                    height="30" viewBox="0 0 30 30">
                    <path
                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                    </path>
                </svg>
                </span>  
                <input type="text" class="py-2 pl-10 pr-4 form-control block w-full px-4 py-2 text-xl text-gray-700 bg-gray-200 bg-clip-padding border border-solid rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 placeholder="Name" />
                </label>
                <br/>
                <label class="relative block">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg fill="#000000" width="25px" height="25px" viewBox="0 -2.04 16 16" id="mail-16px" xmlns="http://www.w3.org/2000/svg">
                 <path id="Path_76" data-name="Path 76" d="M-8.417,3.169a2.493,2.493,0,0,0-.707-.707A2.481,2.481,0,0,0-10.5,2.045h-11a2.481,2.481,0,0,0-1.376.417,2.493,2.493,0,0,0-.707.707A2.483,2.483,0,0,0-24,4.545v6.91a2.5,2.5,0,0,0,2.5,2.5h11a2.5,2.5,0,0,0,2.5-2.5V4.545A2.483,2.483,0,0,0-8.417,3.169ZM-21.5,3.045h11a1.48,1.48,0,0,1,.643.151L-16,9.338-22.143,3.2A1.48,1.48,0,0,1-21.5,3.045Zm11,9.91h-11a1.48,1.48,0,0,1-.643-.151l3.087-3.087a.5.5,0,0,0,0-.707.5.5,0,0,0-.707,0L-22.85,12.1a1.489,1.489,0,0,1-.15-.642V4.545a1.489,1.489,0,0,1,.15-.642l6.5,6.5a.5.5,0,0,0,.354.146.5.5,0,0,0,.354-.146l6.5-6.5A1.489,1.489,0,0,1-9,4.545v6.91a1.489,1.489,0,0,1-.15.642L-12.237,9.01a.5.5,0,0,0-.707,0,.5.5,0,0,0,0,.707L-9.857,12.8A1.48,1.48,0,0,1-10.5,12.955Z" transform="translate(24 -2.045)"/>
                </svg>
                </span> 
                <input type="text" class="py-2 pl-10 pr-4 form-control block w-full px-4 py-2 text-xl text-gray-700 bg-gray-200 bg-clip-padding border border-solid rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 placeholder="Email address" />
                </label>
                <br/>
                <input type="submit" value="Se connecter" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                />
                <br/><br />
                <a href="/" text-2xl>Créer un compte </a>


        </form>
        </div>
    );
};

export default Input;