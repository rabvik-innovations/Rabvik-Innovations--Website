import React from "react";
import '../css/Periodical.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PeriodicalCard from "../components/PeriodicalCard";


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


                    <div className="row">
                        <PeriodicalCard
                            image="images/tinker-times-oct-19.jpg"
                            imgAlt="tinker-times-october2019"
                            link="documents/1 October 2019.pdf"
                        />

                        <PeriodicalCard
                            image="images/tinker-times-jan.jpg"
                            imgAlt="tinker-times-january"
                            link="documents/2 January.pdf"
                        />

                        <PeriodicalCard
                            image="images/tinker-times-jan-V2.jpg"
                            imgAlt="tinker-times-january-V2"
                            link="documents/3 January V2.pdf"
                        />

                        <PeriodicalCard
                            image="images/tinker-times-april.jpg"
                            imgAlt="tinker-times-april"
                            link="documents/4 April.pdf"
                        />

                        <PeriodicalCard
                            image="images/tinker-times-may.jpg"
                            imgAlt="tinker-times-may"
                            link="documents/5 May.pdf"
                        />

                        <PeriodicalCard
                            image="images/tinker-times-june.jpg"
                            imgAlt="tinker-times-june"
                            link="documents/6 June.pdf"
                        />

                        <PeriodicalCard
                            image="images/tinker-times-july.jpg"
                            imgAlt="tinker-times-july"
                            link="documents/7 July.pdf"
                        />

                        <PeriodicalCard
                            image="images/tinker-times-august.jpg"
                            imgAlt="tinker-times-august"
                            link="documents/8 August.pdf"
                        />

                        <PeriodicalCard
                            image="images/tinker-times-september.jpg"
                            imgAlt="tinker-times-september"
                            link="documents/9 September.pdf"
                        />

                    </div>

                </div>
            </section>

            <Footer />
        </div >
    );
}

export default Periodical;