import React from 'react'
import './industries.css'

const industries = [
  { key: 'university', label: 'Universities' },
  { key: 'college', label: 'Colleges' },
  { key: 'nursing', label: 'Nursing Schools' },
  { key: 'health', label: 'Health Technology Institute' },
  { key: 'secondary', label: 'Secondary Schools' },
  { key: 'academy', label: 'Professional Academies' },
  { key: 'corporate', label: 'Corporate Training Organizations' },
  { key: 'online', label: 'Online Learning Platform' },
  { key: 'international', label: 'International Educational Programs' }
]

const IndustryIcon = ({ type }) => {
  if (type === 'university') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7l9-3 9 3-9 3-9-3Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 10v6m12-6v6M8 20h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'college') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 10l9-5 9 5-9 5-9-5Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 13v3c0 1 2.6 2 6 2s6-1 6-2v-3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }

  if (type === 'nursing') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="4" width="14" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'health') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 3h6l-1 6 3 3a5 5 0 0 1-10 0l3-3-1-6Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === 'secondary') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 10l8-6 8 6v9H4v-9Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 19v-5h4v5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }

  if (type === 'academy') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 4v5c0 5-3.2 7.7-7 9-3.8-1.3-7-4-7-9V7l7-4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }

  if (type === 'corporate') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 19a5 5 0 0 1 10 0M13 19a4 4 0 0 1 8 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'online') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 12h18M12 3c2.5 2.3 2.5 13.7 0 18M12 3c-2.5 2.3-2.5 13.7 0 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v16M4 12h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 7l10 10M17 7 7 17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

const Industries = () => {
  return (
    <section className="industries">
      <div className="industries-grid-overlay" aria-hidden="true" />
      <div className="container industries-shell">
        <div className="industries-top">
          <div className="btn-one btn">• Industries We Serve</div>
          <h2 className="industries-heading">Built for every kind of <br /> institution</h2>
          <p className="industries-subheading">Whether you run a university of 50,000 or a corporate training center of 50, MedxLearn has a configuration for you.</p>
        </div>

        <div className="industries-stat">
          <span className="industries-stat-number">9</span>
          <span className="industries-stat-text">Institution types supported</span>
        </div>

        <div className="industries-tags">
          {industries.map((item) => (
            <div className="industry-tag" key={item.label}>
              <span className="industry-icon"><IndustryIcon type={item.key} /></span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
