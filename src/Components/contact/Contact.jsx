import './contact.css'
import { SiWhatsapp } from 'react-icons/si'
import { AiOutlineMail } from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l0i3ewb', 'template_nfjfozn', form.current, 'HoY1BBPOHNMJuSZUA')
     e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ayshamustapha99@gmail.com</h5>
            <a href='mailto:ayshamustapha99@gmail.com' target={'_blank'}>Send a message</a>
          </article>


          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+2340999414441</h5>
            <a href='https://api.whatsapp.com/send?phone=+2349099414441' rel="noreferrer" target={'_blank'}>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}


        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' aria-rowcount={7} placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact