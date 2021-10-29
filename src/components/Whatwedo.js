import React from "react";
import '../css/Whatwedo.css';
import {FaTwitter} from "react-icons/fa";

function WhatWeDo(){
    return(
      <section class="service-section mt-3">
      <div class="container">
        {/* <div class="row justify-content-center ">
        <div className="section-title text-center">
        <h2>Features</h2>
        <br/>
      </div>
        </div> */}
        
        <div class="row feature">
          <div class=" col-md-5 col-lg-5 col-12">
<img class="center-container" style={{width:"100%"}} src="https://i.pinimg.com/originals/a1/ba/2c/a1ba2c150d44d387f565a87c54351bf8.gif"/>
          </div>
<div className="allbox">
          <div class="boxes">
            <div class="icon-box icon-box-tl">
              <i class="fa fa-briefcase service-icon"></i>
              <p class="service-para">
              Rabvik® Innovation Lab<br/>
               <span style={{fontSize:"12px"}}> Rabvik® Innovations is one of the exemplary organisations for innovation. entrepreneurship and robotics training for school children. Rabvik® has already trained over 5000 students.</span></p>
            </div>

            <div class="icon-box icon-box-tr" >
              <i class="fa fa-clipboard service-icon "></i>
              <p class="service-para">
              Research and Incubation Hub<br/>
              <span  style={{fontSize:"12px"}}> Rabvik® innovations' objective is to "serve" as a "promoter" of world class innovation hubs.</span></p>
            </div>

            <div class="icon-box icon-box-bl">
              <i class="fa fa-clipboard service-icon "></i>
              <p class="service-para">
              School Partnership Program<br/>
              <span style={{fontSize:"12px"}}>We provide end-to-end solutions to enable schools to set up Rabvik® Innovation Labs, to train students to excel in design thinking, problem solving, technology and help them become innovators and scientists from a tender age.</span></p>
            </div>

            <div class="icon-box icon-box-br">
              <i class="fa fa-chart-bar service-icon" ></i>
              <p class="service-para">Incubation & Entrepreneurship Development<br/>
              <span  style={{fontSize:"12px"}}>Our objective is to serve as a platform for promotion of world-class Innovation Hubs, Grand Challenges, Start-up businesses.</span></p>
            </div>
    </div>      
    </div>
         
          {/* <div class="col-md-6 col-lg-6 col-12 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="fa fa-cog service-icon"></i>
              <p class="service-title"><a href="#">Magni Dolore</a></p>
              <p class="service-para">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-12 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="fa fa-calendar-alt service-icon"></i>
              <p class="service-title"><a href="#">Eiusmod Tempor</a></p>
              <p class="service-para">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    );
}






export default WhatWeDo;