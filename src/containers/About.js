import "../css/AboutStyles.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About(props) {
  return (
<div className="">
            <Navbar />

<div className="row" style={{ maxWidth:'100%', overflowX:'hidden'}}>
<div className="col-lg-12  text-center  video-banner" >
    <h2 style={{marginTop:"10rem", color:"#FFFFFF"}}> About Us </h2>
</div>
</div>

        <div className="aboutstyles">
            
<h2 className="abouthead"> About Rabvik® </h2>

        <div className="col22">
        <div className="aboutvector"  style={{width:"12%"}}><img src="https://content.presentermedia.com/content/animsp/00000000/558/bouncing_question_mark_300_wht.gif"/>
          </div>
            
            <div style={{width:"80%", marginLeft:"3%"}}><p>
              <strong>We are a group of highly experienced and passionate Technocrats, Entrepreneurs and AngelInvestors from top Engineering and Management Institutes, </strong>
              who have united with a vision of creating 100000 innovators and entrepreneurs in next few years for an <strong>Atma Nirbhar Bharat</strong>. Our 
              mission is to see that every school and college adapts to the need of an entrepreneurship lab to promote a culture of innovations and incubations in the school and colleges. We use tools like 
        <strong> Electronics, Robotics, AI, Mechatronics and IOT etc.</strong> in our innovation labs for developing lateral thinking amongst students. We encourage innovation and prototype development, patent management, entrepreneurs’ skills development, incubation of start up ideas and help students to start their own businesses or to be market ready for working in start-ups. we try to hunt for talented students who could be the next whiz Kid on the start-up 
        block or innovator of new technology, capable of changing the face of Global economy in the coming years. Here in 
        <strong>Rabvik Innovations we consider age is no bar for innovation or start-ups</strong>.
        
          </p></div>

          <br/>
        </div>
        <div className="col1">
        <video controls  poster={"../images/RI.png"}>
  <source src={"https://rabvik.com/images/Rabvik-Teaser.mp4"} type="video/mp4"/>
</video>
        
        </div>
</div>
    <Footer />

    </div>
  );
}
export default About;