import React from 'react';
import './home.css';

const Home = () => {
  const handleDownloadResume = () => {
    const resumeUrl = '/ResumeUX.pdf';
    window.open(resumeUrl, '_blank');
  };
  return (
    <div className='home'>
      <img src= "images/test.jpg" alt="" className='imghome'/>
      <div className='circle'></div>
      <div className='strokes'>
        /////
      </div>
      <div className='strokes1'>
        /////
      </div>
      <p className='txt1'>Hello, I'm Luck,</p>
      <p className='txt2'>Web <br/>
        Developer</p>
      <p className='txt3'>Based in Kenya.</p>
      
      <button className='button' onClick={handleDownloadResume}>Resume</button>
      

     </div>
  )
}

export default Home
