import React from 'react';
import AboutComp from '../AboutComp';
import Button from '../Button';
import morabaa1 from '/pic1.jpg'
import morabaa2 from '/pic2.jpg'
import morabaa3 from '/pic3.jpg'


const AboutUs = () => {
    return (
        <div className='h-screen flex flex-col items-center  '>
         <div className='h-100'></div>
         <div data-aos="fade-down">
         <h1 className='px-2 py-3 text-gray-700 font-bold tracking-wide text-2xl m-2 w-60 text-center underline'>Notre démarche</h1>
         </div>
         <div className='h-55'></div>
        <div className='  flex flex-row justify-around w-full' id='about'>
            <div data-aos="fade-down-right">
          <AboutComp text1={'Recherchez la voiture qui vous convient, ou mettez en vente la votre.'} text2={'Notre platforme ne vous permet pas seulement de choisir votre nouvelle voiture mais vous facilite aussi le process grâce aux différents filtres proposés.'} morabaa={morabaa1}></AboutComp>
          </div>
          <div data-aos="flip-right" data-aos-duration="1000">
          <AboutComp text1={'Contactez le vendeur.'} text2={'Notre platforme vous met en contact avec le vendeur, et ce, en lui laissant une note quil pourra consulter à travers son profile. Vous pouvez même le contacter via son e-mail ou lappeler sur son téléphone.                          '} morabaa={morabaa2}></AboutComp>
          </div>
          <div data-aos="fade-down-left" data-aos-duration="2000" >
          <AboutComp text1={'Finalisez votre échange'} text2={'Retrouvez votre vendeur/acheteur afin de finaliser votre échange.'} morabaa={morabaa3}></AboutComp>
          </div>
        </div>
        </div>
    );
};

export default AboutUs;