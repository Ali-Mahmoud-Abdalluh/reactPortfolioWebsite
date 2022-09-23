import './about.css'
import { meAbout } from '../../assets/'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about__contaienr">

        <div className="about__me">
          <div className="about__me-image">
            <img src={meAbout} alt="my image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+<br />Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+<br />Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+<br />Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati voluptates laudantium necessitatibus vitae a. Aliquid, inventore sequi sed hic, ut, ad aut optio tempore esse totam quibusdam doloremque? Dicta distinctio quia facere id! Ab, architecto porro vitae deserunt, harum cumque eos omnis cupiditate ducimus labore consequatur corporis voluptates quos! Consectetur?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About