import "../css/Home.css";
import "../App.css";
import { Link } from 'react-router-dom';
import SocialCard from "../components/SocialCard";
import TeamCard from "../components/TeamCard";
import GalleryCard from "../components/GalleryCard";
import PhotoGallery from "../components/PhotoGallery";
import Hero from '../components/Hero';

import About from '../containers/About';
import AdvisorCard from '../components/AdvisorCard';
import WhatWeDo from '../components/Whatwedo';
import Navbar from '../components/Navbar';
import Reviews from "../components/Reviews";
import Footer from '../components/Footer';

import { Fragment } from 'react';
import ScrollToTop from '../components/Scrolltotop';
import { Content, Heading } from '../css/ScrolltotopStyles';
import Loader from '../components/Loader';

function Home() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <br/><br/>
<div className="preloader">
{/* <div id="preloader-active">
    <div class="preloader d-flex align-items-center justify-content-center">
        <div class="preloader-inner position-relative">
            <div class="preloader-circle"></div>
            <div class="preloader-img pere-text">
                <img src="images/robot.png" alt=""/>
            </div>
        </div>
    </div>
</div> */}
</div>

<section>
<Hero/>
</section>
<div className="sections">
<section>
<div className="about below-navbar">
<div className="container">
      <div className="section-title text-center">
        <h2>About Rabvik®</h2>
      </div>
      <div className="row">
        <div className="aboutstyle">
        <div className="col">
        <video controls autoPlay muted poster={"../images/RI.png"} className="abtvideo">
  <source src={"https://rabvik.com/images/Rabvik-Teaser.mp4"} type="video/mp4"/>
</video>
        </div>
        <div className="col2">
          <p>
          Incredible breakthroughs and spectacular advancements in 
          technology are changing the world as we know it by leaps and bounds. If we are to keep up with this frenetic pace of technological change in industry and education, technology minded and 
          design thinking are essential at the very earliest steps, especially for our future generations.
          </p>
          <p>
          Rabvik® Innovations is just the kind of unique platform we 
          need today to encourage breakthrough technologies and Innovation’s world class mentoring program creates the optimum biosphere to incubate ideas and innovations right from the school level. One of the exemplary institutes for innovation, 
          entrepreneurship and robotics training for school children,
          </p><br/>
         <div className="aboutbtn">
         <Link to="/aboutus">
           <button>More about us</button>
           </Link>
           </div>
        </div></div>
      </div>
    </div>
    </div>
      </section>

<section>
  {/* <WhatWeDo/> */}
  </section>


      {/* {Gallery Section} */}
      <section id="gallery-section" className="gallery-item">
        <div className="container">
          <div className="gallery-title text-center">
            <h2>Gallery</h2>
            <br />
          </div>

          <div className="row photo-section">
            {/* <GalleryCard
               image="./public/images/" /> */}
            {PhotoGallery.slice(0, 3).map((photo) => {
              return <GalleryCard key={photo.id} image={photo.image} />;
            })}
            
            <div className="d-flex justify-content-center">
              <Link to="/gallery">
                <button type="button" className="gallery-button" >See more...</button>
              </Link>

            </div>


          </div>
        </div>
      </section>
      {/* {End of gallery section} */}
</div>

      {/* Advisor Section  */}
      <section id="advisor" className="advisor">
        <div className="container">
          <div className="section-title text-center">
            <h2 style={{color:"white"}}>Our Advisors</h2>
          </div>

          <div className="row">
            <AdvisorCard
              name="Anupam Sen"
              linkedin="https://www.linkedin.com/in/anupam-sen-a16b7013/?originalSubdomain=in"
              img="images/advisor-1.png" />

            <AdvisorCard
              name="Tamal Pal"
              linkedin="https://www.linkedin.com/in/tamal-kumar-pal-46095112/"
              img="images/advisor-2.jfif" />

            <AdvisorCard
              name="Uday Chatterjee"
              linkedin="https://www.linkedin.com/in/uday-chatterjee-838b764/"
              img="images/advisor-6.jfif" />

          </div>
        </div>
      </section>
      {/* {End of Advisor section} */}

      {/* Social Cards  Section */}
      <section id="social-item" className="social-item">
        <div className="container">
          <div className="section-title text-center">
            <h2>Want to know more about us?</h2>
          </div>
     <div className="socialcardsalign dcol">
                <div className="column fbcolumn">
<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frabvikinnovations&tabs=timeline&width=560&height=710&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="560" height="710" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>           
</div>  
            <div className="column socialcolumn">
            <SocialCard
              socialIcon="instagram"
              text="Team's daily lives. Photos, jokes and the office atmosphere!"
            />

            <SocialCard
              socialIcon="facebook"
              text="Stories, tips, popular, add-ons, and other important info."
              link="https://www.facebook.com/rabvikinnovations/?modal=admin_todo_tour"
            />
           

            <SocialCard
              socialIcon="twitter"
              text="Here we share Tech and Development insights."
            />

            <SocialCard
              socialIcon="linkedin"
              text="Tech and Development insights."
              link="https://www.linkedin.com/company/rabvik/mycompany/"
            />
            </div>
                 
             </div>
</div>


      </section>
      {/* End Social Cards Section  */}

      <section>
        <Reviews />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
export default Home;
