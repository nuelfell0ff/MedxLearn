import React, { useEffect, useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  const closeSidebar = () => setSidebarOpen(false)

  const handleNavClick = (event) => {
    event.preventDefault()
    closeSidebar()
  }

  return (
    <nav className="site-navbar">
      <div className="navbar-shell">
        <a className="brand-lockup" href="#" onClick={handleNavClick}>
          <span className="logo-icon" aria-hidden="true"></span>
          <span className="brand-text">MedxLearn</span>
        </a>

        <button
          className="sidebar-toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={sidebarOpen}
          aria-controls="site-sidebar"
          onClick={() => setSidebarOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`sidebar-backdrop ${sidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

        <aside className={`site-sidebar ${sidebarOpen ? 'open' : ''}`} id="site-sidebar" aria-hidden={!sidebarOpen}>
          <div className="sidebar-head">
            <div>
              <a className="brand-lockup mb-3" href="#" onClick={handleNavClick}>
                <span className="logo-icon" aria-hidden="true"></span>
                <span className="brand-text">MedxLearn</span>
              </a>
              {/* <p className="sidebar-kicker">Menu</p> */}
            </div>
            <button className="sidebar-close" type="button" aria-label="Close navigation menu" onClick={closeSidebar}>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className="sidebar-content">
            <ul className="nav-links">
              <li><a href="#" onClick={handleNavClick}>Products</a></li>
              <li><a href="#" onClick={handleNavClick}>Why Us?</a></li>
              <li><a href="#" onClick={handleNavClick}>Industries</a></li>
              <li><a href="#" onClick={handleNavClick}>Business Models</a></li>
              <li><a href="#" onClick={handleNavClick}>Vision</a></li>
            </ul>

            <div className="sidebar-actions">
              <button className="demo-btn" type="button">Request Demo</button>
              <button className="search-btn" type="button">Search</button>
            </div>
          </div>
        </aside>

        <div className="desktop-nav">
          <ul className="nav-links nav-links-inline">
            <li><a href="#">Products</a></li>
            <li><a href="#">Why Us?</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Business Models</a></li>
            <li><a href="#">Vision</a></li>
          </ul>

          <div className="desktop-actions">
            <button className="demo-btn" type="button">Request Demo</button>
            <button className="search-btn" type="button">Search</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar