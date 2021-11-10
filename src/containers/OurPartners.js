import "../css/OurPartners.css";
import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function OurPartners(){
    return(

        <div className="outer-div below-navbar">
          <Navbar />

        <div className="below-navbar">
          
        <div class="we-are-block">

   
<div id="about-us-section">

  <div className="about-us-image">

    <img src="/images/Lightbackground (1).png" width="808" height="458" alt="Lobby Image" />

  </div>

  <div className="about-us-info">

    <h2>Sri Sri Academy</h2>
    <b>
    <p>2000 square feet lab area.</p>
    <p>Duration of 3 years.</p>
    <p>Location: Kolkata, India.</p>
    </b>

    {/* <a href="#" title="About Us Button">ABOUT US</a> */}

  </div>

</div>

<div id="history-section">

  <div className="history-image">

    <img src="/images/Achievements.png" width="951" height="471" alt="Building Pic" />

  </div>

  <div class="history-info">

    <h2>Achievements</h2>

    <p>Best paper award at <b>Global Conference on Artificial Intelligence and Applications (GCAIA), 2021</b></p>
    <p>Finalist of Inspire Manak Award by <b>Department of Science and Technology, GOI</b></p>
    <p>Winners at <b>SSRVM Science Fest, Banglore</b></p>
    <p>One of the top 9 at <b>Tinkerfest, Atal Innovation Mission</b></p>

    {/* <a href="#" title="History Button">HISTORY</a> */}

  </div>

</div>

</div>
        <Footer />
        </div>
        </div>

        

    );
};

export default OurPartners;