
import React from 'react';
import Input from '../Input';
import '../../index.css'
import logInImage from '/pic4.png'
const LoginPage = () => {
   
    
    return (
        
        <div className='absolute bg-slate-200  min-h-screen  citems-center flex w-full bg-opacity-50 backdrop-blur-md'  >
        <div className=' bg-white flex w-6/12 h-2/4  centered-element rounded-lg'  >
            <img src= {logInImage} alt="pic" width="400px" />
            <div className="" width="500px">
                 <Input></Input>
            </div>
        </div>
        </div>
    
        
    );
};

export default LoginPage;