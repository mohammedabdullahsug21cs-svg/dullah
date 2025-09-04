import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Resume.pdf'



function Hero() {
  return (
    <div id="Home" className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Dullah Mohamed,</span>frontend developer based in Melapalayam</h1>
      <p>I am a frontend developer from melapalayum,with 2 months of experience and i have well knowledge in Sql.</p>
      <div className="hero-action">
        <div className="hero-connect" > <AnchorLink className='anchor-link' offset={50} href='#mywork'>Connect with me</AnchorLink></div>
       
        <div className="hero-resume">    <a href={resume} target="_blank" rel="noopener noreferrer">My Resume</a> </div>
        
        
      </div>
    </div>
  );
}

export default Hero