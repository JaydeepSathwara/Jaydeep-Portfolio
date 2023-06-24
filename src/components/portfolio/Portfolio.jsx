import React from 'react';
import './Portfolio.css';
import projectImg1 from '../../assets/projectImg1.jpg';
import projectImg2 from '../../assets/projectImg2.jpg';
import projectImg3 from '../../assets/projectImg3.jpg';
import projectImg4 from '../../assets/projectImg4.jpg';
import projectImg5 from '../../assets/projectImg5.jpg';
import projectImg6 from '../../assets/projectImg1.jpg';

const data = [
  {
    id: 1,
    image: projectImg1,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://jaydeep-agriculture.netlify.app'
  },
  {
    id: 2,
    image: projectImg2,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://jaydeep-agriculture.netlify.app'
  },
  {
    id: 3,
    image: projectImg3,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://jaydeep-agriculture.netlify.app'
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

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_img">
                  <img src={image} alt="Project Images" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_btn">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio