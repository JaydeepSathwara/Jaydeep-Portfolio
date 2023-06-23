import React from 'react';
import './About.css';
import profileImg from '../../assets/profileImg3.JPG';
import { FaAward } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { ImFolderOpen } from 'react-icons/im';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_img">
            <img src={profileImg} alt="About Profile Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>
            <article className='about_card'>
              <HiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>12</small>
            </article>
            <article className='about_card'>
              <ImFolderOpen className='about_icon' />
              <h5>Project Completed</h5>
              <small>3+ Years Experience</small>
            </article>
          </div>
          <div className="about_contant">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque autem, magni obcaecati culpa ullam pariatur eligendi, hic alias reiciendis illo tempore ipsum? Dolore quas similique perferendis sunt labore nam.</p>
          </div>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About