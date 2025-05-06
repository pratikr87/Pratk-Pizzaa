import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg'; 
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
     <div className='leftSide' 
     style={{ backgroundImage: `url(${PizzaLeft})` }}></div>

      <div className='rightside'>
        <h2>Contact Us</h2>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name='name' placeholder='Enter Full Name...' type='text' />

          <label htmlFor="email">Email</label>
          <input name='email' placeholder='Enter Email...' type='email' />

          <label htmlFor="message">Message</label>
          <textarea rows="6" name='message' placeholder='Enter your message...'></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
