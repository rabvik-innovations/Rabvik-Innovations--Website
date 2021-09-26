import React from "react";
import PhotoGallery from "./PhotoGallery";

function GalleryCard(props){
    return(
        <div className="col-lg-4 col-md-6 align-items-stretch outer-section">
            <div className="img-card">
                <img src={props.image} />
            </div>

        </div>
    );
}

export default GalleryCard;

