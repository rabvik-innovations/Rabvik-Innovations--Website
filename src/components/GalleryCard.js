import React from "react";
import ImageModal from "./ImageModal";
import PhotoGallery from "./PhotoGallery";

function GalleryCard(props) {
    return (
        <div className="col-lg-4 col-md-6 align-items-stretch outer-section">
            <div className="img-card">
                <img src={props.image} data-toggle="modal" data-target="#imageModal" />
            </div>

            <ImageModal image="images/gallery-Tech-MoU.jpg"/>
  
        </div>
    );
}

export default GalleryCard;

