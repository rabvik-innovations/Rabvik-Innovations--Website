import '../css/InnovationLab.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaBrain, FaSearch, FaLayerGroup, FaChartBar, FaLightbulb } from "react-icons/fa";



function InnovationLab() {
    return (
        <div className="">
            <Navbar />

            <div className="row" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
                <div className="col-lg-12  text-center  video-banner" >
                    <h2 style={{ marginTop: "10rem", color: "#FFFFFF" }}> Innovation Labs </h2>
                </div>
            </div>


            <div className="container innovation-lab" >

                <h2> Innovation Labs in Schools </h2>

                <div className=" row innovation-lab-text">
                    <div className="col-md-8 col-sm-12">
                        <strong>We aim to train and prepare the next generation of robotics, scientists and engineers
                            innovative enough to push the envelope and be creative enough to achieve the impossible.</strong> The
                        Rabvik Robotics and Automation lab will be established with help of Technocrats and
                        Mentors from the Industry at the School premises. <strong>Rabvik labs will prepare the students for a toe dip in the pool which will become an ocean in a few years and will also give them an opportunity
                            to get real life experience in the world of robotics and
                            automation, AI and IOT.</strong> A toe-dip into the pool which will be their ocean in a few years! A
                        space of 1500-2000 sq foot is necessary to set up the innovation lab in school. <strong style={{ fontWeight: "600" }}>Rabvik
                            Innovations team will build innovation labs in schools from scratch.</strong> <br /> <br />

                        <strong>We will provide all expertise to make your innovation lab</strong> into a centre of excellence with
                        selection of equipments, providing trained mentors for innovations labs, a curriculum
                        developed by <strong>IIT alumni, innovation management in schools, patent management,
                            entrepreneurship development and students startups in school.</strong> We provide our patented
                        application for progress assessment of your innovation lab, so that you can keep a tab on the
                        progress of the Innovation Lab in your school/college.
                    </div>
                    <div className="col-md-4 col-sm-12">

                        <img src="images/robot.gif" className="robot-img" alt="robot-gif" />

                    </div>
                </div>


                <div className="row" >
                    <div className="col-lg-4 col-md-6 ">
                        <div className="img-card">
                            <img src="images/innovation-lab-1.jpg" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <div className="img-card">
                            <img src="images/innovation-lab-2.jpg" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <div className="img-card">
                            <img src="images/innovation-lab-3.jpg" />
                        </div>
                    </div>
                </div>


                {/* Our deliverables start */}
                <div className="our-deliverables" >

                    <h2> Our Deliverables</h2>

                    <div className="row mt-5" >

                        <div className="col-md-6 text-left tools">

                            <h3>Technological Tools </h3>
                            <ol className="mt-4">
                                <li>Electronics</li>
                                <li>Robotics & Mechatronics</li>
                                <li>Coding</li>
                                <li>AI/ML</li>
                                <li>Internet of Things</li>
                            </ol>

                        </div>

                        <div className="col-md-6">
                            <img src="images/innovation-lab-4.jpg" style={{ width: "75%", height: "85%" }} />
                        </div>

                    </div>


                    <div className="skill-section mt-5" >

                        <h3>Skills we develop </h3>


                        <div class="row skills">
                            <div class="col-md-4 col-sm-6">
                                <div class="card ">
                                    <div class="card-body">
                                        <FaBrain className="skill-icon" />
                                        <h5 class="card-title">Critical and analytical thinking</h5>

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="card ">
                                    <div class="card-body">
                                        <FaSearch className="skill-icon" />
                                        <h5 class="card-title">Research and study based approach</h5>

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="card ">
                                    <div class="card-body">
                                        <FaLayerGroup className="skill-icon" />
                                        <h5 class="card-title">Prototype Development</h5>

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="card ">
                                    <div class="card-body">
                                        <FaChartBar className="skill-icon" />
                                        <h5 class="card-title">Patent Management</h5>

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="card ">
                                    <div class="card-body">
                                        <FaLightbulb className="skill-icon" />
                                        <h5 class="card-title">Entrepreneurship</h5>

                                    </div>
                                </div>
                            </div>

                        </div>




                    </div>


                </div>
                {/* Our deliverables end */}

            </div >
            <Footer />
        </div >
    );
}

export default InnovationLab;