import React from 'react'
import './digitalize.css'

const Digitalize = () => {
  return (
    <section className="digitalize">
      <div className="digitalize-grid" aria-hidden="true"></div>

      <div className="digitalize-shell">
        <div className="digitalize-panel">
          <div className="btn-one digitalize-badge">• Ready To Transform Your Institution</div>

          <h2 className="digitalize-heading">
            Digitize Your Institution
            <br /> with MedxLearn
          </h2>

          <p className="digitalize-subheading">
            Partner with MedxLearn to build a powerful digital campus experience for your students, staff, and administrators. Launch in weeks, not
            years.
          </p>

          <div className="digitalize-actions">
            <button className="digitalize-primary" type="button">Schedule a Consultation</button>
            <button className="digitalize-secondary" type="button">Request a Demo</button>
            <button className="digitalize-secondary" type="button">Become a Partner</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Digitalize
