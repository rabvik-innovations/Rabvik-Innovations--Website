

function TeamCard(props) {
    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div className="member">
          <img src={props.image} />
          <h4>{props.name}</h4>
          {/* <span>{props.designation}</span> */}
          <p>
            {props.description}
          </p>
          <div className="social">
            <a href={props.twitter} target="_blank"><i className="bi bi-twitter"></i></a>
            {/* <a href=""><i className="bi bi-facebook"></i></a> */}
            <a href={props.linkedin} target="_blank"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    );

}

export default TeamCard;