import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navbar-shell py-2">
          <div className="navbar-brand logo-icon"></div>
          <a className="navbar-brand" href="#">MedxLearn</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Why Us?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Industries</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Business Models</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Vision</a>
              </li>
            </ul>
            <button className="btn btn-light" type="submit">Request Demo</button>
            <button className="btn btn-dark" type="submit">Search</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar