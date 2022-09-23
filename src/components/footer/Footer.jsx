import React from 'react'
import './footer.css'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'


const Footer = () => {

  const permalinks = [
    { dir: "#", name: "Home" },
    { dir: "#about", name: "About" },
    { dir: "#experience", name: "Experience" },
    { dir: "#services", name: "Services" },
    { dir: "#portfolio", name: "Portfolio" },
    { dir: "#testimonials", name: "Testimonials" },
    { dir: "#contact", name: "Contact" },
  ]

  const socials = [
    { link: "https://www.facebook.com", icon: FaFacebookF },
    { link: "https://www.instagram.com", icon: FaInstagram },
    { link: "https://www.twitter.com", icon: FaTwitter },
  ]

  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>YOUR_LOGO</a>

      <ul className='permalinks'>


        {
          permalinks.map((link, index) => <li key={index}><a href={link.dir}>{link.name}</a></li>)
        }


      </ul>

      <div className='footer__socials'>


        {
          socials.map((social, index) => <a key={index} href={social.link}>{<social.icon className='footer__socials-icon' />}</a>)
        }

      </div>

      <div className="footer__copyright">
        <small>&copy; Every one can use this code without needing my confirmation to use it.</small>
      </div>
    </footer>
  )
}

export default Footer