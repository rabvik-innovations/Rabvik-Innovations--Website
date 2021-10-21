import React from "react";
import '../css/Periodical.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Periodical(props) {

    return (
        <div className="below-navbar">
            <Navbar />

            {/* {Periodical Section} */}
            <section id="periodical-section" className="periodical">
                <div className="container">
                    <div className="title text-center">
                        <h2>Tinker Times</h2>
                        <br />
                    </div>

                    <div className="carousel-container" >
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner text-center">
                                <div className="carousel-item active">
                                    <h2 className="periodical-text">October 2019</h2>
                                    <a href="documents/1 October 2019.pdf" target="_blank"> pdf </a>
                                </div>

                                <div className="carousel-item">
                                    <h2 className="periodical-text">January 2021</h2>
                                    <a href="documents/2 January.pdf" target="_blank"> pdf </a>
                                    <a href="documents/3 January V2.pdf" target="_blank"> pdf </a>
                                </div>

                                <div className="carousel-item">
                                    <h2 className="periodical-text">April 2021</h2>
                                    <a href="documents/4 April.pdf" target="_blank"> pdf </a>
                                </div>

                                <div className="carousel-item">
                                    <h2 className="periodical-text">May 2021</h2>
                                    <a href="documents/5 May.pdf" target="_blank"> pdf </a>
                                </div>

                                <div className="carousel-item">
                                    <h2 className="periodical-text">June 2021</h2>
                                    <a href="documents/6 June.pdf" target="_blank"> pdf </a>
                                </div>

                                <div className="carousel-item">
                                    <h2 className="periodical-text">July 2021</h2>
                                    <a href="documents/7 July.pdf" target="_blank"> pdf </a>
                                </div>

                                <div className="carousel-item">
                                    <h2 className="periodical-text">August 2021</h2>
                                    <a href="documents/8 August.pdf" target="_blank"> pdf </a>
                                </div>

                                <div className="carousel-item">
                                    <h2 className="periodical-text">September 2021</h2>
                                    <a href="documents/9 September.pdf" target="_blank"> pdf </a>
                                </div>

                            </div>

                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
            {/* {End of gallery section} */}

            <Footer />
        </div >
    );
}

export default Periodical;