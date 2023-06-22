import React from 'react';
import './Header.css';
import Buttons from './Buttons';
import profileImg from '../../assets/profileImg.png';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Jaydeep Sathwara</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Buttons />
        <SocialLinks />
        <div className="profile_img">
          <img src={profileImg} alt="" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header