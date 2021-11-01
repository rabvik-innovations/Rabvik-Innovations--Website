import "../css/OurPartners.css";
import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function OurPartners(){
    return(
      <div className="below-navbar">
            <Navbar/>
<br/>
<br/>
<br/>
<br/>

        <div className="outer-div">

        <div id="Heading-section">
            <h2>Our Partners</h2>
        </div>
<br/>

        <div  className="section-title text-center" id="heading-section-achievements">
            <h2>Our achievements</h2>
        </div>

        <div className="koi-bhi-class-name">
        <div className="card-wrapper one">
        <div className="card-header">
          <i className="fas fa-chess-rook"></i>
          <h2 className="card-header-text1">business</h2>
          <h1 className="card-header-text2">infographic</h1>
          <p className="card-header-text3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="card-footer">
          <div className="footer-content-wrap">
            <div className="footer-text-wrap">
              <h1>01</h1>
              
            </div>
            <i className="fas fa-angle-double-right"></i>
          </div>
        </div>
      </div>
      <div className="card-wrapper two">
        <div className="card-header">
          <i className="fas fa-cloud-download-alt"></i>
          <h2 className="card-header-text1">business</h2>
          <h1 className="card-header-text2">infographic</h1>
          <p className="card-header-text3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="card-footer">
          <div className="footer-content-wrap">
            <div className="footer-text-wrap">
              <h1>02</h1>
              
            </div>
            <i className="fas fa-angle-double-right"></i>
          </div>
        </div>
      </div>
      <div className="card-wrapper three">
        <div className="card-header">
          <i className="fas fa-gamepad"></i>
          <h2 className="card-header-text1">business</h2>
          <h1 className="card-header-text2">infographic</h1>
          <p className="card-header-text3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="card-footer">
          <div className="footer-content-wrap">
            <div className="footer-text-wrap">
              <h1>03</h1>
             
            </div>
            <i className="fas fa-angle-double-right"></i>
          </div>
        </div>
      </div>
      <div className="card-wrapper four">
        <div className="card-header">
          <i className="fas fa-grin-squint"></i>
          <h2 className="card-header-text1">business</h2>
          <h1 className="card-header-text2">infographic</h1>
          <p className="card-header-text3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="card-footer">
          <div className="footer-content-wrap">
            <div className="footer-text-wrap">
              <h1>04</h1>
              
            </div>
            <i className="fas fa-angle-double-right"></i>
          </div>
        </div>
      </div> 
        </div>
<br/>
<br/>
<br/>
<br/>
        
  </div>
  <Footer />
</div >
    );
}

export default OurPartners;