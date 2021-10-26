import {FaTwitter} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";

function AdvisorCard(props){
    return(
        <div className="card col-lg-3 col-md-6 " >
    
        <div className="card-body HiddenText"  style={{textAlign: "center"}}>
        <img className="card-img-top" src={props.img} style={{width: "80%", borderRadius:"50%"}}/>
          <h5 className="card-title" style={{marginTop:"1rem"}}>{props.name}</h5>
          
          <div className="social">
            <a href="" target="_blank"> <FaTwitter className="social-icon twitter"/> </a>
            <a href={props.linkedin} target="_blank"><FaLinkedinIn className="social-icon linkedin"/> </a>           
            {/* <a href=""> <FaFacebookF className="social-icon facebook"/> </a> */}
            
          </div>

        </div>
      </div>
    );
}

export default AdvisorCard;

