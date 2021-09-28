import React from "react";
import {
Box,
Container,
Border,
Ul,
Li,
Column,
FooterBottom,
Encloser,
FooterLink,
Icon,
Heading,
Heading1,
} from "./FooterStyles";
import {FaTwitter} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {FaGlobe} from "react-icons/fa";

const Footer = () => {
return (
	<Box>
	<Encloser>
      <FooterLink href={"https://rabvik.com/"}>
        <img src="https://rabvik.com/images/logo.jpg" height = "100px"
    width = "120px"
    margin-top= "20%"/>

        </FooterLink>

      
		<Column>
        <Heading1>Rabvik Innovations</Heading1>
        <Container>
        Rabvik® Innovations is just the kind of unique platform we need today to encourage 
        breakthrough technologies and Innovation’s world class mentoring program creates the 
        optimum biosphere to incubate ideas and innovations right from the school level.
        </Container>
     
      </Column>

		<Column>
        <Heading> Quick Links</Heading>
        <Border/>
        <Ul>
          <FooterLink href="">
            <Li>About Us</Li>
          </FooterLink>
          <FooterLink href="">
            <Li>Innovation Labs</Li>
          </FooterLink>
          <FooterLink href="">
            <Li>Incubation Hub</Li>
          </FooterLink>
          <FooterLink href="">
            <Li>Career</Li>
          </FooterLink>
          <FooterLink href="">
            <Li>Gallery</Li>
          </FooterLink>
          <FooterLink href="">
            <Li>Contact Us</Li>
          </FooterLink>
        </Ul>
      </Column>

		<Column>
        <Heading> Contact Us</Heading>
        {/* // <div class="border"></div> --> */}
        <Ul>
          <Li>
            <FaGlobe/>&nbsp;
             Rabvik® Innovations<br/>
             <span style={{ marginLeft: '24px' }}>141</span> Lake Town,<br/>
             <span style={{ marginLeft: '24px' }}>Block A,</span> Kolkata 89
          </Li>
          <br/>
            <Li style={{ marginTop: '24px' }}>
            <FaPhoneAlt/>&nbsp;
            9831379029
          </Li>
          <Li>

            <FaEnvelope/>&nbsp;
            pratik@rabvik.com
          </Li>
        </Ul>&nbsp;
        <Container>
          <FooterLink href={" https://www.twitter.com"}>
          &nbsp;&nbsp;&nbsp;&nbsp; <Icon>
         <FaTwitter/>
       </Icon>
       </FooterLink>
          <FooterLink href={" https://www.facebook.com"}>
            <Icon>
            <FaFacebookF/>
            </Icon>
            </FooterLink>
            
          <FooterLink href={" https://www.linkedin.com/"}>
            <Icon>
            <FaLinkedinIn/>
            </Icon>
            </FooterLink>
          <FooterLink href={" https://www.instagram.com"}>
            <Icon>
            <FaInstagram/>
            </Icon>
            </FooterLink>
        </Container>
      </Column>
   
    
	</Encloser>
  <FooterBottom>
  Copyright &copy; Rabvik 2021 @ All rights reserved.

</FooterBottom> 
	</Box>
);
};
export default Footer;
