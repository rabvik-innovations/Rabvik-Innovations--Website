import '../css/InnovationLab.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



function InnovationLab() {
    return (
        <div className="">
            <Navbar />

            <div className="container innovation-lab" >

                <h2> Innovation Labs in Schools </h2>

                <div className="innovation-lab-text">
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




            </div >
            <Footer />
        </div >
    );
}

export default InnovationLab;