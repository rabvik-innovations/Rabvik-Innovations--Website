
function TinkerTimesCard(props) {
    return (
        <div className="col-lg-4 col-md-6 align-items-stretch text-center tinker-times-card">

            <h3> {props.text} </h3>
        
            <a href={props.link} target="_blank">
                <img className="tinker-times-img" src={props.image}  alt={props.imgAlt} />
            </a>

      </div>
    );

}

export default TinkerTimesCard;