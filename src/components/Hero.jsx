import React from 'react'
import './hero.css'
import heroImg from '../assets/Frame-1321316474.png'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='content container-fluid px-5 d-lg-flex align-items-center justify-content-center gap-5'>
          <div className='hero-left'>
            <div className='btn-one btn'>• Next Generation Edtech infrastructure</div>
            <h1 className='hero-heading'>The <span>Operating <br /> System</span> for modern <br /> institutions.</h1>
            <h6 className='hero-subheading'>MedxLearn builds world-class digital platforms for universities, colleges nursing <br /> schools, and training institutes, integrating admissions, LMS payments, AI tools, <br /> and institutional automation into one seamless ecosytem.</h6>
            <div className='d-flex gap-2'>
              <button className='btn hero-btnone'>Get a Free Demo</button>
              <button className='btn hero-btntwo'>Explore Platform</button>
            </div>
            <div className='d-flex align-items-center'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
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