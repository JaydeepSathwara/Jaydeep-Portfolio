import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si'

const SocialLinks = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/jaydeep-sathwara/" target='_black'><BsLinkedin /></a>
        <a href="https://www.linkedin.com/in/jaydeep-sathwara/" target='_black'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/jaydeep-sathwara/" target='_black'><SiLeetcode /></a>
    </div>
  )
}

export default SocialLinks