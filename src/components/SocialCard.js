
function SocialCard(props) {
    return (
        
        <div className="d-flex align-items-stretch">
        
            <div class="card" style={{marginTop:"0%", marginBottom:"2%"}}>
                <div class="card-body socialbody" style={{ textAlign: "justify" }}>
                    <div className="social-icon text-center">
                        <a href={props.link} target="_blank"><i className={`bi bi-${props.socialIcon}`}></i></a>
                    </div>
                    <p>{props.text}</p>
                </div>

            </div>
     
        </div>
    );

}

export default SocialCard;