import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div classsName='content container-fluid px-5 d-lg-flex align-items-center justify-content-center'>
          <div className='hero-left'>
            <div className='btn-one btn'>• Next Generation Edtech infrastructure</div>
            <h1 className='hero-heading'>The <span>Operating <br /> System</span> for modern <br /> institutions.</h1>
            <h6 className='hero-subheading'>MedxLearn builds world-class digital platforms for universities, colleges nursing <br /> schools, and training institutes, integrating admissions, LMS payments, AI tools, <br /> and institutional automation into one seamless ecosytem.</h6>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero