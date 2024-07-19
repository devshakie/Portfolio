import React from 'react';
import './contacts.css';
import { Link } from 'react-scroll';

const Contacts = () => {
  return (
    <div id='contacts'>
      <h2 className='title'>contacts.</h2>
      <img
        src='./images/contact.jpg'
        alt='project '
        className='contact-img' 
      />
      <div className='contact-info-upper-container'>
        <p>Get in touch! I would love to hear from you.</p>
        <div className='contact-info-container'>
          <img src='images/email-icon.jpg' alt='email icon' className='contact-icon email-icon' />
          <p className='p' ><a href='mailto:kanana.shakira@gmail.com'>Email</a></p>
        </div>
        <div className='contact-info-container'>
          <img src='images/linkedin-icon.jpg' alt='linkedin icon' className='contact-icon linkedin-icon' />
          <p className='p'><a href='https://www.linkedin.com/in/luckshakira-kanana-0733b923b' target='_blank' rel='noopener noreferrer'>LinkedIn Profile</a></p>
        </div>
        <div className='contact-info-container'>
          <img src='images/x-icon.jpg' alt='x icon' className='contact-icon x-icon' />
          <p className='p'><a href='https://x.com/shakks__' target='_blank' rel='noopener noreferrer'>X</a></p>
        </div>
        <div className='contact-info-container'>
          <img src='images/phone-icon.jpg' alt='phone icon' className='contact-icon phone-icon' />
          <p className='p'><a href='tel:0790192373'>Phone</a></p>
        </div>
      </div>
      <div className='totop'>
        <Link to='home' spy={true} smooth={true} offset={-40} duration={500}>up</Link>
      </div>
    </div>
  )
}

export default Contacts;
