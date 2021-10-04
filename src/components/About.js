import React from "react";
import "../css/AboutStyles.css";

function About(props) {
  return (
    <div className="about below-navbar">
      <div>
        <h1 className="m-3">About Rabvik®</h1>
      </div>
      <div className="container row m-3">
        <div className="col">
        <video controls="autoplay muted"
          src={"https://rabvik.com/images/Rabvik-Teaser.mp4"}
        />
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
          </p>
         <button>More about us</button>
        </div>
      </div>
    </div>
  );
}
export default About;