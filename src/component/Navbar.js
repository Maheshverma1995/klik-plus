import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return (
    <div>
      {/* start header bar  */}

      <div className="header-bar ">
        <div className="contact-info ">
          <div className="phone-number"> <Link id='text-phone'>Phone: 123-456-7890</Link> </div>
          <div className="company-address">Address: 123 Main St, City, State, Zip</div>
        </div>

        <div className="social-media">
          <Link to="#" className="s aocial-icon"><i className=""><FaFacebookF /></i></Link>
          <Link to="#" className="s aocial-icon"><i className=""></i><FaTwitter /></Link>
          <Link to="#" className="s aocial-icon"><i className=""><FaInstagram /></i>
          </Link>
        </div>
        {/* <div class="phone-info"> <a href="tel:+919560461163" title="Call Us" class="d-flex align-items-center">
          <div class="flex-shrink-0"> <img class="img-fluid me-2" src="https://radiantwebtech.com/website-designing-in-delhi/assets/images/email-icon.png " alt="call Us" /> </div>
          <div class="flex-grow-1">
            <div class="d-sm-block d-none"> <small class="lh-sm text-white d-block">Call Us</small>
              <p class="mb-0 lh-sm small text-white fw-bold fs18">95604 61163</p>
            </div>
          </div>
        </a>
        </div> */}
      </div>
      {/* end header bar  */}
      <div className={`navbar ${stickyClass}`}>
        <nav className="navbar navbar-expand-lg" id='navbar1'>
          <div className="container-fluid">
            <Link className="navbar-b arand " to="#"><img className='img-fluid logo-img' src="./Image/Klikplus-logo.png" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link a " to="">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link a" to="about">ABOUT</Link>
                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link a">
                    OUR SERVICES
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown b a-item" to="artificial-intelligence">ARTIFICIAL INTELLIGENCE</Link></li>
                    <li><Link className="dropdown b a-item" to="digital-marketing">DIGITAL MARKETING</Link></li>
                    <li><Link className="dropdown b a-item" to="cloud-services">CLOUD SERVICES</Link></li>
                    <li><Link className="dropdown b a-item" to="rendering-3d">3D RENDERING</Link></li>
                    <li><Link className="dropdown b a-item" to="software-development">SOFTWARE DEVELOPMENT</Link></li>
                    <li><Link className="dropdown b a-item" to="lms-development">LMS DEVELOPMENT</Link></li>
                    <li><Link className="dropdown b a-item" to="app-development">APP DEVELOPMENT</Link></li>
                    <li><Link className="dropdown b a-item" to="erp-development">ERP DEVELOPMENT</Link></li>


                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link a" to="contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
