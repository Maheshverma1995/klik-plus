import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      {/* start slider  */}
      <div id="carouselExampleCaptions" class="carousel slide slider1" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./Image/E-Commers-banner01.jpg" class="d-block w-100" alt="slider1" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./Image/web-development.jpg" class="d-block w-100" alt="slider2" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./image/DIGITAL-MARKETING1_1.jpg" class="d-block w-100" alt="slider3" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* end slider  */}
      {/* section-2 start  */}

      <section className='section1'>
        <div className='container mt-5'>
          <div className='row'>
            <h1 className='text-center'>WELCOME TO OUR COMPANY</h1>
            <div className='section-1-div-1 '>
              <span className='section-span1'>&#8226;</span>
              <span className='section-span1'>&#8226;</span>
              <span className='section-span1'>&#8226;</span>
              <span className='section-span4'>&#8212;</span>
            </div>
            <div className='col-md-6 home-paragraph mt-5'>
              At Our company, we envision a world
              empowered by technology, where businesses
              thrive, and individuals flourish through
              cutting-edge IT solutions. We are passionate
              about driving digital transformation and
              revolutionizing industries to make a positive
              impact on society.
            </div>
            <div className='col-md-6'>
              <img className='img-fluid' src="./Image/static-webdesign.png" alt="home" />
            </div>
          </div>
        </div>
      </section>
      {/* section-2 end  */}
      {/* start section-1  */}
      <section className='section-1'>
        <h1 className='section-1-h1'>OUR SERVICES</h1>
        <div className='section-1-div-1 '>
          <span className='section-span1'>&#8226;</span>
          <span className='section-span1'>&#8226;</span>
          <span className='section-span1'>&#8226;</span>
          <span className='section-span4'>&#8212;</span>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><h3>Cloud Services</h3></div>
              <div class="card" >
                <img src="./Image/cloud.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><h3>Digital Marketing</h3> </div>
              <div class="card" >
                <img src="./Image/Digital-Marketing.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><h3>3D rendering</h3></div>
              <div class="card" >
            <img src="./Image/3d.webp" alt="" />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><h3>ERP development </h3></div>
              <div class="card" >
                <img src="./Image/erp.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><h3>Software Development</h3></div>
              <div class="card" >
                <img src="./Image/softwere.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><h3>Artificial intelligence</h3></div>

              <div class="card" >
                <img src="./Image/Artificial-intelligence.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><h3>Web-Design </h3></div>

              <div class="card" >
                <img src="./Image/web-design.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><h3>SEO</h3></div>

              <div class="card" >
                <img src="./Image/seo.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><h3>APP DEVELOPMENT</h3></div>

              <div class="card" >
                <img src="./Image/app.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* end section-1  */}
      {/* start section-3  */}
      <div className='container'>
        <div className='row'>
          <h1 className='text-center'>About</h1>
          <div className='section-1-div-1 '>
            <span className='section-span1'>&#8226;</span>
            <span className='section-span1'>&#8226;</span>
            <span className='section-span1'>&#8226;</span>
            <span className='section-span4'>&#8212;</span>
          </div>
          <div className='col-md-6'>
            <img className='img-fluid' src="./Image/about1.jpg" alt="about" />

          </div>
          <div className='col-md-6'>
            <h3>ABOUT COMPANY</h3>
            <p class="lead">At KLIK-PLUS, we are a leading software company that
              takes pride in creating innovative solutions to
              transform businesses and revolutionize industries.
              With a dedicated team of passionate software
              engineers, developers, and designers, we are
              committed to delivering cutting-edge products and
              services tailored to our clients' unique needs</p>
          </div>
        </div>
      </div>
      {/* end section-3  */}
      <section className='section-4'>
        <div className='container'>
          <div className='row'>
            <h1 className='text-center'>TECHNOLOGIES</h1>
            <div className='section-1-div-1 '>
              <span className='section-span1'>&#8226;</span>
              <span className='section-span1'>&#8226;</span>
              <span className='section-span1'>&#8226;</span>
              <span className='section-span4'>&#8212;</span>
            </div>
            <div className='col-md-4'> <img className='img-fluid img-thumbnail shadow rounded ' src="./Image/web-desinging.jpg" alt="" /> </div>
            <div className='col-md-4'> <div><h1 className='mt-5'>App Development</h1>
            <h4>flutter/react/native/swift/kotlin</h4>
            </div> </div>
            <div className='col-md-4 '><img className='img-fluid img-thumbnail shadow rounded ' src="./Image/database.jpg" alt="" />  </div>
            <div className='col-md-4'> <div><h1 className='mt-5'>Web development</h1>
            <h4>anguler/react/node/etc.</h4>
            </div></div>
            <div className='col-md-4'><img className='img-fluid img-thumbnail shadow rounded ' src="./Image/softwere1.jpg" alt="" /> </div>
            <div className='col-md-4'><div><h1 className='mt-5'>Database Technologies</h1>
            <h4>Mysql, MongoDB, SQL server,Oracle,etc.</h4>
            </div> </div>
            <div className='col-md-4'><img className='img-fluid img-thumbnail shadow rounded ' src="./Image/digital_marketing.jpg" alt="" /> </div>
            <div className='col-md-4'><div><h1 className='mt-5'>Software Development</h1>
            <h4>laravel/node/react/.net/java</h4>
            </div> </div>
            <div className='col-md-4'><img className='img-fluid img-thumbnail shadow rounded ' src="./Image/appdesining.jpg" alt="" /> </div>
            



          </div>
        </div>
      </section>
    </div>


  );
};

export default Home
