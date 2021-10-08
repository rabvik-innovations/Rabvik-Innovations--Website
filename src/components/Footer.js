import React from "react";
import '../css/FooterStyles.css';
// import {FaTwitter} from "react-icons/fa";
// import {FaFacebookF} from "react-icons/fa";
// import {FaLinkedinIn} from "react-icons/fa";
// import {FaInstagram} from "react-icons/fa";
// import {FaEnvelope} from "react-icons/fa";
// import {FaPhoneAlt} from "react-icons/fa";
// import {FaGlobe} from "react-icons/fa";

const Footer = () => {
return (

<footer className="page-footer font-small unique-color-dark">


  <div className="container text-center text-md-left mt-5">

    <div className="row mt-3">

      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        <h6 className="text-uppercase font-weight-bold">Rabvik Innovations</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>

      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 className="text-uppercase font-weight-bold">Products</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <a href="#!">First</a>
        </p>
        <p>
          <a href="#!">Second</a>
        </p>
        <p>
          <a href="#!">Third</a>
        </p>
        <p>
          <a href="#!">Fourth</a>
        </p>

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
          <a href="#!">Gallery
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
          <i className="fas fa-home mr-3"></i>
141 Lake Town,
Block A,
Kolkata 89
</p>
        <p>
          <i className="fas fa-envelope mr-3"></i> pratik@rabvik.com</p>
        
        <p>
          <i className="fas fa-print mr-3"></i> 98313790299</p>

      </div>

    </div>

  </div>

  <div className="footer-copyright text-center py-3">© 2020 Rabvik® Innovation All Rights Reserved.
  </div>

</footer>
);
};
export default Footer;
