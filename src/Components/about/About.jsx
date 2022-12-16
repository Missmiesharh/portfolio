import './about.css'
import Me from '../../assets/Me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know me</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src= {Me} alt = 'About Image' />
          </div>
        </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward  className='about_icon'/>
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>

              <article className='about__card'>
                <FiUsers  className='about_icon'/>
                <h5>Clients</h5>
                <small>6 worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Projects</h5>
                <small>4+ Completed</small>
              </article>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Similique a sunt consectetur ea ab, quaerat laboriosam porro suscipit perferendis ex corporis eveniet beatae necessitatibus vitae modi veniam laudantium!
               Libero non nihil soluta, quos necessitatibus dignissimos velit, possimus quibusdam nam excepturi consequatur perferendis odit nobis reiciendis voluptate?
                Qui blanditiis et est voluptate assumenda perferendis, minus, omnis earum placeat tenetur accusamus, doloremque quis dolores sunt nisi explicabo excepturi mollitia aliquid iste necessitatibus?
                 Nam dolorum facilis, numquam ipsum ea eveniet. Totam aperiam dolorem laudantium ab ut.
               Rerum sequi minima pariatur modi excepturi fugiat?</p>

            
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>
     
    </section>
  )
}

export default About