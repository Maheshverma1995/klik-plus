import React from 'react'
import './SideIcon.css';
import { FaLongArrowAltLeft ,FaYoutube ,FaLinkedin} from "react-icons/fa";

const SideIcon = () => {
    return (
        <div>
            <div className='side-icon'>
                <section className='section-1-'>
                    <div className='section-1-div-1'><FaLongArrowAltLeft /></div>
                    <div className='side-icon-contact-us'><h3>contact-us</h3>
                    <div className='.side-icon-contact-us-form'>
                        ewjdrjewrhj
                    </div>
                    </div>
                    <div className='youthub'><FaYoutube/></div>
                    <div className='linkIn'><FaLinkedin/></div>
                </section>
                <section className='section-2 '>
                    <img id='img-icon' src="./Image/phone.png" alt="" />
                </section>
            </div>
            <div className=" d-flex flex-row-reverse">
                <div className="p-2 whatapp d-flex "> <img className='whatapp-1' src="./Image/whatspp.png" alt="" />
                <p className='whatapp-text'>Chat US</p>
                </div>

            </div>


        </div>
    )
}

export default SideIcon
