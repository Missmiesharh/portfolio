import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  const data = [
    {
      id:1,
      image: IMG1,
      title: 'This is A Portfolio item',
      demo: "https://github.com"
    }, 
    {
      id:2,
      image: IMG2,
      title: 'This is A Portfolio item',
      demo: "https://github.com"
    },
    {
      id:3,
      image: IMG3,
      title: 'This is A Portfolio item',
      demo: "https://github.com"
    }
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key = {id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt='portfoloo item 1' />
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target={'_blank'}> Github</a>
                <a href= {demo} className='btn  btn-primary' target={'_blank'}> Live Demo</a>
              </div>
            </div>
          </article>
          )
         
        })
       }
      </div>
    </section>
  )
    }

export default Portfolio 