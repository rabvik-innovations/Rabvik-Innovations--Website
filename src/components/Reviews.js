import React from "react";
import "../css/Reviews.css";


function Reviews(props) {
  return (
    <div className="reviews">

    <div id="carouselExampleIndicators" className="carousel slide reviewscontainer" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="cc">
{/* <div className="reviewsimg">
  <figure>
    
<img src="../images/robot.png" className="d-block imager w-100" alt="..."/>
<figcaption><h6 className="imgname">Name here</h6></figcaption>
</figure>
</div> */}
    <div className="reviewstext">
          <p>Teaching technology, that is continually changing and upgrading everyday, is a big challenge especially to the blooming tinkerers who are full of enthusiasm to innovate. Undoubtedly after 3 successful years of being the ATL in Charge and the 4th year running, it has been an amazing experience and journey from scratch to winning the National Award and other accolades and continuing everyday with emerging challenges.</p>
          <p style={{textAlign:"right", textTransform:"capitalize"}}>~Abhishek Biswas (ATL incharge at SSA)</p>

    </div>
    </div></div>
    <div className="carousel-item">
      <div className="cc">
        
{/* <div className="reviewsimg">
<figure> 
<img src="../images/robot.png" className="d-block imager w-100" alt="..."/>
<figcaption className="imgname">Name here</figcaption>
</figure>
</div> */}

    <div className="reviewstext">
          <p>I would like to thank Rabvik Innovations for helping me to get closer to my dream. Rabvik Innovations have always supported us and whenever required we got full cooperation. They helped me to do various projects, some of them are Disrobo, obstacle avoiding car and more. Rabvik Innovation has been an integral part of our school's ATL Lab, they have always guided us to become more successful in our life. Finally, I would like to thank my school Sri Sri Academy, Kolkata, my respected teachers and Rabvik Innovations for converting my dream into a reality.</p>
          <p style={{textAlign:"right", textTransform:"capitalize"}}>~Rishav Majumdar (Student)</p>

    </div>
    </div>
    </div>
    <div className="carousel-item">
      <div className="cc">
{/* <div className="reviewsimg">
<figure>
<img src="../images/robot.png" className="d-block imager w-100" alt="..."/>
<figcaption><h6 className="imgname">Name here</h6></figcaption>
</figure>
</div> */}
    <div className="reviewstext">
          <p>For the past few months, my co-innovator and I created Disrobo, even though this was a partially independent project, Rabvik Innovations have a huge role to play in it, The way Rabvik Innovations has shaped the infrastructural system in our school’s ATL Lab, was a pivotal factor in building our project. Thus, our school Sri Sri Academy and Rabvik Innovations, have an immense input in building this project and raising it to such an immense platform.</p>
          <p style={{textAlign:"right", textTransform:"capitalize"}}>~Mitadru Dasgupta (Student)</p>
    </div>
    </div>
  </div></div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
      );
      }
export default Reviews;