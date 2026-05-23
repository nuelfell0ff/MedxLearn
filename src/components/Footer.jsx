import React from 'react'
import './footer.css'

const platformLinks = ['Products', 'Features', 'Business Model', 'Industries', 'Request Demo']
const companyLinks = ['About Us', 'Vision', 'Careers', 'Blog', 'Press']
const contactLinks = ['Mail', 'Partner Enquiries', 'Support', 'Documentation', 'Status Page']

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-top">
          <div className="footer-brand-block">
            <a className="footer-brand" href="#" onClick={(event) => event.preventDefault()}>
              <span className="footer-logo" aria-hidden="true"></span>
              <span className="footer-brand-text">MedxLearn</span>
            </a>

            <p className="footer-copy">
              The operating system for modern institutions.
              <br />
              Powering education through intelligent technology, globally.
            </p>

            <div className="footer-socials" aria-label="Social links">
              <a href="#" onClick={(event) => event.preventDefault()} aria-label="X">X</a>
              <a href="#" onClick={(event) => event.preventDefault()} aria-label="LinkedIn">in</a>
              <a href="#" onClick={(event) => event.preventDefault()} aria-label="Instagram">ig</a>
              <a href="#" onClick={(event) => event.preventDefault()} aria-label="WhatsApp">wa</a>
            </div>
          </div>

          <nav className="footer-columns" aria-label="Footer links">
            <div className="footer-column">
              <h3>PLATFORM</h3>
              <ul>
                {platformLinks.map((link) => (
                  <li key={link}><a href="#" onClick={(event) => event.preventDefault()}>{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                {companyLinks.map((link) => (
                  <li key={link}><a href="#" onClick={(event) => event.preventDefault()}>{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                {contactLinks.map((link) => (
                  <li key={link}><a href="#" onClick={(event) => event.preventDefault()}>{link}</a></li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© 2026 MedxLearn. A product of the Medx ecosystem. All rights reserved.</p>

          <div className="footer-policy-links">
            <a href="#" onClick={(event) => event.preventDefault()}>Privacy Policy</a>
            <a href="#" onClick={(event) => event.preventDefault()}>Terms of Service</a>
            <a href="#" onClick={(event) => event.preventDefault()}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
