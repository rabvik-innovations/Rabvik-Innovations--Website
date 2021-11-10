import React from "react";
import '../css/TinkerTimes.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TinkerTimesCard from "../components/TinkerTimesCard";


function TinkerTimes(props) {

    return (
        <div className="below-navbar">
            <Navbar />

            {/* {Periodical Section} */}
            <section id="tinker-times-section" className="tinker-times">
                <div className="container">
                    <div className="title text-center">
                        <h2>Tinker Times™</h2>
                        <br />
                    </div>


                    <div className="row">

                        <TinkerTimesCard
                            text="October"
                            image="images/tinker-times-october.jpg"
                            imgAlt="tinker-times-october"
                            link="documents/October.pdf"
                        />

                        <TinkerTimesCard
                            text="September"
                            image="images/tinker-times-september.jpg"
                            imgAlt="tinker-times-september"
                            link="documents/9 September.pdf"
                        />

                        <TinkerTimesCard
                            text="August"
                            image="images/tinker-times-august.jpg"
                            imgAlt="tinker-times-august"
                            link="documents/8 August.pdf"
                        />

                        <TinkerTimesCard
                            text="July"
                            image="images/tinker-times-july.jpg"
                            imgAlt="tinker-times-july"
                            link="documents/7 July.pdf"
                        />

                        <TinkerTimesCard
                            text="June"
                            image="images/tinker-times-june.jpg"
                            imgAlt="tinker-times-june"
                            link="documents/6 June.pdf"
                        />

                        <TinkerTimesCard
                            text="May"
                            image="images/tinker-times-may.jpg"
                            imgAlt="tinker-times-may"
                            link="documents/5 May.pdf"
                        />

                        <TinkerTimesCard
                            text="April"
                            image="images/tinker-times-april.jpg"
                            imgAlt="tinker-times-april"
                            link="documents/4 April.pdf"
                        />

                        <TinkerTimesCard
                            text="January"
                            image="images/tinker-times-jan.jpg"
                            imgAlt="tinker-times-january"
                            link="documents/2 January.pdf"
                        />

                        <TinkerTimesCard
                            text="January V2"
                            image="images/tinker-times-jan-V2.jpg"
                            imgAlt="tinker-times-january-V2"
                            link="documents/3 January V2.pdf"
                        />

                        <TinkerTimesCard
                            text="October 2019"
                            image="images/tinker-times-oct-19.jpg"
                            imgAlt="tinker-times-october2019"
                            link="documents/1 October 2019.pdf"
                        />

                    </div>

                </div>
            </section>

            <Footer />
        </div >
    );
}

export default TinkerTimes;