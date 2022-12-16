import './footer.css'
import {FiLinkedin} from  "react-icons/fi"
import {BsInstagram} from  "react-icons/bs"
import {BsTwitter} from  "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Musty</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href='https://www.linkedin.com/in/aisha-mustapha-281aa31a6' rel='/'  target="_blank"> <FiLinkedin/> </a>
      <a href='https:/instagram.com/ ' rel='/'  target="_blank"> <BsInstagram/> </a>
      <a href='https://twitter.com/Musty_55_?t=FyeY8QYV0pHAeRBnAtpgqA&s=03' rel='/'  target="_blank"> <BsTwitter /> </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Mustapha. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer