import "../css/Home.css";
import "../App.css";
import { Link } from "react-router-dom";
import SocialCard from "../components/SocialCard";
import TeamCard from "../components/TeamCard";
import GalleryCard from "../components/GalleryCard";
import PhotoGallery from "../components/PhotoGallery";
import AdvisorCard from "../components/AdvisorCard";
import WhatWeDo from "../components/Whatwedo";
import AboutPage from "../containers/About";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import { Fragment } from "react";
import ScrollToTop from "../components/Scrolltotop";
import { Content, Heading } from "../css/ScrolltotopStyles";
import Loader from "../components/Loader";
import React, { useState, Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Lines } from "react-preloaders";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Pie } from 'react-chartjs-2';

function Home() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />

      {/* <div className="preloader">
<div id="hola">
        <div id="preloader">
        <span></span>
        <span></span>
          </div>
            </div>
</div> */}

      <section id="hero" className="below-navbar">
        <div className="hero-container">
          <h1 className="btn-shine" style={{ fontSize: "56px" }}>
            Rabvik Innovations
          </h1>
          <br />
          <h2 className="wrapper">
            {" "}
            &lt; Innovation, Technology and Entrepreneurship &gt;
          </h2>
          <p className="heropara">
            STEM Education, e Learning, Robotic Labs, Entrepreneurship Coaching,
            Mentoring, Start Up Assistance. Encourage breakthrough technologies
            and Innovations of your children right from the school level through
            our world class mentoring program and Innovation Lab
          </p>
         
          <Button  onClick={() =>{
        window.location = '/About';
    }} className="btn-get-started">
            Know More
          </Button>

        </div>

      </section>
      {/*
      <section id="aboutsec">
        <div className="about">
          <div className="container">
            <div className="section-title text-center">
              <h2>About Rabvik®</h2>
            </div>
            <div className="row">
              <div className="aboutstyle">
                <div className="col">
                  <video
                    controls
                    autoPlay
                    muted
                    poster={"../images/RI.png"}
                    className="abtvideo"
                  >
                    <source
                      src={"https://rabvik.com/images/Rabvik-Teaser.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="col2">
                  <p>
                    Incredible breakthroughs and spectacular advancements in
                    technology are changing the world as we know it by leaps and
                    bounds. If we are to keep up with this frenetic pace of
                    technological change in industry and education, technology
                    minded and design thinking are essential at the very
                    earliest steps, especially for our future generations.
                  </p>
                  <p>
                    Rabvik® Innovations is just the kind of unique platform we
                    need today to encourage breakthrough technologies and
                    Innovation’s world class mentoring program creates the
                    optimum biosphere to incubate ideas and innovations right
                    from the school level. One of the exemplary institutes for
                    innovation, entrepreneurship and robotics training for
                    school children,
                  </p>
                  <br />
                  <div className="aboutbtn">
                    <Link to="/about">
                      <div className="abtbttn">
                        <button style={{ textTransform: "capitalize" }}>More about us</button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <WhatWeDo />
      </section>
      */}
      <section id="tools-section" className="tool-item">
        <div className="section-title text-center">
          <h2>Our Deliverables</h2>
          <br />
        </div>
        <div className="row mt-3">
          <div className="tech">
            <div className="tool">
              <img src="../images/coding.jpg" />
              <p>Hands on Testing</p>
            </div>
            <div className="tool">
              <img src="../images/electronics.jpg" />
              <p>Offline & Online Classes</p>
            </div>
            <div className="tool">
              <img src="../images/iot.jpg" />
              <p>Personal Mentoring</p>
            </div>
            <div className="tool">
              <img src="../images/ai.jpg" />
              <p>Competition Support </p>
            </div>
            <div className="tool">
              <img src="../images/robotics.jpg" />
              <p>Seminars by Professionals</p>
            </div>
            <div className="tool">
              <img src="../images/enterpreneur.jpg" />
              <p>Entrepreneurship Skill Development</p>
            </div>
          </div>
        </div>
      </section>
      <div className="sections">
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
                  <button type="button" className="gallery-button">
                    See more...
                  </button>
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
            <h2 style={{ color: "white" }}>Advisors (Honorary)</h2>
          </div>

          <div className="row advisor-card-row justify-content-center">
            <AdvisorCard
              name="Anupam Sen"
              linkedin="https://www.linkedin.com/in/anupam-sen-a16b7013/?originalSubdomain=in"
              img="images/advisor-1.png"
            />

            <AdvisorCard
              name="Tamal Pal"
              linkedin="https://www.linkedin.com/in/tamal-kumar-pal-46095112/"
              img="images/advisor-2.jfif"
            />

            <AdvisorCard
              name="Uday Chatterjee"
              linkedin="https://www.linkedin.com/in/uday-chatterjee-838b764/"
              img="images/advisor-6.jfif"
            />

            <AdvisorCard
              name="Dr. Neeladri Chatterjee"
              linkedin="https://www.linkedin.com/in/dr-neeladri-chatterjee-9686b94/"
              img="images/team-1.jfif"
            />
          </div>
        </div>
      </section>
      {/* {End of Advisor section} */}

      {/* Social Cards  Section */}
      <section id="social-item" className="social-item">
        <div className="container">
          <div className="section-title text-center">
            <h2>Let's Get in Touch :)</h2>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <div className="socialcardsalign dcol">
              <div className="column socialcolumn">
                <span variant="primary" onClick={handleShow}>
                  <SocialCard
                    id="facebook"
                    socialIcon="facebook"
                    text="See the stories, tips, add-ons and lots of other stuff."
                  />
                </span>
                <span variant="primary" onClick={handleShow}>
                  <SocialCard
                    id="instagram"
                    socialIcon="instagram"
                    text="See our events, photos and office atmosphere!"
                  />
                </span>

                <span variant="primary" onClick={handleShow}>
                  <SocialCard
                    id="youtube"
                    socialIcon="youtube"
                    text="Here we share Tech info and Development insights."
                  />
                </span>
                <span variant="primary" onClick={handleShow}>
                  <SocialCard
                    id="linkedin"
                    socialIcon="linkedin"
                    text="Know the Technical and Development insights here."
                  />
                </span>
              </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <div className="column fbcolumn">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frabvikinnovations&tabs=timeline&width=590&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="590"
                    height="650"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button variant="secondary" onClick={handleClose}>
                  Close
                </button>
              </Modal.Footer>
            </Modal>
            {/*  
      <Modal show={showModal} onHide={handleClose} data-target="#instagram">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className="column fbcolumn">
     <div className="tagembed-container" style={{width:"100px", height:"660%", overflow: "auto"}}>
       <div className="tagembed-socialwall" data-wall-id="15097" view-url="https://widget.tagembed.com/15097?view">  
       </div> 
       <script src="//widget.tagembed.com/embed.min.js" type="text/javascript"></script></div>  
  
</div> 
    
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
      */}
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <div className="column fbcolumn">
                  <iframe
                    width="500"
                    height="350"
                    src="https://www.youtube.com/embed/InDoBPKZ-HQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button variant="secondary" onClick={handleClose}>
                  Close
                </button>
              </Modal.Footer>
            </Modal>
            <Modal
              show={showModal}
              onHide={handleClose}
              className="socialmodal"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <div className="column fbcolumn">
                  <iframe
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6846450923691098112"
                    height="582"
                    width="504"
                    frameborder="0"
                    allowfullscreen=""
                    title="Embedded post"
                  ></iframe>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button variant="secondary" onClick={handleClose}>
                  Close
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </section>
      {/* End Social Cards Section  */}

      <section>

        <div className="section-title text-center">
          <h2 style={{ letterSpacing: "1px" }}>Testimonies...</h2>
          {/*<h2>What Our Customers Say...</h2>*/}
        </div>
        <Reviews />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
export default Home;
