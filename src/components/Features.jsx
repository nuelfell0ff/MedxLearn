import React, { useState } from 'react'
import './features.css'

const featureTabs = [
  {
    key: 'academic',
    label: 'Academic',
    cards: [
      {
        icon: 'course',
        title: 'Course Registration',
        desc: 'Students register courses online each semester with prerequisite checks and approval workflows built in.'
      },
      {
        icon: 'exam',
        title: 'CBT Examinations',
        desc: 'Fully proctored computer-based tests with randomized questions, auto-grading, and instant results.'
      },
      {
        icon: 'transcript',
        title: 'Transcript Generation',
        desc: 'Official digital transcripts generated and verified instantly with QR code authentication.'
      },
      {
        icon: 'gpa',
        title: 'GPA/CGPA Calculation',
        desc: 'Automated grade point calculations with multiple grading scales local and international standards.'
      },
      {
        icon: 'calendar',
        title: 'Academic Calendars',
        desc: 'Institution-wide academic calendars with semester planning, holiday management, and event scheduling.'
      },
      {
        icon: 'timetable',
        title: 'Timetable Systems',
        desc: 'Smart timetabling that detects clashes, optimizes room allocation, and syncs to student & staff dashboards.'
      }
    ]
  },
  {
    key: 'administrative',
    label: 'Administrative',
    cards: [
      {
        icon: 'admission',
        title: 'Admission Management',
        desc: 'End-to-end admissions from application to acceptance, with document verification and offer letters.'
      },
      {
        icon: 'staff',
        title: 'Staff Management',
        desc: 'Full HR module, staff profiles, contracts, leave management, and performance tracking.'
      },
      {
        icon: 'payroll',
        title: 'Payroll Integration',
        desc: 'Automated payroll processing with tax calculations, deductions, and direct bank disbursements.'
      },
      {
        icon: 'department',
        title: 'Department Controls',
        desc: 'Granular control per department, budgets, staff, courses, and academic reporting per faculty.'
      },
      {
        icon: 'announce',
        title: 'Announcement Systems',
        desc: 'Target announcements by role, department, level, or institution wide with push, email, and SMS delivery.'
      },
      {
        icon: 'analytics',
        title: 'Performance Analytics',
        desc: 'Real-time insights into institutional performance, student outcomes, and operational efficiency.'
      }
    ]
  },
  {
    key: 'financial',
    label: 'Financial',
    cards: [
      {
        icon: 'wallet',
        title: 'Online Payment Gateway',
        desc: 'Accept tuition, hostel, and acceptance fees via card, bank transfer, USSD, and mobile wallets.'
      },
      {
        icon: 'revenue',
        title: 'Revenue Tracking',
        desc: 'Real-time revenue dashboards with breakdowns by fee type, faculty, and payment method.'
      },
      {
        icon: 'finance',
        title: 'Financial Analytics',
        desc: 'Budget forecasting, arrears management, and financial reporting for audit compliance.'
      },
      {
        icon: 'savings',
        title: 'Student Wallet Systems',
        desc: 'Students top up wallets once and pay fees instantly, reducing payment friction and failed transactions.'
      },
      {
        icon: 'invoice',
        title: 'Automated Invoicing',
        desc: 'Auto-generate invoices, receipts, and payment reminders based on academic calendar milestones.'
      },
      {
        icon: 'currency',
        title: 'Multi-Currency Support',
        desc: 'Accept payments in NGN, USD, GBP, EUR, GHS, and more, ideal for international student enrolment.'
      }
    ]
  },
  {
    key: 'communication',
    label: 'Communication',
    cards: [
      {
        icon: 'message',
        title: 'Internal Messaging',
        desc: 'Secure in-platform messaging between students, lecturers, and administrators, no WhatsApp needed.'
      },
      {
        icon: 'email',
        title: 'Email Notifications',
        desc: 'Automated and manual email triggers for fees, results, events, and institutional announcements.'
      },
      {
        icon: 'sms',
        title: 'SMS integration',
        desc: 'Bulk and targeted SMS for critical alerts, payment confirmations, exam notices, and emergency broadcasts.'
      },
      {
        icon: 'bell',
        title: 'Push Notification',
        desc: 'Real-time push alerts on student and staff mobile apps for time-sensitive updates.'
      },
      {
        icon: 'board',
        title: 'Notice Board',
        desc: 'A centralized digital notice board per department and institution wide with pinned and expiring notices.'
      },
      {
        icon: 'broadcast',
        title: 'Virtual Town Halls',
        desc: 'Live broadcast video addresses from management to all students and staff simultaneously.'
      }
    ]
  },
  {
    key: 'ai',
    label: 'AI & Innovation',
    cards: [
      {
        icon: 'bot',
        title: 'AI Chatbot Assistant',
        desc: '24/7 AI assistant answering student questions on courses, fees, schedules, and academic policies instantly.'
      },
      {
        icon: 'recommend',
        title: 'AI Learning Recommendations',
        desc: 'Personalized learning paths and content recommendations based on each student’s academic performance.'
      },
      {
        icon: 'insight',
        title: 'AI Analytics Dashboard',
        desc: 'Predictive analytics surfacing at-risk students, performance trends, and institutional health insights.'
      },
      {
        icon: 'classroom',
        title: 'Smart Virtual Classrooms',
        desc: 'AI-enhanced virtual classes with live captioning, auto-summarization, and engagement tracking.'
      },
      {
        icon: 'grading',
        title: 'Automatic Grading Support',
        desc: 'AI assists lecturers in grading essays and open-ended responses with suggested scores and feedback.'
      },
      {
        icon: 'adaptive',
        title: 'Adaptive Assessments',
        desc: 'Assessments that adapt in difficulty based on student responses, identifying knowledge gaps in real time.'
      }
    ]
  }
]

const Icon = ({ type }) => {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  }

  switch (type) {
    case 'course':
      return <svg {...commonProps}><path d="M5 5h9a3 3 0 0 1 3 3v11H8a3 3 0 0 0-3 3V5Z" /><path d="M8 8h6M8 12h4" /></svg>
    case 'exam':
      return <svg {...commonProps}><rect x="4" y="5" width="16" height="14" rx="3" /><path d="M8 9h8M8 13h8" /></svg>
    case 'transcript':
      return <svg {...commonProps}><path d="M6 4h9l3 3v13H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path d="M15 4v3h3" /><path d="M8 11h8M8 15h5" /></svg>
    case 'gpa':
      return <svg {...commonProps}><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 8v8M8 12h4" /><path d="M14 9h2m-2 3h2m-2 3h2" /></svg>
    case 'calendar':
      return <svg {...commonProps}><rect x="4" y="5" width="16" height="15" rx="3" /><path d="M8 3v4M16 3v4M4 9h16" /></svg>
    case 'timetable':
      return <svg {...commonProps}><rect x="4" y="5" width="16" height="15" rx="3" /><path d="M8 9h3M8 13h8M8 16h5" /></svg>
    case 'admission':
      return <svg {...commonProps}><path d="M6 11a6 6 0 1 1 12 0" /><path d="M12 6v10M9 13l3 3 3-3" /></svg>
    case 'staff':
      return <svg {...commonProps}><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><circle cx="17" cy="10" r="2.5" /><path d="M14.8 19a4.2 4.2 0 0 1 7 0" /></svg>
    case 'payroll':
      return <svg {...commonProps}><rect x="4" y="5" width="16" height="14" rx="3" /><path d="M8 9h8M8 13h3" /><path d="M15 13h2" /></svg>
    case 'department':
      return <svg {...commonProps}><path d="M4 20V8l8-4 8 4v12" /><path d="M8 20v-7h8v7" /></svg>
    case 'announce':
      return <svg {...commonProps}><path d="M5 13h4l5 4V7l-5 4H5z" /><path d="M16 9a3.5 3.5 0 0 1 0 6" /></svg>
    case 'analytics':
      return <svg {...commonProps}><path d="M5 19V5" /><path d="M5 19h14" /><rect x="7" y="12" width="2.5" height="5" rx="1" /><rect x="11" y="9" width="2.5" height="8" rx="1" /><rect x="15" y="7" width="2.5" height="10" rx="1" /></svg>
    case 'wallet':
      return <svg {...commonProps}><path d="M4 7h13a3 3 0 0 1 3 3v7H7a3 3 0 0 1-3-3V7Z" /><path d="M15 12h4" /><circle cx="15.5" cy="12" r="1" fill="currentColor" stroke="none" /></svg>
    case 'revenue':
      return <svg {...commonProps}><path d="M5 19V5" /><path d="M5 19h14" /><path d="M9 14v-3" /><path d="M12 14V8" /><path d="M15 14v-5" /></svg>
    case 'finance':
      return <svg {...commonProps}><path d="M12 5c4 0 7 2 7 5s-3 5-7 5-7 2-7 5 3 4 7 4" /><path d="M9 9h6M9 15h6" /></svg>
    case 'savings':
      return <svg {...commonProps}><path d="M7 7h10l2 3v9H5v-9l2-3Z" /><path d="M8 7V5h8v2" /><circle cx="12" cy="13" r="2" /></svg>
    case 'invoice':
      return <svg {...commonProps}><path d="M7 4h10v16l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5V4Z" /><path d="M9 8h6M9 11h6M9 14h4" /></svg>
    case 'currency':
      return <svg {...commonProps}><circle cx="12" cy="12" r="8" /><path d="M12 7v10M9 10h5a2 2 0 0 1 0 4H10" /></svg>
    case 'message':
      return <svg {...commonProps}><path d="M4 6h16v10H9l-5 4V6Z" /><path d="M8 10h8M8 13h4" /></svg>
    case 'email':
      return <svg {...commonProps}><rect x="4" y="6" width="16" height="12" rx="2" /><path d="m4 8 8 6 8-6" /></svg>
    case 'sms':
      return <svg {...commonProps}><rect x="7" y="4" width="10" height="16" rx="2.5" /><path d="M10 8h4M10 12h4" /></svg>
    case 'bell':
      return <svg {...commonProps}><path d="M10 18a2 2 0 0 0 4 0" /><path d="M12 5a4 4 0 0 0-4 4v3c0 .7-.2 1.4-.6 2L6 16h12l-1.4-2c-.4-.6-.6-1.3-.6-2V9a4 4 0 0 0-4-4Z" /></svg>
    case 'board':
      return <svg {...commonProps}><path d="M6 4h12v14H6z" /><path d="M8 8h8M8 11h6" /><path d="M9 18h6" /></svg>
    case 'broadcast':
      return <svg {...commonProps}><path d="M12 20c2 0 3.5-1.5 3.5-3.5S14 13 12 13s-3.5 1.5-3.5 3.5S10 20 12 20Z" /><path d="M7 9a7 7 0 0 1 10 0M5 7a10 10 0 0 1 14 0" /></svg>
    case 'bot':
      return <svg {...commonProps}><rect x="5" y="7" width="14" height="11" rx="3" /><path d="M12 4v3M9 11h.01M15 11h.01M9 15h6" /></svg>
    case 'recommend':
      return <svg {...commonProps}><path d="M5 6h14v12H5z" /><path d="M8 10h8M8 14h5" /></svg>
    case 'insight':
      return <svg {...commonProps}><path d="M5 19V5" /><path d="M5 19h14" /><path d="M8 15c2-1 2.2-5 4.2-5 1.6 0 1.8 2 3.8 2" /></svg>
    case 'classroom':
      return <svg {...commonProps}><path d="M4 8h16v9H4z" /><path d="M9 17v2M15 17v2" /><path d="M8 12h8" /></svg>
    case 'grading':
      return <svg {...commonProps}><path d="M12 4l8 4v5c0 5-3.2 7.7-8 9-4.8-1.3-8-4-8-9V8l8-4Z" /><path d="m9.5 12 1.8 1.8 3.8-4" /></svg>
    case 'adaptive':
      return <svg {...commonProps}><path d="M7 8a5 5 0 1 1 10 0c0 2.8-2 4-3 5H10c-1-1-3-2.2-3-5Z" /><path d="M10 18h4" /><path d="M9 20h6" /></svg>
    default:
      return <svg {...commonProps}><rect x="5" y="5" width="14" height="14" rx="4" /><path d="M8 12h8" /></svg>
  }
}

const Features = () => {
  const [activeTab, setActiveTab] = useState('academic')

  const currentTab = featureTabs.find((tab) => tab.key === activeTab) || featureTabs[0]

  return (
    <section className="features">
      <div className="container features-shell">
        <div className="features-top">
          <div className="btn-one btn">• Feature Showcase</div>
          <h2 className="features-heading">Why Institutions <br /> Choose <span>MedxLearn</span></h2>
          <p className="features-subheading">Six powerful modules. One unified platform. Every touchpoint of your institution, digitized</p>
        </div>

        <div className="features-tabs" role="tablist" aria-label="Institution features categories">
          {featureTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`feature-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="features-grid" role="tabpanel" aria-label={currentTab.label}>
          {currentTab.cards.map((card, index) => (
            <article key={card.title} className={`feature-card ${index === 0 ? 'highlight' : ''}`}>
              <div className="feature-icon">
                <Icon type={card.icon} />
              </div>
              <h6 className="feature-title">{card.title}</h6>
              <p className="feature-desc">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
