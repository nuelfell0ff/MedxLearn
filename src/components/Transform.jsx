import React from 'react'
import './transform.css'
import transformImg from '../assets/Frame-1321316480.png'

const Transform = () => {
  return (
    <>
      <section className='transform'>
        <div className='content container-fluid d-lg-flex align-items-center justify-content-center'>
          <div className='hero-right'>
            <img src={transformImg} alt="hero image" />
          </div>
          <div className='hero-left'>
            <div className='btn-one btn'>• Who We Are</div>
              <h1 className='hero-heading'>The <span>Operating <br /> System</span> for modern <br /> institutions.</h1>
              <h6 className='hero-subheading'>MedxLearn builds world-class digital platforms for universities, colleges, nursing <br /> schools, and training institutes, integrating admissions, LMS payments, AI tools, <br /> and institutional automation into one seamless ecosystem.</h6>
              <div className='hero-actions mb-3'>
                <button className='btn hero-btnone'>Get a Free Demo</button>
                <button className='btn hero-btntwo'>Explore Platform</button>
              </div>
              {/* <div className='built-info'>
              <img src={heroGlobe} alt="globe illustration" />
              <div className='built-text'>
                <h6 className='fw-light mb-1' style={{ fontSize: '10px' }}>Built for institutions</h6>
                <h6 className='fw-bold mb-0' style={{ fontSize: '10px' }}>Across the globe</h6>
              </div>
            </div> */}
            </div>
          </div>
      </section>
    </>
  )
}

export default Transform