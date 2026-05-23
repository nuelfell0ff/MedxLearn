import React from 'react'
import './vision.css'

const Vision = () => {
  return (
    <section className="vision">
      <div className="vision-grid-overlay" aria-hidden="true"></div>

      <div className="vision-shell">
        <div className="vision-content">
          <div className="btn-one">• Our Vision</div>
          <h2 className="vision-heading">
            <span className="vision-quote">“</span>Building Africa’s Largest
            <br /> Educational Technology Ecosystem
          </h2>
          <p className="vision-subheading">
            MedxLearn envisions a future where every institution, regardless of size or location, has access to world-class educational technology.
            Our mission is to digitize learning, simplify administration, empower educators, and create intelligent educational systems that transform
            lives globally.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Vision
