import React, { useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import PhotoGallery from "./PhotoGallery";

function GalleryCard(props) {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState("abc.jpg");
    //const [id, setId] = useState(null);

    const handleClick = (e) => {
        //console.log(e.currentTarget.getAttribute('src'));

        setImage(e.currentTarget.getAttribute('src'));
        //setImage(e.target.src);
        setShow(true);

        // console.log(image);
       
    };



    return (
        <div className="col-lg-4 col-md-6 align-items-stretch outer-section">
            <div className="img-card">
                <img src={props.image} id={props.id} data-toggle="modal" data-target="#galleryImageModal" onClick={(e) => handleClick(e)} />
            </div>


            {show ? (
                <ImageModal image={image} />
            ) : null}

            {/* {PhotoGallery.filter(photo => photo.id === id).map(photo => (
                <ImageModal image={photo.image} />
            ))} */}



        </div>
    );
}

export default GalleryCard;

