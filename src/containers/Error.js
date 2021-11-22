import React from "react";
import "../css/Error.css";

function Error() {
    
    return (
        <div className="container-fluid error-container text-center" >
            <img className="error-img" src="images/error-img.jpg" />
            <h2 className="error-text">page not found</h2>
        </div>
    );
}

export default Error;