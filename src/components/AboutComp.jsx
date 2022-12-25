import React from 'react';

const AboutComp = ({text1,text2,morabaa}) => {
    return (
        <div className='flex flex-col flex-wrap justify-center  items-center  p-6 px-10 '>
            
            <img src={morabaa} 
            className='
                w-52
                h-52
                overflow-hidden
                rounded-full
                object-center
                
            '/>
             <h2 className='text-yellow-500 mt-5 w-52 text-center font-bold'> {text1}</h2>
             <p  className='text-gray-700 mt-1 w-52 text-center'> {text2}</p>
        </div>
    );
};

export default AboutComp;