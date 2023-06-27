import React from 'react';
import './Projects.css';
import projectImg1 from '../../assets/projectImg1.jpg';
import projectImg2 from '../../assets/projectImg2.jpg';
import projectImg3 from '../../assets/projectImg3.png';
import projectImg4 from '../../assets/projectImg4.jpg';
import projectImg5 from '../../assets/projectImg5.jpg';
import projectImg6 from '../../assets/projectImg1.jpg';
import { BsFileEarmarkCodeFill } from 'react-icons/bs';

const data = [
  {
    id: 1,
    image: projectImg1,
    title: 'Travelling Booking/Rent Website',
    github: 'https://github.com/JaydeepSathwara/Travelling-Website-Using-React',
    demo: ''
  },
  {
    id: 2,
    image: projectImg2,
    title: 'E-commerce Website',
    github: 'https://github.com/JaydeepSathwara/JSstore-MERN-Stack-Project-',
    demo: 'https://jaydeep-agriculture.netlify.app'
  },
  {
    id: 3,
    image: projectImg3,
    title: 'Poesture Detector',
    github: 'https://github.com/JaydeepSathwara/Posture-Detector-Using-PoseNet',
    demo: 'https://jaydeepsathwara.github.io/Posture-Detector-Using-PoseNet/'
  },
  {
    id: 4,
    image: projectImg4,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://jaydeep-agriculture.netlify.app'
  },
  {
    id: 5,
    image: projectImg5,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://jaydeep-agriculture.netlify.app'
  },
  {
    id: 6,
    image: projectImg6,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://jaydeep-agriculture.netlify.app'
  }
]

const Projects = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects <BsFileEarmarkCodeFill /></h2>

      <div className="container project_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='project_item'>
                <div className="project_img">
                  <img src={image} alt="Project Images" />
                </div>
                <h3>{title}</h3>
                <div className="project_btn">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  {demo && (<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>)}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects