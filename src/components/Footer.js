import React from "react";
import '../css/FooterStyles.css';
// import {FaTwitter} from "react-icons/fa";
// import {FaFacebookF} from "react-icons/fa";
// import {FaLinkedinIn} from "react-icons/fa";
// import {FaInstagram} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {FaGlobe} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaYoutubeSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";


const Footer = () => {
return (

<footer className="page-footer font-small unique-color-dark">
{
<footer className="page-footer font-small unique-color-dark">

    <div className="container">


        {/* <div className="col-md-6 col-lg-7 text-center text-md-right">

          <a className="fb-ic">
            <i className="fab fa-facebook-f white-text mr-4"> </i>
          </a>
          <a className="tw-ic">
            <i className="fab fa-twitter white-text mr-4"> </i>
          </a>
          <a className="gplus-ic">
            <i className="fab fa-google-plus-g white-text mr-4"> </i>
          </a>
          <a className="li-ic">
            <i className="fab fa-linkedin-in white-text mr-4"> </i>
          </a>
          <a class="ins-ic">
            <i className="fab fa-instagram white-text"> </i>
          </a>

        </div> */}


    </div>

  <div className="container text-justify text-md-left mt-5">

    <div className="row mt-3">

      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 footerfirst">

        <h6 className="text-uppercase font-weight-bold"> </h6>
        <img src="../images/Rabvik Innovations.png" alt="Logo" className="footerimg"/>
       <br/>
       <ul className="list-unstyled d-flex flex-row justify-content-left">
            <li style={{marginLeft:"0%"}}>
              <a className="text-white" href="#!">
                <FaFacebookSquare className="ii"/>
              </a>
            </li>
            <li>
              <a className="text-white" href="#!">
                <FaInstagramSquare className="ii"/>
              </a>
            </li>
            <li>
              <a className="text-white" href="#!">
                <FaYoutubeSquare className="ii"/>
              </a>
            </li>
            <li style={{marginRight:"0%"}}>
              <a className="text-white" href="#!">
                <FaLinkedin className="ii"/>
              </a>
            </li>
        </ul>

      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 className="text-uppercase font-weight-bold">Products</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <a href="#!">MDBootstrap</a>
        </p>
        <p>
          <a href="#!">MDWordPress</a>
        </p>
        <p>
          <a href="#!">BrandFlow</a>
        </p>
        <p>
          <a href="#!">Bootstrap Angular</a>
        </p>

      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 className="text-uppercase font-weight-bold">Quick links</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <a href="#!">About Us</a>
        </p>
        <p>
          <a href="#!">Blogs</a>
        </p>
        <p>
          <a href="#!">Innovation Labs</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p>

      </div>

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
        <FaGlobe/> 141 Lake Town, Block A,
          Kolkata 89</p>
        <p>
        <FaEnvelope/> pratik@rabvik.com</p>
        
        <p>
        <FaPhoneAlt/> 9733381000</p>

      </div>

    </div>

  </div>
  <hr className="deep-purple  mt-0 d-inline-block mx-auto" style={{width:"100%"}}/>

  <div className="footer-copyright text-center">© 2021 Rabvik® Innovation All Rights Reserved.
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
  </div> */}


</footer>
);
};
export default Footer;
