import React from 'react';
import './Footer.css';
import {MdEmail} from 'react-icons/md';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Jaydeep Sathwara</a>
      <ul className='footer-links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
      <div className="footer-social-links">
        <a href="mailto:jaydeepsathwara272@gmail.com" target='_black'><AiFillLinkedin className='footer_icons' /></a>
        <a href="https://www.linkedin.com/in/jaydeep-sathwara/" target='_black'><MdEmail className='footer_icons' /></a>
        <a href="https://github.com/JaydeepSathwara/" target='_black'><BsGithub className='footer_icons' /></a>
      </div>
    </footer>
  )
}

export default Footer