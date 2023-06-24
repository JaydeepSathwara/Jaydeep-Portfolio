import React, { useState } from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')} title="Home"><AiOutlineHome /></a>
      <a href="#about" className={activeNav === 'about' ? 'active' : ''} onClick={() => setActiveNav('about')} title="About"><AiOutlineUser /></a>
      <a href="#experience" className={activeNav === 'experience' ? 'active' : ''} onClick={() => setActiveNav('experience')} title="Experience"><BiBook /></a>
      <a href="#portfolio" className={activeNav === 'portfolio' ? 'active' : ''} onClick={() => setActiveNav('portfolio')} title="Portfolio"><RiServiceLine /></a>
      <a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => setActiveNav('contact')} title="Contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav