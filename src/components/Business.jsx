import React from 'react'
import './business.css'

const cards = [
  {
    id: '01',
    kicker: 'SOFTWARE DEVELOPMENT',
    title: 'Custom Institutional Platforms',
    desc:
      'We design and deploy custom institutional management systems built from the ground up to match your exact academic structure, branding, and operational workflows.',
    highlight: true,
  },
  {
    id: '02',
    kicker: 'SAAS',
    title: 'Software as a Service',
    desc:
      'Institutions subscribe monthly or annually to the MedxLearn ecosystem, getting all modules, updates, support, and cloud infrastructure in one predictable cost.',
  },
  {
    id: '03',
    kicker: 'WHITE-LABEL',
    title: 'White-Label Solutions',
    desc:
      'Institutions own a fully branded version of the platform under their identity, your domain, your logo, your colours, your campus, powered by MedxLearn infrastructure.',
  },
  {
    id: '04',
    kicker: 'CLOUD INFRASTRUCTURE',
    title: 'Hosting & Maintenance',
    desc:
      'We provide enterprise cloud hosting, ongoing maintenance, security monitoring, and software updates so your team focuses on education, not IT.',
  },
  {
    id: '05',
    kicker: 'DIGITAL TRANSFORMATION',
    title: 'Institutional Digitalization',
    desc:
      'We help institutions transition from manual operations into fully digital ecosystems, with change management, staff training, and migration support included.',
  },
  {
    id: '06',
    kicker: 'E-LEARNING',
    title: 'Global Online Campuses',
    desc:
      'Helping institutions launch global online learning programs and virtual campuses, reaching students across borders with accredited digital curricula.',
  },
]

const Business = () => {
  return (
    <section className="business">
      <div className="business-shell">
        <div className="business-top">
          <button className="btn-one">• Business Model</button>
          <h2 className="business-heading">
            The MedxLearn <br /> <span>Business Scheme</span>
          </h2>
          <p className="business-subheading">Multiple engagement models designed to fit institutions of every size, budget, and ambition.</p>
        </div>

        <div className="business-grid">
          {cards.map((c) => (
            <div key={c.id} href="#" onClick={(e) => e.preventDefault()} className={`business-card ${c.highlight ? 'highlight' : ''}`}>
              <div className="business-kicker"><span className="num">{c.id}</span> / {c.kicker}</div>
              <h3 className="business-title">{c.title}</h3>
              <p className="business-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Business
