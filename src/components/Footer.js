import React from "react";
import '../css/FooterStyles.css';
// import {FaTwitter} from "react-icons/fa";
// import {FaFacebookF} from "react-icons/fa";
// import {FaLinkedinIn} from "react-icons/fa";
// import {FaInstagram} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {FaGlobe} from "react-icons/fa";

const Footer = () => {
return (

<footer className="page-footer font-small unique-color-dark">


  <div className="container text-justify text-md-left mt-5">

    <div className="row mt-3">

      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        <h5 className="text-uppercase font-weight-bold">Rabvik Innovations</h5>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p className="text-justify">Our mission is to see that every school and college adapts to the need of an entrepreneurship lab to promote a culture of innovations and incubations in the school and colleges.</p>

      </div>


      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

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
          <a href="#!">Career
 </a>
        </p>
        <p>
          <a href="../containers/Gallery.js">Gallery
</a>
        </p>
        <p>
          <a href="#!"> Contact Us</a>
        </p>

      </div>

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:"60px"}}/>
        <p>
         <FaGlobe/> 141 Lake Town,
Block A,
Kolkata 89
</p>
        <p>
          <FaEnvelope/> pratik@rabvik.com</p>
        
        <p>
          <FaPhoneAlt/> 9733381000</p>

      </div>

    </div>

  </div>
  <hr className="deep-purple accent-2 mb-2 mt-0 d-inline-block mx-auto" style={{width:"100%"}}/>

  <div className="footer-copyright text-center py-3">© 2020 Rabvik® Innovation All Rights Reserved.
  </div>

</footer>
);
};
export default Footer;
