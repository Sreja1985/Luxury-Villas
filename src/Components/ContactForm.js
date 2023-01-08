import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <section className='form__container'>

        <h1> Send us a message</h1>
        <form action='https://httpbin.org/get' method='get'>
            <input placeholder='Name' type='text' name='name' id='name' required />
            <input placeholder='Email' type='email' name='email' id='email' required/>
            <input placeholder='Subject' type='text' name='subject'  id='subject' required/>
            <textarea placeholder='Message' name='message' type='text' rows='5' required></textarea>
            <button type='submit'>Send</button>
        </form>
        
    </section>
  )
}

export default ContactForm