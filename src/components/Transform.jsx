import React from 'react'
import './transform.css'
import transformImg from '../assets/Frame-1321316480.png'
import transformImg1 from '../assets/Frame-1171278980.png'
import transformImg2 from '../assets/Frame-1171278981.png'
import transformImg3 from '../assets/Frame-1171278982.png'


const Transform = () => {
  return (
    <>
      <section className='transform'>
        <div className='transform-grid px-3 py-5'>
          <div className='transform-right'>
            <img src={transformImg} alt="hero image" />
          </div>
          <div className='transform-left'>
            <div className='btn-one btn'>• Who We Are</div>
            <h1 className='hero-heading'>Transforming <br /> Insitutions through <br /> <span>Technology</span></h1>
            <h6 className='hero-subheading'>MedxLearn is a next-generation educational software company helping  <br /> institutions digitize operations, improve learning experiences, and manage their  <br /> entire academic ecosystem from one intelligent platform.</h6>
            <div className='transform-info mb-3'>
              <img src={transformImg1} alt="globe illustration" />
              <div className='transform-text'>
                <h6 className='fw-bold mb-1 built-small'>Complete Digital Campusses</h6>
                <h6 className='fw-light mb-0 built-small'>We don’t just build websites. We build entire digital environments, <br /> student portals, admin systems, LMS, payment gateways, and AI <br /> tools, unified in one platform.</h6>
              </div>
            </div>
            <div className='transform-info mb-3'>
              <img src={transformImg2} alt="globe illustration" />
              <div className='transform-text'>
                <h6 className='fw-bold mb-1 built-small'>Fast Deployments, Global Scale</h6>
                <h6 className='fw-light mb-0 built-small'>Launch your institution portal within weeks. Our infrastructure scales <br /> from 500 to 500,000 students without breaking a sweat.</h6>
              </div>
            </div>
            <div className='transform-info mb-0'>
              <img src={transformImg3} alt="globe illustration" />
              <div className='transform-text'>
                <h6 className='fw-bold mb-1 built-small'>Tailored to Your Institution</h6>
                <h6 className='fw-light mb-0 built-small'>Every Institution is unique. We configure the platform to match your <br /> academic structure, branding, workflows, and regulatory <br /> requirements.</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Transform