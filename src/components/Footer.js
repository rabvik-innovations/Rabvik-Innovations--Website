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

      <div className="col-md-2 col-lg-2 col-xl-3 col-sm-8 col-xs-2 mb-4">

       <img src="../images/logo.jpg" alt="Logo"  style={{width: "50%", height:"50%"}}/>
       <br/>
       <ul className="list-unstyled d-flex flex-row justify-content-left">
            <li>
              <a className="text-white" href="#!">
                <i className={`bi bi-facebook`}></i>
              </a>
            </li>
            <li>
              <a className="text-white px-2" href="#!">
                <i className={`bi bi-instagram`}></i>
              </a>
            </li>
            <li>
              <a className="text-white ps-2" href="#!">
                <i className={`bi bi-youtube`}></i>
              </a>
            </li>
            <li>
              <a className="text-white px-2" href="#!">
                <i className={`bi bi-linkedin`} ></i>
              </a>
            </li>
        </ul>

      </div>
      <div className="col-md-4 col-lg-3 col-xl-3 col-sm-12 mx-auto mb-md-0 mb-4">

        <h6 className="text-uppercase font-weight-bold">Address</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:"60px"}}/>
        <p>
         <FaGlobe/> 141 Lake Town, Block A,<br/>
         </p>
         <p style={{marginLeft:"22px"}}> Kolkata 89
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
  </div>

</footer>
);
};
export default Footer;
