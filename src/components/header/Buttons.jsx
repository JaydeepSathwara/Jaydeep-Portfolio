import React from 'react';
import RESUME from '../../assets/resume.pdf';
const Buttons = () => {
  return (
    <div className='header_btns'>
        <a href={RESUME} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Buttons