import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { ImWhatsapp } from 'react-icons/im'
import ContactCard from './ContactCard'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1xj7m8j', 'template_di9vlbk', form.current, 'AjmuayRyo7ZZpoC_Z')
      .then((result) => {
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };
  const contacts = [
    { icon: HiOutlineMail, type: "Email", detail: "acountisdummy@gmail.com", action: "mailto:acountisdummy@gmail.com" },
    { icon: RiMessengerLine, type: "Messenger", detail: "userName", action: "https://m.me/username" },
    { icon: ImWhatsapp, type: "Whatsapp", detail: "+20 1010101010", action: "https://api.whatsapp.com/send?phone=01010101010" },
  ]

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {
            contacts.map(
              (contact, index) => <ContactCard key={index} contact={contact} />
            )
          }
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary' value="Send">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact