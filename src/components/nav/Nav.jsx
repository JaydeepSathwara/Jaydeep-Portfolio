import React, { useState } from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiFillTrophy} from 'react-icons/ai';
import {PiStudentFill} from 'react-icons/pi';
import {BsFileEarmarkCodeFill} from 'react-icons/bs';
import {BiMessageSquareDetail} from 'react-icons/bi';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')} title="Home"><AiOutlineHome /></a>
      <a href="#about" className={activeNav === 'about' ? 'active' : ''} onClick={() => setActiveNav('about')} title="About"><AiOutlineUser /></a>
      <a href="#experience" className={activeNav === 'experience' ? 'active' : ''} onClick={() => setActiveNav('experience')} title="Experience"><PiStudentFill /></a>
      <a href="#project" className={activeNav === 'project' ? 'active' : ''} onClick={() => setActiveNav('project')} title="Projects"><BsFileEarmarkCodeFill /></a>
      <a href="#achieve" className={activeNav === 'achieve' ? 'active' : ''} onClick={() => setActiveNav('achieve')} title="Achievement"><AiFillTrophy /></a>
      <a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => setActiveNav('contact')} title="Contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav