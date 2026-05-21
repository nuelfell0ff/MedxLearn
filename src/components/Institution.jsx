import React from 'react'
import './institution.css'

const reasons = [
  {
    icon: 'globe',
    title: 'Global Standard Infrastructure',
    desc: 'Built with scalable enterprise technology suitable for institutions worldwide, from small academies to large multi-campus universities.'
  },
  {
    icon: 'lock',
    title: 'Secure & Reliable',
    desc: 'Institution-grade data protection, encrypted cloud architecture, and a 99.9% uptime SLA backed by enterprise infrastructure.'
  },
  {
    icon: 'mobile',
    title: 'Mobile-First Design',
    desc: 'Fully responsive across smartphones, tablets, and desktops. Students and staff can access everything they need from any device.'
  },
  {
    icon: 'flash',
    title: 'Fast Deployment',
    desc: 'Launch your institution portal within weeks, not months. Our deployment team handles setup, migration, and staff onboarding end-to-end.'
  },
  {
    icon: 'brain',
    title: 'Smart Automation',
    desc: 'Reduce administrative workload by up to 70% using intelligent automation for admissions, payments, grading, and reporting.'
  },
  {
    icon: 'edit',
    title: 'Fully Customizable',
    desc: 'Every institution gets a tailored platform, aligned with your branding, academic structure, workflows, and regulator requirements.'
  }
]

const Icon = ({ type }) => {
  if (type === 'globe') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 12h18M12 3c2.5 2.3 2.5 13.7 0 18M12 3c-2.5 2.3-2.5 13.7 0 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }

  if (type === 'lock') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="10" width="16" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10V8a4 4 0 0 1 8 0v2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="15" r="1.5" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'mobile') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'flash') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12.8 7 9.5 12h3l-1.3 5 3.4-5h-3.1z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === 'brain') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 5a3 3 0 0 1 6 0 2.8 2.8 0 0 1 2.5 2.8 2.9 2.9 0 0 1 1.8 2.7 2.8 2.8 0 0 1-1.6 2.5A3 3 0 0 1 15 18H9a3 3 0 0 1-2.7-5 2.8 2.8 0 0 1-1.6-2.5A2.9 2.9 0 0 1 6.5 7.8 2.8 2.8 0 0 1 9 5Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 9h2m-2 4h2m2-6v2m0 2v2m2-3h2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.6 5.7h2.7v2.7M10.2 13.8 18.3 5.7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="4" y="7" width="14" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

const Institution = () => {
  return (
    <section className="institution">
      <div className="container">
        <div className="institution-top">
          <div className="btn-one btn">• Why Institutions</div>
          <h2 className="institution-heading">Why Institutions <br /> Choose <span>MedxLearn</span></h2>
          <p className="institution-subheading">Six powerful modules. One unified platform. Every touchpoint of your institution, digitized</p>
        </div>

        <div className="institution-grid">
          {reasons.map((item, index) => (
            <article key={index} className={`institution-card ${index === 0 ? 'highlight' : ''}`}>
              <div className="institution-icon">
                <Icon type={item.icon} />
              </div>
              <h6 className="institution-title">{item.title}</h6>
              <p className="institution-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Institution
