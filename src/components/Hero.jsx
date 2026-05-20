import React from 'react'
import './hero.css'
import heroImg from '../assets/Frame-1321316474.png'
import heroGlobe from '../assets/Frame-1171278893.png'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='content'>
          <div className='hero-left'>
            <div className='btn-one btn'>• Next Generation Edtech infrastructure</div>
            <h1 className='hero-heading'>The <span>Operating <br /> System</span> for modern <br /> institutions.</h1>
            <h6 className='hero-subheading'>MedxLearn builds world-class digital platforms for universities, colleges, nursing <br /> schools, and training institutes, integrating admissions, LMS payments, AI tools, <br /> and institutional automation into one seamless ecosystem.</h6>
            <div className='hero-actions mb-3'>
              <button className='btn hero-btnone'>Get a Free Demo</button>
              <button className='btn hero-btntwo'>Explore Platform</button>
            </div>
            <div className='built-info'>
              <img src={heroGlobe} alt="globe illustration" />
              <div className='built-text'>
                <h6 className='fw-light mb-1 built-small'>Built for institutions</h6>
                <h6 className='fw-bold mb-0 built-small'>Across the globe</h6>
              </div>
            </div>
          </div>
          <div className='hero-right'>
            <img src={heroImg} alt="hero image" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero