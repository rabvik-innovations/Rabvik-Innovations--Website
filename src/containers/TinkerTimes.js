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
                            text="February-2022"
                            image="images/tinker-times-feb-22.jpg"
                            imgAlt="tinker-times-feb-22"
                            link="documents/Tinker Times - Feb 2022.pdf"
                        />                           
                        
                        
                        <TinkerTimesCard
                            text="January-2022"
                            image="images/tinker-times-jan-22.jgp"
                            imgAlt="tinker-times-jan-22"
                            link="documents/Tinker Times Jan 2022.pdf"
                        />                        
                        
                        <TinkerTimesCard
                            text="December-2021"
                            image="images/tinker-times-dec-21.jpg"
                            imgAlt="tinker-times-dec-21"
                            link="documents/Tinker Times- December.pdf"
                        />

                        <TinkerTimesCard
                            text="November-2021"
                            image="images/tinker-times-november.jpg"
                            imgAlt="tinker-times-november"
                            link="documents/Tinker Times Nov.pdf"
                        />

                        <TinkerTimesCard
                            text="October-2021"
                            image="images/tinker-times-october.jpg"
                            imgAlt="tinker-times-october"
                            link="documents/October.pdf"
                        />

                        <TinkerTimesCard
                            text="September-2021"
                            image="images/tinker-times-september.jpg"
                            imgAlt="tinker-times-september"
                            link="documents/9 September.pdf"
                        />

                        <TinkerTimesCard
                            text="August-2021"
                            image="images/tinker-times-august.jpg"
                            imgAlt="tinker-times-august"
                            link="documents/8 August.pdf"
                        />

                        <TinkerTimesCard
                            text="July-2021"
                            image="images/tinker-times-july.jpg"
                            imgAlt="tinker-times-july"
                            link="documents/7 July.pdf"
                        />

                        <TinkerTimesCard
                            text="June-2021"
                            image="images/tinker-times-june.jpg"
                            imgAlt="tinker-times-june"
                            link="documents/6 June.pdf"
                        />

                        <TinkerTimesCard
                            text="May-2021"
                            image="images/tinker-times-may.jpg"
                            imgAlt="tinker-times-may"
                            link="documents/5 May.pdf"
                        />

                        <TinkerTimesCard
                            text="April-2021"
                            image="images/tinker-times-april.jpg"
                            imgAlt="tinker-times-april"
                            link="documents/4 April.pdf"
                        />

                        <TinkerTimesCard
                            text="January-2021"
                            image="images/tinker-times-jan.jpg"
                            imgAlt="tinker-times-january"
                            link="documents/2 January.pdf"
                        />

                        <TinkerTimesCard
                            text="January-2021 V2"
                            image="images/tinker-times-jan-V2.jpg"
                            imgAlt="tinker-times-january-V2"
                            link="documents/3 January V2.pdf"
                        />

                        <TinkerTimesCard
                            text="October-2019"
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
