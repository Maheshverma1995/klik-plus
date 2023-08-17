import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter,FaLinkedinIn } from "react-icons/fa6";

import './About.css'

const About = () => {
    return (
        <div>
            <main className="container container-about">
                <section className="about-section">
                    {/* <h1>About Us</h1> */}
                    <div className='row about-row'>
                        <div className="col">
                            <img src="./Image/About-3-1.png" alt="" className="img-fluid" />

                        </div>
                    </div>
                </section>
                <div className="bg-light">
                    <div className="container py-5">

                        <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6 d-none d-lg-block"><img
                                src="./Image/about-1.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-4">About us page</h1>
                                <p className="lead text-muted mb-0"></p>
                                <p className="lead text-muted">At KLIK-PLUS, we are a leading software company that takes pride in creating innovative solutions to transform businesses and revolutionize industries. With a dedicated team of passionate software engineers, developers, and designers, we are committed to delivering cutting-edge products and services tailored to our clients' unique needs <a href="#"
                                    className="text-muted">
                                    <u><button className='about-row1-button btn btn-light px-5   shadow-sm'>read-more</button></u></a>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="bg-white py-5">
                    <div className="container py-5">
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                                <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#"
                                        className="btn btn-light px-5   shadow-sm about-row1-button">Learn More</a>
                            </div>
                            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img
                                src="./Image/about1.jpg" alt=""
                                className="img-fluid mb-4 mb-lg-0" /></div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-5 px-5 mx-auto"><img
                                src="./Image/about-2.jpg" alt=""
                                className="img-fluid mb-4 mb-lg-0" /></div>
                            <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                                <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#"
                                        className="btn btn-light px-5   shadow-sm about-row1-button ">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light py-5">
                    <div className="container py-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-5">
                                <h2 className="display-4 font-weight-light">Our team</h2>
                                <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="row text-center">
                            {/* <!-- Team item--> */}
                            <div className="col-md-6 mb-5">
                                <div className="bg-white rounded shadow-sm py-5 px-4"><img
                                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100"
                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    <h5 className="mb-0">Manuella Nevoresky</h5><span className="small text-uppercase text-muted">CEO -
                                        Founder</span>
                                    <ul className="social mb-0 d-flex list-inline mt-3">
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"><FaFacebookF/></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaTwitter/></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaInstagram/></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaLinkedinIn/></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End--> */}

                            {/* <!-- Team item--> */}
                            <div className="col-md-6 mb-5">
                                <div className="bg-white rounded shadow-sm py-5 px-4"><img
                                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100"
                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    <h5 className="mb-0">Samuel Hardy</h5><span className="small text-uppercase text-muted">CEO -
                                        Founder</span>
                                    <ul className="social mb-0 d-flex  list-inline mt-3">
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaFacebookF/></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaTwitter/></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaInstagram/></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaLinkedinIn/></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End--> */}

                            {/* <!-- Team item--> */}
                            <div className="col-md-6 mb-5">
                                <div className="bg-white rounded shadow-sm py-5 px-4"><img
                                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100"
                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    <h5 className="mb-0">Tom Sunderland</h5><span className="small text-uppercase text-muted">CEO -
                                        Founder</span>
                                    <ul className="social mb-0 d-flex list-inline mt-3">
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaFacebookF/></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaTwitter/></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaInstagram/></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaLinkedinIn/></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End--> */}

                            {/* <!-- Team item--> */}
                            <div className="col-md-6 mb-5">
                                <div className="bg-white rounded shadow-sm py-5 px-4"><img
                                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100"
                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    <h5 className="mb-0">John Tarly</h5><span className="small text-uppercase text-muted">CEO -
                                        Founder</span>
                                    <ul className="social mb-0 d-flex list-inline mt-3">
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaFacebookF/></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaTwitter/></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaInstagram/></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="social-link"><i id="#social-link-i"
                                            ><FaLinkedinIn/></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End--> */}

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About
