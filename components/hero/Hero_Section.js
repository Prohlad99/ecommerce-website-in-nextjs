import style from '../../styles/hero/Hero.module.css';
import Carousel from './carousel/Carousel';

const Hero_Section = () => {
  
  return (
    <>
      <div className='md:h-[90vh] overflow-hidden'>
        <div className={style.hero}>
          <div className='md:ml-8'>
            <Carousel/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero_Section
