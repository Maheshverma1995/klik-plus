import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      {/* start slider  */}
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
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

      <section>
        <div className='container mt-5'>
          <div className='row'>
            <h1 className='text-center'>WELCOME TO OUR COMPANY</h1>
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
      <section className='section-1 mt-5'>
        <h1 className='text-center'>OUR SERVICES</h1>
        <div className='section-1-div-1 text-center mb-5'>
          <span className='section-span1'> &#8226;</span>
          <span className='section-span1'>&#8226; </span>
          <span className='section-span1'>&#8226;  </span>
          <span className='section-span4'>&#8212; </span>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><img src="./Image/32.webp" alt="" /><h3>Cloud Services</h3></div>
              <div class="card" >
                <img src="./Image/cloud.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><img src="./Image/31.webp" alt="" /><h3>Digital Marketing</h3> </div>
              <div class="card" >
                <img src="./Image/Digital-Marketing.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><img src="./Image/33.webp" alt="" /><h3>3D rendering</h3></div>
              <div class="card" >
                <img src="./Image/3D.webp" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><img src="./Image/34.webp" alt="" /><h3>ERP development </h3></div>
              <div class="card" >
                <img src="./Image/erp.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><img src="./Image/35.webp" alt="" /><h3>Software Development</h3></div>
              <div class="card" >
                <img src="./Image/softwere.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><img src="./Image/36.webp" alt="" /><h3>Artificial intelligence</h3></div>

              <div class="card" >
                <img src="./Image/Artificial-intelligence.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><img src="./Image/37.webp" alt="" /><h3>Web-Design </h3></div>

              <div class="card" >
                <img src="./Image/web-design.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><img src="./Image/38.webp" alt="" /><h3>SEO</h3></div>

              <div class="card" >
                <img src="./Image/seo.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-4 mb-4'> <div className='d-flex'><img src="./Image/39.webp" alt="" /><h3>APP DEVELOPMENT</h3></div>

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
      
    </div>


  );
};

export default Home
