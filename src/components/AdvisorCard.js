import {FaTwitter} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";

function AdvisorCard(props){
    return(
        <div className="card col-lg-3 col-md-6 " >
    
        <div className="card-body HiddenText"  style={{textAlign: "center"}}>
        <img className="card-img-top" src={props.img} style={{width: "80%"}}/>
          <h5 className="card-title">{props.name}</h5>
          
          <div className="social">
            <a href=""> <FaTwitter className="social-icon twitter"/> </a>
            <a href={props.linkedin}><FaLinkedinIn className="social-icon linkedin"/> </a>           
            {/* <a href=""> <FaFacebookF className="social-icon facebook"/> </a> */}
            
          </div>

        </div>
      </div>
    );
}

export default AdvisorCard;

