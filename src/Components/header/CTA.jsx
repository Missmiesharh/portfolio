import React from 'react'
import CV from '../../assets/Resume.docx'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {CV} download className='btn'> Download resume</a>
        <a href='#contact' className='btn btn-primary'> Let's Talk</a>
    </div>
  )
}

export default CTA