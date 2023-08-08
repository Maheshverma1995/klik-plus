import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand " to="#">klik-plus</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">ABOUT</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  OUR SERVICES
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="artificial-intelligence">ARTIFICIAL INTELLIGENCE</Link></li>
                  <li><Link className="dropdown-item" to="digital-marketing">DIGITAL MARKETING</Link></li>
                  <li><Link className="dropdown-item" to="cloud-services">CLOUD SERVICES</Link></li>
                  <li><Link className="dropdown-item" to="rendering-3d">3D RENDERING</Link></li>
                  <li><Link className="dropdown-item" to="software-development">SOFTWARE DEVELOPMENT</Link></li>
                  <li><Link className="dropdown-item" to="lms-development">LMS DEVELOPMENT</Link></li>
                  <li><Link className="dropdown-item" to="app-development">APP DEVELOPMENT</Link></li>
                  <li><Link className="dropdown-item" to="erp-development">ERP DEVELOPMENT</Link></li>


                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="vision-and-mission">VISION AND MISSION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="technologies">TECHNOLOGIES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="milestone ">MILESTONE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="our-clients">OUR CLIENTS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
