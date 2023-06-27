import React from 'react';
import './Contact.css';
import {MdEmail} from 'react-icons/md';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Contact!</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_icon' />
            <h4>Email</h4>
            <h5>jaydeepsathwara272@gmail.com</h5> 
            <a href="mailto:jaydeepsathwara272@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <AiFillLinkedin className='contact_icon' />
            <h4>LinkedIn</h4>
            <h5>Jaydeep Sathwara</h5>
            <a href="https://www.linkedin.com/in/jaydeep-sathwara/" target='_blank'>Get Connected</a>
          </article>
          <article className="contact_option">
            <BsGithub className='contact_icon' />
            <h4>Github</h4>
            <h5>Jaydeep Sathwara</h5>
            <a href="https://github.com/JaydeepSathwara/" target='_blank'>Get Connected</a>
          </article>
        </div>
        {/* <form action="">
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <input type="email" name='email' placeholder='Enter Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact