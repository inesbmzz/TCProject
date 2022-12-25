import React, { useEffect, useState } from 'react';
import LoginPage from './Pages/LoginPage';


const NavBar = () => {
   
    const[Active,setActive]=useState(false)
    const handleClick = ()=>{
        setActive(true)
    }
    useEffect (()=>{
        console.log('Hello')
    },[])
    return (
        <div>
        <div className='
        flex
        flex-row
        justify-between
        bg-white
        py-4
        ' 
        >
            <p className='ml-20'>LOGO</p>
            <div className='
             flex
             flex-row
            text-base
            text-yellow-500
            -ml-40
           
            '>
                <a href='' className='
                mr-4 
                hover:bg-gray-300 
                active:bg-gray-500 
                focus:outline-none  
                focus:bg-gray-500
                rounded-full
                font-medium
                p-1
                px-2 
                '> Vendre </a>
                <a href='' className='
                ml-4
                hover:bg-gray-300
                active:bg-gray-500 
                focus:outline-none  
                focus:bg-gray-500
                rounded-full
                font-medium
                p-1 
                px-2'> Acheter </a>
            </div>
            <div className='w-1/12'></div>
            <div className='
                flex
                flex-row
                mr-12
                text-gray-600
                text-sm
                '>
                <a onClick={handleClick} href='' className='hover:underline'>S'inscrire</a>
                <p className='mx-1'> | </p>
                <a href='' className='hover:underline'>Se connecter</a>
            </div>
        </div>
        <div>
            {
                Active ? <LoginPage   ></LoginPage> : <></>
            }
            
        </div>
        </div>
    );
};

export default NavBar;