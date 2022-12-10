import React from 'react'
import {FiLinkedin} from  "react-icons/fi"
import {BsGithub} from  "react-icons/bs"
import {TfiEmail} from  "react-icons/tfi"


const HeaderSocials = () => {
  return (
    <div className='header__socials'>

      <a href='https://www.linkedin.com/in/aisha-mustapha-281aa31a6' rel='/'  target="_blank"> <FiLinkedin/> </a>
      <a href='https://github.com/Missmiesharh' rel='/'  target="_blank"> <BsGithub/> </a>
      <a href='mailto:ayshamustapha99@gmail.com' rel='/' target="_blank"> <TfiEmail/> </a>


    </div>
  )
}

export default HeaderSocials