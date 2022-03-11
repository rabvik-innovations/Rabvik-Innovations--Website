import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/Contact.css";
import {FaEnvelope} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {FaGlobe} from "react-icons/fa";
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { useState } from 'react';

const Result=()=>{
	return(
		<p>
			Your message has been delivered successfully. We'll get back to you soon! 
		</p>
	)
}

function Contact() {
	// const form = useRef();
const [result,showResult]=useState(false);
	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_ykpya5e', 'template_crgru0w', e.target,'user_lnqd3D3fYKdgtXeu14Vp0')
		.then(
			(result) => 
			{
			console.log(result.text);
		    }, 
		(error) => 
		{
			console.log(error.text);
		}
		);
		e.target.reset();
		showResult(true);
	};
	setTimeout(()=>{
		showResult(false);
	},4000);
    return (
		<div className="below-navbar">
            <Navbar/>
            <section id="contact-section" className="contact-item">
				
		<div class="container" style={{height:"740px"}}>
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Contact Form</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-12">
					<div class="">
						<div class="row no-gutters">
							<div class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
								<div class="contact-wrap w-100 p-md-5 p-4">
									<h3 class="mb-4" style={{color:"#061945", fontSize:"34px", fontWeight:"530"}}>Contact Us</h3>
									<div id="form-message-warning" class="mb-4"></div> 
<form method="POST" id="contactForm" name="contactForm" class="contactForm" onSubmit={sendEmail}>
			<div class="row">
				<div class="col-md-6">
			<div class="form-group">
				<label class="label" for="name">Full Name</label>
				<input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
			</div>
			</div>
			<div class="col-md-6"> 
				<div class="form-group">
					<label class="label" for="email">Email Address</label>
					<input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
				</div>
			</div>
			<div class="col-md-12">
			<div class="form-group">
				<label class="label" for="subject">Subject</label>
				<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
			</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
<label class="label" for="#">Message</label>
		<textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Your message here..."></textarea>
	</div>
</div>
<div class="col-md-12">
		<div class="form-group">
			<input type="submit" value="Send Message" class="btn contactbtn"/>
			<div class="submitting"></div>
</div>
		</div>
	</div>
<div className="row" style={{fontSize:"small", color:"#061945"}}>
{
	result?<Result/>:null
}
	  </div>
</form>
								</div>
							</div>
							<div class="col-lg-4 col-md-5 d-flex align-items-stretch">
								<div class="info-wrap w-100 p-md-5 p-4 ">
									<h3 style={{fontFamily:"georgia", letterSpacing:"2px"}}>We'd love to hear from you</h3>
									<br/><p class="mb-4">Drop us a message and we'll respond as soon as possible!</p>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center mt-3">
								<FaGlobe/>
				        		</div>
				        		<div class="text pl-2 mt-1">
					            <p><span className="sidelabels">Address</span>&nbsp; : &nbsp;141 Lake Town, 
								Block A,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Kolkata 89</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
								<FaPhoneAlt/>
				        		</div>
				        		<div class="text pl-2">
					            <p><span className="sidelabels">Phone</span>&nbsp; : &nbsp; <a href="tel://1234567920">9733381000</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
								<FaEnvelope/>
				        		</div>
				        		<div class="text pl-2 mt-1">
					            <p><span className="sidelabels">Email</span>&nbsp; : &nbsp; <a href="mailto:info@yoursite.com">info@rabvik.com</a></p>
					          </div>
				          </div>
				        	
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

            </section>
			<Footer />
        </div >
          
    );
}

export default Contact;
