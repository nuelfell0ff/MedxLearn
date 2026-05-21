import React from 'react'
import './management.css'
import icon1 from '../assets/book.png'
import icon2 from '../assets/teacher.png'
import icon3 from '../assets/chart-2.png'
import icon4 from '../assets/profile-2user.png'
import icon5 from '../assets/profile-2user1.png'
import icon6 from '../assets/ai_svgrepo.com.png'

const modules = [
  {
    icon: icon1,
    title: 'Learning Management System',
    desc: 'A modern LMS that transforms how your institution delivers education, from video lectures to live virtual classrooms, CBT exams, and AI-powered learning support.',
    bullets: [
      'Video lectures & live virtual classrooms',
      'Interactive quizzes & CBT examinations',
      'Assignment submission & discussion forums',
      'Certificates & e-learning progress tracking',
      'AI-powered tutoring & recommendations'
    ]
  },
  {
    icon: icon2,
    title: 'Student Portal',
    desc: 'A central hub for every student interaction, from registration to results, payment to virtual classes.',
    bullets: [
      'Course registration & fee payment',
      'Results, transcripts & CGPA tracking',
      'Virtual classes & AI learning support',
      'Assignment submission & progress tracking'
    ]
  },
  {
    icon: icon3,
    title: 'Admin Dashboard',
    desc: 'Full institutional control, manage admissions, approvals, departments, staff, and performance analytics in one place.',
    bullets: [
      'Admissions & payment management',
      'Department & faculty control',
      'Real-time institutional analytics',
      'Staff & student access control'
    ]
  },
  {
    icon: icon4,
    title: 'Staff & Lecturer Portal',
    desc: 'Empower educators with tools for attendance, grading timetables, research collaboration, and internal communication.',
    bullets: [
      'Attendance & grading systems',
      'CBT exam management',
      'Research collaboration tools',
      'Internal messaging & timetables'
    ]
  },
  {
    icon: icon5,
    title: 'Smart Payment Infrastructure',
    desc: 'End-to-end financial management, tuition, hostel, acceptance fees, and automated invoicing with multi-currency support.',
    bullets: [
      'Tuition, hostels & acceptance fees',
      'Automated invoice generation',
      'Financial reporting & analytics',
      'Multi-currency support'
    ]
  },
  {
    icon: icon6,
    title: 'AI-Powered Education Tools',
    desc: 'Intelligent automation across every layer, AI tutors, automated grading support, smart recommendations, and personalized learning paths.',
    bullets: [
      'AI tutoring assistants',
      'Smart academic recommendations',
      'Academic analytics & insights',
      'Personalized learning experiences'
    ]
  }
]

const Management = () => {
  return (
    <section className="management">
      <div className="container">
        <div className="management-top">
          <div className="btn-one btn">• What We Build</div>
          <h2 className="management-heading">Complete Institutional<br />Management <span>Ecosystem</span></h2>
          <p className="management-subheading">Six powerful modules. One unified platform. Every touchpoint of your institution, digitized</p>
        </div>

        <div className="management-grid">
          {modules.map((m, i) => (
            <article key={i} className={`module-card ${i === 0 ? 'highlight' : ''}`}>
              <div className="card-icon">
                <img src={m.icon} alt={`${m.title} icon`} />
              </div>
              <h6 className="card-title">{m.title}</h6>
              <p className="card-desc">{m.desc}</p>
              <ul className="card-list">
                {m.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Management