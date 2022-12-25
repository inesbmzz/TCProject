import React from 'react';
import '../../index.css'
import Button from '../Button';
import NavBar from '../NavBar';


const  HomePage = ()=> {
    const myStyle ={
        
        backgroundImage: 
       "url('https://i.gaw.to/content/photos/40/55/405566_Sony_surprend_au_CES_2020_en_devoilant_une_voiture.jpg')",
       backgroundSize: 'cover',
       height:'100vh',
       backgroundRepeat: 'no-repeat',
    }
    const handleOnClick = ()=>{
        
    }
    return (

        <div style={myStyle}  >
            <div className='
            flex 
            flex-col
            h-screen
            bg-black
            bg-opacity-20'>
           
           <div className='h-1/5'/>

           <h1 className='
           ml-6
           text-white
           text-3xl
           font-medium
           '
           data-aos="fade-right">
            Vendez votre voiture facilement</h1>
           <h1 className='
           ml-6
           text-white
           text-3xl
           font-medium'
           data-aos="fade-up">
            Et achetez celle qui vous convient !</h1>
            <br/>
            <div className='
            flex 
            flex-col 
            ml-6'
            data-aos="fade-right" data-aos-duration="1000">
           <Button text = "Commencez maintenant" style={'px-2 py-3 text-white font-bold bg-transparent tracking-wide text-sm border-2 border-solid  m-2 w-60 text-center border-white'}></Button>
           <a href='#about'><Button  text = "Découvrez comment ça marche" style ={'px-2 py-3 text-white font-bold bg-yellow-500 tracking-wide text-sm border-2 border-solid  m-2 w-60 text-center border-white'}></Button>
           </a></div>
           </div>
        </div>
    );
}

export default HomePage;
