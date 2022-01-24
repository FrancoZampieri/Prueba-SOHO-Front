import React from 'react';
import './Hero.scss';
import  Button  from '../Button/Button';
import Navbar from '../Navbar/Navbar';


const Hero = () => {
    return <div className='hero px-4 py-5 text-center'>
          <Navbar></Navbar>
          <div className='hero-container'>
          <div className='hero-text-container'>
            <h2>Nos especializamos en <br />
                <span>interfaces digitales que los usuarios aman</span>
            </h2>
        </div>
        <Button text={'HABLEMOS DE TU PROYECTO'} backgroundColor={'#17d92c'}></Button>
          </div>
        
        
    </div>
    ;

}

export default Hero;
