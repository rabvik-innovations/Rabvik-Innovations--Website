
function SocialCard(props) {
    return (
        
        <div className="d-flex align-items-stretch">
        
            <div class="card" style={{marginTop:"0%"}}>
                <div class="card-body" style={{ textAlign: "left" }}>
                    <div className="social-icon">
                        <a href=""><i className={`bi bi-${props.socialIcon}`}></i></a>
                    </div>
                    <p>{props.text}</p>
                </div>

            </div>
     
        </div>
    );

}

export default SocialCard;