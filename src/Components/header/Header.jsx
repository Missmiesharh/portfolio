import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import img from '../../assets/img.jpg'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Aisha Mustapha</h1>
        <h5 className='text-light '>Front End Developer</h5>
        <CTA />
        <HeaderSocials/>  
        <div className='me'>
          <img src={img} alt='me'></img>
        </div>

        <a href='#contact' className='scroll__down'> Scroll Down </a>
      </div>
    </header>
  )
}

export default Header