import React from "react";

function ImageModal(props) {
    return (
        

            <div className="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header pb-0" style={{ border: "none" }}>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={props.image} />
                        </div>

                    </div>
                </div>
            </div>

        
    );
}

export default ImageModal;




  