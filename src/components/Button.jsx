import React from 'react';
import '../index.css'

const Button = ({text,style}) => {
    return (
     
        <button className ={style}>{text}</button>
    
    );
};

export default Button;