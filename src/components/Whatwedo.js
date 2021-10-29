import React from "react";
import '../css/Whatwedo.css';
import {FaTwitter} from "react-icons/fa";

function WhatWeDo(){
    return(
      <section class="service-section py-5">
      <div class="container">
        <div class="row justify-content-center py-3">
          <div class="col-md-8 col-12 text-center">
            <p class="service-main-heading">Features</p>
          </div>
        </div>
        
        <div class="row">
          <div class="center-container col-md-6 col-lg-6 col-12">

          </div>

          <div class="col-md-3 col-lg-3 col-12" id="icon-box-left">
            <div class="icon-box" >
              <i class="fa fa-briefcase service-icon"></i>
              <p class="service-title"><a href="#">Lorem Ipsum</a></p>
              <p class="service-para"> dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
            <div class="icon-box icon-box-even" >
              <i class="fa fa-clipboard service-icon "></i>
              <p class="service-title"><a href="#">Dolor Sitema</a></p>
              <p class="service-para"> ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          

          <div class="col-md-3 col-lg-3 col-12 mt-4 mt-md-0" id="icon-box-right">
            <div class="icon-box icon-box-even">
              <i class="fa fa-clipboard service-icon "></i>
              <p class="service-title"><a href="#">Dolor Sitema</a></p>
              <p class="service-para"> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>

            <div class="icon-box">
              <i class="fa fa-chart-bar service-icon" ></i>
              <p class="service-title"><a href="#">Sed ut perspiciatis</a></p>
              <p class="service-para"> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}







export default WhatWeDo;