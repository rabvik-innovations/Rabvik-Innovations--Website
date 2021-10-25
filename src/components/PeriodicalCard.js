
function PeriodicalCard(props) {
    return (
        <div className="col-lg-4 col-md-6 align-items-stretch text-center">
        
            <a href={props.link} target="_blank">
                <img className="periodical-img" src={props.image}  alt={props.imgAlt} />
            </a>

      </div>
    );

}

export default PeriodicalCard;