import '../App.css';
import React from 'react';

//iconos
import { IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const Footer = React.memo(() => {
  return (
    <div className='text-white py-4 bg-dark'>
      <div className="container">
        <ul className="footerRedes">
          <li><i className="fab fa-whatsapp"/><IoLogoWhatsapp size='2.5rem' color='white'/>Whatsapp</li>
          <li><i className="fab fa-instagram"/><IoLogoInstagram size='2.5rem' color='white'/>Instagram</li>
          <li><i className="fab fa-github"/><BsGithub size='2.5rem' color='white'/>GitHub</li>
          <li><i className="fab fa-linkedin"/><BsLinkedin size='2.5rem' color='white'/>Linkedin</li>
        </ul>
        <p className='footerRedes'>© LASKA 2023. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </div>
  );
})