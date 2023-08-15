import React from 'react'
import { FaPhoneAlt ,FaEnvelope ,FaMapMarkerAlt,FaDribbble } from "react-icons/fa";
import './Contact.css'
const Contactus = () => {
  return (
    <div>
      <section className='contact-1'>
      <h1>Contact us</h1>
      </section>
    <section className='contact mt-5'>
        
        
        <div class="wrapper ">
          <div className='container'>
          <div className='row'>
        <h3 className='contact-form-h3 text-center'>Contact Us</h3>
              <p className='contact-form-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <div className='col-md-6'>
                <div className='row'>
                  <div className='col-md-6 address'>
                    <span><FaPhoneAlt/></span>
                    <label htmlFor="">9358322216</label>
                  </div>
                  <div className='col-md-6 address'>
                    <span><FaEnvelope/></span>
                    <label htmlFor="">info.klikplus@gmail.com</label></div>
                </div>
                <div className='row'>
                  <div className='col-md-6 address'>
                  <span><FaMapMarkerAlt/></span>
                    <label htmlFor="">D-213 Noida sector - 63 </label>
                  </div>
                  <div className='col-md-6 address'>
                  <span><FaDribbble/></span>
                    <label htmlFor="">http://www.klikplussolution.com/</label>
                  </div>
                </div>
                 </div>
          <div className='col-md-6'>
          <div class="inner">
            <form  action="">
              
              <label class="form-group">
                <input type="text" class="form-control" placeholder='Your Name' required="" />
                {/* <span>Your Name</span> */}
                <span class="border"></span>
              </label>
              <label class="form-group">
                <input type="text" class="form-control" placeholder='Your Mail' required="" />
                {/* <span for="">Your Mail</span> */}
                <span class="border"></span>
              </label>
              <label class="form-group">
                <textarea name="" id="" class="form-control" placeholder='Your Message ' required=""></textarea>
                {/* <span for="">Your Message</span> */}
                <span class="border"></span>
              </label>
              <button className='contact-button'>Submit
                <i class="zmdi zmdi-arrow-right"></i>
              </button>
            </form>
          </div>
          </div>
          
        </div>
          </div>
        

      </div>
    </section>
    </div>
  )
}

export default Contactus
