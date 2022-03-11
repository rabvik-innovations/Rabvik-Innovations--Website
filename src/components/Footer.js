import React from "react";
import '../css/FooterStyles.css';
// import {FaTwitter} from "react-icons/fa";
// import {FaFacebookF} from "react-icons/fa";
// import {FaLinkedinIn} from "react-icons/fa";
// import {FaInstagram} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <footer className="page-footer font-small unique-color-dark">

      <div className="text-justify text-md-left mt-5">

        <div className="footercontainer mt-3">
          
         <div className="row">


            <h6 className="text-uppercase font-weight-bold"> </h6>
            <img src="../images/Rabvik Innovations.png" alt="Logo" className="footerimg" />
            <br />
            <ul className="list-unstyled d-flex flex-row justify-content-left">
              <li style={{ marginLeft: "0%" }}>
                <a className="text-white" href="#!">
                  <FaFacebookF className="ii" />
                </a>
              </li>
              <li>
                <a className="text-white" href="#!">
                  <FaInstagram className="ii" />
                </a>
              </li>
              <li>
                <a className="text-white" href="#!">
                  <FaYoutube className="ii" />
                </a>
              </li>
              <li style={{ marginRight: "0%" }}>
                <a className="text-white" href="#!">
                  <FaLinkedinIn className="ii" />
                </a>
              </li>
            </ul>

          </div>
          <div className="mb-4 footerabout">

            <h6 className="text-uppercase font-weight-bold">Quick links</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <Link to="/aboutus">About Us</Link>
            </p>
            <p>
              <a href="#!">Blogs</a>
            </p>
            <p>
              <Link to="/innovation-lab">Innovation Lab</Link>
            </p>
            <p>
              {/* <a href="#!">Peridicals</a> */}
              <Link to="/tinker-times">Tinker Times</Link>
            </p>
          </div>

          <div className="footercontact mb-4 ">

            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <FaMapMarkerAlt /> 141 Lake Town, Block A,<br />
              &nbsp;&nbsp;&nbsp;&nbsp; Kolkata 89</p>
            <p>
              <FaEnvelope /> &nbsp;info@rabvik.com</p>

            <p>
              <FaPhoneAlt />&nbsp; 9733381000</p>

          </div>

          <div className="footermap mb-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.2672045032796!2d88.40174131479272!3d22.606494985165334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027bc28c7ad2c9%3A0xc9c202236e1be9a9!2sRabvik%20innovations!5e0!3m2!1sen!2sin!4v1635598092727!5m2!1sen!2sin" style={{ borderRadius: "2%" }} allowfullscreen="" loading="lazy"></iframe>
          </div>
          </div>
      </div>
      <hr className="deep-purple  mt-0 d-inline-block" style={{ width: "100%" }} />

      <div className="footer-copyright text-center">
        
        <p>© 2021 Rabvik® Innovation All Rights Reserved.
        </p>
      </div>

    </footer>



    /* 
    
      <div className="container text-justify text-md-left mt-5">
    
        <div className="row mt-3">
    
          <div className="col-md-3 col-lg-3 col-xl-3 col-sm-8 col-xs-2 mb-4">
    
           <img src="../images/Rabvik Innovations.png" alt="Logo"  style={{width: "60%", height:"65%", backgroundColor:"white"}}/>
           <br/>
           <ul className="list-unstyled d-flex flex-row justify-content-left" style={{width: "60%", overflow:"hidden"}}>
                <li style={{paddingRight:"8%"}}>
                  <a className="text-white" href="#!">
                    <FaFacebookSquare style={{height:"23.5px", width:"23.5px"}}/>
                  </a>
                </li>
                <li style={{padding:"0 8%"}}>
                  <a className="text-white" href="#!">
                    <FaInstagramSquare style={{height:"23px", width:"23.5px"}}/>
                  </a>
                </li>
                <li style={{padding:"0 8%"}}>
                  <a className="text-white" href="#!">
                    <FaYoutubeSquare style={{height:"23px", width:"23.5px"}}/>
                  </a>
                </li>
                <li style={{paddingLeft:"8%"}}>
                  <a className="text-white" href="#!">
                    <FaLinkedin style={{height:"23px", width:"23.5px"}}/>
                  </a>
                </li>
            </ul>
    
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 mx-auto mb-md-0 mb-4">
    
            <h6 className="text-uppercase font-weight-bold">Address</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:"60px"}}/>
            <p>
             <FaGlobe/> 141 Lake Town, Block A,
              Kolkata 89
    </p>
    
          </div>
          
    <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 mx-auto mb-md-0 mb-4">
    
    <h6 className="text-uppercase font-weight-bold">Contact</h6>
    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:"60px"}}/>
    
    <p>
      <FaEnvelope/> pratik@rabvik.com</p>
    
    <p>
      <FaPhoneAlt/> 9733381000</p>
    
    </div>
    
          <div className="col-md-3 col-lg-2 col-xl-2 col-sm-12 mx-auto mb-4">
    
            <h6 className="text-uppercase font-weight-bold">Quick links</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
            <p>
              <a href="#!"> About Us
     </a>
            </p>
            <p>
              <a href="#!">Innovation Labs
     
     </a>
            </p>
            <p>
              <a href="#!">Careers
     </a>
            </p>
    
          </div>
    
    
        </div>
    
      </div>
      <hr className="deep-purple  mt-0 d-inline-block mx-auto" style={{width:"100%"}}/>
    
      <div className="footer-copyright text-center">© 2020 Rabvik® Innovation All Rights Reserved.
      </div> */


  )
};
export default Footer;
