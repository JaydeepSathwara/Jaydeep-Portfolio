import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='experience_title'>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Web Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Laravel Framework</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>MYSQL Database</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Postman API</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>HTMl</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            {/* <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Team Work</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article> */}
          </div>
        </div>
        {/* Frontend End */}
        <div className="experience_backend">
          <h3>Other Skills</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Data Science</h4>
                <small className='text-light'>Basics</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Machine Learning</h4>
                <small className='text-light'>Basics</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Data Structure</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Algorithms</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Team Work</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Communication</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience